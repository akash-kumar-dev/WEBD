## Serverless
`serverless` is a backend as a service (BaaS) that allows you to build and deploy serverless applications.
"serverless" is a backend deployment in which the `cloud provider` dynamically manages the allocation and provisioning of servers.
- The term "serverless" does not mean that there are no servers involved. instead, it means that developers do not have to worry about the servers.

**Famous serverless providers**
- AWS Lambda
- Azure Functions
- Google Cloud Functions
- ***Cloudflare Workers***

### Clodfare Workers
cloudflare workers DONT use the Node.js runtime. They have created tehir own runtime.

**Isolates**
`v8 orchestrates isolates`: lightweight context that provide your code with variables it can access and a safe environment to be executed within.

### initilize a worker
- initialize a worker
```
npm create clodefare -- my-app
npm run dev # run local server
```

`"wrangler": "^3.0.0"` dependency: CLI for Cloudflare Workers

### Deploying a worker
- login to the cloudflare account by wrangler
```
npx wrangler login
npx wrangler whoami // check if you are logged in
```
- deploy the worker
```
npm run deploy
```
***We can not use Express.js in Cloudflare Workers***
### hono - a framework for Cloudflare Workers

## Workers with hono
It is a framework for cloudflare workers. It is a routing engine (it not like an HTTP server) that route request to certain places gives an easier way to write code similar to Express.

- inilize a new app
```
npm create hono@latest my-app
```

- Getting Input from User
```
import { Hono } from 'hono'

const app = new Hono()

app.post('/', async (c) => {
  const body = await c.req.json()
  console.log(body);
  console.log(c.req.header("Authorization"));
  console.log(c.req.query("param"));

  return c.text('Hello Hono!')
})

export default app
```