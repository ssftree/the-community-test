# The Community (사상검증구역: 더 커뮤니티) Multilingual Test Suite

A 1:1 pixel-faithful, multilingual replica of the official political & ideological tests from the Korean reality competition series **《사상검증구역: 더 커뮤니티》 (The Community)** (Wavve Original).

Includes full tests, authentic brutalist monochrome UI, calculation algorithms, and dimension analysis for both **Season 1** and **Season 2**.

---

## 🌟 Key Features

### 1. Dual Season Reproduction (시즌 1 & 시즌 2)
- **Season 1 (사상검증구역: 더 커뮤니티)**:
  - 87 total Likert questions across 4 domains (Politics 21, Gender 21, Class 23, Openness 22).
  - Authentic 4-point & 6-point scale dot runner (`.answers--scale`, `.scale-dot`).
  - 4-Axis coordinate calculation:
    - **Politics**: Left ($L1 \sim L6$) vs Right ($R1 \sim R6$)
    - **Gender**: Feminism ($F1 \sim F6$) vs Equalism ($E1 \sim E6$)
    - **Class**: Working ($W1 \sim W6$) vs Upper-middle ($U1 \sim U6$)
    - **Openness**: Open-minded ($O1 \sim O6$) vs Conservative ($C1 \sim C6$)
  - Authentic layered SVG totem emblem with custom scores and coordinate codes (e.g. `LEWO`, `RFUC`).

- **Season 2 (사상검증구역2: 보이지 않는 손 - The Invisible Hand)**:
  - 37 binary ($O / X$) questions.
  - 3-Tier ideological symbol calculation:
    - **Meaning (의미)** vs **Utility (실리)** ($B1, B2, H1, H2$)
    - **Structure (구조)** vs **Ability (능력)** ($S1, S2, A1, A2$)
    - **Principles (원칙)** vs **Results (결과)** ($M1, M2, U1, U2$)
  - 3-Layer Symbol Tower rendering with official brand SVGs, 4 anchor guides, and comprehensive dimension analysis.

### 2. Multilingual Support (7 Languages)
Instant in-app switching across 7 languages with localized questions, instructions, scale labels, dimension guides, and results:
- 🇨🇳 **简体中文** (`zh-CN`)
- 🇭🇰 **繁體中文** (`zh-TW`)
- 🇰🇷 **한국어 원문** (`ko`)
- 🇺🇸 **English** (`en`)
- 🇯🇵 **日本語** (`ja`)
- 🇪🇸 **Español** (`es`)
- 🇫🇷 **Français** (`fr`)

### 3. Authentic Design Language & UX
- Official Brutalist design language matching the original `thecommunity.co.kr` site.
- Custom brutalist language dropdown with flag icons and code badges.
- Keyboard navigation (Number keys `1~6` / `O` & `X` / Arrow keys).
- Quick random fill (`🎲`) button for instant testing and demonstration.
- Responsive mobile & desktop layout.

---

## 🛠 Tech Stack

- **Framework**: React 18 + TypeScript
- **Bundler**: Vite
- **Styling**: Authentic CSS & custom brutalist components
- **Icons & Assets**: Official brand SVG vectors & typography

---

## 🚀 Getting Started

### Installation
```bash
npm install
```

### Development
```bash
npm run dev
```

### Production Build
```bash
npm run build
npm run preview
```

## Cloudflare deployment

The production site is deployed as a Cloudflare Worker with Static Assets by
[GitHub Actions](.github/workflows/cloudflare.yml). Its infrastructure config is
kept in [`wrangler.jsonc`](wrangler.jsonc).

- Pull requests run a clean install and production build without receiving
  deployment credentials.
- Pushes to `main` deploy only after the build succeeds.
- Repeated runs for the same branch cancel obsolete in-progress runs.
- The workflow uses the GitHub `production` environment and expects these
  environment secrets:
  - `CLOUDFLARE_ACCOUNT_ID`
  - `CLOUDFLARE_API_TOKEN` with `Workers Scripts: Edit` access for the target
    account

Do not also enable Cloudflare Builds Git integration for this Worker; GitHub
Actions is the single deployment path. To redeploy the current `main` commit,
run the **Cloudflare** workflow manually from GitHub Actions.

---

## 📜 Academic Reference & Disclaimer

- The questions in Season 1 were academically advised by Prof. Kim Yong-chan (Yonsei University College of Social Sciences) and verified by Embrain.
- The questions in Season 2 were advised by Prof. Jang Won-ho (University of Seoul Dept. of Sociology) and verified by Embrain.
- This project is a non-commercial educational recreation and translation suite honoring the show and its social philosophy explorations.
