import { NextRequest, NextResponse } from "next/server";
// import {PrismaClient} from "@prisma/client";
// const client = new PrismaClient();
import client from "@/db";

export async function POST(request: NextRequest) {
    console.log("Request received");
    const body = await request.json();
    console.log(body);
    const user = await client.user.create({
        data: {
            username: body.username,
            password: body.password
        }
    })
    console.log(user);
    // return Response.json({
    //     message: "User created successfully"
    // })
    return NextResponse.json({
        message: "User created successfully"
    })
}

// export async function GET() {
//     const user = await client.user.findFirst({});
//     return Response.json({ name: user?.username, email: user?.username })
// }

export function GET() {
    // database logic
    return Response.json({
        name: "John Doe",
        email: "johndoe@gmail.com"
    })
}