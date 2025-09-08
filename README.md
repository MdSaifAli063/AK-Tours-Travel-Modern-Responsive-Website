# 🚌 AK Tours & Travel — Modern Responsive Website

<p align="center">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5"/>
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3"/>
  <img src="https://img.shields.io/badge/JavaScript-222?style=for-the-badge&logo=javascript&logoColor=F7DF1E" alt="JavaScript"/>
  <img src="https://img.shields.io/badge/Responsive-Yes-22c55e?style=for-the-badge" alt="Responsive"/>
  <a href="#license"><img src="https://img.shields.io/badge/License-MIT-0ea5e9?style=for-the-badge" alt="License"/></a>
  <img src="https://img.shields.io/badge/PRs-Welcome-8b5cf6?style=for-the-badge" alt="PRs Welcome"/>
</p>

A sleek, mobile-first travel website with a glassy UI, sticky translucent navbar, parallax hero, animated destination cards, and an accessible complaints/reviews page.

- Live Demo: [Link](https://ak-tours-travels.netlify.app/)
- Preview:
- ![image](https://github.com/MdSaifAli063/AK-Tours-Travel-Modern-Responsive-Website/blob/2449ba4b972e48c80f00a1f81b986e17bb2df012/Screenshot%202025-09-08%20212942.png)
- ![image](https://github.com/MdSaifAli063/AK-Tours-Travel-Modern-Responsive-Website/blob/d8c789857e5020ce769252e19ba471e5b8865a8f/Screenshot%202025-09-08%20213036.png)
- ![image](https://github.com/MdSaifAli063/AK-Tours-Travel-Modern-Responsive-Website/blob/c7c11539a265263cdbfbfd9a1fe714f47009f176/Screenshot%202025-09-08%20213428.png)
- ![image](https://github.com/MdSaifAli063/AK-Tours-Travel-Modern-Responsive-Website/blob/7777d052aa1724812e941d2a768a101ef2fc4671/Screenshot%202025-09-08%20213602.png)

---

## ✨ Features

- 🧭 Sticky, translucent navbar with mobile drawer
- 🖼️ Parallax hero with bus background image
- 🗺️ Responsive destination grid with hover animations
- 📝 Complaints & Reviews page (Web3Forms integration + local preview)
- ♿ Accessibility: skip link, semantic structure, keyboard support
- ⚡ Performance: lazy-loaded images, aspect-ratio thumbnails
- 🎨 Easy theming via CSS variables

---

## 📂 Project Structure



/ ├─ main.html # Landing page (Home + Destinations) ├─ message.html # Complaints & Reviews page ├─ style.css # Shared styles (colors, layout, components) ├─ script.js # Navbar toggle & form/local storage logic └─ assets/ # Optional images, icons, and build assets


Pages reference:
- main.html includes: /assets/index-8443d3a0.js and /assets/index-8838ae46.css (keep if needed), plus style.css and script.js
- message.html mirrors the main design and uses the same shared styles

---

## 🚀 Quick Start

- Open main.html directly in a browser, or
- Serve locally for best results:
  - Python: python -m http.server 5173
  - Node (http-server): npx http-server -p 5173 -c-1
  - VS Code: use the “Live Server” extension

Then visit:
- Home: http://localhost:5173/main.html
- Complaints: http://localhost:5173/message.html

---

## 🛠️ Configuration

 ### 1) Web3Forms (message.html)
   Replace the access key with your own:

   <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY" />



   2) Bus background (hero)
    Home hero uses a bus image on the main section (#home in style.css).
    Complaints page hero uses the same bus background:
    header.page-hero {
    background: url('https://c4.wallpaperflare.com/wallpaper/704/217/93/future-bus-computer-desktop-background-wallpaper-preview.jpg')
             center/cover no-repeat fixed;
    }


   3) Theme and colors
    Edit CSS variables in style.css to quickly tweak the theme:

     :root {
     --primary: #4CAF50;
     --accent: #2196F3;
     --text: #111827;
     --white: #ffffff;
     --radius: 14px;
     --shadow-md: 0 10px 25px rgba(0,0,0,.18);
     /* ... */
       }


🖋️ Beautiful Fonts and Icons

   Google Fonts (example: Poppins + Inter)
   Add to main.html and message.html in :
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&family=Poppins:wght@500;700&display=swap" rel="stylesheet">


   In style.css:
      body { font-family: "Inter", "Poppins", ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif; }
      .logo { font-family: "Poppins", sans-serif; font-weight: 800; }

   Tip: Use emojis for quick, lightweight icons in content (e.g., 🚌 ✈️ 🗺️).

🔧 Development Notes

   Navbar drawer and ESC-to-close accessible behavior are handled in script.js.
   Images use loading="lazy" where applicable.
   Destination thumbnails use aspect-ratio for consistent layout.
   The Complaints list displayed under message.html is stored locally in the browser (localStorage) for convenience.

🌐 Deployment

   GitHub Pages
   Push repo to GitHub
   Settings → Pages → Deploy from branch → Select main branch / root
   Access at: [repo](https://github.com/MdSaifAli063/AK-Tours-Travel-Modern-Responsive-Website)
   Netlify
   Drag-and-drop the repo folder or connect to your repo (build command not required)
   Vercel
   New Project → Import → Framework: “Other” → Output: root

🧩 Roadmap (Ideas)

   Search and filter for destinations
   Pagination or carousel for destinations
   Multi-image upload to remote storage
   Dark/light theme toggle
   i18n (multi-language) support

🙏 Credits

   Background bus photo: Wallpaperflare (check license for your use case)
   Other photos as referenced in HTML (e.g., Freepik, MiStay blog) — verify usage rights
   Icons: Emoji, Remix Icon / Font Awesome (CDNs above)

🤝 Contributing

   Pull requests are welcome. For major changes, please open an issue first to discuss what you’d like to change.

📜 License

   MIT — see the LICENSE file for details.
