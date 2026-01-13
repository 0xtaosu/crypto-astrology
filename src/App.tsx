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

    // Simulate calculation time
    await new Promise(resolve => setTimeout(resolve, 2500))

    const fortune = analyzeToken(input)
    setResult(fortune)
    setIsLoading(false)
  }

  const handleReset = () => {
    setResult(null)
  }

  return (
    <div className="min-h-screen relative overflow-hidden bg-background text-text-primary selection:bg-primary selection:text-white">
      {/* Subtle Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-primary/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-secondary/10 blur-[120px] rounded-full" />
      </div>

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-6 py-12 md:py-20 max-w-4xl">
        <header className="text-center mb-16 animate-fade-in">
          <h1 className="font-serif text-4xl md:text-6xl font-bold mb-4 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-text-secondary">
            Crypto Astrology
          </h1>
          <p className="font-sans text-lg md:text-xl text-text-muted font-light tracking-wide">
            链上玄学 · Decoding Token Destiny
          </p>
        </header>

        <main className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
          {isLoading && <LoadingAnimation />}

          {!isLoading && !result && (
            <InputForm onSubmit={handleAnalyze} />
          )}

          {!isLoading && result && (
            <FortuneReport result={result} onReset={handleReset} />
          )}
        </main>
      </div>
    </div>
  )
}

export default App
