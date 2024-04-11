# Tailwind-css
***
Rapidly build modern websites without ever leaving your HTML.

A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup.

visit [Tailwind css home page](https://tailwindcss.com/ "Tailwindcss")

***
## Methods to use Tailwind css
***

**1. CDN :**
    Add the Play CDN script tag to the <head> of your HTML file, and start using Tailwind’s utility classes to style your content.<br>
`<script src="https://cdn.tailwindcss.com"></script>`
<h1 class="text-3xl font-bold underline">
    Hello world!
</h1>

***

**2. using PostCSS : (Tailwind CLI)**

_1- Install tailwindcss_

`$ npm install -D tailwindcss postcss autoprefixer`

_2- install vite project(for auto refresh and for more features)_

`$ npm i vite`

_3- create its tailwind.config.js file._

`$ npx tailwindcss init -p`

_4- (Configure your template paths) - Add the paths to all of your template files in your `tailwind.config.js` file._

`content: ["*"]`    for adding in whole project

_5- (Add the Tailwind directives to your CSS)_

_Add the @tailwind directives for each of Tailwind’s layers to your `main.css` or `style.css` CSS file._

``` style.css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

_6- adding config in `package.json` for starting the server of our project using vite_

```
"scripts": {
    "start": "vite"
  },
```

_7- start vite server_

`$ npm run start`

_8- link css_

***

## Uses:

Docs [TailwindCSS Docs](https://tailwindcss.com/docs/ "Tailwindcss")

```
<h1 class="underline ml-4">Hello World</h1>

```

for apply custom size use square bracket
```
<div class="w-[50px] h-[5rem]"></div>
```

**-> using Apply Directive**

use `@apply` to inline any existing utility classes into your own custom CSS.

Ex:

```
.box {
    @apply bg-purple-500 text-white m-4 border-2 border-black rounded-2xl p-4 text-center h-[100px] sm:w-32 md:w-48;
}
```

```
<div class="box">One</div>
<div class="box">two</div>
```