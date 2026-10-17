
import { useEffect, useRef, useState } from 'react'
import {
  Terminal,
  UserRound,
  FolderCode,
  Cpu,
  Mail,
  ChevronRight,
  Trash2,
  ExternalLink,
} from 'lucide-react'

type TerminalLine = {
  id: number
  text: string
  kind: 'system' | 'command' | 'output' | 'error'
}

const shortcuts = [
  { command: 'about', icon: UserRound, number: '01' },
  { command: 'projects', icon: FolderCode, number: '02' },
  { command: 'skills', icon: Cpu, number: '03' },
  { command: 'contact', icon: Mail, number: '04' },
]

const responses: Record<string, string[]> = {
  help: [
    'AVAILABLE COMMANDS',
    'about     → Learn about the engineer',
    'projects  → Explore selected projects',
    'skills    → View the engineering toolkit',
    'contact   → Find contact links',
    'clear     → Clear terminal history',
    'help      → Display this command list',
  ],
  about: [
    'OPERATOR PROFILE',
    'Name: Rajat',
    'Focus: Backend engineering, gaming systems, AI',
    'Approach: Build useful things. Understand the system.',
  ],
  projects: [
    'PROJECT INDEX',
    'Loading the project explorer...',
    'Use the Projects section to inspect builds and repositories.',
  ],
  skills: [
    'ENGINEERING TOOLKIT',
    'Languages: Java, Python, TypeScript, C#',
    'Backend: Spring Boot, FastAPI, Flask',
    'Data: PostgreSQL, Redis, SQL',
    'Tools: Git, Docker, AWS, Terraform',
    'Interests: AI, game systems, distributed systems',
  ],
  contact: [
    'ESTABLISH CONNECTION',
    'GitHub: github.com/rajatrajat0210',
    'Use the GitHub link below or in the profile section.',
  ],
}

const initialLines: TerminalLine[] = [
  { id: 1, text: 'RAJAT.OS [Version 1.0.0]', kind: 'system' },
  { id: 2, text: 'Personal engineering environment initialized.', kind: 'output' },
  { id: 3, text: 'Type "help" or select a command to begin.', kind: 'output' },
]

