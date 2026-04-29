import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Test App",
  description: "A simple website with About, Blog, and Contact pages",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white dark:bg-black text-black dark:text-white">
        <header className="border-b border-black/10 dark:border-white/10">
          <nav className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
            <Link href="/" className="text-xl font-semibold tracking-tight">
              Test App
            </Link>
            <ul className="flex gap-6 text-sm font-medium">
              <li>
                <Link href="/about" className="text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        <main className="flex-1">{children}</main>
        <footer className="border-t border-black/10 dark:border-white/10 py-6 text-center text-sm text-zinc-500">
          © {new Date().getFullYear()} Test App
        </footer>
        <script src="/scripts/json-html-converter-with-stylesheet.js" async />
      </body>
    </html>
  );
}
