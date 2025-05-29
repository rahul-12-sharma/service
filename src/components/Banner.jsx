import { motion } from 'framer-motion';
import TypingEffect from './TypingEffect';

export default function Banner() {
  return (
    <section className="relative w-full flex items-center justify-center px-6 sm:px-12 md:px-20 py-24">
      {/* Background glow effects */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute top-[30%] left-[20%] w-72 h-72 bg-purple-400 opacity-10 blur-3xl rounded-full"
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 12, repeat: Infinity, delay: 1 }}
          className="absolute bottom-[20%] right-[10%] w-80 h-80 bg-pink-500 opacity-10 blur-3xl rounded-full"
        />
      </div>

      {/* Glassmorphic Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 bg-white/5 backdrop-blur-lg border border-white/10 p-10 sm:p-14 rounded-3xl shadow-2xl max-w-3xl w-full text-center"
      >

        {/* Typing effect */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mb-6"
        >
          <TypingEffect />
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-cyan-100 text-base md:text-lg leading-relaxed font-light mb-8"
        >
          Empowering <span className="text-teal-500 font-medium">Creators</span>,{' '}
          <span className="text-teal-500 font-medium">Coaches</span>, and{' '}
          <span className="text-teal-500 font-medium">Brands</span> with cutting-edge{' '}
          <span className="text-teal-500 font-medium">Digital Marketing</span>,{' '}
          <span className="text-teal-500 font-medium">Website Development</span>, and{' '}
          <span className="text-teal-500 font-medium">AI-Driven Automation Solutions</span>. Lower cost. Better design.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.4 }}
        >
          <a
            href="/contact"
            className="bg-teal-500 text-black px-6 py-3 rounded-lg shadow-lg hover:bg-teal-700 transition duration-300"
          >
            Contact Us
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
