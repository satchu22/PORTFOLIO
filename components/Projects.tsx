"use client";

import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      name: "COVID X-Ray Analysis",
      desc: "Medical imaging system using machine learning to analyze chest X-rays for COVID-19 detection with full-stack web interface.",
    },
    {
      name: "RealityTwin",
      desc: "Digital twin simulation platform that models and predicts real-world system behavior.",
    },
    {
      name: "MICI Capstone",
      desc: "Full-stack capstone project focused on solving real engineering problems.",
    },
    {
      name: "VR Room",
      desc: "Immersive 3D experience built for interactive environments.",
    },
    {
      name: "Zodiac App",
      desc: "Frontend application that dynamically calculates zodiac signs.",
    },
  ];

  return (
    <section className="py-24 sm:py-32 md:py-36 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">

        {/* SECTION DIVIDER */}
        <div className="h-px bg-gray-800 mb-16"></div>

        {/* TITLE */}
        <h2 className="text-2xl sm:text-3xl font-semibold mb-8 sm:mb-14 tracking-tight text-white">
          Selected Work
        </h2>

        {/* GRID */}
        <div className="grid gap-6 sm:gap-8 md:gap-10">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-slate-900/95 p-5 sm:p-6 md:p-7 rounded-2xl sm:rounded-3xl border border-cyan-500/10 shadow-[0_20px_40px_rgba(14,165,233,0.12)] hover:border-cyan-400/30 hover:-translate-y-1 transition duration-300 cursor-pointer"
              onClick={() => {
                // Convert project name to URL-friendly slug
                const slug = p.name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
                window.location.href = `/projects/${slug}`;
              }}
            >
              {/* PROJECT NAME */}
              <h3 className="text-base sm:text-lg font-semibold mb-2 text-cyan-200">
                {p.name}
              </h3>

              {/* DESCRIPTION */}
              <p className="text-slate-300 text-sm leading-relaxed">
                {p.desc}
              </p>

              {/* SUBTLE LINE */}
              <div className="mt-4 h-px bg-cyan-500/10"></div>

              {/* FOOTER */}
              <p className="text-xs text-slate-400 mt-3">
                Click to view details →
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}