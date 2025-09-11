import { useState, useEffect } from "react";
import { Menu, X, Crown } from "lucide-react";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 ${scrolled ? "glass-dark shadow-soft" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6 px-2">
          <a href="#">
            <div className="flex items-center space-x-3 group">
              {/* <div className="relative">
                <Crown className="h-10 w-10 text-yellow-500 group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute inset-0 bg-yellow-500/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div> */}
              <div>
                <span className="text-2xl font-black text-white">Inner Circle</span>
                <div className="text-xs text-yellow-500 font-medium tracking-wider">WITH PK</div>
              </div>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {["About", "Meet PK", "Mentors", "Pricing", "FAQs"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                className="relative text-gray-300 hover:text-yellow-500 transition-colors duration-300 font-medium group"
              >
                {item}
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-primary group-hover:w-full transition-all duration-300"></div>
              </a>
            ))}
            <a href="https://mainstack.store/ldmproducts/pks-inner-circle" className="btn-primary text-gray-900 px-6 py-3 rounded-xl font-semibold text-sm">
              Apply Now
            </a>
          </nav>

          {/* Mobile menu button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden glass p-3 rounded-xl text-gray-300 hover:text-white transition-colors">
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-6 border-t border-gray-800/50 mt-4 pt-6">
            <nav className="flex flex-col space-y-4">
              {["About PK", "Mentors", "Pricing", "FAQs"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-300 hover:text-yellow-500 transition-colors font-medium py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </a>
              ))}
              <button className="btn-primary text-gray-900 px-6 py-3 rounded-xl font-semibold text-sm mt-4">Apply Now</button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
