import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Dashboard from "../components/Dashboard";
import Chatbot from "../components/Chatbot";
import SystemDiagram from "../components/SystemDiagram";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <main id="home" className="min-h-screen bg-[#0B0F19] text-white pt-20">
      <Navbar />
      <Hero />
      <Projects />
      <Dashboard />
      <SystemDiagram />
      <Chatbot />
    </main>
  );
}