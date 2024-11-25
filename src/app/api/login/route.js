import { NextResponse } from "next/server";
import axios from "axios";

export async function POST(request) {
    const payload = await request.json();

    console.log(payload)

    let params;

    params = {
        email: payload.email,
        password: payload.password,
        product: payload.product
    };

    console.log(params)

    try {
        const response = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/auth/login`,
            params
        );

        console.log('<<<<<<<<<<<<response>>>>>>>>>>>>')
        console.log(response)
        if (!response.statusCode === '00') {
            console.error("API error:", response.data);

            return NextResponse.json(
                { message: "API request failed", error: response.data },
                { status: response.status }
            );
        }

        console.log("API response:", response.data);

        return NextResponse.json({ data: response.data });

    } catch (error) {
        console.error("An error occurred during the request:", error);
        return NextResponse.json(
            { message: "An error occurred during the request", error: error.message },
            { status: 500 }
        );
    }
}