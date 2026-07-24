import Link from "next/link";
import type { Metadata } from "next";
import Navbar from "../../components/Navbar";

export const metadata: Metadata = {
  title: "bunpav.com - Fast, Minimal AI Tools & Micro-Applications | AISOLO",
  description: "Lightweight, zero-friction AI utilities and micro-applications designed for speed, simplicity, and efficiency.",
  keywords: "bunpav.com, AI micro-apps, fast AI tools, lightweight AI, productivity tools, AISOLO",
  openGraph: {
    title: "bunpav.com - Fast, Minimal AI Tools & Micro-Applications",
    description: "Lightweight, zero-friction AI utilities and micro-applications designed for speed and simplicity.",
    url: "https://aisolo.tech/products/bunpav",
  },
};

export default function BunpavProduct() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="font-mono text-sm bg-[#f6f6ef] min-h-screen">
      <Navbar />
      <div className="max-w-3xl mx-auto p-6">
        <header className="mb-6 pb-3">
          <div className="flex items-center gap-3 mb-2">
            <Link href="/products" className="text-[#ff6600] hover:underline text-xs">← Back to Products</Link>
          </div>
          <h1 className="text-xl font-bold text-black mb-2">bunpav.com</h1>
          <p className="text-gray-800 text-xs">Fast, minimal AI tools and zero-friction micro-applications</p>
        </header>

        <main>
          <section className="mb-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-base font-bold text-[#ff6600]">Product Overview</h2>
              <a 
                href="https://bunpav.com" 
                className="inline-block bg-[#ff6600] text-white px-3 py-1 rounded text-xs hover:bg-orange-700 transition-colors"
                target="_blank" 
                rel="noopener noreferrer"
              >
                Visit bunpav.com
              </a>
            </div>
            <p className="text-gray-800 text-xs mb-4 leading-relaxed">
              bunpav.com is AISOLO's suite of ultra-fast, minimal AI micro-applications built for immediate utility. 
              Designed with zero clutter and instant load times, bunpav provides everyday AI tools that solve specific 
              tasks without complex setups or unnecessary onboarding steps.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-base font-bold mb-3 text-[#ff6600]">Key Features</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="bg-white p-3 rounded border border-gray-200">
                <h3 className="font-bold text-xs mb-2 text-gray-800">⚡ Lightning-Fast Speed</h3>
                <p className="text-xs text-gray-800">Instant load times and fast AI responses built on lightweight edge infrastructure</p>
              </div>
              <div className="bg-white p-3 rounded border border-gray-200">
                <h3 className="font-bold text-xs mb-2 text-gray-800">🎯 Zero Friction</h3>
                <p className="text-xs text-gray-800">No bloated menus or paywalls—just straightforward AI micro-utilities</p>
              </div>
              <div className="bg-white p-3 rounded border border-gray-200">
                <h3 className="font-bold text-xs mb-2 text-gray-800">🛠️ Focused Workflows</h3>
                <p className="text-xs text-gray-800">Single-purpose AI tools designed to solve one task extremely well</p>
              </div>
              <div className="bg-white p-3 rounded border border-gray-200">
                <h3 className="font-bold text-xs mb-2 text-gray-800">📱 Mobile & Web Ready</h3>
                <p className="text-xs text-gray-800">Responsive, minimal interfaces optimized for any device or screen size</p>
              </div>
            </div>
          </section>

          <section className="mb-6">
            <h2 className="text-base font-bold mb-3 text-[#ff6600]">Core Philosophy</h2>
            <div className="space-y-3">
              <div className="bg-gray-50 p-3 rounded border-l-2 border-[#ff6600]">
                <h3 className="font-bold text-gray-500 text-xs mb-1">Minimalism First</h3>
                <p className="text-xs text-gray-800">Stripped of corporate bloat, delivering fast software that gets out of your way.</p>
              </div>
              <div className="bg-gray-50 p-3 rounded border-l-2 border-[#ff6600]">
                <h3 className="font-bold text-gray-500 text-xs mb-1">Privacy-Conscious</h3>
                <p className="text-xs text-gray-800">Transient processing ensures your data stays private and temporary.</p>
              </div>
            </div>
          </section>

          <section className="mb-6 bg-orange-50 p-4 rounded border border-orange-200">
            <h2 className="text-base font-bold mb-2 text-[#ff6600]">Try bunpav.com Today</h2>
            <p className="text-xs text-gray-800 mb-3">
              Experience the speed of minimal AI tools crafted for maximum efficiency.
            </p>
            <a 
              href="https://bunpav.com" 
              className="inline-block bg-[#ff6600] text-white px-3 py-1 rounded text-xs hover:bg-orange-700 transition-colors"
              target="_blank" 
              rel="noopener noreferrer"
            >
              Visit bunpav.com
            </a>
          </section>
        </main>

        <footer className="mt-8 pt-3 border-t border-gray-300 text-center text-gray-500 text-xs">
          <p>© {currentYear} AISOLO TECHNOLOGIES PRIVATE LIMITED. Mumbai, India.</p>
        </footer>
      </div>
    </div>
  );
}
