import { useEffect, useState } from 'react'
import heroImg from './assets/orbit.jpg'
import { Link } from 'react-router-dom'

const installCommand = 'curl request here'

const commandRows = [
  ['orbit init', 'Choose OpenAI mini or Ollama'],
  ['orbit chat', 'Start an interactive LLM session'],
  ['orbit run "<cmd>"', 'Run one focused task from the terminal'],
]

const writingLines = [
  ['orbit init', 'select your provider and save local config'],
  ['orbit chat', 'open a live conversation with your LLM'],
  ['orbit run "<cmd>"', 'send one focused task from the terminal'],
  ['orbit --help', 'see every Orbit command before you start'],
]

const companyStats = [
  ['4', 'Runtime surfaces planned'],
  ['4+', 'Providers in launch scope'],
  ['15 Sept 2026', 'Public launch target'],
  ['100%', 'Open-source runtime focus'],
]

const companySignals = ['CLI', 'Desktop', 'VS Code', 'API server']

const footerGroups = [
  {
    title: 'Runtime',
    items: ['Agent core', 'Providers', 'Tools', 'Memory'],
  },
  {
    title: 'Commands',
    items: ['init', 'chat', 'run', '--help'],
  },
  {
    title: 'Providers',
    items: ['OpenAI mini', 'Ollama', 'More soon'],  
  },
  {
    title: 'Project',
    items: ['Docs', 'GitHub', 'Changelog'],
  },
]

