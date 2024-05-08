import { log } from "console"
import { NextRequest, NextResponse } from "next/server"
import client from "@/db"

export const GET = async () => {
    try {
        const response = await client.user.findMany({})
        return NextResponse.json(response)
    } catch (error) {
        NextResponse.json({
            message: "Error while fetching users"
        },{
            status: 411
        })
    }
};

export const POST = async (req: NextRequest) => {
    try {
        //extract body
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
    } catch (error) {
        NextResponse.json({
            message: "Error while signing up"
        },{
            status: 411
        })
    }
};
