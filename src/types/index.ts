export interface TokenInput {
  name: string
  contractAddress: string
  genesisDate: Date
}

export interface FortuneResult {
  tokenName: string
  contractAddress: string
  genesisDate: Date
  
  // Core metrics
  fortuneScore: number  // 0-100
  riskLevel: 'Low' | 'Medium' | 'High' | 'Extreme'
  investmentAdvice: string
  
  // 紫微斗数 analysis
  ziwei: {
    lifePalaceStar: string
    wealthPalaceStar: string
    interpretation: string
    luckyColor: string
    luckyNumber: number
  }
  
  // Western astrology
  western: {
    sunSign: string
    marketSentiment: 'Bullish' | 'Bearish' | 'Neutral'
    aspectInfluence: string
  }
}

export type StarName = 
  | '紫微' | '天机' | '太阳' | '武曲' | '天同' | '廉贞'
  | '天府' | '太阴' | '贪狼' | '巨门' | '天相' | '天梁' | '七杀' | '破军'

export type ZodiacSign = 
  | 'Aries' | 'Taurus' | 'Gemini' | 'Cancer' 
  | 'Leo' | 'Virgo' | 'Libra' | 'Scorpio'
  | 'Sagittarius' | 'Capricorn' | 'Aquarius' | 'Pisces'
