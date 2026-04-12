"use client";

import { useState } from "react";

export default function Chatbot() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<
    { user: string; bot: string }[]
  >([]);

  const getResponse = (question: string) => {
    const q = question.toLowerCase();

    if (q.includes("reality")) {
      return "RealityTwin is a digital twin simulation platform that models real-world systems and predicts outcomes.";
    }

    if (q.includes("tech")) {
      return "I use Next.js, Tailwind, FastAPI, Docker, and DevOps practices.";
    }

    if (q.includes("vr")) {
      return "The VR Room is an immersive 3D experience project.";
    }

    return "Ask me about my projects, tech stack, or system design.";
  };

  const sendMessage = () => {
    if (!input) return;

    const response = getResponse(input);
    setMessages([...messages, { user: input, bot: response }]);
    setInput("");
  };

  return (
    <section className="py-28 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-semibold mb-8">
          Ask Me About My Work
        </h2>

        <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl shadow-lg">

          {/* CHAT AREA */}
          <div className="space-y-4 mb-6 max-h-60 overflow-y-auto">
            {messages.map((m, i) => (
              <div key={i} className="space-y-1">
                <p className="text-gray-400 text-sm">You</p>
                <p className="bg-gray-800 p-2 rounded-md inline-block">
                  {m.user}
                </p>

                <p className="text-gray-400 text-sm mt-2">AI</p>
                <p className="bg-blue-900/40 p-2 rounded-md inline-block">
                  {m.bot}
                </p>
              </div>
            ))}
          </div>

          {/* INPUT */}
          <div className="flex gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about my work..."
              className="flex-1 p-3 rounded-lg bg-gray-900 border border-gray-700 text-white outline-none"
            />

            <button
              onClick={sendMessage}
              className="bg-white text-black px-5 rounded-lg font-medium hover:scale-105 transition"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}