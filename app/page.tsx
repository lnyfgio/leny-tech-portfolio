
import Image from "next/image";

const expertise = [
  {
    number: "01",
    title: "Cloud & Infrastructure",
    description:
      "Working with AWS infrastructure, cloud services, infrastructure automation, and resource management.",
    tags: ["AWS", "Terraform", "Cloud Infrastructure"],
  },
  {
    number: "02",
    title: "Platform Engineering",
    description:
      "Supporting reliable platform operations through infrastructure as code, CI/CD practices, and developer experience improvements.",
    tags: ["Terraform", "CI/CD", "Developer Experience"],
  },
  {
    number: "03",
    title: "Observability & Operations",
    description:
      "Improving operational visibility through monitoring, logging, alerting, production support, and technical documentation.",
    tags: ["Sumo Logic", "CloudWatch", "Incident Support"],
  },
  {
    number: "04",
    title: "Enterprise Integrations",
    description:
      "Contributing to enterprise technology solutions involving identity platforms, service management, and contact center integrations.",
    tags: ["Amazon Connect", "ServiceNow", "IAM"],
  },
];

const projects = [
  {
    number: "01",
    status: "Professional Experience · Explore Technical Implementation →",
    category: "PLATFORM ENGINEERING & DEVOPS",
    organization: "Macquarie Group",
    title: "Platform Engineering & DevOps Operations",
    description:
      "Supported the maintenance and operational management of enterprise platform infrastructure and DevOps workflows, including infrastructure automation, deployment processes, containerized environments, and operational support.",
    technologies: ["AWS", "Terraform", "Docker", "Kubernetes", "CI/CD"],
  },
  {
    number: "02",
    status: "Professional Experience",
    category: "PLATFORM ENGINEERING",
    organization: "Macquarie Group",
    title: "ISV Developer Experience",
    description:
      "Contributed to improving developer onboarding through clearer engineering processes, technical standards, and documentation to help teams understand platform workflows.",
    technologies: ["Terraform", "CI/CD", "Documentation"],
  },
  {
    number: "03",
    status: "Professional Experience",
    category: "OBSERVABILITY & OPERATIONS",
    organization: "Macquarie Group",
    title: "ISAM – High Junction Error Rate Monitoring",
    description:
      "Worked on identifying high junction error rates to help reduce noisy alerts through Sumo Logic lookup tables, log search queries, and alerting improvements.",
    technologies: ["ISAM", "Sumo Logic", "Lookup Tables", "Log Monitoring"],
  },
  {
    number: "04",
    status: "Professional Experience",
    category: "CLOUD ENGINEERING",
    organization: "UnionDigital Bank",
    title: "AWS Infrastructure & Cost Optimization",
    description:
      "Contributed to AWS infrastructure improvements, cost optimization, and backup and lifecycle management across cloud services. Implemented Amazon CloudWatch monitoring to track service health, monitor resource utilization, and improve visibility into infrastructure performance.",
    technologies: [
      "AWS",
      "S3",
      "EFS",
      "RDS",
      "DynamoDB",
      "EMR",
      "CloudWatch",
    ],
  },
  {
    number: "05",
    status: "Professional Experience",
    category: "ENTERPRISE INTEGRATION",
    organization: "DXC Technology",
    title: "Amazon Connect & ServiceNow Integration",
    description:
      "Participated in an initiative involving Amazon Connect IVR integration with ServiceNow and Computer Telephony Integration (CTI).",
    technologies: ["Amazon Connect", "ServiceNow", "CTI"],
  },
];

