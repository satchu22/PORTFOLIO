"use client";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#020617] text-white flex flex-col items-center justify-center px-6">

      {/* PHOTO */}
      <img
        src="/profile.jpg"
        alt="profile"
        className="w-40 h-40 rounded-full object-cover border border-white/10 shadow-xl"
      /> 

      {/* NAME */}
      <h1 className="mt-6 text-2xl font-semibold">
        Satchidanand Deshmukh
      </h1>

      {/* CONTACT CARD */}
      <div className="mt-8 space-y-4 text-gray-300 text-center">

        {/* PHONE */}
        <p>
          📞 <span className="text-white">(669) 296-6186</span>
        </p>

        {/* EMAIL */}
        <p>
          📧{" "}
          <a
            href="mailto:satchidanand86@gmail.com"
            className="text-blue-400 hover:underline"
          >
            satchidanand86@gmail.com
          </a>
        </p>

        {/* LINKEDIN */}
        <p>
          🔗{" "}
          <a
            href="https://www.linkedin.com/in/satchidanand22199/"
            target="_blank"
            className="text-blue-400 hover:underline"
          >
            LinkedIn Profile
          </a>
        </p>

        {/* WHATSAPP */}
        <p>
          💬{" "}
          <a
            href="https://wa.me/16692966186"
            target="_blank"
            className="text-green-400 hover:underline"
          >
            WhatsApp Me
          </a>
        </p>

      </div>

      {/* BACK BUTTON */}
      <div className="mt-10">
        <a
          href="/"
          className="bg-white text-black px-6 py-3 rounded-lg font-medium hover:scale-105 transition"
        >
          ← Back to Portfolio
        </a>
      </div>

    </main>
  );
}