# Step 3 - Waterfalling problem

Let’s say you built a blogging website in react, what steps do you think the `request cycle` takes?

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2F58e004c5-0d4e-44f6-9a3b-7042ae5b979a%2FScreenshot_2024-03-02_at_10.42.47_AM.png?table=block&id=4848f05f-bf56-489c-8cbd-567b18af65dc&cache=v2)

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2F63cda89d-8385-4dd8-932a-4c5c474e9220%2FScreenshot_2024-03-02_at_11.25.40_AM.png?table=block&id=660dd700-22c4-42d8-bd63-18ae70aa3b1a&cache=v2)

1.  Fetching the index.html from the CDN

2.  Fetching script.js from CDN

3.  Checking if user is logged in (if not, redirect them to /login page)

4.  Fetching the actual blogs

There are 4 round trips that happen one after the other (sequentially)

💡

The "waterfalling problem" in React, and more broadly in web development, refers to a scenario where data fetching operations are chained or dependent on each other in a way that leads to inefficient loading behavior.

#### 

[](#a0a1587e472044469f730258359f1151 "What does nextjs provide you?")What does nextjs provide you?

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2F06ef92dd-6676-4b50-bd2c-3f24e5537191%2FScreenshot_2024-03-02_at_11.55.58_AM.png?table=block&id=489dbf7b-618a-46e7-892d-54bc6d9fca73&cache=v2)