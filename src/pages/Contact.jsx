import { useState, useCallback } from 'react';
import { useTheme } from '../context/ThemeContext';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const { dark } = useTheme();

  const handleChange = useCallback((e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }, []);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    setSubmitted(true);
  }, []);

  const inputClass = `w-full border rounded-lg px-4 py-3 focus:outline-none focus:border-violet-500 transition-colors ${
    dark
      ? 'bg-white/5 border-white/10 text-white placeholder-gray-600'
      : 'bg-white border-gray-300 text-gray-900 placeholder-gray-400'
  }`;

  const labelClass = `block text-sm mb-1 ${dark ? 'text-gray-400' : 'text-gray-600'}`;

  return (
    <main className="min-h-screen px-6 py-20 max-w-2xl mx-auto">
      <h1 className={`text-4xl md:text-5xl font-bold mb-4 ${dark ? 'text-white' : 'text-gray-900'}`}>
        Contact
      </h1>
      <p className={`mb-10 text-lg ${dark ? 'text-gray-400' : 'text-gray-600'}`}>
        Have a project in mind? Let's talk.
      </p>

      {submitted ? (
        <div
          className={`border rounded-xl p-8 text-center ${
            dark
              ? 'bg-violet-500/20 border-violet-500/40 text-white'
              : 'bg-violet-50 border-violet-200 text-gray-900'
          }`}
        >
          <div className="text-4xl mb-3">🎉</div>
          <h2 className="text-xl font-semibold mb-2">Message Sent!</h2>
          <p className={dark ? 'text-gray-400' : 'text-gray-600'}>
            Thanks for reaching out. I'll get back to you soon.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div>
            <label className={labelClass} htmlFor="name">
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
              className={inputClass}
            />
          </div>

          <div>
            <label className={labelClass} htmlFor="email">
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
              className={inputClass}
            />
          </div>

          <div>
            <label className={labelClass} htmlFor="message">
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
              className={`${inputClass} resize-none`}
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
