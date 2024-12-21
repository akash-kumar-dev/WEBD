Step 8 - Understanding the types
================================

### 

[](#0d79b92bd89d4ce5a4eb1b8a31f514a6 "Bindings")Bindings

[https://hono.dev/getting-started/cloudflare-workers#bindings](https://hono.dev/getting-started/cloudflare-workers#bindings)

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2F3fe02296-f411-4b2c-9611-d644cdc75491%2FScreenshot_2024-02-25_at_12.28.23_PM.png?table=block&id=2153228f-6353-4dbf-a0b3-30e9a6c3127e&cache=v2)

#### 

[](#aaf743abd203462992bc54a9744c53ca "In our case, we need 2 env variables - ")In our case, we need 2 env variables -

JWT\_SECRET

DATABASE\_URL

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2F988e2352-4a8e-4e5d-850b-4f51baa0c312%2FScreenshot_2024-02-25_at_12.32.56_PM.png?table=block&id=b8a4776c-a778-4916-b598-fb3c9747a25d&cache=v2)

### 

[](#02e9d9d5f16a4f2fb626d9840e215634 "Variables")Variables

[https://hono.dev/api/context#var](https://hono.dev/api/context#var)

If you wan’t to get and set values on the context of the request, you can use `c.get` and `c.set`

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2F05913613-86e4-4b13-87b0-8e01e5f8be5a%2FScreenshot_2024-02-25_at_12.37.08_PM.png?table=block&id=9a8d2c29-f8c8-4b68-853c-01ca7159fcb0&cache=v2)

You need to make typescript `aware` of the variables that you will be setting on the context.

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2Fc56ce270-8d5f-4234-852e-a30b6ab7ee88%2FScreenshot_2024-02-25_at_12.38.33_PM.png?table=block&id=12f2be2b-043e-4e61-9dee-537f9286fdb9&cache=v2)

💡

You can also create a middleware that sets `prisma` in the context so you don’t need to initialise it in the function body again and again