import Link from "next/link";
import type { Metadata } from "next";
import Navbar from "../../components/Navbar";

export const metadata: Metadata = {
  title: "AI Maker Bootcamp Success: 40% Retention & Real Results | AISOLO Blog",
  description: "How we're teaching people with little tech exposure to build AI products in 6 weeks. 40% batch-to-batch retention and 30% building meaningful projects. Learn our approach.",
  keywords: "AI Maker Bootcamp, AI education success, tech skills training, prompt engineering, AI product development, AISOLO training",
  openGraph: {
    title: "AI Maker Bootcamp: Building Top 1% Tech Skills for Everyone",
    description: "How we're teaching people with little tech exposure to build AI products in 6 weeks.",
    url: "https://aisolo.tech/blog/ai-maker-bootcamp-success",
  },
};

export default function BlogPost() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="font-mono text-sm bg-[#f6f6ef] min-h-screen">
      <Navbar />
      <div className="max-w-3xl mx-auto p-6">
        <header className="mb-6 pb-3">
          <div className="flex items-center gap-3 mb-2">
            <Link href="/blog" className="text-[#ff6600] hover:underline text-xs">← Back to Blog</Link>
          </div>
          <div className="text-xs text-gray-500 mb-2">November 7, 2025</div>
          <h1 className="text-xl font-bold text-black mb-2">AI Maker Bootcamp: Building Top 1% Tech Skills for Everyone</h1>
          <p className="text-gray-600 text-xs mb-2">How we're transforming beginners into AI builders in just 6 weeks</p>
          <div className="text-xs text-gray-700 border-l-2 border-[#ff6600] pl-2">
            By <a href="https://www.linkedin.com/in/goyashy/" className="text-[#ff6600] hover:underline" target="_blank" rel="noopener noreferrer">Yash Thakker</a>, Founder & CEO of AISOLO Technologies Private Limited
          </div>
        </header>

      <main className="prose prose-sm max-w-none">
        <section className="mb-6">
          <h2 className="text-base font-bold mb-3 text-black">Teaching Top 1% Tech Skills to Everyone</h2>
          <p className="text-gray-800 text-xs mb-3 leading-relaxed">
            Our AI Maker Bootcamp has been a revelation. We've completed batches 2 and 3, and the results speak for themselves: 
            we're successfully teaching people with little to no tech exposure the same advanced skills that top 1% technologists use daily.
          </p>
          <p className="text-gray-800 text-xs mb-3 leading-relaxed">
            The secret isn't in complex frameworks or overwhelming theory. It's in our approach: start with concepts, 
            start easy, and focus relentlessly on what matters to get from point A to point B.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-base font-bold mb-3 text-black">Our Learning Philosophy</h2>
          <div className="space-y-3">
            <div className="bg-gray-50 p-3 rounded border-l-2 border-[#ff6600]">
              <h3 className="font-bold text-sm mb-1 text-black">Start with Concepts</h3>
              <p className="text-xs text-gray-800">We don't dive into code first. We help students understand the 'why' before the 'how'.</p>
            </div>
            <div className="bg-gray-50 p-3 rounded border-l-2 border-[#ff6600]">
              <h3 className="font-bold text-sm mb-1 text-black">Master Prompt Engineering</h3>
              <p className="text-xs text-gray-800">The most valuable tech skill today. Our students learn to communicate effectively with AI systems.</p>
            </div>
            <div className="bg-gray-50 p-3 rounded border-l-2 border-[#ff6600]">
              <h3 className="font-bold text-sm mb-1 text-black">Focus on What Matters</h3>
              <p className="text-xs text-gray-800">No fluff. Every lesson is designed to move students closer to building something real.</p>
            </div>
            <div className="bg-gray-50 p-3 rounded border-l-2 border-[#ff6600]">
              <h3 className="font-bold text-sm mb-1 text-black">6-Week Journey, Not 36-Hour Sessions</h3>
              <p className="text-xs text-gray-800">We treat this as a transformative 6-week experience, not a series of disconnected training hours.</p>
            </div>
          </div>
        </section>

        <section className="mb-6">
          <h2 className="text-base font-bold mb-3 text-black">Exceptional Results</h2>
          <p className="text-gray-800 text-xs mb-3 leading-relaxed">
            The delivery has been nothing short of awesome. Our metrics tell an incredible story:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded border border-gray-200">
              <div className="text-2xl font-bold text-[#ff6600] mb-1">40%</div>
              <div className="text-xs text-gray-800 font-semibold">Retention rate from batch to batch</div>
              <div className="text-xs text-gray-800 mt-1">Students who complete one bootcamp and join the next</div>
            </div>
            <div className="bg-white p-4 rounded border border-gray-200">
              <div className="text-2xl font-bold text-[#ff6600] mb-1">30%</div>
              <div className="text-xs text-gray-800 font-semibold">Building something meaningful</div>
              <div className="text-xs text-gray-800 mt-1">Students who go on to create real AI products</div>
            </div>
          </div>
        </section>

        <section className="mb-6">
          <h2 className="text-base font-bold mb-3 text-black">Why This Matters</h2>
          <p className="text-gray-800 text-xs mb-3 leading-relaxed">
            These numbers represent more than statistics—they represent lives changed. When 30% of our students build something meaningful, 
            that's 30% who've gone from tech-curious to tech-capable. When 40% return for more learning, 
            that's validation that we're not just teaching skills, we're building confidence.
          </p>
          <p className="text-gray-800 text-xs mb-3 leading-relaxed">
            In an era where AI literacy is becoming as fundamental as digital literacy was two decades ago, 
            we're proud to be democratizing access to these transformative skills. 
            One bootcamp, one student, one meaningful project at a time.
          </p>
        </section>

        <section className="mb-6 bg-orange-50 p-4 rounded border border-orange-200">
          <h2 className="text-base font-bold mb-2 text-[#ff6600]">Join Our Next Batch</h2>
          <p className="text-xs text-gray-800 mb-3">
            Ready to join the ranks of AI makers? Our next bootcamp starts soon.
          </p>
          <Link 
            href="mailto:yash@explainx.ai?subject=AI Maker Bootcamp Interest" 
            className="inline-block bg-[#ff6600] text-white px-3 py-1 rounded text-xs hover:bg-orange-700 transition-colors"
          >
            Get in Touch
          </Link>
        </section>
      </main>

      <footer className="mt-8 pt-3 border-t border-gray-300 text-center text-gray-500 text-xs">
        <p>© {currentYear} AISOLO TECHNOLOGIES PRIVATE LIMITED. Mumbai, India.</p>
      </footer>
      </div>
    </div>
  );
}