export default function TerminalWindow() {
  const [history, setHistory] = useState<TerminalLine[]>(initialLines)
  const [input, setInput] = useState('')
  const [nextId, setNextId] = useState(4)
  const inputRef = useRef<HTMLInputElement>(null)
  const bottomRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' })
  }, [history])

  function runCommand(raw: string) {
    const command = raw.trim().toLowerCase()
    if (!command) return

    setInput('')

    if (command === 'clear') {
      setHistory([])
      return
    }

    const result = responses[command]
    const newLines: TerminalLine[] = [
      { id: nextId, text: `$ ${command}`, kind: 'command' },
      ...(result
        ? result.map((text, index) => ({
            id: nextId + index + 1,
            text,
            kind: 'output' as const,
          }))
        : [
            {
              id: nextId + 1,
              text: `Command not found: ${command}. Type "help" for available commands.`,
              kind: 'error' as const,
            },
          ]),
    ]

    setHistory((previous) => [...previous, ...newLines])
    setNextId((id) => id + newLines.length)

    if (command === 'projects') {
      document.getElementById('projects')?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }

  }

  return (
    <section
      id="terminal"
      className="terminal-shell group relative w-full min-w-0 overflow-hidden rounded-2xl border border-white/10 bg-[#0b0d10] shadow-2xl shadow-black/30"
      onClick={() => inputRef.current?.focus()}
    >
      <div className="terminal-glow pointer-events-none absolute inset-0" />

      <div className="relative flex items-center justify-between gap-3 border-b border-white/10 bg-white/[0.025] px-4 py-3 sm:px-5">
        <div className="flex min-w-0 items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff6259]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd44]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#00ca4e]" />
          <div className="ml-2 flex min-w-0 items-center gap-2">
            <Terminal size={15} className="shrink-0 text-[#83f28f]" />
            <span className="truncate font-mono text-xs text-gray-300">
              rajat@portfolio
            </span>
          </div>
        </div>

        <div className="flex shrink-0 items-center gap-2 font-mono text-[10px] text-[#83f28f] sm:text-xs">
          <span className="terminal-pulse h-1.5 w-1.5 rounded-full bg-[#83f28f]" />
          ONLINE
        </div>
      </div>

      <div className="relative p-4 sm:p-5">
        <div className="mb-5 flex items-start justify-between gap-3">
          <div>
            <p className="font-mono text-xs tracking-[0.16em] text-[#83f28f]">
              INTERACTIVE SHELL
            </p>
            <p className="mt-1 text-xs text-gray-500">
              A small window into how I build.
            </p>
          </div>
          <button
            type="button"
            title="Clear terminal"
            aria-label="Clear terminal"
            onClick={(event) => {
              event.stopPropagation()
              setHistory([])
              inputRef.current?.focus()
            }}
            className="rounded-md border border-white/10 p-2 text-gray-500 transition hover:border-[#83f28f]/40 hover:text-[#83f28f]"
          >
            <Trash2 size={14} />
          </button>
        </div>

        <div
          className="terminal-output min-w-0 space-y-2 overflow-x-hidden overflow-y-auto font-mono text-xs leading-6 sm:text-sm"
          aria-live="polite"
          aria-label="Terminal output"
        >
          {history.map((line) => (
            <p
              key={line.id}
              className={`terminal-line break-words ${
                line.kind === 'system'
                  ? 'text-[#83f28f]'
                  : line.kind === 'command'
                    ? 'text-[#83f28f]'
                    : line.kind === 'error'
                      ? 'text-rose-400'
                      : 'text-gray-400'
              }`}
            >
              {line.kind === 'output' && line.text.includes('→') ? (
                <span className="text-gray-300">{line.text}</span>
              ) : (
                line.text
              )}
            </p>
          ))}
          <div ref={bottomRef} />
        </div>

        <form
          className="mt-4 flex min-w-0 items-center gap-2 border-t border-white/10 pt-4 font-mono text-sm"
          onSubmit={(event) => {
            event.preventDefault()
            runCommand(input)
          }}
        >
          <ChevronRight size={16} className="shrink-0 text-[#83f28f]" />
          <span className="text-[#83f28f]">$</span>
          <input
            ref={inputRef}
            value={input}
            onChange={(event) => setInput(event.target.value)}
            placeholder="Enter a command..."
            autoComplete="off"
            spellCheck={false}
            aria-label="Terminal command"
            className="terminal-input min-w-0 flex-1 bg-transparent py-1 text-gray-100 outline-none placeholder:text-gray-600"
          />
          <span className="terminal-cursor h-4 w-1 shrink-0 bg-[#83f28f]" />
        </form>

        <div className="mt-4">
          <p className="mb-2 font-mono text-[10px] uppercase tracking-widest text-gray-600">
            Quick commands
          </p>
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
            {shortcuts.map(({ command, icon: Icon, number }) => (
              <button
                key={command}
                type="button"
                onClick={(event) => {
                  event.stopPropagation()
                  runCommand(command)
                }}
                className="terminal-shortcut flex min-w-0 items-center gap-2 rounded-lg border border-white/[0.08] bg-white/[0.02] px-3 py-3 text-left transition duration-200 hover:-translate-y-0.5 hover:border-[#83f28f]/40 hover:bg-[#83f28f]/[0.06]"
              >
                <Icon size={15} className="shrink-0 text-[#83f28f]" />
                <span className="min-w-0 flex-1 truncate font-mono text-xs text-gray-300">
                  {command}
                </span>
                <span className="font-mono text-[10px] text-gray-600">
                  {number}
                </span>
              </button>
            ))}
          </div>
        </div>

        <div className="mt-4 flex flex-wrap items-center justify-between gap-2 border-t border-white/[0.06] pt-3 text-[10px] text-gray-600">
          <span>UTF-8 · UTF-16 · READY</span>
          <a
            href="https://github.com/rajatrajat0210"
            target="_blank"
            rel="noreferrer"
            onClick={(event) => event.stopPropagation()}
            className="inline-flex items-center gap-1.5 transition hover:text-[#83f28f]"
          >
            SOURCE CODE <ExternalLink size={11} />
          </a>
        </div>
      </div>
    </section>
  )
}
