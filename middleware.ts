import { NextRequest, NextResponse } from "next/server";

let count = 0;
export const middleware = (req: NextRequest) => {
    // count++;
    // console.log(count);
    // if(req.nextUrl.pathname.startsWith("/signin")){
    //     return NextResponse.redirect(new URL("/signup", req.url))
    // }
    // return NextResponse.next();
}

// export const config = {
//     matcher: "/signup"
// }