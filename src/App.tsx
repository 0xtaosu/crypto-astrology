import { useState } from 'react'
import InputForm from './components/InputForm'
import FortuneReport from './components/FortuneReport'
import LoadingAnimation from './components/LoadingAnimation'
import { TokenInput, FortuneResult } from './types'
import { analyzeToken } from './lib/astrology'

function App() {
  const [isLoading, setIsLoading] = useState(false)
  const [result, setResult] = useState<FortuneResult | null>(null)

  const handleAnalyze = async (input: TokenInput) => {
    setIsLoading(true)
    setResult(null)
    
    // Simulate calculation time for ritual feel
    await new Promise(resolve => setTimeout(resolve, 2500))
    
    const fortune = analyzeToken(input)
    setResult(fortune)
    setIsLoading(false)
  }

  const handleReset = () => {
    setResult(null)
  }

  return (
    <div className="min-h-screen bg-void relative overflow-hidden">
      {/* Background effects */}
      <div className="fixed inset-0 bg-gradient-to-b from-neon-purple/5 via-transparent to-neon-cyan/5 pointer-events-none" />
      <div className="fixed inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDBGMEZGIiBzdHJva2Utd2lkdGg9IjAuNSIgb3BhY2l0eT0iMC4xIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20 pointer-events-none" />
      
      {/* Main content */}
      <div className="relative z-10 container mx-auto px-4 py-8">
        <header className="text-center mb-12">
          <h1 className="font-orbitron text-5xl md:text-7xl font-black mb-4 text-neon-cyan glitch" data-text="CRYPTO ASTROLOGY">
            CRYPTO ASTROLOGY
          </h1>
          <p className="font-chinese text-2xl md:text-3xl text-neon-purple mb-2">
            赛博占星 · 链上玄学
          </p>
          <p className="font-mono text-sm text-neon-cyan/60">
            {'>'} DECODE THE FORTUNE OF YOUR TOKENS {'<'}
          </p>
        </header>

        {isLoading && <LoadingAnimation />}
        
        {!isLoading && !result && (
          <InputForm onSubmit={handleAnalyze} />
        )}
        
        {!isLoading && result && (
          <FortuneReport result={result} onReset={handleReset} />
        )}
      </div>
    </div>
  )
}

export default App
