import { Quote, Sparkles } from "lucide-react";

export function MainMentor() {
  return (
    <section id="meet-pk" className="relative py-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Ultra-modern background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-black"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(245,158,11,0.1)_0%,transparent_50%)] opacity-60"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.05)_0%,transparent_50%)]"></div>

      {/* Floating geometric elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-yellow-500/10 to-transparent rounded-full blur-3xl animate-float"></div>
      <div
        className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-tl from-blue-500/5 to-transparent rounded-full blur-3xl animate-float"
        style={{ animationDelay: "3s" }}
      ></div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(245,158,11,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(245,158,11,0.03)_1px,transparent_1px)] bg-[size:100px_100px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto mb-10">
        {/* Section header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center space-x-3 glass-ultra px-8 py-4 rounded-full mb-6">
            <Sparkles className="h-5 w-5 text-yellow-500 animate-pulse" />
            <span className="text-sm font-medium text-gray-300 tracking-wider uppercase">Meet Your Mentor</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
            <span className="text-gradient-gold">Dr. Kingsley </span>
            <span className="text-gradient-premium">Okonkwo</span>
          </h2>

          <p className="text-md md:text-xl text-gray-300 max-w-5xl mx-auto leading-relaxed">
            Visionary leader, transformational mentor, and architect of success for{" "}
            <span className="text-yellow-500 font-semibold"> millions of leaders worldwide</span>
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-top mt-20">
          {/* Image section with ultra-modern design */}
          <div className="relative group">
            {/* Floating background elements */}
            <div className="absolute -inset-8 bg-gradient-to-r from-yellow-500/10 via-yellow-400/10 to-yellow-500/20 rounded-3xl blur-2xl opacity-60 group-hover:opacity-90 transition-opacity duration-700"></div>
            {/* <div className="absolute -inset-4 bg-gradient-to-br from-yellow-500/30 to-transparent rounded-2xl transform rotate-1 group-hover:rotate-2 transition-transform duration-700"></div> */}

            {/* Main image container */}
            <div className="relative glass-ultra rounded-3xl  group-hover:scale-105 transition-all duration-700">
              <div className="relative overflow-hidden rounded-2xl">
                <img
                  src="/pk.jpg"
                  alt="Pastor Kingsley Okonkwo"
                  className="w-full h-[400px] md:h-[600px] object-cover object-center group-hover:scale-110 transition-transform duration-1000"
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                {/* Floating quote */}
                <div className="hidden absolute bottom-10 left-8 right-8 glass-ultra rounded-2xl p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-700">
                  <Quote className="h-6 w-6 text-yellow-500 mb-4" />
                  <p className="text-white font-medium text-md leading-relaxed">"Excellence is not a destination, it's a way of life."</p>
                </div>
              </div>
            </div>

            {/* Floating achievement badges */}
            <div className="absolute -top-6 -right-6 glass-ultra rounded-2xl p-4 animate-float">
              <div className="text-center">
                <div className="text-xl font-bold text-yellow-500">30+</div>
                <div className="text-xs text-gray-400 font-medium">Years Impact</div>
              </div>
            </div>

            <div className="absolute -bottom-6 -left-6 glass-ultra rounded-2xl p-4 animate-float" style={{ animationDelay: "2s" }}>
              <div className="text-center">
                <div className="text-xl font-bold text-yellow-500">3M+</div>
                <div className="text-xs text-gray-400 font-medium">Lives Transformed</div>
              </div>
            </div>
          </div>

          {/* Content section */}
          <div className="space-y-10">
            {/* Title and description */}
            <div className="space-y-6 px-3">
              <div className="space-y-2">
                <h3 className="text-2xl md:text-2xl font-black text-gradient-premium tracking-wide">Founder & Lead Mentor</h3>
                {/* <p className="text-xl text-yellow-500 font-bold">Founder & Lead Mentor</p> */}
              </div>

              <div className="space-y-6 text-gray-300 leading-relaxed text-md">
                <p className="text-md leading-relaxed">
                  Dr. Kingsley is a <span className="text-yellow-500 font-semibold">visionary leader</span> and transformational mentor who has dedicated his
                  life to developing exceptional leaders and building thriving communities across the globe.
                </p>
                <p>
                  With over two decades of experience in leadership development, strategic planning, and personal transformation, PK has mentored thousands of
                  individuals across various industries, helping them unlock their potential and achieve extraordinary success.
                </p>
                <p>
                  His unique approach combines <span className="text-yellow-500 font-semibold">spiritual wisdom</span>, practical business acumen, and proven
                  leadership principles to create a comprehensive mentoring experience that transforms both personal and professional lives.
                </p>
              </div>
            </div>

            {/* Mission statement */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 to-yellow-600/5 rounded-3xl blur-xl"></div>
              <div className="relative glass-ultra rounded-3xl p-8 border border-yellow-500/20">
                <div className="flex items-start space-x-4">
                  <div className="glass-ultra p-3 rounded-xl">
                    <Quote className="h-6 w-6 text-yellow-500" />
                  </div>
                  <div>
                    <blockquote className="text-sm md:text-xl text-white leading-relaxed mb-2 playfair-font font-style-italic">
                      " My mission is to raise a generation of leaders who will impact their communities, industries, and nations with excellence, integrity,
                      and purpose. "
                    </blockquote>
                    <cite className="text-yellow-500 font-bold text-md">- Dr. Kingsley Okonkwo</cite>
                  </div>
                </div>
              </div>
            </div>

            {/* Call to action */}
            <div className="hidden text-center pt-2">
              <button className="btn-ultra group">
                <span>Experience PK's Mentorship</span>
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
