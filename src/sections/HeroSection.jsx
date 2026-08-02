import InstallCommand from '../components/InstallCommand.jsx'
import { installCommand } from '../data/homePage.js'

function HeroSection() {
  return (
    <section className="px-4 pb-14 pt-16 text-center sm:px-8 sm:pb-20 sm:pt-24 lg:px-12 lg:pb-24 lg:pt-32">
      <div className="mx-auto mb-8 inline-flex max-w-full flex-col overflow-hidden rounded-lg border border-[#292625] bg-white font-mono text-[10px] font-semibold uppercase tracking-[0.08em] sm:mb-10 sm:flex-row sm:text-xs">
        <span className="bg-[#292625] px-4 py-2 text-white">Public</span>
        <span className="px-4 py-2 leading-5 text-[#49433f]">
          Orbit is launching as an open-source AI runtime
        </span>
      </div>

      <h1 className="mx-auto max-w-5xl text-3xl font-medium leading-[1.04] tracking-normal text-[#292625] sm:text-5xl lg:text-6xl">
        Your computer should work for you.
        <span className="block">Orbit makes that happen.</span>
      </h1>

      <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-[#756e68] sm:mt-6 sm:text-base sm:leading-7">
        Orbit powers a reusable agent runtime for CLI, desktop, VS Code, and
        future API servers. Start from the terminal, choose a provider, and run
        focused AI tasks.
      </p>

      <InstallCommand command={installCommand} />
    </section>
  )
}

export default HeroSection
