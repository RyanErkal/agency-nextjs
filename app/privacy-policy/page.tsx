import Link from "next/link";
import { getSEOTags } from "@/libs/seo";
import config from "@/config";

// CHATGPT PROMPT TO GENERATE YOUR PRIVACY POLICY — replace with your own data 👇

// 1. Go to https://chat.openai.com/
// 2. Copy paste bellow
// 3. Replace the data with your own (if needed)
// 4. Paste the answer from ChatGPT directly in the <pre> tag below

// You are an excellent lawyer.

// I need your help to write a simple privacy policy for my website. Here is some context:
// - Website: https://shipfa.st
// - Name: ShipFast
// - Description: A JavaScript code boilerplate to help entrepreneurs launch their startups faster
// - User data collected: name, email and payment information
// - Non-personal data collection: web cookies
// - Purpose of Data Collection: Order processing
// - Data sharing: we do not share the data with any other parties
// - Children's Privacy: we do not collect any data from children
// - Updates to the Privacy Policy: users will be updated by email
// - Contact information: marc@shipfa.st

// Please write a simple privacy policy for my site. Add the current date.  Do not add or explain your reasoning. Answer:

export const metadata = getSEOTags({
	title: `Privacy Policy | ${config.appName}`,
	canonicalUrlRelative: "/privacy-policy"
});

const PrivacyPolicy = () => {
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
					</svg>{" "}
					Back
				</Link>
				<h1 className="text-3xl font-extrabold pb-6">
					Privacy Policy for {config.appName}
				</h1>

				<pre
					className="leading-relaxed whitespace-pre-wrap"
					style={{ fontFamily: "sans-serif" }}>
					{`Last Updated: February 2, 2024

1. Introduction

Welcome to REDesign. This Privacy Policy applies to our website, https://redesignagency.vercel.app. It governs our data collection, processing, and usage practices. By using the website, you consent to the data practices described in this policy.

2. Data Collection

We collect the following types of information:

Personal Information: name, email address, company name, and summary information about your enquiry.
Non-personal Information: web cookies to improve your experience on our website.
3. Purpose of Data Collection

Your data is collected for the sole purpose of responding to your service enquiries and providing you with the requested information or services.

4. Data Sharing

We respect your privacy. REDesign does not share, sell, rent, or trade personal information with third parties for their commercial purposes.

5. Children's Privacy

Our website is not designed for, nor do we knowingly collect information from, children under the age of 13.

6. Updates to the Privacy Policy

We may update this policy from time to time. All updates will be posted on this page, and you will be notified of any changes through the email address you have provided us.

7. Contact Information

If you have any questions about this Privacy Policy, please contact us at ryanerkal1@gmail.com.

Your Privacy Rights

At any time, you can inquire about the data we hold about you, and request corrections or deletions as per applicable laws.

Please note, this policy does not cover the practices of companies we do not own or control, or people that we do not manage.`}
				</pre>
			</div>
		</main>
	);
};

export default PrivacyPolicy;
