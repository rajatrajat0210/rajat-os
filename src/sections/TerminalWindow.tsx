import { useEffect, useRef, useState, type FormEvent, type KeyboardEvent } from 'react'
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
  href?: string
  download?: boolean
}

type TerminalCommand = {
  lines: string[]
  section?: string
}

const shortcuts = [
  { command: 'about', icon: UserRound, number: '01' },
  { command: 'projects', icon: FolderCode, number: '02' },
  { command: 'skills', icon: Cpu, number: '03' },
  { command: 'contact', icon: Mail, number: '04' },
]

const commandNames = [
  'about',
  'projects',
  'skills',
  'experience',
  'contact',
  'resume',
  '/resume',
  'help',
  'clear',
]

const commands: Record<string, TerminalCommand> = {
  help: {
    lines: [
      'AVAILABLE COMMANDS',
      'about       → Open the operator profile',
      'projects    → Jump to selected projects',
      'skills      → Browse the engineering toolkit',
      'experience  → Open the career timeline',
      'contact     → Show email and LinkedIn links',
      '/resume     → View or download the resume',
      'clear       → Clear the terminal screen',
      'help        → Display this command list',
      '↑ / ↓       → Browse command history',
      'Tab         → Autocomplete a command',
    ],
  },
  about: {
    section: 'about',
    lines: [
      'OPERATOR PROFILE',
      'Name: Rajat',
      'Focus: Backend engineering, gaming systems, AI',
      'Approach: Build useful things. Understand the system.',
      'Opening profile section ...',
    ],
  },
  projects: {
    section: 'projects',
    lines: ['PROJECT INDEX', 'Opening the project explorer ...'],
  },
  skills: {
    section: 'skills',
    lines: ['ENGINEERING TOOLKIT', 'Opening the skills dashboard ...'],
  },
  experience: {
    section: 'experience',
    lines: ['CAREER LOG', 'Opening the career timeline ...'],
  },
  contact: {
    section: 'about',
    lines: [
      'ESTABLISH CONNECTION',
      'Email: rajat.rajat0210@gmail.com',
      'LinkedIn: linkedin.com/in/rajat-rajat12/',
      'Opening contact links ...',
    ],
  },
}

const bootLines: TerminalLine[] = [
  { id: 1, text: 'RAJAT.OS [Version 1.0.0]', kind: 'system' },
  { id: 2, text: 'Mounting portfolio modules ... done', kind: 'output' },
  { id: 3, text: 'Type "help" to list commands. Tab completes command names.', kind: 'output' },
]

