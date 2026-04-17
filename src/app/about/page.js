export const metadata = {
  title: "About Us | Test App",
};

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold tracking-tight mb-6">About Us</h1>
      <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-6 leading-relaxed">
        We are Test App — a small team building clean, focused software. Our goal is to
        ship fast and keep things simple.
      </p>
      <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
        Founded with the belief that good tools should get out of your way, we focus on
        developer experience and user-first design.
      </p>
    </div>
  );
}
