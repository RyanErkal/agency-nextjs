import Link from "next/link";
import { getSEOTags } from "@/libs/seo";
import config from "@/config";

// CHATGPT PROMPT TO GENERATE YOUR TERMS & SERVICES — replace with your own data 👇

// 1. Go to https://chat.openai.com/
// 2. Copy paste bellow
// 3. Replace the data with your own (if needed)
// 4. Paste the answer from ChatGPT directly in the <pre> tag below

// You are an excellent lawyer.

// I need your help to write a simple Terms & Services for my website. Here is some context:
// - Website: https://shipfa.st
// - Name: ShipFast
// - Contact information: marc@shipfa.st
// - Description: A JavaScript code boilerplate to help entrepreneurs launch their startups faster
// - Ownership: when buying a package, users can download code to create apps. They own the code but they do not have the right to resell it. They can ask for a full refund within 7 day after the purchase.
// - User data collected: name, email and payment information
// - Non-personal data collection: web cookies
// - Link to privacy-policy: https://shipfa.st/privacy-policy
// - Governing Law: France
// - Updates to the Terms: users will be updated by email

// Please write a simple Terms & Services for my site. Add the current date. Do not add or explain your reasoning. Answer:

export const metadata = getSEOTags({
	title: `Terms and Conditions | ${config.appName}`,
	canonicalUrlRelative: "/tos"
});

const TOS = () => {
	return (
		<main className="max-w-xl mx-auto">
			<div className="p-5">
				<Link href="/" className="btn btn-ghost">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 20 20"
						fill="currentColor"
						className="w-5 h-5">
						<path
							fillRule="evenodd"
							d="M15 10a.75.75 0 01-.75.75H7.612l2.158 1.96a.75.75 0 11-1.04 1.08l-3.5-3.25a.75.75 0 010-1.08l3.5-3.25a.75.75 0 111.04 1.08L7.612 9.25h6.638A.75.75 0 0115 10z"
							clipRule="evenodd"
						/>
					</svg>
					Back
				</Link>
				<h1 className="text-3xl font-extrabold pb-6">
					Terms and Conditions for {config.appName}
				</h1>

				<pre
					className="leading-relaxed whitespace-pre-wrap"
					style={{ fontFamily: "sans-serif" }}>
					{`Last Updated: February 2, 2024

1. Introduction

Welcome to REDesign, accessible at https://redesignagency.vercel.app. These Terms of Service govern your use of our website and services. By accessing or using our website, you agree to be bound by these terms.

2. Website Ownership

The website and its entire contents, features, and functionality (including but not limited to all information, software, text, displays, images, and design) are owned by REDesign.

3. Use of the Website

By using this website, you agree to:

Not use the website in any way that breaches these terms or any applicable local, national, or international law or regulation.
Not to copy, reproduce, distribute, display, or sell any information, software, products, or services obtained from the website without our prior written consent.
4. User Data Collection

We collect personal data such as name, email address, company name, and summary information. For more details, please refer to our Privacy Policy at REDesign Privacy Policy.

5. Cookies

Our website uses cookies to enhance user experience. By using our website, you consent to all cookies in accordance with our Privacy Policy.

6. Governing Law

These terms are governed by and construed in accordance with the laws of the United Kingdom.

7. Changes to the Terms of Service

We may update our Terms of Service from time to time. We will notify you of any changes by sending an email to the address you provided us.

8. Contact Information

For any questions about these Terms of Service, please contact us at ryanerkal1@gmail.com.

9. Severability

If any provision of these Terms is held to be invalid, illegal, or unenforceable for any reason, such provision shall be eliminated or limited to the minimum extent such that the remaining provisions of the Terms will continue in full force and effect.

Your Acceptance of These Terms

By using this Site, you signify your acceptance of these terms. If you do not agree to these terms, please do not use our Site. Your continued use of the Site following the posting of changes to these terms will be deemed your acceptance of those changes.`}
				</pre>
			</div>
		</main>
	);
};

export default TOS;
