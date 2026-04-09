import { Handler } from "@netlify/functions";
import { Client } from "pg";

const getClient = () => {
  const connectionString = process.env.NETLIFY_DATABASE_URL || process.env.DATABASE_URL;
  if (!connectionString) {
    throw new Error("NETLIFY_DATABASE_URL / DATABASE_URL is not set");
  }
  return new Client({ connectionString });
};

const getRedirectUrl = (paymentMethod: string, tier: string) => {
  const links: Record<string, Record<string, string>> = {
    stripe: {
      monthly: "https://buy.stripe.com/8x29AS7eQ74GaeW5YD7Re0C",
      quarterly: "https://buy.stripe.com/8x2bJ06aM1KmgDk4Uz7Re0E",
      "bi-annual": "https://buy.stripe.com/dRm14m42EagS2Mu4Uz7Re0D",
      annual: "https://buy.stripe.com/3cI4gybv6fBc72KbiX7Re0F",
    },
    paystack: {
      monthly: "https://paystack.shop/pay/ak8zkqxmc9",
      quarterly: "https://paystack.shop/pay/pcb3nxut8s",
      "bi-annual": "https://paystack.shop/pay/8hbiskh2-k",
      annual: "https://paystack.shop/pay/wwo-sj1eo9",
    },
  };

  const methodLinks = links[paymentMethod.toLowerCase()];
  if (!methodLinks) return null;
  return methodLinks[tier.toLowerCase()] || null;
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

  const { firstName, lastName, email, phone, occupation, tier, paymentMethod } = payload;

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

    const redirect = getRedirectUrl(paymentMethod, tier);
    return {
      statusCode: 201,
      body: JSON.stringify({ success: true, id: res.rows[0]?.id, redirect }),
    };
  } catch (err: any) {
    console.error("DB error:", err);
    return { statusCode: 500, body: JSON.stringify({ error: "Server error" }) };
  } finally {
    await client.end();
  }
};
