import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Chatbot from "../components/Chatbot";

export default function Home() {
  return (
    <main className="min-h-screen text-white">
      <Hero />
      <Projects />
      <Chatbot />
    </main>
  );
}