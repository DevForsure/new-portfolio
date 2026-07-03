import { useTheme } from '../context/ThemeContext';

const About = () => {
  const { dark } = useTheme();

  return (
    <main className="min-h-screen px-6 py-20 max-w-4xl mx-auto">
      <h1 className={`text-4xl md:text-5xl font-bold mb-6 ${dark ? 'text-white' : 'text-gray-900'}`}>
        About Me
      </h1>
      <p className={`text-lg leading-relaxed mb-6 ${dark ? 'text-gray-400' : 'text-gray-600'}`}>
        I'm a passionate developer who loves building beautiful and performant web applications.
        With a strong foundation in React, Node.js, and modern CSS, I craft experiences that
        delight users and solve real problems.
      </p>
      <p className={`text-lg leading-relaxed ${dark ? 'text-gray-400' : 'text-gray-600'}`}>
        When I'm not coding, you'll find me exploring new technologies, contributing to open source,
        or enjoying a good cup of coffee.
      </p>

      <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
        {[
          { label: 'Projects', value: '20+' },
          { label: 'Experience', value: '2+ yrs' },
          { label: 'Technologies', value: '15+' },
          { label: 'Clients', value: '10+' },
        ].map((stat) => (
          <div
            key={stat.label}
            className={`border rounded-xl p-5 text-center transition-colors ${
              dark
                ? 'bg-white/5 border-white/10'
                : 'bg-white border-gray-200 shadow-sm'
            }`}
          >
            <div className="text-3xl font-bold text-violet-500">{stat.value}</div>
            <div className={`text-sm mt-1 ${dark ? 'text-gray-500' : 'text-gray-500'}`}>
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default About;
