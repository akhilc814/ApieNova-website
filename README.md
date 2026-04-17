# ApieNOVA — Luxury Concierge Website

**Website:** www.apienova.com  
**Stack:** Pure HTML · CSS · Vanilla JS  
**Languages:** English · Russian · Arabic (RTL)

---

## File Structure

```
apienova/
├── index.html
├── css/
│   ├── style.css       (main luxury white theme)
│   └── rtl.css         (Arabic RTL support)
├── js/
│   ├── i18n.js         (EN / RU / AR translations)
│   └── main.js         (interactions, slider, form)
├── assets/
│   ├── favicon.svg
│   └── images/         (← add your 4K photos here)
└── README.md
```

---

## Required Images (assets/images/)

| Filename                | Content                                   |
|-------------------------|-------------------------------------------|
| hero-1.jpg              | Superyacht, Côte d'Azur                   |
| hero-2.jpg              | Aerial Monaco or Saint-Tropez             |
| hero-3.jpg              | Villa pool overlooking the sea            |
| service-yacht.jpg       | Superyacht deck                           |
| service-aviation.jpg    | Private jet                               |
| service-villa.jpg       | Provençal villa                           |
| service-dining.jpg      | Michelin table setting                    |
| service-transport.jpg   | Supercar on Riviera road                  |
| service-events.jpg      | Elegant wedding / château                 |
| service-wellness.jpg    | Spa or rooftop yoga                       |
| service-media.jpg       | Drone / filming                           |
| service-lifestyle.jpg   | Luxury boutique                           |
| exp-monaco.jpg          | Monaco GP                                 |
| exp-lavender.jpg        | Luberon lavender fields                   |
| exp-cannes.jpg          | Cannes Croisette                          |
| exp-wedding.jpg         | Château wedding                           |
| exp-balloon.jpg         | Hot air balloon, Provence                 |
| exp-yacht.jpg           | Sunset yacht                              |
| dest-nice.jpg           | Nice Promenade                            |
| dest-monaco.jpg         | Monaco harbour aerial                     |
| dest-sttropez.jpg       | Saint-Tropez port                         |
| dest-cannes.jpg         | Cannes beach                              |
| dest-provence.jpg       | Provence village                          |
| about-riviera.jpg       | Riviera lifestyle portrait                |
| contact-bg.jpg          | Wide seascape                             |

Free placeholder photos: unsplash.com or pexels.com (search "Cote d'Azur", "yacht", etc.)

---

## GitHub Pages Deployment (Step by Step)

### 1. Create GitHub Repository
- Go to github.com → New Repository
- Name: `apienova-website`
- Public
- Create

### 2. Upload Files
**Via browser (simplest):**
- Drag all files/folders into the repo
- Commit: "Launch ApieNOVA website"

**Via Git CLI:**
```bash
git init
git add .
git commit -m "Launch ApieNOVA website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/apienova-website.git
git push -u origin main
```

### 3. Enable GitHub Pages
- Repo → Settings → Pages
- Source: Deploy from branch → main / root
- Save
- Live at: `https://YOUR_USERNAME.github.io/apienova-website/`

### 4. Connect apienova.com Domain
In your domain registrar (GoDaddy/Namecheap):
- Add CNAME: `www` → `YOUR_USERNAME.github.io`
- Add A records for apex domain:
  ```
  185.199.108.153
  185.199.109.153
  185.199.110.153
  185.199.111.153
  ```
- In GitHub Pages settings → Custom domain → `www.apienova.com`
- Enable "Enforce HTTPS"
- Wait up to 24h for DNS propagation

### 5. Activate the Contact Form (Formspree)
1. Sign up at formspree.io
2. Create a form → copy your endpoint ID
3. In `js/main.js`, replace the `setTimeout` block with:
```javascript
const formData = new FormData(form);
fetch('https://formspree.io/f/YOUR_ID', {
  method: 'POST',
  body: formData,
  headers: { 'Accept': 'application/json' }
}).then(res => {
  if (res.ok) {
    form.style.display = 'none';
    formSuccess.classList.remove('hidden');
  }
});
```

---

## Customization

**Colors** — edit `:root` in `css/style.css`:
```css
--gold: #B8974A;
--charcoal: #1A1A1A;
```

**Translations** — edit `js/i18n.js` objects for `en`, `ru`, `ar`

**Add services** — copy a `.srv-card` in `index.html` and add keys to `i18n.js`

---

## Performance

- Compress images at squoosh.app
- Convert to WebP for faster loading
- Use `loading="lazy"` on all images (already included)

---

*ApieNOVA Group · www.apienova.com · info@apienova.com*
