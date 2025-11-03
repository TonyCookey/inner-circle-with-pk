import { Target, Compass, Rocket, Crown, Users, Zap, Calendar, Award, Play, Sparkles, ArrowRight, ChevronUp, ChevronDown } from "lucide-react";
import { useState } from "react";

interface PricingProps {
  onSelectTier: (tier: string) => void;
}
export function About({ onSelectTier }: PricingProps) {
  const [openAccordion, setOpenAccordion] = useState<number | null>(0);
  const programDetails = [
    {
      title: "PK's Vision for the Inner Circle",
      description: [
        "I’m sitting right now at the center of my dreams. The life I’m living today is exactly what I envisioned and created five years ago. And here’s the incredible thing: you can do the same. You can design where you want to be in the next five years and actually get there. I know this because I’ve done it myself.",

        "This is the heart of the Inner Circle VIP Coaching for Men: a one-year coaching experience designed for ambitious, driven men who want to become the best version of themselves. Over the course of a year, we’ll work together to intentionally create the next five years of your life.",
      ],
      features: [],
    },
    {
      title: "Why This Program Exists",
      description: [
        "I started this coaching program for two key reasons.",
        "First, I discovered that most men are robbed of living a complete, fulfilling life because of how our brains are wired. Science shows that a man’s brain is built for focus. We naturally excel at doing one thing well at a time. But this often leads to imbalance: men who succeed in business or career frequently let other areas like family, health, or faith suffer. Many men simply haven’t been taught how to live holistically, and that’s what we aim to change.",
        "Second, I stumbled upon the extraordinary power of a five-year goal. Most people overestimate what they can achieve in a single year and underestimate what they can achieve in five. This is why so many New Year’s resolutions fail, they don’t allow enough time for the necessary steps to unfold. But give yourself five years, apply the right principles, and almost nothing is impossible.",
        "Five years ago, my wife asked me a powerful question: “What would you like to see in your life when you turn 50?” I wrote down seven key things I wanted to achieve. Today, I’m living every single one of them. I’m literally sitting in one of those dreams as I record this. That’s the miracle of a well-set five-year goal.",
      ],
      features: [],
    },
    {
      title: "Core Areas",
      description: ["Our Focus for the Inner Circle will be on these Core Areas of Life:"],
      features: ["Faith", "Family", "Fatherhood", "Finance", "Fitness ", "Fulfillment", "Friendships", "Freedom", "Faithfulness", "Future"],
    },
    {
      title: "What You’ll Learn",
      description: [
        "The Inner Circle program is the most extensive men’s coaching experience I’ve ever seen—both in time and content. Across the year, we’ll cover critical areas of life and success, including:",
      ],
      features: [
        "Scaling Your Life and Business",
        "Leadership",
        "Financial Mastery",
        "Investments and Wealth Building",
        "Fatherhood and Family",
        "Health and Longevity",
        "Goal Setting",
        "Pattern Recognition",
        "The Formula for Happiness",
        "Relationships & Marriage",
        "Message to Movement",
        "Life’s Laws",
        "Spiritual Growth",
        "Personal Growth",
        "And Much More.",
      ],
    },
    {
      title: "World Class Mentors",
      description: [
        "You’ll also gain access to an extraordinary lineup of guest coaches and speakers, including top leaders, entrepreneurs, and experts in finance, health, leadership, and family life",
        "These are individuals whose one-on-one sessions normally cost thousands of dollars, but as part of this program, you’ll learn directly from their experience.",
      ],
      features: [
        "Prof. Yemi Osinbajo",
        "Dr. Sam Adeyemi",
        "Dr. Cosmas Maduka",
        "Vusi Thembekwayo",
        "Dr. Olumide Emmanuel",
        "Kunle Soriyan",
        "Wale Oyedeji",
        "Dr. Albert Oduwole",
        "Mildred Kingsley-Okonkwo",
        "Dr. Shade Zahrai",
        "Niyi Adesanya",
        "Dr. Tony Akinyemi",
        "Tunji Babajide",
        "Kola Adesina",
        "Aproko Doctor",
        "And More...",
      ],
    },
    {
      title: "Program Structure",
      description: [
        "The program runs for one full year, with at least two virtual meetings each month. All sessions are online, so you can join from anywhere in the world. If you miss a live session, replays will be available. Between meetings, you’ll engage with a private group for assessments, support, and peer-to-peer mentoring, a powerful network of like-minded men who are on the same journey.",
        "The goal of the year-long structure is to sustain your momentum. Many people experience bursts of inspiration that fade over time. But when you stay plugged in for a full year, surrounded by motivated men, it’s almost impossible not to see results.",
      ],
      features: [],
    },
    {
      title: "Who It’s For",
      description: [
        "This program is strictly for men of all ages, from anywhere in the world. Whether you’re married or single, young or mature, you can join. Women can also register their husbands, fiancés, or partners as a gift that will transform their lives.",
      ],
      features: [],
    },
  ];

  const pillars = [
    {
      icon: Crown,
      title: "Elite Membership",
      description: "Exclusive access to a community of high-achievers and industry leaders",
      color: "from-blue-500/20 to-blue-600/10",
      borderColor: "border-blue-500/30",
      backgroundImage: "/crowd-mono.jpg",
    },
    {
      icon: Users,
      title: "Expert Mentorship",
      description: "Direct guidance from Dr. Kingsley Okonkwo and world-class guest speakers",
      color: "from-purple-500/20 to-purple-600/10",
      borderColor: "border-purple-500/30",
      backgroundImage: "/pk-sitting-on-couch-1.jpg",
    },
    {
      icon: Rocket,
      title: "Exponential Growth",
      description: "Accelerate your personal and professional development through mentorship",
      color: "from-yellow-500/20 to-yellow-600/10",
      borderColor: "border-yellow-500/30",
      backgroundImage: "/pk-preaching-mono.jpg",
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
  const toggleAccordion = (index: number) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  return (
    <section id="about" className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden" aria-labelledby="about-heading">
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
        <div className="text-center mb-10">
          <div className="inline-flex items-center space-x-3 glass-ultra px-8 py-4 rounded-full mb-8 shadow-glow">
            <Sparkles className="h-5 w-5 text-yellow-500 animate-pulse" />
            <span className="text-sm font-medium text-gray-300 tracking-wider uppercase">The Inner Circle Experience</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">
            <span className="text-gradient-premium">Your Game Plan for the </span>
            <span className="text-gradient-gold">Next Five Years</span>
          </h2>

          <div className="max-w-5xl mx-auto space-y-6 text-md md:text-xl text-gray-300 leading-relaxed">
            {/* <p>
              The Inner Circle isn't just another program,{" "}
              <span className="text-yellow-500 font-semibold">it's your game plan for the next five years of your life.</span>
            </p> */}
            <p>
              Watch <span className="text-yellow-500 font-semibold">Dr. Kingsley Okonkwo</span>, explain the vision and impact of the Inner Circle community.
            </p>
          </div>
        </div>

        {/* YouTube Video Section */}
        <div className="mb-20">
          <div className="relative max-w-4xl mx-auto">
            {/* Background glow */}
            <div className="absolute -inset-4 bg-gradient-to-r from-yellow-500/20 via-yellow-600/10 to-yellow-500/20 rounded-3xl blur-2xl opacity-60"></div>

            {/* Video container */}
            <div className="relative glass-ultra rounded-3xl p-2 border border-yellow-500/20">
              <div className="relative aspect-video rounded-2xl overflow-hidden bg-gray-800">
                <iframe
                  src="https://www.youtube.com/embed/XokkKtin7mw?si=SqV7pB9tn29vQPt0"
                  title="Inner Circle with PK - Introduction"
                  className="w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>

                {/* Fallback play button overlay (if needed) */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="glass-ultra p-6 rounded-full">
                    <Play className="h-12 w-12 text-yellow-500" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Program Details Accordion */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-4xl md:text-5xl font-black mb-6 text-gradient-premium">
              What's Inside the <span className="text-gradient-gold">Inner Circle</span>
            </h3>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Explore each component of your transformational journey and discover the comprehensive support system designed for your success
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {programDetails.map((item, index) => (
              <div key={index} className="group relative" style={{ animationDelay: `${index * 0.1}s` }}>
                {/* Background glow */}
                <div className="absolute -inset-2 bg-gradient-to-r from-yellow-500/10 via-yellow-600/5 to-yellow-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Main accordion item */}
                <div className="relative glass-ultra rounded-2xl border border-white/10 group-hover:border-yellow-500/30 transition-all duration-300 overflow-hidden">
                  {/* Header */}
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-white/5 transition-colors duration-300"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="glass-ultra p-3 rounded-xl border border-yellow-500/20">
                        <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></div>
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-white group-hover:text-yellow-500 transition-colors duration-300">{item.title}</h4>
                        {/* <p className="text-gray-400 text-sm mt-1">Click to explore details</p> */}
                      </div>
                    </div>

                    <div className="flex-shrink-0">
                      {openAccordion === index ? (
                        <ChevronUp className="h-6 w-6 text-yellow-500 transition-transform duration-300" />
                      ) : (
                        <ChevronDown className="h-6 w-6 text-gray-400 group-hover:text-yellow-500 transition-colors duration-300" />
                      )}
                    </div>
                  </button>

                  {/* Content */}
                  {openAccordion === index && (
                    <div className="px-8 pb-8 animate-slide-up">
                      <div className="border-t border-white/10 pt-6">
                        {Array.isArray(item.description) ? (
                          item.description.map((desc, descIndex) => (
                            <p key={descIndex} className="text-gray-300 leading-relaxed mb-4 text-sm">
                              {desc}
                            </p>
                          ))
                        ) : (
                          <p className="text-gray-300 leading-relaxed mb-6 text-md">{item.description}</p>
                        )}

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {item.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center space-x-3 group/feature">
                              <div className="glass-ultra p-2 rounded-lg border border-yellow-500/20 group-hover/feature:border-yellow-500/40 transition-colors duration-300">
                                <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full"></div>
                              </div>
                              <span className="text-gray-200 group-hover/feature:text-white transition-colors duration-300">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
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

          <div className="hidden grid grid-cols-1 md:grid-cols-3 gap-8">
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((pillar, index) => (
              <div key={index} className="group relative" style={{ animationDelay: `${index * 0.2}s` }}>
                {/* Background glow */}
                <div
                  className={`absolute -inset-4 bg-gradient-to-br ${pillar.color} rounded-3xl blur-xl opacity-60 group-hover:opacity-80 transition-opacity duration-500`}
                ></div>

                {/* Main card */}
                <div
                  className={`relative glass-ultra rounded-3xl overflow-hidden border ${pillar.borderColor} group-hover:scale-105 transition-all duration-500 h-full text-center`}
                >
                  {/* Background image */}
                  <div className="absolute inset-0">
                    <img
                      src={pillar.backgroundImage}
                      alt={pillar.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    {/* Dark overlay for text readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20"></div>
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500"></div>
                  </div>

                  {/* Content overlay */}
                  <div className="relative z-10 p-8 h-200 flex flex-col justify-end">
                    {/* Icon with glow effect */}
                    {/* <div className="relative inline-block mb-6">
                      <pillar.icon className="h-16 w-16 text-yellow-500 mx-auto group-hover:scale-110 transition-transform duration-300" />
                      <div className="absolute inset-0 bg-yellow-500/30 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div> */}

                    <p className="text-2xl font-black text-yellow-600 mb-4 group-hover:text-yellow-500 transition-colors duration-300">{pillar.title}</p>
                    <p className="text-gray-300 leading-relaxed text-md">{pillar.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-20 flex justify-center align-center">
          {/* <a href="https://mainstack.store/ldmproducts/pks-inner-circle" className="btn-ultra group px-20 py-5 flex items-center justify-center space-x-2">
            <span> Register Now</span>
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </a> */}
          <button
            onClick={() => onSelectTier("inner-circle")}
            className="px-10 py-5 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 btn-ultra hover:bg-yellow-600 text-gray-900 shadow-lg hover:shadow-xl"
          >
            Join the Inner Circle Now
          </button>
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
              Join an exclusive community of ambitious individuals who refuse to settle for ordinary.{" "}
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
