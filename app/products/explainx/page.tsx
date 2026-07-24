import Link from "next/link";
import type { Metadata } from "next";
import Navbar from "../../components/Navbar";

export const metadata: Metadata = {
  title: "explainx.ai - Enterprise GenAI & Explainable AI Platform | AISOLO",
  description: "Enterprise-grade Explainable AI and GenAI platform delivering transparency, model auditability, and custom AI agent solutions.",
  keywords: "explainx.ai, explainable AI, GenAI platform, AI transparency, model auditing, enterprise AI, AI agents, AISOLO",
  openGraph: {
    title: "explainx.ai - Enterprise GenAI & Explainable AI Platform",
    description: "Enterprise-grade Explainable AI and GenAI platform delivering transparency and model auditability.",
    url: "https://aisolo.tech/products/explainx",
  },
};

export default function ExplainXProduct() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="font-mono text-sm bg-[#f6f6ef] min-h-screen">
      <Navbar />
      <div className="max-w-3xl mx-auto p-6">
        <header className="mb-6 pb-3">
          <div className="flex items-center gap-3 mb-2">
            <Link href="/products" className="text-[#ff6600] hover:underline text-xs">← Back to Products</Link>
          </div>
          <h1 className="text-xl font-bold text-black mb-2">explainx.ai</h1>
          <p className="text-gray-800 text-xs">Enterprise GenAI & Explainable AI framework for transparent decision making</p>
        </header>

        <main>
          <section className="mb-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-base font-bold text-[#ff6600]">Product Overview</h2>
              <a 
                href="https://explainx.ai" 
                className="inline-block bg-[#ff6600] text-white px-3 py-1 rounded text-xs hover:bg-orange-700 transition-colors"
                target="_blank" 
                rel="noopener noreferrer"
              >
                Visit explainx.ai
              </a>
            </div>
            <p className="text-gray-800 text-xs mb-4 leading-relaxed">
              explainx.ai is AISOLO's flagship enterprise AI platform focusing on Explainable AI (XAI) and 
              Generative AI deployment. It empowers developers, data scientists, and enterprises to build, explain, 
              and audit machine learning and GenAI models with full transparency, compliance, and governance.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-base font-bold mb-3 text-[#ff6600]">Key Features</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="bg-white p-3 rounded border border-gray-200">
                <h3 className="font-bold text-xs mb-2 text-gray-800">🔍 Model Explainability</h3>
                <p className="text-xs text-gray-800">SHAP, LIME, and feature attribution insights for black-box AI models</p>
              </div>
              <div className="bg-white p-3 rounded border border-gray-200">
                <h3 className="font-bold text-xs mb-2 text-gray-800">🛡️ Governance & Auditing</h3>
                <p className="text-xs text-gray-800">Enterprise compliance dashboards and automated fairness testing</p>
              </div>
              <div className="bg-white p-3 rounded border border-gray-200">
                <h3 className="font-bold text-xs mb-2 text-gray-800">⚡ GenAI Deployment</h3>
                <p className="text-xs text-gray-800">Deploy custom LLMs and RAG pipelines with hallucination tracking</p>
              </div>
              <div className="bg-white p-3 rounded border border-gray-200">
                <h3 className="font-bold text-xs mb-2 text-gray-800">📊 Interactive Dashboards</h3>
                <p className="text-xs text-gray-800">User-friendly UI for non-technical stakeholders to understand model decisions</p>
              </div>
            </div>
          </section>

          <section className="mb-6">
            <h2 className="text-base font-bold mb-3 text-[#ff6600]">Core Capabilities</h2>
            <div className="space-y-3">
              <div className="bg-gray-50 p-3 rounded border-l-2 border-[#ff6600]">
                <h3 className="font-bold text-gray-500 text-xs mb-1">Explainable AI (XAI) Engine</h3>
                <p className="text-xs text-gray-800">Deconstruct complex model outputs into clear, human-understandable explanations.</p>
              </div>
              <div className="bg-gray-50 p-3 rounded border-l-2 border-[#ff6600]">
                <h3 className="font-bold text-gray-500 text-xs mb-1">Bias & Fairness Detection</h3>
                <p className="text-xs text-gray-800">Identify dataset biases and disparate impact before deploying models into production.</p>
              </div>
              <div className="bg-gray-50 p-3 rounded border-l-2 border-[#ff6600]">
                <h3 className="font-bold text-gray-500 text-xs mb-1">Custom AI Consulting & Bootcamp</h3>
                <p className="text-xs text-gray-800">Direct integration with AISOLO's training programs and enterprise advisory services.</p>
              </div>
            </div>
          </section>

          <section className="mb-6 bg-orange-50 p-4 rounded border border-orange-200">
            <h2 className="text-base font-bold mb-2 text-[#ff6600]">Build Trustworthy AI</h2>
            <p className="text-xs text-gray-800 mb-3">
              Trusted by enterprise teams and AI practitioners, explainx.ai bridges the gap between complex 
              AI algorithms and regulatory compliance.
            </p>
            <a 
              href="https://explainx.ai" 
              className="inline-block bg-[#ff6600] text-white px-3 py-1 rounded text-xs hover:bg-orange-700 transition-colors"
              target="_blank" 
              rel="noopener noreferrer"
            >
              Explore explainx.ai
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
