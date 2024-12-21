Step 7 - Blog routes and better routing
=======================================

### 

[](#14b13c18b204416b83971338ac1e979b "Better routing")Better routing

[https://hono.dev/api/routing#grouping](https://hono.dev/api/routing#grouping)

Hono let’s you group routes together so you can have a cleaner file structure.

Create two new files -

`routes/user.ts`

`routes/blog.ts` and push the user routes to `user.ts`

index.ts

    import { Hono } from 'hono'
    import { userRouter } from './routes/user';
    import { bookRouter } from './routes/blog';
    
    export const app = new Hono<{
      Bindings: {
          DATABASE_URL: string;
          JWT_SECRET: string;
      }
    }>();
    
    app.route('/api/v1/user', userRouter)
    app.route('/api/v1/book', bookRouter)
    
    export default app

user.ts

    import { PrismaClient } from "@prisma/client/edge";
    import { withAccelerate } from "@prisma/extension-accelerate";
    import { Hono } from "hono";
    import { sign } from "hono/jwt";
    
    export const userRouter = new Hono<{
        Bindings: {
            DATABASE_URL: string;
            JWT_SECRET: string;
        }
    }>();
    
    userRouter.post('/signup', async (c) => {
        const prisma = new PrismaClient({
          datasourceUrl: c.env.DATABASE_URL,
        }).$extends(withAccelerate());
      
        const body = await c.req.json();
      
        const user = await prisma.user.create({
          data: {
            email: body.email,
            password: body.password,
          },
        });
      
        const token = await sign({ id: user.id }, c.env.JWT_SECRET)
      
        return c.json({
          jwt: token
        })
    })
      
    userRouter.post('/signin', async (c) => {
        const prisma = new PrismaClient({
        //@ts-ignore
            datasourceUrl: c.env?.DATABASE_URL	,
        }).$extends(withAccelerate());
    
        const body = await c.req.json();
        const user = await prisma.user.findUnique({
            where: {
                email: body.email,
        password: body.password
            }
        });
    
        if (!user) {
            c.status(403);
            return c.json({ error: "user not found" });
        }
    
        const jwt = await sign({ id: user.id }, c.env.JWT_SECRET);
        return c.json({ jwt });
    })

[](#db60ad35dcda405facc20e58efaf95b6 "Blog routes")Blog routes
----------------------------------------------------------------

### 

[](#00e1f1785bae494e84bc2de8b5ad5262 "1. Create the route to initialize a blog/post")1\. Create the route to initialize a blog/post

Solution

    app.post('/', async (c) => {
    	const userId = c.get('userId');
    	const prisma = new PrismaClient({
    		datasourceUrl: c.env?.DATABASE_URL	,
    	}).$extends(withAccelerate());
    
    	const body = await c.req.json();
    	const post = await prisma.post.create({
    		data: {
    			title: body.title,
    			content: body.content,
    			authorId: userId
    		}
    	});
    	return c.json({
    		id: post.id
    	});
    })

### 

[](#729a7e5101f743e987f24f3a2efa35d5 "2. Create the route to update blog")2\. Create the route to update blog

Solution

    app.put('/api/v1/blog', async (c) => {
    	const userId = c.get('userId');
    	const prisma = new PrismaClient({
    		datasourceUrl: c.env?.DATABASE_URL	,
    	}).$extends(withAccelerate());
    
    	const body = await c.req.json();
    	prisma.post.update({
    		where: {
    			id: body.id,
    			authorId: userId
    		},
    		data: {
    			title: body.title,
    			content: body.content
    		}
    	});
    
    	return c.text('updated post');
    });

### 

[](#31f8d8ed13964406a2f5b43d96e3edf4 "3. Create the route to get a blog")3\. Create the route to get a blog

Solution

    app.get('/api/v1/blog/:id', async (c) => {
    	const id = c.req.param('id');
    	const prisma = new PrismaClient({
    		datasourceUrl: c.env?.DATABASE_URL	,
    	}).$extends(withAccelerate());
    	
    	const post = await prisma.post.findUnique({
    		where: {
    			id
    		}
    	});
    
    	return c.json(post);
    })  

### 

[](#e0ed11d4ed44468d991b05c829986bd9 "4. Create the route to get all blogs")4\. Create the route to get all blogs

Solution

    app.get('/api/v1/blog/bulk', async (c) => {
    	const prisma = new PrismaClient({
    		datasourceUrl: c.env?.DATABASE_URL	,
    	}).$extends(withAccelerate());
    	
    	const posts = await prisma.post.find({});
    
    	return c.json(posts);
    })  

Try to hit the routes via POSTMAN and ensure they work as expected

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2F635489e9-5e15-4002-ac6d-86a5f9f84e4b%2FScreenshot_2024-02-24_at_11.44.00_AM.png?table=block&id=4335acbe-6a2c-4513-bb4e-deb8aba8b71f&cache=v2)