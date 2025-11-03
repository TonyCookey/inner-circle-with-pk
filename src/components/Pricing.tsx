import { Check, Calendar, CreditCard, Zap, Star, Crown, ArrowRight } from "lucide-react";

interface PricingProps {
  onSelectTier: (tier: string) => void;
}

export function Pricing({ onSelectTier }: PricingProps) {
  const plans = [
    {
      id: "quarterly",
      name: "Quarterly",
      price: 450,
      originalPrice: null,
      period: "3 months",
      icon: Zap,
      description: "Pay in four installments",
      savings: null,
      color: "from-blue-500/20 to-blue-600/10",
      borderColor: "border-blue-500/30",
      buttonStyle: "btn-secondary hover:bg-blue-600 text-white",
    },
    {
      id: "biannual",
      name: "Bi-Annual",
      price: 800,
      originalPrice: null,
      period: "6 months",
      icon: Star,
      description: "Pay in two installments",
      savings: "Save $200",
      color: "from-purple-500/20 to-purple-600/10",
      borderColor: "border-purple-500/30",
      buttonStyle: "btn-secondary hover:bg-purple-600 text-white",
    },
    {
      id: "yearly",
      name: "Annual",
      price: 1500,
      originalPrice: null,
      icon: Crown,
      description: "Pay once",
      savings: "Save $300",
      color: "from-yellow-500/30 to-yellow-600/20",
      borderColor: "border-yellow-500/30",
      buttonStyle: "btn-ultra hover:bg-yellow-600 text-gray-900",
      popular: true,
    },
  ];

  const features = [
    "Monthly live group mentoring calls with PK",
    "Access to exclusive Inner Circle community",
    "Guest expert sessions and masterclasses",
    "Comprehensive resource library and templates",
    "Networking opportunities with fellow members",
    "Priority Q&A access during live sessions",
    "Recorded sessions for flexible learning",
    "Business strategy frameworks and tools",
    "Personal development action plans",
    "1-on-1 mentoring session opportunities",
  ];

  return (
    <section id="pricing" className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Modern background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-black"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(245,158,11,0.1)_0%,transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,rgba(59,130,246,0.05)_0%,transparent_50%)]"></div>

      {/* Floating elements */}
      <div className="absolute top-32 left-20 w-64 h-64 bg-gradient-to-br from-yellow-500/10 to-transparent rounded-full blur-3xl animate-float"></div>
      <div
        className="absolute bottom-32 right-20 w-80 h-80 bg-gradient-to-tl from-purple-500/8 to-transparent rounded-full blur-3xl animate-float"
        style={{ animationDelay: "3s" }}
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-3 glass-ultra px-8 py-4 rounded-full mb-6">
            <CreditCard className="h-5 w-5 text-yellow-500" />
            <span className="text-sm font-medium text-gray-300 tracking-wider uppercase">Flexible Payment Options</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
            <span className="text-gradient-premium">Choose Your </span>
            <span className="text-gradient-gold">Payment Plan</span>
          </h2>

          <p className="text-md md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Same exclusive access, same premium mentoring experience.{" "}
            <span className="text-yellow-500 font-semibold"> Choose the payment schedule that works best for you.</span>
          </p>
        </div>

        {/* Payment Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {plans.map((plan, index) => (
            <div key={plan.id} className="group relative" style={{ animationDelay: `${index * 0.1}s` }}>
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="glass-ultra border border-yellow-500/40 px-6 py-2 rounded-full">
                    <span className="text-yellow-400 font-bold text-sm ">Most Popular</span>
                  </div>
                </div>
              )}

              {/* Background glow */}
              <div
                className={`absolute -inset-2 bg-gradient-to-br ${plan.color} rounded-3xl blur-xl opacity-60 group-hover:opacity-80 transition-opacity duration-500`}
              ></div>

              {/* Main card */}
              <div className={`relative glass-ultra rounded-3xl p-8 border ${plan.borderColor} group-hover:scale-105 transition-all duration-500 h-full`}>
                {/* Header */}
                <div className="text-center">
                  <div className="relative inline-block mb-6 mt-2">
                    <plan.icon className="h-12 w-12 text-yellow-500 mx-auto" />
                    <div className="absolute inset-0 bg-yellow-500/20 rounded-full blur-lg animate-glow"></div>
                  </div>

                  <h3 className="text-2xl font-black text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-400 mb-4">{plan.description}</p>

                  {/* Price */}
                  <div className="mb-4 flex items-end justify-center gap-3">
                    {plan.originalPrice && <span className="text-3xl font-bold text-gray-400 line-through">${plan.originalPrice}</span>}
                    <span className="text-4xl font-black text-white">${plan.price}</span>
                    <span className="text-gray-400 text-lg">{plan.period ? `/ ${plan.period}` : null}</span>
                  </div>

                  {/* Savings badge */}
                  {plan.savings && (
                    <div className="inline-flex items-center space-x-2 glass-ultra border border-green-500/30 px-4 py-2 rounded-full">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-green-400 font-bold text-sm">{plan.savings}</span>
                    </div>
                  )}
                </div>

                {/* Action button */}
                {/* <button
                  onClick={() => onSelectTier(plan.id)}
                  className={`w-full py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 ${plan.buttonStyle} shadow-lg hover:shadow-xl`}
                >
                  Choose {plan.name}
                </button> */}
              </div>
            </div>
          ))}
        </div>
        <div className="mb-20 mt-20 flex justify-center align-center">
          {/* <a
            href="https://mainstack.store/ldmproducts/pks-inner-circle"
            className="btn-ultra group px-10 md:px-20 py-5 flex items-center justify-center space-x-2"
          >
            <span> Join the Inner Circle Now</span>
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </a> */}
          <button
            onClick={() => onSelectTier("inner-circle")}
            className="px-10 py-5 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 btn-ultra hover:bg-yellow-600 text-gray-900 shadow-lg hover:shadow-xl"
          >
            Join the Inner Circle Now
          </button>
        </div>

        {/* What's Included Section */}
        <div className="relative">
          {/* Background effects */}
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/5 via-purple-500/5 to-blue-500/5 rounded-3xl blur-2xl"></div>

          <div className="relative glass-ultra rounded-3xl p-12 border border-white/10">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-black mb-6 text-gradient-premium">What's Included in Every Plan</h3>
              <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                Regardless of your payment schedule, you get full access to all Inner Circle benefits and experiences.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-4 group" style={{ animationDelay: `${index * 0.05}s` }}>
                  <div className="glass-ultra p-2 rounded-lg border border-yellow-500/20 group-hover:border-yellow-500/40 transition-colors duration-300">
                    <Check className="h-5 w-5 text-yellow-500" />
                  </div>
                  <span className="text-gray-200 group-hover:text-white transition-colors duration-300">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="hidden text-center mt-16">
          <div className="glass-ultra rounded-2xl p-8 border border-white/10 max-w-2xl mx-auto">
            <Calendar className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
            <h4 className="text-xl font-bold text-white mb-4">Flexible & Risk-Free</h4>
            <p className="text-gray-300 mb-4">30-day satisfaction guarantee • Cancel anytime • Upgrade or downgrade your payment plan</p>
            <p className="text-sm text-gray-500">All plans provide identical access to mentoring, community, and resources.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
