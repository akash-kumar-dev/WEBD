Step 10 - Relationships.
========================

#### 

[](#f9cb662cea8248c0ab018b8dc42cccfd "Prisma let’s you define relationships  to relate tables with each other.")Prisma let’s you define `relationships` to relate tables with each other.

### 

[](#125be770b02e4a1dab87cefd0bf83a15 "1. Types of relationships")1\. Types of relationships

1.  One to One

2.  One to Many

3.  Many to One

4.  Many to Many

### 

[](#389f2a1f02fa4167b52f87c4472ad7d0 "2. For the TODO app, there is a one to many  relationship")2\. For the TODO app, there is a `one to many` relationship

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2Fa61428e6-6064-443c-bbd3-406d44b622f6%2FScreenshot_2024-02-04_at_12.58.42_AM.png?table=block&id=cba035d8-e6ee-4533-a9bf-59d75f26fb38&cache=v2)

### 

[](#4c66a416c3c14a51a95297a655cca949 "3. Updating the prisma schema")3\. Updating the prisma schema

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2F192ebcf5-d56a-421a-bf50-a16f0ba7d289%2FScreenshot_2024-02-04_at_1.00.49_AM.png?table=block&id=a12a8d44-e5df-4e74-80f7-7c73f059e714&cache=v2)

Updated schema

    // This is your Prisma schema file,
    // learn more about it in the docs: https://pris.ly/d/prisma-schema
    
    generator client {
      provider = "prisma-client-js"
    }
    
    datasource db {
      provider = "postgresql"
      url      = "postgresql://postgres:mysecretpassword@localhost:5432/postgres"
    }
    
    model User {
      id         Int      @id @default(autoincrement())
      username   String   @unique
      password   String
      firstName  String
      lastName   String
      todos      Todo[]
    }
    
    model Todo {
      id          Int     @id @default(autoincrement())
      title       String
      description String
      done        Boolean @default(false)
      userId      Int
      user        User    @relation(fields: [userId], references: [id])
    }

### 

[](#715253bd994348de9e737a8ea47e7e28 "4. Update the database  and the prisma client ")4\. Update the `database` and the `prisma client`

    npx prisma migrate dev --name relationship
    npx prisma generate

💡

Try exploring the `prisma/migrations` folder now. Do you see more migrations for the newly created realtiohsip?

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2F6473d2dc-ec5c-4c1a-b0e7-c366a6d0b2c1%2FScreenshot_2024-02-04_at_1.03.19_AM.png?table=block&id=4848a248-94e3-467f-a14c-79753c6a49a7&cache=v2)