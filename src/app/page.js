import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-24 text-center">
      <h1 className="text-5xl font-bold tracking-tight mb-6">Welcome to Test App</h1>
      <p className="text-xl text-zinc-600 dark:text-zinc-400 mb-12 max-w-xl mx-auto">
        A simple, clean website. Explore our pages to learn more.
        AKSHIT.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <Link
          href="/about"
          className="px-6 py-3 rounded-full bg-black dark:bg-white text-white dark:text-black font-medium hover:opacity-80 transition-opacity"
        >
          About Us
        </Link>
        <Link
          href="/blog"
          className="px-6 py-3 rounded-full border border-black/20 dark:border-white/20 font-medium hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
        >
          Blog
        </Link>
        <Link
          href="/contact"
          className="px-6 py-3 rounded-full border border-black/20 dark:border-white/20 font-medium hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
}
