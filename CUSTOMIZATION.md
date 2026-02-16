# Customization Guide
 
This guide will help you customize the CSC Assam website to match your needs.
 
## Table of Contents
1. [Update Contact Information](#update-contact-information)
2. [Modify Services](#modify-services)
3. [Update Pricing](#update-pricing)
4. [Change Images](#change-images)
5. [Customize Colors](#customize-colors)
6. [Update Content](#update-content)
7. [Add/Remove Sections](#addremove-sections)
 
---
 
## Update Contact Information
 
**File:** `/src/data/services.ts`
 
### Phone Number & Email
Find the `contactInfo` array and update:
```typescript
export const contactInfo: ContactInfo[] = [
  {
    type: "phone",
    icon: "Phone",
    title: "Call Us",
    value: "+91 98765 43210",  // ← Change this
    link: "tel:+919876543210",  // ← Change this too
  },
  {
    type: "email",
    icon: "Mail",
    title: "Email Us",
    value: "info@cscassam.in",  // ← Change this
    link: "mailto:info@cscassam.in",  // ← Change this too
  },
  // ... rest
]
```
 
### Address
```typescript
{
  type: "address",
  icon: "MapPin",
  title: "Visit Us",
  value: "Main Road, Guwahati, Assam - 781001",  // ← Change this
},
```
 
### Working Hours
```typescript
{
  type: "hours",
  icon: "Clock",
  title: "Working Hours",
  value: "Mon - Sat: 9:00 AM - 7:00 PM",  // ← Change this
},
```
 
Also update in **TopBar** section (`/src/components/sections/TopBar.tsx`):
```typescript
  +91 98765 43210  // ← Change this
```
 
---
 
## Modify Services
 
**File:** `/src/data/services.ts`
 
### Add a New Service
Add to the `services` array:
```typescript
{
  id: "new-service",  // Unique ID
  title: "New Service Name",
  description: "Description of your new service",
  icon: "IconName",  // See available icons below
  image: "https://images.unsplash.com/photo-xxxxx",
},
```
 
### Remove a Service
Simply delete the service object from the `services` array.
 
### Edit Existing Service
Find the service and update its properties:
```typescript
{
  id: "pan-card",
  title: "PAN Card Services",  // ← Change title
  description: "New description here",  // ← Change description
  icon: "CreditCard",  // ← Change icon
  image: "new-image-url",  // ← Change image
},
```
 
### Available Icons
Common Lucide icons you can use:
- `Printer`, `Camera`, `CreditCard`, `Ticket`, `Hotel`
- `Globe`, `Briefcase`, `FileText`, `ShoppingCart`, `IdCard`
- `Phone`, `Mail`, `MapPin`, `Clock`, `Users`
- `Award`, `ThumbsUp`, `Building2`, `Send`
 
Full list: https://lucide.dev/icons/
 
---
 
## Update Pricing
 
**File:** `/src/data/services.ts`
 
Find the `priceTables` array:
 
### Update Existing Price
```typescript
{
  id: "documents",
  title: "Documents Services & Price",
  items: [
    { 
      service: "Black & White Print/Xerox", 
      price: "₹2 per page"  // ← Change price
    },
    // ... more items
  ],
},
```
 
### Add New Price Item
```typescript
items: [
  // ... existing items
  { 
    service: "New Service", 
    price: "₹50",
    details: "Optional additional details"  // Optional field
  },
]
```
 
### Add New Price Table
```typescript
{
  id: "new-category",
  title: "New Category Name",
  items: [
    { service: "Service 1", price: "₹100" },
    { service: "Service 2", price: "₹200" },
  ],
},
```
 
---
 
## Change Images
 
### Hero Slideshow Images
 
**File:** `/src/data/services.ts`
 
Update the `heroSlides` array:
```typescript
export const heroSlides = [
  {
    id: 1,
    image: "your-image-url-here",  // ← Change this
    title: "Your Title",  // ← Change this
    subtitle: "Your Subtitle",  // ← Change this
  },
  // Add more slides or remove them
]
```
 
### Service Card Images
 
In the `services` array:
```typescript
{
  id: "xerox-printing",
  // ... other fields
  image: "your-new-image-url",  // ← Change this
},
```
 
### Where to Get Images
 
**Option 1: Use Your Own Images**
1. Optimize images (max 1920px width for hero, 800px for services)
2. Upload to your hosting (e.g., `/public/images/`)
3. Reference: `"/images/your-image.jpg"`
 
**Option 2: Free Stock Images**
- Unsplash: https://unsplash.com
- Pexels: https://pexels.com
- Pixabay: https://pixabay.com
 
**Tip:** Use Next.js Image component's automatic optimization by keeping images in the `/public/` folder.
 
---
 
## Customize Colors
 
**File:** `/src/app/globals.css`
 
### Change Primary Color (Blue)
```css
@theme inline {
  /* Change these values */
  --color-blue-500: #3b82f6;  /* Primary blue */
  --color-blue-600: #2563eb;  /* Darker blue */
  --color-blue-700: #1d4ed8;  /* Even darker */
}
```
 
### Popular Color Schemes
 
**Green Theme:**
```css
--color-blue-500: #10b981;
--color-blue-600: #059669;
--color-blue-700: #047857;
```
 
**Purple Theme:**
```css
--color-blue-500: #8b5cf6;
--color-blue-600: #7c3aed;
--color-blue-700: #6d28d9;
```
 
**Orange Theme:**
```css
--color-blue-500: #f97316;
--color-blue-600: #ea580c;
--color-blue-700: #c2410c;
```
 
**Note:** Replace "blue" references in components if you want to use different color names.
 
### Background Colors
 
```css
:root {
  --background: #ffffff;  /* Page background */
  --foreground: #1a1a1a;  /* Text color */
}
```
 
---
 
## Update Content
 
### Site Title & Description
 
**File:** `/src/app/layout.tsx`
 
```typescript
export const metadata: Metadata = {
  title: "Your Site Title Here",  // ← Change this
  description: "Your description here",  // ← Change this
  keywords: "your, keywords, here",  // ← Change this
  authors: [{ name: "Your Name" }],  // ← Change this
  openGraph: {
    title: "Your OG Title",  // ← For social media
    description: "Your OG description",
    // ...
  },
};
```
 
### About Section Content
 
**File:** `/src/components/sections/AboutSection.tsx`
 
Find the paragraph content:
```tsx
  Welcome to CSC Assam... // ← Change these paragraphs
  With over a decade... // ← Change these
```
 
### Statistics
 
In the same file, update the `stats` array:
```typescript
const stats = [
  { icon: Users, value: 5000, label: "Happy Customers", suffix: "+" },
  // ← Change values and labels
]
```
 
### Footer Content
 
**File:** `/src/components/sections/Footer.tsx`
 
Update social media links:
```typescript
const socialLinks = [
  { icon: Facebook, href: "your-facebook-url", label: "Facebook" },
  // ← Add your actual URLs
]
```
 
Update copyright text:
```tsx
  © {new Date().getFullYear()} Your Company Name. All rights reserved.
```
 
---
 
## Add/Remove Sections
 
### Remove a Section
 
**File:** `/src/app/page.tsx`
 
Simply comment out or delete the component:
```tsx
export default function Home() {
  return (
    
      
      
      
      {/*  */}  {/* ← Commented out */}
      
      // ... rest
    
  );
}
```
 
### Reorder Sections
 
Rearrange the components in any order:
```tsx
  
  
  
        {/* ← Moved up */}
     {/* ← After About */}
  
  // ... rest
```
 
### Add a New Section
 
1. Create new file: `/src/components/sections/NewSection.tsx`
 
```tsx
export default function NewSection() {
  return (
    
      
        
          Your New Section
        
        
          Your content here
        
      
    
  );
}
```
 
2. Import and add to `/src/app/page.tsx`:
 
```tsx
import NewSection from "@/components/sections/NewSection";
export default function Home() {
  return (
    
      // ... other sections
        {/* ← Your new section */}
      // ... more sections
    
  );
}
```
 
---
 
## Update Google Maps Location
 
**File:** `/src/components/sections/MapSection.tsx`
 
Replace the iframe `src` URL with your Google Maps embed URL:
 
1. Go to [Google Maps](https://maps.google.com)
2. Search for your location
3. Click "Share" → "Embed a map"
4. Copy the iframe URL
5. Replace in the component:
 
```tsx
<iframe
  src="YOUR_GOOGLE_MAPS_EMBED_URL_HERE"
  // ... other props
/>
```
 
---
 
## Navigation Links
 
**File:** `/src/components/sections/Header.tsx`
 
Update the `navLinks` array:
```typescript
const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Services", href: "#services" },
  // Add, remove, or modify links
  { name: "Gallery", href: "#gallery" },  // ← New link
];
```
 
**Note:** The `href` should match the `id` of the section you want to link to.
 
---
 
## Testing Your Changes
 
After making changes:
 
1. **Development mode:**
```bash
npm run dev
```
Visit http://localhost:3000 to see changes live
 
2. **Production build:**
```bash
npm run build
npm start
```
 
3. **Check on mobile:**
   - Use Chrome DevTools mobile emulator
   - Or test on actual devices
 
---
 
## Tips
 
- Always keep a backup before making major changes
- Test changes in development mode first
- Check both mobile and desktop views
- Verify all links work after changes
- Clear browser cache if changes don't appear
- Run `npm run build` to catch TypeScript errors
 
---
 
## Need Help?
 
- Check the [README.md](./README.md) for project overview
- See [DEPLOYMENT.md](./DEPLOYMENT.md) for hosting options
- Next.js Documentation: https://nextjs.org/docs
- Tailwind CSS: https://tailwindcss.com/docs
- Framer Motion: https://www.framer.com/motion/
