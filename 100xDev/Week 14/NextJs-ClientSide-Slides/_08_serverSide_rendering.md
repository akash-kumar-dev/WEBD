# Step 8 - Server side rendering

Let’s try exploring the response from the server on the `/signup` route

1.  Run `npm run dev`

2.  Visit `http://localhost:3000/signup`

3.  Notice the response you get back in your HTML file

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2F0ee0691d-fbc6-4497-b603-4898d37787a8%2FScreenshot_2024-03-02_at_2.09.15_PM.png?table=block&id=85e54677-4daa-4370-9c19-27d604bfc1c0&cache=v2)

Now if `GoogleBot` tries to scrape your page, it’ll understand that this is a `signup page` without running any Javascript.

The first `index.html` file it get’s back will have context about the page since it was `server side rendered`