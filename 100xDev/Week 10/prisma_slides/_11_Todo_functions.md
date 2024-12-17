Step 11 - Todo functions
========================

### 

[](#150c69681a4d4e3f89eade51c61b0c56 "1. createTodo")1\. createTodo

Write a function that let’s you put a `todo` in the database.

Starter code -

    import { PrismaClient } from "@prisma/client";
    
    const prisma = new PrismaClient();
    
    async function createTodo(userId: number, title: string, description: string) {
    
    }
    
    createTodo(1, "go to gym", "go to gym and do 10 pushups");

Solution

    import { PrismaClient } from "@prisma/client";
    
    const prisma = new PrismaClient();
    
    async function createTodo(userId: number, title: string, description: string) {
      const todo = await prisma.todo.create({
        data: {
          title,
          description,
          userId
        },
      });
      console.log(todo);
    
    }
    
    getUser(1, "go to gym", "go to gym and do 10 pushups");

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2F1e4e479a-0972-4884-a641-edabbd565a50%2FScreenshot_2024-02-04_at_1.06.48_AM.png?table=block&id=2def2747-c2d4-4654-8da9-a4fccfb85589&cache=v2)

#### 

[](#6a2ee9416da949cfa79c500316821633 "2. getTodos")2\. getTodos

Write a function to get all the todos for a user. Starter code

    import { PrismaClient } from "@prisma/client";
    
    const prisma = new PrismaClient();
    
    async function getTodos(userId: number, ) {
    
    }
    
    getTodos(1);

Solution

    import { PrismaClient } from "@prisma/client";
    
    const prisma = new PrismaClient();
    
    async function getTodos(userId: number, ) {
        const todos = await prisma.todo.findMany({
            where: {
            userId: userId,
            },
        });
        console.log(todos);
    }
    
    getTodos(1);

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2Fbf5c1406-350c-40f1-b75a-d330defea558%2FScreenshot_2024-02-04_at_1.08.45_AM.png?table=block&id=1cbd86c3-8b4c-4b52-aeae-2101e7414723&cache=v2)

#### 

[](#2172ecb21b394175ade49d8ed835debc "3. getTodosAndUserDetails (Does/should it use joins?)")3\. getTodosAndUserDetails (Does/should it use joins?)

Write a function that gives you the todo details of a user along with the user details

Starter Code

    import { PrismaClient } from "@prisma/client";
    
    const prisma = new PrismaClient();
    
    async function getTodosAndUserDetails(userId: number, ) {
    
    }
    
    getTodosAndUserDetails(1);

Bad solution (2 queries)

    import { PrismaClient } from "@prisma/client";
    
    const prisma = new PrismaClient();
    
    async function getTodosAndUserDetails(userId: number) {
        const user = await prisma.user.findUnique({
            where: {
                id: userId
            }
        });
        const todos = await prisma.todo.findMany({
            where: {
                userId: userId,
            }
        });
        console.log(todos);
        console.log(user)
    }
    
    getTodosAndUserDetails(1);

Good Solution (using joins)

    import { PrismaClient } from "@prisma/client";
    
    const prisma = new PrismaClient();
    
    async function getTodosAndUserDetails(userId: number, ) {
        const todos = await prisma.todo.findMany({
            where: {
                userId: userId,
            },
            select: {
                user: true,
                title: true,
                description: true
            }
        });
        console.log(todos);
    }
    
    getTodosAndUserDetails(1); 

💡

See [https://github.com/prisma/prisma/issues/5026](https://github.com/prisma/prisma/issues/5026) to log the actual SQL queries