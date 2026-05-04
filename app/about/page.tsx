import Link from "next/link";

export default function AboutPage() {
  return (
    <section className="min-h-screen bg-[#020617] px-8 py-20 text-white md:px-12">
      <div className="mx-auto max-w-6xl space-y-10">
        <div className="space-y-4 rounded-[2rem] border border-white/10 bg-slate-950/80 p-10 shadow-[0_40px_120px_rgba(15,23,42,0.65)] backdrop-blur-xl">
          <span className="inline-flex rounded-full bg-sky-500/10 px-4 py-1 text-sm font-semibold text-sky-200">
            About Me
          </span>
          <h1 className="text-5xl font-bold tracking-tight text-white md:text-6xl">
            A human-first engineer building systems that are reliable, secure, and easy to scale.
          </h1>
          <p className="max-w-3xl text-lg leading-8 text-slate-300">
            I’m Satchidanand, a software engineer who blends full-stack development, DevOps, and thoughtful systems design. My work is guided by a practical mindset: solve the problem, keep the user in mind, and make the final product something you can trust in production.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-8 rounded-[2rem] border border-white/10 bg-slate-950/80 p-10 shadow-xl">
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold text-white">From Pune to the U.S., I turned curiosity into usable systems.</h2>
              <p className="text-base leading-8 text-slate-300">
                My journey began at PVPIT in Pune, where I earned a Bachelor of Engineering in Computer Science. I took that strong technical foundation to the U.S. for an M.S. at University of the Pacific, where I learned how to turn ideas into resilient software and production-ready architecture.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-white">Real-world impact, real-world scale.</h3>
              <p className="text-base leading-8 text-slate-300">
                At TSL Consulting, I built backend services and CRM automations that supported business operations and data workflows. Volunteering with Saayam For All let me own full-stack features, collaborate with remote contributors, and deliver software that supports community outreach.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-white">Tools, process, and practical delivery.</h3>
              <p className="text-base leading-8 text-slate-300">
                I’m certified in Agile Scrum, Kubernetes, and Docker Foundations because I believe software is stronger when engineering is aligned with the right process. My portfolio projects reflect that: secure deployment, CI/CD, sensible architecture, and clean interfaces.
              </p>
            </div>
          </div>

          <div className="space-y-6 rounded-[2rem] border border-white/10 bg-slate-900/80 p-8 shadow-lg">
            <div className="space-y-4">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Highlights</p>
              <div className="grid gap-4">
                <div className="rounded-3xl bg-white/5 p-5">
                  <p className="text-sm text-slate-400">Education</p>
                  <p className="mt-2 font-semibold text-white">B.E. in Computer Science, M.S. in Computer Science</p>
                </div>
                <div className="rounded-3xl bg-white/5 p-5">
                  <p className="text-sm text-slate-400">Professional Experience</p>
                  <p className="mt-2 font-semibold text-white">TSL Consulting • Saayam For All</p>
                </div>
                <div className="rounded-3xl bg-white/5 p-5">
                  <p className="text-sm text-slate-400">Certifications</p>
                  <p className="mt-2 font-semibold text-white">Agile Scrum, Kubernetes, Docker Foundations</p>
                </div>
              </div>
            </div>

            <div className="rounded-[1.5rem] border border-slate-700 bg-slate-950/80 p-6 text-slate-200">
              <p className="text-sm uppercase tracking-[0.25em] text-sky-300">How I work</p>
              <ul className="mt-4 space-y-3 text-base leading-7">
                <li>• Build clean APIs and scalable backends with a focus on stability.</li>
                <li>• Use DevOps practices to deploy, monitor, and operate systems reliably.</li>
                <li>• Keep projects grounded in solving real user problems.</li>
              </ul>
            </div>

            <Link
              href="/"
              className="inline-flex w-full items-center justify-center rounded-full bg-sky-500 px-5 py-3 text-sm font-semibold text-black transition hover:bg-sky-400"
            >
              Back to home
            </Link>
          </div>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-10 shadow-[0_30px_80px_rgba(15,23,42,0.55)]">
          <h2 className="text-3xl font-semibold text-white">What I bring to your next project</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-6">
              <p className="text-sm uppercase tracking-[0.22em] text-slate-500">Approach</p>
              <p className="mt-4 text-lg font-semibold text-white">Thoughtful systems design</p>
              <p className="mt-3 text-slate-400">I think beyond code to build maintainable, extensible systems.</p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-6">
              <p className="text-sm uppercase tracking-[0.22em] text-slate-500">Focus</p>
              <p className="mt-4 text-lg font-semibold text-white">Full-stack + DevOps</p>
              <p className="mt-3 text-slate-400">Front-end, back-end, and deployment all working together.</p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-6">
              <p className="text-sm uppercase tracking-[0.22em] text-slate-500">Impact</p>
              <p className="mt-4 text-lg font-semibold text-white">Reliable deliverables</p>
              <p className="mt-3 text-slate-400">I build software that can be supported in production with confidence.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
