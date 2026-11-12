
import Image from "next/image";
import Link from "next/link";

const screenshots = [
  {
    number: "01",
    title: "Monitoring dashboard overview",
    description:
      "A consolidated view of application traffic, response latency, and memory usage.",
    image: "/images/projects/grafana-dashboard-overview.png",
    alt: "Grafana monitoring dashboard overview",
  },
  {
    number: "02",
    title: "HTTP request rate",
    description:
      "Tracks the rate of incoming application requests over time.",
    image: "/images/projects/grafana-http-request-rate.png",
    alt: "Grafana HTTP request rate panel",
  },
  {
    number: "03",
    title: "HTTP response latency (p95)",
    description:
      "Shows the 95th-percentile response time calculated from application request-duration metrics.",
    image: "/images/projects/grafana-http-response-latency.png",
    alt: "Grafana HTTP response latency panel",
  },
  {
    number: "04",
    title: "Application process memory",
    description:
      "Shows resident memory used by the application process.",
    image: "/images/projects/grafana-process-memory.png",
    alt: "Grafana application process memory panel",
  },
  {
    number: "05",
    title: "Node.js heap usage",
    description:
      "Shows memory used by the Node.js JavaScript heap.",
    image: "/images/projects/grafana-nodejs-heap.png",
    alt: "Grafana Node.js heap usage panel",
  },
];

