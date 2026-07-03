const Home = () => {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
        Hi, I'm <span className="text-violet-400">Yash</span>
      </h1>
      <p className="text-lg md:text-xl text-gray-400 max-w-xl mb-8">
        Full-Stack Developer · UI/UX Enthusiast · Open Source Contributor
      </p>
      <div className="flex gap-4 flex-wrap justify-center">
        <a
          href="/projects"
          className="px-6 py-3 bg-violet-600 hover:bg-violet-700 text-white rounded-lg font-medium transition-all duration-200 hover:scale-105"
        >
          View My Work
        </a>
        <a
          href="/contact"
          className="px-6 py-3 border border-violet-500 text-violet-400 hover:bg-violet-500/10 rounded-lg font-medium transition-all duration-200 hover:scale-105"
        >
          Contact Me
        </a>
      </div>
    </main>
  );
};

export default Home;
