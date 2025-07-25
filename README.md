# SplitChores Landing Page

![SplitChores Landing Page](https://img.shields.io/badge/SplitChores-Landing%20Page-5271FF?style=for-the-badge&logo=react)

**SplitChores Landing Page** - The only collaborative task app that actually works for real households. Built with **Next.js**, **TailwindCSS**, and **TypeScript**.

🌟 **Live Site**: [https://VastavOne.github.io/splitchores-landing/](https://VastavOne.github.io/splitchores-landing/)

## ✨ Features

- 🏠 **Built for Real Households** - Designed for roommates, families, and shared living
- ⚡ **Interactive Demo** - Try task completion, priority cycling, and deletion
- 📱 **Mobile-First Design** - Responsive across all devices
- 🎨 **SplitChores Branding** - Exact colors and styling from the actual app
- 🚀 **Static Export** - Optimized for GitHub Pages deployment

## 🎯 Unique Selling Points

- **Multi-User Real-Time Sync** - No more "I already did that!" conflicts
- **Smart Recurring Tasks** - Auto-regenerates weekly chores when completed
- **Haptic Feedback System** - Physical engagement for task completion
- **Stress Relief Integration** - Built-in wellness tools and desk stretches
- **Priority Cycling** - Visual feedback without complex menus
- **Group Role Management** - Admin/member permissions with email invites

## 🚀 Development

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the landing page.

## 📁 Project Structure

```
splitchores-landing/
├── app/                    # Next.js App Router
│   ├── (default)/         # Default layout group
│   ├── css/               # Global styles & SplitChores theme
│   └── layout.tsx         # Root layout
├── components/            # React components
│   ├── ui/               # UI components (header, footer)
│   ├── hero-home.tsx     # Hero section with app previews
│   ├── features-planet.tsx # Interactive demo & features
│   └── app-screen-previews.tsx # Static app mockups
├── public/               # Static assets
└── .github/workflows/    # GitHub Actions for deployment
```

## 🎨 Customization

### Brand Colors
SplitChores brand colors are defined in `app/css/splitchores-theme.css`:
- Primary: `#5271FF`
- Success: `#10B981` 
- Warning: `#F59E0B`
- Danger: `#EF4444`

### Components
- **Interactive Demo**: `components/features-planet.tsx`
- **App Previews**: `components/app-screen-previews.tsx`
- **Mobile Showcase**: `components/mobile-app-showcase.tsx`

## 🚀 Deployment

This site is automatically deployed to GitHub Pages using GitHub Actions:

1. Push changes to `master` branch
2. GitHub Actions builds and deploys automatically
3. Live site updates at: https://VastavOne.github.io/splitchores-landing/

### Manual Deployment

```bash
npm run export
# Deploy the 'out' directory to your hosting provider
```

## 🛠️ Tech Stack

- **Framework**: Next.js 15.1.6 with App Router
- **Styling**: TailwindCSS v4 + Custom SplitChores Theme
- **Language**: TypeScript
- **Deployment**: GitHub Pages with GitHub Actions
- **Animations**: AOS (Animate On Scroll)

## 📱 About SplitChores App

SplitChores is a collaborative task management app designed specifically for households:

- **Target Audience**: Roommates, families, shared living situations
- **Key Features**: Real-time sync, recurring tasks, haptic feedback, stress relief
- **Platforms**: iOS & Android (coming soon)

## 📄 License

This project is proprietary and confidential. All rights reserved.

## 📞 Contact

- **Developer**: VastavOne
- **Email**: narayan.bhor01@gmail.com
- **GitHub**: [@VastavOne](https://github.com/VastavOne)

---

**Built with ❤️ for real households everywhere** 🏠✨