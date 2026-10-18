import { useState } from 'react'
import { ChevronDown, Terminal } from 'lucide-react'

type Experience = {
  id: string
  company: string
  logo: string
  logoFit?: 'contain' | 'cover'
  mark: string
  wordmark: string
  tone: string
  role: string
  dates: string
  location: string
  summary: string
  impact: string[]
  stack: string[]
}

const experience: Experience[] = [
  {
    id: 'reliance-games',
    company: 'Reliance Games',
    logo: '/images/companies/reliance-games.png',
    logoFit: 'contain',
    mark: 'RG',
    wordmark: 'GAMES',
    tone: 'border-[#83f28f]/25 text-[#83f28f]',
    role: 'Junior Software Engineer · Backend',
    dates: 'JUL 2025 — JUN 2026',
    location: 'India · Hybrid',
    summary: 'Built and supported live backend and gameplay systems for a global mobile game.',
    impact: [
      'Developed Java and Spring Boot services with PostgreSQL, REST APIs, and Kafka for reliable multi-node processing.',
      'Built Unity C# gameplay features and structured client-server payloads with Protocol Buffers.',
      'Created Python and LLM-powered internal tools that reduced manual QA effort by 35%.',
    ],
    stack: ['Java 8', 'Spring Boot', 'Apache Kafka', 'PostgreSQL', 'Unity C#', 'Protocol Buffers', 'Python', 'FastMCP'],
  },
  {
    id: 'best-buy',
    company: 'Best Buy',
    logo: '/images/companies/best-buy.jpg',
    logoFit: 'cover',
    mark: 'BEST',
    wordmark: 'BUY',
    tone: 'border-[#f5d34f]/35 text-[#f5d34f]',
    role: 'Product Associate',
    dates: 'JUL 2024 — JAN 2025',
    location: 'Brampton, Canada',
    summary: 'Built data and workflow automations alongside customer-facing retail work.',
    impact: [
      'Automated sales activity tracking with Python and the Salesforce REST API while maintaining an 87% NPS.',
      'Used Alteryx and SQL analysis to help improve operational efficiency by 15%.',
      'Created queue workflows supporting $200K average monthly sales and a 27% quarterly sales increase.',
    ],
    stack: ['Python', 'Salesforce REST API', 'SQL', 'Alteryx', 'Power Automate', 'Power BI', 'DAX'],
  },
  {
    id: 'cgi',
    company: 'CGI',
    logo: '/images/companies/cgi.png',
    logoFit: 'contain',
    mark: 'CGI',
    wordmark: 'TECH',
    tone: 'border-rose-400/35 text-rose-300',
    role: 'Software Engineering Intern',
    dates: 'JAN 2022 — DEC 2022',
    location: 'Toronto, Canada',
    summary: 'Automated infrastructure setup, API testing, and internal operations dashboards.',
    impact: [
      'Provisioned AWS infrastructure with Terraform and Ansible, reducing manual setup time by 50%.',
      'Built Python and SQL dashboards for CI/CD health, deployments, and incident visibility.',
      'Executed 500+ smoke, performance, and regression test scripts using HP ALM.',
    ],
    stack: ['AWS', 'Terraform', 'Ansible', 'Python', 'SQL', 'Postman', 'SoapUI', 'HP ALM'],
  },
]

function CompanyMark({ item }: { item: Experience }) {
  const [imageFailed, setImageFailed] = useState(false)

  return (
    <span
      aria-hidden="true"
      className={`grid h-14 w-14 shrink-0 place-items-center overflow-hidden rounded-lg border font-mono ${item.tone} ${item.id === 'reliance-games' ? 'bg-white' : 'bg-black/30'}`}
    >
      {!imageFailed ? (
        <img
          src={item.logo}
          alt=""
          className={`h-full w-full ${item.logoFit === 'cover' ? 'object-cover' : 'object-contain p-1'}`}
          onError={() => setImageFailed(true)}
        />
      ) : (
        <span className="grid h-full w-full place-content-center gap-1 text-center">
          <span className="text-sm font-bold leading-none">{item.mark}</span>
          <span className="text-[8px] tracking-[0.18em]">{item.wordmark}</span>
        </span>
      )}
    </span>
  )
}

