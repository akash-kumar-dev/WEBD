Step 8 - Generating the prisma client
=====================================

### 

[](#8f06fb03c2384e4bb6ef4351265112cb "What is a client?")What is a client?

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2F185d1687-c446-4f5e-9acb-9fd5d9820f6e%2FScreenshot_2024-02-04_at_1.52.03_PM.png?table=block&id=7e16a0c5-24e1-41ee-880d-bc6a78c88a69&cache=v2)

Client represents all the functions that convert

    User.create({email: "harkirat@gmail.com"})

into

    INSERT INTO users VALUES ...

Once you’ve created the `prisma/schema.prisma` , you can generate these `clients` that you can use in your Node.js app

### 

[](#4961a974c7964072b7e6ac58b4342f7d "How to generate the client?")How to generate the client?

    npx prisma generate

This generates a new `client` for you.