import { useTheme } from '../context/ThemeContext';

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
  const { dark } = useTheme();

  return (
    <main className="min-h-screen px-6 py-20 max-w-4xl mx-auto">
      <h1 className={`text-4xl md:text-5xl font-bold mb-4 ${dark ? 'text-white' : 'text-gray-900'}`}>
        Experience
      </h1>
      <p className={`mb-12 text-lg ${dark ? 'text-gray-400' : 'text-gray-600'}`}>
        My professional journey so far.
      </p>

      <div
        className={`relative border-l pl-8 flex flex-col gap-12 ${
          dark ? 'border-white/10' : 'border-gray-200'
        }`}
      >
        {experiences.map((exp) => (
          <div key={exp.id} className="relative">
            <span
              className={`absolute -left-[2.85rem] top-1 w-3 h-3 rounded-full bg-violet-500 border-2 ${
                dark ? 'border-violet-900' : 'border-violet-200'
              }`}
            />

            <span className="text-violet-500 text-sm font-medium">{exp.period}</span>
            <h2 className={`text-xl font-semibold mt-1 ${dark ? 'text-white' : 'text-gray-900'}`}>
              {exp.role}
            </h2>
            <p className={`text-sm mb-2 ${dark ? 'text-gray-500' : 'text-gray-400'}`}>
              {exp.company}
            </p>
            <p className={dark ? 'text-gray-400' : 'text-gray-600'}>{exp.description}</p>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Experience;
