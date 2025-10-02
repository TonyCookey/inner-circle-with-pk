import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export function FAQ() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const faqs = [
    {
      question: "Who is PK and what makes this program unique?",
      answer:
        "Dr. Kinglsey Okonkwo is a successful entrepreneur, pastor and mentor who has built multiple 7-figure businesses. The Inner Circle provides direct access to his proven strategies, plus connections with other industry leaders and successful members.",
    },
    {
      question: "What's the time commitment required?",
      answer:
        "Monthly live calls (1-2 hours), plus optional daily community engagement. The more you participate, the more value you'll receive. All sessions are recorded for your convenience.",
    },
    {
      question: "Is this suitable for beginners?",
      answer:
        "While we welcome ambitious men at all levels, the content is designed for serious individuals ready to take action. Basic business knowledge is helpful but not required.",
    },
    {
      question: "Are there additional benefits?",
      answer: "You’ll form deep, lasting friendships with other men in the group, high-caliber connections that will enrich your life and career.",
    },
    {
      question: "How exclusive is the membership?",
      answer:
        "We maintain strict membership limits to ensure quality interactions. Applications are reviewed, and we reserve the right to decline membership to maintain community standards.",
    },
    {
      question: "Are the payments secure?",
      answer:
        "Absolutely. We use industry-leading payment processors (Stripe, PayPal, Paystack, Mainstack) with bank-level security. Your financial information is never stored on our servers.",
    },
    {
      question: "What if I can't afford the program?",
      answer:
        "We understand that financial situations vary. If you're genuinely interested in the program but facing financial constraints, please reach out to our team. Flexible subscription options are available: yearly, half-year, or quarterly plans.",
    },
    {
      question: "What happens if I miss a live session?",
      answer:
        "All live sessions are recorded and made available to members within 24 hours. You'll also receive session summaries and key takeaways via email.",
    },
  ];

  const toggleItem = (index: number) => {
    setOpenItems((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]));
  };

  return (
    <section id="faqs" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Frequently Asked <span className="text-gradient-gold">Questions</span>
          </h2>
          <p className="text-md text-gray-300">Get answers to common questions about the Inner Circle membership</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-gray-800/50 border border-gray-700 rounded-lg overflow-hidden">
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-6 py-6 text-left flex justify-between items-center hover:bg-gray-800/30 transition-colors"
              >
                <h3 className="text-md font-semibold text-white pr-4">{faq.question}</h3>
                {openItems.includes(index) ? (
                  <ChevronUp className="h-5 w-5 text-yellow-500 flex-shrink-0" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-400 flex-shrink-0" />
                )}
              </button>

              {openItems.includes(index) && (
                <div className="px-6 pb-6">
                  <p className="text-sm text-gray-300 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-400 mb-4">Still have questions?</p>
          <a href="mailto:mentalitywithpk@gmail.com" className="text-yellow-500 hover:text-yellow-400 font-semibold transition-colors">
            Contact our team directly
          </a>
        </div>
      </div>
    </section>
  );
}
