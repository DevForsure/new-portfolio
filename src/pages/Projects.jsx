import { useState, useMemo, useCallback } from 'react';
import { useTheme } from '../context/ThemeContext';

const projects = [
  {
    id: 1,
    title: 'Project One',
    description: 'A full-stack web application built with React and Node.js.',
    tags: ['React', 'Node.js', 'MongoDB'],
    link: '#',
  },
  {
    id: 2,
    title: 'Project Two',
    description: 'A responsive e-commerce site with payment integration.',
    tags: ['Next.js', 'Stripe', 'Tailwind'],
    link: '#',
  },
  {
    id: 3,
    title: 'Project Three',
    description: 'A real-time chat application using WebSockets.',
    tags: ['Socket.io', 'Express', 'React'],
    link: '#',
  },
];

const Projects = () => {
  const [search, setSearch] = useState('');
  const { dark } = useTheme();

  const handleSearch = useCallback((e) => {
    setSearch(e.target.value);
  }, []);

  const filteredProjects = useMemo(() => {
    const query = search.toLowerCase();
    return projects.filter(
      (p) =>
        p.title.toLowerCase().includes(query) ||
        p.tags.some((tag) => tag.toLowerCase().includes(query))
    );
  }, [search]);

  return (
    <main className="min-h-screen px-6 py-20 max-w-5xl mx-auto">
      <h1 className={`text-4xl md:text-5xl font-bold mb-4 ${dark ? 'text-white' : 'text-gray-900'}`}>
        Projects
      </h1>
      <p className={`mb-8 text-lg ${dark ? 'text-gray-400' : 'text-gray-600'}`}>
        A selection of things I've built.
      </p>

      <input
        type="text"
        value={search}
        onChange={handleSearch}
        placeholder="Search by name or tag..."
        className={`w-full md:w-80 mb-10 border rounded-lg px-4 py-2 focus:outline-none focus:border-violet-500 transition-colors ${
          dark
            ? 'bg-white/5 border-white/10 text-white placeholder-gray-600'
            : 'bg-white border-gray-300 text-gray-900 placeholder-gray-400'
        }`}
      />

      {filteredProjects.length === 0 ? (
        <p className={dark ? 'text-gray-500' : 'text-gray-400'}>
          No projects found for "{search}".
        </p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className={`border rounded-xl p-6 flex flex-col gap-4 hover:border-violet-500/50 transition-all duration-300 hover:-translate-y-1 ${
                dark
                  ? 'bg-white/5 border-white/10'
                  : 'bg-white border-gray-200 shadow-sm hover:shadow-md'
              }`}
            >
              <h2 className={`text-xl font-semibold ${dark ? 'text-white' : 'text-gray-900'}`}>
                {project.title}
              </h2>
              <p className={`text-sm flex-1 ${dark ? 'text-gray-400' : 'text-gray-600'}`}>
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`text-xs px-2 py-1 rounded-full border ${
                      dark
                        ? 'bg-violet-500/20 text-violet-300 border-violet-500/30'
                        : 'bg-violet-50 text-violet-700 border-violet-200'
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                className={`text-sm font-medium transition-colors ${
                  dark
                    ? 'text-violet-400 hover:text-violet-300'
                    : 'text-violet-600 hover:text-violet-700'
                }`}
              >
                View Project →
              </a>
            </div>
          ))}
        </div>
      )}
    </main>
  );
};

export default Projects;
