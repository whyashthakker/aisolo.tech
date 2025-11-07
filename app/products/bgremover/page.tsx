import Link from "next/link";
import type { Metadata } from "next";
import Navbar from "../../components/Navbar";

export const metadata: Metadata = {
  title: "bgremover.com - AI Background Removal Tool | AISOLO",
  description: "Professional AI background removal tool and unscreen.com alternative for e-commerce, product photography, and content creation. Remove backgrounds in seconds with smooth edges and bulk processing capabilities.",
  keywords: "bgremover.com, AI background removal, remove background, unscreen.com alternative, product photography, e-commerce images, bulk background removal, transparent background",
  openGraph: {
    title: "bgremover.com - AI Background Removal Tool",
    description: "Professional AI background removal tool for e-commerce, product photography, and content creation.",
    url: "https://aisolo.tech/products/bgremover",
  },
};

export default function BgRemoverProduct() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="font-mono text-sm bg-[#f6f6ef] min-h-screen">
      <Navbar />
      <div className="max-w-3xl mx-auto p-6">
        <header className="mb-6 pb-3">
          <div className="flex items-center gap-3 mb-2">
            <Link href="/products" className="text-[#ff6600] hover:underline text-xs">← Back to Products</Link>
          </div>
          <h1 className="text-xl font-bold text-black mb-2">bgremover.com</h1>
          <p className="text-gray-800 text-xs">Professional AI background removal for modern workflows</p>
        </header>

      <main>
        <section className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-base font-bold text-[#ff6600]">Product Overview</h2>
            <a 
              href="https://bgremover.com" 
              className="inline-block bg-[#ff6600] text-white px-3 py-1 rounded text-xs hover:bg-orange-700 transition-colors"
              target="_blank" 
              rel="noopener noreferrer"
            >
              Visit bgremover.com
            </a>
          </div>
          <p className="text-gray-800 text-xs mb-4 leading-relaxed">
            bgremover.com is AISOLO's professional AI background removal tool designed for e-commerce, 
            product photography, and content creation. As a powerful alternative to unscreen.com, it's powered 
            by advanced AI trained on millions of images and delivers clean, precise cutouts with smooth edges 
            in seconds, perfect for businesses that need high-quality background removal at scale.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-base font-bold mb-3 text-[#ff6600]">Core AI Capabilities</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="bg-white p-3 rounded border border-gray-200">
              <h3 className="font-bold text-xs mb-2 text-gray-800">⚡ Lightning Fast</h3>
              <p className="text-xs text-gray-800">Remove backgrounds in 3 seconds or less with automatic subject detection</p>
            </div>
            <div className="bg-white p-3 rounded border border-gray-200">
              <h3 className="font-bold text-xs mb-2 text-gray-800">✂️ Precise Edges</h3>
              <p className="text-xs text-gray-800">Neat, clear, and smooth cutout edges that handle complex details like hair and fur</p>
            </div>
            <div className="bg-white p-3 rounded border border-gray-200">
              <h3 className="font-bold text-xs mb-2 text-gray-800">📦 Bulk Processing</h3>
              <p className="text-xs text-gray-800">Process over 1,000 images in a single upload for e-commerce workflows</p>
            </div>
            <div className="bg-white p-3 rounded border border-gray-200">
              <h3 className="font-bold text-xs mb-2 text-gray-800">🎨 Smart Backgrounds</h3>
              <p className="text-xs text-gray-800">Replace with white, transparent, custom colors, or photo backgrounds instantly</p>
            </div>
          </div>
        </section>

        <section className="mb-6">
          <h2 className="text-base font-bold mb-3 text-[#ff6600]">Advanced Features</h2>
          <div className="space-y-3">
            <div className="bg-gray-50 p-3 rounded border-l-2 border-[#ff6600]">
              <h3 className="font-bold text-gray-500 text-xs mb-1">AI Subject Detection</h3>
              <p className="text-xs text-gray-800">Automatically detects and isolates main subjects in photos with high accuracy</p>
            </div>
            <div className="bg-gray-50 p-3 rounded border-l-2 border-[#ff6600]">
              <h3 className="font-bold text-gray-500 text-xs mb-1">Complex Detail Handling</h3>
              <p className="text-xs text-gray-800">Expertly processes challenging elements like hair, fur, and fine details</p>
            </div>
            <div className="bg-gray-50 p-3 rounded border-l-2 border-[#ff6600]">
              <h3 className="font-bold text-gray-500 text-xs mb-1">E-commerce Optimized</h3>
              <p className="text-xs text-gray-800">Specifically designed for product photography and online retail image requirements</p>
            </div>
            <div className="bg-gray-50 p-3 rounded border-l-2 border-[#ff6600]">
              <h3 className="font-bold text-gray-500 text-xs mb-1">Privacy Protected</h3>
              <p className="text-xs text-gray-800">All processed images are automatically deleted within 24 hours for security</p>
            </div>
          </div>
        </section>

        <section className="mb-6">
          <h2 className="text-base font-bold mb-3 text-[#ff6600]">Background Options</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <div className="bg-white p-3 rounded border border-gray-200 text-center">
              <div className="w-8 h-8 bg-white border border-gray-300 rounded mx-auto mb-2"></div>
              <div className="text-xs text-gray-800">White Background</div>
            </div>
            <div className="bg-white p-3 rounded border border-gray-200 text-center">
              <div className="w-8 h-8 bg-transparent border border-gray-300 rounded mx-auto mb-2" style={{backgroundImage: 'url("data:image/svg+xml,%3csvg width=\'100%25\' height=\'100%25\' xmlns=\'http://www.w3.org/2000/svg\'%3e%3cdefs%3e%3cpattern id=\'a\' patternUnits=\'userSpaceOnUse\' width=\'8\' height=\'8\'%3e%3crect x=\'0\' y=\'0\' width=\'4\' height=\'4\' fill=\'%23e5e5e5\'/%3e%3crect x=\'4\' y=\'4\' width=\'4\' height=\'4\' fill=\'%23e5e5e5\'/%3e%3c/pattern%3e%3c/defs%3e%3crect width=\'100%25\' height=\'100%25\' fill=\'url(%23a)\'/%3e%3c/svg%3e")'}}></div>
              <div className="text-xs text-gray-800">Transparent</div>
            </div>
            <div className="bg-white p-3 rounded border border-gray-200 text-center">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-500 rounded mx-auto mb-2"></div>
              <div className="text-xs text-gray-800">Custom Colors</div>
            </div>
            <div className="bg-white p-3 rounded border border-gray-200 text-center">
              <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-blue-500 rounded mx-auto mb-2"></div>
              <div className="text-xs text-gray-800">Photo Backgrounds</div>
            </div>
          </div>
        </section>

        <section className="mb-6">
          <h2 className="text-base font-bold mb-3 text-[#ff6600]">Use Cases</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="bg-white p-3 rounded border border-gray-200">
              <h3 className="font-bold text-xs mb-2 text-gray-800">🛒 E-commerce</h3>
              <p className="text-xs text-gray-800">Product photos for online stores with consistent backgrounds</p>
            </div>
            <div className="bg-white p-3 rounded border border-gray-200">
              <h3 className="font-bold text-xs mb-2 text-gray-800">📸 Photography</h3>
              <p className="text-xs text-gray-800">Professional photo editing and subject isolation</p>
            </div>
            <div className="bg-white p-3 rounded border border-gray-200">
              <h3 className="font-bold text-xs mb-2 text-gray-800">📱 Social Media</h3>
              <p className="text-xs text-gray-800">Clean content for Instagram, Facebook, and other platforms</p>
            </div>
            <div className="bg-white p-3 rounded border border-gray-200">
              <h3 className="font-bold text-xs mb-2 text-gray-800">🎨 Design</h3>
              <p className="text-xs text-gray-800">Marketing materials and graphic design projects</p>
            </div>
            <div className="bg-white p-3 rounded border border-gray-200">
              <h3 className="font-bold text-xs mb-2 text-gray-800">📊 Presentations</h3>
              <p className="text-xs text-gray-800">Professional slides and business documents</p>
            </div>
            <div className="bg-white p-3 rounded border border-gray-200">
              <h3 className="font-bold text-xs mb-2 text-gray-800">🖥️ Web Design</h3>
              <p className="text-xs text-gray-800">Website images and user interface elements</p>
            </div>
          </div>
        </section>

        <section className="mb-6">
          <h2 className="text-base font-bold mb-3 text-[#ff6600]">Perfect For</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-xs">
            <div className="flex items-center text-gray-800">
              <span className="text-[#ff6600] mr-1">•</span>
              E-commerce Businesses
            </div>
            <div className="flex items-center text-gray-800">
              <span className="text-[#ff6600] mr-1">•</span>
              Product Photographers
            </div>
            <div className="flex items-center text-gray-800">
              <span className="text-[#ff6600] mr-1">•</span>
              Marketing Agencies
            </div>
            <div className="flex items-center text-gray-800">
              <span className="text-[#ff6600] mr-1">•</span>
              Graphic Designers
            </div>
            <div className="flex items-center text-gray-800">
              <span className="text-[#ff6600] mr-1">•</span>
              Content Creators
            </div>
            <div className="flex items-center text-gray-800">
              <span className="text-[#ff6600] mr-1">•</span>
              Online Retailers
            </div>
          </div>
        </section>

        <section className="mb-6 bg-orange-50 p-4 rounded border border-orange-200">
          <h2 className="text-base font-bold mb-2 text-[#ff6600]">Enterprise-Grade Performance</h2>
          <p className="text-xs text-gray-800 mb-3">
            Built by AISOLO with enterprise-grade reliability, bgremover.com is trusted by businesses worldwide 
            for high-volume background removal needs. Our AI technology ensures consistent, professional results 
            whether you're processing a single image or thousands.
          </p>
          <a 
            href="https://bgremover.com" 
            className="inline-block bg-[#ff6600] text-white px-3 py-1 rounded text-xs hover:bg-orange-700 transition-colors"
            target="_blank" 
            rel="noopener noreferrer"
          >
            Start Removing Backgrounds
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