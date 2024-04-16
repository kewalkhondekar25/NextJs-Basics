import { NextRequest, NextResponse } from "next/server"

export const GET = (req: NextRequest, {params}: {params: {handler: String[]}}) => {
    console.log(params);
    return NextResponse.json({
        msg: "rout not found"
    })
};