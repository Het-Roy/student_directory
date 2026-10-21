import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/80 bg-white/85 backdrop-blur-md shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group transition-transform active:scale-98">
          <div className="relative h-10 w-28 sm:w-36 overflow-hidden flex items-center">
            <Image
              src="/logo.png"
              className="object-contain h-full w-full group-hover:opacity-90 transition-opacity"
              width={160}
              height={40}
              priority
              alt="Logo"
            />
          </div>
        </Link>

        <nav className="flex items-center gap-1 sm:gap-2">
          <Link
            href="/"
            className="px-3.5 py-2 rounded-xl text-sm font-semibold text-slate-700 hover:text-blue-600 hover:bg-blue-50/80 transition-all duration-200"
          >
            Students
          </Link>
          <Link
            href="/department"
            className="px-3.5 py-2 rounded-xl text-sm font-semibold text-slate-700 hover:text-blue-600 hover:bg-blue-50/80 transition-all duration-200"
          >
            Department
          </Link>
          <Link
            href="/about"
            className="px-3.5 py-2 rounded-xl text-sm font-semibold text-slate-700 hover:text-blue-600 hover:bg-blue-50/80 transition-all duration-200"
          >
            About
          </Link>
        </nav>
      </div>
    </header>
  );
}
