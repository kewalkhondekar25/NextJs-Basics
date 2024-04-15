import { log } from "console"
import { NextRequest } from "next/server"

export const GET = () => {
    //db logic
    return Response.json({
        email: "john@gmail.com",
        name: "john smith"
    })
}

export const POST = async (req: NextRequest) => {
    //extract body.
    const data = await req.json()
    console.log(data);
    //store in db
    //db logic
    return Response.json({
       message: "signin completed"
    })
}
