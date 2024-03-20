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
		question: "What does eCommerce stand for?",
		answer: (
			<div className="space-y-2 leading-relaxed">
				eCommerce stands for Electronic Commerce. It refers to the
				buying and selling of goods or services using the internet, and
				the transfer of money and data to execute these transactions.
				eCommerce websites are online portals that facilitate online
				transactions of goods and services through means of the transfer
				of information and funds over the Internet.
			</div>
		)
	},
	{
		question: "How much does an eCommerce website cost?",
		answer: (
			<p>
				The cost of an eCommerce website can vary widely depending on
				several factors such as the complexity of the design, the number
				of products you plan to sell, the functionality required (like
				payment gateways, shipping integration), and any custom features
				or integrations. Prices can range from a few thousand dollars
				for a basic setup to tens of thousands for a custom, large-scale
				eCommerce site. We provide a detailed quote after understanding
				your specific needs to ensure transparency and accuracy in
				pricing.
			</p>
		)
	},
	{
		question: "We have a limited budget, will you still work with us?",
		answer: (
			<div className="space-y-2 leading-relaxed">
				Yes, we are committed to supporting businesses of all sizes and
				understand the constraints of a tight budget. We can explore
				various options, such as prioritizing essential features to
				launch your online store and planning for additional
				functionalities as your business grows. Our goal is to find a
				solution that aligns with your budget and business objectives,
				ensuring you get the most value for your investment.
			</div>
		)
	},
	{
		question: "How many products do I need to create an online store?",
		answer: (
			<div className="space-y-2 leading-relaxed">
				There is no minimum number of products required to create an
				online store. Whether you have a single product or thousands, we
				can design an eCommerce solution that fits your inventory size
				and scales as your business grows. The key is to focus on the
				quality of your product listings and the overall user experience
				of your online store.
			</div>
		)
	},
	{
		question: "My shop is only small, are you still able to work with me?",
		answer: (
			<div className="space-y-2 leading-relaxed">
				Absolutely! We work with businesses of all sizes, from small
				local shops to large multinational corporations. Our approach is
				to understand your unique needs and challenges and tailor our
				solutions accordingly. A smaller shop benefits from a
				personalized approach, ensuring that your online store reflects
				the uniqueness of your brand and effectively reaches your target
				audience. Regardless of the size of your shop, we&apos;re here
				to help you succeed online.
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
