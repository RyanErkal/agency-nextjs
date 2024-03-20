import Link from "next/link";
import config from "@/config";

// Add the Footer to the bottom of your landing page and more.
// The support link is connected to the config.js file. If there's no config.mailgun.supportEmail, the link won't be displayed.

const Footer = () => {
	return (
		<footer className="bg-white text-gray-900 ">
			<div className="max-w-7xl mx-auto ">
				<div className=" flex lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col px-8 py-24 border-t border-base-content/10 mx-4 md:mx-8">
					<div className="w-72 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
						<Link href="/#" aria-current="page" className="">
							<h1 className="text-4xl font-bold">ReDesign</h1>
						</Link>

						<p className="mt-3 text-sm text-gray-900 text-opacity-75">
							{config.appDescription}
						</p>
						<p className="mt-3 text-sm text-gray-900 text-opacity-75">
							Copyright © {new Date().getFullYear()} - All rights
							reserved
						</p>
					</div>
					<div className="flex-grow flex flex-wrap justify-center  md:mt-0 mt-10 text-center">
						<div className="lg:w-1/3 md:w-1/2 w-full px-4">
							<div className="footer-title font-semibold text-gray-900 tracking-widest text-sm md:text-left mb-3">
								LINKS
							</div>

							<div className="flex flex-col justify-center items-center md:items-start gap-2 mb-10 text-sm">
								{config.mailgun.supportEmail && (
									<a
										href={`mailto:${config.mailgun.supportEmail}`}
										target="_blank"
										className="link"
										aria-label="Contact Support">
										Support
									</a>
								)}
								<Link href="/services" className="link">
									Services
								</Link>
								<Link href="/projects" className="link">
									Work
								</Link>
								<Link href="/blog" className="link">
									Blog
								</Link>
								<Link href="/contact" className="link">
									Contact
								</Link>
							</div>
						</div>

						<div className="lg:w-1/3 md:w-1/2 w-full px-4">
							<div className="footer-title font-semibold text-gray-900 tracking-widest text-sm md:text-left mb-3">
								LEGAL
							</div>

							<div className="flex flex-col justify-center items-center md:items-start gap-2 mb-10 text-sm">
								<Link href="/tos" className="link">
									Terms of services
								</Link>
								<Link href="/privacy-policy" className="link">
									Privacy policy
								</Link>
							</div>
						</div>
					</div>
					<div className="flex justify-center md:flex-col gap-2">
						<a
							href="https://www.linkedin.com/in/ryan-erkal-182768160/"
							target="_blank"
							rel="noreferrer">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								x="0px"
								y="0px"
								width="40"
								height="40"
								viewBox="0 0 24 24"
								fill="currentColor"
								className="hover:text-orange-400 cursor-pointer transition-all ease-in-out duration-300">
								<path d="M19,3H5C3.895,3,3,3.895,3,5v14c0,1.105,0.895,2,2,2h14c1.105,0,2-0.895,2-2V5C21,3.895,20.105,3,19,3z M9,17H6.477v-7H9 V17z M7.694,8.717c-0.771,0-1.286-0.514-1.286-1.2s0.514-1.2,1.371-1.2c0.771,0,1.286,0.514,1.286,1.2S8.551,8.717,7.694,8.717z M18,17h-2.442v-3.826c0-1.058-0.651-1.302-0.895-1.302s-1.058,0.163-1.058,1.302c0,0.163,0,3.826,0,3.826h-2.523v-7h2.523v0.977 C13.93,10.407,14.581,10,15.802,10C17.023,10,18,10.977,18,13.174V17z"></path>
							</svg>
						</a>
						<a
							href="https://github.com/RyanErkal"
							target="_blank"
							rel="noreferrer">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								x="0px"
								y="0px"
								width="40"
								height="40"
								viewBox="0 0 32 32"
								fill="currentColor"
								className="hover:text-orange-400 cursor-pointer transition-all ease-in-out duration-300">
								<path
									fillRule="evenodd"
									d="M 16 4 C 9.371094 4 4 9.371094 4 16 C 4 21.300781 7.4375 25.800781 12.207031 27.386719 C 12.808594 27.496094 13.027344 27.128906 13.027344 26.808594 C 13.027344 26.523438 13.015625 25.769531 13.011719 24.769531 C 9.671875 25.492188 8.96875 23.160156 8.96875 23.160156 C 8.421875 21.773438 7.636719 21.402344 7.636719 21.402344 C 6.546875 20.660156 7.71875 20.675781 7.71875 20.675781 C 8.921875 20.761719 9.554688 21.910156 9.554688 21.910156 C 10.625 23.746094 12.363281 23.214844 13.046875 22.910156 C 13.15625 22.132813 13.46875 21.605469 13.808594 21.304688 C 11.144531 21.003906 8.34375 19.972656 8.34375 15.375 C 8.34375 14.0625 8.8125 12.992188 9.578125 12.152344 C 9.457031 11.851563 9.042969 10.628906 9.695313 8.976563 C 9.695313 8.976563 10.703125 8.65625 12.996094 10.207031 C 13.953125 9.941406 14.980469 9.808594 16 9.804688 C 17.019531 9.808594 18.046875 9.941406 19.003906 10.207031 C 21.296875 8.65625 22.300781 8.976563 22.300781 8.976563 C 22.957031 10.628906 22.546875 11.851563 22.421875 12.152344 C 23.191406 12.992188 23.652344 14.0625 23.652344 15.375 C 23.652344 19.984375 20.847656 20.996094 18.175781 21.296875 C 18.605469 21.664063 18.988281 22.398438 18.988281 23.515625 C 18.988281 25.121094 18.976563 26.414063 18.976563 26.808594 C 18.976563 27.128906 19.191406 27.503906 19.800781 27.386719 C 24.566406 25.796875 28 21.300781 28 16 C 28 9.371094 22.628906 4 16 4 Z"></path>
							</svg>
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
