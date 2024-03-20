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
		question: "What is SEO?",
		answer: (
			<div className="space-y-2 leading-relaxed">
				SEO stands for Search Engine Optimization. It is the practice of
				increasing the quantity and quality of traffic to your website
				through organic search engine results. This involves optimizing
				your website&apos;s content, structure, and on-site elements to
				make it more attractive to search engines like Google, Bing, and
				Yahoo. SEO strategies include keyword research, content
				creation, link building, and technical improvements to enhance
				your site&apos;s visibility in search engine results pages
				(SERPs).
			</div>
		)
	},
	{
		question: "Why is SEO important?",
		answer: (
			<p>
				SEO is crucial because it makes your website more visible, which
				means more traffic and the opportunity to convert prospects into
				customers. It is a fundamental part of digital marketing because
				people conduct trillions of searches every year, often with
				commercial intent to find information about products and
				services. Being visible as a trusted resource by Google and
				other search engines is always going to work in a brand&apos;s
				favor. Quality SEO and a high-quality website take brands there.
			</p>
		)
	},
	{
		question: "How much does SEO cost?",
		answer: (
			<div className="space-y-2 leading-relaxed">
				The cost of SEO services can vary widely depending on the scope
				of the project, the specific goals of your business and the
				competitiveness of your industry. We provide customized quotes
				after understanding your specific needs to ensure a plan that
				fits your budget and goals.
			</div>
		)
	},
	{
		question: "Can you help me rank high in Google?",
		answer: (
			<div className="space-y-2 leading-relaxed">
				Yes, our goal is to improve your website&apos;s ranking in
				Google by implementing effective SEO strategies tailored to your
				business. While we cannot guarantee specific rankings (as
				Google&apos;s algorithms are complex and constantly changing),
				we have a track record of improving the visibility and ranking
				of our clients&apos; websites in search engine results through
				proven SEO techniques and practices.
			</div>
		)
	},
	{
		question: "How long does it take to see results from SEO?",
		answer: (
			<div className="space-y-2 leading-relaxed">
				Seeing significant results from SEO can vary, typically taking
				anywhere from 3 to 6 months or more. SEO is a long-term strategy
				because it involves building a solid foundation and accumulating
				authoritative backlinks, which don&apos;t happen overnight. The
				timeframe can also depend on the competitiveness of your
				industry and the current state of your website. However, once
				momentum is gained, SEO efforts often lead to sustained traffic
				growth and improved rankings over time.
			</div>
		)
	},
	{
		question: "We have a limited budget, will you still work with us?",
		answer: (
			<div className="space-y-2 leading-relaxed">
				Absolutely! We understand the constraints of a limited budget
				and are willing to work with you to prioritize the most
				impactful SEO activities within your budget. Our approach may
				involve starting with fundamental optimizations and gradually
				scaling up efforts as your business grows. We believe in
				building long-term partnerships and are committed to finding a
				solution that aligns with your financial capacity while still
				aiming for significant improvements in your online visibility.
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
				className="relative flex gap-2 items-center w-full py-6 text-left border-t md:text-2xl border-base-content/10"
				onClick={(e) => {
					e.preventDefault();
					setIsOpen(!isOpen);
				}}
				aria-expanded={isOpen}>
				<span
					className={`flex-1 text-black ${
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
		<section
			className="bg-white text-black max-w-7xl mx-auto py-24 px-4 md:px-8"
			id="faq">
			<div className="w-full flex flex-col md:flex-row">
				<div className="flex flex-col text-left basis-1/2">
					<p className="text-5xl font-bold tracking-tight mb-12 md:mb-0">
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
