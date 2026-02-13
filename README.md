# MYIPTVNORDIC

Premium IPTV streaming service website for the Nordic and European market. Built with React, TypeScript, and Tailwind CSS.

## Features

- 65,000+ live TV channels across 9 regions
- 175,000+ movies and series in 4K
- Multi-language support (Swedish, English, Norwegian, Finnish, Danish, Dutch, and more)
- Responsive design for all devices
- Reseller program portal
- Blog with guides and news

## Tech Stack

- **React 19** with TypeScript
- **React Router** for client-side routing
- **Tailwind CSS** for styling
- **Vite** for build tooling
- **Google Translate** for multi-language support

## Getting Started

**Prerequisites:** Node.js 18+

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build

```bash
npm run build
```

The production build will be output to the `dist/` directory.

## Project Structure

```
├── components/       # Reusable UI components
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── Pricing.tsx
│   ├── ChannelList.tsx
│   ├── Footer.tsx
│   └── ...
├── pages/            # Route pages
│   ├── HomePage.tsx
│   ├── KanalerPage.tsx
│   ├── PriserPage.tsx
│   ├── FAQPage.tsx
│   ├── ResellerPage.tsx
│   └── BlogPage.tsx
├── hooks/            # Custom React hooks
├── constants.tsx     # Shared data (pricing, channels, FAQ)
├── types.ts          # TypeScript interfaces
├── App.tsx           # Root component with routing
└── index.tsx         # Entry point
```
