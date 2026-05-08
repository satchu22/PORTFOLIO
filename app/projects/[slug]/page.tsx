"use client";

import { useParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Code } from "lucide-react";

const projectData = {
  "covid-x-ray-analysis": {
    title: "COVID-19 Chest X-Ray Analysis System",
    description: "A comprehensive medical imaging analysis system that leverages machine learning to classify chest X-ray images for COVID-19 detection, featuring a full-stack web interface and real-time analysis capabilities.",
    longDescription: `This bachelor's project represents a complete integration of machine learning with web technologies for medical image analysis. The system allows healthcare professionals and researchers to upload chest X-ray images, analyze them using deep learning models, and receive instant classification results with confidence scores and severity assessments.

The application serves as both an educational tool and a demonstration of practical AI implementation in healthcare, bridging the gap between cutting-edge machine learning research and real-world medical applications.`,
    tech: ["Python", "Flask", "TensorFlow", "PHP", "MySQL", "HTML", "CSS", "JavaScript"],
    features: [
      "Real-time chest X-ray image analysis",
      "COVID-19 classification with confidence scoring",
      "Lung involvement severity assessment",
      "Patient data management system",
      "Analysis history and reporting",
      "Responsive web interface",
      "Database integration for record keeping",
      "Fallback demo mode for educational purposes"
    ],
    architecture: {
      diagram: `graph TB
        A[User Interface<br/>HTML/CSS/JS + PHP] --> B[Web Server<br/>Apache/Nginx]
        B --> C[PHP Backend<br/>File Upload + API Calls]
        C --> D[MySQL Database<br/>Patient Records]
        C --> E[Flask ML Service<br/>Python API]
        E --> F[Image Preprocessing<br/>OpenCV + PIL]
        F --> G[ML Model Inference<br/>TensorFlow/Keras]
        G --> H[Result Processing<br/>Confidence + Severity]
        H --> C
        I[Model Training<br/>CNN Architecture] -.-> G

        style A fill:#e1f5fe
        style E fill:#f3e5f5
        style G fill:#e8f5e8
        style I fill:#fff3e0`,
      explanation: "The system follows a microservices architecture with clear separation of concerns. The PHP frontend handles user interactions and file uploads, while the Python Flask service manages all machine learning operations. This decoupling allows for independent scaling and maintenance of each component."
    },
    workflow: {
      diagram: `sequenceDiagram
        participant U as User
        participant F as Frontend (PHP)
        participant DB as Database
        participant ML as ML Service (Flask)
        participant M as ML Model

        U->>F: Upload X-ray + Patient Info
        F->>DB: Store Patient Record
        F->>ML: Send Image for Analysis
        ML->>ML: Preprocess Image
        ML->>M: Run Inference
        M-->>ML: Prediction Results
        ML-->>F: Classification + Scores
        F->>DB: Update Record with Results
        F-->>U: Display Analysis Results`,
      explanation: "The workflow ensures data integrity and provides a seamless user experience. Each step is logged and can be audited, making the system suitable for medical environments where traceability is crucial."
    },
    challenges: [
      "Integrating Python ML models with PHP web application",
      "Handling large medical image files efficiently",
      "Ensuring model accuracy while maintaining fast inference times",
      "Implementing proper data validation and security measures",
      "Creating an intuitive interface for non-technical medical professionals"
    ],
    learnings: [
      "Full-stack development combining multiple programming languages",
      "Machine learning model deployment in production environments",
      "Medical imaging preprocessing techniques",
      "Database design for healthcare applications",
      "API design and microservices communication",
      "User experience design for specialized domains"
    ],
    github: "https://github.com/satchu22/covid-xray-analysis-system",
    demo: null,
    images: [],
    status: "Completed"
  },
  "realitytwin": {
    title: "RealityTwin — Digital Twin Simulation Platform",
    description: "An AI-powered digital twin platform for simulating and optimizing real-world systems, enabling predictive analytics for logistics, operations, and complex system modeling.",
    longDescription: `RealityTwin represents the next evolution in system simulation technology. By creating digital replicas of physical systems, the platform allows users to test scenarios, predict outcomes, and optimize performance without risking real-world assets.

The platform integrates advanced visualization with powerful simulation engines, providing stakeholders with actionable insights for decision-making in complex operational environments.`,
    tech: ["Next.js", "FastAPI", "Mapbox", "Docker", "SQLite", "Python", "TypeScript"],
    features: [
      "Interactive 3D system visualization",
      "Real-time simulation engine",
      "Predictive analytics dashboard",
      "Scenario planning tools",
      "Performance optimization algorithms",
      "Multi-system integration capabilities",
      "Real-time data streaming",
      "Custom model builder interface"
    ],
    architecture: {
      diagram: `graph TB
        A[Next.js Frontend<br/>React + TypeScript] --> B[FastAPI Backend<br/>Python + AsyncIO]
        B --> C[Simulation Engine<br/>Custom Algorithms]
        B --> D[Data Processing<br/>Pandas + NumPy]
        C --> E[SQLite Database<br/>System Models]
        A --> F[Mapbox Integration<br/>Geospatial Visualization]
        B --> G[Docker Containers<br/>Microservices]

        style A fill:#e3f2fd
        style B fill:#f3e5f5
        style C fill:#e8f5e8
        style F fill:#fff3e0`,
      explanation: "The architecture emphasizes scalability and modularity. Each simulation component runs in isolated containers, allowing for independent scaling based on computational requirements."
    },
    workflow: {
      diagram: `sequenceDiagram
        participant U as User
        participant F as Frontend
        participant B as Backend API
        participant S as Simulation Engine
        participant DB as Database

        U->>F: Define System Parameters
        F->>B: Submit Simulation Request
        B->>DB: Store Configuration
        B->>S: Initialize Simulation
        S->>S: Run Simulation Loop
        S-->>B: Stream Results
        B-->>F: Update Visualization
        F-->>U: Display Real-time Results`,
      explanation: "The real-time streaming architecture ensures users can monitor simulation progress and intervene if needed, making the platform suitable for interactive scenario planning."
    },
    challenges: [
      "Developing accurate simulation models for complex real-world systems",
      "Optimizing performance for real-time visualization of large datasets",
      "Creating intuitive interfaces for complex system configuration",
      "Ensuring simulation accuracy while maintaining computational efficiency",
      "Implementing scalable architecture for growing computational demands"
    ],
    learnings: [
      "Advanced system modeling and simulation techniques",
      "Real-time data processing and streaming",
      "Geospatial data visualization",
      "Microservices architecture design",
      "Performance optimization for computational workloads",
      "User interface design for complex technical systems"
    ],
    github: "https://github.com/satchu22/reality-twin-frontend",
    demo: null,
    images: [],
    status: "In Development"
  },
  "mici-capstone": {
    title: "MICI Capstone Project",
    description: "A comprehensive full-stack capstone project addressing real-world engineering challenges with modern web technologies and scalable architecture.",
    longDescription: `This capstone project represents the culmination of advanced software engineering studies, tackling complex real-world problems through innovative technical solutions. The project demonstrates proficiency in full-stack development, system design, and engineering best practices.`,
    tech: ["React", "Node.js", "Express", "MongoDB", "Docker", "AWS"],
    features: [
      "Scalable web application architecture",
      "Real-time data processing",
      "Cloud-native deployment",
      "Advanced user management",
      "Analytics and reporting dashboard",
      "API-first design approach",
      "Automated testing suite"
    ],
    architecture: {
      diagram: `graph TB
        A[React Frontend] --> B[Express API Gateway]
        B --> C[User Service]
        B --> D[Data Processing Service]
        B --> E[Analytics Service]
        C --> F[MongoDB]
        D --> F
        E --> G[Redis Cache]
        B --> H[Docker Swarm]
        H --> I[AWS ECS]

        style A fill:#e3f2fd
        style B fill:#f3e5f5
        style C fill:#e8f5e8
        style I fill:#fff3e0`,
      explanation: "The microservices architecture ensures high availability and scalability, with each service handling specific business logic and communicating through well-defined APIs."
    },
    workflow: {
      diagram: `sequenceDiagram
        participant U as User
        participant F as Frontend
        participant API as API Gateway
        participant S as Services
        participant DB as Database

        U->>F: Interact with Application
        F->>API: API Request
        API->>S: Route to Service
        S->>DB: Data Operations
        DB-->>S: Query Results
        S-->>API: Processed Response
        API-->>F: API Response
        F-->>U: Updated UI`,
      explanation: "The API-first approach ensures consistent data flow and enables easy integration with external systems and future expansions."
    },
    challenges: [
      "Designing scalable microservices architecture",
      "Implementing efficient data processing pipelines",
      "Ensuring system reliability and fault tolerance",
      "Managing complex state across distributed services",
      "Optimizing performance for high-traffic scenarios"
    ],
    learnings: [
      "Microservices design patterns",
      "Cloud architecture and deployment",
      "Distributed system management",
      "API design and documentation",
      "Performance monitoring and optimization",
      "Agile development methodologies"
    ],
    github: "https://github.com/satchu22/mici-capstone",
    demo: null,
    images: [],
    status: "Completed"
  },
  "vr-room": {
    title: "VR Escape Room Game",
    description: "An immersive virtual reality escape room experience built with Unity, featuring interactive 3D environments and puzzle-solving mechanics.",
    longDescription: `This VR project explores the intersection of game development and immersive technology, creating engaging experiences that challenge players' problem-solving abilities in three-dimensional space. The project demonstrates advanced Unity development techniques and VR-specific design considerations.`,
    tech: ["Unity", "C#", "VR SDK", "Blender", "Photon"],
    features: [
      "Immersive 3D environments",
      "Interactive object manipulation",
      "Complex puzzle systems",
      "Multiplayer support",
      "Real-time physics simulation",
      "Audio spatialization",
      "Progress saving system"
    ],
    architecture: {
      diagram: `graph TB
        A[Unity Engine] --> B[VR Camera Rig]
        A --> C[Physics Engine]
        A --> D[Networking Layer]
        B --> E[VR Controllers]
        C --> F[Object Interactions]
        D --> G[Multiplayer Sync]
        A --> H[Audio System]

        style A fill:#e3f2fd
        style B fill:#f3e5f5
        style E fill:#e8f5e8
        style H fill:#fff3e0`,
      explanation: "The architecture leverages Unity's component-based system, allowing for modular development and easy iteration on game mechanics."
    },
    workflow: {
      diagram: `sequenceDiagram
        participant P as Player
        participant VR as VR System
        participant U as Unity Engine
        participant Puz as Puzzle System

        P->>VR: Enter VR Environment
        VR->>U: Initialize Scene
        U->>Puz: Load Puzzle State
        P->>VR: Interact with Objects
        VR->>U: Process Interactions
        U->>Puz: Check Puzzle Logic
        Puz-->>U: Update Game State
        U-->>VR: Render Changes
        VR-->>P: Visual/Audio Feedback`,
      explanation: "The real-time interaction loop ensures immediate feedback, creating an engaging and responsive VR experience."
    },
    challenges: [
      "Optimizing performance for VR headsets",
      "Designing intuitive 3D interactions",
      "Managing motion sickness considerations",
      "Creating balanced puzzle difficulty",
      "Implementing smooth multiplayer synchronization"
    ],
    learnings: [
      "3D game development principles",
      "VR/AR technology integration",
      "Spatial audio design",
      "Physics-based interactions",
      "Multiplayer game architecture",
      "User experience in immersive environments"
    ],
    github: "https://github.com/satchu22/vr-escape-room",
    demo: null,
    images: [],
    status: "Completed"
  },
  "zodiac-app": {
    title: "Zodiac Sign Calculator Application",
    description: "A dynamic web application that calculates zodiac signs based on birth dates, featuring multiple implementations across different technologies.",
    longDescription: `This project explores the same functionality implemented in different technological stacks, demonstrating the versatility of software development approaches and the importance of choosing the right technology for specific use cases.`,
    tech: ["Python", "Flask", "Java", "JavaScript", "MySQL", "Docker"],
    features: [
      "Date-based zodiac calculation",
      "Multiple technology implementations",
      "User data persistence",
      "Responsive web interfaces",
      "Containerized deployment",
      "RESTful API design"
    ],
    architecture: {
      diagram: `graph LR
        A[Web Interface] --> B[Application Server]
        B --> C[Zodiac Logic Engine]
        B --> D[Database Layer]
        D --> E[MySQL Database]
        B --> F[Docker Container]

        style A fill:#e3f2fd
        style B fill:#f3e5f5
        style C fill:#e8f5e8
        style F fill:#fff3e0`,
      explanation: "The modular architecture allows for easy swapping of different technology implementations while maintaining consistent functionality."
    },
    workflow: {
      diagram: `sequenceDiagram
        participant U as User
        participant W as Web App
        participant L as Logic Engine
        participant DB as Database

        U->>W: Enter Birth Date
        W->>L: Calculate Zodiac Sign
        L-->>W: Return Sign Result
        W->>DB: Store User Data
        DB-->>W: Confirmation
        W-->>U: Display Result + History`,
      explanation: "The simple workflow demonstrates fundamental web application patterns while allowing for technology-specific optimizations."
    },
    challenges: [
      "Implementing consistent logic across different languages",
      "Managing date parsing and validation",
      "Ensuring UI consistency across implementations",
      "Database schema design for simple applications",
      "Container orchestration for multiple services"
    ],
    learnings: [
      "Cross-platform development approaches",
      "Web application fundamentals",
      "Database integration patterns",
      "Containerization basics",
      "Code organization and reusability",
      "Technology selection considerations"
    ],
    github: "https://github.com/satchu22/zodiac-signs-using-java",
    demo: null,
    images: [],
    status: "Completed"
  }
};

