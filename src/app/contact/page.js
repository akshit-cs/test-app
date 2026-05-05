export const metadata = {
  title: "Contact Us | Test App",
};

export default function ContactPage() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold tracking-tight mb-6">Contact Us</h1>
      <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-10">
        Have a question or want to work together? Fill out the form below.

      </p>
      <form className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-2">
            Name
          </label>
          <input
            id="name"
            type="text"
            placeholder="Your name"
            className="w-full px-4 py-2 rounded-lg border border-black/20 dark:border-white/20 bg-transparent focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="you@example.com"
            className="w-full px-4 py-2 rounded-lg border border-black/20 dark:border-white/20 bg-transparent focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-2">
            Message
          </label>
          <textarea
            id="message"
            rows={5}
            placeholder="Your message..."
            className="w-full px-4 py-2 rounded-lg border border-black/20 dark:border-white/20 bg-transparent focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white resize-none"
          />
        </div>
        <button
          type="submit"
          className="px-6 py-3 rounded-full bg-black dark:bg-white text-white dark:text-black font-medium hover:opacity-80 transition-opacity"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
