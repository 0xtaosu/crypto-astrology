import { FortuneResult } from '../types'
import { generatePDF } from '../lib/pdf'

interface FortuneReportProps {
  result: FortuneResult
  onReset: () => void
}

const ZODIAC_SYMBOLS: Record<string, string> = {
  'Aries': '♈',
  'Taurus': '♉',
  'Gemini': '♊',
  'Cancer': '♋',
  'Leo': '♌',
  'Virgo': '♍',
  'Libra': '♎',
  'Scorpio': '♏',
  'Sagittarius': '♐',
  'Capricorn': '♑',
  'Aquarius': '♒',
  'Pisces': '♓',
}

export default function FortuneReport({ result, onReset }: FortuneReportProps) {
  const handleDownloadPDF = () => {
    generatePDF(result)
  }

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-neon-cyan'
    if (score >= 65) return 'text-yellow-400'
    if (score >= 50) return 'text-orange-400'
    return 'text-neon-red'
  }

  const getRiskColor = (risk: string) => {
    if (risk === 'Low') return 'bg-neon-cyan/20 text-neon-cyan border-neon-cyan'
    if (risk === 'Medium') return 'bg-yellow-500/20 text-yellow-400 border-yellow-400'
    if (risk === 'High') return 'bg-orange-500/20 text-orange-400 border-orange-400'
    return 'bg-neon-red/20 text-neon-red border-neon-red'
  }

  const scoreCircumference = result.fortuneScore * 3.14
  const fortuneScoreColor = getScoreColor(result.fortuneScore)
  const riskColorClass = getRiskColor(result.riskLevel)

  const sentimentColor = 
    result.western.marketSentiment === 'Bullish' ? 'bg-green-500/20 text-green-400 border-green-400' :
    result.western.marketSentiment === 'Bearish' ? 'bg-red-500/20 text-red-400 border-red-400' :
    'bg-yellow-500/20 text-yellow-400 border-yellow-400'

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="text-center">
        <h2 className="font-orbitron text-3xl font-black text-neon-cyan mb-2">
          {result.tokenName}
        </h2>
        <p className="font-mono text-xs text-neon-cyan/40 break-all">
          {result.contractAddress}
        </p>
      </div>

      <div className="relative">
        <div className="absolute -inset-1 bg-gradient-to-r from-neon-purple to-neon-cyan rounded-lg blur opacity-30" />
        <div className="relative bg-void-light border-2 border-neon-purple rounded-lg p-8 backdrop-blur-sm">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <p className="font-mono text-sm text-neon-cyan/60 mb-2">FORTUNE SCORE</p>
              <div className="relative inline-block">
                <svg className="w-32 h-32" viewBox="0 0 120 120">
                  <circle cx="60" cy="60" r="50" fill="none" stroke="#0a0a0a" strokeWidth="8" />
                  <circle
                    cx="60" cy="60" r="50" fill="none" stroke="url(#gradient)" strokeWidth="8"
                    strokeDasharray={scoreCircumference + ' 314'}
                    strokeLinecap="round" transform="rotate(-90 60 60)"
                  />
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#00F0FF" />
                      <stop offset="100%" stopColor="#BC13FE" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className={'font-orbitron text-4xl font-black ' + fortuneScoreColor}>
                    {result.fortuneScore}
                  </span>
                </div>
              </div>
              <p className="font-chinese text-lg text-neon-purple mt-2">运势评分</p>
            </div>

            <div className="text-center flex flex-col justify-center">
              <p className="font-mono text-sm text-neon-cyan/60 mb-3">RISK LEVEL</p>
              <div className={'inline-block px-6 py-3 rounded-lg border-2 ' + riskColorClass}>
                <p className="font-orbitron text-2xl font-bold">{result.riskLevel}</p>
              </div>
              <p className="font-chinese text-lg text-neon-purple mt-3">风险等级</p>
            </div>

            <div className="text-center flex flex-col justify-center">
              <p className="font-mono text-sm text-neon-cyan/60 mb-3">INVESTMENT ADVICE</p>
              <div className="bg-neon-cyan/10 border-2 border-neon-cyan rounded-lg px-4 py-3">
                <p className="font-chinese text-xl text-neon-cyan font-bold">
                  {result.investmentAdvice}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="relative">
          <div className="absolute -inset-0.5 bg-neon-purple/30 rounded-lg blur" />
          <div className="relative bg-void-light border-2 border-neon-purple rounded-lg p-6 backdrop-blur-sm">
            <h3 className="font-chinese text-2xl text-neon-purple mb-4 flex items-center gap-2">
              <span>紫微斗数</span>
              <span className="font-mono text-xs text-neon-purple/60">ZIWEI ANALYSIS</span>
            </h3>
            
            <div className="space-y-4">
              <div>
                <p className="font-mono text-xs text-neon-cyan/60 mb-1">命宫主星 LIFE PALACE</p>
                <p className="font-chinese text-xl text-neon-cyan">【{result.ziwei.lifePalaceStar}】</p>
              </div>
              
              <div>
                <p className="font-mono text-xs text-neon-cyan/60 mb-1">财帛宫主星 WEALTH PALACE</p>
                <p className="font-chinese text-xl text-neon-cyan">【{result.ziwei.wealthPalaceStar}】</p>
              </div>
              
              <div className="border-t border-neon-purple/30 pt-4">
                <p className="font-mono text-xs text-neon-cyan/60 mb-2">详细解读 INTERPRETATION</p>
                <p className="font-chinese text-sm text-neon-cyan/80 leading-relaxed">
                  {result.ziwei.interpretation}
                </p>
              </div>

              <div className="flex gap-4 pt-2">
                <div>
                  <p className="font-mono text-xs text-neon-cyan/60 mb-1">幸运颜色</p>
                  <div className="flex items-center gap-2">
                    <div 
                      className="w-8 h-8 rounded border-2 border-neon-cyan"
                      style={{ backgroundColor: result.ziwei.luckyColor }}
                    />
                    <span className="font-mono text-xs text-neon-cyan/80">
                      {result.ziwei.luckyColor}
                    </span>
                  </div>
                </div>
                <div>
                  <p className="font-mono text-xs text-neon-cyan/60 mb-1">幸运数字</p>
                  <div className="w-8 h-8 rounded border-2 border-neon-cyan flex items-center justify-center">
                    <span className="font-orbitron text-lg font-bold text-neon-cyan">
                      {result.ziwei.luckyNumber}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-0.5 bg-neon-cyan/30 rounded-lg blur" />
          <div className="relative bg-void-light border-2 border-neon-cyan rounded-lg p-6 backdrop-blur-sm">
            <h3 className="font-orbitron text-xl text-neon-cyan mb-4 flex items-center gap-2">
              <span>WESTERN ASTROLOGY</span>
              <span className="font-chinese text-sm text-neon-cyan/60">西方星盘</span>
            </h3>
            
            <div className="space-y-4">
              <div>
                <p className="font-mono text-xs text-neon-cyan/60 mb-1">SUN SIGN 太阳星座</p>
                <p className="font-orbitron text-2xl text-neon-cyan">{ZODIAC_SYMBOLS[result.western.sunSign]} {result.western.sunSign}</p>
              </div>
              
              <div>
                <p className="font-mono text-xs text-neon-cyan/60 mb-1">MARKET SENTIMENT 市场情绪</p>
                <div className={'inline-block px-4 py-2 rounded border ' + sentimentColor}>
                  <p className="font-orbitron font-bold">{result.western.marketSentiment}</p>
                </div>
              </div>
              
              <div className="border-t border-neon-cyan/30 pt-4">
                <p className="font-mono text-xs text-neon-cyan/60 mb-2">ASPECT INFLUENCE 相位影响</p>
                <p className="font-chinese text-sm text-neon-cyan/80 leading-relaxed">
                  {result.western.aspectInfluence}
                </p>
              </div>

              <div className="pt-2">
                <p className="font-mono text-xs text-neon-cyan/60 mb-2">GENESIS TIME</p>
                <p className="font-mono text-xs text-neon-cyan/80">
                  {result.genesisDate.toLocaleString('zh-CN')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-4 justify-center">
        <button onClick={handleDownloadPDF} className="relative group">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-neon-cyan to-neon-purple rounded-lg blur opacity-50 group-hover:opacity-100 transition" />
          <div className="relative bg-void border-2 border-neon-cyan rounded-lg px-6 py-3 font-mono text-neon-cyan group-hover:text-neon-purple transition-colors">
            📥 DOWNLOAD REPORT
          </div>
        </button>

        <button onClick={onReset} className="relative group">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-neon-purple to-neon-red rounded-lg blur opacity-50 group-hover:opacity-100 transition" />
          <div className="relative bg-void border-2 border-neon-purple rounded-lg px-6 py-3 font-mono text-neon-purple group-hover:text-neon-red transition-colors">
            🔄 NEW ANALYSIS
          </div>
        </button>
      </div>

      <div className="text-center">
        <p className="font-mono text-xs text-neon-red/60 max-w-2xl mx-auto">
          ⚠️ 本报告仅供娱乐参考，不构成任何投资建议。加密货币投资风险极高，请谨慎决策。<br/>
          FOR ENTERTAINMENT PURPOSES ONLY. NOT FINANCIAL ADVICE.
        </p>
      </div>
    </div>
  )
}
