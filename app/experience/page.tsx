"use client";

export default function ExperiencePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white px-6 py-20">
      <div className="max-w-5xl mx-auto">

        {/* TOP BAR */}
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-2xl font-semibold">Experience</h1>

          <a
            href="/"
            className="border border-white/20 px-4 py-2 rounded hover:bg-white/10 transition"
          >
            ← Back
          </a>
        </div>

        <div className="space-y-10">

          {/* SAAYAM */}
          <div className="border border-white/10 p-6 rounded-xl bg-white/5">
            <div className="flex justify-between flex-wrap gap-2">
              <h3 className="text-xl font-semibold">
                Backend Software Developer — Volunteer
              </h3>
              <span className="text-gray-400 text-sm">
                Oct 2025 – Present
              </span>
            </div>

            <p className="text-gray-400 text-sm mt-1">
              Saayam For All • Remote
            </p>

            <p className="mt-4 text-gray-300 leading-relaxed">
  During my time volunteering at Saayam For All, I focused on building a strong
  foundation in modern software development practices while contributing to a
  live project environment. I began by learning core technologies such as React,
  Java, and working with APIs, gradually understanding how frontend and backend
  systems interact in real-world applications.
            </p>

            <p className="mt-4 text-gray-300 leading-relaxed">
  Under the guidance of senior developers, I implemented features, assisted in
  debugging issues, and contributed to improving overall system stability. This
  experience helped me understand structured development workflows, code quality
  practices, and how to write maintainable, production-level code.
            </p>

            <p className="mt-4 text-gray-300 leading-relaxed">
  I also gained hands-on experience with Git and version control systems,
  learning how to collaborate in a team environment through branching,
  pull requests, and code reviews. This exposure helped me understand how modern
  engineering teams manage codebases and deliver features efficiently.
            </p>
          </div>

          {/* TSL */}
          <div className="border border-white/10 p-6 rounded-xl bg-white/5">
            <div className="flex justify-between flex-wrap gap-2">
              <h3 className="text-xl font-semibold">
                Software Engineering Intern
              </h3>
              <span className="text-gray-400 text-sm">
                Nov 2022 – Jun 2023
              </span>
            </div>

            <p className="text-gray-400 text-sm mt-1">
              TSL Consulting Pvt Ltd • Pune, India
            </p>

            {/* IMAGE */}
            <div className="mt-6 flex justify-center">
              <img
                src="/tsl-team.jpg"
                alt="TSL Team"
                className="rounded-xl border border-white/10 shadow-lg max-w-full md:max-w-2xl"
              />
            </div>

            {/* STORY */}
            <p className="mt-6 text-gray-300 leading-relaxed">
              I began my journey at TSL Consulting as a Software Engineering Intern
              with minimal real-world experience. During my initial phase, I focused
              on learning development fundamentals and understanding how real teams
              work in a production environment. One of my first projects was
              building a Python-based application with my team that generated zodiac
              signs based on user input. This experience helped me strengthen my
              programming basics, problem-solving skills, and teamwork.
            </p>

            {/* CRM */}
            <p className="mt-4 text-gray-300 leading-relaxed">
              After building a strong foundation, I transitioned into working on an
              internal CRM system developed using PHP, HTML, CSS, and SQL. This
              system was actively used by employees to manage customer interactions,
              log call data, and upload client information. I worked under senior
              developers, assisting in debugging issues, improving database queries,
              and ensuring smooth backend functionality. This gave me hands-on
              exposure to real-world systems and how software directly supports
              business operations.
            </p>

            {/* MAILPUNCH */}
            <p className="mt-4 text-gray-300 leading-relaxed">
              Later, I contributed to a product called{" "}
              <a
                href="https://www.linkedin.com/company/mailpunch/"
                target="_blank"
                className="text-blue-400 hover:underline"
              >
                MailPunch
              </a>
              , an email marketing and campaign analytics platform. Our team worked
              on processing large volumes of email campaign data, including metrics
              such as number of emails sent and performance insights. I helped
              convert this raw data into meaningful visual representations using
              Python’s Matplotlib, enabling better understanding of campaign
              performance and supporting data-driven decision-making.
            </p>

          </div>

        </div>

        {/* BOTTOM BUTTON */}
        <div className="flex justify-center mt-16">
          <a
            href="/"
            className="bg-white text-black px-6 py-3 rounded-lg font-medium hover:scale-105 transition"
          >
            ← Back to Portfolio
          </a>
        </div>

      </div>
    </main>
  );
}