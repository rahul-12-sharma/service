import React from 'react';
import { Link } from 'react-router-dom';

const services = [
  {
    title: 'Website Development',
    description: 'Fast, responsive, SEO-optimized websites using the latest tools and frameworks.',
    tools: ['Next.js', 'Shopify', 'WordPress', 'AI Builder'],
    image: 'https://services-nine-chi.vercel.app/assets/website.png',
    link: '/website',
  },
  {
    title: 'Graphic Design',
    description: 'Eye-catching visuals and branding that bring your business identity to life.',
    tools: ['Photoshop', 'Illustrator', 'Figma'],
    image: 'https://services-nine-chi.vercel.app/assets/graphic.png',
    link: '/graphic',
  },
  {
    title: 'Digital Marketing',
    description: 'Grow your reach and ROI with strategic content, SEO, and paid ads.',
    tools: ['SEO', 'Ads', 'Social Media'],
    image: 'https://img.freepik.com/premium-vector/digital-marketing-3d-landing-page_145666-1353.jpg?w=1800',
    link: '/digital',
  },
  {
    title: 'Video Editing',
    description: 'Short-form content made engaging with pro transitions and fast cuts.',
    tools: ['Premiere Pro', 'CapCut', 'Reels'],
    image: 'https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/322925521/original/eeed1a55e61414bd9eb253992a7f5cd8bfca49f8/be-engaging-short-form-video-editor-short-video-ads-editing.jpeg',
    link: '/video'
  },
];

function Services() {
  return (
    <section className="bg-[#0e0e10] text-white py-24 px-6">
      <h2 className="text-center text-4xl md:text-5xl font-bold mb-20 bg-gradient-to-r from-cyan-400 to-teal-400 text-transparent bg-clip-text">
        🧩 Our Services
      </h2>

      <div className="space-y-28 max-w-7xl mx-auto">
        {services.map((service, idx) => (
          <div
            key={idx}
            className={`flex flex-col md:flex-row ${idx % 2 !== 0 ? 'md:flex-row-reverse' : ''} items-center gap-8 md:gap-14`}
          >
            <div className="w-full md:w-1/2">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full max-h-[360px] object-cover rounded-2xl shadow-xl"
              />
            </div>
            <div className="w-full md:w-1/2 space-y-4 text-center md:text-left">
              <h3 className="text-3xl font-semibold text-cyan-400">{service.title}</h3>
              <p className="text-gray-300 text-base leading-relaxed">{service.description}</p>
              <ul className="flex flex-wrap justify-center md:justify-start gap-2 text-sm">
                {service.tools.map((tool, i) => (
                  <li
                    key={i}
                    className="bg-white/10 px-3 py-1 rounded-full text-white/80 border border-white/10"
                  >
                    {tool}
                  </li>
                ))}
              </ul>
              <Link
                to={service.link}
                className="inline-block mt-4 bg-cyan-600 hover:bg-cyan-700 px-5 py-2 rounded-lg text-sm transition"
              >
                Check Price
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
