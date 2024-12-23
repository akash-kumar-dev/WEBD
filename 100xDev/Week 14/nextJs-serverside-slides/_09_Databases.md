# Step 9 - Databases!

We have a bunch of dummy routes, we need to add a database layer to persist data.

Adding prisma to a Next.js project is straightforward.

💡

Please get a free Postgres DB from either neon or aiven

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2F0f88d21e-4369-4e14-a924-46d0cbfe5579%2FScreenshot_2024-03-03_at_3.51.39_PM.png?table=block&id=5934a2b8-79bd-4a6f-be78-4a4325cd4acd&cache=v2)

1.  Install prisma

```javascript
npm install prisma
```

1.  Initialize prisma schema

```javascript
npx prisma init
```

1.  Create a simple user schema

```javascript
model User {
  id        Int     @id  @default(autoincrement())
  username  String  @unique
  password  String
}
```

1.  Replace `.env` with your own Postgres URL

```javascript
DATABASE_URL="postgresql://johndoe:randompassword@localhost:5432/mydb?schema=public"
```

1.  Migrate the database

```javascript
npx prisma migrate dev --name init_schema
```

1.  Generate the client

```javascript
npx prisma generate
```

1.  Finish the `signup` route

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

1.  Update the `GET` endpoint

```javascript
export async function GET() {
    const user = await client.user.findFirst({});
    return Response.json({ name: user?.username, email: user?.username })
}
```

💡

We’re not doing any authentication yet. Which is why we’re not returning a jwt (or setting a cookie) here