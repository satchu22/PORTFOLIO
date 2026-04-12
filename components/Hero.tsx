"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
   <section className="h-screen flex items-center px-6 pt-24">
      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-16 items-center">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold leading-tight"
          >
            Building systems
            <br />
            <span className="text-gray-400">that scale.</span>
          </motion.h1>

          <p className="mt-6 text-lg text-gray-400">
            Software Engineer | Full Stack + DevOps
          </p>

          <p className="mt-3 text-gray-500">
            I design, build, and deploy systems that solve real-world problems.
          </p>

          <div className="mt-8 flex gap-4">
            <button className="bg-white text-black px-6 py-3 rounded-lg font-medium hover:scale-105 transition">
              View Projects
            </button>

            <button className="border border-gray-500 px-6 py-3 rounded-lg hover:bg-gray-800 transition">
              Contact Me
            </button>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex justify-center"
        >
          <img
            src="/profile.jpg"
            alt="profile"
            className="w-[300px] md:w-[380px] rounded-2xl shadow-2xl border border-gray-700"
          />
        </motion.div>
      </div>
    </section>
  );
}