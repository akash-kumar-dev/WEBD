# Step 2 - SEO Optimisation

Google/Bing has a bunch of `crawlers` that hit websites and figure out what the website does.

It ranks it on `Google` based on the HTML it gets back

The crawlers `DONT` usually run your JS and render your page to see the final output.

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2Fe7961f82-9447-4df5-a4e0-ce73dad86ffa%2FScreenshot_2024-03-02_at_10.06.37_AM.png?table=block&id=f018e860-6c2d-4435-91ec-b7e2727313b3&cache=v2)

💡

While Googlebot can run JavaScript, `dynamically generated` content is harder for the scraper to index

#### 

[](#3a6c64bc406c4087b90b02d087c3ab9d "Try visiting a react website")Try visiting a react website

What does the `Googlebot` get back when they visit a website written in react?

Try visiting [https://blog-six-tan-47.vercel.app/signup](https://blog-six-tan-47.vercel.app/signup)

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2F08ec429f-27b6-4518-8b4b-7c84d00151a8%2FScreenshot_2024-03-02_at_10.10.10_AM.png?table=block&id=a5c7d6ff-b0b5-4551-8cee-996f13715004&cache=v2)

Googlebot has no idea on what the project is. It only sees `Vite + React + TS` in the original HTML response.

Ofcourse when the JS file loads eventually, things get rendered but the `Googlebot` doesn’t discover this content very well.