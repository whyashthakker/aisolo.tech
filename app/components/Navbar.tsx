import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="border-b-2 border-[#ff6600] bg-[#f6f6ef] sticky top-0 z-50">
      <div className="max-w-3xl mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo.svg"
              alt="AISOLO Logo"
              width={20}
              height={20}
              className="flex-shrink-0"
            />
            <span className="text-sm font-bold text-black">AISOLO</span>
          </Link>
          
          <div className="flex items-center gap-4">
            <Link 
              href="/products" 
              className="text-xs text-gray-700 hover:text-[#ff6600] transition-colors"
            >
              Products
            </Link>
            <Link 
              href="/team" 
              className="text-xs text-gray-700 hover:text-[#ff6600] transition-colors"
            >
              Team
            </Link>
            <Link 
              href="/blog" 
              className="text-xs text-gray-700 hover:text-[#ff6600] transition-colors"
            >
              Blog
            </Link>
            <Link 
              href="/guide" 
              className="text-xs text-gray-700 hover:text-[#ff6600] transition-colors"
            >
              Guide
            </Link>
            <a 
              href="mailto:yash@explainx.ai" 
              className="text-xs bg-[#ff6600] text-white px-2 py-1 rounded hover:bg-orange-700 transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}