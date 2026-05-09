"use client";

import { useEffect, useRef, useState } from "react";

export default function Chatbot() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<
    { user: string; bot: string; loading?: boolean }[]
  >([]);
  const [isLoading, setIsLoading] = useState(false);
  const chatRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTo({
        top: chatRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput("");
    setIsLoading(true);

    // Add user message and loading bot message
    setMessages(prev => [
      ...prev,
      { user: userMessage, bot: "", loading: true }
    ]);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: userMessage }),
      });

      if (!response.ok) {
        const errorBody = await response.json().catch(() => null);
        const serverError = errorBody?.error || response.statusText || 'Failed to get response';
        throw new Error(serverError);
      }

      const data = await response.json();

      // Replace loading message with actual response
      setMessages(prev =>
        prev.map((msg, index) =>
          index === prev.length - 1
            ? { user: userMessage, bot: data.response, loading: false }
            : msg
        )
      );
    } catch (error) {
      console.error('Chat error:', error);
      const errorMessage = error instanceof Error ? error.message : "Sorry, I'm having trouble connecting right now. Please try again later.";
      setMessages(prev =>
        prev.map((msg, index) =>
          index === prev.length - 1
            ? {
                user: userMessage,
                bot: errorMessage,
                loading: false
              }
            : msg
        )
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const exampleQuestions = [
    "Tell me about your experience",
    "What projects have you built?",
    "What technologies do you use?",
    "How did you build RealityTwin?",
    "What certifications do you have?",
  ];

  return (
    <section className="py-20 sm:py-24 md:py-28 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-6 sm:mb-8">
          Ask Me About My Work
        </h2>

        <div className="bg-slate-950/70 backdrop-blur-xl border border-cyan-400/10 p-4 sm:p-6 rounded-2xl shadow-lg shadow-cyan-500/10">
          <div className="mb-4 rounded-3xl border border-white/10 bg-slate-950/80 p-5 shadow-inner">
            <p className="text-sm text-slate-300 mb-2">
              Ask me anything about Satchidanand's background, projects, experience, or certifications. I'm powered by Groq AI to give you detailed, personalized answers.
            </p>
            <div className="flex flex-wrap gap-2 text-sm">
              {exampleQuestions.map((question, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setInput(question)}
                  disabled={isLoading}
                  className="rounded-full border border-cyan-500/20 bg-slate-800/80 px-3 py-1 text-cyan-200 hover:bg-cyan-400/10 transition disabled:opacity-50"
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
                Start the conversation by asking about any project, technology, or experience.
              </div>
            ) : (
              messages.map((m, i) => (
                <div key={i} className="space-y-3">
                  <div className="rounded-3xl bg-slate-900/90 p-4 shadow-md">
                    <p className="text-xs uppercase tracking-[0.2em] text-slate-400 mb-2">You</p>
                    <p className="text-sm text-white">{m.user}</p>
                  </div>

                  <div className="rounded-3xl bg-gradient-to-br from-sky-900/80 to-blue-950/90 p-4 shadow-lg">
                    <p className="text-xs uppercase tracking-[0.2em] text-slate-300 mb-2">
                      {m.loading ? "AI (thinking...)" : "AI"}
                    </p>
                    {m.loading ? (
                      <div className="flex items-center space-x-2">
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                          <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                        </div>
                        <span className="text-sm text-slate-400">Generating response...</span>
                      </div>
                    ) : (
                      <p className="text-sm text-slate-100">{m.bot}</p>
                    )}
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
              onKeyPress={handleKeyPress}
              placeholder="Ask about my work..."
              disabled={isLoading}
              className="flex-1 p-3 rounded-2xl bg-slate-900/90 border border-cyan-500/20 text-white outline-none focus:border-cyan-400 disabled:opacity-50"
            />

            <button
              onClick={sendMessage}
              disabled={isLoading || !input.trim()}
              className="rounded-2xl bg-gradient-to-r from-cyan-400 to-sky-500 px-5 py-3 text-slate-950 font-semibold shadow-lg shadow-cyan-500/20 hover:scale-105 transition disabled:opacity-50 disabled:hover:scale-100"
            >
              {isLoading ? "Sending..." : "Send"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}