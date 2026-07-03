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

const socials = [
  { label: 'GitHub', href: 'https://github.com', icon: '🐙' },
  { label: 'LinkedIn', href: 'https://linkedin.com', icon: '💼' },
  { label: 'Twitter', href: 'https://twitter.com', icon: '🐦' },
];

const Footer = () => {
  const { dark } = useTheme();

  return (
    <footer
      className={`border-t mt-auto transition-colors duration-300 ${
        dark ? 'border-white/10 bg-gray-950' : 'border-gray-200 bg-white'
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between gap-10">
          <div>
            <p className={`font-bold text-xl tracking-tight mb-2 ${dark ? 'text-white' : 'text-gray-900'}`}>
              Yash<span className="text-violet-500">.</span>
            </p>
            <p className={`text-sm max-w-xs ${dark ? 'text-gray-500' : 'text-gray-500'}`}>
              Full-Stack Developer building modern, performant web experiences.
            </p>
          </div>

          <div>
            <p className={`text-sm font-semibold uppercase tracking-widest mb-4 ${dark ? 'text-gray-400' : 'text-gray-500'}`}>
              Navigation
            </p>
            <ul className="flex flex-col gap-2">
              {links.map(({ to, label }) => (
                <li key={to}>
                  <NavLink
                    to={to}
                    end={to === '/'}
                    className={({ isActive }) =>
                      `text-sm transition-colors duration-200 ${
                        isActive
                          ? 'text-violet-500'
                          : dark
                          ? 'text-gray-500 hover:text-white'
                          : 'text-gray-500 hover:text-gray-900'
                      }`
                    }
                  >
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className={`text-sm font-semibold uppercase tracking-widest mb-4 ${dark ? 'text-gray-400' : 'text-gray-500'}`}>
              Connect
            </p>
            <ul className="flex flex-col gap-2">
              {socials.map(({ label, href, icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className={`text-sm transition-colors duration-200 flex items-center gap-2 ${
                      dark ? 'text-gray-500 hover:text-white' : 'text-gray-500 hover:text-gray-900'
                    }`}
                  >
                    <span>{icon}</span>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div
          className={`mt-10 pt-6 border-t flex flex-col md:flex-row items-center justify-between gap-2 text-sm ${
            dark ? 'border-white/5 text-gray-600' : 'border-gray-100 text-gray-400'
          }`}
        >
          <p>© {new Date().getFullYear()} Yash. All rights reserved.</p>
          <p>Built with React &amp; Vite ⚡</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
