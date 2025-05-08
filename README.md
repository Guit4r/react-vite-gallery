# 🖼️ SPA Image Gallery with Hashtag Filter

A responsive Single Page Application (SPA) built with **React**, **Vite**, and **Tailwind CSS** that displays an image gallery with hashtag-based filtering and infinite scroll.  
Designed for the Full-Stack Developer assessment.

## 🔗 Live Demo

🌐 [https://react-vite-gallery.vercel.app](https://spa-gallery.vercel.app)  
📦 [GitHub Repository](https://github.com/Guit4r/react-vite-gallery)

---

## ✨ Features

- 📸 Dynamic image gallery with varying image sizes
- 🔖 Hashtag filtering: click on a tag to filter images
- 🔁 Infinite scroll loading
- 📱 Fully responsive layout (mobile-first)
- 🧱 Masonry layout using `react-masonry-css`
- ⚡ Powered by Vite for blazing fast development

---

## 🧑‍💻 Tech Stack

| Layer        | Technology                                                           |
|--------------|----------------------------------------------------------------------|
| Frontend     | [React](https://reactjs.org/) + [Vite](https://vitejs.dev/)          |
| Styling      | [Tailwind CSS](https://tailwindcss.com/)                             |
| Layout       | [react-masonry-css](https://www.npmjs.com/package/react-masonry-css) |
| Deployment   | [Vercel](https://vercel.com/) (Static Hosting + CDN)                 |
| Language     | TypeScript                                                           |

---

## 🗂️ Project Structure

```
├── src/
│   ├── assets/                 # รูปภาพ โลโก้ หรือไฟล์ static (optional)
│   ├── components/             # Reusable UI components
│   │   └── HashtagFilter.tsx   # ปุ่ม hashtags สำหรับ filter
│   │   └── ImageCard.tsx       # แสดงรูปพร้อม hashtags
│   │
│   ├── pages/                  # หน้า SPA (ถ้ามีหลายหน้า)
│   │   └── Gallery.tsx         # หน้าหลักแสดง Gallery
│   │
│   ├── types/                  # TypeScript type definitions
│   │   └── image.ts            # interface ImageData
│   │   └── props.ts            # interface Props
│   │
│   ├── utils/                  # ฟังก์ชันช่วย เช่น generate data
│   │   └── generateImage.ts    # สร้างรูป + hashtags จำลอง
│   │
│   ├── App.tsx                 # Entry point ของ App
│   ├── main.tsx                # Entry ของ React DOM
│   ├── index.css               # Tailwind CSS
│   └── vite-env.d.ts           # Vite type declarations
└──
```

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Guit4r/react-vite-gallery
cd react-vite-gallery
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the development server

```bash
npm run dev
```

---

## 🏗️ Build for Production

```bash
npm run build
```

Static files will be output to the `dist/` folder.

---

## 🖼️ Image & Tag Generation

- Images are generated using [placehold.co](https://placehold.co)
- Hashtags are randomly generated and unlimited per image

---

## 🛠️ Deployment

Deployed via [Vercel](https://vercel.com), using automatic deployment from GitHub `main` branch.

> 🧠 **Note:** This is a fully static app — no backend or database required.

---

## 📄 License

Copyright © 2025 Sirawit Kitisi.