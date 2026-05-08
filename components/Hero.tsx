"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

const storyHighlights = [
  {
    id: "growth",
    title: "Why I build",
    detail:
      "I build software because it bridges ideas and outcomes. Starting in India and continuing through my M.S. in the U.S., I’ve learned that strong engineering is both technical and human. I focus on reliable systems, fast feedback loops, and real user impact.",
  },
  {
    id: "education",
    title: "Education",
    detail:
      "My technical foundation began with a B.E. in Computer Science from PVPIT Pune, then deepened with an M.S. in Computer Science at University of the Pacific. I learned to design systems with resilience, performance, and clarity.",
  },
  {
    id: "experience",
    title: "Experience",
    detail:
      "At TSL Consulting, I built backend services and CRM automations. Volunteering with Saayam For All gave me ownership of full-stack features and sharpened my collaboration across distributed teams.",
  },
  {
    id: "certifications",
    title: "Certifications",
    detail:
      "I invest in tooling and process with certifications in Agile Scrum, Kubernetes, and Docker Foundations. That knowledge helps me build systems that are easier to ship, monitor, and operate.",
  },
];

export default function Hero() {
  const [activeHighlight, setActiveHighlight] = useState("growth");
  const activeCard = storyHighlights.find((item) => item.id === activeHighlight) ?? storyHighlights[0];

  return (
    <section
      id="home"
      className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.14),_transparent_25%),radial-gradient(circle_at_90%_20%,_rgba(96,165,250,0.08),_transparent_20%),linear-gradient(180deg,_#06121e_0%,_#0b1c2e_35%,_#101f33_100%)] px-4 sm:px-6 md:px-8 lg:px-12 pt-24 sm:pt-28 md:pt-32 text-white"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 md:gap-16 lg:grid-cols-2">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -32 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-start order-2 lg:order-1"
        >
          <h1 className="max-w-xl text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold leading-[0.95] tracking-tight">
            Building systems
            <br />
            <span className="text-cyan-300">that scale.</span>
          </h1>

          <p className="mt-4 sm:mt-6 text-lg sm:text-xl md:text-2xl text-slate-300">
            Software Engineer | Full Stack + DevOps
          </p>

          <p className="mt-3 sm:mt-4 max-w-lg text-base sm:text-lg leading-relaxed text-slate-400">
            I design, build, and deploy scalable systems that solve real-world
            problems.
          </p>

          {/* BUTTONS */}
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto">
            <Link
              href="/projects"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 via-sky-500 to-indigo-500 px-6 sm:px-7 py-3 text-sm font-semibold text-slate-950 shadow-[0_18px_40px_rgba(56,189,248,0.18)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_25px_55px_rgba(56,189,248,0.24)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
            >
              View Projects
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-cyan-400/20 bg-white/10 px-6 sm:px-7 py-3 text-sm font-semibold text-cyan-200 shadow-sm transition duration-300 hover:bg-cyan-400/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
            >
              Contact Me
            </Link>

            <Link
              href="/about"
              className="inline-flex items-center justify-center rounded-full bg-slate-800/70 px-6 sm:px-7 py-3 text-sm font-semibold text-cyan-200 shadow-sm transition duration-300 hover:bg-slate-700/80 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
            >
              About Me
            </Link>
          </div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, x: 32 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center lg:items-end order-1 lg:order-2"
        >
          <img
            src="/profile.jpg"
            alt="profile"
            className="w-48 sm:w-64 md:w-80 lg:w-96 xl:w-[430px] rounded-2xl sm:rounded-3xl border border-white/10 ring-1 ring-cyan-400/10 shadow-[0_28px_90px_rgba(14,165,233,0.18)]"
          />

          <p className="mt-4 sm:mt-6 max-w-md text-center lg:text-right text-sm sm:text-base leading-relaxed text-slate-400 px-4 lg:px-0">
            I’m a Software Engineer focused on building scalable systems using
            Full Stack and DevOps technologies.
          </p>
        </motion.div>

      </div>

      <div id="story" className="mx-auto mt-12 sm:mt-16 max-w-7xl rounded-2xl sm:rounded-[2rem] border border-white/10 bg-slate-950/85 p-4 sm:p-6 md:p-8 shadow-[0_40px_120px_rgba(15,23,42,0.75)] backdrop-blur-xl">
        <div className="grid gap-6 sm:gap-8 lg:grid-cols-[1.7fr_0.9fr] lg:items-start">
          <div className="space-y-6">
            <span className="inline-flex rounded-full bg-sky-500/10 px-3 py-1 text-sm font-semibold text-sky-200">
              My story • from education to impact
            </span>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white">
              I build systems with an engineer’s discipline and a learner’s curiosity.
            </h2>

            <div className="space-y-5 text-base leading-relaxed text-slate-300">
              <p>
                Every part of my story is shaped by learning new tools, owning meaningful work, and building the kind of software that people actually rely on.
              </p>

              <div className="space-y-4 rounded-2xl sm:rounded-[1.5rem] border border-white/10 bg-slate-900/80 p-4 sm:p-6 shadow-inner shadow-white/5">
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {storyHighlights.map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setActiveHighlight(item.id)}
                      className={`rounded-full px-3 sm:px-4 py-2 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 ${
                        activeHighlight === item.id
                          ? "bg-gradient-to-r from-cyan-500 to-sky-500 text-white shadow-lg"
                          : "bg-white/5 text-slate-300 hover:bg-white/10"
                      }`}
                    >
                      {item.title}
                    </button>
                  ))}
                </div>

                <p className="text-base sm:text-lg leading-7 sm:leading-8 text-slate-200">
                  {activeCard.detail}
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-4 sm:space-y-6 rounded-2xl sm:rounded-[2rem] border border-white/10 bg-slate-900/80 p-4 sm:p-6 shadow-lg">
            <div className="space-y-6 text-sm text-slate-400">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Education</p>
                <p className="mt-2 font-semibold text-white">M.S. Computer Science</p>
                <p>University of the Pacific</p>
                <p className="text-slate-400">2023 – 2025 • GPA 3.44</p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Experience</p>
                <p className="mt-2 font-semibold text-white">Software Engineering Intern</p>
                <p>TSL Consulting Pvt Ltd • Pune, India</p>
                <p className="text-slate-400">Nov 2022 – Jun 2023</p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Volunteer</p>
                <p className="mt-2 font-semibold text-white">Backend Developer</p>
                <p>Saayam For All</p>
                <p className="text-slate-400">Oct 2025 – Present</p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Certifications</p>
                <ul className="mt-2 space-y-2 text-slate-300">
                  <li>Agile Scrum Master • Simplilearn</li>
                  <li>Introduction to Kubernetes (LFS158) • Linux Foundation</li>
                  <li>Docker Foundations Professional Certificate • LinkedIn Learning</li>
                </ul>
              </div>
            </div>

            <Link
              href="/about"
              className="inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 to-sky-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:opacity-95 shadow-lg shadow-cyan-500/20"
            >
              Visit the full About page
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}