function App() {
  const [activeLineIndex, setActiveLineIndex] = useState(0)
  const activeLine = writingLines[activeLineIndex]

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveLineIndex((currentIndex) => (currentIndex + 1) % writingLines.length)
    }, 3600)

    return () => window.clearInterval(intervalId)
  }, [])

  return (
    <main className="min-h-screen bg-[#fbfaf7] px-5 py-5 text-[#292625] sm:px-8">
      <div className="mx-auto max-w-7xl border-x border-[#e8e2da]">
        <header className="flex items-center justify-between px-5 py-4 sm:px-8 lg:px-12">
          <div className="flex items-center gap-3">
            <span className="font-mono text-lg font-semibold uppercase tracking-[0.16em]">
              Orbit
            </span>
          </div>

          <div className="hidden items-center gap-10 font-mono text-xs font-semibold uppercase tracking-[0.12em] text-[#49433f] md:flex">
            <Link to="/">Runtime</Link>
            <Link to="/">Docs</Link>
            <Link to="https://github.com/codeurge123/Orbit" target="_blank" rel="noopener noreferrer">
              GitHub
            </Link>
          </div>
        </header>

        <section className="px-5 pb-20 pt-24 text-center sm:px-8 lg:px-12 lg:pb-24 lg:pt-32">
          <div className="mx-auto mb-10 inline-flex max-w-full overflow-hidden rounded-lg border border-[#292625] bg-white font-mono text-xs font-semibold uppercase tracking-[0.08em]">
            <span className="bg-[#292625] px-4 py-2 text-white">Public</span>
            <span className="px-4 py-2 text-[#49433f]">
              Orbit is launching as an open-source AI runtime
            </span>
          </div>

          <h1 className="mx-auto max-w-5xl text-4xl font-medium leading-[1.02] tracking-normal text-[#292625] sm:text-5xl lg:text-6xl">
            Your computer should work for you. 
            <p>
            Orbit makes that happen.
            </p>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-[#756e68]">
            Orbit powers a reusable agent runtime for CLI, desktop, VS Code, and
            future API servers. Start from the terminal, choose a provider, and
            run focused AI tasks.
          </p>

          <div className="mx-auto mt-10 max-w-2xl rounded-xl border-2 border-[#dd765d] bg-white p-3 text-left shadow-[0_24px_80px_rgba(41,38,37,0.08)]">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <code className="overflow-x-auto whitespace-nowrap px-2 py-2 font-mono text-sm text-[#292625] sm:text-base">
                {installCommand}
              </code>
              <Link
                to="/"
                className="rounded-lg bg-[#dd765d] px-3.5 py-2 text-center font-mono text-[10px] font-semibold uppercase tracking-[0.1em] text-white"
              >
                Install
              </Link>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 pb-20 sm:px-8 lg:px-12">
          <div className="overflow-hidden border border-[#e8e2da] bg-[#f2eee8]">
            <div className="relative grid min-h-[520px] place-items-center px-6 py-16">
              <img
                alt="Mountain landscape behind Orbit command box"
                className="absolute inset-0 h-full w-full object-cover"
                src={heroImg}
              />
              <div className="absolute inset-0 bg-black/5" />
              <div className="relative w-full max-w-3xl rounded-xl border-2 border-[#dd765d] bg-white p-5 shadow-[0_24px_90px_rgba(41,38,37,0.28)]">
                <div className="min-h-6 font-mono text-xs leading-6 text-[#292625] sm:text-sm">
                  <p
                    key={activeLine[0]}
                    className="typewriter-line max-w-full overflow-hidden whitespace-nowrap"
                  >
                    <span className="font-semibold">{activeLine[0]}</span>
                    <span className="text-[#8a827b]"> — {activeLine[1]}</span>
                  </p>
                </div>
                <div className="mt-8 flex items-center justify-between">
                  <span className="font-mono text-2xl text-[#292625]">+</span>
                  <Link
                    to="/"
                    className="grid size-9 place-items-center cursor-pointer rounded-full bg-[#dd765d] font-mono text-lg text-white"
                  >
                    ↑
                  </Link>
                </div>
              </div>
            </div>

            <div className="grid border-t border-[#e8e2da] bg-[#fbfaf7] md:grid-cols-3">
              {commandRows.map(([command, description]) => (
                <div
                  key={command}
                  className="border-b border-[#e8e2da] hover:bg-[#f2eee8] p-7 text-left md:border-b-0 md:border-r last:md:border-r-0"
                >
                  <h2 className="font-mono text-base font-semibold text-[#292625]">
                    {command}
                  </h2>
                  <p className="mt-3 text-sm leading-6 text-[#756e68]">
                    {description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 pb-20 sm:px-8 lg:px-12">
          <div className="border border-[#e8e2da] bg-[#fbfaf7]">
            <div className="grid md:grid-cols-4">
              {companyStats.map(([value, label]) => (
                <div
                  key={label}
                  className="border-b border-[#e8e2da] p-8 text-center md:border-b-0 md:border-r last:md:border-r-0"
                >
                  <p className="font-mono text-2xl text-[#292625]">{value}</p>
                  <p className="mt-3 text-sm leading-6 text-[#756e68]">{label}</p>
                </div>
              ))}
            </div>

            <div className="border-t border-[#e8e2da] px-6 py-8 text-center">
              <p className="font-mono text-sm font-semibold uppercase tracking-[0.12em] text-[#292625]">
                Orbit is a company building an open-source AI runtime, coming by 15 Sept 2026.
              </p>
            </div>

            <div className="grid border-t border-[#e8e2da] md:grid-cols-4">
              {companySignals.map((signal) => (
                <div
                  key={signal}
                  className="border-b border-[#e8e2da] p-8 text-center md:border-b-0 md:border-r last:md:border-r-0"
                >
                  <span className="font-mono text-sm font-semibold uppercase tracking-[0.12em] text-[#49433f]">
                    {signal}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <footer className="mx-auto max-w-6xl px-5 pb-10 sm:px-8 lg:px-12">
          <div className="border border-[#e8e2da]">
            <div className="grid lg:grid-cols-[1.2fr_1fr]">
              <div className="border-b border-[#e8e2da] p-8 lg:border-b-0 lg:border-r">
                <h2 className="text-3xl font-medium leading-tight text-[#292625] sm:text-4xl">
                  Built for the command line first.
                </h2>
                <p className="mt-5 max-w-xl text-sm leading-6 text-[#756e68] sm:text-base">
                  Configure once with <span className="font-mono">orbit init</span>,
                  then chat or run tasks with your selected provider.
                </p>
              </div>

              <div className="grid grid-cols-2">
                {footerGroups.map((group) => (
                  <div key={group.title} className="border-b border-r border-[#e8e2da] p-6">
                    <h3 className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-[#8a827b]">
                      {group.title}
                    </h3>
                    <ul className="mt-5 space-y-3 font-mono text-xs font-semibold uppercase tracking-[0.08em] text-[#49433f]">
                      {group.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-4 border-t border-[#e8e2da] p-8 font-mono text-xs font-semibold uppercase tracking-[0.12em] text-[#8a827b] sm:flex-row sm:items-center sm:justify-between">
              <span>Orbit</span>
              <span>Open-source AI runtime</span>
            </div>
          </div>
        </footer>
      </div>
    </main>
  )
}

export default App
