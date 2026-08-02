import { Link } from 'react-router-dom'
import heroImg from '../assets/orbit.jpg'
import TypewriterCommand from '../components/TypewriterCommand.jsx'
import { commandRows } from '../data/homePage.js'

function CommandPreviewSection({ activeLine }) {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-14 sm:px-8 sm:pb-20 lg:px-12">
      <div className="overflow-hidden border border-[#e8e2da] bg-[#f2eee8]">
        <div className="relative grid min-h-[360px] place-items-center px-4 py-10 sm:min-h-[460px] sm:px-6 sm:py-14 lg:min-h-[520px] lg:py-16">
          <img
            alt="Mountain landscape behind Orbit command box"
            className="absolute inset-0 h-full w-full object-cover"
            src={heroImg}
          />
          <div className="absolute inset-0 bg-black/5" />
          <div className="relative w-full max-w-3xl rounded-xl border-2 border-[#dd765d] bg-white p-4 shadow-[0_24px_90px_rgba(41,38,37,0.28)] sm:p-5">
            <div className="min-h-5 font-mono text-[10px] leading-5 text-[#292625] sm:min-h-6 sm:text-xs sm:leading-6 lg:text-sm">
              <TypewriterCommand command={activeLine[0]} description={activeLine[1]} />
            </div>
            <div className="mt-6 flex items-center justify-between sm:mt-8">
              <span className="font-mono text-xl text-[#292625] sm:text-2xl">+</span>
              <Link
                to="/"
                className="grid size-8 cursor-pointer place-items-center rounded-full bg-[#dd765d] font-mono text-base text-white sm:size-9 sm:text-lg"
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
              className="border-b border-[#e8e2da] p-5 text-left hover:bg-[#f2eee8] sm:p-7 md:border-b-0 md:border-r last:md:border-r-0"
            >
              <h2 className="font-mono text-base font-semibold text-[#292625]">
                {command}
              </h2>
              <p className="mt-3 text-sm leading-6 text-[#756e68]">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CommandPreviewSection
