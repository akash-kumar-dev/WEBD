Step 13 - Init the FE project
=============================

1.  Initialise a react app

    npm create vite@latest

1.  Initialise tailwind [https://tailwindcss.com/docs/guides/vite](https://tailwindcss.com/docs/guides/vite)

```bash
    npm install -D tailwindcss postcss autoprefixer
    npx tailwindcss init -p
```

1.  Update tailwind.config.js
```bash
    /** @type {import('tailwindcss').Config} */
    export default {
      content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
      ],
      theme: {
        extend: {},
      },
      plugins: [],
    }
```

1.  Update index.css
```
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
```
1.  Empty up App.css

2.  Install your package
```bash
  npm i your_package
```

1.  Run the project locally
```bash
  npm run dev
```