# Step 11 - Merging routes

What if you wan’t to get the banner in both `signup` and `signin`?

### 

[](#1e7396f361d34c50bcf21b1f1064fc33 "Approach #1")Approach #1

Move both the `signin` and `signup` folder inside a `auth` folder where we have the layout

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2F3e7282fb-5bd0-4fc2-8704-13c0ca86d0f3%2FScreenshot_2024-03-02_at_4.06.41_PM.png?table=block&id=9fc88ce3-c520-43a3-b431-f30f816dd7be&cache=v2)

You can access the routes at

`http://localhost:3000/auth/signup` and `http://localhost:3000/auth/signin`

- - -

### 

[](#526ba6831ae846af9d6a5d5dbb97bddf "Approach #2")Approach #2

You can use create a new folder with `()` around the name.

This folder is `ignored` by the router.

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2F3e7624ce-20e0-459d-bea7-ee3b0f5b23f3%2FScreenshot_2024-03-02_at_4.09.56_PM.png?table=block&id=21e84824-4181-465d-9b02-40d08d210663&cache=v2)

You can access the routes at

`http://localhost:3000/signup` and `http://localhost:3000/signin`