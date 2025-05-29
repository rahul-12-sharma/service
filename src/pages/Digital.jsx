import React from 'react';

function Digital() {
  const tools = ['Google Ads', 'Facebook Ads', 'SEO', 'Email Marketing', 'Social Media', 'Analytics'];

  const services = [
    {
      title: 'Search Engine Optimization (SEO)',
      description: 'Basic SEO with AI-driven content optimization (Surfer SEO)',
      price: '$150 - $300/month',
      img: 'https://tse4.mm.bing.net/th?id=OIP.zrisQhEMYifw4G5wzyyrlQHaEK&pid=Api&P=0&h=180',
    },
    {
      title: 'Google Ads Campaigns',
      description: 'Google & Facebook ads with AI targeting (ChatGPT, Jasper)',
      price: '$250 - $800/month',
      img: 'https://megadigital.ai/wp-content/uploads/2023/05/Google-Smart-Ads-Upgrade-Your-Smart-Campaigns-in-2023.png',
    },
    {
      title: 'Social Media Marketing',
      description: 'AI-assisted content & campaign execution across platforms',
      price: '$100 - $200/month',
      img: 'https://smartmarketerz.com/wp-content/uploads/2016/08/social-media-marketing.jpg',
    }
  ];

  return (
    <section className="bg-[#0d0d0d] text-white py-24 px-6" id="digital-marketing">
      <div className="max-w-7xl mx-auto space-y-20">

        {/* Header */}
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-500 via-cyan-400 to-teal-300 text-transparent bg-clip-text">
            🚀 Digital Marketing Services
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg font-medium">
            Fuel business growth with AI-powered strategies, automation & data-backed insights.
          </p>
          <p className="text-sm text-gray-500">📊 Smart, scalable & conversion-driven marketing</p>
        </div>

        {/* Tool Tags */}
        <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto bg-white/5 backdrop-blur-sm p-4 rounded-2xl shadow-lg border border-white/10">
          {tools.map((tool, i) => (
            <span
              key={i}
              className="text-sm font-semibold bg-white/10 text-white px-3 py-1 rounded-xl border border-white/10 hover:scale-105 transition"
            >
              {tool}
            </span>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-center">
          {services.map(({ title, description, price, img }, index) => (
            <div
              key={index}
              className="bg-[#1a1a1a] rounded-2xl overflow-hidden border border-white/10 shadow-lg hover:shadow-blue-500/20 transition-shadow duration-300 group"
            >
              <img src={img} alt={title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className="p-5 space-y-2 text-center">
                <h4 className="text-cyan-400 text-xl font-bold">{title}</h4>
                <p className="text-sm text-gray-300">{description}</p>
                <p className="text-sm text-white font-medium">💰 {price}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center pt-12">
          <a
            href="/contact"
            className="inline-block bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-blue-600 hover:to-cyan-500 transition px-6 py-3 rounded-xl text-white font-semibold shadow-lg"
          >
            🚀 Get a Custom Plan
          </a>
        </div>

      </div>
    </section>
  );
}

export default Digital;
