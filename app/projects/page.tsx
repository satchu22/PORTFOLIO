"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ProjectsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTech, setSelectedTech] = useState<string | null>(null);
  const [expandedProject, setExpandedProject] = useState<string | null>(null);

  const projects = [
    {
      id: "covid-xray-analysis",
      title: "COVID-19 Chest X-Ray Analysis System",
      status: null,
      tech: ["Python", "Flask", "TensorFlow", "PHP", "MySQL", "HTML", "CSS", "JavaScript"],
      description: "A full-stack medical imaging analysis system that uses machine learning to classify chest X-ray images as COVID-19 positive or negative. This bachelor's project demonstrates the integration of deep learning with web technologies for medical image analysis.",
      details: "Built a complete web application where users can upload chest X-ray images along with patient information. The system processes images through a Python-based ML service using TensorFlow, providing COVID-19 classification with confidence scores and lung involvement severity analysis. Features include patient data management, analysis history tracking, and a clean interface suitable for academic presentations. The backend uses Flask for the ML API, PHP for the web interface, and MySQL for data persistence. Includes both trained model inference and a fallback demo mode for educational purposes.",
      github: "https://github.com/satchu22/covid-xray-analysis-system",
      demo: null,
      video: null,
      featured: true
    },
    {
      id: "reality-twin",
      title: "RealityTwin — Digital Twin Simulation Platform",
      status: "🚧 Currently in Development",
      tech: ["Next.js", "FastAPI", "Mapbox", "Docker", "SQLite"],
      description: "RealityTwin is an AI-powered digital twin platform that I am currently developing to simulate real-world systems such as logistics and operations. The platform allows users to upload datasets, visualize them on a map, and run simulations to predict delays, costs, and operational risks.",
      details: "This project integrates frontend visualization with backend simulation logic, enabling decision-making insights through scalable architecture. I am continuously improving the platform by refining system design, adding simulation capabilities, and enhancing real-time data processing.",
      github: "https://github.com/satchu22/reality-twin-frontend",
      demo: null,
      video: null,
      featured: true
    },
    {
      id: "vr-escape-room",
      title: "VR Escape Room Game",
      status: null,
      tech: ["Unity", "C#", "Virtual Reality"],
      description: "A virtual reality escape room game developed using Unity, where players interact with objects and solve puzzles to escape an immersive environment. The project focuses on real-time interaction, spatial awareness, and gameplay mechanics in VR.",
      details: "This project helped me understand 3D environments, user interaction, and how game logic can be used to create engaging VR experiences.",
      github: "https://github.com/satchu22/vr-escape-room",
      demo: null,
      video: "/vr-demo.mp4",
      featured: true
    },
    {
      id: "zodiac-python",
      title: "Zodiac Sign Web Application",
      status: null,
      tech: ["Python", "Flask", "HTML", "CSS", "MySQL"],
      description: "I developed this project as a web-based application using Python and Flask to understand how backend systems interact with user interfaces in real-world scenarios. The application allows users to input their name and date of birth, processes the data on the server, and determines the corresponding zodiac sign using structured conditional logic.",
      details: "The application dynamically renders results on a web interface, providing users with their zodiac sign along with relevant information. This helped me understand routing, request handling, and how frontend and backend components communicate within a web application. To extend the functionality beyond basic logic, I integrated a MySQL database to store user data such as name and date of birth. This allowed the system to persist data and simulate real-world data management practices, giving me hands-on experience with database connectivity and CRUD operations. Overall, this project helped me build a strong foundation in full-stack development using Flask, understand database integration, and gain practical experience in designing applications that combine user interaction with backend processing and data storage.",
      github: "https://github.com/Abhi8602/1stwebapp",
      demo: null,
      video: null,
      featured: false
    },
    {
      id: "zodiac-java",
      title: "Zodiac Sign Application (Java)",
      status: null,
      tech: ["Java", "OOP", "Database", "Docker", "Kubernetes"],
      description: "I developed this project as a full Java-based application to strengthen my understanding of object-oriented programming, system design, and real-world application workflows. The system takes user input such as date of birth and determines the corresponding zodiac sign using structured conditional logic.",
      details: "I extended the application by integrating database concepts to structure and manage data effectively, helping me understand how application logic interacts with persistent storage in real-world systems. To further enhance the project, I implemented containerization using Docker, ensuring consistent execution across environments. I also explored Kubernetes concepts to understand how such applications can be deployed and scaled in a containerized infrastructure, bridging the gap between development and modern DevOps practices.",
      github: "https://github.com/satchu22/zodiac-signs-using-java",
      demo: null,
      video: null,
      featured: false
    }
  ];

  // Get all unique technologies
  const allTech = useMemo(() => {
    const techSet = new Set<string>();
    projects.forEach(project => {
      project.tech.forEach(tech => techSet.add(tech));
    });
    return Array.from(techSet).sort();
  }, []);

  // Filter projects based on search and tech filter
  const filteredProjects = useMemo(() => {
    return projects.filter(project => {
      const matchesSearch = searchTerm === "" ||
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.tech.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));

      const matchesTech = selectedTech === null || project.tech.includes(selectedTech);

      return matchesSearch && matchesTech;
    });
  }, [projects, searchTerm, selectedTech]);

  const toggleExpand = (projectId: string) => {
    setExpandedProject(expandedProject === projectId ? null : projectId);
  };

  return (
    <main className="min-h-screen bg-slate-950 text-white px-6 py-20">
      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex justify-between items-center mb-10"
        >
          <h1 className="text-3xl font-semibold">Projects</h1>

          <a
            href="/"
            className="border border-white/20 px-4 py-2 rounded hover:bg-white/10 transition"
          >
            ← Back
          </a>
        </motion.div>

        {/* SEARCH AND FILTERS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8 space-y-4"
        >
          {/* SEARCH BAR */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition"
            />
            <div className="absolute right-3 top-3 text-gray-400">
              🔍
            </div>
          </div>

          {/* TECH FILTERS */}
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedTech(null)}
              className={`px-3 py-1 rounded-full text-sm transition ${
                selectedTech === null
                  ? "bg-blue-500 text-white"
                  : "bg-white/10 text-gray-300 hover:bg-white/20"
              }`}
            >
              All
            </button>
            {allTech.map(tech => (
              <button
                key={tech}
                onClick={() => setSelectedTech(selectedTech === tech ? null : tech)}
                className={`px-3 py-1 rounded-full text-sm transition ${
                  selectedTech === tech
                    ? "bg-blue-500 text-white"
                    : "bg-white/10 text-gray-300 hover:bg-white/20"
                }`}
              >
                {tech}
              </button>
            ))}
          </div>
        </motion.div>

        {/* GITHUB PROFILE */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-12 text-center"
        >
          <p className="text-gray-400 mb-2">
            Explore more of my work on GitHub
          </p>

          <a
            href="https://github.com/satchu22"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline text-lg"
          >
            github.com/satchu22 →
          </a>
        </motion.div>

        {/* PROJECTS GRID */}
        <motion.div
          layout
          className="grid gap-6"
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ delay: index * 0.1 }}
                className={`border border-white/10 rounded-xl bg-white/5 overflow-hidden ${
                  project.featured ? "ring-1 ring-blue-500/20" : ""
                }`}
              >
                <div className="p-6">
                  {/* PROJECT HEADER */}
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-1">
                        {project.title}
                      </h3>
                      {project.status && (
                        <p className="text-green-400 text-sm">
                          {project.status}
                        </p>
                      )}
                    </div>
                    <button
                      onClick={() => toggleExpand(project.id)}
                      className="ml-4 p-2 rounded-lg hover:bg-white/10 transition"
                    >
                      {expandedProject === project.id ? "↑" : "↓"}
                    </button>
                  </div>

                  {/* TECH STACK */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map(tech => (
                      <button
                        key={tech}
                        onClick={() => setSelectedTech(selectedTech === tech ? null : tech)}
                        className="px-2 py-1 bg-white/10 rounded text-xs text-gray-300 hover:bg-white/20 transition"
                      >
                        {tech}
                      </button>
                    ))}
                  </div>

                  {/* DESCRIPTION */}
                  <p className="text-gray-300 leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* EXPANDED CONTENT */}
                  <AnimatePresence>
                    {expandedProject === project.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="pt-4 border-t border-white/10">
                          <p className="text-gray-300 leading-relaxed mb-4">
                            {project.details}
                          </p>

                          {/* VIDEO */}
                          {project.video && (
                            <div className="mb-4">
                              <video
                                src={project.video}
                                controls
                                className="w-full rounded-xl border border-white/10 shadow-lg"
                              />
                            </div>
                          )}

                          {/* ACTION BUTTONS */}
                          <div className="flex gap-4">
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg text-sm font-medium transition"
                            >
                              <span>View on GitHub</span>
                              <span>→</span>
                            </a>
                            {project.demo && (
                              <a
                                href={project.demo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg text-sm font-medium transition"
                              >
                                <span>Live Demo</span>
                                <span>🚀</span>
                              </a>
                            )}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* COLLAPSED ACTIONS */}
                  {expandedProject !== project.id && (
                    <div className="flex gap-4">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:underline text-sm"
                      >
                        View on GitHub →
                      </a>
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-green-400 hover:underline text-sm"
                        >
                          Live Demo →
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* NO RESULTS */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-gray-400 text-lg">No projects found matching your criteria.</p>
            <button
              onClick={() => {
                setSearchTerm("");
                setSelectedTech(null);
              }}
              className="mt-4 text-blue-400 hover:underline"
            >
              Clear filters
            </button>
          </motion.div>
        )}

        {/* BACK BUTTON */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex justify-center mt-16"
        >
          <a
            href="/"
            className="bg-white text-black px-6 py-3 rounded-lg font-medium hover:scale-105 transition"
          >
            ← Back to Portfolio
          </a>
        </motion.div>

      </div>
    </main>
  );
}