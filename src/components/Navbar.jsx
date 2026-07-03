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
      ? 'backdrop-blur-md bg-gray-950/90 border-white/10 shadow-lg shadow-black/20'
      : 'bg-transparent border-transparent'
  }`;

  const linkClass = ({ isActive }) =>
    `text-sm font-medium transition-colors duration-200 ${
      isActive ? 'text-violet-400' : 'text-gray-400 hover:text-white'
    }`;

  return (
    <nav className={navClass} ref={menuRef}>
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">

        <NavLink to="/" className="text-white font-bold text-xl tracking-tight">
          Yash<span className="text-violet-400">.</span>
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
            className="text-gray-400 hover:text-white transition-colors text-lg"
            title="Toggle Theme"
          >
            {dark ? '☀️' : '🌙'}
          </button>

          <button
            className="md:hidden text-gray-400 hover:text-white transition-colors"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {menuOpen && (
        <ul className="md:hidden flex flex-col gap-3 px-6 pb-4">
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
