# Step 6 - Let’s move the backend into our own app

We want to introduce a route that returns `hardcoded` values for a user’s details (email, name, id)

1.  Introduce a new folder called `api`

2.  Add a folder inside called `user`

3.  Add a file inside called `route.ts`

4.  Initialize a `GET` route inside it

```javascript
export async function GET() {
  return Response.json({ username: "harkirat", email: "harkirat@gmail.com" })
}
```

1.  Try replacing the api call in `page.tsx` to hit this URL

```javascript
async function getUserDetails() {
  try {
    const response = await axios.get("http://localhost:3000/api/user")
	  return response.data;
  }  catch(e) {
    console.log(e);
  }
}
```

💡

This isn’t the best way to fetch data from the backend. We’ll make this better as time goes by