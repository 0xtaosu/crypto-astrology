import { FortuneResult } from '../types'
import { generatePDF } from '../lib/pdf'

interface FortuneReportProps {
  result: FortuneResult
  onReset: () => void
}

export default function FortuneReport({ result, onReset }: FortuneReportProps) {
  const handleDownloadPDF = () => {
    generatePDF(result)
  }

  return (
    <div className="border border-white bg-black font-mono text-sm shadow-xl max-w-2xl mx-auto">
      <div className="bg-white text-black text-center font-bold border-b border-black py-1">
        :: ORACLE OUTPUT LOG ::
      </div>
      <div className="p-4 space-y-4 text-green-500">
        <div className="border-b border-green-800 pb-2">
          <p className="text-white">TARGET: <span className="text-yellow-400">{result.tokenName.toUpperCase()}</span></p>
          <p className="text-gray-400 text-xs">{result.contractAddress}</p>
        </div>

        <div className="grid grid-cols-2 gap-4 border-b border-green-800 pb-4">
          <div className="text-center">
            <p className="text-gray-400 mb-1">FORTUNE SCORE</p>
            <div className="text-4xl font-bold text-yellow-400 animate-pulse">
              [{result.fortuneScore}]
            </div>
          </div>
          <div className="text-center">
            <p className="text-gray-400 mb-1">RISK LEVEL</p>
            <div className={`text-xl font-bold border-2 inline-block px-2 ${result.riskLevel === 'High' ? 'border-red-500 text-red-500' : 'border-green-500 text-green-500'}`}>
              {result.riskLevel.toUpperCase()}
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <p className="text-white bg-blue-900 inline-block px-1">:: ZIWEI DOU SHU ANALYSIS ::</p>
          <p>Life Star: <span className="text-yellow-400">{result.ziwei.lifePalaceStar}</span></p>
          <p>Wealth Star: <span className="text-yellow-400">{result.ziwei.wealthPalaceStar}</span></p>

          <div className="border border-green-900 p-2 text-green-300">
            <p className="mb-2">INTERPRETATION_MODULE_V1.0:</p>
            <p className="leading-relaxed">
              {result.ziwei.interpretation}
            </p>
          </div>

          <div className="flex justify-between items-center text-xs">
            <span>Lucky Color: {result.ziwei.luckyColor}</span>
            <span>Lucky No: {result.ziwei.luckyNumber}</span>
          </div>
        </div>

        <div className="border-t border-green-800 pt-2">
          <p className="text-center text-white mb-2">:: VERDICT ::</p>
          <p className="text-center text-xl text-yellow-400 blink">
            {">>>"} {result.investmentAdvice.toUpperCase()} {"<<<"}
          </p>
        </div>

        <div className="flex gap-4 pt-4 border-t-2 border-dashed border-white">
          <button
            onClick={handleDownloadPDF}
            className="flex-1 border border-white hover:bg-white hover:text-black py-2 text-center"
          >
            [ PRINT LOG ]
          </button>
          <button
            onClick={onReset}
            className="flex-1 bg-yellow-500 text-black font-bold py-2 hover:bg-yellow-400"
          >
            [ NEW SCAN ]
          </button>
        </div>
      </div>
    </div>
  )
}

