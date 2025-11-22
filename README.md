# Avatar Generator

A modern, production-ready avatar generator built with Nuxt 4. Create beautiful, customizable avatars with text, colors, patterns, and gradients.

![Nuxt](https://img.shields.io/badge/Nuxt-4.2.1-00DC82?logo=nuxt.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-3178C6?logo=typescript)
![Pinia](https://img.shields.io/badge/Pinia-0.11.3-ffd859)
![Tests](https://img.shields.io/badge/tests-11%20passing-success)

## ✨ Features

### 🎨 Customization Options
- **Text**: Add 1-3 character initials with custom colors, fonts, and sizes
- **Fonts**: Choose from 24+ Google Fonts with live preview
- **Font Weights**: 9 weight options from thin to black
- **Shapes**: Square or circle avatars
- **Backgrounds**: Solid colors, linear/radial gradients, or patterns
- **Patterns**: 10 unique patterns with distinct color schemes
- **Templates**: 6 pre-designed templates for quick setup

### 🎯 Key Features
- **Live Preview**: Real-time avatar updates
- **Template System**: Quick-start with professionally designed presets
- **Pattern Library**: Dots, waves, zigzag, grid, crosses, and more
- **Zoom Controls**: Adjust preview scale
- **Download**: Export high-quality avatar images
- **Responsive Design**: Works on all screen sizes
- **Accessible**: Keyboard navigation support

## 🛠 Tech Stack

- **Framework**: [Nuxt 4](https://nuxt.com/) - Vue.js meta-framework
- **UI Library**: [Nuxt UI](https://ui.nuxt.com/) - Pre-built components
- **State Management**: [Pinia](https://pinia.vuejs.org/) - Type-safe store
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
- **Icons**: [Lucide Icons](https://lucide.dev/) - Beautiful icons
- **Image Export**: [html-to-image](https://github.com/bubkoo/html-to-image) - Canvas rendering
- **Testing**: [Vitest](https://vitest.dev/) - Unit testing framework
- **TypeScript**: Full type safety throughout

## 🚀 Getting Started

### Prerequisites

- Node.js 16.x or higher
- npm 8.x or higher

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd reen-avatar-generator

# Install dependencies
npm install
```

### Development

```bash
# Start development server
npm run dev
```

Visit `http://localhost:3000` to see the app running.

### Build

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

### Testing

```bash
# Run tests
npm test

# Run tests in watch mode
npm test -- --watch
```

## 📁 Project Structure

```
reen-avatar-generator/
├── app/
│   ├── assets/          # CSS and static assets
│   ├── components/      # Vue components (atomic design)
│   │   ├── atoms/       # Basic building blocks
│   │   ├── molecules/   # Simple component groups
│   │   └── organisms/   # Complex components
│   ├── composables/     # Reusable composition functions
│   ├── pages/           # Route pages
│   └── types/           # TypeScript type definitions
├── server/
│   └── api/             # API endpoints
├── stores/              # Pinia state stores
├── tests/               # Test files
├── utils/               # Utility functions
└── public/              # Static files
```

## 🎨 Component Architecture

Following **atomic design principles**:

- **Atoms**: `BaseButton`, `ZoomButton`, `ViewButton`, `DownloadButton`
- **Molecules**: `SidebarItem`
- **Organisms**: `Sidebar`, `TextSection`, `ColorsSection`, `BackgroundSection`, `TemplatesSection`

## 🧪 Testing

Comprehensive test coverage with Vitest:

- **Store tests**: Avatar state management
- **Utility tests**: Pattern generation
- **Component tests**: Pattern rendering

```bash
# All tests passing
Test Files  3 passed (3)
Tests       11 passed (11)
```

## 🎭 Available Templates

1. **Modern Green** (MG) - Fresh gradient with circle shape
2. **Purple Vibe** (PV) - Vibrant purple gradient
3. **Ocean** (OC) - Blue pattern with waves
4. **Minimal** (MI) - Clean dots pattern
5. **Sunset** (SU) - Warm radial gradient
6. **Corporate** (CO) - Professional solid color

## 🎨 Pattern Library

10 unique patterns with distinct color schemes:
- Dots, Lines, Checkers, Circles, Tic-Tac-Toe
- Waves, Zigzag, Grid, Crosses, Diagonal Lines

## 📝 Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run generate     # Generate static site
npm run preview      # Preview production build
npm test             # Run tests
npm run format       # Format code with Prettier
```

## 🔧 Configuration

- **Nuxt Config**: `nuxt.config.ts`
- **Tailwind Config**: `tailwind.config.ts`
- **TypeScript Config**: `tsconfig.json`
- **Vitest Config**: `vitest.config.ts`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is private and proprietary.

## 🙏 Acknowledgments

- Built with [Nuxt 4](https://nuxt.com/)
- UI components from [Nuxt UI](https://ui.nuxt.com/)
- Icons by [Lucide](https://lucide.dev/)
- Fonts from [Google Fonts](https://fonts.google.com/)

---

Made with ❤️ using Nuxt 4
