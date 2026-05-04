export default function ResumePage() {
  return (
    <main className="min-h-screen bg-[#020617] text-white px-6 py-20">
      <div className="max-w-5xl mx-auto text-left">

        {/* TOP BAR */}
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-2xl font-semibold">Resume</h1>

          <div className="flex gap-4">
            <a
              href="/"
              className="border border-white/20 px-4 py-2 rounded hover:bg-white/10 transition"
            >
              ← Back
            </a>

            {/* ✅ ONLY CHANGE: DOWNLOAD FIX */}
            <a
              href="/resume.pdf"
              download="Satchidanand_Deshmukh_Resume.pdf"
              className="bg-white text-black px-4 py-2 rounded font-medium hover:scale-105 transition"
            >
              Download PDF
            </a>
          </div>
        </div>

        {/* HEADER */}
        <div className="text-center mb-8 border-b border-white/10 pb-6">
          <h2 className="text-3xl font-bold tracking-tight">
            Satchidanand Deshmukh
          </h2>

          <p className="text-sm text-gray-400 mt-2">
            Stockton, CA • (669) 296-6186 • satchidanand86@gmail.com
          </p>

          <div className="flex justify-center gap-6 mt-2 text-sm">
            <a
              href="https://www.linkedin.com/in/satchidanand22199/"
              target="_blank"
              className="text-blue-400 hover:underline"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/satchu22"
              target="_blank"
              className="text-blue-400 hover:underline"
            >
              GitHub
            </a>
          </div>
        </div>

        {/* SUMMARY */}
        <Section title="Professional Summary">
          Software Engineer with M.S. in Computer Science (GPA 3.44) and real production experience in Python, Java, SQL, JavaScript, Docker, and REST APIs. Reduced SQL report generation time by <b>30%</b> by optimizing queries. Built security-hardened applications validated with OWASP testing and shipped production-ready backend systems.
        </Section>

        {/* SKILLS */}
        <Section title="Technical Skills">
          <div className="space-y-1 text-sm">
            <p><b>Languages:</b> Python, Java, SQL, JavaScript, C#, Bash</p>
            <p><b>Backend & APIs:</b> Spring Boot, Flask, REST APIs, MySQL</p>
            <p><b>DevOps & Cloud:</b> Docker, Jenkins, CI/CD, AWS, Linux</p>
            <p><b>Security:</b> AES, OWASP, SQL Injection Prevention</p>
          </div>
        </Section>

        {/* EXPERIENCE */}
        <Section title="Professional Experience">

          <ResumeItem
            title="Backend Software Developer — Volunteer"
            right="Oct 2025 – Present"
            subtitle="Saayam For All (Remote)"
            points={[
              "Contributed to a production codebase by debugging real user issues and tracing execution paths.",
              "Improved frontend-backend integration through structured debugging and validation.",
              "Worked in Agile workflows with Git-based collaboration and peer code reviews.",
            ]}
          />

          <ResumeItem
            title="Software Engineering Intern"
            right="Nov 2022 – Jun 2023"
            subtitle="TSL Consulting Pvt Ltd • Pune, India"
            points={[
              "Reduced SQL report generation time by 30% through query optimization and indexing.",
              "Built backend modules for CRM systems used in real operations.",
              "Handled production incidents and deployed fixes under live business pressure.",
              "Automated reporting workflows saving 5+ hours per week.",
            ]}
          />

        </Section>

        {/* PROJECTS */}
        <Section title="Projects">

          <ResumeItem
            title="Secure Data Handling Web App"
            right="2024"
            subtitle="Python • Flask • MySQL • AES • OWASP"
            link="https://github.com/satchu22/mini-capstone-project"
            points={[
              "Built a secure web application using AES encryption and parameterized queries to prevent SQL injection.",
              "Performed OWASP ZAP penetration testing to identify real vulnerabilities.",
              "Patched security flaws and completed full build–attack–fix cycle.",
            ]}
          />

          <ResumeItem
            title="Zodiac Backend System"
            right="2026"
            subtitle="Spring Boot • MySQL • Docker"
            points={[
              "Designed a production-ready backend with REST APIs and database persistence.",
              "Implemented Docker Compose for consistent deployment across environments.",
            ]}
          />

          <ResumeItem
            title="VR Escape Room"
            right="2024"
            subtitle="Unity • C# • Oculus"
            link="https://github.com/satchu22/vr-escape-room"
            points={[
              "Developed immersive VR gameplay with interactive objects and environment design.",
              "Built spatial layout and player interaction systems in Unity.",
            ]}
          />

          <ResumeItem
            title="CI/CD Pipeline Automation"
            right="2024"
            subtitle="Jenkins • Docker • Git"
            link="https://github.com/satchu22/jenkins-automation"
            points={[
              "Built a Jenkins pipeline automating build, test, and deployment workflows.",
              "Integrated Docker for consistent environment management.",
            ]}
          />

        </Section>

        {/* EDUCATION */}
        <Section title="Education">

          <ResumeItem
            title="University of the Pacific"
            right="2023 – 2025"
            subtitle="M.S. Computer Science • GPA: 3.44"
          />

          <ResumeItem
            title="PVPIT, Pune"
            right="2017 – 2022"
            subtitle="B.E. Computer Science"
          />

        </Section>

        {/* CERTIFICATIONS */}
        <Section title="Certifications">

          <ResumeItem
            title="Agile Scrum Master"
            subtitle="Simplilearn • Credential ID: 9970847"
            right="Mar 2026"
            link="/certificates/scrum.pdf"
          />

          <ResumeItem
            title="Introduction to Kubernetes (LFS158)"
            subtitle="The Linux Foundation • Credential ID: pwb14napoa"
            right="Mar 2026"
            link="/certificates/kubernetes.pdf"
          />

          <ResumeItem
            title="Docker Foundations Professional Certificate"
            subtitle="LinkedIn Learning"
            right="2025"
            link="/certificates/docker.pdf"
          />

        </Section>

      </div>
    </main>
  );
}

/* COMPONENTS */

function Section({ title, children }: any) {
  return (
    <section className="mb-8">
      <h3 className="text-lg font-semibold border-b border-white/10 pb-1 mb-3">
        {title}
      </h3>
      {children}
    </section>
  );
}

function ResumeItem({ title, subtitle, right, points, link }: any) {
  return (
    <div className="mb-4">

      <div className="flex justify-between text-sm">
        <p className="font-semibold">
          {link ? (
            <a href={link} target="_blank" className="text-blue-400 hover:underline">
              {title}
            </a>
          ) : (
            title
          )}
        </p>
        <p className="text-gray-400 whitespace-nowrap">{right}</p>
      </div>

      <p className="text-sm text-gray-400 italic">{subtitle}</p>

      {points && (
        <ul className="list-disc ml-5 mt-2 text-sm space-y-1 text-gray-300">
          {points.map((p: string, i: number) => (
            <li key={i}>{p}</li>
          ))}
        </ul>
      )}

    </div>
  );
}