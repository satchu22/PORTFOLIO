"use client";

import { useEffect, useRef, useState } from "react";

export default function Chatbot() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<
    { user: string; bot: string }[]
  >([]);
  const chatRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTo({
        top: chatRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [messages]);

  const projects = [
    {
      id: "reality-twin",
      title: "RealityTwin — Digital Twin Simulation Platform",
      keywords: ["realitytwin", "digital twin", "logistics", "simulation"],
      tech: ["Next.js", "FastAPI", "Mapbox", "Docker", "SQLite"],
      description:
        "RealityTwin is an AI-powered digital twin platform for simulating real-world systems such as logistics and operations.",
      details:
        "It integrates frontend visualization with backend simulation logic to predict delays, costs, and risks. Users can upload datasets, visualize them on maps, and run scenario simulations.",
      motivation:
        "I built it to explore digital twin workflows, improve system modeling skills, and deliver meaningful decision-making insights through simulation.",
      github: "https://github.com/satchu22/reality-twin-frontend",
      status: "Currently in development",
    },
    {
      id: "covid-xray-analysis",
      title: "COVID-19 Chest X-Ray Analysis System",
      keywords: ["covid", "xray", "medical imaging", "tensorflow", "flask"],
      tech: ["Python", "Flask", "TensorFlow", "PHP", "MySQL", "HTML", "CSS", "JavaScript"],
      description:
        "A full-stack medical imaging system that classifies chest X-rays for COVID-19 using machine learning and tracks patient analysis history.",
      details:
        "Users upload chest X-ray images and patient information, the Python ML service runs TensorFlow inference, and the app stores results in MySQL. It also supports a demo mode for education and transparent analysis feedback.",
      motivation:
        "I built it to demonstrate deep learning integration with web applications and to create a functional medical data workflow for classification and history tracking.",
      github: "https://github.com/satchu22/covid-xray-analysis-system",
      status: null,
    },
    {
      id: "vr-escape-room",
      title: "VR Escape Room Game",
      keywords: ["vr", "virtual reality", "unity", "game", "escape room"],
      tech: ["Unity", "C#", "Virtual Reality"],
      description:
        "A virtual reality escape room game developed in Unity with object interaction and puzzle-solving mechanics.",
      details:
        "The project focuses on immersive 3D interaction, spatial reasoning, and real-time game logic to build an engaging VR experience.",
      motivation:
        "I developed it to learn VR design, user interaction, and how to create immersive gameplay experiences with Unity.",
      github: "https://github.com/satchu22/vr-escape-room",
      status: null,
    },
    {
      id: "zodiac-python",
      title: "Zodiac Sign Web Application",
      keywords: ["zodiac", "flask", "birth", "sign", "python"],
      tech: ["Python", "Flask", "HTML", "CSS", "MySQL"],
      description:
        "A Flask-based web app that computes zodiac signs from user birthdates and stores the results in a MySQL database.",
      details:
        "It dynamically renders zodiac results on the web interface, manages user requests on the server, and persists data to support a realistic full-stack flow.",
      motivation:
        "I built it to strengthen full-stack web development skills and to practice backend request handling with database persistence.",
      github: "https://github.com/Abhi8602/1stwebapp",
      status: null,
    },
    {
      id: "zodiac-java",
      title: "Zodiac Sign Application (Java)",
      keywords: ["zodiac", "java", "docker", "kubernetes", "oop"],
      tech: ["Java", "OOP", "Database", "Docker", "Kubernetes"],
      description:
        "A Java-based zodiac application built to practice object-oriented design, persistence, and deployment concepts.",
      details:
        "It calculates zodiac signs from date of birth input, integrates with a database for storage, and demonstrates containerization and scalable architecture planning.",
      motivation:
        "I created it to learn Java system design and to explore how applications can be packaged and deployed consistently.",
      github: "https://github.com/satchu22/zodiac-signs-using-java",
      status: null,
    },
  ];

  const exampleQuestions = [
    "How did you build RealityTwin?",
    "What tech does the COVID X-ray app use?",
    "Tell me about the VR Escape Room.",
    "How does the Zodiac Flask app work?",
    "Why did you build the Java Zodiac app?",
  ];

  const normalize = (text: string) =>
    text.toLowerCase().replace(/[^a-z0-9 ]/g, "");

  const findProject = (question: string) => {
    const normalizedQuestion = normalize(question);

    const exactProject = projects.find((project) =>
      project.keywords.some((keyword) => normalizedQuestion.includes(keyword)) ||
      normalize(project.title)
        .split(" ")
        .some((word) => word.length > 3 && normalizedQuestion.includes(word))
    );

    if (exactProject) return exactProject;

    return (
      projects
        .map((project) => ({
          project,
          score:
            project.keywords.filter((keyword) => normalizedQuestion.includes(keyword)).length +
            project.tech.filter((tech) => normalizedQuestion.includes(normalize(tech))).length +
            normalize(project.description)
              .split(" ")
              .filter((word) => normalizedQuestion.includes(word)).length +
            normalize(project.details)
              .split(" ")
              .filter((word) => normalizedQuestion.includes(word)).length,
        }))
        .filter((item) => item.score > 0)
        .sort((a, b) => b.score - a.score)[0]?.project || null
    );
  };

  const getProjectAnswer = (
    project: typeof projects[number],
    question: string
  ) => {
    const q = normalize(question);
    const asksTech = /\b(tech|technology|stack|tools|frameworks)\b/.test(q);
    const asksHow = /\b(how|build|built|made|created|developed|create|constructed)\b/.test(q);
    const asksWhy = /\b(why|purpose|goal|reason|benefit|use)\b/.test(q);
    const asksSource = /\b(github|repo|repository|source)\b/.test(q);
    const asksStatus = /\b(status|progress|development|current|stage)\b/.test(q);
    const asksFeature = /\b(feature|function|does it do|how it work|works|workflow|process|behavior)\b/.test(q);
    const asksOverview = /\b(what|describe|tell me|explain|overview|detail|about)\b/.test(q);

    if (asksSource) {
      return `You can view the ${project.title} source code on GitHub: ${project.github}`;
    }

    if (asksTech) {
      return `${project.title} uses ${project.tech.join(", ")}.`;
    }

    if (asksWhy) {
      return project.motivation;
    }

    if (asksHow) {
      return `${project.title} was built using ${project.tech.join(", ")}. ${project.details}`;
    }

    if (asksStatus && project.status) {
      return `${project.title} is currently ${project.status}. ${project.description}`;
    }

    if (asksFeature) {
      return `${project.title} ${project.description} ${project.details}`;
    }

    if (asksOverview) {
      return `${project.title}: ${project.description} ${project.details}`;
    }

    return `${project.title} ${project.description} It uses ${project.tech.join(", ")}. Ask anything specific about how it works, what tech it uses, or why I built it.`;
  };

  const getResponse = (question: string) => {
    const project = findProject(question);
    if (project) {
      return getProjectAnswer(project, question);
    }

    const q = normalize(question);
    if (/\b(project|portfolio|app|application|system|platform|game|work)\b/.test(q)) {
      return `I can answer anything about these projects: ${projects
        .map((project) => project.title)
        .join(", ")}.
Ask about a specific title or mention a technology and I will explain it.`;
    }

    if (/\b(tech|stack|technology|tools|frameworks)\b/.test(q)) {
      return `Across my projects, I use Next.js, Tailwind CSS, TypeScript, FastAPI, Flask, Docker, Python, Unity, TensorFlow, MySQL, and SQLite.`;
    }

    if (/\b(experience|resume|background)\b/.test(q)) {
      return "I have built production-ready systems in Python, Java, TypeScript, REST APIs, and Docker deployments, focusing on full-stack architecture and real-world applications.";
    }

    return `I can answer anything project related. Mention a project name or ask a question like \"How did you build RealityTwin?\" or \"What tech does the COVID X-ray app use?\"`;
  };

  const handleSendMessage = () => {
    if (!input) return;

    const response = getResponse(input);
    setMessages((current) => [...current, { user: input, bot: response }]);
    setInput("");
  };

  return (
    <section className="py-20 sm:py-24 md:py-28 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-6 sm:mb-8">
          Ask Me About My Work
        </h2>

        <div className="bg-slate-950/70 backdrop-blur-xl border border-cyan-400/10 p-4 sm:p-6 rounded-2xl shadow-lg shadow-cyan-500/10">
          <div className="mb-4 rounded-3xl border border-white/10 bg-slate-950/80 p-5 shadow-inner">
            <p className="text-sm text-slate-300 mb-2">
              Ask me anything about the projects in my portfolio. I’ll answer from the project details and GitHub descriptions.
            </p>
            <div className="flex flex-wrap gap-2 text-sm">
              {exampleQuestions.map((question, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setInput(question)}
                  className="rounded-full border border-cyan-500/20 bg-slate-800/80 px-3 py-1 text-cyan-200 hover:bg-cyan-400/10 transition"
                >
                  {question}
                </button>
              ))}
            </div>
          </div>

          {/* CHAT AREA */}
          <div
            ref={chatRef}
            className="space-y-4 mb-6 max-h-[28rem] overflow-y-auto rounded-[2rem] border border-white/10 bg-slate-950/70 p-4 shadow-inner"
          >
            {messages.length === 0 ? (
              <div className="rounded-3xl border border-dashed border-white/20 bg-white/5 p-6 text-center text-sm text-slate-400">
                Start the conversation by asking about any project, technology, or feature.
              </div>
            ) : (
              messages.map((m, i) => (
                <div key={i} className="space-y-3">
                  <div className="rounded-3xl bg-slate-900/90 p-4 shadow-md">
                    <p className="text-xs uppercase tracking-[0.2em] text-slate-400 mb-2">You</p>
                    <p className="text-sm text-white">{m.user}</p>
                  </div>

                  <div className="rounded-3xl bg-gradient-to-br from-sky-900/80 to-blue-950/90 p-4 shadow-lg">
                    <p className="text-xs uppercase tracking-[0.2em] text-slate-300 mb-2">AI</p>
                    <p className="text-sm text-slate-100">{m.bot}</p>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* INPUT */}
          <div className="flex flex-col sm:flex-row gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  handleSendMessage();
                }
              }}
              placeholder="Ask about my work..."
              className="flex-1 p-3 rounded-2xl bg-slate-900/90 border border-cyan-500/20 text-white outline-none focus:border-cyan-400"
            />

            <button
              onClick={handleSendMessage}
              className="rounded-2xl bg-gradient-to-r from-cyan-400 to-sky-500 px-5 py-3 text-slate-950 font-semibold shadow-lg shadow-cyan-500/20 hover:scale-105 transition"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}