import { useState, useMemo, useCallback } from 'react';

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
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Projects</h1>
      <p className="text-gray-400 mb-8 text-lg">A selection of things I've built.</p>

      <input
        type="text"
        value={search}
        onChange={handleSearch}
        placeholder="Search by name or tag..."
        className="w-full md:w-80 mb-10 bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white placeholder-gray-600 focus:outline-none focus:border-violet-500 transition-colors"
      />

      {filteredProjects.length === 0 ? (
        <p className="text-gray-500">No projects found for "{search}".</p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white/5 border border-white/10 rounded-xl p-6 flex flex-col gap-4 hover:border-violet-500/50 transition-all duration-300 hover:-translate-y-1"
            >
              <h2 className="text-xl font-semibold text-white">{project.title}</h2>
              <p className="text-gray-400 text-sm flex-1">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-1 rounded-full bg-violet-500/20 text-violet-300 border border-violet-500/30"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                className="text-violet-400 hover:text-violet-300 text-sm font-medium transition-colors"
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
