import React from 'react';

function Contact() {
  return (
    <section id="contact" className="bg-[#0e0e10] text-white py-20 px-6">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-teal-400 text-transparent bg-clip-text">
            📞 Contact Us
          </h2>
          <p className="text-gray-400 mt-2 text-lg">We’d love to hear from you! Let’s build something great together.</p>
        </div>

        {/* Contact Info & Form */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-cyan-400">Email Us</h3>
              <p className="text-white/80">📩 sandilyrahul@gmail.com</p>
              <p className="text-white/80">🛠️ ankitrana0400@gmail.com</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-cyan-400">WhatsApp</h3>
              <p>
                <a href="https://wa.me/918745030616" className="text-white/80 hover:text-cyan-400">📱 +91-8745030616</a>
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-cyan-400">Working Hours</h3>
              <p className="text-white/80">🕒 Mon–Sat: 10 AM – 7 PM IST</p>
              <p className="text-white/60 text-sm">Available 24/7 on email & WhatsApp</p>
            </div>
          </div>

          {/* Form */}
          <form className="space-y-4 bg-[#121214] p-6 rounded-xl border border-white/10 shadow-sm">
            <input
              type="text"
              placeholder="Your Name"
              required
              className="w-full px-4 py-3 rounded-md bg-[#1a1a1f] text-white placeholder-gray-400 border border-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
            <input
              type="email"
              placeholder="Email Address"
              required
              className="w-full px-4 py-3 rounded-md bg-[#1a1a1f] text-white placeholder-gray-400 border border-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full px-4 py-3 rounded-md bg-[#1a1a1f] text-white placeholder-gray-400 border border-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
            <textarea
              rows="4"
              placeholder="Your Message"
              className="w-full px-4 py-3 rounded-md bg-[#1a1a1f] text-white placeholder-gray-400 border border-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-cyan-600 hover:bg-cyan-700 px-6 py-3 rounded-md text-white font-semibold transition"
            >
              Send Message 🚀
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
