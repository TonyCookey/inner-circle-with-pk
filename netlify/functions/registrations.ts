import { Handler } from "@netlify/functions";
import { Client } from "pg";

const REDIRECT_URL = "https://checkout.mainstack.co/ldmproducts/1mbwKVIPSts8";

const getClient = () => {
  const connectionString = process.env.NEON_DATABASE_URL || process.env.DATABASE_URL;
  if (!connectionString) {
    throw new Error("NEON_DATABASE_URL / DATABASE_URL is not set");
  }
  return new Client({ connectionString });
};

export const handler: Handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: JSON.stringify({ error: "Method not allowed" }) };
  }

  let payload;
  try {
    payload = JSON.parse(event.body || "{}");
  } catch (err) {
    console.error("Failed to parse JSON:", err);
    return { statusCode: 400, body: JSON.stringify({ error: "Invalid JSON" }) };
  }

  // honeypot check
  if (payload["bot-field"]) {
    return { statusCode: 400, body: JSON.stringify({ error: "Bot detected" }) };
  }

  const { firstName, lastName, email, phone, occupation, tier } = payload;

  if (!firstName || !lastName || !email || !phone || !occupation) {
    return { statusCode: 400, body: JSON.stringify({ error: "Missing required fields" }) };
  }

  const client = getClient();

  try {
    await client.connect();

    const insertText = `
      INSERT INTO registrations ("firstName", "lastName", email, phone, occupation, tier, created_at)
      VALUES ($1, $2, $3, $4, $5, $6, NOW())
      RETURNING id
    `;
    const values = [firstName, lastName, email, phone, occupation, tier];
    const res = await client.query(insertText, values);

    return {
      statusCode: 201,
      body: JSON.stringify({ success: true, id: res.rows[0]?.id, redirect: REDIRECT_URL }),
    };
  } catch (err: any) {
    console.error("DB error:", err);
    return { statusCode: 500, body: JSON.stringify({ error: "Server error" }) };
  } finally {
    await client.end();
  }
};
