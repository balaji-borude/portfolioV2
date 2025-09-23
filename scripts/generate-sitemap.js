// scripts/generate-sitemap.js

// this is for usullly better seo frienldy if we have multiple pages in application 
// this script help to automate the sitemap.xml for out application 


import fs from 'fs';

const BASE_URL = 'https://yourdomain.com'; // update this
const pages = ['/', '/about', '/projects', '/contact']; // keep maintained

const lastmod = new Date().toISOString();
const urls = pages.map(p => `
  <url>
    <loc>${BASE_URL}${p}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>`).join('');

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

fs.writeFileSync('public/sitemap.xml', sitemap, 'utf8');
console.log('Wrote public/sitemap.xml');
