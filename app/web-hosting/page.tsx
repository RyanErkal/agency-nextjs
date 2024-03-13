import React from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
/* import ExperienceCard from "@/components/ExperienceCard"; */
import FAQ from "./components/FAQ";
import { getSEOTags } from "@/libs/seo";
import stock1 from "@/public/stock1.webp";
import stock2 from "@/public/stock2.webp";

import { MdOutlineCheck } from "react-icons/md";
import { MdOutlineRouter } from "react-icons/md";
import { MdOutlineLock } from "react-icons/md";
import { MdOutlineCloud } from "react-icons/md";
import { MdOutlineGroups } from "react-icons/md";
import { MdOutlineSupportAgent } from "react-icons/md";
import { MdOutlineWeb } from "react-icons/md";

export const metadata = getSEOTags({
	title: "Web Hosting Agency Manchester | ReDesign",
	canonicalUrlRelative: "/web-hosting"
});

export default function WebDesign() {
	return (
		<>
			<Header />
			<section
				id="web-design"
				className="max-w-7xl flex flex-col items-center justify-center mx-auto text-black px-8 py-24">
				<h2 className="w-full text-left text-5xl font-bold tracking-tight mb-12">
					Web Hosting that fits your needs
				</h2>
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-24">
					<h3 className="w-full text-left text-2xl font-bold">
						We take the technical pressure off you so that you can
						concentrate on more important aspects of your business
						and use your time more efficiently.
					</h3>
					<div>
						<p className="mb-12">
							We offer different solutons for different needs. We
							ensure your website is secure, fast and reliable.
						</p>
						<Link
							href="/new-project"
							className="btn btn-wide xl:px-6 bg-white border-2 border-gray-900 hover:bg-orange-400 hover:border-orange-400 hover:text-white hover:drop-shadow-lg transition-all ease-in-out duration-300 rounded-full">
							Start a Project
						</Link>
					</div>
				</div>
			</section>
			<section className="w-full flex flex-col items-center justify-center mx-auto bg-black text-white py-24">
				<div className="w-full max-w-7xl px-8 grid grid-cols-1 lg:grid-cols-2 gap-24 relative">
					<div className="row-start-2 lg:row-start-1 transform -translate-y-[150px] lg:transform-none">
						<h2 className="w-full text-left text-2xl font-bold mb-8">
							Speedy and Dependable
						</h2>
						<p className="mb-12">
							Achieving 100% uptime and swift page loads is
							essential for ensuring a positive user experience.
							At our agency, we understand that each website has
							unique requirements, which is why we provide a
							variety of hosting solutions tailored to meet
							diverse needs. We prioritize making your website
							secure, speedy, and dependable, guaranteeing an
							optimal online presence for your brand.
						</p>
						<Link
							href="/contact"
							className="btn btn-wide xl:px-6 bg-white border-2 border-white hover:bg-orange-400 hover:border-orange-400 text-black hover:text-white transition-all ease-in-out duration-300 rounded-full">
							Book a Call
						</Link>
					</div>
					<Image
						src={stock1}
						alt="Service Image"
						width={900}
						height={900}
						className="object-cover transform -translate-y-[150px] h-[700px] rounded-xl"
					/>
				</div>
				<div className="w-full max-w-7xl">
					<h2 className="w-full text-center text-2xl font-bold mb-12">
						We use the latest technology
					</h2>
					<div className="flex flex-wrap justify-center gap-24">
						<h3 className="text-xl font-bold">
							<svg
								width="80"
								height="80"
								viewBox="0 -198 512 512"
								version="1.1"
								preserveAspectRatio="xMidYMid">
								<g>
									<path
										d="M255.420487,28.975665 C235.427278,28.975665 221.011885,42.0147142 221.011885,61.5732881 C221.011885,81.1318619 237.238257,94.1709111 257.231466,94.1709111 C269.310696,94.1709111 279.959253,89.3899264 286.551217,81.3310696 L272.697227,73.3265422 C269.039049,77.3288059 263.479344,79.6649689 257.231466,79.6649689 C248.556876,79.6649689 241.186191,75.1375212 238.451613,67.893605 L289.195246,67.893605 C289.593662,65.8653084 289.829089,63.7645727 289.829089,61.5551783 C289.829089,42.0147142 275.413696,28.975665 255.420487,28.975665 Z M238.288625,55.2348613 C240.552349,48.0090549 246.745897,43.4634975 255.402377,43.4634975 C264.076967,43.4634975 270.270515,48.0090549 272.516129,55.2348613 L238.288625,55.2348613 L238.288625,55.2348613 Z M450.426712,28.975665 C430.433503,28.975665 416.01811,42.0147142 416.01811,61.5732881 C416.01811,81.1318619 432.244482,94.1709111 452.237691,94.1709111 C464.316921,94.1709111 474.965478,89.3899264 481.557442,81.3310696 L467.703452,73.3265422 C464.045274,77.3288059 458.485569,79.6649689 452.237691,79.6649689 C443.563101,79.6649689 436.192417,75.1375212 433.457838,67.893605 L484.201471,67.893605 C484.599887,65.8653084 484.835314,63.7645727 484.835314,61.5551783 C484.835314,42.0147142 470.419921,28.975665 450.426712,28.975665 L450.426712,28.975665 Z M433.31296,55.2348613 C435.576684,48.0090549 441.770232,43.4634975 450.426712,43.4634975 C459.101302,43.4634975 465.29485,48.0090549 467.540464,55.2348613 L433.31296,55.2348613 Z M362.630447,61.5732881 C362.630447,72.4391624 369.729485,79.6830787 380.740238,79.6830787 C388.201471,79.6830787 393.797397,76.2965478 396.676853,70.7730617 L410.585173,78.7956989 C404.826259,88.3938879 394.032824,94.1709111 380.740238,94.1709111 C360.728919,94.1709111 346.331636,81.1318619 346.331636,61.5732881 C346.331636,42.0147142 360.747029,28.975665 380.740238,28.975665 C394.032824,28.975665 404.808149,34.7526882 410.585173,44.3508772 L396.676853,52.3735144 C393.797397,46.8500283 388.201471,43.4634975 380.740238,43.4634975 C369.747595,43.4634975 362.630447,50.7074137 362.630447,61.5732881 Z M512,9.0548953 L512,92.3599321 L495.701188,92.3599321 L495.701188,9.0548953 L512,9.0548953 Z M66.9156763,-1.42108547e-14 L133.831353,115.90266 L0,115.90266 L66.9156763,-1.42108547e-14 Z M234.213922,9.0548953 L184.031692,95.9818902 L133.849462,9.0548953 L152.665535,9.0548953 L184.031692,63.3842671 L215.397849,9.0548953 L234.213922,9.0548953 Z M340.898698,30.786644 L340.898698,48.3350311 C339.087719,47.8098472 337.168081,47.4476514 335.103565,47.4476514 C324.581777,47.4476514 316.993775,54.6915676 316.993775,65.557442 L316.993775,92.3599321 L300.694963,92.3599321 L300.694963,30.786644 L316.993775,30.786644 L316.993775,47.4476514 C316.993775,38.2478778 327.696661,30.786644 340.898698,30.786644 Z"
										fill="currentColor"
										fill-rule="nonzero"></path>
								</g>
							</svg>
						</h3>
						<h3 className="text-xl font-bold">
							<svg
								height="80"
								width="80"
								viewBox="-.1 1.1 304.9 179.8"
								xmlns="http://www.w3.org/2000/svg">
								<path
									d="m86.4 66.4c0 3.7.4 6.7 1.1 8.9.8 2.2 1.8 4.6 3.2 7.2.5.8.7 1.6.7 2.3 0 1-.6 2-1.9 3l-6.3 4.2c-.9.6-1.8.9-2.6.9-1 0-2-.5-3-1.4-1.4-1.5-2.6-3.1-3.6-4.7-1-1.7-2-3.6-3.1-5.9-7.8 9.2-17.6 13.8-29.4 13.8-8.4 0-15.1-2.4-20-7.2s-7.4-11.2-7.4-19.2c0-8.5 3-15.4 9.1-20.6s14.2-7.8 24.5-7.8c3.4 0 6.9.3 10.6.8s7.5 1.3 11.5 2.2v-7.3c0-7.6-1.6-12.9-4.7-16-3.2-3.1-8.6-4.6-16.3-4.6-3.5 0-7.1.4-10.8 1.3s-7.3 2-10.8 3.4c-1.6.7-2.8 1.1-3.5 1.3s-1.2.3-1.6.3c-1.4 0-2.1-1-2.1-3.1v-4.9c0-1.6.2-2.8.7-3.5s1.4-1.4 2.8-2.1c3.5-1.8 7.7-3.3 12.6-4.5 4.9-1.3 10.1-1.9 15.6-1.9 11.9 0 20.6 2.7 26.2 8.1 5.5 5.4 8.3 13.6 8.3 24.6v32.4zm-40.6 15.2c3.3 0 6.7-.6 10.3-1.8s6.8-3.4 9.5-6.4c1.6-1.9 2.8-4 3.4-6.4s1-5.3 1-8.7v-4.2c-2.9-.7-6-1.3-9.2-1.7s-6.3-.6-9.4-.6c-6.7 0-11.6 1.3-14.9 4s-4.9 6.5-4.9 11.5c0 4.7 1.2 8.2 3.7 10.6 2.4 2.5 5.9 3.7 10.5 3.7zm80.3 10.8c-1.8 0-3-.3-3.8-1-.8-.6-1.5-2-2.1-3.9l-23.5-77.3c-.6-2-.9-3.3-.9-4 0-1.6.8-2.5 2.4-2.5h9.8c1.9 0 3.2.3 3.9 1 .8.6 1.4 2 2 3.9l16.8 66.2 15.6-66.2c.5-2 1.1-3.3 1.9-3.9s2.2-1 4-1h8c1.9 0 3.2.3 4 1 .8.6 1.5 2 1.9 3.9l15.8 67 17.3-67c.6-2 1.3-3.3 2-3.9.8-.6 2.1-1 3.9-1h9.3c1.6 0 2.5.8 2.5 2.5 0 .5-.1 1-.2 1.6s-.3 1.4-.7 2.5l-24.1 77.3c-.6 2-1.3 3.3-2.1 3.9s-2.1 1-3.8 1h-8.6c-1.9 0-3.2-.3-4-1s-1.5-2-1.9-4l-15.5-64.5-15.4 64.4c-.5 2-1.1 3.3-1.9 4s-2.2 1-4 1zm128.5 2.7c-5.2 0-10.4-.6-15.4-1.8s-8.9-2.5-11.5-4c-1.6-.9-2.7-1.9-3.1-2.8s-.6-1.9-.6-2.8v-5.1c0-2.1.8-3.1 2.3-3.1.6 0 1.2.1 1.8.3s1.5.6 2.5 1c3.4 1.5 7.1 2.7 11 3.5 4 .8 7.9 1.2 11.9 1.2 6.3 0 11.2-1.1 14.6-3.3s5.2-5.4 5.2-9.5c0-2.8-.9-5.1-2.7-7s-5.2-3.6-10.1-5.2l-14.5-4.5c-7.3-2.3-12.7-5.7-16-10.2-3.3-4.4-5-9.3-5-14.5 0-4.2.9-7.9 2.7-11.1s4.2-6 7.2-8.2c3-2.3 6.4-4 10.4-5.2s8.2-1.7 12.6-1.7c2.2 0 4.5.1 6.7.4 2.3.3 4.4.7 6.5 1.1 2 .5 3.9 1 5.7 1.6s3.2 1.2 4.2 1.8c1.4.8 2.4 1.6 3 2.5.6.8.9 1.9.9 3.3v4.7c0 2.1-.8 3.2-2.3 3.2-.8 0-2.1-.4-3.8-1.2-5.7-2.6-12.1-3.9-19.2-3.9-5.7 0-10.2.9-13.3 2.8s-4.7 4.8-4.7 8.9c0 2.8 1 5.2 3 7.1s5.7 3.8 11 5.5l14.2 4.5c7.2 2.3 12.4 5.5 15.5 9.6s4.6 8.8 4.6 14c0 4.3-.9 8.2-2.6 11.6-1.8 3.4-4.2 6.4-7.3 8.8-3.1 2.5-6.8 4.3-11.1 5.6-4.5 1.4-9.2 2.1-14.3 2.1z"
									fill="currentColor"
								/>
								<g
									clip-rule="evenodd"
									fill="currentColor"
									fill-rule="evenodd">
									<path d="m273.5 143.7c-32.9 24.3-80.7 37.2-121.8 37.2-57.6 0-109.5-21.3-148.7-56.7-3.1-2.8-.3-6.6 3.4-4.4 42.4 24.6 94.7 39.5 148.8 39.5 36.5 0 76.6-7.6 113.5-23.2 5.5-2.5 10.2 3.6 4.8 7.6z" />
									<path d="m287.2 128.1c-4.2-5.4-27.8-2.6-38.5-1.3-3.2.4-3.7-2.4-.8-4.5 18.8-13.2 49.7-9.4 53.3-5 3.6 4.5-1 35.4-18.6 50.2-2.7 2.3-5.3 1.1-4.1-1.9 4-9.9 12.9-32.2 8.7-37.5z" />
								</g>
							</svg>
						</h3>
						<h3 className="text-xl font-bold">
							<svg
								width="80"
								height="80"
								viewBox="0 0 16 16"
								xmlns="http://www.w3.org/2000/svg"
								fill="none">
								<g fill="currentColor">
									<path d="M6.258 1.687L8.439.5l2.182 1.187.005 3.285-2.18.367-2.188-.37V1.687z" />

									<path d="M3.307 3.083l2.41.69V5.43l1.656.28-1.647.185v4.25l1.653.195-1.653.31v1.695l-2.419.627v-.008l-.807-.37V3.469l.807-.37v-.016zM11.166 10.65v2.047l2.304.272 1.03-.594V3.688l-1.03-.594-2.306.272.003 2.068-1.645.277 1.644.184v4.25l-1.651.195 1.651.31z" />

									<path d="M6.267 11.103l2.182-.409 2.177.41v3.22L8.446 15.5l-2.18-1.176v-3.22zM6.267 6.383l2.18-.244 2.179.244V9.66l-2.18.257-2.18-.257V6.383z" />
								</g>
							</svg>
						</h3>
					</div>
				</div>
			</section>
			<section className="w-full flex flex-col items-center justify-center mx-auto bg-white text-black py-16">
				<div className="w-full max-w-7xl px-8">
					<h2 className="max-w-3xl w-full mx-auto text-center text-2xl font-bold mb-12">
						Our Web Hosting Services
					</h2>
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24">
						<Image
							src={stock2}
							alt="Service Image"
							width={600}
							height={600}
							className="object-cover w-full rounded-xl"
						/>
						<div className="flex flex-col justify-center">
							<h3 className="w-full text-left text-xl font-bold mb-6">
								Are you ready for growth without limits?
							</h3>

							<p className="mb-2 mt-4 flex gap-2 items-center">
								<MdOutlineCheck className="text-orange-400 text-xl" />
								Scale and adapt cloud hosting to meet your exact
								requirements
							</p>
							<p className="mb-2 flex gap-2 items-center">
								<MdOutlineCheck className="text-orange-400 text-xl" />
								Unlimited, unmetered bandwidth with no hidden
								costs
							</p>
							<p className="mb-2 flex gap-2 items-center">
								<MdOutlineCheck className="text-orange-400 text-xl" />
								Access to state-of-the-art network
								infrastructure
							</p>
							<p className="mb-2 flex gap-2 items-center">
								<MdOutlineCheck className="text-orange-400 text-xl" />
								100% network uptime guarantee
							</p>
						</div>
					</div>
				</div>
			</section>
			<section className="w-full flex flex-col items-center justify-center mx-auto bg-white text-black py-16">
				<div className="w-full max-w-7xl px-8">
					<h2 className="max-w-3xl mx-auto text-center text-2xl font-bold mb-16">
						A team of experts that can handle hosting and technical
						support
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-24">
						<div>
							<h3 className="font-bold text-xl mb-2 flex gap-2 items-center">
								<MdOutlineRouter className="text-orange-400 text-3xl" />
								Dedicated Servers
							</h3>
							<p>
								A range of dedicated servers come with
								next-generation hardware with as much storage as
								you need.
							</p>
						</div>
						<div>
							<h3 className="font-bold text-xl mb-2 flex gap-2 items-center">
								<MdOutlineLock className="text-orange-400 text-3xl" />
								Security
							</h3>
							<p>
								Secure your business against the ever-evolving
								world of cybercrime with secure hosting
								solutions that deliver.
							</p>
						</div>
						<div>
							<h3 className="font-bold text-xl mb-2 flex gap-2 items-center">
								<MdOutlineCloud className="text-orange-400 text-3xl" />
								Cloud Hosting
							</h3>
							<p>
								A tailored approach to cloud hosting, with a
								range of public and private cloud servers to
								suit any team.
							</p>
						</div>
						<div>
							<h3 className="font-bold text-xl mb-2 flex gap-2 items-center">
								<MdOutlineGroups className="text-orange-400 text-3xl" />
								Shared Hosting
							</h3>
							<p>
								Our cheapest hosting solution to cater for small
								businesses with low traffic.
							</p>
						</div>
						<div>
							<h3 className="font-bold text-xl mb-2 flex gap-2 items-center">
								<MdOutlineSupportAgent className="text-orange-400 text-3xl" />
								Technical Support
							</h3>
							<p>
								Be supported 24 hours a day, 7 days a week, 365
								days a year.
							</p>
						</div>
						<div>
							<h3 className="font-bold text-xl mb-2 flex gap-2 items-center">
								<MdOutlineWeb className="text-orange-400 text-3xl" />
								New Website
							</h3>
							<p>
								Have a new website you have launched but having
								hosting / performance issues?
							</p>
						</div>
					</div>
				</div>
			</section>
			{/* <section className="w-full flex flex-col items-center justify-center mx-auto bg-white text-black px-24 lg:px-8 py-12">
				<div className="w-full max-w-7xl">
					<h2 className="mx-auto text-center text-3xl font-bold mb-12">
						Web design projects we&apos;ve worked on
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-16 w-full max-w-7xl">
						<div className="flex flex-col gap-16">
							<ExperienceCard
								id={1}
								title="Alliance Coaching"
								description="Web design & development for online coaching brand"
								img={alliance}
							/>

							<ExperienceCard
								id={4}
								title="Voics"
								description="Podcast as a service web design & development"
								img={voics}
							/>
						</div>
						<div className="flex flex-col gap-16">
							<ExperienceCard
								id={3}
								title="Resilient Intent"
								description="An educational platform for fitness professionals"
								img={resilient1}
							/>
							<ExperienceCard
								id={2}
								title="Team Ignite"
								description="Bodybuilding coaching brand digital presence"
								img={ignite}
							/>
						</div>
					</div>
				</div>
			</section> */}
			<section className="w-full flex flex-col items-center justify-center mx-auto bg-white text-black py-12">
				<div className="grid grid-cols-1 md:grid-cols-2 max-w-7xl px-8 w-full">
					<h2 className="w-full text-left text-5xl font-bold tracking-tight mb-12 md:mb-0">
						More Services
					</h2>
					<div className="flex flex-col items-start w-full">
						<div className="border-b w-full pb-6 group cursor-pointer">
							<Link
								href="/web-design"
								className="text-4xl tracking-tight group-hover:pl-4 group-hover:text-orange-400 transition-all ease-in-out duration-300">
								Web Design
							</Link>
						</div>
						<div className="border-b w-full py-6 group cursor-pointer">
							<Link
								href="/ecom"
								className="text-4xl tracking-tight group-hover:pl-4 group-hover:text-orange-400 transition-all ease-in-out duration-300">
								eCommerce
							</Link>
						</div>
						<div className="border-b w-full py-6 group cursor-pointer">
							<Link
								href="/seo"
								className="text-4xl tracking-tight group-hover:pl-4 group-hover:text-orange-400 transition-all ease-in-out duration-300">
								SEO
							</Link>
						</div>
						<div className="w-full pt-6 group cursor-pointer">
							<Link
								href="/services"
								className="text-4xl tracking-tight group-hover:pl-4 group-hover:text-orange-400 transition-all ease-in-out duration-300">
								All Services
							</Link>
						</div>
					</div>
				</div>
			</section>
			<FAQ />
			<Contact />
			<Footer />
		</>
	);
}
