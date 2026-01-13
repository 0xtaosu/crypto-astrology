import { Lunar } from 'lunar-typescript'
import { TokenInput, FortuneResult, StarName } from '../types'

// 十四主星
const MAIN_STARS: StarName[] = [
  '紫微', '天机', '太阳', '武曲', '天同', '廉贞',
  '天府', '太阴', '贪狼', '巨门', '天相', '天梁', '七杀', '破军'
]

// 主星解释
const STAR_INTERPRETATIONS: Record<StarName, { trait: string; advice: string; score: number }> = {
  '紫微': { trait: '帝王之星，主权威与领导', advice: '适合长期持有，有望成为龙头', score: 85 },
  '天机': { trait: '智慧之星，善变多谋', advice: '适合短线操作，注意波动', score: 70 },
  '太阳': { trait: '光明之星，主公开透明', advice: '阳光项目，社区活跃度高', score: 80 },
  '武曲': { trait: '财星，主金钱与刚毅', advice: '财运亨通，适合投资', score: 88 },
  '天同': { trait: '福星，主平稳安逸', advice: '稳健型项目，风险较低', score: 75 },
  '廉贞': { trait: '次桃花，主变化', advice: '波动较大，谨慎投资', score: 60 },
  '天府': { trait: '财库之星，主富足', advice: '资金充裕，发展稳健', score: 82 },
  '太阴': { trait: '财富之星，主阴柔', advice: '潜力巨大，需耐心等待', score: 77 },
  '贪狼': { trait: '桃花星，主欲望变化', advice: '高风险高回报，DEGEN最爱', score: 65 },
  '巨门': { trait: '暗星，主口舌是非', advice: '注意项目争议，小心风险', score: 45 },
  '天相': { trait: '印星，主权印', advice: '正规项目，合规性强', score: 78 },
  '天梁': { trait: '荫星，主贵人', advice: '有贵人相助，发展顺利', score: 80 },
  '七杀': { trait: '将星，主冲锋陷阵', advice: '激进项目，风险极高', score: 55 },
  '破军': { trait: '耗星，主破坏创新', advice: '颠覆性项目，极端波动', score: 50 },
}

// 幸运颜色
const LUCKY_COLORS = ['#6366f1', '#a855f7', '#ec4899', '#f59e0b', '#10b981', '#3b82f6'] // Indigo, Purple, Pink, Amber, Emerald, Blue

// 计算合约地址的哈希值作为随机种子
function hashAddress(address: string): number {
  let hash = 0
  for (let i = 0; i < address.length; i++) {
    const char = address.charCodeAt(i)
    hash = ((hash << 5) - hash) + char
    hash = hash & hash
  }
  return Math.abs(hash)
}

// 根据日期计算命宫主星
function calculateLifePalaceStar(date: Date, hash: number): StarName {
  const lunar = Lunar.fromDate(date)
  const day = lunar.getDay()
  const index = (day + hash) % MAIN_STARS.length
  return MAIN_STARS[index]
}

// 根据月份计算财帛宫主星
function calculateWealthPalaceStar(date: Date, hash: number): StarName {
  const lunar = Lunar.fromDate(date)
  const month = lunar.getMonth()
  const index = (month + Math.floor(hash / 10)) % MAIN_STARS.length
  return MAIN_STARS[index]
}

// 主要分析函数
export function analyzeToken(input: TokenInput): FortuneResult {
  const hash = hashAddress(input.contractAddress)

  // 紫微斗数分析
  const lifePalaceStar = calculateLifePalaceStar(input.genesisDate, hash)
  const wealthPalaceStar = calculateWealthPalaceStar(input.genesisDate, hash)

  const lifeStarInfo = STAR_INTERPRETATIONS[lifePalaceStar]
  const wealthStarInfo = STAR_INTERPRETATIONS[wealthPalaceStar]

  // 综合运势评分
  const baseScore = (lifeStarInfo.score + wealthStarInfo.score) / 2
  const hashModifier = (hash % 21) - 10 // -10 to +10
  const fortuneScore = Math.max(0, Math.min(100, Math.round(baseScore + hashModifier)))

  // 风险等级
  let riskLevel: 'Low' | 'Medium' | 'High' | 'Extreme'
  if (fortuneScore >= 80) riskLevel = 'Low'
  else if (fortuneScore >= 65) riskLevel = 'Medium'
  else if (fortuneScore >= 50) riskLevel = 'High'
  else riskLevel = 'Extreme'

  // 投资建议
  let investmentAdvice: string
  if (fortuneScore >= 85) investmentAdvice = '重仓出击 · ALL IN'
  else if (fortuneScore >= 70) investmentAdvice = '适量配置 · 稳健投资'
  else if (fortuneScore >= 55) investmentAdvice = '小额试水 · 谨慎观察'
  else investmentAdvice = '建议远离 · 风险极高'

  // 幸运元素
  const luckyColor = LUCKY_COLORS[hash % LUCKY_COLORS.length]
  const luckyNumber = (hash % 9) + 1

  return {
    tokenName: input.name,
    contractAddress: input.contractAddress,
    genesisDate: input.genesisDate,
    fortuneScore,
    riskLevel,
    investmentAdvice,
    ziwei: {
      lifePalaceStar,
      wealthPalaceStar,
      interpretation: `命宫主星【${lifePalaceStar}】${lifeStarInfo.trait}；财帛宫主星【${wealthPalaceStar}】${wealthStarInfo.trait}。${lifeStarInfo.advice}`,
      luckyColor,
      luckyNumber,
    },
  }
}
