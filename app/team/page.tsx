import type { Metadata } from "next";
import Navbar from "../components/Navbar";

export const metadata: Metadata = {
  title: "AISOLO Team - Meet Our AI Builders & Innovators | Mumbai",
  description: "Meet the AISOLO team: founders, developers, marketers, and ML engineers building privacy-first AI solutions from Mumbai, India.",
  keywords: "AISOLO team, AI team Mumbai, Yash Thakker, startup team, AI developers, ML engineers",
  openGraph: {
    title: "AISOLO Team - Meet Our AI Builders & Innovators",
    description: "Meet the passionate team behind AISOLO's privacy-first AI products and education platform.",
    url: "https://aisolo.tech/team",
  },
};

export default function Team() {
  const currentYear = new Date().getFullYear();


  return (
    <div className="font-mono text-sm bg-[#f6f6ef] min-h-screen">
      <Navbar />
      <div className="max-w-3xl mx-auto p-6">
        <header className="mb-6 pb-3">
          <h1 className="text-xl font-bold text-black">AISOLO Team</h1>
          <p className="text-gray-800 mt-1">The humans behind the AI magic</p>
        </header>

        <main>
          <section className="mb-6">
            <h2 className="text-base font-bold mb-4 text-[#ff6600]">Our Small But Mighty Squad</h2>
            <p className="text-gray-800 text-xs mb-4 leading-relaxed">
              We're a tight-knit team of builders, dreamers, and caffeine-powered problem solvers. 
              Each person brings unique skills to our mission of making AI accessible, privacy-first, and actually useful. 
              Everyone reports to Yash because, well, someone has to keep this beautiful chaos organized.
            </p>
          </section>

          <section className="mb-8">
            <h3 className="text-sm font-bold mb-6 text-[#ff6600]">Organizational Structure</h3>
            
            {/* Founder at the top */}
            <div className="flex flex-col items-center mb-8">
              <div className="bg-purple-50 border-2 border-purple-200 rounded-lg p-4 text-center">
                <h3 className="text-sm font-bold text-purple-800">Yash Thakker</h3>
                <p className="text-xs text-purple-600">Founder & CEO</p>
                <p className="text-xs text-gray-600 mt-1">The one who started this beautiful chaos</p>
              </div>
              
              {/* Vertical line down */}
              <div className="w-0.5 h-8 bg-gray-300"></div>
              
              {/* Co-founder level */}
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-3 text-center mb-6">
                <h3 className="text-sm font-bold text-purple-800">Geeta Thakker</h3>
                <p className="text-xs text-purple-600">Co-Founder</p>
                <p className="text-xs text-gray-600 mt-1">Marketing & Support operations</p>
              </div>

              {/* Main team branches */}
              <div className="w-0.5 h-6 bg-gray-300"></div>
              <div className="w-full max-w-4xl">
                {/* Horizontal line */}
                <div className="flex items-center justify-center mb-6">
                  <div className="flex-1 h-0.5 bg-gray-300"></div>
                  <div className="w-4 h-4 bg-gray-300 rounded-full mx-2"></div>
                  <div className="flex-1 h-0.5 bg-gray-300"></div>
                </div>

                {/* Team Structure */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Development & ML Team */}
                  <div className="space-y-3">
                    <h4 className="text-xs font-bold text-center text-gray-700 border-b border-gray-200 pb-2">Development & ML</h4>
                    
                    <div className="bg-blue-50 border border-blue-200 rounded p-2 text-center">
                      <h3 className="text-sm font-bold text-blue-800">Rahul Santra</h3>
                      <p className="text-xs text-blue-600">Senior Developer</p>
                    </div>
                    
                    <div className="bg-yellow-50 border border-yellow-200 rounded p-2 text-center">
                      <h3 className="text-xs font-bold text-yellow-800">Ganesh Mohane</h3>
                      <p className="text-xs text-yellow-600">ML & Testing</p>
                    </div>
                    
                    <div className="bg-orange-50 border border-orange-200 rounded p-2 text-center">
                      <h3 className="text-xs font-bold text-orange-800">Sakshi Patil</h3>
                      <p className="text-xs text-orange-600">ML & Extension (Intern)</p>
                    </div>
                    
                    <div className="bg-orange-50 border border-orange-200 rounded p-2 text-center">
                      <h3 className="text-xs font-bold text-orange-800">Chaitany Patil</h3>
                      <p className="text-xs text-orange-600">Frontend (Intern)</p>
                    </div>
                    
                    <div className="bg-orange-50 border border-orange-200 rounded p-2 text-center">
                      <h3 className="text-xs font-bold text-orange-800">Oshnikdeep Tiwari</h3>
                      <p className="text-xs text-orange-600">Backend (Intern)</p>
                    </div>
                  </div>

                  {/* Marketing & Support Team */}
                  <div className="space-y-3">
                    <h4 className="text-xs font-bold text-center text-gray-700 border-b border-gray-200 pb-2">Marketing & Support</h4>
                    
                    <div className="bg-blue-50 border border-blue-200 rounded p-2 text-center">
                      <h3 className="text-sm font-bold text-blue-800">Pratham Ware</h3>
                      <p className="text-xs text-blue-600">Marketing Manager</p>
                    </div>
                    
                    <div className="bg-green-50 border border-green-200 rounded p-2 text-center">
                      <h3 className="text-xs font-bold text-green-800">Dhruvi Jain</h3>
                      <p className="text-xs text-green-600">Marketing Associate</p>
                    </div>
                    
                    <div className="bg-green-50 border border-green-200 rounded p-2 text-center">
                      <h3 className="text-xs font-bold text-green-800">Tushar Mestry</h3>
                      <p className="text-xs text-green-600">Content Associate</p>
                    </div>
                    
                    <div className="bg-green-50 border border-green-200 rounded p-2 text-center">
                      <h3 className="text-xs font-bold text-green-800">Shikha Mishra</h3>
                      <p className="text-xs text-green-600">Support Specialist</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>


          <section className="mb-6 bg-orange-50 p-4 rounded border border-orange-200">
            <h2 className="text-base font-bold mb-3 text-[#ff6600]">Want to Join Us?</h2>
            <p className="text-xs text-gray-800 mb-3 leading-relaxed">
              We're always looking for talented humans who share our vision of building fun, impactful AI products. 
              If you're passionate about privacy-first AI, love solving real problems, and don't mind the occasional 2 AM deployment, 
              we'd love to hear from you.
            </p>
            <div className="space-y-2 text-xs">
              <div className="flex items-center">
                <span className="text-[#ff6600] mr-2">•</span>
                <span className="text-gray-800">Remote-friendly (Mumbai-based preferred)</span>
              </div>
              <div className="flex items-center">
                <span className="text-[#ff6600] mr-2">•</span>
                <span className="text-gray-800">Good compensation</span>
              </div>
              <div className="flex items-center">
                <span className="text-[#ff6600] mr-2">•</span>
                <span className="text-gray-800">No micro-management (seriously)</span>
              </div>
            </div>
            <div className="mt-3">
              <a 
                href="mailto:yash@explainx.ai?subject=Joining AISOLO Team" 
                className="inline-block bg-[#ff6600] text-white px-3 py-1 rounded text-xs hover:bg-orange-700 transition-colors"
              >
                Get In Touch
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