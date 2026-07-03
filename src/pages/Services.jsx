const services = [
  {
    id: 1,
    icon: '🖥️',
    title: 'Web Development',
    description:
      'Building fast, responsive, and accessible websites using React, Next.js, and modern tooling.',
  },
  {
    id: 2,
    icon: '🎨',
    title: 'UI/UX Design',
    description:
      'Crafting intuitive interfaces and delightful user experiences with Figma and CSS.',
  },
  {
    id: 3,
    icon: '⚙️',
    title: 'Backend Development',
    description:
      'Creating robust APIs and server-side solutions with Node.js, Express, and databases.',
  },
  {
    id: 4,
    icon: '📱',
    title: 'Mobile Development',
    description:
      'Developing cross-platform mobile apps using React Native for iOS and Android.',
  },
  {
    id: 5,
    icon: '🚀',
    title: 'Performance Optimization',
    description:
      'Analyzing and improving web app speed, SEO, and Core Web Vitals scores.',
  },
  {
    id: 6,
    icon: '🔧',
    title: 'Consulting & Code Review',
    description:
      'Providing technical guidance, architecture planning, and thorough code reviews.',
  },
];

const Services = () => {
  return (
    <main className="min-h-screen px-6 py-20 max-w-5xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Services</h1>
      <p className="text-gray-400 mb-12 text-lg">What I can do for you.</p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <div
            key={service.id}
            className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-violet-500/50 hover:-translate-y-1 transition-all duration-300"
          >
            <div className="text-4xl mb-4">{service.icon}</div>
            <h2 className="text-lg font-semibold text-white mb-2">{service.title}</h2>
            <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Services;
