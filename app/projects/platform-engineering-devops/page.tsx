import Image from "next/image";

const responsibilities = [
  {
    number: "01",
    title: "Platform operations",
    description:
      "Supported the maintenance and day-to-day operational management of enterprise platform environments, helping keep platform services and workflows running reliably.",
  },
  {
    number: "02",
    title: "Infrastructure and deployment workflows",
    description:
      "Worked with infrastructure automation and deployment processes, supporting established engineering practices across platform environments.",
  },
  {
    number: "03",
    title: "Containerized environments",
    description:
      "Supported platform operations involving containerized environments and collaborated with engineers across distributed teams.",
  },
  {
    number: "04",
    title: "Operational support and documentation",
    description:
      "Contributed to operational support and technical documentation to make platform processes easier to understand, maintain, and follow.",
  },
];

const technologies = [
  "AWS",
  "Terraform",
  "Docker",
  "Kubernetes",
  "CI/CD",
  "Platform Operations",
];

const dashboardImages = [
  {
    src: "/images/projects/grafana-dashboard-overview.png",
    title: "Monitoring dashboard overview",
    description:
      "A consolidated view of application traffic, response latency, and memory usage.",
  },
  {
    src: "/images/projects/grafana-http-request-rate.png",
    title: "HTTP request rate",
    description:
      "Tracks the rate of incoming application requests over time.",
  },
  {
    src: "/images/projects/grafana-http-response-latency.png",
    title: "HTTP response latency (p95)",
    description:
      "Shows the 95th-percentile response time calculated from application request-duration metrics.",
  },
  {
    src: "/images/projects/grafana-process-memory.png",
    title: "Application process memory",
    description:
      "Shows resident memory used by the application process.",
  },
  {
    src: "/images/projects/grafana-nodejs-heap.png",
    title: "Node.js heap usage",
    description:
      "Shows memory used by the Node.js JavaScript heap.",
  },
];

