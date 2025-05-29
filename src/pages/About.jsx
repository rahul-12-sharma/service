import React from 'react';

function About() {
  return (
    <section id="about" className="bg-[#0e0e10] text-white py-20 px-6">
      <div className="max-w-5xl mx-auto space-y-16">

        {/* Hero */}
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-teal-400 text-transparent bg-clip-text">
            👋 Meet Innoblend
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-lg">
            We blend AI with human creativity to deliver fast, affordable, and stunning results in design, video, and marketing.
          </p>
          <p className="text-sm text-gray-500">📍 Based in India · Serving Globally</p>
        </div>

        {/* Why Choose Us */}
        <div className="grid md:grid-cols-2 gap-8 text-gray-300">
          <div className="bg-[#1a1a1e] p-6 rounded-xl shadow-md border border-white/5">
            <h3 className="text-xl font-semibold text-cyan-400 mb-2">💡 Why People Choose Us</h3>
            <ul className="space-y-2 list-disc list-inside text-sm">
              <li><strong>Fast Delivery</strong> – AI speeds up every step.</li>
              <li><strong>Affordable Rates</strong> – Lower cost through smart automation.</li>
              <li><strong>Global-Ready</strong> – We build with international standards.</li>
              <li><strong>Fully Managed</strong> – Just tell us what you need. We’ll handle the rest.</li>
            </ul>
          </div>

          <div className="bg-[#1a1a1e] p-6 rounded-xl shadow-md border border-white/5">
            <h3 className="text-xl font-semibold text-cyan-400 mb-2">🤝 Our Mission</h3>
            <p className="text-sm">
              Helping businesses grow faster by combining smart AI tools with creative thinking — ethically, efficiently, and at scale.
            </p>
          </div>
        </div>

        {/* Contact & CTA */}
        <div className="bg-[#1c1c22] p-8 rounded-2xl shadow-lg border border-white/5 text-center space-y-4">
          <h3 className="text-2xl font-semibold text-cyan-400">🔗 Let's Work Together</h3>
          <p className="text-gray-400 text-sm">Get a free sample before committing — no pressure.</p>
          <div className="flex justify-center gap-4 flex-wrap mt-4">
            <a
              href="/contact"
              className="bg-cyan-600 hover:bg-cyan-700 px-5 py-2 rounded-full text-sm"
            >
              📧 Email Us
            </a>
            <a
              href="https://wa.me/8745030616"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 px-5 py-2 rounded-full text-sm flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.52 3.48A11.81 11.81 0 0012 0C5.37 0 0 5.37 0 12a11.82 11.82 0 001.65 6L0 24l6.26-1.64A11.83 11.83 0 0012 24c6.63 0 12-5.37 12-12 0-3.18-1.23-6.16-3.48-8.52zM12 21.71a9.68 9.68 0 01-4.9-1.33l-.36-.21-2.7.7.71-2.61-.23-.36A9.69 9.69 0 012.3 12c0-5.37 4.33-9.71 9.7-9.71 2.58 0 5.01 1.01 6.83 2.84a9.63 9.63 0 012.84 6.87c0 5.38-4.33 9.71-9.7 9.71zm5.3-7.33c-.27-.14-1.58-.78-1.82-.88-.24-.1-.42-.14-.6.14s-.68.88-.84 1.07c-.16.19-.3.2-.57.07-.27-.13-1.14-.42-2.17-1.34-.8-.71-1.34-1.58-1.5-1.85-.16-.26-.02-.41.12-.54.12-.12.27-.3.4-.45.14-.15.18-.27.27-.45.09-.18.04-.34-.03-.48-.08-.14-.6-1.45-.83-2-.21-.51-.44-.44-.6-.44h-.52c-.19 0-.49.07-.75.35s-1 .95-1 2.34c0 1.39 1.02 2.73 1.16 2.9.14.18 2.01 3 4.86 4.21.68.3 1.21.47 1.63.61.69.22 1.31.19 1.8.12.54-.08 1.61-.65 1.84-1.27.22-.62.22-1.14.15-1.26-.06-.11-.24-.19-.51-.33z"/></svg>
              WhatsApp
            </a>
          </div>
        </div>

        {/* Policy */}
        <div className="text-sm text-gray-400 space-y-4 max-w-3xl mx-auto pt-10 border-t border-white/10">
          <h3 className="text-xl font-semibold text-cyan-400">📜 Our Service Policy</h3>

          <p>We believe in clarity, quality, and fairness. Here's how we work:</p>

          <ul className="space-y-2 list-disc list-inside text-gray-300">
            <li><strong>Review Portfolio First:</strong> See what we’ve done before we start.</li>
            <li><strong>Simple Agreement:</strong> Everything clear — scope, timeline, deliverables.</li>
            <li><strong>Flexible Payment:</strong> 30–40% upfront or full payment; work starts after that.</li>
            <li><strong>Fair Refunds:</strong> 70% refund if canceled within 7 days. No refunds after production begins.</li>
          </ul>

          <p>Still unsure? We're happy to clarify anything. Let's connect.</p>
        </div>
      </div>
    </section>
  );
}

export default About;
