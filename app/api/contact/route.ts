const formData = require("form-data");
const Mailgun = require("mailgun.js");
const mailgun = new Mailgun(formData);

const API_KEY = process.env.MAILGUN_API_KEY || "";
const DOMAIN = process.env.MAILGUN_DOMAIN || "";

const mg = mailgun.client({
	username: "api",
	key: API_KEY || "key-yourkeyhere"
});

export default async function POST(req: any, res: any) {
	mg.messages
		.create(DOMAIN, {
			from: "Excited User <mailgun@sandbox-123.mailgun.org>",
			to: ["ryanerkal1@gmail.com"],
			subject: "Hello",
			text: "Testing some Mailgun awesomeness!",
			html: "<h1>Testing some Mailgun awesomeness!</h1>"
		})
		.then((msg: any) => console.log(msg)) // logs response data
		.catch((err: any) => console.log(err)); // logs any error
}
