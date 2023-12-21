import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const response = await axios.post(
      "https://webhook.site/a4f01968-888c-4d92-8211-a793a112fe5d",
      body,
      {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      },
    );

    return NextResponse.json({ message: "Success", response: response?.data });
  } catch (error: any) {
    console.error(error);
    return NextResponse.json(
      { message: "Server Error", error },
      { status: 500 },
    );
  }
}
