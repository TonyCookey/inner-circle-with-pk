import { Shield, Trophy, Zap, Network } from "lucide-react";

export function About() {
  const features = [
    {
      icon: Shield,
      title: "Exclusive Access",
      description: "Limited membership ensures personalized attention and meaningful connections with fellow high-achievers.",
    },
    {
      icon: Trophy,
      title: "Proven Mentorship",
      description: "Learn directly from PK and industry leaders who have built successful businesses and transformed lives.",
    },
    {
      icon: Zap,
      title: "Actionable Strategies",
      description: "Get practical, battle-tested strategies that you can implement immediately to accelerate your growth.",
    },
    {
      icon: Network,
      title: "Elite Network",
      description: "Connect with like-minded men who share your ambition and commitment to excellence and success.",
    },
  ];

  return (
    <section id="about" className="hidden py-20 px-4 sm:px-6 lg:px-8 bg-white-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Why Inner Circle?</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            This isn't just another program. It's a carefully curated community where serious men come to level up their lives, businesses, and mindset through
            direct access to proven mentorship.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-900/50 p-8 rounded-xl border border-gray-700 hover:border-yellow-500/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="mb-6">
                <feature.icon className="h-12 w-12 text-yellow-500" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">{feature.title}</h3>
              <p className="text-gray-300 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
