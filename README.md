# Hedge Development Website

A professional consulting and custom development website built with Svelte and deployed on GitHub Pages.

## 🌐 Live Site

**https://hedge.dev** (Primary)  
**https://www.hedge.dev** (WWW redirect)  
**https://hedgedotdev.github.io** (Fallback)

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

### Custom Domain Configuration

The site uses **hedge.dev** as the primary domain with GitHub Pages hosting.

#### GoDaddy DNS Configuration

**Important**: Complete these steps in order at [GoDaddy DNS Management](https://dcc.godaddy.com/):

1. **Delete Existing Records** (if any)
   - Remove any existing A, AAAA, or CNAME records for @ and www
   - Keep only essential records (like MX for email if needed)

2. **Add Apex Domain A Records**
   ```
   Type: A
   Name: @ (or leave blank)
   Value: 185.199.108.153
   TTL: 1 Hour (3600)
   
   Type: A
   Name: @ (or leave blank) 
   Value: 185.199.109.153
   TTL: 1 Hour (3600)
   
   Type: A
   Name: @ (or leave blank)
   Value: 185.199.110.153
   TTL: 1 Hour (3600)
   
   Type: A
   Name: @ (or leave blank)
   Value: 185.199.111.153
   TTL: 1 Hour (3600)
   ```

3. **Add WWW Subdomain CNAME Record**
   ```
   Type: CNAME
   Name: www
   Value: hedgedotdev.github.io
   TTL: 1 Hour (3600)
   ```

4. **Verification Steps**
   - Wait 5-10 minutes for DNS propagation
   - Check DNS with: `dig hedge.dev` and `dig www.hedge.dev`
   - Verify in GitHub repo settings under Pages > Custom domain

#### GitHub Pages Configuration

1. **Repository Settings**
   - Go to repository Settings > Pages
   - Source: Deploy from a branch (main)
   - Custom domain: `hedge.dev`
   - Enforce HTTPS: ✅ Enabled

2. **CNAME File**
   - File `public/CNAME` contains: `hedge.dev`
   - This tells GitHub Pages which domain to serve

3. **DNS Propagation Timeline**
   - Initial setup: 15-30 minutes
   - Full global propagation: 24-48 hours
   - SSL certificate generation: 10-60 minutes after DNS resolves

#### Repository Privacy Settings

**Public Repository**: ✅ Free GitHub Pages hosting  
**Private Repository**: Requires GitHub Pro ($4/month) or higher

You can make the repository private if you have:
- GitHub Pro (Personal account)
- GitHub Team (Organization)
- GitHub Enterprise

### Domain Troubleshooting

**Common Issues:**

1. **"Domain not configured" error**
   - Ensure CNAME file exists in repository root
   - Check GitHub Pages settings show correct domain
   - Verify DNS records are correct

2. **SSL Certificate issues**
   - Wait up to 24 hours for GitHub to issue certificate
   - Ensure DNS is fully propagated first
   - Try unchecking/rechecking "Enforce HTTPS"

3. **Site not loading**
   - Check DNS: `nslookup hedge.dev`
   - Verify A records point to GitHub's IPs
   - Clear browser cache and try incognito mode

4. **Mixed content warnings**
   - Ensure all assets use relative paths
   - Check Vite base configuration is `/`
   - Verify no hardcoded HTTP links

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