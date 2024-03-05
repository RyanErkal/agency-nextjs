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
		question: "What services do you offer?",
		answer: (
			<div className="space-y-2 leading-relaxed">
				We specialize in custom website design and development,
				including responsive design, e-commerce solutions, SEO
				optimization, content creation, and website maintenance. We also
				provide branding services to help you establish a strong online
				presence.
			</div>
		)
	},
	{
		question: "How does the design process work?",
		answer: (
			<p>
				Our design process begins with a consultation to understand your
				vision, goals, and requirements. We then move on to creating a
				design proposal, which includes wireframes and mockups. Once
				approved, we develop the site, conduct thorough testing for
				usability and compatibility, and finally, launch the site. We
				ensure continuous communication throughout the process to keep
				you updated and involved.
			</p>
		)
	},
	{
		question: "How long does it take to build a website?",
		answer: (
			<div className="space-y-2 leading-relaxed">
				The timeline for building a website varies depending on its
				complexity, the number of pages, and specific functionalities
				required. A basic website typically takes between 2 to 4 weeks
				from start to finish, while more complex projects may take 12
				weeks or longer. We provide a project timeline before starting
				any work to set clear expectations.
			</div>
		)
	},
	{
		question: "Can you help improve my website's search engine ranking?",
		answer: (
			<div className="space-y-2 leading-relaxed">
				Yes, we offer SEO services to improve your website&apos;s
				visibility on search engines like Google. Our approach includes
				keyword research, on-page optimization, content creation, and
				building quality backlinks. While we aim to enhance your
				rankings and drive more traffic, it&apos;s important to note
				that SEO is an ongoing effort with results that build over time.
			</div>
		)
	},
	{
		question: "What are your pricing models?",
		answer: (
			<div className="space-y-2 leading-relaxed">
				Our pricing varies based on the scope and complexity of the
				project. We offer project-based pricing for complete web design
				and development projects, as well as hourly rates for smaller
				tasks or ongoing maintenance. We provide detailed quotes after
				understanding your specific needs to ensure transparency and
				avoid any surprises. We offer payment plans to help you manage
				your budget effectively.
			</div>
		)
	},
	{
		question: "How do we handle ongoing website maintenance and updates?",
		answer: (
			<div className="space-y-2 leading-relaxed">
				We offer ongoing maintenance and support packages that can be
				tailored to your needs. These services include regular updates
				to your site&apos;s software, security monitoring, backups, and
				making changes to the site&apos;s content or functionality. You
				can choose a monthly or annual plan that best suits your
				requirements to ensure your website remains up-to-date and
				secure.
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
		<section className="bg-white text-black" id="faq">
			<div className="py-24 px-8 max-w-7xl mx-auto flex flex-col md:flex-row gap-12">
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
