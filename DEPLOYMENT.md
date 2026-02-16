# Deployment Guide for CSC Assam Website

## Quick Deploy Options
 
### Option 1: Deploy to Vercel (Recommended)
 
Vercel is the company behind Next.js and offers the best performance and easiest deployment:
 
1. **Prerequisites:**
   - A GitHub account
   - A Vercel account (sign up at [vercel.com](https://vercel.com))
 
2. **Steps:**
   - Push your code to GitHub
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js and configure everything
   - Click "Deploy"
   - Your site will be live in ~2 minutes with a `.vercel.app` URL
   - Add a custom domain in Project Settings if desired
 
**Benefits:**
- Automatic HTTPS
- Global CDN
- Automatic deployments on git push
- Free for personal projects
 
### Option 2: Deploy to Netlify
 
1. **Steps:**
   - Push code to GitHub
   - Go to [netlify.com](https://netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Connect to GitHub and select your repository
   - Build settings:
     - Build command: `npm run build`
     - Publish directory: `.next`
   - Click "Deploy"
 
### Option 3: Deploy to Railway
 
1. **Steps:**
   - Push code to GitHub
   - Go to [railway.app](https://railway.app)
   - Click "New Project" → "Deploy from GitHub repo"
   - Select your repository
   - Railway auto-detects Next.js
   - Click "Deploy"
 
### Option 4: Deploy to Your Own Server (VPS/Cloud)
 
If you have a VPS (DigitalOcean, AWS, GCP, Azure, etc.):
 
#### Prerequisites:
- Node.js 18+ installed on server
- Domain name (optional)
- PM2 or similar process manager
 
#### Steps:
 
1. **Clone your repository on the server:**
```bash
git clone 
cd project
```
 
2. **Install dependencies:**
```bash
npm install
```
 
3. **Build the application:**
```bash
npm run build
```
 
4. **Start the production server:**
```bash
npm start
```
 
This starts the server on port 3000. Visit `http://your-server-ip:3000`
 
5. **Use PM2 for production (recommended):**
```bash
# Install PM2 globally
npm install -g pm2
# Start the app with PM2
pm2 start npm --name "csc-assam" -- start
# Make PM2 start on system reboot
pm2 startup
pm2 save
```
 
6. **Set up Nginx as reverse proxy (optional):**
 
Create `/etc/nginx/sites-available/csc-assam`:
```nginx
server {
    listen 80;
    server_name your-domain.com www.your-domain.com;
    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```
 
Enable the site:
```bash
sudo ln -s /etc/nginx/sites-available/csc-assam /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```
 
7. **Set up SSL with Let's Encrypt (free):**
```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d your-domain.com -d www.your-domain.com
```
 
## Environment Variables
 
If you need to add environment variables:
 
1. Create a `.env.local` file in the project root:
```env
NEXT_PUBLIC_SITE_URL=https://your-domain.com
NEXT_PUBLIC_CONTACT_EMAIL=info@cscassam.in
NEXT_PUBLIC_CONTACT_PHONE=+919876543210
```
 
2. Access them in your code:
```typescript
const email = process.env.NEXT_PUBLIC_CONTACT_EMAIL;
```
 
## Custom Domain Setup
 
### For Vercel/Netlify/Railway:
1. Go to your project settings
2. Navigate to "Domains" section
3. Add your custom domain
4. Follow the DNS configuration instructions
5. Point your domain's DNS to the provided servers
 
### Common DNS Records:
- **A Record**: Point to the server IP address
- **CNAME Record**: Point www subdomain to the main domain
- **AAAA Record**: For IPv6 support
 
## Performance Optimization
 
### 1. Image Optimization
Replace placeholder images with optimized images:
- Use WebP format
- Compress images (use tools like TinyPNG)
- Use appropriate sizes (max 1920px width for hero images)
 
### 2. Enable Caching
Add these headers in your hosting platform or Nginx:
```nginx
location ~* \.(jpg|jpeg|png|gif|ico|css|js|woff2)$ {
    expires 1y;
    add_header Cache-Control "public, immutable";
}
```
 
### 3. Enable Compression
Most modern hosts enable this by default, but verify gzip is enabled.
 
## Monitoring
 
### Basic Monitoring:
- **Uptime**: Use [UptimeRobot](https://uptimerobot.com) (free)
- **Analytics**: Add Google Analytics or Plausible
- **Performance**: Use [Google PageSpeed Insights](https://pagespeed.web.dev/)
 
### For PM2 (Server deployments):
```bash
# View logs
pm2 logs csc-assam
# Monitor process
pm2 monit
# View process status
pm2 status
```
 
## Troubleshooting
 
### Build Fails
```bash
# Clear cache and rebuild
rm -rf .next node_modules
npm install
npm run build
```
 
### Port Already in Use
```bash
# Change port (in start script or PM2)
PORT=3001 npm start
```
 
### Images Not Loading
- Verify image URLs are accessible
- Check Next.js Image domains in `next.config.ts`
- For external images, add domains to config
 
### Slow Performance
- Ensure images are optimized
- Enable CDN through your hosting provider
- Check network tab in browser DevTools
 
## Backup Strategy
 
### Regular Backups:
1. **Code**: Keep in Git repository (GitHub/GitLab)
2. **Database**: Not applicable (static site)
3. **Assets**: Keep original images in a separate folder
 
## Updating the Site
 
### On Vercel/Netlify/Railway:
1. Make changes locally
2. Test with `npm run dev`
3. Commit and push to GitHub
4. Automatic deployment happens within 2 minutes
 
### On Your Own Server:
```bash
cd /path/to/project
git pull
npm install
npm run build
pm2 restart csc-assam
```
 
## Cost Estimates
 
- **Vercel/Netlify**: FREE (for most use cases)
- **Railway**: ~$5/month
- **Basic VPS**: $5-10/month (DigitalOcean, Linode)
- **Domain**: $10-15/year (.com/.in)
- **SSL Certificate**: FREE (Let's Encrypt)
 
## Security Checklist
 
- ✅ Use HTTPS (enabled by default on Vercel/Netlify)
- ✅ Keep dependencies updated (`npm audit`)
- ✅ Enable firewall on VPS
- ✅ Use strong passwords for hosting accounts
- ✅ Enable 2FA on GitHub and hosting accounts
- ✅ Regular backups
 
## Support
 
For deployment issues:
- Next.js Docs: https://nextjs.org/docs
- Vercel Docs: https://vercel.com/docs
- Netlify Docs: https://docs.netlify.com
- Railway Docs: https://docs.railway.app
 
## Production Checklist
 
Before going live:
 
- [ ] Replace all placeholder images with real ones
- [ ] Update contact information in `/src/data/services.ts`
- [ ] Update prices in `/src/data/services.ts`
- [ ] Update Google Maps location in `/src/components/sections/MapSection.tsx`
- [ ] Test on mobile devices
- [ ] Test on different browsers
- [ ] Add Google Analytics (optional)
- [ ] Set up contact form backend if needed
- [ ] Add social media links in footer
- [ ] Test all navigation links
- [ ] Check loading speed (PageSpeed Insights)
- [ ] Set up domain and SSL
- [ ] Configure DNS properly
- [ ] Test contact links (phone, email)
- [ ] Verify all images load correctly
- [ ] Check console for errors
- [ ] Test smooth scrolling on all devices
