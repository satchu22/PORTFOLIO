"use client";

import { useState } from "react";

export default function Navbar() {
  const [active, setActive] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-slate-700/20 bg-slate-950/70 backdrop-blur-xl shadow-black/20">
      <div className="flex items-center justify-between w-full px-4 sm:px-8 md:px-12 py-4">
        
        {/* LEFT */}
        <a
          href="/"
          className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-300 to-violet-400 font-semibold text-base sm:text-lg tracking-tight hover:opacity-90 transition"
        >
          <span className="hidden sm:inline">Satchidanand J. Deshmukh</span>
          <span className="sm:hidden">Satchidanand</span>
        </a>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-8">
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
          <NavItem
            label="Contact"
            href="/contact"
            active={active === "contact"}
            onClick={() => setActive("contact")}
          />
          <NavItem
            label="Resume"
            href="/resume"
            active={active === "resume"}
            onClick={() => setActive("resume")}
          />
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/50 transition-colors"
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* MOBILE MENU */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-slate-700/20 bg-slate-950/90 backdrop-blur-xl">
          <div className="px-4 py-4 space-y-2">
            <MobileNavItem
              label="About"
              href="/about"
              active={active === "about"}
              onClick={() => {
                setActive("about");
                setIsMenuOpen(false);
              }}
            />
            <MobileNavItem
              label="Experience"
              href="/experience"
              active={active === "experience"}
              onClick={() => {
                setActive("experience");
                setIsMenuOpen(false);
              }}
            />
            <MobileNavItem
              label="Contact"
              href="/contact"
              active={active === "contact"}
              onClick={() => {
                setActive("contact");
                setIsMenuOpen(false);
              }}
            />
            <MobileNavItem
              label="Resume"
              href="/resume"
              active={active === "resume"}
              onClick={() => {
                setActive("resume");
                setIsMenuOpen(false);
              }}
            />
          </div>
        </div>
      )}
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

function MobileNavItem({
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
      className={`block px-3 py-2 rounded-lg text-base font-medium transition-colors ${
        active
          ? "text-cyan-200 bg-cyan-500/10"
          : "text-slate-300 hover:text-white hover:bg-slate-800/50"
      }`}
    >
      {label}
    </a>
  );
}