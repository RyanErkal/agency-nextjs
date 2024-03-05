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
		question: "How long does it take to build a website?",
		answer: (
			<div className="space-y-2 leading-relaxed">
				The time required to build a website can vary significantly
				based on its complexity, features, and content volume.
				Generally, a basic website might take anywhere from 2 to 4
				weeks, while more complex sites could take 12 weeks or more. We
				provide a project timeline after our initial consultation and
				strive to meet your deadlines while ensuring the highest
				quality.
			</div>
		)
	},
	{
		question: "What size companies do you produce web designs for?",
		answer: (
			<p>
				Our agency caters to a broad range of clients, from small
				startups to large enterprises. We tailor our web design and
				development services to meet the unique needs of each business,
				regardless of its size. Our goal is to help every company
				enhance its online presence and achieve its digital objectives.
			</p>
		)
	},
	{
		question: "Do you redesign existing websites?",
		answer: (
			<div className="space-y-2 leading-relaxed">
				Yes, we specialize in both creating new websites and redesigning
				existing ones. A website redesign can be crucial for improving
				usability, updating content, and enhancing SEO. We work closely
				with you to retain your site's strengths while transforming its
				look and functionality to meet current web standards.
			</div>
		)
	},
	{
		question: "Do you work internationally?",
		answer: (
			<div className="space-y-2 leading-relaxed">
				Absolutely! We serve clients globally and are equipped to handle
				projects from anywhere in the world. Our team is adept at
				collaborating remotely, ensuring smooth communication and
				project delivery regardless of geographical boundaries.
			</div>
		)
	},
	{
		question:
			"Do you offer ongoing help with our new site once it's launched?",
		answer: (
			<div className="space-y-2 leading-relaxed">
				Yes, we provide ongoing support and maintenance services
				post-launch to ensure your website remains updated, secure, and
				functioning optimally. Our maintenance packages include regular
				updates, security checks, backups, and technical support. We're
				here to help your site continue to grow and succeed over time.
			</div>
		)
	},
	{
		question: "Will my website work on smartphones and tablets as well?",
		answer: (
			<div className="space-y-2 leading-relaxed">
				Definitely. We design all our websites to be responsive,
				ensuring they look and function perfectly across all devices,
				including smartphones and tablets. With mobile usage continually
				on the rise, we prioritize creating seamless experiences for
				users on every device.
			</div>
		)
	},
	{
		question: "How much does a website cost?",
		answer: (
			<div className="space-y-2 leading-relaxed">
				The cost of a website depends on various factors, including its
				complexity, design requirements, functionality, and content
				creation needs. We provide customized quotes after understanding
				your specific requirements to ensure transparency and align with
				your budget. Our pricing models are flexible, including
				project-based pricing and hourly rates for smaller tasks.
			</div>
		)
	},
	{
		question: "We have a limited budget, will you still work with us?",
		answer: (
			<div className="space-y-2 leading-relaxed">
				We understand the financial constraints of small businesses and
				startups and strive to be as accommodating as possible. We can
				discuss your project and budget to find a solution that meets
				your needs, possibly by prioritizing key features to fit within
				your budget or offering phased development. Our aim is to
				deliver value and quality, regardless of budget size.
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
