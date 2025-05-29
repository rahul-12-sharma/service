import React from 'react';

function Graphic() {
  const services = [
    'Expert use of Adobe Illustrator, Photoshop, and AI tools like Midjourney & Firefly',
  ];

  const pricing = [
    { label: 'Logo Design', range: '$10 - $100' },
    { label: 'Social Media Design (10 posts)', range: '$40 - $80' },
    { label: 'Brand Kit (Logo, Fonts, Palette)', range: '$150 - $300' },
    { label: 'Poster/Flyer Design', range: '$25 - $50' },
  ];

  const projects = [
    {
      title: 'Logos',
      img: 'https://www.seoclerk.com/pics/000/951/454/a532efdb3197533709d0ee13813a8c4b.jpg',
    },
    {
      title: 'Post & Flyer',
      img: 'https://i.ytimg.com/vi/YpL_od33K3Q/maxresdefault.jpg',
    },
    {
      title: 'Art Work',
      img: 'https://images.template.net/wp-content/uploads/2014/12/76.jpg',
    },
    {
      title: 'Ad Design',
      img: 'https://i.ytimg.com/vi/n6CYeNDMJiQ/maxresdefault.jpg',
    },
    {
      title: 'Web & App Design',
      img: 'https://images.ctfassets.net/ry6adbgbrq11/1EdGj4pWywTriJZIXO3ksc/8e377cf04b340eee08eb7b186a15b482/Why_Figma_-_Post_Inline_Image.jpg?w=2992&h=1740&q=50',
    },
  ];

  return (
    <section className="bg-[#0d0d0d] text-white py-24 px-6">
      <div className="max-w-7xl mx-auto space-y-20">

        {/* Header */}
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text">
            🎨 Graphic Design Services
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Where human creativity meets AI precision—designs that deliver results, fast.
          </p>
          <p className="text-sm text-gray-500">🖌️ Visually compelling & strategically effective</p>
        </div>

        {/* Service Points */}
        <div className="text-center max-w-3xl mx-auto space-y-3 text-lg text-gray-300 font-medium">
          {services.map((service, i) => (
            <p key={i} className="leading-relaxed">• {service}</p>
          ))}
        </div>

        {/* Project Gallery */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projects.map(({ title, img }) => (
            <div
              key={title}
              className="bg-[#1a1a1a] rounded-xl shadow-md border border-white/10 overflow-hidden hover:scale-105 transition-transform duration-300 ease-in-out"
              title={title}
            >
              <img
                src={img}
                alt={`Design Sample - ${title}`}
                className="w-full h-48 object-cover"
                loading="lazy"
              />
              <h4 className="text-cyan-400 font-semibold text-lg p-4 text-center">{title}</h4>
            </div>
          ))}
        </div>

        {/* Pricing Section */}
        <div className="bg-[#1c1c22] p-8 rounded-2xl shadow-lg border border-white/10 max-w-3xl mx-auto">
          <h3 className="text-2xl font-semibold text-cyan-400 mb-6 text-center">💰 Pricing (USD)</h3>
          <div className="space-y-4 text-gray-300 text-lg font-medium">
            {pricing.map(({ label, range }, i) => (
              <div
                key={i}
                className="flex justify-between border-b border-white/10 pb-2 last:border-b-0"
              >
                <span>{label}</span>
                <span>{range}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default Graphic;
