# Step 12 - Server Actions

Ref - [https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations)

Right now, we wrote an `API endpoint` that let’s the user sign up

```javascript
export async function POST(req: NextRequest) {
    const body = await req.json();
    // should add zod validation here
    const user = await client.user.create({
        data: {
            username: body.username,
            password: body.password
        }
    });

    console.log(user.id);

    return NextResponse.json({ message: "Signed up" });
}
```

What if you could do a simple function call (even on a `client component` that would run on the server?) (similar to `RPC` )

💡

Under the hood, still an HTTP request would go out. But you would feel like you’re making a function call

### 

[](#d24198cf7dcc43c7a8b7d1d1f52a9333 "Steps to follow")Steps to follow

1.  Create `actions/user.ts` file (you can create it in a different folder)

2.  Write a function that takes `username` and `password` as input and stores it in the DB

```javascript
"use server"

import client from "@/db"

export async function signup(username: string, password: string) {
    // should add zod validation here
    const user = await client.user.create({
        data: {
            username: username,
            password: password
        }
    });

    console.log(user.id);

    return "Signed up!"
}
```

1.  Update the `Signup.tsx` file to do the function call

```javascript
import { signup } from "@/actions/user";;

...

<button onClick={async () => {
    const response = await signup(username, password);
    localStorage.setItem("token", response);
    router.push("/")
}} type="button" className="mt-8 w-full text-white bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">Sign in</button>
```

#### 

[](#fb9be5b23f4a4210a7bdd5793f7c5eea "Check the network tab")Check the network tab

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2F5c2df6c3-b672-49a6-bd49-bef3797e9c05%2FScreenshot_2024-03-03_at_6.03.43_PM.png?table=block&id=9e3a311b-c236-43fe-9eb5-21e199fa6498&cache=v2)

### 

[](#9b47e5dce473455baddd30298a9c1f7b "Benefits of server actions")Benefits of server actions

1.  Single function can be used in both client and server components

2.  Gives you types of the function response on the frontend (very similar to trpc)

3.  Can be integrated seamlessly with forms (ref [https://www.youtube.com/watch?v=dDpZfOQBMaU](https://www.youtube.com/watch?v=dDpZfOQBMaU))