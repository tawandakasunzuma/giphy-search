# Searcha GIF App

> A fast and modern GIF search app built with React, Tailwind CSS, and the Giphy API, featuring click-to-load pagination, dark mode, and one-click downloads.

🌐 [Live Demo on Netlify](https://searchagif.netlify.app)

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)  
[![GitHub Stars](https://img.shields.io/github/stars/tawandakasunzuma/giphy-search?style=social)](https://github.com/tawandakasunzuma/giphy-search/stargazers)  
[![GitHub Issues](https://img.shields.io/github/issues/tawandakasunzuma/giphy-search)](https://github.com/tawandakasunzuma/giphy-search/issues)

---

## 📝 Overview

**Searcha GIF** enables users to:

- 🔍 Search Giphy’s extensive GIF library by keyword  
- 🖼️ Preview GIFs in a responsive, full-screen modal  
- 💾 Download any GIF directly from the modal view  
- 🌗 Toggle between light & dark themes, with preferences saved in `localStorage`  
- ⬇️ Load more GIFs by clicking the down arrow below the grid  

All results display in a fully responsive grid for desktop and mobile.

---

## 🧰 Tech Stack

- **React** (v17+)
- **Tailwind CSS**
- **Giphy API**
- **localStorage** (theme persistence)
- **Git & GitHub** (version control)
- **Netlify** (deployment)

---

## 🚀 Key Features

- 🔍 Instant search powered by a custom React hook  
- ⬇️ Click-to-load pagination for loading more GIFs  
- 🎨 Smooth theme switching with light/dark modes saved in localStorage  
- 🖼️ Modal preview and direct download of GIFs  
- 📱 Mobile-first responsive design optimized for all screen sizes

---

## 🛠️ Getting Started

**Requirements:** Node.js v14+ and npm or Yarn

1. **Clone the repository**
   ```bash
   git clone https://github.com/tawandakasunzuma/giphy-search.git
   cd giphy-search
   ```
2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Configure environment**

   Create a `.env.local` file in the project root with your Giphy API key:

   ```bash
    # .env.local
    REACT_APP_GIPHY_API_KEY=YOUR_GIPHY_API_KEY
   ```

4. **Run in development**

   ```bash
   npm start
   # or
   yarn start
   ```

5. **Build for production**

   ```bash
   npm run build
   # or
   yarn build
   ```

---

## 💡 Usage Guide

1. 🔎 Type a keyword into the search bar and press **Enter**.  
2. ⬇️ Scroll down and click the **down arrow** button to load more GIFs.  
3. 🖱 Click any GIF to open the full-screen preview modal.  
4. 💾 Click the **Download** button in the modal to save the GIF locally.  
5. 🌗 Toggle the theme switch in the header to switch between light and dark modes.

---

## 📖 Code Structure & Quality

This project follows a clear and modular React architecture:

- `src/components/` — Reusable UI components such as `GifGrid.jsx`, `GifItem.jsx`, `GifModal.jsx`, and `ThemeToggle.jsx`.  
- `src/hooks/useGiphySearch.js` — Custom hook handling the Giphy API search logic and pagination.  
- `src/App.jsx` — Main app component orchestrating the layout and state.  
- `src/index.js` — Application entry point.  

Code is written using modern React best practices with functional components and hooks.  
Tailwind CSS ensures consistent styling with utility-first classes.  
Environment variables manage sensitive keys securely.  
The codebase is clean, well-commented, and structured for scalability and maintainability.

---

## 🧩 Contributing

We welcome contributions! Please follow these steps:

1. **Fork** the repository

2. **Create** a feature branch:

   ```git checkout -b feature/your-feature```

3. **Commit** your changes:

   ```git commit -m "Add new feature"```

4. **Push** to your branch:

   ```git push origin feature/your-feature```

5. **Open** a Pull Request on GitHub

Please ensure your code follows the existing style and includes tests where applicable.

---

## 📬 Contact

For questions, feedback, or collaboration, please reach out to:

**Tawanda Kasunzuma**  
📧 tskasunzuma@gmail.com  
🔗 https://github.com/tawandakasunzuma  
🔗 https://www.linkedin.com/in/tawanda-kasunzuma/
