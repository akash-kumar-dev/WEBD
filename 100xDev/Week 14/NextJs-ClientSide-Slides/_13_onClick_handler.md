# Step 13 - Add a button onclick handler

Now try adding a `onclick` handler to the `button` on the signin page

```javascript
<button onClick={() => {
    console.log("User clicked on signin")
}} type="button" className="mt-8 w-full text-white bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">Sign in</button>
```

You will notice an error when you open the page

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2F016ae0b6-9072-4af8-9f0a-44e76d9dbbd4%2FScreenshot_2024-03-02_at_4.36.15_PM.png?table=block&id=df07ff59-b135-4a90-8edd-7a8097cedca0&cache=v2)

What do you think is happening here? Let’s explore in the next slide