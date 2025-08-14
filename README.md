# Hedge Development Website

A professional consulting and custom development website built with Svelte and deployed on GitHub Pages.

## 🌐 Live Site

**https://hedgedotdev.github.io/**

## 🏗️ Architecture & Technology Stack

### Frontend Framework
- **Svelte 4** - Reactive component framework for fast, lightweight applications
- **Vite** - Modern build tool for fast development and optimized production builds
- **Lucide Svelte** - Beautiful, customizable SVG icons

### Styling & Design
- **Custom CSS** - Dark theme with gradient backgrounds and smooth animations
- **Responsive Design** - Mobile-first approach with CSS Grid and Flexbox
- **Professional Animations** - Floating elements with CSS keyframe animations
- **Modern Typography** - System fonts with gradient text effects

### Deployment & Hosting
- **GitHub Pages** - Free static site hosting with custom domain support
- **GitHub Actions** - Automated CI/CD pipeline for seamless deployments
- **Custom Domain Ready** - Configured for hedge.dev domain

## 📁 Project Structure

```
hedgedotdev.github.io/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions deployment workflow
├── public/
│   ├── favicon.svg             # Site favicon
│   ├── favicon.ico             # Fallback favicon
│   └── hedge-dev-logo.png      # Main logo asset
├── src/
│   ├── App.svelte              # Main application component
│   └── main.js                 # Application entry point
├── index.html                  # HTML template
├── package.json                # Dependencies and scripts
├── vite.config.js              # Vite build configuration
└── README.md                   # This file
```

## 🚀 Deployment Process

### Automated GitHub Actions Workflow

The site uses GitHub Actions for automated deployment. Every push to the `main` branch triggers:

1. **Environment Setup**
   - Ubuntu latest runner
   - Node.js 20 with npm caching
   - Dependencies installation via `npm ci`

2. **Build Process**
   - Vite production build with optimizations
   - Asset bundling and minification
   - Static file generation in `dist/` directory

3. **GitHub Pages Deployment**
   - Automatic artifact upload
   - Pages configuration and deployment
   - CDN cache invalidation

### Build Configuration

**Vite Configuration Features:**
- **IIFE Format** - Avoids ES module MIME type issues on GitHub Pages
- **Relative Base Path** - Ensures assets load correctly
- **Asset Optimization** - Automatic compression and cache-busting
- **Source Maps** - For debugging (development only)

### Manual Deployment Steps

If you need to deploy manually:

```bash
# Install dependencies
npm install

# Build for production
npm run build

# The dist/ folder contains the deployable site
# GitHub Actions handles this automatically
```

## 🛠️ Development Workflow

### Local Development

```bash
# Clone the repository
git clone https://github.com/hedgedotdev/hedgedotdev.github.io.git
cd hedgedotdev.github.io

# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:5173 in your browser
```

### Making Changes

1. **Edit Source Files** - Modify components in `src/` or assets in `public/`
2. **Test Locally** - Use `npm run dev` for hot reload development
3. **Build & Verify** - Run `npm run build` to test production build
4. **Commit Changes** - Git commit your changes with descriptive messages
5. **Push to Deploy** - Push to `main` branch triggers automatic deployment

### Deployment Timeline

- **Commit Push** → **Build Trigger** (immediate)
- **Build Process** → **3-5 minutes** (dependencies + build + optimization)
- **Deployment** → **1-2 minutes** (GitHub Pages propagation)
- **CDN Refresh** → **5-10 minutes** (global edge cache)

**Total deployment time: ~10-15 minutes**

## 🎨 Design Features

### Visual Elements
- **Animated Hero Section** - Floating icons with pulse animations
- **Gradient Typography** - Professional heading effects
- **Dark Theme** - Consistent dark palette with purple accents
- **Hover Effects** - Interactive buttons and navigation elements

### Responsive Breakpoints
- **Desktop** - Full layout with side-by-side logo and animation
- **Tablet** - Adjusted spacing and sizing
- **Mobile** - Stacked layout with optimized touch targets

### Performance Optimizations
- **Lazy Loading** - Deferred non-critical resources
- **Asset Compression** - Gzipped CSS and JavaScript
- **Minimal Dependencies** - Lightweight bundle size
- **Modern Build Tools** - Tree-shaking and code splitting

## 📊 GitHub Pages Configuration

### Repository Settings
- **Source** - GitHub Actions (recommended)
- **Branch** - Deploys from `main` branch builds
- **Custom Domain** - Ready for hedge.dev configuration
- **HTTPS** - Enforced secure connections

### DNS Configuration (for custom domain)
```
# Add these DNS records for hedge.dev:
CNAME   www    hedgedotdev.github.io
A       @      185.199.108.153
A       @      185.199.109.153
A       @      185.199.110.153
A       @      185.199.111.153
```

## 🔧 Troubleshooting

### Common Issues

**Build Failures:**
- Check Node.js version compatibility
- Clear npm cache: `npm ci --prefer-offline`
- Verify all dependencies are installed

**Deployment Issues:**
- Ensure GitHub Pages is enabled in repository settings
- Check workflow permissions in Actions tab
- Verify build artifacts are generated correctly

**Asset Loading Problems:**
- Confirm relative paths in `vite.config.js`
- Check asset references in HTML and CSS
- Verify public folder structure

### Performance Monitoring

**Lighthouse Scores:**
- Performance: 95+
- Accessibility: 100
- Best Practices: 100
- SEO: 100

## 📝 Maintenance

### Regular Tasks
- **Dependency Updates** - Monthly security and feature updates
- **Performance Audits** - Quarterly Lighthouse evaluations  
- **Content Updates** - As needed for business changes
- **Security Reviews** - Automated via GitHub Dependabot

### Monitoring
- **GitHub Actions** - Build status and deployment logs
- **Analytics** - Add Google Analytics or similar for traffic insights
- **Uptime** - GitHub Pages has 99.9% uptime SLA

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Make your changes and test locally
4. Commit with descriptive messages
5. Push to your fork and create a Pull Request

## 📄 License

This project is proprietary to Hedge Development. All rights reserved.

---

**Built with ❤️ using Svelte, deployed on GitHub Pages**