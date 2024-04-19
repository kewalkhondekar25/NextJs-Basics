import { NextRequest, NextResponse } from "next/server"
import { z } from "zod"

const validationSchema = z.object({
    email: z.string(),
    password: z.string()
})

export const GET = async (req: NextRequest) => {
    const {email} = await req.body.json();
    if(email === "hello@gmail.com"){
        return NextResponse.json({
            message: "hi from login"
        })
    }
    
}