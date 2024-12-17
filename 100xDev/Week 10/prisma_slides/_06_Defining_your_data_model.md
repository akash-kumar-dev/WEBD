Step 6 - Defining your data model
=================================

### 

[](#568fb1bc4a294a8792878b4a61379513 "Prisma expects you to define the shape of your data in the schema.prisma  file")Prisma expects you to define the shape of your data in the `schema.prisma` file

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2Fc2792e40-ef85-4b93-9b95-a1f517ed02d6%2FScreenshot_2024-02-03_at_6.58.23_PM.png?table=block&id=383be376-56d9-4e3b-a8c6-18fe13189a79&cache=v2)

If your final app will have a Users table, it would look like this in the `schema.prisma` file

    model User {
      id         Int      @id @default(autoincrement())
      username   String   @unique
      password   String
      firstName  String
      lastName   String
    }

### 

[](#e3f4b23cf7534f6eb790ceb7c51dc9bb "Assignment")Assignment

Add a Users and a Todo table in your application. Don’t worry about `foreign keys` / `relationships` just yet

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2F3698bba2-23a2-4a42-846d-5c5ac4fe8e88%2FScreenshot_2024-02-03_at_7.01.25_PM.png?table=block&id=d3feee59-e35a-4692-87a5-590e68814ef8&cache=v2)

Answer

    // This is your Prisma schema file,
    // learn more about it in the docs: https://pris.ly/d/prisma-schema
    
    generator client {
      provider = "prisma-client-js"
    }
    
    datasource db {
      provider = "postgresql"
      url      = env("DATABASE_URL")
    }
    
    model User {
      id         Int      @id @default(autoincrement())
      username   String   @unique
      password   String
      firstName  String
      lastName   String
    }
    
    model Todo {
      id          Int     @id @default(autoincrement())
      title       String
      description String
      done        Boolean @default(false)
      userId      Int
    }  

### 

[](#cbecbd8b617b4d8a9e62cb62c956c82c "Generate migrations")Generate migrations

You have created a single schema file. You haven’t yet run the `CREATE TABLE` commands. To run those and create `migration files` , run

    npx prisma migrate dev --name Initialize the schema

Your DB should now have the updated schema.

💡

Check the `prisma/migrations` folder and check if you see anything interesting in there