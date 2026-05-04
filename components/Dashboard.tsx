"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Dashboard() {
  const [systems, setSystems] = useState([
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
  ]);

  // Function to simulate status updates
  const updateSystemStatus = () => {
    setSystems(prevSystems =>
      prevSystems.map(sys => ({
        ...sys,
        status: getRandomStatus(sys.name)
      }))
    );
  };

  // Function to get random status based on system type
  const getRandomStatus = (systemName: string) => {
    const statuses = {
      "CI/CD Pipeline": ["Active", "Building", "Deploying", "Idle"],
      "Docker Containers": ["Running", "Starting", "Stopped", "Restarting"],
      "System Health": ["Healthy", "Warning", "Critical", "Monitoring"]
    };

    const availableStatuses = statuses[systemName as keyof typeof statuses] || ["Active"];
    return availableStatuses[Math.floor(Math.random() * availableStatuses.length)];
  };

  // Auto-update status every 10 seconds
  useEffect(() => {
    const interval = setInterval(updateSystemStatus, 10000);
    return () => clearInterval(interval);
  }, []);

  // Get status color based on status
  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'active':
      case 'running':
      case 'healthy':
        return 'text-green-400';
      case 'building':
      case 'starting':
      case 'idle':
      case 'monitoring':
        return 'text-yellow-400';
      case 'deploying':
      case 'restarting':
        return 'text-blue-400';
      case 'stopped':
      case 'critical':
        return 'text-red-400';
      case 'warning':
        return 'text-orange-400';
      default:
        return 'text-gray-400';
    }
  };

  return (
    <section className="py-36 px-6 bg-slate-950/10">
      <div className="max-w-5xl mx-auto">

        {/* DIVIDER */}
        <div className="h-px bg-gray-800 mb-16"></div>

        {/* TITLE */}
        <div className="flex items-center justify-between mb-14">
          <h2 className="text-3xl font-semibold tracking-tight text-white">
            System Status
          </h2>
          <button
            onClick={updateSystemStatus}
            className="px-4 py-2 rounded-full bg-gradient-to-r from-cyan-400 to-sky-500 text-slate-950 text-sm font-semibold shadow-lg shadow-cyan-500/20 transition duration-200 hover:scale-[1.02]"
          >
            Refresh Status
          </button>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-10">
          {systems.map((sys, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-slate-900/95 p-6 rounded-[2rem] border border-cyan-500/10 shadow-[0_18px_45px_rgba(14,165,233,0.12)] hover:border-cyan-400/25 hover:-translate-y-1 transition duration-300"
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
              <p className={`text-sm mt-4 font-medium ${getStatusColor(sys.status)}`}>
                ● {sys.status}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}