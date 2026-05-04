import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Dashboard from "../components/Dashboard";
import Chatbot from "../components/Chatbot";
import SystemDiagram from "../components/SystemDiagram";

export default function Home() {
  return (
    <main className="min-h-screen text-white">
      <Hero />
      <Projects />
      <Dashboard />
      <SystemDiagram />
      <Chatbot />
    </main>
  );
}