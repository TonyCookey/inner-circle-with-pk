import { Check, Crown, Star, Zap } from "lucide-react";

interface PricingProps {
  onSelectTier: (tier: string) => void;
}

export function PricingOld({ onSelectTier }: PricingProps) {
  const tiers = [
    {
      id: "quarterly",
      name: "Quarterly",
      price: 300,
      period: "per quarter",
      icon: Zap,
      description: "Perfect for testing the waters",
      features: ["Monthly live group calls", "Private community access", "Resource library access", "Networking opportunities", "Guest expert sessions"],
      popular: false,
    },
    {
      id: "biannual",
      name: "Bi-Annual",
      price: 550,
      period: "every 6 months",
      icon: Star,
      description: "Most balanced option",
      features: [
        "Everything in Quarterly",
        "Priority Q&A access",
        "Exclusive mastermind sessions",
        "Business strategy templates",
        "1-on-1 session opportunity",
        "Advanced resource vault",
      ],
      popular: false,
    },
    {
      id: "yearly",
      name: "Annual",
      price: 1000,
      period: "per year",
      icon: Crown,
      description: "Maximum value and commitment",
      features: [
        "Everything in Bi-Annual",
        "Guaranteed 1-on-1 sessions",
        "VIP event invitations",
        "Direct access to PK",
        "Business partnership opportunities",
        "Legacy member benefits",
        "Annual exclusive retreat invite",
      ],
      popular: true,
    },
  ];

  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Choose Your Subscription</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Each Subscription is designed to provide maximum value at your commitment level. All membership subscriptions include core mentoring and community
            access.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier) => (
            <div
              key={tier.id}
              className={`relative bg-gray-900/50 rounded-2xl p-8 border transition-all duration-300 hover:transform hover:scale-105 ${
                tier.popular ? "border-yellow-500 shadow-lg shadow-yellow-500/20" : "border-gray-700 hover:border-yellow-500/50"
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-ultra text-gray-900 px-4 py-2 rounded-full text-sm font-semibold">Most Popular</div>
                </div>
              )}

              <div className="text-center mb-8">
                <tier.icon className={`h-12 w-12 mx-auto mb-4 ${tier.popular ? "text-yellow-500" : "text-gray-400"}`} />
                <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                <p className="text-gray-400 mb-4">{tier.description}</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">${tier.price}</span>
                  <span className="text-gray-400 ml-2">{tier.period}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {tier.features.map((feature, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-yellow-500 flex-shrink-0" />
                    <span className="text-gray-200">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => onSelectTier(tier.id)}
                className={`w-full py-4 rounded-lg font-semibold text-lg transition-all duration-300 ${
                  tier.popular
                    ? "bg-ultra hover:bg-yellow-600 text-gray-900"
                    : "bg-gray-800 hover:bg-gray-700 text-white border border-gray-600 hover:border-yellow-500"
                }`}
              >
                Select {tier.name}
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-400 mb-4">All plans include a 30-day satisfaction guarantee</p>
          <p className="text-sm text-gray-500">Membership is exclusive and limited. We reserve the right to decline applications.</p>
        </div>
      </div>
    </section>
  );
}
