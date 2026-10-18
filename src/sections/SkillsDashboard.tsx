import { useState } from 'react'
import {
  ArrowUpRight,
  BrainCircuit,
  Cloud,
  Code2,
  Cpu,
  Database,
  Server,
  Workflow,
  Wrench,
} from 'lucide-react'
import SiAnsible from '@icons-pack/react-simple-icons/icons/SiAnsible'
import SiAnthropic from '@icons-pack/react-simple-icons/icons/SiAnthropic'
import SiApachekafka from '@icons-pack/react-simple-icons/icons/SiApachekafka'
import SiCplusplus from '@icons-pack/react-simple-icons/icons/SiCplusplus'
import SiDocker from '@icons-pack/react-simple-icons/icons/SiDocker'
import SiFastapi from '@icons-pack/react-simple-icons/icons/SiFastapi'
import SiFlask from '@icons-pack/react-simple-icons/icons/SiFlask'
import SiGithub from '@icons-pack/react-simple-icons/icons/SiGithub'
import SiGithubcopilot from '@icons-pack/react-simple-icons/icons/SiGithubcopilot'
import SiGnubash from '@icons-pack/react-simple-icons/icons/SiGnubash'
import SiHibernate from '@icons-pack/react-simple-icons/icons/SiHibernate'
import SiJavascript from '@icons-pack/react-simple-icons/icons/SiJavascript'
import SiJenkins from '@icons-pack/react-simple-icons/icons/SiJenkins'
import SiKubernetes from '@icons-pack/react-simple-icons/icons/SiKubernetes'
import SiLangchain from '@icons-pack/react-simple-icons/icons/SiLangchain'
import SiModelcontextprotocol from '@icons-pack/react-simple-icons/icons/SiModelcontextprotocol'
import SiMongodb from '@icons-pack/react-simple-icons/icons/SiMongodb'
import SiMysql from '@icons-pack/react-simple-icons/icons/SiMysql'
import SiOpenjdk from '@icons-pack/react-simple-icons/icons/SiOpenjdk'
import SiPostgresql from '@icons-pack/react-simple-icons/icons/SiPostgresql'
import SiPostman from '@icons-pack/react-simple-icons/icons/SiPostman'
import SiPython from '@icons-pack/react-simple-icons/icons/SiPython'
import SiRedis from '@icons-pack/react-simple-icons/icons/SiRedis'
import SiSplunk from '@icons-pack/react-simple-icons/icons/SiSplunk'
import SiSpringboot from '@icons-pack/react-simple-icons/icons/SiSpringboot'
import SiTerraform from '@icons-pack/react-simple-icons/icons/SiTerraform'
import SiUbuntu from '@icons-pack/react-simple-icons/icons/SiUbuntu'
import { skills, type SkillCategory } from '../data/skills'

const brandIcons = {
  'Java 8': SiOpenjdk,
  Python: SiPython,
  JavaScript: SiJavascript,
  'C / C++': SiCplusplus,
  Bash: SiGnubash,
  'Spring Boot': SiSpringboot,
  Flask: SiFlask,
  FastAPI: SiFastapi,
  'Apache Kafka': SiApachekafka,
  'JPA / Hibernate': SiHibernate,
  PostgreSQL: SiPostgresql,
  MySQL: SiMysql,
  MongoDB: SiMongodb,
  Redis: SiRedis,
  Docker: SiDocker,
  Kubernetes: SiKubernetes,
  Terraform: SiTerraform,
  Ansible: SiAnsible,
  Jenkins: SiJenkins,
  'Linux / Ubuntu': SiUbuntu,
  LangChain: SiLangchain,
  MCP: SiModelcontextprotocol,
  'Claude API': SiAnthropic,
  'GitHub Copilot': SiGithubcopilot,
  'Git / GitHub': SiGithub,
  Postman: SiPostman,
  Splunk: SiSplunk,
} as const

