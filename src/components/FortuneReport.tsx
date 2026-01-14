import { FortuneResult } from '../types'
import { generatePDF } from '../lib/pdf'
import { translations, TranslationKey } from '../lib/translations'

interface FortuneReportProps {
  result: FortuneResult
  onReset: () => void
  t: typeof translations.en
}

export default function FortuneReport({ result, onReset, t }: FortuneReportProps) {
  const handleDownloadPDF = () => {
    generatePDF(result)
  }

  // Mapping helpers for dynamic keys
  const getTrait = (starName: string) => {
    // Map Chinese star names to keys like 'trait_ziwei'
    // This requires a map or just checking logic since star names from astrology.ts are Chinese
    const map: Record<string, string> = {
      '紫微': 'ziwei', '天机': 'tianji', '太阳': 'taiyang', '武曲': 'wuqu',
      '天同': 'tiantong', '廉贞': 'lianzhen', '天府': 'tianfu', '太阴': 'taiyin',
      '贪狼': 'tanlang', '巨门': 'jumen', '天相': 'tianxiang', '天梁': 'tianliang',
      '七杀': 'qisha', '破军': 'pojun'
    }
    const keySuffix = map[starName]
    if (!keySuffix) return starName
    return t[`trait_${keySuffix}` as TranslationKey]
  }

  const getAdvice = (starName: string) => {
    const map: Record<string, string> = {
      '紫微': 'ziwei', '天机': 'tianji', '太阳': 'taiyang', '武曲': 'wuqu',
      '天同': 'tiantong', '廉贞': 'lianzhen', '天府': 'tianfu', '太阴': 'taiyin',
      '贪狼': 'tanlang', '巨门': 'jumen', '天相': 'tianxiang', '天梁': 'tianliang',
      '七杀': 'qisha', '破军': 'pojun'
    }
    const keySuffix = map[starName]
    if (!keySuffix) return starName
    return t[`advice_${keySuffix}` as TranslationKey]
  }

  const getStarNameTranslated = (starName: string) => {
    const map: Record<string, string> = {
      '紫微': 'ziwei', '天机': 'tianji', '太阳': 'taiyang', '武曲': 'wuqu',
      '天同': 'tiantong', '廉贞': 'lianzhen', '天府': 'tianfu', '太阴': 'taiyin',
      '贪狼': 'tanlang', '巨门': 'jumen', '天相': 'tianxiang', '天梁': 'tianliang',
      '七杀': 'qisha', '破军': 'pojun'
    }
    const keySuffix = map[starName]
    if (!keySuffix) return starName
    return t[`star_${keySuffix}` as TranslationKey]
  }

  const getInvestmentAdvice = () => {
    // Map back to keys based on logic in astrology.ts
    // Logic: >=85 All In, >=70 Steady, >=55 Careful, else Avoid
    const score = result.fortuneScore
    if (score >= 85) return t.inv_all_in
    if (score >= 70) return t.inv_steady
    if (score >= 55) return t.inv_cautious
    return t.inv_avoid
  }

  const getRiskLevel = (level: string) => {
    if (level === 'Low') return t.risk_low
    if (level === 'Medium') return t.risk_medium
    if (level === 'High') return t.risk_high
    return t.risk_extreme
  }

  const lifeStarName = getStarNameTranslated(result.ziwei.lifePalaceStar)
  const wealthStarName = getStarNameTranslated(result.ziwei.wealthPalaceStar)

  // Construct interpretation dynamically for display
  const interpretationText = `${t.report_life_star} [${lifeStarName}] ${getTrait(result.ziwei.lifePalaceStar)}; ${t.report_wealth_star} [${wealthStarName}] ${getTrait(result.ziwei.wealthPalaceStar)}. ${getAdvice(result.ziwei.lifePalaceStar)}`

  return (
    <div className="border border-white bg-black font-mono text-sm shadow-xl max-w-2xl mx-auto">
      <div className="bg-white text-black text-center font-bold border-b border-black py-1">
        {t.report_log}
      </div>
      <div className="p-4 space-y-4 text-green-500">
        <div className="border-b border-green-800 pb-2">
          <p className="text-white">{t.report_target} <span className="text-yellow-400">{result.tokenName.toUpperCase()}</span></p>
          <p className="text-gray-400 text-xs">{result.contractAddress}</p>
        </div>

        <div className="grid grid-cols-2 gap-4 border-b border-green-800 pb-4">
          <div className="text-center">
            <p className="text-gray-400 mb-1">{t.report_score}</p>
            <div className="text-4xl font-bold text-yellow-400 animate-pulse">
              [{result.fortuneScore}]
            </div>
          </div>
          <div className="text-center">
            <p className="text-gray-400 mb-1">{t.report_risk}</p>
            <div className={`text-xl font-bold border-2 inline-block px-2 ${result.riskLevel === 'High' || result.riskLevel === 'Extreme' ? 'border-red-500 text-red-500' : 'border-green-500 text-green-500'}`}>
              {getRiskLevel(result.riskLevel)}
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <p className="text-white bg-blue-900 inline-block px-1">{t.report_ziwei}</p>
          <p>{t.report_life_star} <span className="text-yellow-400">{lifeStarName}</span></p>
          <p>{t.report_wealth_star} <span className="text-yellow-400">{wealthStarName}</span></p>

          <div className="border border-green-900 p-2 text-green-300">
            <p className="mb-2">{t.report_interp_module}</p>
            <p className="leading-relaxed">
              {interpretationText}
            </p>
          </div>

          <div className="flex justify-between items-center text-xs">
            <span>{t.report_lucky_color} {result.ziwei.luckyColor}</span>
            <span>{t.report_lucky_no} {result.ziwei.luckyNumber}</span>
          </div>
        </div>

        <div className="border-t border-green-800 pt-2">
          <p className="text-center text-white mb-2">{t.report_verdict}</p>
          <p className="text-center text-xl text-yellow-400 blink">
            {">>>"} {getInvestmentAdvice()} {"<<<"}
          </p>
        </div>

        <div className="flex gap-4 pt-4 border-t-2 border-dashed border-white">
          <button
            onClick={handleDownloadPDF}
            className="flex-1 border border-white hover:bg-white hover:text-black py-2 text-center"
          >
            {t.report_print}
          </button>
          <button
            onClick={onReset}
            className="flex-1 bg-yellow-500 text-black font-bold py-2 hover:bg-yellow-400"
          >
            {t.report_new}
          </button>
        </div>
      </div>
    </div>
  )
}