export default function ProjectDetailPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug as string;

  const project = projectData[slug as keyof typeof projectData];

  if (!project) {
    return (
      <main className="min-h-screen bg-slate-950 text-white px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl font-semibold mb-4">Project Not Found</h1>
          <p className="text-gray-400 mb-8">The project you're looking for doesn't exist.</p>
          <button
            onClick={() => router.push('/projects')}
            className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-medium transition"
          >
            ← Back to Projects
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white px-6 py-20">
      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="mb-8">
          <button
            onClick={() => router.push('/projects')}
            className="flex items-center gap-2 text-gray-400 hover:text-white transition mb-6"
          >
            <ArrowLeft size={20} />
            Back to Projects
          </button>

          <div className="flex justify-between items-start mb-6">
            <div>
              <h1 className="text-4xl font-bold mb-2">{project.title}</h1>
              <div className="flex items-center gap-4">
                <span className={`px-3 py-1 rounded-full text-sm ${
                  project.status === 'Completed'
                    ? 'bg-green-500/20 text-green-400'
                    : 'bg-yellow-500/20 text-yellow-400'
                }`}>
                  {project.status}
                </span>
              </div>
            </div>

            <div className="flex gap-3">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-lg transition"
              >
                <Code size={18} />
                Code
              </a>
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition"
                >
                  <ExternalLink size={18} />
                  Demo
                </a>
              )}
            </div>
          </div>
        </div>

        {/* DESCRIPTION */}
        <div className="mb-12">
          <p className="text-xl text-gray-300 leading-relaxed mb-6">
            {project.description}
          </p>
          <p className="text-gray-400 leading-relaxed">
            {project.longDescription}
          </p>
        </div>

        {/* TECH STACK */}
        <div className="mb-12">

          <h2 className="text-2xl font-semibold mb-6">Technology Stack</h2>
          <div className="flex flex-wrap gap-3">
            {project.tech.map(tech => (
              <span
                key={tech}
                className="px-4 py-2 bg-white/10 rounded-lg text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* FEATURES */}
        <div
          className="mb-12"
        >
          <h2 className="text-2xl font-semibold mb-6">Key Features</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {project.features.map((feature, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-gray-300">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ARCHITECTURE */}
        <div
          className="mb-12"
        >
          <h2 className="text-2xl font-semibold mb-6">System Architecture</h2>
          <div className="bg-white/5 rounded-xl p-6 mb-4">
            <div className="bg-white rounded-lg p-4 mb-4">
              <pre className="text-sm text-gray-800 whitespace-pre-wrap">
                {project.architecture.diagram}
              </pre>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              {project.architecture.explanation}
            </p>
          </div>
        </div>

        {/* WORKFLOW */}
        <div
          className="mb-12"
        >
          <h2 className="text-2xl font-semibold mb-6">Workflow Diagram</h2>
          <div className="bg-white/5 rounded-xl p-6 mb-4">
            <div className="bg-white rounded-lg p-4 mb-4">
              <pre className="text-sm text-gray-800 whitespace-pre-wrap">
                {project.workflow.diagram}
              </pre>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              {project.workflow.explanation}
            </p>
          </div>
        </div>

        {/* CHALLENGES & LEARNINGS */}
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <div
          >
            <h2 className="text-2xl font-semibold mb-6">Challenges Overcome</h2>
            <div className="space-y-3">
              {project.challenges.map((challenge, index) => (
                <div key={index} className="flex gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                  <span className="text-gray-300 text-sm leading-relaxed">{challenge}</span>
                </div>
              ))}
            </div>
          </div>

          <div
          >
            <h2 className="text-2xl font-semibold mb-6">Key Learnings</h2>
            <div className="space-y-3">
              {project.learnings.map((learning, index) => (
                <div key={index} className="flex gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <span className="text-gray-300 text-sm leading-relaxed">{learning}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* BACK TO PROJECTS */}
        <div
          className="text-center"
        >
          <button
            onClick={() => router.push('/projects')}
            className="bg-white text-black px-8 py-4 rounded-lg font-medium hover:scale-105 transition"
          >
            ← Back to All Projects
          </button>
        </div>

      </div>
    </main>
  );
}