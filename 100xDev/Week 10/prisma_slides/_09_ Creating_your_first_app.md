Step 9 - Creating your first app
================================

### 

[](#eab2936bcca7441e8b50c29192c57a6b "Insert")Insert

Write a function that let’s you insert data in the `Users` table.

Typescript will help you out, here’s a starter code -

    import { PrismaClient } from "@prisma/client";
    
    const prisma = new PrismaClient();
    
    async function insertUser(username: string, password: string, firstName: string, lastName: string) {
      
    }

Solution

    import { PrismaClient } from "@prisma/client";
    
    const prisma = new PrismaClient();
    
    async function insertUser(username: string, password: string, firstName: string, lastName: string) {
      const res = await prisma.user.create({
        data: {
            username,
            password,
            firstName,
            lastName
        }
      })
      console.log(res);
    }
    
    insertUser("admin1", "123456", "harkirat", "singh")

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2F1462c745-cd2b-45a7-851d-33f9b284123f%2FScreenshot_2024-02-04_at_12.47.46_AM.png?table=block&id=1937fb45-5ace-4b7b-95b4-9662cb8f0489&cache=v2)

### 

[](#8ede8be9a1bf4a52ac44629b18222568 "Update")Update

Write a function that let’s you update data in the `Users` table.

Starter code -

    import { PrismaClient } from "@prisma/client";
    
    const prisma = new PrismaClient();
    
    interface UpdateParams {
        firstName: string;
        lastName: string;
    }
    
    async function updateUser(username: string, {
        firstName,
        lastName
    }: UpdateParams) {
      
    }

Solution

    import { PrismaClient } from "@prisma/client";
    
    const prisma = new PrismaClient();
    
    interface UpdateParams {
        firstName: string;
        lastName: string;
    }
    
    async function updateUser(username: string, {
        firstName,
        lastName
    }: UpdateParams) {
      const res = await prisma.user.update({
        where: { username },
        data: {
          firstName,
          lastName
        }
      });
      console.log(res);
    }
    
    updateUser("admin1", {
        firstName: "new name",
        lastName: "singh"
    })

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2F53d7eba3-cb51-42bb-8368-a4051beea4ea%2FScreenshot_2024-02-04_at_12.49.38_AM.png?table=block&id=37fb73c6-3356-465c-aad5-d98bf1a6d311&cache=v2) 

### 

[](#7af53a67efc544e6b14f5fa04a27d721 "Get a user’s details")Get a user’s details

Write a function that let’s you fetch the details of a user given their email

Starter code

    import { PrismaClient } from "@prisma/client";
    
    const prisma = new PrismaClient();
    
    async function getUser(username: string) {
      
    }

Solution

    import { PrismaClient } from "@prisma/client";
    
    const prisma = new PrismaClient();
    
    async function getUser(username: string) {
      const user = await prisma.user.findFirst({
        where: {
            username: username
        }
      })
      console.log(user);
    }
    
    getUser("admin1");