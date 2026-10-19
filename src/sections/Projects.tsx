
import { useState } from 'react'
import { ArrowUpRight, GitBranchIcon } from 'lucide-react'
import { projects } from '../data/projects'

const filters = ['All', 'Backend', 'AI', 'Systems'] as const

export default function Projects() {
  const [activeFilter, setActiveFilter] =
    useState<(typeof filters)[number]>('All')

  const [selectedId, setSelectedId] = useState<string | undefined>(
    projects[0]?.id,
  )

  const filteredProjects =
    activeFilter === 'All'
      ? projects
      : projects.filter((project) => project.category === activeFilter)

  const selectedProject = filteredProjects.find(
    (project) => project.id === selectedId,
  )

  return (
    <section
      id="projects"
      className="mx-auto max-w-5xl scroll-mt-8 border-t border-white/10 py-12 sm:py-16"
    >
      <p className="font-mono text-sm text-[#83f28f]">
        // PROJECT EXPLORER
      </p>

      <div className="mt-3 flex flex-wrap items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl font-semibold sm:text-3xl">
            Engineering, made tangible.
          </h2>
          <p className="mt-3 max-w-xl text-sm leading-6 text-gray-400">
            A selection of projects across backend systems, AI, distributed
            architecture, and cloud-native engineering.
          </p>
        </div>
        <span className="font-mono text-xs text-gray-500">
          {filteredProjects.length.toString().padStart(2, '0')} PROJECTS
        </span>
      </div>

      <div className="mt-7 flex flex-wrap gap-2">
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            onClick={() => {
              setActiveFilter(filter)
              setSelectedId(undefined)
            }}
            className={`rounded-md border px-3 py-2 font-mono text-xs transition ${
              activeFilter === filter
                ? 'border-[#83f28f]/50 bg-[#83f28f]/10 text-[#83f28f]'
                : 'border-white/10 text-gray-400 hover:border-white/30 hover:text-white'
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {filteredProjects.length === 0 ? (
        <p className="mt-8 rounded-lg border border-white/10 p-5 text-sm text-gray-400">
          No projects in this category yet. Try another filter.
        </p>
      ) : (
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {filteredProjects.map((project, index) => (
            <button
              key={project.id}
              type="button"
              onClick={() => setSelectedId(project.id)}
              className={`min-w-0 rounded-xl border p-5 text-left transition ${
                selectedId === project.id
                  ? 'border-[#83f28f]/50 bg-[#83f28f]/[0.04]'
                  : 'border-white/10 bg-[#11151a] hover:border-white/25'
              }`}
            >
              <div className="flex items-start justify-between gap-3">
                <span className="font-mono text-xs text-[#83f28f]">
                  PROJECT {String(index + 1).padStart(2, '0')}
                </span>
                <ArrowUpRight
                  size={16}
                  className="shrink-0 text-gray-500"
                />
              </div>

              <h3 className="mt-5 break-words text-lg font-semibold">
                {project.title}
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-400">
                {project.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.stack.map((technology) => (
                  <span
                    key={technology}
                    className="rounded border border-white/10 px-2 py-1 font-mono text-xs text-gray-400"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              <div className="mt-5 flex flex-wrap items-center justify-between gap-2 border-t border-white/10 pt-4">
                <span className="text-xs text-gray-500">
                  {project.category}
                </span>
                <span className="text-xs text-gray-400">
                  {project.status}
                </span>
              </div>
            </button>
          ))}
        </div>
      )}

      {selectedProject && (
        <div className="mt-5 rounded-xl border border-white/10 bg-[#11151a] p-5 sm:p-6">
          <p className="font-mono text-xs text-[#83f28f]">
            // SELECTED PROJECT
          </p>

          <h3 className="mt-3 text-xl font-semibold">
            {selectedProject.title}
          </h3>

          <p className="mt-3 text-sm leading-6 text-gray-400">
            {selectedProject.description}
          </p>

          <ul className="mt-4 space-y-2">
            {selectedProject.highlights.map((highlight) => (
              <li
                key={highlight}
                className="flex gap-2 text-sm leading-6 text-gray-300"
              >
                <span className="text-[#83f28f]">›</span>
                <span>{highlight}</span>
              </li>
            ))}
          </ul>

          {selectedProject.github && (
            <a
              href={selectedProject.github}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-md border border-white/15 px-3 py-2 text-sm text-gray-300 hover:border-[#83f28f]/50 hover:text-[#83f28f]"
            >
              <GitBranchIcon size={15} />
              View on GitHub
              <ArrowUpRight size={14} />
            </a>
          )}
        </div>
      )}
    </section>
  )
}
