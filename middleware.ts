import { NextRequest, NextResponse } from "next/server";

let count = 0;
export const middleware = (req: NextRequest) => {
    count++;
    console.log(count);
    return NextResponse.next();
}

export const config = {
    matcher: "/signup"
}