import Link from "next/link";
import type { Metadata } from "next";
import Navbar from "../components/Navbar";

export const metadata: Metadata = {
  title: "AISOLO Products - Privacy-First AI Solutions | bgblur.com, olly.social",
  description: "Explore AISOLO's privacy-first AI products: bgblur.com for model training, bgremover.com for background removal, and olly.social Chrome extension with 25K+ users.",
  keywords: "bgblur.com, olly.social, bgremover.com, privacy-first AI, AI products, background removal, social media AI, Chrome extension",
  openGraph: {
    title: "AISOLO Products - Privacy-First AI Solutions",
    description: "Explore AISOLO's privacy-first AI products including bgblur.com, olly.social, and bgremover.com.",
    url: "https://aisolo.tech/products",
  },
};

export default function Products() {
  const currentYear = new Date().getFullYear();

  const products = [
    {
      name: "bgblur.com",
      url: "https://bgblur.com",
      description: "Privacy-first model training platform",
      category: "Privacy Tech",
      features: ["Advanced background blurring", "Privacy-preserving ML training", "Enterprise-grade security", "API integration"],
      status: "Live"
    },
    {
      name: "bgremover.com", 
      url: "https://bgremover.com",
      description: "AI background removal tool",
      category: "AI Tools",
      features: ["One-click background removal", "High-quality AI processing", "Bulk processing", "Multiple formats support"],
      status: "Live"
    },
    {
      name: "olly.social",
      url: "https://olly.social", 
      description: "AI social media engagement Chrome extension",
      category: "Browser Extension",
      features: ["Smart comment suggestions", "AI-powered responses", "25K+ active users", "Multi-platform support"],
      status: "Live"
    }
  ];

  return (
    <div className="font-mono text-sm bg-[#f6f6ef] min-h-screen">
      <Navbar />
      <div className="max-w-3xl mx-auto p-6">
        <header className="mb-6 pb-3">
          <h1 className="text-xl font-bold text-black">AISOLO Products</h1>
          <p className="text-gray-800 mt-1">Privacy-first AI solutions that empower users worldwide</p>
        </header>

      <main>
        <section className="mb-6">
          <h2 className="text-base font-bold mb-4 text-[#ff6600]">Our Product Portfolio</h2>
          <p className="text-gray-800 text-xs mb-4 leading-relaxed">
            At AISOLO, we build products that prioritize user privacy while delivering cutting-edge AI capabilities. 
            Each product is designed to solve real problems and empower users with intelligent, accessible tools.
          </p>
        </section>

        <section className="mb-6">
          <div className="space-y-6">
            {products.map((product, index) => (
              <article key={index} className="border border-gray-200 rounded-lg p-4 bg-white">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-sm font-bold mb-1">
                      <a href={product.url} className="text-[#ff6600] hover:underline" target="_blank" rel="noopener noreferrer">
                        {product.name}
                      </a>
                    </h3>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="inline-block px-2 py-1 bg-gray-100 text-gray-800 rounded text-xs">
                        {product.category}
                      </span>
                      <span className="inline-block px-2 py-1 bg-green-100 text-green-700 rounded text-xs">
                        {product.status}
                      </span>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-800 text-xs mb-3 leading-relaxed">
                  {product.description}
                </p>

                <div className="mb-3">
                  <h4 className="text-xs font-bold mb-2 text-gray-800">Key Features:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
                    {product.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="text-xs text-gray-800 flex items-center">
                        <span className="text-[#ff6600] mr-1">•</span>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                  <div className="space-x-2">
                    <Link 
                      href={`/products/${product.name === 'olly.social' ? 'olly-social' : product.name.replace('.com', '')}`}
                      className="inline-block border border-[#ff6600] text-[#ff6600] px-3 py-1 rounded text-xs hover:bg-orange-50 transition-colors"
                    >
                      Learn More
                    </Link>
                    <a 
                      href={product.url} 
                      className="inline-block bg-[#ff6600] text-white px-3 py-1 rounded text-xs hover:bg-orange-700 transition-colors"
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      Visit {product.name}
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mb-6 bg-orange-50 p-4 rounded border border-orange-200">
          <h2 className="text-base font-bold mb-3 text-[#ff6600]">Custom Solutions</h2>
          <p className="text-xs text-gray-800 mb-3 leading-relaxed">
            Need a custom AI solution for your business? We specialize in building privacy-first AI applications, 
            training programs, and consultation services tailored to your specific needs.
          </p>
          <div className="space-y-2 text-xs">
            <div className="flex items-center">
              <span className="text-[#ff6600] mr-2">•</span>
              <span className="text-gray-800">Custom AI Agent Development</span>
            </div>
            <div className="flex items-center">
              <span className="text-[#ff6600] mr-2">•</span>
              <span className="text-gray-800">Enterprise AI Training Programs</span>
            </div>
            <div className="flex items-center">
              <span className="text-[#ff6600] mr-2">•</span>
              <span className="text-gray-800">Privacy-Compliant ML Solutions</span>
            </div>
            <div className="flex items-center">
              <span className="text-[#ff6600] mr-2">•</span>
              <span className="text-gray-800">Technical Leadership Consulting</span>
            </div>
          </div>
          <div className="mt-3">
            <Link 
              href="mailto:yash@explainx.ai?subject=Custom AI Solution Inquiry" 
              className="inline-block bg-[#ff6600] text-white px-3 py-1 rounded text-xs hover:bg-orange-700 transition-colors"
            >
              Discuss Your Project
            </Link>
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