function FooterIcon({
  children,
  label,
  href,
}: {
  children: React.ReactNode;
  label: string;
  href: string;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      title={label}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      className="flex h-10 w-10 items-center justify-center rounded-full text-[#754B59] transition hover:-translate-y-1 hover:bg-[#F0E4E5] hover:text-[#B77C8B]"
    >
      {children}
    </a>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#FAF8F6] text-[#29272A]">
      {/* Navigation */}
      <header className="sticky top-0 z-50 border-b border-[#EAE3DF] bg-[#FAF8F6]/95 backdrop-blur">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-12">
          <a
            href="#home"
            className="font-serif text-2xl tracking-wide text-[#754B59]"
          >
            leny<span className="text-[#B77C8B]">.</span>
          </a>

          <div className="hidden items-center gap-8 text-sm text-[#625B5C] md:flex">
            <a href="#about" className="transition hover:text-[#B77C8B]">
              About
            </a>
            <a href="#expertise" className="transition hover:text-[#B77C8B]">
              Expertise
            </a>
            <a href="#projects" className="transition hover:text-[#B77C8B]">
              Projects
            </a>
            <a href="#experience" className="transition hover:text-[#B77C8B]">
              Experience
            </a>
            <a href="/resume" className="transition hover:text-[#B77C8B]">
              Resume
            </a>
            <a
              href="#contact"
              className="rounded-full border border-[#B77C8B] px-5 py-2.5 text-[#754B59] transition hover:bg-[#754B59] hover:text-white"
            >
              Let's connect
            </a>
          </div>

          <a href="/resume" className="text-sm text-[#754B59] md:hidden">
            Resume ↗
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section
        id="home"
        className="mx-auto grid max-w-7xl items-center gap-14 px-6 py-20 md:grid-cols-2 md:py-28 lg:px-12"
      >
        <div>
          <p className="mb-7 text-xs uppercase tracking-[0.25em] text-[#A16F7B]">
            Cloud · Platform · Engineering
          </p>

          <h1 className="max-w-2xl font-serif text-5xl leading-[1.12] tracking-tight sm:text-6xl lg:text-7xl">
            Engineering reliable systems, with{" "}
            <span className="italic text-[#B77C8B]">intention.</span>
          </h1>

          <p className="mt-8 max-w-xl text-base leading-8 text-[#817879]">
            I’m a technology professional with experience across cloud
            infrastructure, platform engineering, automation, observability,
            and enterprise integrations. I enjoy making complex systems
            easier to operate, understand, and improve.
          </p>

          <p className="mt-3 text-sm text-[#A16F7B]">
            Thoughtful by design. Engineered to work.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-full bg-[#754B59] px-7 py-4 text-sm text-white transition hover:bg-[#5E3B47]"
            >
              Explore my work ↗
            </a>
            <a
              href="/resume"
              className="rounded-full border border-[#D8C9C7] px-7 py-4 text-sm text-[#754B59] transition hover:border-[#754B59]"
            >
              View my resume
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md">
          <div className="absolute -right-5 -top-5 h-full w-full rounded-[2rem] border border-[#DCC8CC]" />

          <div className="relative overflow-hidden rounded-[2rem] bg-[#E9D5D9]">
            <Image
              src="/images/leny-portrait.png"
              alt="Portrait of Leny"
              width={900}
              height={1100}
              priority
              className="aspect-[4/5] w-full object-cover grayscale-[20%]"
            />

            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#29272A]/75 to-transparent p-8 pt-24">
              <p className="font-serif text-2xl text-white">
                Thoughtful by design.
              </p>
              <p className="mt-2 text-xs tracking-widest text-white/80">
                CLOUD · PLATFORM · TECHNOLOGY
              </p>
            </div>
          </div>

          <div className="absolute -top-6 -left-6 rounded-xl border border-[#EAE3DF] bg-white px-5 py-4 shadow-sm">
            <p className="text-xs uppercase tracking-widest text-[#A16F7B]">
              Working with
            </p>
            <p className="mt-1 text-sm font-medium text-[#754B59]">
              AWS · Terraform
            </p>
          </div>
        </div>
      </section>

      {/* Technology Strip */}
      <section className="border-y border-[#EAE3DF] bg-[#F5F0ED]">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-12 gap-y-5 px-6 py-8 text-xs uppercase tracking-[0.16em] text-[#817879] lg:px-12">
          <span>AWS</span>
          <span>Terraform</span>
          <span>CI/CD</span>
          <span>Observability</span>
          <span>Enterprise Integration</span>
        </div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto max-w-7xl px-6 py-28 lg:px-12">
        <div className="grid gap-12 md:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-[#A16F7B]">
              01 / About
            </p>
            <h2 className="mt-5 font-serif text-4xl leading-tight sm:text-5xl">
              Technology with purpose.
            </h2>
          </div>

          <div className="max-w-3xl">
            <p className="text-lg leading-9 text-[#625B5C]">
              My experience spans cloud and platform engineering, enterprise
              technology, and infrastructure operations. I have worked with
              distributed teams to support technical initiatives, improve
              processes, and contribute to reliable technology solutions.
            </p>

            <p className="mt-6 leading-8 text-[#817879]">
              Beyond implementing technology, I value clear documentation,
              collaboration, continuous learning, and understanding how
              engineering decisions affect the people and teams who use the
              systems we build.
            </p>

            <p className="mt-6 leading-8 text-[#817879]">
              This portfolio brings together selected areas of my experience,
              technical interests, and projects as I continue growing across
              the technology landscape.
            </p>
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section id="expertise" className="bg-[#F5F0ED] py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="mb-14">
            <p className="text-xs uppercase tracking-[0.22em] text-[#A16F7B]">
              02 / What I work with
            </p>
            <h2 className="mt-5 font-serif text-4xl sm:text-5xl">
              Areas of expertise<span className="text-[#B77C8B]">.</span>
            </h2>
            <p className="mt-5 max-w-2xl leading-8 text-[#817879]">
              A combination of engineering practices, technologies, and
              operational experience.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {expertise.map((item) => (
              <article
                key={item.number}
                className="rounded-2xl border border-[#E5DAD5] bg-[#FAF8F6] p-8 transition hover:-translate-y-1 hover:shadow-md"
              >
                <p className="text-xs tracking-widest text-[#B77C8B]">
                  {item.number}
                </p>
                <h3 className="mt-6 font-serif text-2xl">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-[#817879]">
                  {item.description}
                </p>
                <div className="mt-7 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-[#E5DAD5] px-3 py-1.5 text-xs text-[#754B59]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="mx-auto max-w-7xl px-6 py-28 lg:px-12">
        <div className="mb-14">
          <p className="text-xs uppercase tracking-[0.22em] text-[#A16F7B]">
            03 / Selected work
          </p>
          <h2 className="mt-5 font-serif text-4xl sm:text-5xl">
            Projects & contributions<span className="text-[#B77C8B]">.</span>
          </h2>
          <p className="mt-5 max-w-2xl leading-8 text-[#817879]">
            Selected technical initiatives and contributions across cloud
            infrastructure, platform engineering, and enterprise integrations.
          </p>
        </div>

        <div className="space-y-5">
          {projects.map((project) => (
            <article
              key={project.number}
              className="grid gap-8 rounded-2xl border border-[#EAE3DF] p-8 transition hover:border-[#CBAAB2] md:grid-cols-[100px_1fr] md:p-10"
            >
              <div className="font-serif text-3xl text-[#CBAAB2]">
                {project.number}
              </div>

              <div>
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <p className="text-xs tracking-[0.18em] text-[#A16F7B]">
                    {project.category}
                  </p>
                  {project.number === "01" ? (
                    <a
                      href="/projects/platform-engineering-devops"
                      className="rounded-full bg-[#E5F1E8] px-3 py-1 text-xs font-medium text-[#34734B] transition-colors hover:bg-[#D5E9DA]"
                    >
                      ● Professional Experience · Explore Technical Implementation →
                    </a>
                  ) : (
                    <span className="rounded-full bg-[#EAEFF5] px-3 py-1 text-xs font-medium text-[#496985]">
                      ● Professional Experience
                    </span>
                  )}
                </div>
                <p className="mt-2 text-sm font-medium text-[#A16F7B]">
                  {project.organization}
                </p>
                <h3 className="mt-3 font-serif text-2xl sm:text-3xl">
                  {project.title}
                </h3>
                <p className="mt-4 max-w-3xl text-sm leading-8 text-[#817879]">
                  {project.description}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full bg-[#F5F0ED] px-3 py-1.5 text-xs text-[#754B59]"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="bg-[#F5F0ED] py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <p className="text-xs uppercase tracking-[0.22em] text-[#A16F7B]">
            04 / Professional journey
          </p>

          <h2 className="mt-5 font-serif text-4xl sm:text-5xl">
            Experience<span className="text-[#B77C8B]">.</span>
          </h2>

          <div className="mt-14 max-w-4xl border-l border-[#CBAAB2] pl-8">
            <div className="relative">
              <span className="absolute -left-[2.35rem] top-1 h-3 w-3 rounded-full bg-[#B77C8B]" />

              <p className="text-xs uppercase tracking-widest text-[#A16F7B]">
                October 2024 – April 2026
              </p>

              <h3 className="mt-4 font-serif text-2xl">Macquarie Group</h3>

              <p className="mt-2 text-sm text-[#754B59]">
                Platform Engineering · Identity Technology
              </p>

              <p className="mt-5 max-w-3xl text-sm leading-8 text-[#817879]">
                Contributed to platform engineering initiatives within the
                Customer Identity, Access & API Management environment,
                supporting cloud infrastructure, Terraform, CI/CD pipelines,
                observability, production operations, and developer experience.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {[
                  "AWS",
                  "Terraform",
                  "Sumo Logic",
                  "CloudWatch",
                  "CI/CD",
                  "Identity & Access",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-[#E2D5D1] bg-[#FAF8F6] px-3 py-1.5 text-xs text-[#754B59]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-12">
            <a
              href="/resume"
              className="inline-flex items-center gap-2 text-sm text-[#754B59] transition hover:text-[#B77C8B]"
            >
              View full professional experience <span>↗</span>
            </a>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-7xl px-6 py-28 lg:px-12">
        <div className="mb-14 max-w-2xl">
          <p className="text-xs uppercase tracking-[0.22em] text-[#A16F7B]">
            05 / Get in touch
          </p>
          <h2 className="mt-5 font-serif text-4xl sm:text-5xl">
            Let's connect<span className="text-[#B77C8B]">.</span>
          </h2>
          <p className="mt-5 leading-8 text-[#817879]">
            Have an opportunity, project, or collaboration in mind? I'd love
            to hear from you. Feel free to reach out.
          </p>
        </div>

        <div className="grid gap-12 md:grid-cols-[0.8fr_1.2fr]">
          {/* Contact Information */}
          <div className="rounded-2xl bg-[#754B59] p-8 text-white sm:p-10">
            <h3 className="font-serif text-2xl">Contact information</h3>

            <p className="mt-4 text-sm leading-7 text-[#E9DCE0]">
              Let's start a conversation. You can reach me through any of the
              channels below.
            </p>

            <div className="mt-10 space-y-7">
              <div>
                <p className="text-xs uppercase tracking-widest text-[#E7C9D0]">
                  Email
                </p>
                <a
                  href="mailto:lenyflogio7@gmail.com"
                  className="mt-2 inline-block text-sm transition hover:text-[#E7C9D0]"
                >
                  lenyflogio7@gmail.com
                </a>
              </div>

              <div>
                <p className="text-xs uppercase tracking-widest text-[#E7C9D0]">
                  Mobile
                </p>
                <a
                  href="tel:+639612242638"
                  className="mt-2 inline-block text-sm transition hover:text-[#E7C9D0]"
                >
                  +63 961 224 2638
                </a>
              </div>

              <div>
                <p className="text-xs uppercase tracking-widest text-[#E7C9D0]">
                  GitHub
                </p>
                <a
                  href="https://github.com/lnyfgio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-block text-sm transition hover:text-[#E7C9D0]"
                >
                  github.com/lnyfgio ↗
                </a>
              </div>

              <div>
                <p className="text-xs uppercase tracking-widest text-[#E7C9D0]">
                  LinkedIn
                </p>
                <a
                  href="https://www.linkedin.com/in/lsflogio/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-block text-sm transition hover:text-[#E7C9D0]"
                >
                  linkedin.com/in/lsflogio ↗
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form
            action="https://formspree.io/f/mgakwloo"
            method="POST"
            className="space-y-6"
          >
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-sm text-[#625B5C]"
              >
                Your name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Enter your name"
                className="w-full rounded-lg border border-[#E2D8D3] bg-white px-4 py-3 text-sm outline-none transition focus:border-[#B77C8B]"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm text-[#625B5C]"
              >
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="you@example.com"
                className="w-full rounded-lg border border-[#E2D8D3] bg-white px-4 py-3 text-sm outline-none transition focus:border-[#B77C8B]"
              />
            </div>

            <div>
              <label
                htmlFor="subject"
                className="mb-2 block text-sm text-[#625B5C]"
              >
                Subject
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                required
                placeholder="What would you like to discuss?"
                className="w-full rounded-lg border border-[#E2D8D3] bg-white px-4 py-3 text-sm outline-none transition focus:border-[#B77C8B]"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-sm text-[#625B5C]"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                placeholder="Write your message here..."
                className="w-full resize-y rounded-lg border border-[#E2D8D3] bg-white px-4 py-3 text-sm outline-none transition focus:border-[#B77C8B]"
              />
            </div>

            <input
              type="text"
              name="_gotcha"
              className="hidden"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
            />

            <button
              type="submit"
              className="rounded-full bg-[#754B59] px-8 py-4 text-sm text-white transition hover:bg-[#5E3B47]"
            >
              Send Message ↗
            </button>

            <p className="text-xs text-[#8A8080]">
              Your message will be submitted through Formspree.
            </p>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#EAE3DF]">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-8 sm:flex-row lg:px-12">
          <div className="text-center sm:text-left">
            <p className="text-xs text-[#817879]">
              © 2026 Leny. Built with intention.
            </p>
          </div>

          <div className="flex items-center gap-2">
            {/* Resume */}
            <FooterIcon label="View resume" href="/resume">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="h-5 w-5">
                <path d="M7 3h7l5 5v13H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z" />
                <path d="M14 3v6h5M9 13h6M9 17h6" />
              </svg>
            </FooterIcon>

            {/* Email */}
            <FooterIcon label="Send email" href="mailto:lenyflogio7@gmail.com">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="h-5 w-5">
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="m3 7 9 6 9-6" />
              </svg>
            </FooterIcon>

            {/* Phone */}
            <FooterIcon label="Call me" href="tel:+639612242638">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="h-5 w-5">
                <path d="M7 3h3l2 5-2.5 1.5a14 14 0 0 0 5 5L16 12l5 2v3a2 2 0 0 1-2 2C10 19 5 14 5 5a2 2 0 0 1 2-2Z" />
              </svg>
            </FooterIcon>

            {/* GitHub */}
            <FooterIcon label="GitHub profile" href="https://github.com/lnyfgio">
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.55.1.76-.24.76-.54v-2.08c-3.1.68-3.76-1.32-3.76-1.32-.5-1.3-1.24-1.65-1.24-1.65-1.02-.7.08-.69.08-.69 1.13.08 1.73 1.16 1.73 1.16 1 .1.77 2.1 3.18 1.6.1-.73.4-1.23.72-1.52-2.48-.28-5.09-1.24-5.09-5.51 0-1.22.44-2.22 1.16-3-.12-.29-.5-1.45.11-3.02 0 0 .95-.3 3.05 1.15a10.6 10.6 0 0 1 5.55 0c2.1-1.45 3.04-1.15 3.04-1.15.61 1.57.23 2.73.11 3.02.72.78 1.16 1.78 1.16 3 0 4.28-2.62 5.23-5.11 5.5.4.35.76 1.03.76 2.08v3.08c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z" />
              </svg>
            </FooterIcon>

            {/* LinkedIn */}
            <FooterIcon label="LinkedIn profile" href="https://www.linkedin.com/in/lsflogio/">
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                <path d="M5.2 3a2.2 2.2 0 1 0 0 4.4 2.2 2.2 0 0 0 0-4.4ZM3.3 9h3.8v12H3.3V9Zm6.1 0H13v1.6h.05A4.1 4.1 0 0 1 16.7 8.7c3.9 0 4.6 2.5 4.6 5.7V21h-3.8v-5.8c0-1.4 0-3.3-2-3.3s-2.3 1.5-2.3 3.2V21H9.4V9Z" />
              </svg>
            </FooterIcon>
          </div>
        </div>
      </footer>
    </main>
  );
}