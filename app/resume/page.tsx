
import Link from "next/link";

export default function ResumePage() {
  const resumePath = "/resume/leny-flogio-resume.pdf";

  return (
    <main className="min-h-screen bg-[#FAF8F6] text-[#29272A]">
      {/* Navigation */}
      <header className="border-b border-[#EAE3E0]">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
          <Link href="/" className="font-serif text-2xl">
            leny<span className="text-[#B77C8B]">.</span>
          </Link>

          <div className="flex items-center gap-6 text-sm text-[#665B5E]">
            <Link href="/#about">About</Link>
            <Link href="/#projects">Projects</Link>
            <Link href="/resume" className="text-[#B77C8B]">
              Resume
            </Link>
            <Link href="/#contact">Contact</Link>
          </div>
        </nav>
      </header>

      {/* Resume introduction */}
      <section className="mx-auto max-w-7xl px-6 pb-8 pt-16">
        <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#B77C8B]">
          Professional background
        </p>

        <h1 className="mb-5 font-serif text-5xl md:text-6xl">
          My Resume<span className="text-[#B77C8B]">.</span>
        </h1>

        <p className="max-w-3xl leading-8 text-[#756C6D]">
          Explore my professional journey across cloud and platform
          engineering, AWS infrastructure, automation, enterprise
          integrations, and technical operations.
        </p>
      </section>

      {/* PDF toolbar */}
      <section className="mx-auto max-w-7xl px-6 pb-16">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-4 rounded-lg bg-[#754B59] px-6 py-5 text-white">
          <div>
            <p className="font-medium">Leny Flogio — Professional Resume</p>
            <p className="mt-1 text-xs text-[#F0DFE4]">
              Cloud & Platform Engineering · PDF
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href={resumePath}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/50 px-5 py-2 text-sm hover:bg-white/10"
            >
              View Full Screen ↗
            </a>

            <a
              href={resumePath}
              download="Leny-Flogio-Resume.pdf"
              className="rounded-full bg-white px-5 py-2 text-sm text-[#754B59] hover:bg-[#F5EDEF]"
            >
              Download Resume ↓
            </a>
          </div>
        </div>

        {/* Embedded PDF */}
        <div className="overflow-hidden rounded-lg border border-[#E7DEDA] bg-white shadow-lg">
          <iframe
            src={`${resumePath}#toolbar=1&navpanes=0&view=FitH`}
            title="Leny Flogio Resume"
            className="h-[1100px] w-full"
          />
        </div>
      </section>

      {/* Contact section */}
      <section className="border-t border-[#EAE3E0]">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 px-6 py-16 md:flex-row md:items-center">
          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.25em] text-[#B77C8B]">
              Let's connect
            </p>
            <h2 className="font-serif text-3xl">
              Have a project in mind?
            </h2>
            <p className="mt-3 text-[#756C6D]">
              I'd love to hear from you.
            </p>
          </div>

          <div className="space-y-3 text-sm">
            <p>
              <span className="text-[#B77C8B]">Email:</span>{" "}
              <a href="mailto:lenyflogio7@gmail.com">
                lenyflogio7@gmail.com
              </a>
            </p>
            <p>
              <span className="text-[#B77C8B]">Mobile:</span>{" "}
              <a href="tel:+639612242638">+63 961 224 2638</a>
            </p>
            <p>
              <span className="text-[#B77C8B]">LinkedIn:</span>{" "}
              <a
                href="https://linkedin.com/in/lsflogio"
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin.com/in/lsflogio ↗
              </a>
            </p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#EAE3E0] px-6 py-6 text-center text-xs text-[#8B8080]">
        © 2026 Leny Flogio. Built with intention.
      </footer>
    </main>
  );
}
