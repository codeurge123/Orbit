function TypewriterCommand({ command, description }) {
  return (
    <p
      key={command}
      className="typewriter-line inline-block max-w-full overflow-hidden whitespace-nowrap align-bottom"
    >
      <span className="font-semibold">{command}</span>
      <span className="text-[#8a827b]"> — {description}</span>
    </p>
  )
}

export default TypewriterCommand
