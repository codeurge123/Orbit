import { Link } from 'react-router-dom'

function InstallCommand({ command }) {
  return (
    <div className="mx-auto mt-8 max-w-2xl rounded-xl border-2 border-[#dd765d] bg-white p-3 text-left shadow-[0_24px_80px_rgba(41,38,37,0.08)] sm:mt-10">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
        <code className="max-w-full overflow-x-auto whitespace-pre-wrap break-all px-2 py-2 font-mono text-[11px] leading-5 text-[#292625] sm:whitespace-nowrap sm:break-normal sm:text-sm lg:text-base">
          {command}
        </code>
        <Link
          to="/"
          className="w-full cursor-pointer rounded-lg bg-[#dd765d] px-3.5 py-2 text-center font-mono text-[10px] font-semibold uppercase tracking-[0.1em] text-white shadow-lg sm:w-auto"
        >
          Install
        </Link>
      </div>
    </div>
  )
}

export default InstallCommand
