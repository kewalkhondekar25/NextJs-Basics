import { PrismaClient } from "@prisma/client"
import { log } from "console"
import { NextRequest } from "next/server"

const client = new PrismaClient();

export const GET = () => {
    //db logic
    return Response.json({
        email: "john@gmail.com",
        name: "john smith"
    })
}

export const POST = async (req: NextRequest) => {
    //extract body.
    const body = await req.json();
    // console.log(body);
    // store in db
    await client.user.create({
        data: {
            username: body.username,
            password: body.password
        }
    });
    return Response.json({
       message: "signin completed"
    })
}
