"use client";

import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
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
    <section className="py-36 px-6">
      <div className="max-w-5xl mx-auto">

        {/* SECTION DIVIDER */}
        <div className="h-px bg-gray-800 mb-16"></div>

        {/* TITLE */}
        <h2 className="text-3xl font-semibold mb-14 tracking-tight">
          Selected Work
        </h2>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-[#0f172a] p-6 rounded-2xl border border-gray-800 hover:border-gray-600 hover:translate-y-[-4px] transition duration-300"
            >
              {/* PROJECT NAME */}
              <h3 className="text-lg font-semibold mb-2">
                {p.name}
              </h3>

              {/* DESCRIPTION */}
              <p className="text-gray-400 text-sm leading-relaxed">
                {p.desc}
              </p>

              {/* SUBTLE LINE */}
              <div className="mt-4 h-px bg-gray-800"></div>

              {/* FOOTER */}
              <p className="text-xs text-gray-500 mt-3">
                View details →
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}