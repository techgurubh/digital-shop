# Quick Start Guide
 
Get your CSC Assam website up and running in 5 minutes!
 
## 🚀 Running Locally
 
### 1. Install Dependencies
```bash
npm install
```
 
### 2. Start Development Server
```bash
npm run dev
```
 
### 3. Open in Browser
Visit [http://localhost:3000](http://localhost:3000)
 
That's it! Your website is now running locally.
 
---
 
## ⚡ Quick Customizations
 
### Update Your Contact Details (2 minutes)
 
1. Open `/src/data/services.ts`
2. Find `contactInfo` array
3. Update phone, email, and address:
```typescript
{
  value: "+91 YOUR-PHONE-HERE",
  link: "tel:+91YOURPHONE",
}
```
 
### Change Company Name (1 minute)
 
1. Open `/src/components/sections/Header.tsx`
2. Find:
```tsx
CSC Assam
```
3. Replace with your company name
 
Also update in:
- `/src/components/sections/Footer.tsx`
- `/src/app/layout.tsx` (page title)
 
### Update Prices (3 minutes)
 
1. Open `/src/data/services.ts`
2. Find `priceTables` array
3. Update prices:
```typescript
{ service: "Black & White Print", price: "₹2 per page" }
```
 
---
 
## 🌐 Deploy to Internet (Free!)
 
### Option 1: Vercel (Easiest - 2 minutes)
 
1. Create account at [vercel.com](https://vercel.com)
2. Click "New Project"
3. Import your GitHub repository
4. Click "Deploy"
5. Done! Your site is live
 
### Option 2: Netlify (Alternative)
 
1. Create account at [netlify.com](https://netlify.com)
2. Drag and drop the `.next` folder after running `npm run build`
3. Done!
 
**Cost:** FREE for both options!
 
---
 
## 📱 Test on Mobile
 
While dev server is running:
1. Find your computer's local IP (e.g., 192.168.1.100)
2. On mobile, visit: `http://YOUR-IP:3000`
3. Make sure both devices are on same WiFi
 
---
 
## 🎨 Change Colors (2 minutes)
 
1. Open `/src/app/globals.css`
2. Find color variables:
```css
--color-blue-500: #3b82f6;  /* Change this */
--color-blue-600: #2563eb;  /* And this */
```
3. Replace with your brand colors
 
**Popular options:**
- Green: `#10b981`
- Purple: `#8b5cf6`
- Orange: `#f97316`
- Red: `#ef4444`
 
---
 
## 📸 Replace Images (5 minutes)
 
### Hero Slideshow Images:
1. Prepare 3 images (1920x1080px recommended)
2. Put them in `/public/images/`
3. Open `/src/data/services.ts`
4. Update `heroSlides` array:
```typescript
image: "/images/your-image-1.jpg"
```
 
### Service Card Images:
Update in `services` array:
```typescript
image: "/images/your-service-image.jpg"
```
 
**Tip:** Use free images from [Unsplash](https://unsplash.com) if you don't have your own yet.
 
---
 
## ✅ Common Commands
 
```bash
# Start development server
npm run dev
# Build for production
npm run build
# Check for code errors
npm run lint
# Start production server (after build)
npm start
```
 
---
 
## 🔧 Troubleshooting
 
### Port 3000 already in use?
```bash
# Use different port
PORT=3001 npm run dev
```
 
### Changes not showing?
1. Stop the server (Ctrl+C)
2. Delete `.next` folder
3. Run `npm run dev` again
 
### Build errors?
```bash
# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```
 
---
 
## 📚 Next Steps
 
After the basics are working:
 
1. **Read the full README.md** - Comprehensive project overview
2. **Check CUSTOMIZATION.md** - Detailed customization guide  
3. **Review DEPLOYMENT.md** - Production deployment options
4. **Customize content** - Update About section, services, etc.
5. **Add your branding** - Logo, colors, fonts
6. **Set up custom domain** - Point your domain to the deployed site
7. **Add analytics** - Google Analytics or similar
8. **Test thoroughly** - All links, mobile view, different browsers
 
---
 
## 🆘 Need Help?
 
### Resources:
- Project README: [README.md](./README.md)
- Customization Guide: [CUSTOMIZATION.md](./CUSTOMIZATION.md)
- Deployment Guide: [DEPLOYMENT.md](./DEPLOYMENT.md)
- Next.js Docs: https://nextjs.org/docs
- Tailwind CSS Docs: https://tailwindcss.com/docs
 
### Common Questions:
 
**Q: How do I add a new service?**  
A: Edit `/src/data/services.ts` and add a new object to the `services` array.
 
**Q: How do I change the Google Maps location?**  
A: Edit `/src/components/sections/MapSection.tsx` and replace the iframe src URL.
 
**Q: Can I add a contact form?**  
A: Yes! You'll need to set up a backend service or use a service like [Formspree](https://formspree.io) or [EmailJS](https://www.emailjs.com/).
 
**Q: How do I remove a section?**  
A: Open `/src/app/page.tsx` and comment out or delete the component.
 
**Q: Is this mobile-friendly?**  
A: Yes! The site is fully responsive and tested on mobile devices.
 
**Q: Can I use my own domain?**  
A: Yes! All hosting providers (Vercel, Netlify) support custom domains.
 
---
 
## 🎉 You're All Set!
 
Your modern CSC website is ready. Start customizing and make it your own!
 
**Pro Tip:** Make one change at a time and test it before moving to the next. This helps catch any issues early.
 
Happy building! 🚀
