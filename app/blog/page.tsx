import Link from "next/link";
import type { Metadata } from "next";
import Navbar from "../components/Navbar";

export const metadata: Metadata = {
  title: "AISOLO Blog - AI Education & Privacy Tech Insights | AISOLO Technologies",
  description: "Read the latest insights on AI education, privacy-first technology, and our AI Maker Bootcamp success stories. Learn from AISOLO's journey in democratizing AI skills.",
  keywords: "AI education blog, privacy technology, AI Maker Bootcamp, AISOLO blog, AI training insights, machine learning education",
  openGraph: {
    title: "AISOLO Blog - AI Education & Privacy Tech Insights",
    description: "Read the latest insights on AI education, privacy-first technology, and our AI Maker Bootcamp success stories.",
    url: "https://aisolo.tech/blog",
  },
};

export default function Blog() {
  const currentYear = new Date().getFullYear();

  const blogPosts = [
    {
      slug: "ai-maker-bootcamp-success",
      title: "AI Maker Bootcamp: Building Top 1% Tech Skills for Everyone",
      date: "2025-11-07",
      excerpt: "How we're teaching people with little tech exposure to build meaningful AI products in just 6 weeks.",
    },
  ];

  return (
    <div className="font-mono text-sm bg-[#f6f6ef] min-h-screen">
      <Navbar />
      <div className="max-w-3xl mx-auto p-6">
        <header className="mb-6 pb-3">
          <h1 className="text-xl font-bold text-black">AISOLO Blog</h1>
          <p className="text-gray-600 mt-1">Insights on AI education and privacy-first technology</p>
        </header>

      <main>
        <section className="mb-6">
          <h2 className="text-base font-bold mb-4 text-[#ff6600]">Latest Posts</h2>
          <div className="space-y-4">
            {blogPosts.map((post) => (
              <article key={post.slug} className="border-b border-gray-200 pb-4">
                <div className="text-xs text-gray-500 mb-1">{post.date}</div>
                <h3 className="text-sm font-bold mb-2">
                  <Link href={`/blog/${post.slug}`} className="text-[#ff6600] hover:underline">
                    {post.title}
                  </Link>
                </h3>
                <p className="text-xs text-gray-800">{post.excerpt}</p>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="mt-8 pt-3 border-t border-gray-300 text-center text-gray-500 text-xs">
        <p>© {currentYear} AISOLO TECHNOLOGIES PRIVATE LIMITED. Mumbai, India.</p>
      </footer>
      </div>
    </div>
  );
}