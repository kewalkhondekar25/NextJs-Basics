import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

// Define Zod schema for request body validation
const validationSchema = z.object({
    email: z.string().email(),
    password: z.string().min(8)
});

interface Inputs {
    email: string,
    password: string
}

export const POST = async (req: NextRequest) => {

    // Parse and validate request body
    const result = validationSchema.safeParse(req.body);

    if (result.success) {
        // Destructure the parsed data
        const { email, password }: Inputs = result.data;

        // If validation succeeds, return success response
        return NextResponse.json({
            message: "Validation succeeded",
            email: email,
            password: password
        });
    } else {
        // If validation fails, return error response
        return NextResponse.json({
            error: result.error.message
        }, { status: 400 }); // Bad Request status
    }
};
