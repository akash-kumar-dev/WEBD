# Step 14 - Client and server components

Ref - [https://nextjs.org/learn/react-foundations/server-and-client-components](https://nextjs.org/learn/react-foundations/server-and-client-components)

NextJS expects you to identify all your components as either `client` or `server`

As the name suggests

1.  Server components are rendered on the server

2.  Client components are `pre-rendered` and are pushed to the client to be rendered again

By default, all components are `server` components.

If you wan’t to mark a component as a `client` component, you need to add the following to the top of the component -

```javascript
"use client"
```

**When should you create** **`client components`** **?**

1.  Whenever you get an error that tells you that you need to create a client component

2.  Whenever you’re using something that the server doesn’t understand (useEffect, useState, onClick…)

**Rule of thumb is to defer the client as much as possible**

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2Fcfd5f7c3-15ef-410c-95c0-381a0bb2a17e%2FScreenshot_2024-03-02_at_4.29.13_PM.png?table=block&id=3b38e275-9cc3-4fa7-9be7-c3ce2a9da066&cache=v2)

### 

[](#44b06a91cdcd4b3fb4a8f1e630090e2f "Assignment")Assignment

Try updating `components/Signin.tsx` to make it a client component

You will notice that the error goes away

Some nice readings -

[https://github.com/vercel/next.js/discussions/43153](https://github.com/vercel/next.js/discussions/43153)