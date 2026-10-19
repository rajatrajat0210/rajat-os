import { useState } from 'react'
import { ArrowUpRight, GraduationCap } from 'lucide-react'

export default function Education() {
  const [revealed, setRevealed] = useState(false)

  return (
    <section
      id="education"
      className="mx-auto max-w-5xl scroll-mt-8 border-t border-white/10 py-12 sm:py-16"
    >
      <div className="mb-7 flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="flex items-center gap-2 font-mono text-xs tracking-widest text-[#83f28f]">
            <GraduationCap size={15} />
            // ACADEMIC RECORD
          </p>
          <h2 className="mt-3 text-2xl font-semibold sm:text-3xl">
            Where I learned to engineer.
          </h2>
        </div>
        <span className="font-mono text-xs text-gray-500">EDUCATION.JSON · 01 RECORD</span>
      </div>

      <button
        type="button"
        aria-expanded={revealed}
        aria-label={`${revealed ? 'Hide' : 'Reveal'} education details for York University`}
        onClick={() => setRevealed((open) => !open)}
        className={`group relative block min-h-[330px] w-full overflow-hidden rounded-2xl border bg-[#0d1013] text-left transition duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#83f28f] sm:min-h-[350px] ${revealed ? 'border-[#83f28f]/45' : 'border-white/10 hover:border-[#83f28f]/35'}`}
      >
        <div
          className={`absolute inset-0 transition-opacity duration-500 ${revealed ? 'opacity-100' : 'opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100'}`}
          aria-hidden="true"
        >
          <img
            src="/images/education/bergeron-centre.jpg"
            alt=""
            className="absolute inset-0 h-full w-full object-cover object-center transition duration-700 group-hover:scale-[1.03]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#080b0e]/95 via-[#080b0e]/85 to-[#080b0e]/25" />
          <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(131,242,143,0.035)_50%)] bg-[length:100%_5px] mix-blend-screen" />
        </div>

        <div
          className={`relative z-10 flex min-h-[330px] flex-col justify-between p-5 transition-opacity duration-300 sm:min-h-[350px] sm:p-8 ${revealed ? 'opacity-0' : 'opacity-100 group-hover:opacity-0 group-focus-visible:opacity-0'}`}
        >
          <div className="flex items-center justify-between gap-4 font-mono text-[10px] tracking-widest text-gray-500 sm:text-xs">
            <span className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#83f28f] shadow-[0_0_10px_rgba(131,242,143,0.7)]" />
              RECORD 01 · VERIFIED
            </span>
            <span>HOVER / TAP TO DECODE</span>
          </div>

          <div>
            <p className="font-mono text-xs text-[#83f28f]">YORK UNIVERSITY</p>
            <h3 className="mt-2 text-2xl font-semibold sm:text-4xl">
              Lassonde School
              <br />
              <span className="text-gray-400">of Engineering</span>
            </h3>
            <p className="mt-4 max-w-2xl text-sm leading-6 text-gray-400">
              Bachelor of Engineering in Computer Engineering
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-4 font-mono text-[10px] text-gray-500 sm:text-xs">
            <span>TORONTO, ON · CANADA</span>
            <span>JAN 2020 — MAY 2024</span>
          </div>
        </div>

        <div
          className={`absolute inset-0 z-20 flex items-end transition-opacity duration-500 ${revealed ? 'opacity-100' : 'pointer-events-none opacity-0 group-hover:pointer-events-auto group-hover:opacity-100 group-focus-visible:pointer-events-auto group-focus-visible:opacity-100'}`}
          aria-hidden={!revealed}
        >
          <div className="w-full p-5 sm:p-8">
            <p className="font-mono text-[10px] tracking-[0.2em] text-[#83f28f] sm:text-xs">
              $ cat ./education/record.json
            </p>
            <h3 className="mt-3 max-w-2xl text-2xl font-semibold text-white sm:text-4xl">
              Computer Engineering
            </h3>
            <p className="mt-2 text-sm text-gray-200 sm:text-base">
              Bachelor of Engineering · Specialized Honours
            </p>
            <div className="mt-5 flex flex-wrap gap-2 font-mono text-[10px] text-[#d6dce4] sm:text-xs">
              <span className="rounded border border-white/20 bg-black/30 px-3 py-2">YORK UNIVERSITY</span>
              <span className="rounded border border-white/20 bg-black/30 px-3 py-2">LASSONDE SCHOOL OF ENGINEERING</span>
              <span className="rounded border border-white/20 bg-black/30 px-3 py-2">2020 — 2024</span>
            </div>
            <p className="mt-5 inline-flex items-center gap-2 font-mono text-[10px] text-[#83f28f] sm:text-xs">
              BERGERON CENTRE · KEELE CAMPUS <ArrowUpRight size={13} />
            </p>
          </div>
        </div>
      </button>

      <p className="mt-3 text-right font-mono text-[10px] text-gray-600">
        Campus photo: <a
          href="https://lassonde.yorku.ca/official-opening-bergeron-centre-engineering-excellence"
          target="_blank"
          rel="noreferrer"
          className="transition hover:text-[#83f28f]"
        >
          Lassonde School of Engineering
        </a>
      </p>
    </section>
  )
}
