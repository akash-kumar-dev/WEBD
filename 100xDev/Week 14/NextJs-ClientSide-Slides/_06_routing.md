# Step 6 - Understanding routing in Next

### 

[](#f9200c43e6bb49c5b1ce3b6afbc4172e "Routing in React")Routing in React

[https://blog-six-tan-47.vercel.app/signup](https://blog-six-tan-47.vercel.app/signup)

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2Fc8f2b98f-bea9-48d8-842d-b08c53b4e247%2FScreenshot_2024-03-02_at_1.37.50_PM.png?table=block&id=29d75677-986c-4442-8e10-6d9e625d5e45&cache=v2)

### 

[](#1efa3a04c7274dd9bbaceca598a49d79 "Routing in Next.js")Routing in Next.js

Next.js has a `file based router` ([https://nextjs.org/docs/app/building-your-application/routing/defining-routes](https://nextjs.org/docs/app/building-your-application/routing/defining-routes))

This means that the way you create your files, describes what renders on a route

1.  Let’s add a new folder in `app` called `signup`

2.  Let’s add a file called `page.tsx` inside `app/signup`

page.tsx

```javascript

export default function Signup() {
    return (
      <div>
        hi from the signup page
      </div>
    );
  }
```

1.  Start the application locally

```javascript
npm run dev
```

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2F879c5fdc-0044-4565-9f3b-342c22a9dec6%2FScreenshot_2024-03-02_at_1.49.52_PM.png?table=block&id=51800b16-8f20-472e-9b76-a68412aaa021&cache=v2)

#### 

[](#fb03ebedaccd42a6a948b09c23376a6f "Final folder structure")Final folder structure

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2F2cb8d576-6ac2-48e5-92e5-6b6056c3fe5e%2FScreenshot_2024-03-02_at_1.51.48_PM.png?table=block&id=928c7092-5eb6-4628-b689-7bc18f355d12&cache=v2)

#### 

[](#8a948adb176b46c6a9d9efb73eb53324 "Assignment - Can you add a signin route?")Assignment - Can you add a `signin` route?

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2F517e81a1-f286-4009-b2c0-27860fa0aa25%2FScreenshot_2024-03-02_at_1.54.58_PM.png?table=block&id=44aa8294-6c62-4639-9fe1-cfe8d9fe4d01&cache=v2)