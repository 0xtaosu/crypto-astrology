# 🔮 Crypto Astrology | 赛博占星

> **基于链上时空数据的赛博玄学分析工具**
> A Cyber-Taoism fortune analysis tool for cryptocurrency tokens

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)

## 📖 项目简介 (Overview)

**Crypto Astrology** 是一款将东方紫微斗数与西方占星学相结合的加密货币娱乐分析工具。通过分析代币的合约地址和创世时间，生成带有"赛博道教"美学风格的运势报告。

**核心特性：**
- 🌟 **紫微斗数分析**：基于创世时间计算命宫主星、财帛宫主星
- ⭐ **西方星盘解读**：计算太阳星座、市场情绪预测
- 🔐 **哈希运势修正**：利用合约地址生成唯一运势指纹
- 🎨 **Cyber-Taoism 美学**：霓虹色调、故障艺术、科幻风格
- 📄 **PDF 报告导出**：一键生成可分享的运势报告

## 🎯 目标用户 (Target Users)

| 用户类型 | 核心需求 |
|---------|---------|
| **玄学信徒** | 专业术语（命宫、水逆）和吉凶判断 |
| **币圈 Degen** | 快速判断新币是否值得"冲" |
| **猎奇玩家** | 视觉冲击力强、适合社交分享 |

## 🚀 快速开始 (Quick Start)

### 安装依赖
```bash
npm install
```

### 开发模式
```bash
npm run dev
```

### 生产构建
```bash
npm run build
```

### 预览构建
```bash
npm run preview
```

## 🛠️ 技术栈 (Tech Stack)

- **前端框架**: React 19 + TypeScript
- **构建工具**: Vite 6
- **样式方案**: Tailwind CSS v4 + PostCSS
- **核心库**:
  - `lunar-typescript`: 农历转换和干支计算
  - `jspdf`: PDF 报告生成
- **部署**: 静态网站托管

## 🎨 设计系统 (Design System)

### 色彩规范 (Color Palette)
```css
--void-black: #050505       /* 背景 */
--neon-cyan: #00F0FF        /* 主色-科技元素 */
--neon-purple: #BC13FE      /* 强调色-玄学概念 */
--neon-red: #FF2A2A         /* 警示色-风险提示 */
```

### 字体系统 (Typography)
- **标题**: Orbitron (科幻、宽体)
- **数据/代码**: JetBrains Mono (等宽)
- **中文玄学术语**: Ma Shan Zheng (书法)

## 📂 项目结构 (Project Structure)

```
crypto-astrology/
├── src/
│   ├── components/          # React 组件
│   │   ├── InputForm.tsx    # 输入表单
│   │   ├── LoadingAnimation.tsx  # 加载动画
│   │   └── FortuneReport.tsx    # 运势报告
│   ├── lib/                 # 核心逻辑
│   │   ├── astrology.ts     # 占星算法
│   │   └── pdf.ts           # PDF 生成
│   ├── types/               # TypeScript 类型定义
│   │   └── index.ts
│   ├── App.tsx              # 主应用组件
│   ├── main.tsx             # 入口文件
│   └── index.css            # 全局样式
├── public/                  # 静态资源
├── CLAUDE.md                # Claude Code 项目指引
├── PRD.md                   # 产品需求文档
└── package.json
```

## 📖 使用指南 (User Guide)

1. **输入代币信息**
   - Token Name: 代币名称
   - Contract Address: 合约地址（用于生成运势种子）
   - Genesis Date & Time: 创世时间（精确到分钟）

2. **查看分析结果**
   - Fortune Score: 运势评分（0-100）
   - Risk Level: 风险等级（Low/Medium/High/Extreme）
   - Investment Advice: 投资建议

3. **导出 PDF 报告**
   - 点击 "DOWNLOAD REPORT" 按钮
   - 保存格式: `{TokenName}_fortune_report.pdf`

## ⚠️ 免责声明 (Disclaimer)

**本工具仅供娱乐参考，不构成任何投资建议。**
加密货币投资风险极高，请自行判断并谨慎决策。

**FOR ENTERTAINMENT PURPOSES ONLY. NOT FINANCIAL ADVICE.**

## 🗺️ 未来规划 (Roadmap)

### Phase 2: 实时化与社交化
- [ ] 接入 CoinGecko/DexScreener API 自动获取代币数据
- [ ] 生成适合社交媒体分享的图片卡片（9:16）

### Phase 3: 深度玄学与 AI
- [ ] 接入 LLM (GPT-4) 生成更自然的运势解读
- [ ] 增加八字（四柱）、易经六爻等分析方法
- [ ] 用户系统：保存关注币种，每日推送运势更新

## 📄 开源协议 (License)

MIT License - 详见 [LICENSE](LICENSE) 文件

## 🙏 致谢 (Acknowledgments)

- [lunar-typescript](https://github.com/6tail/lunar-typescript) - 农历和紫微斗数计算
- [jsPDF](https://github.com/parallax/jsPDF) - PDF 生成
- [Tailwind CSS](https://tailwindcss.com/) - 样式框架

---

**Made with 🔮 and ⚡ | 以赛博道教美学重新诠释加密玄学**
