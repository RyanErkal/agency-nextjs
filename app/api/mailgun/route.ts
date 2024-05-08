import { NextRequest, NextResponse } from "next/server";
import { sendEmail } from "@/libs/mailgun";

export async function POST(req: NextRequest) {
	const body = await req.json();
	try {
		await sendEmail({
			to: "ryanerkal1@gmail.com",
			subject: "NEW CONTACT FORM SUBMISSION!",
			html: JSON.stringify(body)
		});
		return new NextResponse("Email sent successfully!", {
			status: 200
		});
	} catch (error) {
		return new NextResponse("Error sending email", {
			status: 500
		});
	}
}
