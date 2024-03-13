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
		question: "How much does Web Development cost?",
		answer: (
			<div className="space-y-2 leading-relaxed">
				The cost of web development can significantly vary depending on
				various factors, such as the complexity of the website, custom
				design requirements, functionality features, and content
				creation. We provide a detailed estimate after understanding
				your specific needs to ensure clarity and transparency in
				pricing.
			</div>
		)
	},
	{
		question: "We have a limited budget, will you still work with us?",
		answer: (
			<p>
				Yes, we are committed to helping businesses of all sizes
				establish a strong online presence. If you have a limited
				budget, let&apos;s discuss your project requirements and
				financial constraints. We can work together to prioritize the
				project&apos;s phases or streamline the features to match your
				budget, focusing on the most impactful elements first. Our goal
				is to find a solution that fits within your budget while still
				delivering a quality website that meets your needs.
			</p>
		)
	},
	{
		question: "Why are you so expensive?",
		answer: (
			<div className="space-y-2 leading-relaxed">
				Our pricing reflects the quality, expertise, and personalized
				service we provide to each project. We invest significant time
				in understanding your business goals, researching your industry,
				and customizing the website to meet your specific needs. Our
				team comprises experienced professionals who utilize the latest
				technologies and best practices in web development, design, SEO,
				and user experience. This comprehensive approach ensures your
				website not only looks great but also performs well, offering a
				return on investment through increased online visibility and
				customer engagement.
			</div>
		)
	},
	{
		question: "How long does it take to build a website?",
		answer: (
			<div className="space-y-2 leading-relaxed">
				The timeline for building a website can vary based on its
				complexity, the number of pages, and specific functionalities
				required. A simple website might take 2 to 4 weeks from start to
				finish, while more complex projects can take 12 weeks or longer.
				We establish a project timeline at the beginning of our
				engagement, including key milestones and deadlines, to ensure a
				clear understanding of the process and keep the project on
				track.
			</div>
		)
	},
	{
		question: "What if I don't like the website?",
		answer: (
			<div className="space-y-2 leading-relaxed">
				Your satisfaction is our top priority. We involve our clients in
				the development process from the start, including regular
				check-ins and feedback sessions, to ensure the project aligns
				with your vision at every stage. If there are aspects of the
				website you&apos;re not satisfied with, we are committed to
				making necessary revisions. Our goal is to deliver a final
				product that meets your expectations and serves your business
				objectives effectively. We have a revision process in place to
				address any concerns and make adjustments as needed before the
				final launch.
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
			className="bg-white text-black max-w-7xl mx-auto py-24 px-8"
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
