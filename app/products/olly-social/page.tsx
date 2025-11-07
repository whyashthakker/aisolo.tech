import Link from "next/link";
import type { Metadata } from "next";
import Navbar from "../../components/Navbar";

export const metadata: Metadata = {
  title: "olly.social - AI Social Media Engagement Chrome Extension | AISOLO",
  description: "AI-powered Chrome extension with 25K+ users for smart social media engagement. Generate comments, predict virality, and automate engagement across 12+ platforms including LinkedIn, Instagram, Twitter, and more.",
  keywords: "olly.social, AI social media, Chrome extension, social media engagement, AI comments, virality prediction, LinkedIn automation, Instagram engagement, Twitter automation",
  openGraph: {
    title: "olly.social - AI Social Media Engagement Chrome Extension",
    description: "AI-powered Chrome extension with 25K+ users for smart social media engagement across 12+ platforms.",
    url: "https://aisolo.tech/products/olly-social",
  },
};

export default function OllySocialProduct() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="font-mono text-sm bg-[#f6f6ef] min-h-screen">
      <Navbar />
      <div className="max-w-3xl mx-auto p-6">
        <header className="mb-6 pb-3">
          <div className="flex items-center gap-3 mb-2">
            <Link href="/products" className="text-[#ff6600] hover:underline text-xs">← Back to Products</Link>
          </div>
          <h1 className="text-xl font-bold text-black mb-2">olly.social</h1>
          <p className="text-gray-800 text-xs">AI-powered social media engagement for modern professionals</p>
        </header>

      <main>
        <section className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-base font-bold text-[#ff6600]">Product Overview</h2>
            <a 
              href="https://olly.social" 
              className="inline-block bg-[#ff6600] text-white px-3 py-1 rounded text-xs hover:bg-orange-700 transition-colors"
              target="_blank" 
              rel="noopener noreferrer"
            >
              Visit olly.social
            </a>
          </div>
          <div className="mb-4">
            <span className="inline-block px-2 py-1 bg-green-100 text-green-700 rounded text-xs mr-2">25K+ Active Users</span>
            <span className="inline-block px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs">Chrome Extension</span>
          </div>
          <p className="text-gray-800 text-xs mb-4 leading-relaxed">
            olly.social is AISOLO's AI-powered Chrome extension that revolutionizes social media engagement. 
            With over 25,000 active users, it helps professionals, marketers, and content creators generate 
            authentic comments, predict viral content, and automate engagement across 12+ major platforms.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-base font-bold mb-3 text-[#ff6600]">Core AI Features</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="bg-white p-3 rounded border border-gray-200">
              <h3 className="font-bold text-xs mb-2 text-gray-800">🤖 Smart Comment Generation</h3>
              <p className="text-xs text-gray-800">Generate dynamic, tailored comments in your unique voice that adapt and improve over time</p>
            </div>
            <div className="bg-white p-3 rounded border border-gray-200">
              <h3 className="font-bold text-xs mb-2 text-gray-800">📈 Virality Prediction</h3>
              <p className="text-xs text-gray-800">AI-powered analysis to predict what content will go viral with accuracy scores</p>
            </div>
            <div className="bg-white p-3 rounded border border-gray-200">
              <h3 className="font-bold text-xs mb-2 text-gray-800">🎭 AI Personalities</h3>
              <p className="text-xs text-gray-800">Create custom AI personalities like "AI Expert" or "Marketing Manager" for different commenting styles</p>
            </div>
            <div className="bg-white p-3 rounded border border-gray-200">
              <h3 className="font-bold text-xs mb-2 text-gray-800">⚡ Auto-Engagement</h3>
              <p className="text-xs text-gray-800">Set preferences once and let AI handle your social media engagement automatically</p>
            </div>
          </div>
        </section>

        <section className="mb-6">
          <h2 className="text-base font-bold mb-3 text-[#ff6600]">Supported Platforms</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-xs">
            <div className="flex items-center text-gray-800">
              <span className="text-[#ff6600] mr-1">•</span>
              LinkedIn
            </div>
            <div className="flex items-center text-gray-800">
              <span className="text-[#ff6600] mr-1">•</span>
              Instagram
            </div>
            <div className="flex items-center text-gray-800">
              <span className="text-[#ff6600] mr-1">•</span>
              Twitter/X
            </div>
            <div className="flex items-center text-gray-800">
              <span className="text-[#ff6600] mr-1">•</span>
              Facebook
            </div>
            <div className="flex items-center text-gray-800">
              <span className="text-[#ff6600] mr-1">•</span>
              YouTube
            </div>
            <div className="flex items-center text-gray-800">
              <span className="text-[#ff6600] mr-1">•</span>
              TikTok
            </div>
            <div className="flex items-center text-gray-800">
              <span className="text-[#ff6600] mr-1">•</span>
              Reddit
            </div>
            <div className="flex items-center text-gray-800">
              <span className="text-[#ff6600] mr-1">•</span>
              Product Hunt
            </div>
            <div className="flex items-center text-gray-800">
              <span className="text-[#ff6600] mr-1">•</span>
              Threads
            </div>
            <div className="flex items-center text-gray-800">
              <span className="text-[#ff6600] mr-1">•</span>
              Quora
            </div>
            <div className="flex items-center text-gray-800">
              <span className="text-[#ff6600] mr-1">•</span>
              HackerNews
            </div>
            <div className="flex items-center text-gray-800">
              <span className="text-[#ff6600] mr-1">•</span>
              Medium
            </div>
          </div>
          <p className="text-xs text-gray-800 mt-2">+ Skool community and more platforms on request</p>
        </section>

        <section className="mb-6">
          <h2 className="text-base font-bold mb-3 text-[#ff6600]">Advanced Capabilities</h2>
          <div className="space-y-3">
            <div className="bg-gray-50 p-3 rounded border-l-2 border-[#ff6600]">
              <h3 className="font-bold text-gray-500 text-xs mb-1">Custom Comment Panels</h3>
              <p className="text-xs text-gray-800">One-click commenting with customized panels offering various styles and tones (especially powerful on LinkedIn)</p>
            </div>
            <div className="bg-gray-50 p-3 rounded border-l-2 border-[#ff6600]">
              <h3 className="font-bold text-gray-500 text-xs mb-1">Multi-Model AI Support</h3>
              <p className="text-xs text-gray-800">Integrates with GPT-3.5, GPT-4, Claude-3, Gemini, Llama-3, Gemma 2, plus local models via Ollama</p>
            </div>
            <div className="bg-gray-50 p-3 rounded border-l-2 border-[#ff6600]">
              <h3 className="font-bold text-gray-500 text-xs mb-1">Agency-Ready</h3>
              <p className="text-xs text-gray-800">Create multiple AI personalities to match different client commenting styles for agency workflows</p>
            </div>
            <div className="bg-gray-50 p-3 rounded border-l-2 border-[#ff6600]">
              <h3 className="font-bold text-gray-500 text-xs mb-1">Performance Analytics</h3>
              <p className="text-xs text-gray-800">Track auto-commenting performance with detailed insights and growth metrics across all platforms</p>
            </div>
          </div>
        </section>

        <section className="mb-6">
          <h2 className="text-base font-bold mb-3 text-[#ff6600]">Pricing & Plans</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded border border-gray-200">
              <h3 className="font-bold text-sm mb-2 text-gray-800">Free Forever Plan</h3>
              <div className="text-xs space-y-1 text-gray-800">
                <div>• 5 AI-generated comments per day</div>
                <div>• Basic virality prediction</div>
                <div>• All supported platforms</div>
                <div>• Community support</div>
              </div>
            </div>
            <div className="bg-white p-4 rounded border border-gray-200">
              <h3 className="font-bold text-sm mb-2 text-gray-800">Pro Plans Available</h3>
              <div className="text-xs space-y-1 text-gray-800">
                <div>• Unlimited comment generation</div>
                <div>• Advanced AI personalities</div>
                <div>• Auto-commenting features</div>
                <div>• Detailed analytics</div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-6">
          <h2 className="text-base font-bold mb-3 text-[#ff6600]">Perfect For</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-xs">
            <div className="flex items-center text-gray-800">
              <span className="text-[#ff6600] mr-1">•</span>
              Marketing Professionals
            </div>
            <div className="flex items-center text-gray-800">
              <span className="text-[#ff6600] mr-1">•</span>
              Content Creators
            </div>
            <div className="flex items-center text-gray-800">
              <span className="text-[#ff6600] mr-1">•</span>
              Social Media Managers
            </div>
            <div className="flex items-center text-gray-800">
              <span className="text-[#ff6600] mr-1">•</span>
              Digital Agencies
            </div>
            <div className="flex items-center text-gray-800">
              <span className="text-[#ff6600] mr-1">•</span>
              Business Owners
            </div>
            <div className="flex items-center text-gray-800">
              <span className="text-[#ff6600] mr-1">•</span>
              Influencers
            </div>
          </div>
        </section>

        <section className="mb-6 bg-orange-50 p-4 rounded border border-orange-200">
          <h2 className="text-base font-bold mb-2 text-[#ff6600]">Join 25,000+ Users</h2>
          <p className="text-xs text-gray-800 mb-3">
            olly.social has helped thousands of professionals save time while maintaining authentic engagement across 
            social media platforms. Built with AISOLO's commitment to AI that enhances rather than replaces human creativity.
          </p>
          <div className="space-y-2">
            <a 
              href="https://olly.social" 
              className="inline-block bg-[#ff6600] text-white px-3 py-1 rounded text-xs hover:bg-orange-700 transition-colors mr-2"
              target="_blank" 
              rel="noopener noreferrer"
            >
              Install Chrome Extension
            </a>
            <a 
              href="https://chromewebstore.google.com/detail/olly-ai-agent-for-social/ofjpapfmglfjdhmadpegoeifocomaeje" 
              className="inline-block border border-[#ff6600] text-[#ff6600] px-3 py-1 rounded text-xs hover:bg-orange-50 transition-colors"
              target="_blank" 
              rel="noopener noreferrer"
            >
              View in Chrome Store
            </a>
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