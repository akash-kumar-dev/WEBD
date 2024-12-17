Step 2 - Why ORMs?
==================

### 

[](#41656f7190304937b627897d6ba64e1e "1. Simpler syntax (converts objects to SQL queries under the hood)")1\. Simpler syntax (converts objects to SQL queries under the hood)

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2F1250f16a-848b-4c9e-ab69-1e6fbf1ecaa7%2FScreenshot_2024-02-03_at_5.46.30_PM.png?table=block&id=a139f0de-82b5-47d5-abe8-95aab5e9c074&cache=v2)

### 

[](#71c4e087b53c4ed09a369abd4e7e0b2c "2. Abstraction that lets you flip the database you are using. Unified API irrespective of the DB")2\. Abstraction that lets you flip the database you are using. Unified API irrespective of the DB

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2F37237d9a-1ce5-4faa-a41c-25ab6199d173%2FScreenshot_2024-02-03_at_6.01.27_PM.png?table=block&id=fac0618a-6581-4352-95a8-ae2b78edcf53&cache=v2)

### 

[](#2194d5b3f7634347bff698f8d1535d8c "3. Type safety/Auto completion")3\. Type safety/Auto completion

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2F30d3aa28-f385-49fb-9b25-1ee247dc3612%2FScreenshot_2024-02-03_at_6.12.36_PM.png?table=block&id=79651703-6d4b-42bd-9363-4f534d731d7b&cache=v2)

### 

[](#825f14e189df4f73bb3338a4b1c10505 "4. Automatic migrations")4\. Automatic migrations

In case of a simple Postgres app, it’s very hard to keep track of all the commands that were ran that led to the current schema of the table.

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2F50a8ab5a-364d-4375-9ea8-64d347d9515f%2FScreenshot_2024-02-03_at_7.01.25_PM.png?table=block&id=e4ade148-bcf9-46f9-bd65-df5008e09dcb&cache=v2)

    CREATE TABLE users (
        id SERIAL PRIMARY KEY,
        name VARCHAR(100),
        email VARCHAR(100) UNIQUE NOT NULL
    );
    
    ALTER TABLE users
    ADD COLUMN phone_number VARCHAR(15);

As your app grows, you will have a lot of these `CREATE` and `ALTER` commands.

ORMs (or more specifically Prisma) maintains all of these for you.

For example - [https://github.com/code100x/cms/tree/main/prisma/migrations](https://github.com/code100x/cms/tree/main/prisma/migrations)