export default function PlatformEngineeringDevOpsPage() {
  return (
    <main className="min-h-screen bg-[#FAF8F6] text-[#302B2B]">
      {/* Navigation */}
      <nav className="border-b border-[#EAE3DF]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-12">
          <Link
            href="/"
            className="font-serif text-2xl tracking-tight"
          >
            leny<span className="text-[#B77C8B]">.</span>
          </Link>

          <div className="flex items-center gap-6 text-sm text-[#817879]">
            <Link href="/#projects" className="transition-colors hover:text-[#302B2B]">
              Projects
            </Link>
            <Link href="/resume" className="transition-colors hover:text-[#302B2B]">
              Resume
            </Link>
          </div>
        </div>
      </nav>

      {/* Project introduction */}
      <section className="mx-auto max-w-7xl px-6 pb-20 pt-16 lg:px-12">
        <Link
          href="/#projects"
          className="text-sm text-[#A16F7B] transition-colors hover:text-[#302B2B]"
        >
          ← Back to projects
        </Link>

        <div className="mt-12 max-w-4xl">
          <p className="text-xs uppercase tracking-[0.22em] text-[#A16F7B]">
            Platform Engineering &amp; DevOps · Macquarie Group
          </p>

          <h1 className="mt-6 font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl">
            Supporting reliable platforms and operational workflows.
          </h1>

          <p className="mt-7 max-w-3xl text-base leading-8 text-[#817879]">
            My professional experience included supporting the maintenance
            and operational management of enterprise platform infrastructure
            and DevOps workflows. This page separates that experience from
            an independent technical implementation I developed to
            demonstrate related engineering concepts.
          </p>

          <div className="mt-8 flex flex-wrap gap-2">
            {["AWS", "Terraform", "Docker", "Kubernetes", "CI/CD", "Platform Operations"].map(
              (tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-[#F0E9E6] px-4 py-2 text-xs text-[#756A69]"
                >
                  {tag}
                </span>
              )
            )}
          </div>
        </div>
      </section>

      {/* Professional experience */}
      <section className="border-t border-[#EAE3DF] bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <p className="text-xs uppercase tracking-[0.22em] text-[#A16F7B]">
            01 · Professional experience
          </p>

          <h2 className="mt-6 font-serif text-4xl">
            Macquarie Group
          </h2>

          <h3 className="mt-3 text-lg text-[#817879]">
            Platform Engineering &amp; DevOps Operations
          </h3>

          <p className="mt-7 max-w-3xl leading-8 text-[#817879]">
            In this role, my contribution focused on maintenance, management,
            and operational support of existing enterprise platform
            capabilities. The responsibilities below describe the areas I
            supported; they do not imply that I independently owned or
            architected the overall platform.
          </p>

          <div className="mt-12 grid gap-10 sm:grid-cols-2">
            {[
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
            ].map((item) => (
              <article key={item.number} className="border-t border-[#EAE3DF] pt-6">
                <span className="text-xs tracking-widest text-[#B77C8B]">
                  {item.number}
                </span>
                <h3 className="mt-4 font-serif text-2xl">
                  {item.title}
                </h3>
                <p className="mt-4 leading-8 text-[#817879]">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Independent technical implementation */}
      <section className="bg-[#F5F0ED] py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <p className="text-xs uppercase tracking-[0.22em] text-[#A16F7B]">
            02 · Independent technical implementation
          </p>

          <h2 className="mt-6 font-serif text-3xl sm:text-4xl">
            DevOps Engineering Platform
          </h2>

          <p className="mt-7 max-w-3xl leading-8 text-[#817879]">
            Separately from my professional work, I developed a local,
            end-to-end technical implementation to strengthen and demonstrate
            my understanding of infrastructure as code, containers,
            Kubernetes, CI automation, and observability.
          </p>

          <p className="mt-5 max-w-3xl leading-8 text-[#817879]">
            The implementation uses Terraform to manage local Docker
            resources, Docker to package the Node.js application, a local
            kind cluster to run it on Kubernetes, and GitHub Actions to test
            the code and build and publish the container image to GitHub
            Container Registry. Prometheus collects application metrics,
            which are visualized in Grafana.
          </p>

          <p className="mt-5 max-w-3xl text-sm leading-7 text-[#9A8581]">
            This is a local learning and portfolio environment, not a
            production deployment and not a system built for or deployed at
            Macquarie Group.
          </p>

          <div className="mt-12 grid gap-10 sm:grid-cols-2">
            <div className="border-t border-[#DDD1CC] pt-6">
              <h3 className="font-serif text-xl">
                Infrastructure and delivery
              </h3>
              <p className="mt-4 leading-8 text-[#817879]">
                Terraform · Docker · Kubernetes · GitHub Actions · GHCR
              </p>
            </div>

            <div className="border-t border-[#DDD1CC] pt-6">
              <h3 className="font-serif text-xl">
                Monitoring and observability
              </h3>
              <p className="mt-4 leading-8 text-[#817879]">
                Prometheus · Grafana · Application metrics · HTTP monitoring
              </p>
            </div>
          </div>

          <a
            href="https://github.com/lnyfgio/leny-tech-portfolio/tree/main/labs/devops-engineering-platform"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex items-center gap-2 text-sm font-medium text-[#A16F7B] transition-colors hover:text-[#302B2B]"
          >
            View project source on GitHub ↗
          </a>
        </div>
      </section>

      {/* Observability screenshots */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <p className="text-xs uppercase tracking-[0.22em] text-[#A16F7B]">
            03 · Observability screenshots
          </p>

          <h2 className="mt-6 font-serif text-4xl">
            Monitoring the application
          </h2>

          <p className="mt-6 max-w-3xl leading-8 text-[#817879]">
            These screenshots come from the independent technical
            implementation. They show the application metrics collected by
            Prometheus and displayed in Grafana during testing.
          </p>

          <div className="mt-14 space-y-16">
            {screenshots.map((item) => (
              <article
                key={item.number}
                className="grid gap-6 lg:grid-cols-[0.7fr_1.3fr] lg:gap-12"
              >
                <div>
                  <span className="text-xs tracking-widest text-[#B77C8B]">
                    {item.number}
                  </span>
                  <h3 className="mt-4 font-serif text-2xl">
                    {item.title}
                  </h3>
                  <p className="mt-4 leading-8 text-[#817879]">
                    {item.description}
                  </p>
                </div>

                <div className="overflow-hidden rounded-xl border border-[#EAE3DF] bg-[#F5F0ED]">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    width={1600}
                    height={900}
                    className="h-auto w-full"
                  />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#EAE3DF] py-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 sm:flex-row sm:items-center sm:justify-between lg:px-12">
          <p className="text-sm text-[#817879]">
            Leny Flogio · Cloud · Platform · Engineering
          </p>

          <Link
            href="/#projects"
            className="text-sm text-[#A16F7B] transition-colors hover:text-[#302B2B]"
          >
            Back to portfolio ↑
          </Link>
        </div>
      </footer>
    </main>
  );
}
