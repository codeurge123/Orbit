import { useEffect, useState } from 'react'
import { writingLines } from './data/homePage.js'
import CommandPreviewSection from './sections/CommandPreviewSection.jsx'
import CompanyStatsSection from './sections/CompanyStatsSection.jsx'
import Footer from './sections/Footer.jsx'
import Header from './sections/Header.jsx'
import HeroSection from './sections/HeroSection.jsx'

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
    <main className="min-h-screen bg-[#fbfaf7] px-3 py-3 text-[#292625] sm:px-6 sm:py-5 lg:px-8">
      <div className="mx-auto max-w-7xl border-x border-[#e8e2da]">
        <Header />
        <HeroSection />
        <CommandPreviewSection activeLine={activeLine} />
        <CompanyStatsSection />
        <Footer />
      </div>
    </main>
  )
}

export default App
