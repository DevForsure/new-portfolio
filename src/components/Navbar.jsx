import { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/projects', label: 'Projects' },
  { to: '/experience', label: 'Experience' },
  { to: '/services', label: 'Services' },
  { to: '/contact', label: 'Contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const { dark, toggleTheme } = useTheme();

  const menuRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navClass = `sticky top-0 z-50 border-b transition-all duration-300 ${
    scrolled
      ? dark
        ? 'backdrop-blur-md bg-gray-950/90 border-white/10 shadow-lg shadow-black/20'
        : 'backdrop-blur-md bg-white/90 border-gray-200 shadow-lg shadow-gray-200/40'
      : 'bg-transparent border-transparent'
  }`;

  const linkClass = ({ isActive }) =>
    `text-sm font-medium transition-colors duration-200 ${
      isActive
        ? 'text-violet-500'
        : dark
        ? 'text-gray-400 hover:text-white'
        : 'text-gray-500 hover:text-gray-900'
    }`;

  return (
    <nav className={navClass} ref={menuRef}>
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">

        <NavLink
          to="/"
          className={`font-bold text-xl tracking-tight ${dark ? 'text-white' : 'text-gray-900'}`}
        >
          Yash<span className="text-violet-500">.</span>
        </NavLink>

        <ul className="hidden md:flex items-center gap-6">
          {links.map(({ to, label }) => (
            <li key={to}>
              <NavLink to={to} end={to === '/'} className={linkClass}>
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className={`transition-colors text-lg ${dark ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-gray-900'}`}
            title="Toggle Theme"
          >
            {dark ? '☀️' : '🌙'}
          </button>

          <button
            className={`md:hidden transition-colors ${dark ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-gray-900'}`}
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {menuOpen && (
        <ul
          className={`md:hidden flex flex-col gap-3 px-6 pb-4 ${
            dark ? 'bg-gray-950' : 'bg-white border-t border-gray-100'
          }`}
        >
          {links.map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={to === '/'}
                className={linkClass}
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
