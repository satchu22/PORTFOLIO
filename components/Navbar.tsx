"use client";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-[#0B0F19]/90 backdrop-blur-md">
      <div className="mx-auto flex h-20 w-full max-w-7xl items-center px-6 md:px-10">
        {/* LEFT: NAME */}
        <a
          href="#home"
          className="shrink-0 text-2xl font-semibold tracking-tight text-white"
        >
          Satchidanand <span className="text-slate-400">Deshmukh</span>
        </a>

        {/* RIGHT: NAV LINKS */}
        <div className="ml-auto flex items-center gap-6 md:gap-8">
          <a
            href="#projects"
            className="text-sm md:text-base font-medium text-slate-300 transition hover:text-white"
          >
            Projects
          </a>

          <a
            href="#system"
            className="text-sm md:text-base font-medium text-slate-300 transition hover:text-white"
          >
            System
          </a>

          <a
            href="#contact"
            className="text-sm md:text-base font-medium text-slate-300 transition hover:text-white"
          >
            Contact
          </a>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-white/15 px-4 py-2 text-sm md:text-base font-medium text-white transition hover:bg-white hover:text-black"
          >
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
}