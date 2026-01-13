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

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-primary'
    if (score >= 65) return 'text-secondary'
    if (score >= 50) return 'text-text-primary'
    return 'text-text-muted'
  }

  const getRiskColor = (risk: string) => {
    if (risk === 'Low') return 'bg-emerald-50 text-emerald-700 border-emerald-200'
    if (risk === 'Medium') return 'bg-amber-50 text-amber-700 border-amber-200'
    if (risk === 'High') return 'bg-rose-50 text-rose-700 border-rose-200'
    return 'bg-gray-50 text-gray-700 border-gray-200'
  }

  const fortuneScoreColor = getScoreColor(result.fortuneScore)
  const riskColorClass = getRiskColor(result.riskLevel)

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
      {/* Header */}
      <div className="text-center space-y-2">
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-text-primary">
          {result.tokenName}
        </h2>
        <p className="font-mono text-sm text-text-muted break-all">
          {result.contractAddress}
        </p>
      </div>

      {/* Main Score Card */}
      <div className="bg-surface/50 backdrop-blur-sm border border-surfaceHover rounded-xl p-8 shadow-xl">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          <div className="text-center md:border-r border-surfaceHover">
            <p className="text-xs uppercase tracking-wider text-text-muted mb-2">Fortune Score</p>
            <div className={`font-serif text-6xl font-bold ${fortuneScoreColor}`}>
              {result.fortuneScore}
            </div>
            <p className="text-sm text-text-muted mt-2">out of 100</p>
          </div>

          <div className="text-center md:border-r border-surfaceHover">
            <p className="text-xs uppercase tracking-wider text-text-muted mb-3">Risk Level</p>
            <div className={`inline-block px-4 py-2 rounded-full border text-sm font-medium ${riskColorClass}`}>
              {result.riskLevel}
            </div>
          </div>

          <div className="text-center">
            <p className="text-xs uppercase tracking-wider text-text-muted mb-3">Verdict</p>
            <p className="font-serif text-lg text-text-primary italic">
              "{result.investmentAdvice}"
            </p>
          </div>
        </div>
      </div>

      {/* Eastern Astrology - Full Width */}
      <div className="bg-surface/50 backdrop-blur-sm border border-surfaceHover rounded-xl p-6 shadow-sm">
        <h3 className="font-serif text-xl text-text-primary mb-6 flex items-center gap-2 border-b border-surfaceHover pb-4">
          <span>紫微斗数分析</span>
          <span className="text-xs font-sans text-text-muted uppercase tracking-wider ml-auto">Ziwei Dou Shu</span>
        </h3>

        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-xs text-text-muted uppercase tracking-wide mb-1">命宫主星 Life Star</p>
              <p className="font-medium text-lg text-text-primary">{result.ziwei.lifePalaceStar}</p>
            </div>
            <div>
              <p className="text-xs text-text-muted uppercase tracking-wide mb-1">财帛宫主星 Wealth Star</p>
              <p className="font-medium text-lg text-text-primary">{result.ziwei.wealthPalaceStar}</p>
            </div>
          </div>

          <div>
            <p className="text-xs text-text-muted uppercase tracking-wide mb-2">解读 Interpretation</p>
            <p className="text-sm text-text-secondary leading-relaxed">
              {result.ziwei.interpretation}
            </p>
          </div>

          <div className="flex gap-8 pt-2">
            <div>
              <p className="text-xs text-text-muted uppercase tracking-wide mb-2">幸运色 Lucky Color</p>
              <div className="flex items-center gap-2">
                <div
                  className="w-6 h-6 rounded-full border border-surfaceHover shadow-sm"
                  style={{ backgroundColor: result.ziwei.luckyColor }}
                />
                <span className="text-sm text-text-secondary capitalize">
                  {result.ziwei.luckyColor}
                </span>
              </div>
            </div>
            <div>
              <p className="text-xs text-text-muted uppercase tracking-wide mb-2">幸运数字 Lucky Number</p>
              <span className="font-mono text-xl font-bold text-text-primary">
                {result.ziwei.luckyNumber}
              </span>
            </div>
          </div>

          <div className="pt-2">
            <p className="text-xs text-text-muted uppercase tracking-wide mb-1">创世时间 Genesis Date</p>
            <p className="font-mono text-xs text-text-muted">
              {result.genesisDate.toLocaleString()}
            </p>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="flex gap-4 justify-center pt-8">
        <button
          onClick={handleDownloadPDF}
          className="px-6 py-3 rounded-lg border border-surfaceHover bg-surface hover:bg-surfaceHover text-text-primary font-medium transition-all duration-200"
        >
          Download Report
        </button>

        <button
          onClick={onReset}
          className="px-6 py-3 rounded-lg bg-primary hover:bg-primary/90 text-white font-medium transition-all duration-200 shadow-lg shadow-primary/20"
        >
          New Analysis
        </button>
      </div>

      <div className="text-center pb-8">
        <p className="text-[10px] text-text-muted/60 uppercase tracking-widest max-w-2xl mx-auto">
          For entertainment purposes only. Not financial advice.
        </p>
      </div>
    </div>
  )
}
