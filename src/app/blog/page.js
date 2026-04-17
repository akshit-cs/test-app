export const metadata = {
  title: "Blog | Test App",
};

const posts = [
  {
    slug: "getting-started",
    title: "Getting Started with Test App",
    date: "April 10, 2026",
    excerpt: "A quick intro to what Test App is and how to get up and running.",
  },
  {
    slug: "our-philosophy",
    title: "Our Philosophy: Simple Over Complex",
    date: "April 3, 2026",
    excerpt: "Why we believe simplicity is the ultimate feature.",
  },
  {
    slug: "whats-next",
    title: "What's Next for Test App",
    date: "March 28, 2026",
    excerpt: "A look at the roadmap and what we're building next.",
  },
];

export default function BlogPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold tracking-tight mb-10">Blog</h1>
      <ul className="space-y-8">
        {posts.map((post) => (
          <li key={post.slug} className="border-b border-black/10 dark:border-white/10 pb-8">
            <p className="text-sm text-zinc-500 mb-1">{post.date}</p>
            <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
            <p className="text-zinc-600 dark:text-zinc-400">{post.excerpt}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