export default function PlatformEngineeringDevOpsProject() {
  return (
    <main className="min-h-screen bg-[#FAF8F6] text-[#29272A]">
      <header className="sticky top-0 z-50 border-b border-[#EAE3DF] bg-[#FAF8F6]/95 backdrop-blur">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-12">
          <a
            href="/"
            className="font-serif text-2xl tracking-wide text-[#754B59]"
          >
            leny<span className="text-[#B77C8B]">.</span>
          </a>
          <div className="flex items-center gap-6 text-sm text-[#625B5C]">
            <a href="/#projects" className="transition hover:text-[#B77C8B]">
              Projects
            </a>
            <a href="/resume" className="transition hover:text-[#B77C8B]">
              Resume
            </a>
          </div>
        </nav>
      </header>

      <section className="mx-auto max-w-5xl px-6 pb-16 pt-20 lg:px-12 lg:pt-28">
        <a
          href="/#projects"
          className="text-sm text-[#A16F7B] transition hover:text-[#754B59]"
        >
          ← Back to projects
        </a>

        <p className="mt-12 text-xs uppercase tracking-[0.25em] text-[#A16F7B]">
          Platform Engineering & DevOps · Macquarie Group
        </p>
        <h1 className="mt-5 max-w-4xl font-serif text-4xl leading-tight tracking-tight sm:text-5xl lg:text-6xl">
          Supporting reliable platforms and operational workflows.
        </h1>
        <p className="mt-7 max-w-3xl text-base leading-8 text-[#817879]">
          My professional experience included supporting the maintenance and
          operational management of enterprise platform infrastructure and
          DevOps workflows. This page separates that experience from an
          independent hands-on lab I built to demonstrate related engineering
          concepts.
        </p>

        <div className="mt-10 flex flex-wrap gap-2">
          {technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-full border border-[#E3D6D3] bg-white/70 px-4 py-2 text-xs text-[#754B59]"
            >
              {technology}
            </span>
          ))}
        </div>
      </section>

      <section className="border-y border-[#EAE3DF] bg-white/55">
        <div className="mx-auto max-w-5xl px-6 py-16 lg:px-12">
          <p className="text-xs uppercase tracking-[0.25em] text-[#A16F7B]">
            01 · Professional experience
          </p>
          <div className="mt-4 flex flex-wrap items-baseline justify-between gap-3">
            <h2 className="font-serif text-3xl text-[#29272A] sm:text-4xl">
              Macquarie Group
            </h2>
            <span className="text-sm text-[#817879]">
              Platform Engineering & DevOps Operations
            </span>
          </div>
          <p className="mt-6 max-w-3xl text-sm leading-7 text-[#817879]">
            In this role, my contribution focused on maintenance, management,
            and operational support of existing enterprise platform
            capabilities. The responsibilities below describe the areas I
            supported; they do not imply that I independently owned or
            architected the overall platform.
          </p>

          <div className="mt-10 grid gap-7 sm:grid-cols-2">
            {responsibilities.map((item) => (
              <article
                key={item.number}
                className="border-t border-[#DCC8CC] pt-5"
              >
                <p className="text-xs tracking-[0.2em] text-[#B77C8B]">
                  {item.number}
                </p>
                <h3 className="mt-3 font-serif text-xl">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#817879]">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16 lg:px-12">
        <p className="text-xs uppercase tracking-[0.25em] text-[#A16F7B]">
          02 · Independent technical demonstration
        </p>
        <h2 className="mt-4 max-w-3xl font-serif text-3xl leading-tight sm:text-4xl">
          DevOps Engineering Platform — hands-on lab
        </h2>
        <div className="mt-6 max-w-3xl space-y-4 text-sm leading-7 text-[#817879]">
          <p>
            Separately from my professional work, I built a local, end-to-end
            demonstration to strengthen and showcase my hands-on understanding
            of infrastructure as code, containers, Kubernetes, CI automation,
            and observability.
          </p>
          <p>
            The lab uses Terraform to manage local Docker resources, Docker to
            package the Node.js application, a local kind cluster to run it on
            Kubernetes, and GitHub Actions to test the code and build and
            publish the container image to GitHub Container Registry.
            Prometheus collects application metrics, which are visualized in
            Grafana.
          </p>
          <p>
            This is a local learning and portfolio environment, not a
            production deployment and not a system built for or deployed at
            Macquarie Group.
          </p>
        </div>

        <div className="mt-10 rounded-2xl border border-[#EAE3DF] bg-white p-6 sm:p-8">
          <h3 className="font-serif text-2xl">What the technical implementation demonstrates</h3>
          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            <div>
              <p className="text-sm font-medium text-[#754B59]">
                Infrastructure and delivery
              </p>
              <p className="mt-2 text-sm leading-7 text-[#817879]">
                Terraform · Docker · Kubernetes · GitHub Actions · GHCR
              </p>
            </div>
            <div>
              <p className="text-sm font-medium text-[#754B59]">
                Monitoring and observability
              </p>
              <p className="mt-2 text-sm leading-7 text-[#817879]">
                Prometheus · Grafana · Application metrics · HTTP monitoring
              </p>
            </div>
          </div>
          <a
            href="https://github.com/lnyfgio/leny-tech-portfolio/tree/main/labs/devops-engineering-platform"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex rounded-full bg-[#754B59] px-6 py-3 text-sm text-white transition hover:bg-[#5E3B47]"
          >
            View project source on GitHub ↗
          </a>
        </div>
      </section>

      <section className="border-y border-[#EAE3DF] bg-white/55">
        <div className="mx-auto max-w-5xl px-6 py-16 lg:px-12">
          <p className="text-xs uppercase tracking-[0.25em] text-[#A16F7B]">
            03 · Observability screenshots
          </p>
          <h2 className="mt-4 font-serif text-3xl sm:text-4xl">
            Monitoring the application
          </h2>
          <p className="mt-5 max-w-3xl text-sm leading-7 text-[#817879]">
            These screenshots come from the independent local lab. They show
            the application metrics collected by Prometheus and displayed in
            Grafana during testing.
          </p>

          <div className="mt-10 grid gap-8">
            {dashboardImages.map((item, index) => (
              <figure
                key={item.src}
                className="overflow-hidden rounded-2xl border border-[#EAE3DF] bg-white p-3 sm:p-5"
              >
                <div className="overflow-hidden rounded-xl bg-[#F2EFED]">
                  <Image
                    src={item.src}
                    alt={item.title}
                    width={1600}
                    height={900}
                    className="h-auto w-full"
                  />
                </div>
                <figcaption className="px-2 pb-2 pt-5">
                  <p className="text-xs tracking-[0.2em] text-[#B77C8B]">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-2 font-serif text-xl">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[#817879]">
                    {item.description}
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <footer className="mx-auto flex max-w-5xl flex-col gap-4 px-6 py-10 text-sm text-[#817879] sm:flex-row sm:items-center sm:justify-between lg:px-12">
        <p>Leny Flogio · Cloud · Platform · Engineering</p>
        <a href="/#projects" className="text-[#754B59] hover:text-[#B77C8B]">
          Back to portfolio ↑
        </a>
      </footer>
    </main>
  );
}
