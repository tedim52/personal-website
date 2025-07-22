import { Github, Calendar, MapPin, Hash } from "lucide-react"
import { Button } from "@/components/ui/button"
import { XIcon } from "@/components/x-icon"

// Tag component for project status
const ProjectTag = ({ text, variant = "default" }) => {
  const getTagStyles = () => {
    switch (variant) {
      case "coming-soon":
        // Darker, more noticeable red for "coming soon" tags
        return "bg-rose-100 text-rose-800 border-rose-300"
      case "in-progress":
        return "bg-primary/20 text-primary border-primary/30"
      case "completed":
        return "bg-emerald-100 text-emerald-700 border-emerald-200"
      default:
        return "bg-muted text-muted-foreground border-muted/50"
    }
  }

  return (
    <span
      className={`text-xs px-2 py-0.5 rounded-full border ${getTagStyles()} font-medium ml-2 inline-flex items-center`}
    >
      {text}
    </span>
  )
}

export default function Home() {
  // Replace these with your actual links
  const calendlyLink = "https://calendly.com/tedi-m52/30min?back=1&month=2025-03"
  const sponsorLink = "https://github.com/sponsors/tedim52"

  // Social media links - replace with your actual accounts
  const githubLink = "https://github.com/tedim52"
  const xLink = "https://twitter.com/drosmitiku"
  const warpcastLink = "https://warpcast.com/tedimitiku" // Replace with your actual Warpcast username

  return (
    <main className="min-h-screen">
      <div className="max-w-3xl mx-auto px-4 py-12 space-y-12 animate-fade-in">
        {/* Profile Section with About Text */}
        <section className="space-y-8">
          <div className="flex flex-col md:flex-row items-start justify-between gap-8">
            {/* Name and Title - On the left */}
            <div className="space-y-4 text-left">
              <h1 className="text-4xl font-bold font-display text-foreground">tedi mitiku</h1>
              <p className="text-xl text-foreground/80">open source software engineer</p>
            </div>

            {/* Links and Location - Now on the right */}
            <div className="space-y-4 text-right">
              {/* Icons with actual links - Email removed */}
              <div className="flex gap-5 justify-end">
                <a
                  href={githubLink}
                  className="text-primary hover:text-primary/80 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div
                    className="w-5 h-5 rounded-sm flex items-center justify-center"
                    style={{ backgroundColor: "#251400" }}
                  >
                    <Github className="h-4 w-4 text-background" />
                  </div>
                  <span className="sr-only">GitHub</span>
                </a>
                <a
                  href={xLink}
                  className="text-primary hover:text-primary/80 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div
                    className="w-5 h-5 rounded-sm flex items-center justify-center"
                    style={{ backgroundColor: "#251400" }}
                  >
                    <XIcon />
                  </div>
                  <span className="sr-only">X.com</span>
                </a>
                <a
                  href={warpcastLink}
                  className="text-primary hover:text-primary/80 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div
                    className="w-5 h-5 rounded-sm flex items-center justify-center"
                    style={{ backgroundColor: "#251400" }}
                  >
                    <Hash className="h-4 w-4 text-background" />
                  </div>
                  <span className="sr-only">Warpcast</span>
                </a>
              </div>

              {/* Location - More discreet and lowercase */}
              <div className="flex items-center text-foreground/50 text-sm justify-end">
                <MapPin className="h-3 w-3 text-primary/70 mr-1" />
                <span>brooklyn, ny</span>
              </div>
            </div>
          </div>

          {/* About Text */}
          <p className="text-foreground/70">
            maintaining open source{" "}
            <a
              href="https://oss-kurtosis.vercel.app"
              className="text-primary hover:text-primary/80 transition-colors underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Kurtosis
            </a>
            , a container orchestration tool used by blockchain ecosystems for dev + testing. life is simple - when I'm
            not coding, I'm drinking coffee and reading or drinking coffee and running.
          </p>
        </section>

        {/* Past and Ongoing Works Section - Simplified List */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold font-display text-foreground">Past and Ongoing Work</h2>
          <div className="w-20 h-1 bg-primary rounded-full"></div>
          <div className="space-y-8">
            {projects.map((project, index) => (
              <div key={index} className="space-y-2">
                <h3 className="font-display text-xl font-semibold flex items-center flex-wrap">
                  {/* Render the title content which can contain embedded links */}
                  {project.titleContent}

                  {/* Render tag if present */}
                  {project.tag && <ProjectTag text={project.tag.text} variant={project.tag.variant} />}
                </h3>
                {project.description && <p className="text-foreground/70">{project.description}</p>}
              </div>
            ))}
          </div>
        </section>

        {/* Two-column layout for Calendly and Sponsorship - Moved closer to middle section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Calendly Section */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold font-display text-foreground">Let's Chat?</h2>
            <div className="w-16 h-1 bg-primary rounded-full"></div>
            <p className="text-foreground/70">
              Interesting in building with, on, or for, Kurtosis? Just wanna chat open source or connect?
            </p>
            <div className="mt-6">
              <a href={calendlyLink} target="_blank" rel="noopener noreferrer" className="inline-block">
                <Button className="bg-primary hover:bg-primary/90 rounded-full px-6">
                  <Calendar className="mr-2 h-5 w-5" />
                  Book a Time
                </Button>
              </a>
            </div>
          </section>

          {/* Sponsorship Section */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold font-display text-foreground">Support Open Source</h2>
            <div className="w-16 h-1 bg-primary rounded-full"></div>
            <p className="text-foreground/70">
              Are you enjoying using Kurtosis? Consider sponsoring or dropping me a coffee : )
            </p>
            <div className="mt-6">
              <a href={sponsorLink} target="_blank" rel="noopener noreferrer" className="inline-block">
                <Button className="bg-primary hover:bg-primary/90 rounded-full px-6">
                  <Github className="mr-2 h-5 w-5" />
                  Sponsor
                </Button>
              </a>
            </div>
          </section>
        </div>

        {/* Simplified Sponsors Section as a bulleted list */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold font-display text-foreground">Sponsors</h2>
          <div className="w-20 h-1 bg-primary rounded-full"></div>

          {/* Add this new text section */}
          <p className="text-foreground/70">
            A heartfelt thank you to the orgs that sponsor my open source work on Kurtosis ❤️
          </p>

          {/* Sponsors as a simple bulleted list with slightly larger font (no bold) */}
          <ul className="list-disc pl-5 space-y-2">
            {sponsors.map((sponsor, index) => (
              <li key={index} className="text-foreground/70 text-lg">
                <a
                  href={sponsor.link}
                  className="text-primary hover:text-primary/80 transition-colors underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {sponsor.name}
                </a>
              </li>
            ))}
          </ul>
        </section>
      </div>

      <footer className="py-6 text-left max-w-3xl mx-auto px-4 text-sm text-foreground/50">
        © {new Date().getFullYear()} tedi mitiku. All rights reserved.
      </footer>
    </main>
  )
}

// Sample data with enhanced content, embedded links, and tags
const projects = [
  {
    titleContent: (
      <span>
        Upgrading Kurtosis' Logging System with{" "}
        <a
          href="https://ethpandaops.io/"
          className="text-primary hover:text-primary/80 transition-colors underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          EthPandaOps
        </a>{" "}
        and{" "}
        <a
          href="https://www.bloctopus.io/"
          className="text-primary hover:text-primary/80 transition-colors underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Bloctopus
        </a>
      </span>
    ),
    tag: {
      text: "building",
      variant: "in-progress",
    },
  },
  {
    titleContent: (
      <span>
        <a
          href="https://www.avalabs.org/"
          className="text-primary hover:text-primary/80 transition-colors underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Avalanche
        </a>{" "}
        Kurtosis Package
      </span>
    ),
    description: "Building out a Kurtosis package for builders in the Avalanche ecosystem",
    tag: {
      text: "coming soon",
      variant: "coming-soon",
    },
  },
  {
    titleContent: (
      <span>
        <a
          href="https://antithesis.com"
          className="text-primary hover:text-primary/80 transition-colors underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Antithesis
        </a>{" "}
        &lt;&gt; Kurtosis
      </span>
    ),
    description: "Worked with Antithesis to support Kurtosis in their determistic simulation testing platform",
    tag: {
      text: "blog post coming soon",
      variant: "coming-soon",
    },
  },
]

// Simplified sponsors list - replace with your actual sponsors
const sponsors = [
  {
    name: "Bloctopus.io",
    link: "https://bloctopus.io/",
  },
  {
    name: "Antithesis",
    link: "https://antithesis.com/",
  },
  {
    name: "Ethereum Foundation",
    link: "https://ethereum.foundation/",
  },
]
