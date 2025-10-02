import { Star, Briefcase, TrendingUp, Users, Sparkles, Award, Crown } from "lucide-react";

export function GuestSpeakers() {
  const speakers = [
    {
      name: "Prof. Yemi Osinbajo",
      title: "Former Vice President of Nigeria",
      expertise: "Leadership Development, Governance",
      image: "/yemi-osinbajo.jpg",
      description: "Nigerian lawyer, professor, and politician who served as the 14th vice president of Nigeria from 2015 to 2023.",
    },
    {
      name: "Dr. Sam Adeyemi",
      title: "Leadership Expert & Author",
      expertise: "Leadership Development, Personal Excellence",
      image: "/dr-sam-adeyemi.jpg",
      description: "Renowned leadership expert and founder of Daystar Leadership Academy, Dr. Sam has impacted millions through his teachings on leadership.",
    },
    {
      name: "Dr. Cosmas Maduka",
      title: "Business Mogul & Entrepreneur",
      expertise: "Business Strategy, Entrepreneurship",
      image: "/cosmas-maduka.jpg",
      description:
        "Founder and CEO of Coscharis Group, a multi-billion naira conglomerate. Dr. Maduka is a testament to the power of vision, persistence, and strategic thinking.",
    },
    {
      name: "Vusi Thembekwayo",
      title: "Entrepreneur & Business Expert",
      expertise: "Business Strategy, Entrepreneurship",
      image: "/vusi-thembekwayo.jpg",
      description: " South African entrepreneur, author, investor, speaker and businessman. He is the founder and CEO of the MyGrowthFund Venture Partners",
    },
    {
      name: "Dr. Olumide Emmanuel",
      title: "Leadership & Finance Expert",
      expertise: "Finance & Business",
      image: "/olumide-emmanuel.jpg",
      description:
        "A visionary leader in Real estate and innovation, Dr. Emmanuel brings cutting-edge insights on mental transformation and strategic innovation.",
    },
    {
      name: "Kunle Soriyan",
      title: "Futurist, Strategist & Investor",
      expertise: "Strategy",
      image: "/kunle-soriyan.jpg",
      description: "Renowned Thought leader, Transformation Strategist, and Culture Shaper. He is also a global speaker and a best-selling author.",
    },
    {
      name: "Wale Oyedeji",
      title: " Group Managing Director, FBN Holdings Plc",
      expertise: "Business Growth, Strategic Planning",
      image: "/wale-oyedeji.jpg",
      description: "Seasoned business development expert with a proven track record of scaling businesses and creating sustainable growth strategies.",
    },
    {
      name: "Foluso Phillips",
      title: "Executive Coach & Finance Expert",
      expertise: "Executive Coaching, Performance",
      image: "/foluso-philips.jpeg",
      description: "Elite executive coach specializing in high-performance leadership and strategic thinking for C-level executives and entrepreneurs.",
    },
    {
      name: "Dr. Albert Oduwole",
      title: "Marriage and Relationship Expert",
      expertise: "Marraige & Relationships",
      image: "/dr-albert-oduwole.jpg",
      description: "Relationship, Family & Life coach, Intl Conference Speaker, Best-Selling Author and Founder MarryMatics Consulting",
    },
    {
      name: "Mildred Kingsley-Okonkwo",
      title: "Marriage Coach & Relationship Expert",
      expertise: "Marriage & Relationships",
      image: "/mildred-kingsley-okonkwo.jpg",
      description: "Dynamic Relationship expert and personal development coach with extensive experience in transforming individuals and marraiges.",
    },
    {
      name: "Dr. Shade Zahrai",
      title: "Leadership Strategist",
      expertise: "Leadership Expert",
      image: "/shade-zahrai.webp",
      description: "Award-Winning Leadership Strategist & Global Peak Performance Educator to Fortune 500s",
    },
    {
      name: "Niyi Adesanya",
      title: "Leadership & Development Expert",
      expertise: "Leadership, Personal Development",
      image: "/niyi-adesanya.jpg",
      description: "Dynamic leadership expert and personal development coach with extensive experience in transforming individuals and organizations.",
    },
    {
      name: "Tunji Babajide",
      title: "Leadership Personal Development Coach",
      expertise: "Leadership, Personal Development",
      image: "/tunji-babajide.jpg",
      description: "Dynamic leadership expert and personal development coach with extensive experience in transforming individuals and organizations.",
    },
    {
      name: "Kola Adesina MFR, FNSE",
      title: "Group Managing Director,  Sahara Power Group",
      expertise: "Business & Finance",
      image: "/kola-adesina.jpeg",
      description: "Distinguished entrepreneur with multifaceted expertise across academia, finance, energy, international trade, and diplomacy.",
    },
    {
      name: "Dr. Tony Akinyemi",
      title: "Men’s Health Expert",
      expertise: "Health",
      image: "/tony-akinyemi.jpeg",
      description: "Pioneer Holistic Health Coach in Nigeria. He is a Husband, Father, Nutritionist, Author, Entrepreneur and Engineer",
    },
    {
      name: "Aproko Doctor",
      title: "Health and Fitness Advocate",
      expertise: "Health",
      image: "/aproko-doctor.jpeg",
      description: "Nigerian doctor, health influencer and an actor. He is the founder of Healthy Brands and 100K Club",
    },
  ];

  const expertiseAreas = [
    { icon: Briefcase, area: "Business Strategy", count: "3 Experts", color: "from-blue-500/20 to-blue-600/10" },
    { icon: TrendingUp, area: "Leadership Development", count: "4 Experts", color: "from-green-500/20 to-green-600/10" },
    { icon: Users, area: "Personal Excellence", count: "5 Experts", color: "from-purple-500/20 to-purple-600/10" },
    { icon: Star, area: "Innovation & Growth", count: "3 Experts", color: "from-yellow-500/20 to-yellow-600/10" },
  ];

  return (
    <section id="mentors" className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Ultra-modern background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-black"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(245,158,11,0.08)_0%,transparent_60%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(59,130,246,0.05)_0%,transparent_60%)]"></div>

      {/* Floating geometric elements */}
      <div className="absolute top-32 left-16 w-300 h-300 bg-gradient-to-br from-yellow-500/15 to-transparent rounded-full blur-3xl animate-float"></div>
      <div
        className="absolute bottom-32 right-16 w-96 h-96 bg-gradient-to-tl from-blue-500/10 to-transparent rounded-full blur-3xl animate-float"
        style={{ animationDelay: "4s" }}
      ></div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(245,158,11,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(245,158,11,0.05)_1px,transparent_1px)] bg-[size:80px_80px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-3 glass-ultra px-8 py-4 rounded-full mb-6 shadow-glow">
            <Sparkles className="h-5 w-5 text-yellow-500 animate-pulse" />
            <span className="text-sm font-medium text-gray-300 tracking-wider uppercase">World-Class Faculty</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
            <span className="text-gradient-premium">Guest </span>
            <span className="text-gradient-gold">Mentors</span>
          </h2>

          <p className="text-md md:text-xl text-gray-300 max-w-5xl mx-auto leading-relaxed">
            Learn from <span className="text-yellow-500 font-semibold">industry titans</span> and thought leaders who have built empires, transformed
            industries, and mentored the next generation of successful leaders.
          </p>
        </div>

        {/* Expertise Areas - Modern Cards */}
        <div className="hidden grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {expertiseAreas.map((area, index) => (
            <div key={index} className="group relative overflow-hidden" style={{ animationDelay: `${index * 0.1}s` }}>
              {/* Background gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${area.color} rounded-2xl blur-xl opacity-60 group-hover:opacity-80 transition-opacity duration-500`}
              ></div>

              {/* Main card */}
              <div className="relative glass-ultra p-8 rounded-2xl text-center group-hover:scale-105 transition-all duration-500 border border-white/10 group-hover:border-yellow-500/30">
                <div className="relative">
                  <area.icon className="h-10 w-10 text-yellow-500 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-yellow-500/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <h3 className="font-bold text-white mb-2 text-lg">{area.area}</h3>
                <p className="text-sm text-gray-400 font-medium">{area.count}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Guest Speakers Grid - Ultra Modern */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
          {speakers.map((speaker, index) => (
            <div key={index} className="group relative" style={{ animationDelay: `${index * 0.1}s` }}>
              {/* Floating background glow */}
              <div className="absolute -inset-4 bg-gradient-to-r from-yellow-500/20 via-yellow-600/10 to-yellow-500/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-60 transition-opacity duration-700"></div>

              {/* Main card */}
              <div className="relative card-ultra rounded-3xl overflow-hidden border border-white/10 group-hover:border-yellow-500/30">
                {/* Image section with modern overlay */}
                <div className="relative overflow-hidden">
                  <img src={speaker.image} alt={speaker.name} className="w-full h-100 object-cover group-hover:scale-110 transition-transform duration-700" />

                  {/* Modern gradient overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/40 to-transparent"></div>

                  {/* Name and title overlay */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-2xl font-black text-white mb-1 group-hover:text-yellow-500 transition-colors duration-300 oswald-font">
                      {speaker.name}
                    </h3>
                    <p className="text-yellow-500 font-bold text-sm merriweather-font">{speaker.title}</p>
                  </div>
                </div>

                {/* Content section */}
                <div className="p-6 h-30 ">
                  {/* Expertise badge */}
                  <div className="hidden mb-6">
                    <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-yellow-500/20 to-yellow-600/10 border border-yellow-500/30 px-4 py-2 rounded-full">
                      <Award className="h-4 w-4 text-yellow-500" />
                      <span className="text-yellow-500 font-medium text-sm">{speaker.expertise}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 leading-relaxed text-sm mb-6">{speaker.description}</p>

                  {/* Action button */}
                  <button className="hidden w-full glass-ultra border border-yellow-500/30 text-yellow-500 py-3 rounded-xl font-semibold text-sm hover:bg-yellow-500/10 hover:border-yellow-500/50 transition-all duration-300 group-hover:scale-105">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section - Ultra Modern */}
        <div className="hidden relative">
          {/* Background effects */}
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 via-yellow-600/5 to-yellow-500/10 rounded-3xl blur-2xl"></div>

          {/* Main content */}
          <div className="relative glass-ultra rounded-3xl p-12 border border-yellow-500/20 text-center">
            {/* Floating crown icon */}
            <div className="relative inline-block mb-8">
              <Crown className="h-16 w-16 text-yellow-500 mx-auto animate-float" />
              <div className="absolute inset-0 bg-yellow-500/30 rounded-full blur-xl animate-glow"></div>
            </div>

            <h3 className="text-3xl md:text-4xl font-black mb-6 text-gradient-premium">Exclusive Access to Industry Giants</h3>

            <p className="text-gray-300 leading-relaxed mb-8 max-w-3xl mx-auto text-lg">
              These aren't just speakers - they're your <span className="text-yellow-500 font-semibold">personal mentors</span>. Get direct access to their
              wisdom, strategies, and networks through intimate group sessions, Q&A opportunities, and exclusive masterclasses available only to Inner Circle
              members.
            </p>

            {/* Feature tags */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {["Monthly Masterclasses", "Direct Q&A Access", "Networking Opportunities", "Exclusive Resources"].map((feature, index) => (
                <div
                  key={index}
                  className="glass-ultra px-6 py-3 rounded-full border border-yellow-500/20 hover:border-yellow-500/40 transition-all duration-300 hover:scale-105"
                >
                  <span className="text-yellow-500 font-medium text-sm">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <button className="hidden btn-ultra group">
              <span>Meet Your Mentors</span>
              <Sparkles className="h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
