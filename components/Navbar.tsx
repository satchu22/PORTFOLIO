"use client";

import { useState } from "react";

export default function Navbar() {
  const [active, setActive] = useState("");

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-slate-700/20 bg-slate-950/70 backdrop-blur-xl shadow-black/20">
      <div className="flex items-center justify-between w-full px-8 md:px-12 py-4">
        
        {/* LEFT */}
        <a
          href="/"
          className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-300 to-violet-400 font-semibold text-lg tracking-tight hover:opacity-90 transition"
        >
          Satchidanand J. Deshmukh
        </a>

        {/* RIGHT */}
        <div className="flex items-center gap-8">

          {/* ✅ EXPERIENCE → PAGE (FIXED) */}
          <NavItem
            label="About"
            href="/about"
            active={active === "about"}
            onClick={() => setActive("about")}
          />

          <NavItem
            label="Experience"
            href="/experience"
            active={active === "experience"}
            onClick={() => setActive("experience")}
          />

          {/* CONTACT → PAGE */}
          <NavItem
            label="Contact"
            href="/contact"
            active={active === "contact"}
            onClick={() => setActive("contact")}
          />

          {/* RESUME → PAGE */}
          <NavItem
            label="Resume"
            href="/resume"
            active={active === "resume"}
            onClick={() => setActive("resume")}
          />

        </div>
      </div>
    </header>
  );
}

function NavItem({
  label,
  href,
  active,
  onClick,
}: {
  label: string;
  href: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <a
      href={href}
      onClick={onClick}
      className={`relative text-sm font-medium transition group ${
        active ? "text-cyan-200" : "text-slate-300 hover:text-white"
      }`}
    >
      {label}

      <span
        className={`absolute left-0 bottom-[-4px] h-[2px] w-full bg-gradient-to-r from-cyan-400 via-sky-400 to-violet-400 transition-all duration-300 ${
          active ? "opacity-100" : "opacity-0 group-hover:opacity-100"
        }`}
      />
    </a>
  );
}