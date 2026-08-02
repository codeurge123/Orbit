import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className="fixed left-1/2 top-0 z-50 w-full max-w-7xl -translate-x-1/2 bg-[#fbfaf7]/35 backdrop-blur-2xl">
      <div className="flex items-center justify-between px-5 py-4 sm:px-8 lg:px-12">
        <div className="flex items-center gap-3">
          <span className="font-mono text-base font-semibold uppercase tracking-[0.16em] sm:text-lg">
            Orbit
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-[10px] font-semibold uppercase tracking-[0.12em] text-[#49433f] sm:text-xs md:gap-10">
          <Link to="/">Runtime</Link>
          <Link to="/">Docs</Link>
          <Link
            to="https://github.com/codeurge123/Orbit"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header