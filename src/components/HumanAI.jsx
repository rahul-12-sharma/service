import React from 'react';

const features = [
  {
    icon: '⚙️',
    title: 'Efficiency',
    desc: 'AI speeds up tasks by 40% for faster delivery.',
    percent: 40,
    color: '#22d3ee', // cyan
  },
  {
    icon: '🎨',
    title: 'Creativity',
    desc: 'AI fuels fresh ideas with human direction.',
    percent: 70,
    color: '#8b5cf6', // purple
  },
  {
    icon: '📊',
    title: 'Insights',
    desc: 'AI analytics guide performance optimization.',
    percent: 65,
    color: '#facc15', // yellow
  },
  {
    icon: '💸',
    title: 'Cost-Effective',
    desc: 'Great results without high costs.',
    percent: 55,
    color: '#10b981', // green
  },
];

// Circle progress component
function CircleProgress({ percent, color }) {
  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (circumference * percent) / 100;

  return (
    <svg
      className="transform -rotate-90"
      width="90"
      height="90"
      viewBox="0 0 100 100"
    >
      <circle
        cx="50"
        cy="50"
        r={radius}
        stroke="#374151" // gray-700 background stroke
        strokeWidth="10"
        fill="none"
      />
      <circle
        cx="50"
        cy="50"
        r={radius}
        stroke={color}
        strokeWidth="10"
        fill="none"
        strokeDasharray={circumference}
        strokeDashoffset={strokeDashoffset}
        strokeLinecap="round"
        style={{ transition: 'stroke-dashoffset 1s ease-out' }}
      />
      <text
        x="50"
        y="55"
        textAnchor="middle"
        fill={color}
        fontWeight="bold"
        fontSize="18"
        fontFamily="Inter, sans-serif"
      >
        {percent}%
      </text>
    </svg>
  );
}

export default function HumanAI() {
  return (
    <section className="bg-[#0f172a] text-white py-20 px-6">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
          Human + AI = Smarter Video Editing
        </h2>
        <p className="text-gray-300 mt-4 max-w-2xl mx-auto text-lg">
          Experience the perfect blend of human creativity and AI efficiency.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-5xl mx-auto">
        {features.map(({ icon, title, desc, percent, color }, idx) => (
          <div
            key={idx}
            className="bg-[#1e293b] p-6 rounded-xl shadow-lg flex flex-col items-center space-y-4 hover:shadow-cyan-400/60 transition-shadow"
          >
            <CircleProgress percent={percent} color={color} />
            <div className="text-4xl">{icon}</div>
            <h3 className="text-cyan-300 font-semibold text-xl">{title}</h3>
            <p className="text-gray-300 text-center text-sm">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
