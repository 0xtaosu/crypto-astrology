# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Crypto Astrology** is a web-based entertainment tool that combines cryptocurrency analysis with Eastern (紫微斗数) and Western astrology. It analyzes tokens based on their contract address and genesis timestamp to generate fortune reports with a "Cyber-Taoism" aesthetic.

## Tech Stack

- **Frontend**: React 19 + TypeScript + Vite
- **Styling**: Tailwind CSS v4 + shadcn/ui (customized for cyber-taoism aesthetic)
- **Key Libraries**:
  - `lunar-typescript`: Lunar calendar conversion and Chinese astrological calculations
  - `jspdf`: PDF report generation
- **Deployment**: Static web hosting

## Design System: Cyber-Taoism Aesthetic

### Color Palette
- **Background**: Deep Void Black (`#050505`)
- **Primary (Tech)**: Neon Cyan (`#00F0FF`) - borders, data, tech elements
- **Accent (Mystic)**: Electric Purple (`#BC13FE`) - astrology concepts, magical effects
- **Warning**: Cinnabar Red (`#FF2A2A`) - risk alerts, talisman text

### Typography
- **Headings**: `Orbitron` (sci-fi, wide)
- **Body/Data**: `JetBrains Mono` (code-like, clean)
- **Mystical Terms**: `Ma Shan Zheng` (calligraphy, traditional Chinese)

### Component Styling
- Cut-corner cards with frosted glass backgrounds and glowing borders
- Buttons with scanline animations and "charging" hover effects
- Terminal/command-line style input fields

## Core Architecture

### Input Processing
Users provide three required inputs:
1. **Token Name**: String identifier
2. **Contract Address**: Used to generate unique hash fingerprint for fortune seed
3. **Genesis Date**: Precise to the minute, used for astrological calculations

### Astrology Engine Modules

**紫微斗数 (Purple Star Astrology) Module**:
- Calculates **命宫主星** (Life Palace Star) from genesis date - represents project fundamentals
- Calculates **财帛宫主星** (Wealth Palace Star) from genesis month - represents capital flow
- Generates fortune score (0-100) and auspiciousness rating

**Western Astrology Module**:
- Calculates Sun Sign from genesis date
- Predicts market sentiment (Bullish/Bearish)

**Hash Fortune Adjustment**:
- Uses contract address hash as random seed to fine-tune fortune scores
- Ensures each token has a unique analysis result

### Report Output

Core metrics displayed:
- **Fortune Score**: Dynamic gauge/dashboard
- **Risk Level**: Low / Medium / High / Extreme
- **Investment Advice**: Concise recommendations (e.g., "重仓出击", "建议远离")

Detailed analysis cards:
- **紫微分析卡**: Main stars, detailed interpretation, lucky elements (colors, numbers)
- **星盘分析卡**: Zodiac sign, aspect influences

### PDF Export
- Filename format: `{TokenName}_report.pdf`
- Contains token name, core scores, key analysis conclusions

## User Experience Requirements

- Input validation for all required fields
- 2-3 second "decoding/calculating" animation after clicking "启动占卜" (Start Divination) to enhance ritual feel
- All UI elements should maintain the cyber-taoism aesthetic with glitch effects and neon accents
- Reports must be visually striking enough to share on social media

## Target Users

1. **玄学信徒 (Mysticism Believers)**: Expect professional terminology (命宫, 水逆) and fortune judgments
2. **币圈 Degen**: Need quick go/no-go decisions on new tokens, seeking psychological reassurance
3. **猎奇玩家 (Curious Players)**: Want visually impactful reports suitable for Twitter/social sharing

## Future Roadmap Notes

Phase 2 will include:
- API integration with CoinGecko/DexScreener for automatic token data retrieval
- Social sharing cards optimized for Twitter/Instagram Stories (9:16 format)

Phase 3 plans:
- LLM integration (GPT-4) for more natural fortune telling narratives
- Additional divination methods (八字, 易经六爻)
- User accounts for saving favorite tokens and daily fortune updates
