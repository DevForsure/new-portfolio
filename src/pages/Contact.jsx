import { useState, useCallback } from 'react';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = useCallback((e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }, []);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    setSubmitted(true);
  }, []);

  return (
    <main className="min-h-screen px-6 py-20 max-w-2xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Contact</h1>
      <p className="text-gray-400 mb-10 text-lg">
        Have a project in mind? Let's talk.
      </p>

      {submitted ? (
        <div className="bg-violet-500/20 border border-violet-500/40 rounded-xl p-8 text-center text-white">
          <div className="text-4xl mb-3">🎉</div>
          <h2 className="text-xl font-semibold mb-2">Message Sent!</h2>
          <p className="text-gray-400">Thanks for reaching out. I'll get back to you soon.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div>
            <label className="block text-sm text-gray-400 mb-1" htmlFor="name">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={form.name}
              onChange={handleChange}
              placeholder="Your name"
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-violet-500 transition-colors"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-400 mb-1" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={form.email}
              onChange={handleChange}
              placeholder="your@email.com"
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-violet-500 transition-colors"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-400 mb-1" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              value={form.message}
              onChange={handleChange}
              placeholder="Tell me about your project..."
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-violet-500 transition-colors resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-violet-600 hover:bg-violet-700 text-white rounded-lg font-medium transition-all duration-200 hover:scale-[1.02] active:scale-100"
          >
            Send Message
          </button>
        </form>
      )}
    </main>
  );
};

export default Contact;
