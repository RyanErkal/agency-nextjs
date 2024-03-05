"use client";

import { useRef, useState } from "react";
import type { JSX } from "react";

// <FAQ> component is a lsit of <Item> component
// Just import the FAQ & add your FAQ content to the const faqList arrayy below.

interface FAQItemProps {
	question: string;
	answer: JSX.Element;
}

const faqList: FAQItemProps[] = [
	{
		question: "What is Web Hosting?",
		answer: (
			<div className="space-y-2 leading-relaxed">
				Web hosting is a service that allows individuals and
				organizations to post a website or web page onto the Internet. A
				web host, or web hosting service provider, is a business that
				provides the technologies and services needed for the website or
				webpage to be viewed on the Internet. Websites are hosted, or
				stored, on special computers called servers. When Internet users
				want to view your website, all they need to do is type your
				website address or domain into their browser. Their computer
				will then connect to your server and your webpages will be
				delivered to them through the browser.
			</div>
		)
	},
	{
		question: "Why host with ReDesign?",
		answer: (
			<p>
				Choosing to host with ReDesign means benefiting from a web
				hosting service that prioritizes speed, reliability, and
				security. Our hosting solutions are optimized for performance,
				ensuring that your website loads quickly and runs smoothly. We
				offer 24/7 monitoring and support to promptly address any issues
				and minimize downtime. Additionally, our hosting packages come
				with enhanced security measures to protect your website from
				threats. By hosting with ReDesign, you're not just getting
				server space; you're gaining a partner dedicated to ensuring
				your online presence is robust and effective.
			</p>
		)
	},
	{
		question: "How much does Web Hosting cost?",
		answer: (
			<div className="space-y-2 leading-relaxed">
				The cost of web hosting with Shape varies depending on the type
				of hosting service you require (shared, VPS, dedicated, or cloud
				hosting), as well as the resources needed for your website, such
				as disk space, bandwidth, and additional features like SSL
				certificates, email hosting, and more. Our hosting plans start
				at a competitive price point for basic websites and scale up
				based on your specific needs and traffic demands. We offer
				transparent pricing with no hidden fees and can provide a
				tailored quote based on an evaluation of your hosting
				requirements.
			</div>
		)
	},
	{
		question: "Can I purchase my own domain?",
		answer: (
			<div className="space-y-2 leading-relaxed">
				Yes, you can purchase your own domain, and we highly recommend
				doing so to establish your brand and make your website easily
				accessible. If you haven't already purchased a domain, we can
				guide you through the process of choosing and registering a
				domain name that reflects your business and is memorable to your
				audience. Additionally, we can manage the domain on your behalf,
				ensuring that it's properly configured for your web hosting
				setup and renewing it as needed to maintain your online
				presence.
			</div>
		)
	}
];

const FaqItem = ({ item }: { item: FAQItemProps }) => {
	const accordion = useRef(null);
	const [isOpen, setIsOpen] = useState(false);

	return (
		<li>
			<button
				className="relative flex gap-2 items-center w-full py-5 text-base font-semibold text-left border-t md:text-lg border-base-content/10"
				onClick={(e) => {
					e.preventDefault();
					setIsOpen(!isOpen);
				}}
				aria-expanded={isOpen}>
				<span
					className={`flex-1 text-base-content ${
						isOpen ? "text-orange-400" : ""
					}`}>
					{item?.question}
				</span>
				<svg
					className={`flex-shrink-0 w-4 h-4 ml-auto fill-current`}
					viewBox="0 0 16 16"
					xmlns="http://www.w3.org/2000/svg">
					<rect
						y="7"
						width="16"
						height="2"
						rx="1"
						className={`transform origin-center transition duration-200 ease-out ${
							isOpen && "rotate-180"
						}`}
					/>
					<rect
						y="7"
						width="16"
						height="2"
						rx="1"
						className={`transform origin-center rotate-90 transition duration-200 ease-out ${
							isOpen && "rotate-180 hidden"
						}`}
					/>
				</svg>
			</button>

			<div
				ref={accordion}
				className={`transition-all duration-300 ease-in-out opacity-80 overflow-hidden`}
				style={
					isOpen
						? {
								maxHeight: accordion?.current?.scrollHeight,
								opacity: 1
						  }
						: { maxHeight: 0, opacity: 0 }
				}>
				<div className="pb-5 leading-relaxed">{item?.answer}</div>
			</div>
		</li>
	);
};

const FAQ = () => {
	return (
		<section className="bg-white text-black py-24 px-8" id="faq">
			<div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row gap-12">
				<div className="flex flex-col text-left basis-1/2">
					<p className="inline-block font-semibold text-orange-400 mb-4">
						FAQ
					</p>
					<p className="text-3xl font-bold">
						Frequently Asked Questions
					</p>
				</div>

				<ul className="basis-1/2">
					{faqList.map((item, i) => (
						<FaqItem key={i} item={item} />
					))}
				</ul>
			</div>
		</section>
	);
};

export default FAQ;
