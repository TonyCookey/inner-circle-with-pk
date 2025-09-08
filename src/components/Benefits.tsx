import { Check, Video, MessageCircle, BookOpen, Calendar } from "lucide-react";

export function Benefits() {
  const benefits = [
    {
      icon: Video,
      title: "Exclusive Live Sessions",
      description: "Monthly live calls with PK and special guests sharing insider strategies",
    },
    {
      icon: MessageCircle,
      title: "Private Community",
      description: "Access to our exclusive Discord/Telegram group for daily discussions and networking",
    },
    {
      icon: BookOpen,
      title: "Resource Library",
      description: "Curated collection of books, courses, and resources from successful entrepreneurs",
    },
    {
      icon: Calendar,
      title: "1-on-1 Opportunities",
      description: "Quarterly opportunities for private mentoring sessions with PK and guests",
    },
  ];

  const outcomes = [
    "Develop unshakeable confidence and leadership presence",
    "Build and scale profitable business ventures",
    "Master the mindset of high-performers",
    "Create lasting wealth and financial freedom",
    "Develop powerful networking and relationship skills",
    "Access exclusive business opportunities and partnerships",
  ];

  return (
    <section id="benefits" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">What You'll Experience</h2>

            <div className="space-y-6 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="bg-yellow-500/20 p-3 rounded-lg">
                    <benefit.icon className="h-6 w-6 text-yellow-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                    <p className="text-gray-300">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700">
            <h3 className="text-2xl font-bold mb-6 text-center">Transformation Outcomes</h3>
            <div className="space-y-4">
              {outcomes.map((outcome, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <Check className="h-5 w-5 text-yellow-500 flex-shrink-0" />
                  <span className="text-gray-200">{outcome}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-yellow-500/10 rounded-lg border border-yellow-500/30">
              <p className="text-center text-yellow-200 font-medium">
                "The caliber of men in this circle is unmatched. The insights and connections I've gained have been game-changing for my business and personal
                growth."
              </p>
              <p className="text-center text-yellow-500 mt-2 font-semibold">- Marcus T., Yearly Member</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
