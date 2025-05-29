import emailjs from 'emailjs-com';
import { useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';



function Footer() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_jpj3uh8', 'template_eiq6tge', form.current, 'SX3BenaUsSEL-tN_W')
      .then(
        (result) => {
          form.current.reset();
        },
        (error) => {
          alert('Failed to send email.');
        }
      );
  };

  return (
    <footer className="bg-[#0e0e10] text-white py-12 px-6">
      <div className="max-w-screen-xl mx-auto space-y-12">
        {/* Top Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start gap-6">
          <div className="flex items-center gap-3">
            <svg width="40" height="40" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="32" cy="32" r="30" stroke="#06b6d4" strokeWidth="4" fill="none" />
              <path d="M20 32c0-6 5-11 11-11s11 5 11 11-5 11-11 11" stroke="#06b6d4" strokeWidth="3" strokeLinecap="round" />
              <path d="M28 21c1 3 2 3 4 0" stroke="#06b6d4" strokeWidth="2" strokeLinecap="round" />
              <path d="M45 24c-2 4-2 8 0 12" stroke="#06b6d4" strokeWidth="2" strokeLinecap="round" />
              <path d="M12 32h6M10 38h8M14 26h6" stroke="#06b6d4" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <span className="text-2xl font-bold text-cyan-400">Innoblend</span>
          </div>
          <p className="text-center sm:text-left text-gray-400 max-w-md">
            AI-Powered Design, Video & Marketing. Fast. Affordable. Scalable.
          </p>
        </div>

        {/* Middle Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 border-t border-gray-700 pt-10">
          <div>
            <h4 className="text-lg font-semibold text-cyan-400">Our Services</h4>
            <ul className="mt-4 space-y-2 text-gray-400 text-sm">
              <li><a href="/website" className="hover:text-white">Website Development</a></li>
              <li><a href="/graphic" className="hover:text-white">Graphic Design</a></li>
              <li><a href="/digital" className="hover:text-white">Digital Marketing</a></li>
              <li><a href="/video" className="hover:text-white">Short Form Video Editing</a></li>
            </ul>
          </div>


          <div>
            <h4 className="text-lg font-semibold text-cyan-400">📬 Contact</h4>
            <ul className="mt-4 space-y-2 text-gray-400 text-sm">
              <li>
                <a href="mailto:sandilyrahul@gmail.com" className="hover:text-white flex items-center gap-2">
                  <FontAwesomeIcon icon={faEnvelope} style={{ color: '#06b6d4' }} />
                  sandilyrahul@gmail.com
                </a>
              </li>
              <li>
                <a href="mailto:ankitrana0400@gmail.com" className="hover:text-white flex items-center gap-2">
                  <FontAwesomeIcon icon={faEnvelope} style={{ color: '#06b6d4' }} />
                  ankitrana0040@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+918745030616" className="hover:text-white flex items-center gap-2">
                  <FontAwesomeIcon icon={faPhone} style={{ color: '#10b981' }} />
                  +91-87450-30616
                </a>
              </li>
            </ul>
          </div>


          <div>
            <h4 className="text-lg font-semibold text-cyan-400">FAQs</h4>
            <ul className="mt-4 space-y-2 text-gray-400 text-sm">
              <li><a href="/about" className="hover:text-white">Policy</a></li>
              <li>
                <span className="inline-flex items-center gap-2">
                  <span>New Thing Coming Soon..</span>
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
                  </span>
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-cyan-400">Subscribe</h4>
            <p className="text-sm text-gray-400 mt-4">Get Started with Smarter Solutions — AI + Human, Perfectly Combined.</p>
            <form ref={form} onSubmit={sendEmail} className="mt-4 flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                name="user_email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-full bg-gray-800 border border-gray-600 text-white"
                required
              />
              <button
                type="submit"
                className="px-6 py-2 rounded-full bg-teal-600 hover:bg-teal-700 text-white font-medium"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center border-t border-gray-700 pt-6 mt-6 gap-4">
          <p className="text-sm text-gray-500">&copy; 2025 Innoblend. All rights reserved.</p>
          <a
            href="https://wa.me/8745030616"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-400 hover:text-teal-300 flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12.04 0C5.42 0 0 5.42 0 12.08c0 2.13.56 4.21 1.62 6.05L0 24l6.08-1.6c1.78.97 3.81 1.49 5.95 1.48 6.63 0 12.04-5.42 12.04-12.08C24.07 5.42 18.67 0 12.04 0zm0 21.99c-1.85 0-3.66-.5-5.25-1.45l-.38-.23-3.62.96.98-3.56-.24-.39a9.97 9.97 0 01-1.52-5.24c0-5.5 4.46-9.97 9.96-9.97s9.97 4.47 9.97 9.97c0 5.5-4.47 9.96-9.97 9.96zm5.4-7.47c-.3-.15-1.74-.84-2-.94-.26-.1-.45-.15-.64.15s-.75.94-.92 1.14c-.17.2-.33.22-.61.07-.3-.15-1.23-.45-2.35-1.44-.88-.77-1.47-1.72-1.64-2.01-.18-.29-.03-.45.13-.59.13-.13.3-.33.45-.5.15-.17.21-.29.3-.49.1-.2.05-.37-.03-.52-.08-.15-.65-1.54-.89-2.12-.24-.56-.48-.48-.65-.48H8.1c-.2 0-.53.07-.8.38-.27.3-1.06 1.03-1.06 2.5 0 1.47 1.08 2.9 1.24 3.1.15.2 2.12 3.23 5.15 4.53.72.31 1.29.5 1.74.65.73.24 1.4.2 1.92.13.6-.09 1.72-.7 1.97-1.38.25-.68.25-1.25.17-1.37-.07-.12-.26-.2-.56-.36z" />
            </svg>
            WhatsApp
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
