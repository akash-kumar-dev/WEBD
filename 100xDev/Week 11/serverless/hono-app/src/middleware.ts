import { Hono } from 'hono'

const app = new Hono()

async function authMiddleware(c: any, next: any) {
    if(c.req.header("Authorization")) {
      await next();
    } else {
      return c.text("You dont have access");
    }
}

app.get('/',authMiddleware, (c) => {
  return c.text('Hello Hono!')
})


export default app
