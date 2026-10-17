
import { useState } from 'react'
import { Terminal, ArrowUpRight} from 'lucide-react'

const commands = [
  'help',
  'about',
  'projects',
  'skills',
  'contact',
]

const output: Record<string, string[]> = {
  help: [
    'Available commands:',
    'about     — who I am',
    'projects  — things I have built',
    'skills    — my engineering toolkit',
    'contact   — get in touch',
    'clear     — clear terminal history',
  ],
  about: [
    'Backend engineer. Gaming enthusiast.',
    'Interested in AI, distributed systems,',
    'and building useful things.',
  ],
  projects: [
    'PROJECT INDEX',
    '01  Backend & game systems',
    '02  AI-powered tools',
    '03  Creative engineering experiments',
  ],
  skills: [
    'Java · Python · TypeScript',
    'Spring Boot · React · PostgreSQL',
    'Git · Docker · System Design',
  ],
  contact: [
    'Find me on GitHub or LinkedIn.',
    'Use the links below to connect.',
  ],
}

export default function App() {
  const [history, setHistory] = useState<string[]>([
    'RAJAT.OS [Version 1.0.0]',
    'Personal engineering environment',
    'Type "help" to explore available commands.',
  ])
  const [input, setInput] = useState('')

  function runCommand(raw: string) {
    const command = raw.trim().toLowerCase()
    if (!command) return

    const result =
      command === 'clear'
        ? []
        : output[command] ?? [
            `Command not found: ${command}`,
            'Type "help" to see available commands.',
          ]

    setHistory((previous) =>
      command === 'clear'
        ? []
        : [...previous, `$ ${command}`, ...result],
    )
    setInput('')
  }

  return (
    <main className="min-h-screen bg-[#0b0d10] px-5 py-8 text-[#e6eaf0] sm:px-10">
      <header className="mx-auto flex max-w-5xl items-center justify-between border-b border-white/10 pb-5">
        <a href="#" className="font-mono font-bold tracking-tight">
          <span className="text-[#83f28f]">R.</span>OS
        </a>

        <nav className="flex items-center gap-5 text-sm text-gray-400">
          <a href="#terminal" className="hover:text-white">Terminal</a>
          <a href="#projects" className="hover:text-white">Projects</a>
          <a href="#about" className="hover:text-white">About</a>
        </nav>
      </header>

      <section className="mx-auto grid max-w-5xl gap-10 py-16 md:grid-cols-2 md:items-center md:py-24">
        <div>
          <p className="mb-4 font-mono text-sm text-[#83f28f]">
            ENGINEER / BUILDER / EXPLORER
          </p>

          <h1 className="text-5xl font-semibold tracking-tight sm:text-6xl">
            I build things
            <br />
            <span className="text-gray-500">that work.</span>
          </h1>

          <p className="mt-6 max-w-md leading-7 text-gray-400">
            Exploring backend systems, gaming technology,
            AI, and the space where engineering meets creativity.
          </p>

          <a
            href="#projects"
            className="mt-8 inline-flex items-center gap-2 rounded-md bg-[#83f28f] px-4 py-3 font-medium text-[#0b0d10] hover:bg-[#a2ffad]"
          >
            Explore my work <ArrowUpRight size={17} />
          </a>
        </div>

        <section
          id="terminal"
          className="overflow-hidden rounded-xl border border-white/10 bg-[#11151a] shadow-2xl"
        >
          <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
            <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
            <span className="ml-2 flex items-center gap-2 font-mono text-xs text-gray-500">
              <Terminal size={14} /> rajat@portfolio
            </span>
          </div>

          <div className="p-5 font-mono text-sm">
            <div className="min-h-48 space-y-2" aria-live="polite">
              {history.map((line, index) => (
                <p
                  key={`${index}-${line}`}
                  className={
                    line.startsWith('$')
                      ? 'text-[#83f28f]'
                      : 'break-words text-gray-400'
                  }
                >
                  {line}
                </p>
              ))}
            </div>

            <form
              className="mt-5 flex gap-2 border-t border-white/10 pt-4"
              onSubmit={(event) => {
                event.preventDefault()
                runCommand(input)
              }}
            >
              <label htmlFor="command" className="text-[#83f28f]">
                $
              </label>
              <input
                id="command"
                value={input}
                onChange={(event) => setInput(event.target.value)}
                placeholder="Type help..."
                autoComplete="off"
                className="min-w-0 flex-1 bg-transparent text-white outline-none placeholder:text-gray-600"
              />
            </form>

            <div className="mt-3 flex flex-wrap gap-2">
              {commands.map((command) => (
                <button
                  key={command}
                  onClick={() => runCommand(command)}
                  className="rounded border border-white/10 px-2 py-1 text-xs text-gray-400 hover:border-[#83f28f] hover:text-[#83f28f]"
                >
                  {command}
                </button>
              ))}
            </div>
          </div>
        </section>
      </section>

      <section id="projects" className="mx-auto max-w-5xl border-t border-white/10 py-10">
        <p className="font-mono text-sm text-[#83f28f]">// NEXT: PROJECT EXPLORER</p>
        <h2 className="mt-3 text-2xl font-semibold">
          Engineering, made tangible.
        </h2>
        <p className="mt-3 text-gray-400">
          My projects will live here: the problems, architecture,
          trade-offs, and results behind each build.
        </p>
      </section>

      <section id="about" className="mx-auto max-w-5xl border-t border-white/10 py-8">
        <p className="text-sm text-gray-500">
          Built with React, TypeScript, and curiosity.
        </p>
        <a
          href="https://github.com/rajatrajat0210/"
          target="_blank"
          rel="noreferrer"
          className="mt-3 inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white"
        >
          GitHub <ArrowUpRight size={14} />
        </a>
      </section>
    </main>
  )
}