function getCommandResponse(command: string): TerminalCommand | undefined {
  if (command === 'resume' || command === '/resume') {
    return {
      lines: [
        'RESUME READY',
        'Open the PDF in a new tab or download a copy:',
      ],
    }
  }
  return commands[command]
}

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export default function TerminalWindow() {
  const [history, setHistory] = useState<TerminalLine[]>(bootLines)
  const [input, setInput] = useState('')
  const [nextId, setNextId] = useState(4)
  const inputRef = useRef<HTMLInputElement>(null)
  const outputRef = useRef<HTMLDivElement>(null)
  const commandHistory = useRef<string[]>([])
  const historyIndex = useRef(0)
  const draftInput = useRef('')

  useEffect(() => {
    if (outputRef.current) outputRef.current.scrollTop = outputRef.current.scrollHeight
  }, [history])

  function appendLines(lines: Array<Omit<TerminalLine, 'id'>>) {
    const identifiedLines = lines.map((line, index) => ({ ...line, id: nextId + index }))
    setHistory((previous) => [...previous, ...identifiedLines])
    setNextId((id) => id + identifiedLines.length)
  }

  function clearTerminal() {
    setHistory([])
  }

  function runCommand(raw: string) {
    const value = raw.trim()
    const command = value.toLowerCase()
    if (!command) return

    setInput('')
    historyIndex.current = 0
    draftInput.current = ''

    if (commandHistory.current.at(-1) !== value) {
      commandHistory.current.push(value)
    }
    historyIndex.current = commandHistory.current.length

    if (command === 'clear') {
      clearTerminal()
      return
    }

    const response = getCommandResponse(command)
    if (!response) {
      appendLines([
        { text: `$ ${value}`, kind: 'command' },
        {
          text: `Command not found: ${value}. Type "help" to list available commands.`,
          kind: 'error',
        },
      ])
      return
    }

    const lines: Array<Omit<TerminalLine, 'id'>> = [
      { text: `$ ${value}`, kind: 'command' },
      ...response.lines.map((text) => ({ text, kind: 'output' as const })),
    ]

    if (command === 'resume' || command === '/resume') {
      lines.push(
        { text: 'View resume (PDF)', kind: 'output', href: '/resume.pdf' },
        { text: 'Download resume', kind: 'output', href: '/resume.pdf', download: true },
      )
    }

    appendLines(lines)
    if (response.section) scrollToSection(response.section)
  }

  function showCompletions(value: string) {
    const prefix = value.trim().toLowerCase()
    if (!prefix) {
      appendLines([{ text: commandNames.join('  '), kind: 'output' }])
      return
    }

    const matches = commandNames.filter((command) => command.startsWith(prefix))
    if (matches.length === 1) {
      setInput(`${matches[0]} `)
    } else if (matches.length > 1) {
      appendLines([{ text: matches.join('    '), kind: 'output' }])
    }
  }

  function handleKeyDown(event: KeyboardEvent<HTMLInputElement>) {
    if (event.key === 'ArrowUp' || event.key === 'ArrowDown') {
      event.preventDefault()
      const entries = commandHistory.current
      if (!entries.length) return

      if (event.key === 'ArrowUp') {
        if (historyIndex.current === entries.length) draftInput.current = input
        historyIndex.current = Math.max(0, historyIndex.current - 1)
        setInput(entries[historyIndex.current] ?? '')
      } else if (historyIndex.current < entries.length - 1) {
        historyIndex.current += 1
        setInput(entries[historyIndex.current] ?? '')
      } else {
        historyIndex.current = entries.length
        setInput(draftInput.current)
      }
      return
    }

    if (event.key === 'Tab') {
      event.preventDefault()
      showCompletions(input)
      return
    }

    if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'l') {
      event.preventDefault()
      clearTerminal()
      return
    }

    if (event.key === 'Escape') setInput('')

    if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'c') {
      event.preventDefault()
      if (input) appendLines([{ text: `^C  ${input}`, kind: 'error' }])
      setInput('')
    }
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    runCommand(input)
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
            <span className="truncate font-mono text-xs text-gray-300">rajat@portfolio</span>
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
            <p className="font-mono text-xs tracking-[0.16em] text-[#83f28f]">INTERACTIVE SHELL</p>
            <p className="mt-1 text-xs text-gray-500">A small window into how I build.</p>
          </div>
          <button
            type="button"
            title="Clear terminal (Ctrl/⌘+L)"
            aria-label="Clear terminal"
            onClick={(event) => {
              event.stopPropagation()
              clearTerminal()
              inputRef.current?.focus()
            }}
            className="rounded-md border border-white/10 p-2 text-gray-500 transition hover:border-[#83f28f]/40 hover:text-[#83f28f]"
          >
            <Trash2 size={14} />
          </button>
        </div>

        <div
          ref={outputRef}
          className="terminal-output max-h-72 min-w-0 space-y-2 overflow-x-hidden overflow-y-auto font-mono text-xs leading-6 sm:text-sm"
          aria-live="polite"
          aria-label="Terminal output"
        >
          {history.map((line, index) => (
            <p
              key={line.id}
              style={{ animationDelay: `${Math.min(index, 3) * 140}ms` }}
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
              {line.href ? (
                <a
                  href={line.href}
                  download={line.download ? 'Rajat_SDE_Resume_2026.pdf' : undefined}
                  target={line.download ? undefined : '_blank'}
                  rel={line.download ? undefined : 'noreferrer'}
                  onClick={(event) => event.stopPropagation()}
                  className="underline decoration-[#83f28f]/40 underline-offset-4 transition hover:text-[#83f28f]"
                >
                  {line.text} ↗
                </a>
              ) : (
                line.text
              )}
            </p>
          ))}
        </div>

        <form
          className="mt-4 flex min-w-0 items-center gap-2 border-t border-white/10 pt-4 font-mono text-sm"
          onSubmit={handleSubmit}
        >
          <ChevronRight size={16} className="shrink-0 text-[#83f28f]" />
          <span className="text-[#83f28f]">$</span>
          <input
            ref={inputRef}
            value={input}
            onChange={(event) => setInput(event.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type help..."
            autoComplete="off"
            spellCheck={false}
            aria-label="Terminal command"
            className="terminal-input min-w-0 flex-1 bg-transparent py-1 text-gray-100 outline-none placeholder:text-gray-600"
          />
          <span className="terminal-cursor h-4 w-1 shrink-0 bg-[#83f28f]" />
        </form>

        <div className="mt-4">
          <p className="mb-2 font-mono text-[10px] uppercase tracking-widest text-gray-600">Quick commands</p>
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
                <span className="min-w-0 flex-1 truncate font-mono text-xs text-gray-300">{command}</span>
                <span className="font-mono text-[10px] text-gray-600">{number}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="mt-4 flex flex-wrap items-center justify-between gap-2 border-t border-white/[0.06] pt-3 text-[10px] text-gray-600">
          <span>↑ / ↓ history · Tab complete · Ctrl/⌘+L clear</span>
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
