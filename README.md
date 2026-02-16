# CSC Assam - Common Service Centre Website
 
A modern, responsive single-page website for CSC (Common Service Centre) Assam, built with Next.js 16, TypeScript, Tailwind CSS, and Framer Motion.
 
## Features
 
✨ **Modern Design**
- Single-page application with smooth scrolling navigation
- Beautiful motion graphics and animations powered by Framer Motion
- Fully responsive design for mobile, tablet, and desktop
 
🎨 **Visual Elements**
- Auto-playing hero slideshow with 3 images
- Animated service cards with hover effects
- Scroll-triggered reveal animations
- Smooth transitions throughout the site
 
📱 **Sections**
- **Top Bar**: Contact information and address
- **Header**: Sticky navigation with mobile menu
- **Hero Slideshow**: Full-screen image carousel with navigation
- **Explore Services**: Quick service categories
- **Service Showcase**: 10 detailed service cards with images
- **Pricing**: 4 comprehensive pricing tables
- **About**: Company information with animated statistics
- **Contact**: Contact information with call-to-action
- **Map**: Embedded Google Maps location
- **Footer**: Links, social media, and information
 
🛠️ **Services Offered**
- Xerox & Printing
- Photo Printing
- PVC Card Printing
- Ticket Booking (Train, Bus, Flight)
- Hotel Booking
- Online Work & Form Filling
- Job Applications
- Certificate Applications
- Digital Shop Services
- PAN Card Applications
 
## Tech Stack
 
- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Images**: Next.js Image Optimization
 
## Getting Started
 
### Prerequisites
 
- Node.js 18+ 
- npm or yarn
 
### Installation
 
1. Clone the repository:
```bash
git clone 
cd project
```
 
2. Install dependencies:
```bash
npm install
```
 
3. Run the development server:
```bash
npm run dev
```
 
4. Open [http://localhost:3000](http://localhost:3000) in your browser
 
### Build for Production
 
```bash
npm run build
npm start
```
 
## Project Structure
 
```
src/
├── app/
│   ├── page.tsx              # Main page
│   ├── layout.tsx            # Root layout
│   └── globals.css           # Global styles
├── components/
│   ├── sections/             # Page sections
│   │   ├── TopBar.tsx
│   │   ├── Header.tsx
│   │   ├── HeroSlideshow.tsx
│   │   ├── ExploreServices.tsx
│   │   ├── ServiceShowcase.tsx
│   │   ├── PricingSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── ContactSection.tsx
│   │   ├── MapSection.tsx
│   │   └── Footer.tsx
│   └── ui/                   # Reusable components
│       ├── ScrollReveal.tsx
│       ├── ServiceCard.tsx
│       └── PriceTable.tsx
├── lib/
│   ├── utils.ts              # Utility functions
│   └── animations.ts         # Animation variants
├── data/
│   └── services.ts           # Service and pricing data
└── types/
    └── index.ts              # TypeScript types
```
 
## Customization
 
### Update Contact Information
 
Edit `/src/data/services.ts` to update:
- Phone numbers
- Email addresses
- Address
- Working hours
 
### Modify Services
 
Edit the `services` array in `/src/data/services.ts` to add, remove, or modify services.
 
### Update Pricing
 
Edit the `priceTables` array in `/src/data/services.ts` to update pricing information.
 
### Change Hero Images
 
Update the `heroSlides` array in `/src/data/services.ts` with your own image URLs.
 
### Customize Colors
 
The color scheme is defined in `/src/app/globals.css` using CSS variables and can be easily customized.
 
## Performance Features
 
- Image optimization with Next.js Image component
- Lazy loading for below-the-fold content
- Reduced motion support for accessibility
- Smooth scrolling with proper browser support
 
## Accessibility
 
- WCAG 4.5:1 color contrast ratios
- Proper ARIA labels
- Keyboard navigation support
- Reduced motion preferences respected
- Semantic HTML structure
 
## Browser Support
 
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
 
## License
 
This project is created for CSC Assam.
 
## Contact
 
For any inquiries:
- Phone: +91 98765 43210
- Email: info@cscassam.in
- Location: Main Road, Guwahati, Assam - 781001
