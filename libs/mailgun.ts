import config from "@/config";
import formdata from "form-data";
import Mailgun from "mailgun.js";
const mailgun = new Mailgun(formdata);

const mg = mailgun.client({
	username: "api",
	url: "https://api.eu.mailgun.net/",
	key: process.env.MAILGUN_API_KEY || "dummy"
});

if (!process.env.MAILGUN_API_KEY && process.env.NODE_ENV === "development") {
	console.group("⚠️ MAILGUN_API_KEY missing from .env");
	console.error("It's not mandatory but it's required to send emails.");
	console.error(
		"If you don't need it, remove the code from /libs/mailgun.js"
	);
	console.groupEnd();
}

export const sendEmail = async ({
	to,
	subject,
	text,
	html,
	replyTo
}: {
	to: string;
	subject: string;
	text?: string;
	html?: string;
	replyTo?: string;
}): Promise<any> => {
	const data = {
		from: config.mailgun.fromAdmin,
		to: [to],
		subject,
		text,
		html,
		...(replyTo && { "h:Reply-To": replyTo })
	};

	await mg.messages.create(
		(config.mailgun.subdomain ? `${config.mailgun.subdomain}.` : "") +
			config.domainName,
		data
	);
};
