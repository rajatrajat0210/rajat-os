
import { ArrowUpRight, Link2, Mail } from 'lucide-react'
import Projects from './sections/Projects'
import TerminalWindow from './sections/TerminalWindow'
import SkillsDashboard from './sections/SkillsDashboard'
import CareerTimeline from './sections/CareerTimeline'
import Education from './sections/Education'

export default function App() {
  return (
    <main className="min-h-screen w-full min-w-0 overflow-x-clip bg-[#0b0d10] px-4 py-6 text-[#e6eaf0] sm:px-10 sm:py-8">
      {/* Navigation */}
      <header className="mx-auto flex max-w-5xl items-center justify-between gap-4 border-b border-white/10 pb-5">
        <a href="#" className="shrink-0 font-mono font-bold tracking-tight">
          <span className="text-[#83f28f]">R.</span>OS
        </a>

        <nav className="flex flex-wrap items-center justify-end gap-3 text-xs text-gray-400 sm:gap-5 sm:text-sm">
          <a href="#terminal" className="transition hover:text-[#83f28f]">
            Terminal
          </a>
          <a href="#projects" className="transition hover:text-[#83f28f]">
            Projects
          </a>
          <a href="#skills" className="transition hover:text-[#83f28f]">
            Skills
          </a>
          <a href="#experience" className="transition hover:text-[#83f28f]">
            Experience
          </a>
          <a href="#education" className="transition hover:text-[#83f28f]">
            Education
          </a>
          <a href="#about" className="transition hover:text-[#83f28f]">
            About
          </a>
        </nav>
      </header>

      {/* Hero + Interactive Terminal */}
      <section className="mx-auto grid max-w-5xl items-center gap-10 py-14 md:grid-cols-2 md:gap-12 md:py-24">
        <div>
          <p className="mb-4 font-mono text-sm text-[#83f28f]">
            ENGINEER / BUILDER / EXPLORER
          </p>

          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
            I build things
            <br />
            <span className="text-gray-500">that work.</span>
          </h1>

          <p className="mt-6 max-w-md leading-7 text-gray-400">
            Exploring backend engineering, AI, automation, and distributed
            systems.
          </p>

          <a
            href="#projects"
            className="mt-8 inline-flex items-center gap-2 rounded-md bg-[#83f28f] px-4 py-3 font-medium text-[#0b0d10] transition hover:bg-[#a2ffad]"
          >
            Explore my work
            <ArrowUpRight size={17} />
          </a>

          <div className="mt-8 flex flex-wrap gap-2 font-mono text-xs text-gray-500">
            <span className="rounded border border-white/10 px-3 py-2">
              BACKEND SYSTEMS
            </span>
            <span className="rounded border border-white/10 px-3 py-2">
              AI & AUTOMATION
            </span>
            <span className="rounded border border-white/10 px-3 py-2">
              DISTRIBUTED SYSTEMS
            </span>
          </div>
        </div>

        <TerminalWindow />
      </section>

      <SkillsDashboard />

      <CareerTimeline />

      <Education />

      {/* Interactive Projects */}
      <Projects />

      {/* About / Links */}
      <section
        id="about"
        className="mx-auto max-w-5xl scroll-mt-8 border-t border-white/10 py-10 sm:py-12"
      >
        <div className="grid gap-8 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] md:items-center md:gap-12">
          <figure className="group relative max-w-xl overflow-hidden rounded-2xl border border-[#83f28f]/20 bg-[#0b0d10]">
            <img
              src="/images/rajat-cyber-pixel.png"
              alt="Cyber pixel-art portrait of Rajat wearing glasses"
              className="block w-full transition duration-500 group-hover:scale-[1.02]"
            />
            <figcaption className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-3 bg-gradient-to-t from-[#0b0d10]/95 to-transparent px-4 pb-4 pt-10 font-mono text-[10px] tracking-widest text-[#83f28f] sm:text-xs">
              <span>OPERATOR PROFILE</span>
              <span>RAJAT // 01</span>
            </figcaption>
          </figure>

          <div>
            <p className="font-mono text-xs text-[#83f28f]">
              // ABOUT THIS ENVIRONMENT
            </p>
            <h2 className="mt-3 text-2xl font-semibold">The person behind the build.</h2>
            <p className="mt-3 text-sm leading-6 text-gray-400">
              Built with React, TypeScript, Tailwind CSS, and curiosity.
              Exploring the intersection of backend engineering, AI, and automation.
            </p>

            <div className="mt-5 flex flex-wrap gap-x-5 gap-y-3">
              <a
                href="mailto:rajat.rajat0210@gmail.com"
                className="inline-flex items-center gap-2 text-sm text-gray-400 transition hover:text-[#83f28f]"
              >
                <Mail size={15} />
                rajat.rajat0210@gmail.com
                <ArrowUpRight size={13} />
              </a>
              <a
                href="https://www.linkedin.com/in/rajat-rajat12/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm text-gray-400 transition hover:text-[#83f28f]"
              >
                <Link2 size={15} />
                LinkedIn
                <ArrowUpRight size={13} />
              </a>
              <a
                href="https://github.com/rajatrajat0210"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm text-gray-400 transition hover:text-[#83f28f]"
              >
                GitHub
                <ArrowUpRight size={13} />
              </a>
            </div>

            <p className="mt-8 font-mono text-xs text-gray-600">
              RAJAT.OS © {new Date().getFullYear()} · ALL SYSTEMS NOMINAL
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
