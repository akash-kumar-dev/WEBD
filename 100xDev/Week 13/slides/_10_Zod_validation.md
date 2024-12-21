Step 10 - Zod validation
========================

If you’ve gone through the video `Cohort 1 - Deploying npm packages, Intro to Monorepos`, you’ll notice we introduced type inference in `Zod`

[https://zod.dev/?id=type-inference](https://zod.dev/?id=type-inference)

This let’s you get types from `runtime zod variables` that you can use on your frontend

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2F082a51ca-7f1b-46d8-90f9-c751e4f8cbe1%2FScreenshot_2024-02-24_at_12.30.12_PM.png?table=block&id=70aad17f-5b10-4804-8d58-deab3523f015&cache=v2)

We will divide our project into 3 parts

1.  Backend

2.  Frontend

3.  common

`common` will contain all the things that frontend and backend want to share. We will make `common` an independent `npm module` for now. Eventually, we will see how `monorepos` make it easier to have multiple packages sharing code in the same repo