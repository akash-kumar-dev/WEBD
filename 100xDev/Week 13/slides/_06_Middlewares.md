Step 6 - Middlewares
====================

Creating a middleware in hono is well documented - [https://hono.dev/guides/middleware](https://hono.dev/guides/middleware)

### 

[](#43e9bc389b9743afb07b3afce9907a7b "1. Limiting the middleware")1\. Limiting the middleware

To restrict a middleware to certain routes, you can use the following -

    app.use('/message/*', async (c, next) => {
      await next()
    })

In our case, the following routes need to be protected -

    
    app.get('/api/v1/blog/:id', (c) => {})
    
    app.post('/api/v1/blog', (c) => {})
    
    app.put('/api/v1/blog', (c) => {})

So we can add a top level middleware

    app.use('/api/v1/blog/*', async (c, next) => {
      await next()
    })

### 

[](#090b23e7b0624d4b8a0ba7a6a34c91c2 "2. Writing the middleware")2\. Writing the middleware

Write the logic that extracts the user id and passes it over to the main route.

How to pass data from middleware to the route handler?

Using the context - [https://hono.dev/api/context](https://hono.dev/api/context)

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2F1b241691-343c-4e08-90e0-c273138567e0%2FScreenshot_2024-02-24_at_10.53.27_AM.png?table=block&id=4048d193-aaae-4bf5-960c-269477d118a1&cache=v2) How to make sure the types of `variables` that are being passed is correct?

    const app = new Hono<{
    	Bindings: {
    		DATABASE_URL: string,
    		JWT_SECRET: string,
    	},
    	Variables : {
    		userId: string
    	}
    }>();

Solution

    app.use('/api/v1/blog/*', async (c, next) => {
    	const jwt = c.req.header('Authorization');
    	if (!jwt) {
    		c.status(401);
    		return c.json({ error: "unauthorized" });
    	}
    	const token = jwt.split(' ')[1];
    	const payload = await verify(token, c.env.JWT_SECRET);
    	if (!payload) {
    		c.status(401);
    		return c.json({ error: "unauthorized" });
    	}
    	c.set('userId', payload.id);
    	await next()
    })

### 

[](#2e89f2ef49e94602803687e52fb4ff4c "3. Confirm that the user is able to access authenticated routes")3\. Confirm that the user is able to access authenticated routes

    app.post('/api/v1/blog', (c) => {
    	console.log(c.get('userId'));
    	return c.text('signin route')
    })

Send the Header from Postman and ensure that the user id gets logged on the server

### 

[](#667c34a3d45f44a49881ec91ae8442a6 "Callout")Callout

💡

If you want, you can extract the prisma variable in a global middleware that set’s it on the context variable

    app.use(”*”, (c) => {
    	const prisma = new PrismaClient({
          datasourceUrl: c.env.DATABASE_URL,
      }).$extends(withAccelerate());
      c.set(”prisma”, prisma);
    })

Ref [https://stackoverflow.com/questions/75554786/use-cloudflare-worker-env-outside-fetch-scope](https://stackoverflow.com/questions/75554786/use-cloudflare-worker-env-outside-fetch-scope)