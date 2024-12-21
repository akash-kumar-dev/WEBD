Step 5 - Create non auth routes
===============================

#### 

[](#c81fa73c81944c119ec8a5a73aef051d "1. Simple Signup route")1\. Simple Signup route

Add the logic to insert data to the DB, and if an error is thrown, tell the user about it

Solution

    app.post('/api/v1/signup', async (c) => {
    	const prisma = new PrismaClient({
    		datasourceUrl: c.env?.DATABASE_URL,
    	}).$extends(withAccelerate());
    	const body = await c.req.json();
    	try {
    		const user = await prisma.user.create({
    			data: {
    				email: body.email,
    				password: body.password
    			}
    		});
    	
    		return c.text('jwt here')
    	} catch(e) {
    		return c.status(403);
    	}
    })

💡

To get the right types on `c.env`, when initializing the Hono app, pass the types of env as a generic

    const app = new Hono<{
    	Bindings: {
    		DATABASE_URL: string
    	}
    }>();

💡

Ideally you shouldn’t store passwords in plaintext. You should hash before storing them. More details on how you can do that - [https://community.cloudflare.com/t/options-for-password-hashing/138077](https://community.cloudflare.com/t/options-for-password-hashing/138077) [https://developers.cloudflare.com/workers/runtime-apis/web-crypto/](https://developers.cloudflare.com/workers/runtime-apis/web-crypto/)

#### 

[](#8be0c73a89ff4a97a6f7692b4e0320ef "2. Add JWT to signup route")2\. Add JWT to signup route

Also add the logic to return the user a `jwt` when their user id encoded. This would also involve adding a new env variable `JWT_SECRET` to wrangler.toml

💡

Use jwt provided by hono - [https://hono.dev/helpers/jwt](https://hono.dev/helpers/jwt)

Solution

    import { PrismaClient } from '@prisma/client/edge'
    import { withAccelerate } from '@prisma/extension-accelerate'
    import { Hono } from 'hono';
    import { sign } from 'hono/jwt'
    
    // Create the main Hono app
    const app = new Hono<{
    	Bindings: {
    		DATABASE_URL: string,
    		JWT_SECRET: string,
    	}
    }>();
    
    
    app.post('/api/v1/signup', async (c) => {
    	const prisma = new PrismaClient({
    		datasourceUrl: c.env?.DATABASE_URL	,
    	}).$extends(withAccelerate());
    
    	const body = await c.req.json();
    	try {
    		const user = await prisma.user.create({
    			data: {
    				email: body.email,
    				password: body.password
    			}
    		});
    		const jwt = await sign({ id: user.id }, c.env.JWT_SECRET);
    		return c.json({ jwt });
    	} catch(e) {
    		c.status(403);
    		return c.json({ error: "error while signing up" });
    	}
    })

#### 

[](#2ce82abdd08c40b3975815f44549a50b "3. Add a signin route")3\. Add a signin route

Solution

    
    app.post('/api/v1/signin', async (c) => {
    	const prisma = new PrismaClient({
    		datasourceUrl: c.env?.DATABASE_URL	,
    	}).$extends(withAccelerate());
    
    	const body = await c.req.json();
    	const user = await prisma.user.findUnique({
    		where: {
    			email: body.email
    		}
    	});
    
    	if (!user) {
    		c.status(403);
    		return c.json({ error: "user not found" });
    	}
    
    	const jwt = await sign({ id: user.id }, c.env.JWT_SECRET);
    	return c.json({ jwt });
    })