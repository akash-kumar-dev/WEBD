# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

## Tailwind CSS
https://tailwindcss.com/docs/guides/vite

```
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```


and add to `tailwind.config.js` in `content` so Tailwind CSS can find the content.
```
"./index.html",
"./src/**/*.{js,ts,jsx,tsx}",
```