const categories: Array<{
  name: SkillCategory
  icon: typeof Code2
  summary: string
}> = [
  { name: 'Languages', icon: Code2, summary: 'Languages and scripting' },
  { name: 'Backend & APIs', icon: Server, summary: 'Services and messaging' },
  { name: 'Data', icon: Database, summary: 'Databases and caching' },
  { name: 'Cloud & DevOps', icon: Cloud, summary: 'Infrastructure and delivery' },
  { name: 'AI & Automation', icon: BrainCircuit, summary: 'Models and workflows' },
  { name: 'Testing & Tools', icon: Wrench, summary: 'Quality and observability' },
  { name: 'Engineering', icon: Workflow, summary: 'Design and practices' },
]

export default function SkillsDashboard() {
  const [activeCategory, setActiveCategory] = useState<SkillCategory>()
  const [selectedSkill, setSelectedSkill] = useState<string | undefined>()
  const selected = skills.find((skill) => skill.name === selectedSkill)

  return (
    <section
      id="skills"
      className="mx-auto max-w-5xl scroll-mt-8 border-t border-white/10 py-12 sm:py-16"
    >
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="flex items-center gap-2 font-mono text-xs tracking-widest text-[#83f28f]">
            <Cpu size={14} />
            // ENGINEERING SKILLS
          </p>
          <h2 className="mt-3 text-2xl font-semibold sm:text-3xl">
            Tools behind the build.
          </h2>
          <p className="mt-3 max-w-xl text-sm leading-6 text-gray-400">
            Technologies and practices from my work across backend systems,
            game features, cloud infrastructure, and AI automation.
          </p>
        </div>
        <span className="font-mono text-xs text-gray-500">
          STACK INDEX · {skills.length.toString().padStart(2, '0')}
        </span>
      </div>

      <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
        {categories.map(({ name, icon: Icon, summary }, index) => {
          const categoryCount = skills.filter(
            (skill) => skill.category === name,
          ).length
          const isOpen = activeCategory === name
          const panelId = `skill-group-${index}`

          return (
            <button
              key={name}
              type="button"
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => {
                setActiveCategory(isOpen ? undefined : name)
                setSelectedSkill(undefined)
              }}
              className={`skill-category-card group relative flex min-h-32 min-w-0 flex-col justify-between overflow-hidden rounded-xl border p-3 text-left transition duration-200 hover:-translate-y-1 hover:border-[#83f28f]/45 hover:bg-[#83f28f]/[0.04] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#83f28f] sm:min-h-36 sm:p-4 ${
                isOpen
                  ? 'border-[#83f28f]/45 bg-[#83f28f]/[0.05]'
                  : 'border-white/10 bg-[#11151a]'
              }`}
            >
              <span className="flex w-full items-start justify-between gap-2">
                <span className="skill-category-icon grid h-10 w-10 place-items-center rounded-lg border border-white/10 bg-black/30 text-[#83f28f] transition duration-200 group-hover:rotate-[-5deg] group-hover:scale-110 group-hover:border-[#83f28f]/45 group-hover:bg-[#83f28f]/10">
                  <Icon size={19} aria-hidden="true" />
                </span>
                <span className="font-mono text-[10px] text-gray-600">
                  {String(index + 1).padStart(2, '0')} / 07
                </span>
              </span>
              <span className="mt-4 block min-w-0">
                <span className="block break-words text-xs font-medium leading-5 text-gray-200 sm:text-sm">
                  {name}
                </span>
                <span className="mt-1 block truncate text-[10px] text-gray-500 transition-colors group-hover:text-[#83f28f]/80">
                  {summary} · {categoryCount} items
                </span>
              </span>
              <span className="pointer-events-none absolute bottom-3 right-3 text-[#83f28f] opacity-0 transition duration-200 group-hover:translate-x-0.5 group-hover:opacity-100 sm:bottom-4 sm:right-4">
                <ArrowUpRight size={14} aria-hidden="true" />
              </span>
            </button>
          )
        })}
      </div>

      {activeCategory && (
        <div
          id={`skill-group-${categories.findIndex(
            (category) => category.name === activeCategory,
          )}`}
          className="skill-panel mt-4 rounded-xl border border-[#83f28f]/20 bg-[#11151a] p-3 sm:p-4"
        >
          <div className="mb-4 flex items-center justify-between gap-3 border-b border-white/[0.06] pb-3">
            <div>
              <p className="font-mono text-[10px] tracking-widest text-[#83f28f]">
                OPEN STACK
              </p>
              <h3 className="mt-1 text-sm font-medium text-gray-200">
                {activeCategory}
              </h3>
            </div>
            <span className="font-mono text-[10px] text-gray-500">
              {skills.filter((skill) => skill.category === activeCategory).length
                .toString()
                .padStart(2, '0')} SKILLS
            </span>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {skills
              .filter((skill) => skill.category === activeCategory)
              .map((skill) => {
                const BrandIcon =
                  brandIcons[skill.name as keyof typeof brandIcons]

                return (
                  <button
                    key={skill.name}
                    type="button"
                    aria-pressed={selectedSkill === skill.name}
                    onClick={() =>
                      setSelectedSkill((current) =>
                        current === skill.name ? undefined : skill.name,
                      )
                    }
                    className={`skill-card group flex min-h-28 min-w-0 items-start gap-3 rounded-xl border p-3 text-left transition duration-200 hover:-translate-y-1 hover:border-[#83f28f]/50 hover:bg-[#83f28f]/[0.04] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#83f28f] sm:min-h-32 sm:p-4 ${
                      selectedSkill === skill.name
                        ? 'border-[#83f28f]/50 bg-[#83f28f]/[0.05]'
                        : 'border-white/10 bg-[#0b0d10]'
                    }`}
                  >
                    <span
                      aria-hidden="true"
                      className="skill-mark grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-white/10 bg-black/30 font-mono text-[10px] font-bold text-[#83f28f] transition duration-200 group-hover:rotate-[-4deg] group-hover:scale-110 group-hover:border-[#83f28f]/50 group-hover:bg-[#83f28f]/10 sm:h-11 sm:w-11 sm:text-xs"
                    >
                      {BrandIcon ? (
                        <BrandIcon
                          size={22}
                          color="#83f28f"
                          aria-hidden="true"
                        />
                      ) : (
                        skill.mark
                      )}
                    </span>
                    <span className="min-w-0 pt-0.5">
                      <span className="block break-words text-xs font-medium leading-5 text-gray-200 sm:text-sm">
                        {skill.name}
                      </span>
                    </span>
                  </button>
                )
              })}
          </div>

          {selected && selected.category === activeCategory && (
            <div
              key={selected.name}
              aria-live="polite"
              className="mt-4 flex items-start gap-3 rounded-xl border border-[#83f28f]/20 bg-[#83f28f]/[0.035] p-4"
            >
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-[#83f28f]/20 font-mono text-[10px] font-bold text-[#83f28f]">
                {selected.mark}
              </span>
              <div className="min-w-0 flex-1">
                <p className="font-mono text-[10px] tracking-widest text-[#83f28f]">
                  RESUME CONTEXT · {selected.category.toUpperCase()}
                </p>
                <p className="mt-1 text-sm leading-6 text-gray-300">
                  <span className="font-medium text-white">
                    {selected.name}:
                  </span>{' '}
                  {selected.context}
                </p>
              </div>
              <ArrowUpRight size={15} className="mt-1 shrink-0 text-[#83f28f]" />
            </div>
          )}
        </div>
      )}

      <p className="mt-4 text-xs text-gray-600">
        Pick a stack card to reveal its tools, then select a technology for resume context.
      </p>
    </section>
  )
}
