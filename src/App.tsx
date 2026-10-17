
import { ArrowUpRight } from 'lucide-react'
import Projects from './sections/Projects'
import TerminalWindow from './sections/TerminalWindow'

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
            Exploring backend systems, gaming technology, AI, and the space
            where engineering meets creativity.
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
              BACKEND
            </span>
            <span className="rounded border border-white/10 px-3 py-2">
              AI / ML
            </span>
            <span className="rounded border border-white/10 px-3 py-2">
              GAME SYSTEMS
            </span>
          </div>
        </div>

        <TerminalWindow />
      </section>

      {/* Interactive Projects */}
      <Projects />

      {/* About / Links */}
      <section
        id="about"
        className="mx-auto max-w-5xl scroll-mt-8 border-t border-white/10 py-8"
      >
        <p className="font-mono text-xs text-[#83f28f]">
          // ABOUT THIS ENVIRONMENT
        </p>

        <p className="mt-3 text-sm leading-6 text-gray-400">
          Built with React, TypeScript, Tailwind CSS, and curiosity.
          Exploring the intersection of backend engineering, gaming, and AI.
        </p>

        <a
          href="https://github.com/rajatrajat0210"
          target="_blank"
          rel="noreferrer"
          className="mt-4 inline-flex items-center gap-2 text-sm text-gray-400 transition hover:text-[#83f28f]"
        >
          GitHub
          <ArrowUpRight size={14} />
        </a>

        <p className="mt-8 font-mono text-xs text-gray-600">
          RAJAT.OS © {new Date().getFullYear()} · ALL SYSTEMS NOMINAL
        </p>
      </section>
    </main>
  )
}
