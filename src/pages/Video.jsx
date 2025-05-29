import React from 'react';

export default function Video() {
  const services = [
    '💡 Human + AI synergy editing',
    '📝 Auto-captions, noise cleanup, effects',
    '📱 TikToks, Reels, Shorts',
    '🎯 Platform-optimized delivery',
    '⚡️ Trend-based & fast turnaround',
  ];

  const pricing = [
    { label: '1 Video (≤ 60 sec)', range: '$15 – $30' },
    { label: 'Monthly (8 videos)', range: '$100 – $180' },
    { label: 'Premium (15–320 videos)', range: '$250 – $400' },
    { label: 'Thumbnails', range: '$5 – $10' },
  ];

  const videos = [
    {
      title: 'Podcast Highlight',
      src: 'https://media.istockphoto.com/id/1309307942/video/unrecognizable-female-host-talking-with-young-man-in-her-radio-talk-show.mp4?b=1&s=192_srp&k=20&c=Z-nXBcC0dn4ISHpQOqrXs4lTiHoqKZLEKwgFIRm8Bxw=',
    },
    {
      title: 'Daily Vlog Edit',
      src: 'https://media.istockphoto.com/id/1433756820/video/young-asian-influencer-with-fruit-juice-spinning-around-with-camera.mp4?b=1&s=192_srp&k=20&c=9aucZR0mGDP00KpQdVnI5waKarDPNoEkqboKfgHwss0=',
    },
    {
      title: 'Cinematic Trailer',
      src: 'https://media.w3.org/2010/05/sintel/trailer_hd.mp4',
    },
  ];

  return (
    <section className="bg-[#0b0b0b] text-white py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto space-y-20">

        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
            Short Form Video Editing
          </h1>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Boost your content with expert edits designed for virality and speed. Reels, Shorts, TikToks & more.
          </p>
        </div>

        {/* Services + Pricing */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* Services */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-cyan-300">🚀 Services</h2>
            <ul className="text-gray-300 space-y-2 list-disc list-inside">
              {services.map((service, i) => (
                <li key={i}>{service}</li>
              ))}
            </ul>
          </div>

          {/* Pricing */}
          <div className="bg-[#161616] p-6 rounded-xl shadow-lg border border-white/10">
            <h2 className="text-2xl font-semibold text-cyan-300 mb-4 text-center">💰 Pricing</h2>
            <div className="space-y-4">
              {pricing.map(({ label, range }, i) => (
                <div key={i} className="flex justify-between border-b border-white/10 pb-2 text-gray-300 text-base">
                  <span>{label}</span>
                  <span className="text-cyan-400 font-semibold">{range}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Video Gallery */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-cyan-400 mb-10">🎬 Sample Videos</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {videos.map(({ title, src }, i) => (
              <div
                key={i}
                className="bg-[#1a1a1a] rounded-xl overflow-hidden hover:shadow-cyan-500/40 shadow-md transform hover:scale-105 transition duration-300"
              >
                <video
                  src={src}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-56 object-cover"
                />
                <div className="p-4">
                  <h5 className="text-cyan-300 font-medium text-lg">{title}</h5>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
