import { PrismaClient } from "@prisma/client"
import { log } from "console"
import { NextRequest, NextResponse } from "next/server"

const client = new PrismaClient();

export const GET = async () => {
    const response = await client.user.findMany({})
    return NextResponse.json(response)
};

export const POST = async (req: NextRequest) => {
    //extract body.
    const body = await req.json();
    //headers
    console.log(req.headers.get("authorization"));
    //query params
    console.log(req.nextUrl.searchParams.get("name"));
    
    // store in db
    await client.user.create({
        data: {
            username: body.username,
            password: body.password
        }
    });
    return NextResponse.json({
       message: "signin completed"
    })
};
