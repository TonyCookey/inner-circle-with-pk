import { ArrowRight, Users, Target, Sparkles } from "lucide-react";
import { Typewriter } from "react-simple-typewriter";

interface HeroProps {
  onSelectTier: (tier: string) => void;
}

export function Hero({ onSelectTier }: HeroProps) {
  return (
    <main className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden" role="main" aria-labelledby="hero-heading">
      {/* Hero background image */}
      <div className="absolute inset-0">
        <img src="/pk-preaching-bg-web.jpg" alt="PK Teaching Crowd" className="w-full h-full object-cover object-right " />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/30"></div>
        {/* Gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-black/20 to-transparent"></div>
        {/* Modern mesh gradient overlay */}
        <div className="absolute inset-0 gradient-mesh opacity-30"></div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-40 h-40 bg-yellow-500/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }}></div>
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-yellow-500/15 rounded-full blur-2xl animate-glow"></div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 grid-pattern opacity-20"></div>

      <div className="relative z-10 max-w-7xl mx-auto mt-28 text-center">
        {/* Status badge */}
        <div className="sm:inline-flex items-center space-x-3 glass-ultra px-8 py-4 rounded-full mb-4 animate-slide-up shadow-glow hidden">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm text-gray-300">Now Accepting Applications</span>
          </div>
          <div className="w-px h-4 bg-gray-600"></div>
          <div className="flex items-center space-x-2">
            <Users className="h-4 w-4 text-yellow-500" />
            <span className="text-sm text-gray-300">Limited Spots Available</span>
          </div>
        </div>

        {/* Main headline */}
        <div className="mb-4 mt-4 animate-slide-up" style={{ animationDelay: "0.2s" }}>
          <h1 className="text-6xl md:text-8xl font-black mb-2 mt-20 md:mt-8 leading-tight">
            <Typewriter words={["Inner Circle"]} loop={30} cursor cursorStyle="" typeSpeed={200} deleteSpeed={50} delaySpeed={5000} />
            <br />
            <span className="text-clip-animate font-black flex items-center justify-center md:gap-20 text-center">with PK</span>
          </h1>
        </div>

        {/* Subtitle */}
        <p className="md:block md:text-lg text-sm mb-6 max-w-3xl mx-auto leading-relaxed animate-slide-up" style={{ animationDelay: "0.4s" }}>
          Join an <span className="text-yellow-500 font-semibold">exclusive and private group coaching</span> for ambitious men committed to excellence. Access
          world-class mentoring, and a network that elevates your success to unprecedented heights.
        </p>

        {/* Value propositions */}
        <div className="hidden grid md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto animate-slide-up" style={{ animationDelay: "0.6s" }}>
          <div className="glass p-4 rounded-2xl">
            <Target className="h-8 w-8 text-yellow-500 mx-auto mb-3" />
            <h3 className="font-semibold text-white mb-2">Elite Mentorship</h3>
            <p className="text-sm text-gray-400">Direct access to proven leaders</p>
          </div>
          <div className="glass-ultra p-4 rounded-2xl shadow-glow">
            <Users className="h-8 w-8 text-yellow-500 mx-auto mb-3" />
            <h3 className="font-semibold text-white mb-2">Exclusive Network</h3>
            <p className="text-sm text-gray-400">Connect with high-achievers</p>
          </div>
          <div className="glass p-4 rounded-2xl">
            <Sparkles className="h-8 w-8 text-yellow-500 mx-auto mb-3" />
            <h3 className="font-semibold text-white mb-2">Exponential Growth</h3>
            <p className="text-sm text-gray-400">Transform your success trajectory</p>
          </div>
        </div>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-slide-up" style={{ animationDelay: "0.8s" }}>
          {/* <button onClick={() => onSelectTier("yearly")} className="btn-ultra group px-10 py-5 flex items-center justify-center space-x-2">
            <span>Join the Circle</span>
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </button> */}
          <a
            href="https://mainstack.store/ldmproducts/pks-inner-circle"
            className="w-200 btn-ultra group px-10 py-5 flex items-center justify-center space-x-2"
            aria-label="Join the Inner Circle - Annual membership"
          >
            <span>Join the Circle</span>
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#pricing"
            className="hidden md:block btn-secondary text-white px-10 py-5 rounded-2xl font-semibold hover:text-yellow-500 transition-colors shadow-soft"
            aria-label="See Pricing for Inner Circle"
          >
            See Pricing
          </a>
        </div>

        {/* Trust indicators */}
        <div className="hidden md:block mt-16 mb-20 animate-slide-up" style={{ animationDelay: "1s" }}>
          <p className="text-gray-200 text-sm mb-6">Trusted by ambitious leaders worldwide</p>
          <div className="flex justify-center items-center space-x-8 opacity-60">
            <p className="text-2xl font-bold">1000+</p>
            <div className="w-px h-8 bg-gray-700"></div>
            <div className="text-2xl font-bold">Members</div>
            <div className="w-px h-8 bg-gray-700"></div>
            <div className="text-2xl font-bold">7</div>
            <div className="w-px h-8 bg-gray-700"></div>
            <div className="text-2xl font-bold">Countries</div>
          </div>
        </div>
      </div>

      {/* Modern geometric shapes */}
      <div className="absolute top-1/4 right-20 w-40 h-40 bg-gradient-to-br from-yellow-500/20 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-gradient-to-tr from-blue-500/10 to-transparent rounded-full blur-3xl"></div>
    </main>
  );
}
