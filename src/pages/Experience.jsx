const experiences = [
  {
    id: 1,
    role: 'Frontend Developer',
    company: 'Company Name',
    period: 'Jan 2024 – Present',
    description:
      'Building scalable React applications, implementing UI/UX designs, and optimizing web performance.',
  },
  {
    id: 2,
    role: 'Web Developer Intern',
    company: 'Startup Inc.',
    period: 'Jun 2023 – Dec 2023',
    description:
      'Developed responsive landing pages, integrated REST APIs, and collaborated with design teams.',
  },
  {
    id: 3,
    role: 'Freelance Developer',
    company: 'Self-Employed',
    period: '2022 – 2023',
    description:
      'Delivered custom websites and web apps for small businesses and individual clients.',
  },
];

const Experience = () => {
  return (
    <main className="min-h-screen px-6 py-20 max-w-4xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Experience</h1>
      <p className="text-gray-400 mb-12 text-lg">My professional journey so far.</p>

      <div className="relative border-l border-white/10 pl-8 flex flex-col gap-12">
        {experiences.map((exp) => (
          <div key={exp.id} className="relative">
            <span className="absolute -left-[2.85rem] top-1 w-3 h-3 rounded-full bg-violet-500 border-2 border-violet-900" />

            <span className="text-violet-400 text-sm font-medium">{exp.period}</span>
            <h2 className="text-xl font-semibold text-white mt-1">{exp.role}</h2>
            <p className="text-gray-500 text-sm mb-2">{exp.company}</p>
            <p className="text-gray-400">{exp.description}</p>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Experience;
