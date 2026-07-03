import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

const roles = ['Full-Stack Developer', 'UI/UX Enthusiast', 'Open Source Contributor'];

const Home = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const { dark } = useTheme();

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center px-6">
      <h1 className={`text-5xl md:text-7xl font-bold mb-4 ${dark ? 'text-white' : 'text-gray-900'}`}>
        Hi, I'm <span className="text-violet-500">Yash</span>
      </h1>

      <p
        key={roleIndex}
        className={`text-lg md:text-xl max-w-xl mb-2 animate-pulse ${
          dark ? 'text-gray-400' : 'text-gray-600'
        }`}
      >
        {roles[roleIndex]}
      </p>

      <div className="flex gap-4 flex-wrap justify-center mt-6">
        <Link
          to="/projects"
          className="px-6 py-3 bg-violet-600 hover:bg-violet-700 text-white rounded-lg font-medium transition-all duration-200 hover:scale-105"
        >
          View My Work
        </Link>
        <Link
          to="/contact"
          className={`px-6 py-3 border rounded-lg font-medium transition-all duration-200 hover:scale-105 ${
            dark
              ? 'border-violet-500 text-violet-400 hover:bg-violet-500/10'
              : 'border-violet-500 text-violet-600 hover:bg-violet-50'
          }`}
        >
          Contact Me
        </Link>
      </div>
    </main>
  );
};

export default Home;
