# Real Estate Portal

A modern, fully-functional real estate homepage built with Next.js 16, TypeScript, and Tailwind CSS. Inspired by Bayut.com, this platform showcases properties for sale and rent across the UAE.

## 🚀 Features

### 🏠 Core Functionality
- **Advanced Property Search**: Filter by location, property type, price range, and bedrooms
- **Property Listings**: Display properties for sale and rent with detailed information
- **New Projects**: Showcase off-plan and upcoming developments
- **Popular Locations**: Quick access to properties in high-demand areas
- **Market Insights**: Real estate trends, analysis, and reports

### 🛠️ Advanced Tools
- **BayutGPT**: AI-powered property search assistant
- **TruEstimate™**: Property valuation tool
- **Market Insights**: Real-time transaction data and analysis
- **Mortgage Calculator**: Calculate monthly payments
- **Area Guides**: Comprehensive neighborhood information

### 📱 Responsive Design
- Mobile-first approach
- Pixel-perfect layout matching modern real estate portals
- Smooth animations and transitions
- Accessible navigation with ARIA attributes

## 🛠️ Tech Stack

- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Images**: Unsplash (placeholder images)

## 📁 Project Structure

```
real-estate-portal/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   └── home/
│       ├── HeroSearch.tsx
│       ├── FeaturedTools.tsx
│       ├── PropertyPreviewSection.tsx
│       ├── NewProjectsSection.tsx
│       ├── PopularLocationsSection.tsx
│       ├── InsightsSection.tsx
│       └── CTASection.tsx
├── data/
│   ├── properties.ts
│   ├── projects.ts
│   ├── tools.ts
│   ├── locations.ts
│   └── insights.ts
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd real-estate-portal
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📦 Build & Deploy

### Build for production
```bash
npm run build
npm start
```

### Deploy to Vercel
```bash
npm run deploy
```

## 🎨 Customization

### Colors
The primary color scheme can be customized in `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        // Customize primary colors
      }
    }
  }
}
```

### Data
All mock data is located in the `data/` directory:
- `properties.ts`: Property listings
- `projects.ts`: New developments
- `tools.ts`: Platform tools
- `locations.ts`: Popular areas
- `insights.ts`: Market reports

## 🔧 Configuration

### Environment Variables
Create a `.env.local` file for environment-specific configuration:

```env
NEXT_PUBLIC_API_URL=your_api_url
NEXT_PUBLIC_IMAGE_DOMAIN=your_image_domain
```

### Image Optimization
Update `next.config.js` to add your image domains:

```javascript
images: {
  domains: ['your-domain.com', 'cdn.your-domain.com'],
}
```

## 📱 Features Breakdown

### Header Component
- Responsive navigation with mobile hamburger menu
- Language/currency toggle
- User authentication buttons
- Sticky header on scroll

### Hero Search Section
- Full-screen hero with background image
- Advanced search form with multiple filters
- Buy/Rent toggle
- Popular location quick links
- Map search integration ready

### Featured Tools Section
- AI-powered tools showcase
- Interactive cards with hover effects
- Tool descriptions and CTAs

### Property Preview Section
- Tabbed interface for Sale/Rent
- Property cards with images and details
- Save functionality
- Verified badges

### New Projects Section
- Off-plan property showcase
- Developer information
- Completion dates
- Starting prices

### Popular Locations Section
- Grid layout with location cards
- Property counts and average prices
- Location descriptions

### Insights Section
- Market trends and reports
- Category-based filtering
- Author information
- Read time estimates

### CTA Section
- Engaging call-to-action design
- Trust indicators
- Multiple CTAs for different user intents

### Footer Component
- Comprehensive link structure
- Newsletter subscription
- Social media links
- Contact information

## 🎯 Next Steps

### API Integration
- Replace mock data with real API calls
- Implement search functionality
- Add user authentication
- Connect property management system

### Advanced Features
- Virtual tours integration
- Mortgage calculator functionality
- Property comparison tool
- Saved searches and alerts
- Agent profiles and reviews

### Performance Optimization
- Image optimization
- Lazy loading
- Code splitting
- Caching strategies

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Inspired by [Bayut.com](https://www.bayut.com/)
- Icons by [Lucide](https://lucide.dev/)
- Images by [Unsplash](https://unsplash.com/)
- Built with [Next.js](https://nextjs.org/)

---

**Note**: This is a demonstration project with mock data. For production use, replace the mock data with real API endpoints and implement proper authentication and security measures.
