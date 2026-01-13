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
    <div className="min-h-screen font-serif flex flex-col items-center pt-4">
      <div className="w-full max-w-5xl bg-surface border-4 border-yellow-400 p-1 mb-4 shadow-[0_0_20px_#FFFF00]">
        
        {/* Header Marquee */}
        <div className="bg-black text-[#00FF00] font-mono p-1 border-b-2 border-yellow-400 mb-4 overflow-hidden whitespace-nowrap">
           <div className="animate-[marquee_20s_linear_infinite] inline-block">
            ★ ★ ★ WELCOME TO GRANDMASTER TAO'S CYBER-DOJO ★ ★ ★ PREDICTING YOUR TOKENS DESTINY WITH ANCIENT WISDOM ★ ★ ★ NEW: ETHEREUM MERGE ANALYSIS ADDED ★ ★ ★ 
           </div>
        </div>

        {/* Banner */}
        <header className="text-center mb-8 relative">
           <div className="absolute top-0 left-4 animate-spin [animation-duration:5s]">
              <img src="/src/assets/yinyang.png" alt="Yin Yang" className="w-16 h-16 opacity-80" />
           </div>
           <div className="absolute top-0 right-4 animate-spin [animation-duration:5s] direction-reverse">
              <img src="/src/assets/yinyang.png" alt="Yin Yang" className="w-16 h-16 opacity-80" />
           </div>

           <h1 className="text-6xl font-bold text-yellow-400 drop-shadow-[4px_4px_0_#FF0000] tracking-widest mb-2 font-serif">
             易经 • 算命
           </h1>
           <h2 className="text-2xl text-[#00FF00] font-mono tracking-tighter">
             == THE BOOK OF CHANGES PREDICTOR ==
           </h2>
        </header>

        {/* Main Content Area */}
        <div className="flex flex-col md:flex-row gap-4 px-4">
          
          {/* Left Sidebar */}
          <aside className="w-full md:w-64 border-2 border-[#00FF00] p-2 bg-black/80 h-fit">
            <div className="bg-[#000088] text-white text-center font-bold mb-2 py-1 border border-white">
              MENU
            </div>
            <ul className="space-y-2 text-[#FFFF00] list-disc list-inside px-2">
              <li className="cursor-pointer hover:bg-white hover:text-black">Master's Home</li>
              <li className="cursor-pointer hover:bg-white hover:text-black">Services</li>
              <li className="cursor-pointer hover:bg-white hover:text-black">Testimonials</li>
              <li className="cursor-pointer hover:bg-white hover:text-black">Contact</li>
              <li className="cursor-pointer hover:bg-white hover:text-black">Links</li>
            </ul>

            <div className="mt-8 text-center">
               <div className="bg-[#FF0000] text-white font-bold animate-pulse mb-2">HOT!</div>
               <p className="text-xs text-[#00FF00]">
                 Bitcoin Price Prediction 2026 available now!
               </p>
            </div>
          </aside>

          {/* Center Content */}
          <main className="flex-1 border-2 border-white bg-black/90 p-4 min-h-[400px]">
             {isLoading && <LoadingAnimation />}

             {!isLoading && !result && (
               <div className="text-center">
                 <p className="mb-4 text-[#FFFF00] text-lg">
                   Welcome, seeker. Please enter the token details below to consult the Oracle.
                 </p>
                 <InputForm onSubmit={handleAnalyze} />
               </div>
             )}

             {!isLoading && result && (
               <FortuneReport result={result} onReset={handleReset} />
             )}
          </main>

          {/* Right Sidebar */}
          <aside className="w-full md:w-48 border-2 border-[#00FF00] p-2 bg-black/80 h-fit hidden md:block">
             <div className="bg-[#008800] text-white text-center font-bold mb-2 py-1 border border-white">
               LATEST WINNERS
             </div>
             <marquee direction="up" scrollamount="2" className="h-40 text-xs text-[#FFFF00]">
               <p>0x83... won 1000x!</p>
               <p>PEPE mooned!</p>
               <p>DOGE forever!</p>
               <p>Whale alert!</p>
               <p>Consult the stars!</p>
             </marquee>
             
             <div className="mt-4 border-t border-[#00FF00] pt-2 text-center">
               <img src="/src/assets/yinyang.png" className="w-12 h-12 mx-auto animate-spin mb-2" />
               <p className="text-[10px] text-gray-400">Site Protected by Feng Shui</p>
             </div>
          </aside>

        </div>

        {/* Footer */}
        <footer className="mt-8 border-t-2 border-yellow-400 pt-2 text-center text-xs text-gray-400 pb-2">
          <p>COPYRIGHT © 2000-2005 MASTER TAO. ALL RIGHTS RESERVED.</p>
          <p>Best viewed with Internet Explorer 6.0 at 800x600 resolution.</p>
          <p className="mt-2 text-[#FF0000]">You are visitor: 0088888</p>
        </footer>

      </div>
      
      {/* Marquee Animation Definition since Tailwind config might not have it yet */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
      `}</style>
    </div>
  )
}

export default App
