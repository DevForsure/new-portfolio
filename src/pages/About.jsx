const About = () => {
  return (
    <main className="min-h-screen px-6 py-20 max-w-4xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">About Me</h1>
      <p className="text-gray-400 text-lg leading-relaxed mb-6">
        I'm a passionate developer who loves building beautiful and performant web applications.
        With a strong foundation in React, Node.js, and modern CSS, I craft experiences that
        delight users and solve real problems.
      </p>
      <p className="text-gray-400 text-lg leading-relaxed">
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
            className="bg-white/5 border border-white/10 rounded-xl p-5 text-center"
          >
            <div className="text-3xl font-bold text-violet-400">{stat.value}</div>
            <div className="text-gray-500 text-sm mt-1">{stat.label}</div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default About;
