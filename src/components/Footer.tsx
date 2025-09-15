import { Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-16 px-4 sm:px-6 lg:px-8" role="contentinfo">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 group mb-4">
              {/* <div className="relative">
              <Crown className="h-10 w-10 text-yellow-500 group-hover:scale-110 transition-transform duration-300" />
              <div className="absolute inset-0 bg-yellow-500/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div> */}
              <div>
                <span className="text-2xl font-black text-white">Inner Circle</span>
                <div className="text-xs text-yellow-500 font-medium tracking-wider">WITH PK</div>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
              An exclusive mentoring community for ambitious men committed to excellence, personal growth, and building extraordinary success.
            </p>
            <div className="flex space-x-4">
              {/* Facebook */}
              <a href="https://www.facebook.com/PastorkingsleyOkonkwo/" className="text-gray-400 hover:text-yellow-500 transition-colors" aria-label="Facebook">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.325 24h11.495v-9.294H9.691v-3.622h3.129V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.104C23.405 24 24 23.408 24 22.674V1.326C24 .592 23.405 0 22.675 0" />
                </svg>
              </a>
              {/* Instagram */}
              <a href="https://www.instagram.com/kingsleypst/?hl=en" className="text-gray-400 hover:text-yellow-500 transition-colors" aria-label="Instagram">
                <svg className="h-6 w-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.975.974 1.246 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.975-2.242 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.975-.974-1.246-2.242-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608C4.516 2.567 5.784 2.296 7.15 2.234 8.416 2.176 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.771.131 4.659.417 3.678 1.398c-.981.981-1.267 2.093-1.326 3.374C2.013 5.668 2 6.077 2 9.337v5.326c0 3.26.013 3.669.072 4.949.059 1.281.345 2.393 1.326 3.374.981.981 2.093 1.267 3.374 1.326 1.28.059 1.689.072 4.949.072s3.669-.013 4.949-.072c1.281-.059 2.393-.345 3.374-1.326.981-.981 1.267-2.093 1.326-3.374.059-1.28.072-1.689.072-4.949V9.337c0-3.26-.013-3.669-.072-4.949-.059-1.281-.345-2.393-1.326-3.374-.981-.981-2.093-1.267-3.374-1.326C15.669.013 15.26 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
                </svg>
              </a>
              {/* Youtube */}
              <a href="https://www.youtube.com/@KingsleyOkonkwo" className="text-gray-400 hover:text-yellow-500 transition-colors" aria-label="Youtube">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a2.994 2.994 0 0 0-2.112-2.112C19.633 3.5 12 3.5 12 3.5s-7.633 0-9.386.574a2.994 2.994 0 0 0-2.112 2.112C0 7.94 0 12 0 12s0 4.06.502 5.814a2.994 2.994 0 0 0 2.112 2.112C4.367 20.5 12 20.5 12 20.5s7.633 0 9.386-.574a2.994 2.994 0 0 0 2.112-2.112C24 16.06 24 12 24 12s0-4.06-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>

              {/* Twitter */}
              <a href="https://x.com/kingsleypst?lang=en" className="text-gray-400 hover:text-yellow-500 transition-colors" aria-label="Twitter">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.949.555-2.005.959-3.127 1.184-.897-.959-2.178-1.559-3.594-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.318-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.179 1.394 4.768 2.209 7.557 2.209 9.054 0 14-7.496 14-13.986 0-.21 0-.423-.015-.637.961-.689 1.8-1.56 2.46-2.548l-.047-.02z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-gray-300 hover:text-yellow-500 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#meet-pk" className="text-gray-300 hover:text-yellow-500 transition-colors">
                  Meet PK
                </a>
              </li>
              <li>
                <a href="#mentors" className="text-gray-300 hover:text-yellow-500 transition-colors">
                  Mentors
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-gray-300 hover:text-yellow-500 transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#faqs" className="text-gray-300 hover:text-yellow-500 transition-colors">
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-yellow-500" />
                {/* <span className="text-gray-300">support@innercirclewithpk.com</span> */}
                <span className="text-gray-300">mentalitywithpk@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-yellow-500" />
                <span className="text-gray-300">+234 913 037 2356</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-yellow-500" />
                <span className="text-gray-300">Available Worldwide</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© 2025 Inner Circle with PK. All rights reserved.</p>
            <div className="hidden flex space-x-6 mt-4 md:mt-0">
              {/* <a href="#" className="text-gray-400 hover:text-yellow-500 text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-500 text-sm transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-500 text-sm transition-colors">
                Refund Policy
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
