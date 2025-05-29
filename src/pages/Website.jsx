import React from 'react';

function Website() {
    const tools = [
        { name: 'WordPress', icon: '🌐' },
        { name: 'Webflow', icon: '🕸️' },
        { name: 'Framer', icon: '🎛️' },
        { name: 'MERN', icon: '🛠️' },
        { name: 'Python', icon: '🐍' },
        { name: 'AI', icon: '🤖' },
        { name: 'Shopify', icon: '🛒' },
    ];

    const services = [
        'Responsive websites tailored for all devices',
        'E-commerce stores with seamless shopping experiences',
        'Professional portfolios and landing pages',
        'SEO-optimized, modern UX/UI design included',
    ];

    const pricing = [
        { label: 'Landing Page (1 page)', range: '$50 - $200' },
        { label: 'Business Website (up to 8 pages)', range: '$300 - $600' },
        { label: 'E-commerce Store', range: '$300 - $1,200' },
        { label: 'Real Estate Website', range: '$500 - $2,000' },
        { label: 'Custom Website', range: '$500 - $2,000' },
        { label: 'Portfolio Website', range: '$100 - $200' },
        { label: 'Monthly Maintenance', range: '$30 - $100/month' },
    ];

    const projects = [
        { title: 'Corporate Business Website', img: 'https://www.freshdesignweb.com/wp-content/uploads/Presento-Bootstrap-Corporate-Template-1-780x851.jpg' },
        { title: 'E-commerce Storefront', img: 'https://essential-addons.com/wp-content/uploads/2024/02/image-9.png' },
        { title: 'Personal Portfolio Site', img: 'https://colorlib.com/wp/wp-content/uploads/sites/2/victim-portfolio-website-template.jpg' },
    ];

    return (
        <section id="services" className="bg-[#0e0e10] text-white py-20 px-6">
            <div className="max-w-5xl mx-auto space-y-16">

                {/* Header */}
                <div className="text-center space-y-4">
                    <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-teal-400 text-transparent bg-clip-text">
                        🌐 Web Development Services & Pricing
                    </h2>
                    <p className="text-gray-400 max-w-xl mx-auto text-lg">
                        We build responsive, SEO-optimized websites and e-commerce stores with modern UX/UI using top tools and technologies.
                    </p>
                    <p className="text-sm text-gray-500">💻 Reliable & Professional Web Solutions</p>
                </div>

                {/* Tools & Technologies */}
                <div className="flex flex-wrap justify-center gap-8 text-3xl md:text-4xl">
                    {tools.map((tool) => (
                        <div
                            key={tool.name}
                            className="flex flex-col items-center cursor-default select-none text-cyan-400"
                            title={tool.name}
                        >
                            <span className="text-6xl">{tool.icon}</span>
                            <small className="mt-2 text-sm text-cyan-300">{tool.name}</small>
                        </div>
                    ))}
                </div>

                {/* Project Showcase */}
                <section className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
                    {projects.map(({ title, img }) => (
                        <div
                            key={title}
                            className="bg-[#1a1a1e] rounded-xl shadow-md border border-white/10 overflow-hidden cursor-pointer transform transition-transform hover:scale-105"
                            title={title}
                        >
                            <img
                                src={img}
                                alt={title}
                                className="w-full h-48 object-cover"
                                loading="lazy"
                            />
                            <h4 className="text-cyan-400 font-semibold text-lg p-4">{title}</h4>
                        </div>
                    ))}
                </section>

                {/* Pricing */}
                <section className="bg-[#1c1c22] p-8 rounded-2xl shadow-lg border border-white/10 max-w-3xl mx-auto">
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
                </section>



            </div>
        </section>
    );
}

export default Website;