export default function CareerTimeline() {
  const [openExperience, setOpenExperience] = useState<string | undefined>()

  return (
    <section
      id="experience"
      className="mx-auto max-w-5xl scroll-mt-8 border-t border-white/10 py-12 sm:py-16"
    >
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="flex items-center gap-2 font-mono text-xs tracking-widest text-[#83f28f]">
            <Terminal size={14} />
            // CAREER LOG
          </p>
          <h2 className="mt-3 text-2xl font-semibold sm:text-3xl">
            Systems I’ve worked on.
          </h2>
          <p className="mt-3 max-w-xl text-sm leading-6 text-gray-400">
            A shell-style history of the teams, systems, and tools behind my work.
          </p>
        </div>
        <span className="font-mono text-xs text-gray-500">
          EXPERIENCE.LOG · {String(experience.length).padStart(2, '0')} RECORDS
        </span>
      </div>

      <div className="mt-7 overflow-hidden rounded-2xl border border-white/10 bg-[#0d1013] shadow-2xl shadow-black/20">
        <div className="flex items-center justify-between gap-3 border-b border-white/10 bg-white/[0.025] px-4 py-3 sm:px-5">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff6259]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd44]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#00ca4e]" />
            <span className="ml-2 font-mono text-xs text-gray-400">
              ~/career/experience.sh
            </span>
          </div>
          <span className="font-mono text-[10px] text-[#83f28f]">
            READ ONLY
          </span>
        </div>

        <div className="p-4 sm:p-6">
          <div className="mb-5 font-mono text-xs leading-6 sm:text-sm">
            <p><span className="text-[#83f28f]">$</span> ./experience.sh --timeline</p>
            <p className="text-gray-500">loading {experience.length} career records ... done</p>
          </div>

          <div className="space-y-3">
            {experience.map((item, index) => {
              const isOpen = openExperience === item.id
              const detailsId = `experience-details-${item.id}`

              return (
                <article key={item.id} className="career-entry relative pl-7 sm:pl-9">
                  <span
                    aria-hidden="true"
                    className={`absolute left-0 top-6 grid h-4 w-4 place-items-center rounded-full border ${isOpen ? 'border-[#83f28f]/60 bg-[#83f28f]/15' : 'border-white/20 bg-[#11151a]'}`}
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-[#83f28f]" />
                  </span>
                  {index < experience.length - 1 && (
                    <span
                      aria-hidden="true"
                      className="absolute bottom-[-13px] left-[7px] top-10 w-px bg-gradient-to-b from-[#83f28f]/35 to-white/5"
                    />
                  )}

                  <div className={`overflow-hidden rounded-xl border transition-colors ${isOpen ? 'border-[#83f28f]/30 bg-[#11151a]' : 'border-white/[0.08] bg-[#11151a]/70'}`}>
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={detailsId}
                      onClick={() =>
                        setOpenExperience((current) =>
                          current === item.id ? undefined : item.id,
                        )
                      }
                      className="flex w-full min-w-0 items-center gap-3 p-3 text-left transition hover:bg-white/[0.02] focus-visible:outline focus-visible:outline-2 focus-visible:outline-inset focus-visible:outline-[#83f28f] sm:gap-4 sm:p-4"
                    >
                      <CompanyMark item={item} />
                      <span className="min-w-0 flex-1">
                        <span className="flex flex-wrap items-center gap-x-2 gap-y-1">
                          <span className="text-sm font-semibold text-white sm:text-base">{item.company}</span>
                          <span className="font-mono text-[10px] text-gray-500">{item.dates}</span>
                        </span>
                        <span className="mt-1 block text-xs text-gray-400 sm:text-sm">{item.role}</span>
                        <span className="mt-1 block text-[10px] text-gray-600">{item.location}</span>
                      </span>
                      <ChevronDown
                        size={16}
                        className={`shrink-0 text-[#83f28f] transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                      />
                    </button>

                    {isOpen && (
                      <div id={detailsId} className="career-details border-t border-white/[0.06] px-4 pb-4 pt-3 sm:px-5 sm:pb-5">
                        <p className="mb-3 font-mono text-[10px] tracking-widest text-[#83f28f]">
                          $ cat ./impact.log
                        </p>
                        <p className="mb-3 text-xs leading-5 text-gray-400 sm:text-sm">
                          {item.summary}
                        </p>
                        <ul className="space-y-2">
                          {item.impact.map((line) => (
                            <li key={line} className="flex gap-2 text-xs leading-5 text-gray-300 sm:text-sm">
                              <span aria-hidden="true" className="font-mono text-[#83f28f]">›</span>
                              <span>{line}</span>
                            </li>
                          ))}
                        </ul>
                        <div className="mt-4 border-t border-white/[0.06] pt-3">
                          <p className="mb-2 font-mono text-[10px] tracking-widest text-gray-600">
                            STACK=
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {item.stack.map((technology) => (
                              <span key={technology} className="rounded border border-white/10 px-2 py-1 font-mono text-[10px] text-gray-400">
                                {technology}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </article>
              )
            })}
          </div>

          <p className="mt-5 font-mono text-xs text-gray-600">
            <span className="text-[#83f28f]">$</span> exit 0
          </p>
        </div>
      </div>
    </section>
  )
}
