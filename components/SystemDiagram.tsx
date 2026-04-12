"use client";

import { motion } from "framer-motion";

export default function SystemDiagram() {
  return (
    <section className="py-40 px-6">
      <div className="max-w-6xl mx-auto">

        {/* TITLE */}
        <h2 className="text-3xl font-semibold text-center mb-20">
          System Architecture
        </h2>

        {/* SYSTEM FLOW */}
        <div className="flex items-center justify-between gap-6">

          {/* FRONTEND */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-[#0f172a] p-6 rounded-xl w-60 text-center"
          >
            <p className="font-semibold text-lg">Frontend</p>
            <p className="text-gray-400 text-sm mt-1">Next.js UI</p>
          </motion.div>

          {/* ARROW */}
          <div className="flex-1 flex items-center justify-center">
            <div className="h-[2px] w-full bg-gray-700 relative">
              <span className="absolute right-0 -top-2 text-gray-500">→</span>
            </div>
          </div>

          {/* BACKEND */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-[#0f172a] p-6 rounded-xl w-60 text-center"
          >
            <p className="font-semibold text-lg">Backend API</p>
            <p className="text-gray-400 text-sm mt-1">Business Logic</p>
          </motion.div>

          {/* ARROW */}
          <div className="flex-1 flex items-center justify-center">
            <div className="h-[2px] w-full bg-gray-700 relative">
              <span className="absolute right-0 -top-2 text-gray-500">→</span>
            </div>
          </div>

          {/* DATABASE */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-[#0f172a] p-6 rounded-xl w-60 text-center"
          >
            <p className="font-semibold text-lg">Database</p>
            <p className="text-gray-400 text-sm mt-1">Persistent Storage</p>
          </motion.div>

        </div>

        {/* SUBTEXT */}
        <p className="text-center text-gray-500 text-sm mt-12">
          User requests flow through frontend → backend → database and return optimized responses.
        </p>

      </div>
    </section>
  );
}