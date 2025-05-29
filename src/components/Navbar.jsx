import { useState } from 'react';
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/30 backdrop-blur-md border-b border-white/10 transition-all">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <a href="/">
          <h1 className="text-xl font-bold text-white flex items-center gap-2">
            <svg width="40" height="40" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="32" cy="32" r="30" stroke="#2dd4bf" strokeWidth="4" fill="none" />
              <path d="M20 32c0-6 5-11 11-11s11 5 11 11-5 11-11 11" stroke="#2dd4bf" strokeWidth="3" strokeLinecap="round" />
              <path d="M28 21c1 3 2 3 4 0" stroke="#2dd4bf" strokeWidth="2" strokeLinecap="round" />
              <path d="M45 24c-2 4-2 8 0 12" stroke="#2dd4bf" strokeWidth="2" strokeLinecap="round" />
              <path d="M12 32h6M10 38h8M14 26h6" stroke="#2dd4bf" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <span className="text-teal-400">Innoblend</span>
          </h1>
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-gray-300">
          <Link to='/about' className="hover:text-indigo-400 transition-colors">About</Link>
          <Link to='/contact' className="hover:text-indigo-400 transition-colors">Contact</Link>
          <Link to='/' className="hover:text-indigo-400 transition-colors">Services</Link>
        </ul>

        {/* Mobile Menu Toggle Button */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <HiOutlineX /> : <HiOutlineMenu />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <ul className="md:hidden flex flex-col gap-4 px-6 pb-4 text-gray-300 bg-black/80 backdrop-blur-sm transition-all">
          <li><Link to='/about' className="hover:text-indigo-400 transition-colors" onClick={() => setIsOpen(false)}>About</Link></li>
          <li><Link to='/contact' className="hover:text-indigo-400 transition-colors" onClick={() => setIsOpen(false)}>Contact</Link></li>
          <li><a href="#services" className="hover:text-indigo-400 transition-colors" onClick={() => setIsOpen(false)}>Services</a></li>
        </ul>

      )}
    </nav>
  );
}
