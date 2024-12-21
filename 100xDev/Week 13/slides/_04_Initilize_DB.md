Step 4 - Initialize DB (prisma)
===============================

#### 

[](#46318771afee4bb695cb22921e32563c "1. Get your connection url from neon.db or aieven.tech")1\. Get your connection url from neon.db or aieven.tech

    postgres://avnadmin:password@host/db

#### 

[](#68315f7add8140d1879e6cfd8a471e4e "2. Get connection pool URL from Prisma accelerate")2\. Get connection pool URL from Prisma accelerate

[https://www.prisma.io/data-platform/accelerate](https://www.prisma.io/data-platform/accelerate)

    prisma://accelerate.prisma-data.net/?api_key=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlfa2V5IjoiNTM2M2U5ZjEtNmNjMS00MWNkLWJiZTctN2U4NzFmMGFhZjJmIiwidGVuYW50X2lkIjoiY2I5OTE2NDk0MzFkNWZmZWRmNmFiYzViMGFlOTIwYzFhZDRjMGY5MTg1ZjZiNDY0OTc3MzgyN2IyMzY2OWIwMiIsImludGVybmFsX3NlY3JldCI6Ijc0NjE4YWY2LTA4NmItNDM0OC04MzIxLWMyMmY2NDEwOTExNyJ9.HXnE3vZjf8YH71uOollsvrV-TSe41770FPG_O8IaVgs

#### 

[](#89bcfdc4a02c418d87a417075644be73 "3. Initialize prisma in your project")3\. Initialize prisma in your project

Make sure you are in the `backend` folder

    npm i prisma
    npx prisma init

Replace `DATABASE_URL` in `.env`

    DATABASE_URL="postgres://avnadmin:password@host/db"

Add `DATABASE_URL` as the `connection pool` url in `wrangler.toml`

    name = "backend"
    compatibility_date = "2023-12-01"
    
    [vars]
    DATABASE_URL = "prisma://accelerate.prisma-data.net/?api_key=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlfa2V5IjoiNTM2M2U5ZjEtNmNjMS00MWNkLWJiZTctN2U4NzFmMGFhZjJmIiwidGVuYW50X2lkIjoiY2I5OTE2NDk0MzFkNWZmZWRmNmFiYzViMGFlOTIwYzFhZDRjMGY5MTg1ZjZiNDY0OTc3MzgyN2IyMzY2OWIwMiIsImludGVybmFsX3NlY3JldCI6Ijc0NjE4YWY2LTA4NmItNDM0OC04MzIxLWMyMmY2NDEwOTExNyJ9.HXnE3vZjf8YH71uOollsvrV-TSe41770FPG_O8IaVgs"

💡

You should not have your prod URL committed either in .env or in wrangler.toml to github wranger.toml should have a dev/local DB url .env should be in .gitignore

#### 

[](#e68d357f0bb046aaa78a8102f7befb7f "4. Initialize the schema")4\. Initialize the schema

    generator client {
      provider = "prisma-client-js"
    }
    
    datasource db {
      provider = "postgresql"
      url      = env("DATABASE_URL")
    }
    
    model User {
      id       String   @id @default(uuid())
      email    String   @unique
      name     String?
      password String
      posts    Post[]
    }
    
    model Post {
      id        String   @id @default(uuid())
      title     String
      content   String
      published Boolean  @default(false)
      author    User     @relation(fields: [authorId], references: [id])
      authorId  String
    }

#### 

[](#555585badc554f4fb67513f6d912d94a "5. Migrate your database")5\. Migrate your database

    npx prisma migrate dev --name init_schema

💡

You might face issues here, try changing your wifi if that happens

#### 

[](#ddaa8db8eacd4dcb8755e9fcbdc0e197 "6. Generate the prisma client ")6\. Generate the prisma client

    npx prisma generate --no-engine

#### 

[](#a4efae1d5ee74cbdac1a9ece3bcdc1dc "7. Add the accelerate extension")7\. Add the accelerate extension

    npm install @prisma/extension-accelerate

#### 

[](#fccf752223894f89889b2bec62a92b8d "8. Initialize the prisma client")8\. Initialize the prisma client

    import { PrismaClient } from '@prisma/client/edge'
    import { withAccelerate } from '@prisma/extension-accelerate'
    
    const prisma = new PrismaClient({
        datasourceUrl: env.DATABASE_URL,
    }).$extends(withAccelerate())