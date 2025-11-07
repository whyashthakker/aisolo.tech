import Link from "next/link";
import type { Metadata } from "next";
import Navbar from "../../components/Navbar";

export const metadata: Metadata = {
  title: "bgblur.com - AI Video Privacy & Background Blur Tool | AISOLO",
  description: "AI-powered video privacy protection with smart background blur, face blur, and license plate blur. Perfect for content creators, agencies, and legal compliance. Free plan available.",
  keywords: "bgblur.com, video privacy, AI background blur, face blur, license plate blur, video anonymization, streaming background blur, content creation",
  openGraph: {
    title: "bgblur.com - AI Video Privacy & Background Blur Tool",
    description: "AI-powered video privacy protection with smart background blur, face blur, and license plate blur.",
    url: "https://aisolo.tech/products/bgblur",
  },
};

export default function BgBlurProduct() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="font-mono text-sm bg-[#f6f6ef] min-h-screen">
      <Navbar />
      <div className="max-w-3xl mx-auto p-6">
        <header className="mb-6 pb-3">
          <div className="flex items-center gap-3 mb-2">
            <Link href="/products" className="text-[#ff6600] hover:underline text-xs">← Back to Products</Link>
          </div>
          <h1 className="text-xl font-bold text-black mb-2">bgblur.com</h1>
          <p className="text-gray-800 text-xs">AI-powered video privacy protection for creators and businesses</p>
        </header>

      <main>
        <section className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-base font-bold text-[#ff6600]">Product Overview</h2>
            <a 
              href="https://bgblur.com" 
              className="inline-block bg-[#ff6600] text-white px-3 py-1 rounded text-xs hover:bg-orange-700 transition-colors"
              target="_blank" 
              rel="noopener noreferrer"
            >
              Visit bgblur.com
            </a>
          </div>
          <p className="text-gray-800 text-xs mb-4 leading-relaxed">
            bgblur.com is AISOLO's privacy-first video editing platform that uses advanced AI to automatically detect and blur 
            backgrounds, faces, license plates, or any objects in your videos. Perfect for content creators, agencies, 
            journalists, and businesses who need to protect privacy or create professional content quickly.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-base font-bold mb-3 text-[#ff6600]">Key Features</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="bg-white p-3 rounded border border-gray-200">
              <h3 className="font-bold text-xs mb-2 text-gray-800">🎯 Smart AI Detection</h3>
              <p className="text-xs text-gray-800">AI automatically analyzes videos and detects backgrounds, faces, license plates, or any selected objects with motion tracking</p>
            </div>
            <div className="bg-white p-3 rounded border border-gray-200">
              <h3 className="font-bold text-xs mb-2 text-gray-800">🎥 Live Streaming</h3>
              <p className="text-xs text-gray-800">Real-time background blur for live streams on YouTube, Twitch, or Instagram without green screen</p>
            </div>
            <div className="bg-white p-3 rounded border border-gray-200">
              <h3 className="font-bold text-xs mb-2 text-gray-800">📱 Multiple Formats</h3>
              <p className="text-xs text-gray-800">Supports MP4, MOV, and M4V input with export to MP4, MOV, or WebM while maintaining HD quality</p>
            </div>
            <div className="bg-white p-3 rounded border border-gray-200">
              <h3 className="font-bold text-xs mb-2 text-gray-800">⚡ Fast Processing</h3>
              <p className="text-xs text-gray-800">Blur backgrounds, faces, or license plates in seconds with no costly equipment needed</p>
            </div>
          </div>
        </section>

        <section className="mb-6">
          <h2 className="text-base font-bold mb-3 text-[#ff6600]">Core Capabilities</h2>
          <div className="space-y-3">
            <div className="bg-gray-50 p-3 rounded border-l-2 border-[#ff6600]">
              <h3 className="font-bold text-gray-500 text-xs mb-1">Background Blur</h3>
              <p className="text-xs text-gray-800">Remove distractions and create cinematic look for professional content</p>
            </div>
            <div className="bg-gray-50 p-3 rounded border-l-2 border-[#ff6600]">
              <h3 className="font-bold text-gray-500 text-xs mb-1">Face Blur</h3>
              <p className="text-xs text-gray-800">Protect privacy by automatically blurring faces in videos for legal compliance</p>
            </div>
            <div className="bg-gray-50 p-3 rounded border-l-2 border-[#ff6600]">
              <h3 className="font-bold text-gray-500 text-xs mb-1">License Plate Blur</h3>
              <p className="text-xs text-gray-800">Automatically detect and blur license plates for privacy protection</p>
            </div>
            <div className="bg-gray-50 p-3 rounded border-l-2 border-[#ff6600]">
              <h3 className="font-bold text-gray-500 text-xs mb-1">Custom Object Blur</h3>
              <p className="text-xs text-gray-800">Select any object to blur with AI-powered motion tracking</p>
            </div>
          </div>
        </section>

        <section className="mb-6">
          <h2 className="text-base font-bold mb-3 text-[#ff6600]">Pricing & Plans</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded border border-gray-200">
              <h3 className="font-bold text-sm mb-2 text-gray-800">Free Plan</h3>
              <div className="text-xs space-y-1 text-gray-800">
                <div>• Videos under 200MB</div>
                <div>• Up to 10 minutes duration</div>
                <div>• All blur functions included</div>
                <div>• HD quality export</div>
              </div>
            </div>
            <div className="bg-white p-4 rounded border border-gray-200">
              <h3 className="font-bold text-sm mb-2 text-gray-800">Pro Plan</h3>
              <div className="text-xs space-y-1 text-gray-800">
                <div>• Unlimited video processing</div>
                <div>• Longer video support</div>
                <div>• Priority processing</div>
                <div>• Advanced features</div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-6">
          <h2 className="text-base font-bold mb-3 text-[#ff6600]">Perfect For</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-xs">
            <div className="flex items-center text-gray-800">
              <span className="text-[#ff6600] mr-1">•</span>
              Content Creators
            </div>
            <div className="flex items-center text-gray-800">
              <span className="text-[#ff6600] mr-1">•</span>
              Video Agencies
            </div>
            <div className="flex items-center text-gray-800">
              <span className="text-[#ff6600] mr-1">•</span>
              Live Streamers
            </div>
            <div className="flex items-center text-gray-800">
              <span className="text-[#ff6600] mr-1">•</span>
              Journalists
            </div>
            <div className="flex items-center text-gray-800">
              <span className="text-[#ff6600] mr-1">•</span>
              Legal Compliance
            </div>
            <div className="flex items-center text-gray-800">
              <span className="text-[#ff6600] mr-1">•</span>
              Privacy Protection
            </div>
          </div>
        </section>

        <section className="mb-6 bg-orange-50 p-4 rounded border border-orange-200">
          <h2 className="text-base font-bold mb-2 text-[#ff6600]">Why Choose bgblur.com?</h2>
          <p className="text-xs text-gray-800 mb-3">
            Built by AISOLO with privacy-first principles, bgblur.com combines cutting-edge AI with intuitive design 
            to make video privacy protection accessible to everyone. Whether you're a solo creator or managing content 
            for enterprise clients, our platform scales with your needs.
          </p>
          <a 
            href="https://bgblur.com" 
            className="inline-block bg-[#ff6600] text-white px-3 py-1 rounded text-xs hover:bg-orange-700 transition-colors"
            target="_blank" 
            rel="noopener noreferrer"
          >
            Start Using bgblur.com
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