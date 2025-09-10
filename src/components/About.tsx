import { Target, Compass, Rocket, Crown, Users, Zap, Calendar, Award, Sparkles, ArrowRight } from "lucide-react";

export function About() {
  const pillars = [
    {
      icon: Crown,
      title: "Elite Membership",
      description: "Exclusive access to a carefully curated community of high-achievers and industry leaders",
      color: "from-blue-500/20 to-blue-600/10",
      borderColor: "border-blue-500/30",
    },
    {
      icon: Users,
      title: "Expert Mentorship",
      description: "Direct guidance from Dr. Kingsley Okonkwo and world-class guest speakers",
      color: "from-purple-500/20 to-purple-600/10",
      borderColor: "border-purple-500/30",
    },
    {
      icon: Rocket,
      title: "Exponential Growth",
      description: "Accelerate your personal and professional development through proven frameworks and mentorship",
      color: "from-yellow-500/20 to-yellow-600/10",
      borderColor: "border-yellow-500/30",
    },
  ];

  const features = [
    {
      icon: Crown,
      title: "Elite Membership",
      description: "Exclusive access to a carefully curated community of high-achievers and industry leaders",
    },
    {
      icon: Users,
      title: "Expert Mentorship",
      description: "Direct guidance from Dr. Kingsley Okonkwo and world-class guest speakers",
    },
    {
      icon: Zap,
      title: "Proven Systems",
      description: "Battle-tested frameworks and strategies that deliver measurable results",
    },
    {
      icon: Calendar,
      title: "5-Year Vision",
      description: "Comprehensive game plan designed to transform your next five years",
    },
  ];

  return (
    <section id="about" className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Ultra-modern background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-black"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(245,158,11,0.1)_0%,transparent_60%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,rgba(59,130,246,0.05)_0%,transparent_60%)]"></div>

      {/* Floating geometric elements */}
      <div className="absolute top-32 left-20 w-80 h-80 bg-gradient-to-br from-yellow-500/15 to-transparent rounded-full blur-3xl animate-float"></div>
      <div
        className="absolute bottom-32 right-20 w-96 h-96 bg-gradient-to-tl from-blue-500/10 to-transparent rounded-full blur-3xl animate-float"
        style={{ animationDelay: "3s" }}
      ></div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(245,158,11,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(245,158,11,0.05)_1px,transparent_1px)] bg-[size:100px_100px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-3 glass-ultra px-8 py-4 rounded-full mb-8 shadow-glow">
            <Sparkles className="h-5 w-5 text-yellow-500 animate-pulse" />
            <span className="text-sm font-medium text-gray-300 tracking-wider uppercase">The Inner Circle Experience</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">
            <span className="text-gradient-premium">Your Game Plan for the </span>
            <span className="text-gradient-gold">Next Five Years</span>
          </h2>

          <div className="max-w-5xl mx-auto space-y-6 text-md md:text-xl text-gray-300 leading-relaxed">
            <p>
              The Inner Circle isn't just another program,{" "}
              <span className="text-yellow-500 font-semibold">it's your game plan for the next five years of your life.</span>
            </p>
            <p>
              Led by renowned mentor, marriage coach, and life strategist <span className="text-yellow-500 font-semibold">Dr. Kingsley Okonkwo</span>, this
              elite, members-only experience is built for individuals who are ready to grow Exponentially in all facets of life.
            </p>
          </div>
        </div>

        {/* Three Pillars Section */}
        <div className="mb-20">
          <div className="hidden text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-black mb-4 text-gradient-premium">The E's of Inner Circle</h3>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Every aspect of the Inner Circle is designed around these core principles that drive lasting change
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((pillar, index) => (
              <div key={index} className="group relative" style={{ animationDelay: `${index * 0.2}s` }}>
                {/* Background glow */}
                <div
                  className={`absolute -inset-4 bg-gradient-to-br ${pillar.color} rounded-3xl blur-xl opacity-60 group-hover:opacity-80 transition-opacity duration-500`}
                ></div>

                {/* Main card */}
                <div
                  className={`relative glass-ultra rounded-3xl p-8 border ${pillar.borderColor} group-hover:scale-105 transition-all duration-500 h-full text-center`}
                >
                  {/* Icon with glow effect */}
                  <div className="relative inline-block mb-6">
                    <pillar.icon className="h-16 w-16 text-yellow-500 mx-auto group-hover:scale-110 transition-transform duration-300" />
                    <div className="absolute inset-0 bg-yellow-500/30 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  <h4 className="text-2xl font-black text-white mb-4 group-hover:text-yellow-500 transition-colors duration-300">{pillar.title}</h4>

                  <p className="text-gray-300 leading-relaxed">{pillar.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-20 flex justify-center align-center">
          <a href="https://mainstack.store/ldmproducts/pks-inner-circle" className="btn-ultra group px-20 py-5 flex items-center justify-center space-x-2">
            <span> Register Now</span>
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Features Grid */}
        <div className="hidden mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-black mb-4 text-gradient-premium">What Makes Us Different</h3>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              This isn't just mentorship—it's a complete transformation ecosystem designed for serious individuals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group glass-ultra rounded-3xl p-6 border border-white/10 hover:border-yellow-500/30 transition-all duration-500 hover:scale-105"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-center">
                  <div className="relative inline-block mb-4">
                    <feature.icon className="h-10 w-10 text-yellow-500 mx-auto group-hover:scale-110 transition-transform duration-300" />
                    <div className="absolute inset-0 bg-yellow-500/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  <h4 className="text-lg font-bold text-white mb-3 group-hover:text-yellow-500 transition-colors duration-300">{feature.title}</h4>

                  <p className="text-gray-300 text-sm leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className="hidden relative">
          {/* Background effects */}
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 via-yellow-600/5 to-yellow-500/10 rounded-3xl blur-2xl"></div>

          {/* Main content */}
          <div className="relative glass-ultra rounded-3xl p-12 border border-yellow-500/20 text-center">
            <div className="relative inline-block mb-8">
              <Award className="h-16 w-16 text-yellow-500 mx-auto animate-float" />
              <div className="absolute inset-0 bg-yellow-500/30 rounded-full blur-xl animate-glow"></div>
            </div>

            <h3 className="text-3xl md:text-4xl font-black mb-6 text-gradient-premium">Ready to Transform Your Next Five Years?</h3>

            <p className="text-gray-300 leading-relaxed mb-8 max-w-3xl mx-auto text-lg">
              Join an exclusive community of ambitious individuals who refuse to settle for ordinary.
              <span className="text-yellow-500 font-semibold"> Your transformation starts here.</span>
            </p>

            <button className="btn-ultra group">
              <span>Begin Your Journey</span>
              <Rocket className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
