"use client";

import { motion } from "framer-motion";

export default function Dashboard() {
  const systems = [
    {
      name: "CI/CD Pipeline",
      status: "Active",
      desc: "Automated build and deployment pipeline",
    },
    {
      name: "Docker Containers",
      status: "Running",
      desc: "Containerized services in isolated environments",
    },
    {
      name: "System Health",
      status: "Healthy",
      desc: "All services operational with no failures",
    },
  ];

  return (
    <section className="py-36 px-6">
      <div className="max-w-5xl mx-auto">

        {/* DIVIDER */}
        <div className="h-px bg-gray-800 mb-16"></div>

        {/* TITLE */}
        <h2 className="text-3xl font-semibold mb-14 tracking-tight">
          System Status
        </h2>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-10">
          {systems.map((sys, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-[#0f172a] p-6 rounded-2xl border border-gray-800 hover:border-gray-600 hover:translate-y-[-4px] transition duration-300"
            >
              {/* TITLE */}
              <h3 className="text-lg font-semibold mb-2">
                {sys.name}
              </h3>

              {/* DESCRIPTION */}
              <p className="text-gray-400 text-sm leading-relaxed">
                {sys.desc}
              </p>

              {/* STATUS */}
              <p className="text-green-400 text-sm mt-4 font-medium">
                ● {sys.status}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}