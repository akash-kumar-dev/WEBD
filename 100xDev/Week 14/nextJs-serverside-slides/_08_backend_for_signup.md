# Step 8 - Backend for signing up

Add a `POST` route that takes the users email and password and for now just returns them back

1.  Navigate to `app/api/user/route.ts`

2.  Initialize a POST endpoint inside it

```javascript
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
    const body = await req.json();

    return NextResponse.json({ username: body.username, password: body.password })
}
```

Ref - [https://nextjs.org/docs/app/api-reference/functions/next-response](https://nextjs.org/docs/app/api-reference/functions/next-response)