import Image from "next/image";

export default function Home() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="max-w-3xl mx-auto p-6 font-mono text-sm bg-[#f6f6ef] min-h-screen">
      <header className="mb-6 border-b-2 border-[#ff6600] pb-3">
        <div className="flex items-center gap-3 mb-2">
          <Image
            src="/logo.svg"
            alt="AISOLO Logo"
            width={24}
            height={24}
            className="flex-shrink-0"
          />
          <h1 className="text-xl font-bold text-black">AISOLO TECHNOLOGIES PRIVATE LIMITED</h1>
        </div>
        <p className="text-gray-600 mt-1">Mumbai-based AI company specializing in video privacy solutions</p>
      </header>

      <main>
        <section className="mb-6">
          <h2 className="text-base font-bold mb-2 text-[#ff6600]">Vision</h2>
          <p className="text-gray-800 text-xs">To build privacy and AI education in India.</p>
        </section>

        <section className="mb-6">
          <h2 className="text-base font-bold mb-2 text-[#ff6600]">Services</h2>
          <p className="text-gray-800 text-xs">AI Agent Building • GenAI Training • MCP Training • RAG Training • Software MVP Building</p>
        </section>

        <section className="mb-6">
          <h2 className="text-base font-bold mb-2 text-[#ff6600]">Products</h2>
          <div className="space-y-1 text-gray-800 text-xs">
            <div>
              <a href="https://bgblur.com" className="text-[#ff6600] hover:underline" target="_blank" rel="noopener noreferrer">bgblur.com</a>
              <span className="text-gray-600"> - Privacy-first model training platform</span>
            </div>
            <div>
              <a href="https://bgremover.com" className="text-[#ff6600] hover:underline" target="_blank" rel="noopener noreferrer">bgremover.com</a>
              <span className="text-gray-600"> - AI background removal tool</span>
            </div>
            <div><span className="text-gray-600">Olly.social - AI social media engagement Chrome extension (25K+ users)</span></div>
            <div><span className="text-gray-600">Snapy.ai - AI video editing platform for short-form content (35K+ users)</span></div>
          </div>
        </section>

        <section className="mb-6">
          <h2 className="text-base font-bold mb-2 text-[#ff6600]">Founder</h2>
          <div className="text-gray-800 text-xs">
            <p><span className="font-semibold">Yash Thakker</span> - Founder & CEO</p>
            <p className="text-gray-600">AI Instructor & Product Leader, 12+ years experience, taught 120K+ students, MBA SIMSREE</p>
          </div>
        </section>

        <section className="mb-6">
          <h2 className="text-base font-bold mb-2 text-[#ff6600]">Team</h2>
          <div className="text-gray-800 text-xs">
            <p>Geeta (Co-Founder) • Pratham (Marketing) • Shri (PM) • Paresh Bhamare (Sr Dev) • Rahul Santra (Sr Dev) • Tushar Mestry (Video) • Dhruvi Jain (Marketing)</p>
          </div>
        </section>

        <section className="mb-6">
          <h2 className="text-base font-bold mb-2 text-[#ff6600]">Contact</h2>
          <div className="text-xs">
            <a href="mailto:yash@explainx.ai" className="text-[#ff6600] hover:underline">yash@explainx.ai</a>
          </div>
        </section>

        <section className="mb-6">
          <h2 className="text-base font-bold mb-2 text-[#ff6600]">Links</h2>
          <div className="text-xs space-y-1">
            <div><a href="https://instagram.com/aisolo.tech" className="text-[#ff6600] hover:underline" target="_blank" rel="noopener noreferrer">Instagram</a></div>
            <div><a href="https://linkedin.com/company/aisolo" className="text-[#ff6600] hover:underline" target="_blank" rel="noopener noreferrer">LinkedIn</a></div>
            <div><a href="https://youtube.com/@goyashy" className="text-[#ff6600] hover:underline" target="_blank" rel="noopener noreferrer">YouTube</a></div>
            <div><a href="https://github.com/whyashthakker/aisolo.tech" className="text-[#ff6600] hover:underline" target="_blank" rel="noopener noreferrer">GitHub</a></div>
          </div>
        </section>
      </main>

      <footer className="mt-8 pt-3 border-t border-gray-300 text-center text-gray-500 text-xs">
        <p>© {currentYear} AISOLO TECHNOLOGIES PRIVATE LIMITED. Mumbai, India.</p>
      </footer>
    </div>
  );
}
