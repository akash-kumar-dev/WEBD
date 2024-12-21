Step 3 - Initialize handlers
============================

To begin with, our backend will have 4 routes

1.  POST /api/v1/user/signup

2.  POST /api/v1/user/signin

3.  POST /api/v1/blog

4.  PUT /api/v1/blog

5.  GET /api/v1/blog/:id

6.  GET /api/v1/blog/bulk

💡

[https://hono.dev/api/routing](https://hono.dev/api/routing)

Solution

    import { Hono } from 'hono';
    
    // Create the main Hono app
    const app = new Hono();
    
    app.post('/api/v1/signup', (c) => {
    	return c.text('signup route')
    })
    
    app.post('/api/v1/signin', (c) => {
    	return c.text('signin route')
    })
    
    app.get('/api/v1/blog/:id', (c) => {
    	const id = c.req.param('id')
    	console.log(id);
    	return c.text('get blog route')
    })
    
    app.post('/api/v1/blog', (c) => {
    
    	return c.text('signin route')
    })
    
    app.put('/api/v1/blog', (c) => {
    	return c.text('signin route')
    })
    
    export default app;