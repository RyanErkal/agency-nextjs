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

import { MdOutlineInsertLink } from "react-icons/md";
import { MdOutlineSpeed } from "react-icons/md";
import { MdOutlineDataArray } from "react-icons/md";
import { MdOutlineVpnKey } from "react-icons/md";
import { MdOutlineLibraryBooks } from "react-icons/md";
import { MdOutlineFeaturedPlayList } from "react-icons/md";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { MdOutlineLeaderboard } from "react-icons/md";

export const metadata = getSEOTags({
	title: "SEO Agency Manchester | ReDesign",
	canonicalUrlRelative: "/seo"
});

export default function SEO() {
	return (
		<>
			<Header />
			<section
				id="seo"
				className="max-w-7xl flex flex-col items-center justify-center mx-auto text-black px-4 md:px-8 py-24">
				<h2 className="w-full text-left text-5xl tracking-tight font-bold mb-12">
					SEO
				</h2>
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-24">
					<h3 className="w-full text-left text-2xl font-bold">
						How important is it for your business to rank in Google?
						And to get more visitors? More sales?
					</h3>
					<div>
						<p className="mb-12">
							SEO is very important if your website is a tool to
							generate business, whether that be selling services
							or products. The SEO agency team here at ReDesign
							have extensive experience managing SEO campaigns for
							businesses looking to outrank competitors and
							compete in search engines for relevant search terms.
							We also have experience with small businesses
							seeking local customers.
							<br />
							<br />
							No SEO strategy is the same, we look at each project
							individually and develop a seo campaign that suits
							your business goals. We discuss and advise
							accordingly to get the best seo results.
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
				<div className="w-full max-w-7xl px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-24 relative">
					<div className="row-start-2 lg:row-start-1 transform -translate-y-[150px] lg:transform-none">
						<h2 className="w-full text-left text-2xl font-bold mb-8">
							A digital marketing agency who understand SEO from
							all angles.
						</h2>
						<p className="mb-12">
							We are proud to have created a team of seo experts.
							Whether that be Technical SEO, Link Building,
							Content Creation or Digital PR. Your SEO campaign
							will have a bespoke strategy based upon research.
							Our goal is to allow you to have the confidence that
							our web design agency can make technical SEO
							improvements in conjunction with our SEO team.
							Working together with the best results in mind, as a
							collaboration between the development team, SEO, and
							the clients goals and expectations.
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
						placeholder="blur"
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
								fill="currentColor"
								height="80"
								width="80"
								version="1.1"
								id="Capa_1"
								viewBox="0 0 226.743 226.743">
								<path
									d="M222.303,147.985V15.636C222.303,7.014,215.289,0,206.667,0H20.078C11.455,0,4.44,7.014,4.44,15.636l0.001,211.107
	l58.018-63.122h144.208C215.289,163.621,222.303,156.607,222.303,147.985z M55.872,148.621l-36.431,39.636L19.44,15.636
	c0-0.351,0.287-0.636,0.639-0.636h186.589c0.351,0,0.636,0.286,0.636,0.636v132.349c0,0.351-0.285,0.636-0.636,0.636H55.872z
	 M138.156,39.403h-16.679v17.625h-16.21V39.403H88.588v17.625H70.964v16.677h17.624v16.21H70.964v16.679h17.624v17.624h16.679
	v-17.624h16.21v17.624h16.679v-17.624h17.623V89.915h-17.623v-16.21h17.623V57.028h-17.623V39.403z M121.477,89.915h-16.21v-16.21
	h16.21V89.915z"
								/>
							</svg>
						</h3>
						<h3 className="text-xl font-bold">
							<svg
								fill="currentColor"
								width="80"
								height="80"
								viewBox="0 0 32 32"
								xmlns="http://www.w3.org/2000/svg">
								<path d="M15.989 1.396h0.032c1.197 0 2.307 0.401 3.197 1.073h0.005c0.615 0.463 1.125 1.057 1.489 1.733l5.953 10.36 0.036 0.083 4.557 7.907c0.485 0.817 0.74 1.755 0.74 2.713 0 0.751-0.156 1.469-0.437 2.12l0.005 0.021c-0.213 0.484-0.495 0.927-0.844 1.328-0.396 0.459-0.864 0.853-1.396 1.156-0.787 0.459-1.683 0.703-2.593 0.713h-0.089c-1.156 0-2.276-0.375-3.197-1.073h-0.005c-0.615-0.463-1.125-1.057-1.489-1.733l-5.953-10.36-0.036-0.083-4.579-7.943c-0.473-0.813-0.719-1.735-0.719-2.677 0-0.563 0.088-1.109 0.251-1.62l0.009-0.032 0.016-0.041c0.068-0.208 0.156-0.448 0.156-0.448 0.208-0.479 0.495-0.921 0.833-1.312l0.084-0.099 0.020-0.021v-0.005h0.005l0.011-0.016 0.011-0.004c0.359-0.396 0.787-0.745 1.276-1.027 0.787-0.459 1.683-0.703 2.593-0.713zM5.344 30.604h-0.079c-0.911-0.011-1.807-0.255-2.593-0.713-0.532-0.303-1-0.697-1.396-1.156-0.349-0.401-0.631-0.844-0.844-1.328l0.005-0.021c-0.292-0.667-0.437-1.391-0.437-2.12 0-0.995 0.271-1.921 0.74-2.713l4.557-7.907 0.036-0.083 4.052-7.047c0.099 0.859 0.364 1.703 0.792 2.473l0.077 0.131 4.5 7.807v-0.015l0.089 0.192 0.385 0.677-5.183 9.016c-0.364 0.676-0.875 1.271-1.489 1.733h-0.005c-0.921 0.699-2.041 1.073-3.197 1.073z" />
							</svg>
						</h3>
						<h3 className="text-xl font-bold">
							<svg
								width="80"
								height="80"
								viewBox="-14 0 284 284"
								version="1.1"
								preserveAspectRatio="xMidYMid">
								<g>
									<path
										d="M256.003159,247.933017 C256.055907,258.030289 251.77298,267.664804 244.241349,274.390297 C236.709718,281.11579 226.653817,284.285366 216.626905,283.094249 C198.58347,280.424364 185.360959,264.722632 185.800619,246.488035 L185.800619,36.8452103 C185.364944,18.5907614 198.619678,2.88144681 216.687112,0.238996295 C226.704325,-0.933476157 236.743571,2.24455542 244.261279,8.9678962 C251.778988,15.691237 256.053811,25.3147619 256.003159,35.4002282 L256.003159,247.933017 Z"
										fill="currentColor"></path>
									<path
										d="M35.1010243,213.193238 C54.4867848,213.193238 70.2020487,228.908502 70.2020487,248.294263 C70.2020487,267.680023 54.4867848,283.395287 35.1010243,283.395287 C15.7152639,283.395287 0,267.680023 0,248.294263 C0,228.908502 15.7152639,213.193238 35.1010243,213.193238 Z M127.459466,106.806429 C107.981896,107.874068 92.8698765,124.212107 93.3217628,143.713681 L93.3217628,237.998765 C93.3217628,263.58699 104.580582,279.120548 121.077461,282.431965 C131.434034,284.530959 142.185473,281.860819 150.356699,275.160414 C158.527925,268.460009 163.252393,258.439904 163.222912,247.872809 L163.222912,142.088076 C163.240039,132.641687 159.462041,123.584285 152.737293,116.950107 C146.012546,110.315928 136.904752,106.661084 127.459466,106.806429 L127.459466,106.806429 Z"
										fill="currentColor"></path>
								</g>
							</svg>
						</h3>
						<h3 className="text-xl font-bold">
							<svg
								fill="currentColor"
								width="80"
								height="80"
								viewBox="0 0 32 32"
								version="1.1"
								xmlns="http://www.w3.org/2000/svg">
								<title>react</title>
								<path d="M14.313 22.211c0.55 0.025 1.112 0.043 1.681 0.043 0.575 0 1.143-0.012 1.7-0.043-0.557 0.72-1.107 1.357-1.689 1.964l0.008-0.008c-0.579-0.6-1.135-1.238-1.659-1.902l-0.041-0.054zM8.615 21.411c1.083 0.275 2.404 0.509 3.752 0.653l0.131 0.011c0.825 1.133 1.659 2.13 2.554 3.068l-0.011-0.012c-1.311 1.463-3.080 2.491-5.081 2.86l-0.055 0.008c-0.004 0-0.008 0-0.012 0-0.248 0-0.482-0.061-0.687-0.169l0.008 0.004c-0.832-0.475-1.193-2.292-0.912-4.627 0.067-0.575 0.177-1.18 0.312-1.797zM23.398 21.398c0.118 0.474 0.229 1.078 0.308 1.692l0.009 0.086c0.287 2.334-0.067 4.149-0.892 4.634-0.184 0.102-0.404 0.162-0.638 0.162-0.023 0-0.046-0.001-0.069-0.002l0.003 0c-2.053-0.375-3.821-1.396-5.129-2.841l-0.007-0.008c0.879-0.923 1.707-1.918 2.466-2.965l0.058-0.084c1.476-0.154 2.799-0.392 4.088-0.717l-0.197 0.042zM9.784 17.666c0.25 0.49 0.512 0.978 0.8 1.468q0.431 0.731 0.881 1.428c-0.868-0.127-1.706-0.287-2.507-0.482 0.225-0.787 0.507-1.602 0.825-2.416zM22.212 17.641c0.331 0.821 0.612 1.64 0.845 2.434-0.8 0.196-1.645 0.362-2.519 0.487 0.3-0.469 0.6-0.952 0.881-1.447 0.281-0.487 0.544-0.985 0.795-1.475zM7.619 12.292c0.436 1.478 0.904 2.714 1.449 3.906l-0.075-0.182c-0.466 1.005-0.927 2.234-1.305 3.499l-0.052 0.205c-0.706-0.217-1.274-0.43-1.827-0.669l0.115 0.044c-2.164-0.921-3.564-2.132-3.564-3.092s1.4-2.177 3.564-3.094c0.525-0.225 1.1-0.428 1.694-0.617zM24.358 12.287c0.605 0.187 1.18 0.396 1.718 0.622 2.164 0.925 3.564 2.134 3.564 3.094-0.006 0.96-1.406 2.174-3.57 3.093-0.525 0.225-1.1 0.427-1.693 0.616-0.44-1.483-0.908-2.718-1.451-3.912l0.076 0.188c0.464-1.004 0.926-2.233 1.303-3.498l0.053-0.206zM20.53 11.444c0.869 0.129 1.706 0.287 2.507 0.484-0.225 0.79-0.506 1.602-0.825 2.416-0.25-0.487-0.512-0.978-0.8-1.467-0.281-0.49-0.581-0.967-0.881-1.432zM11.458 11.444c-0.3 0.471-0.6 0.953-0.88 1.45-0.281 0.487-0.544 0.977-0.794 1.467-0.331-0.82-0.612-1.637-0.845-2.433 0.8-0.187 1.643-0.354 2.518-0.482zM16 11.126c0.925 0 1.846 0.042 2.752 0.116q0.761 1.091 1.478 2.324 0.697 1.2 1.272 2.432c-0.385 0.819-0.807 1.637-1.266 2.437-0.475 0.825-0.966 1.61-1.475 2.337-0.91 0.079-1.832 0.122-2.762 0.122-0.925 0-1.846-0.044-2.752-0.116-0.507-0.727-1.002-1.505-1.478-2.324q-0.697-1.2-1.272-2.432c0.379-0.821 0.807-1.641 1.266-2.442 0.475-0.825 0.966-1.607 1.475-2.334 0.91-0.080 1.832-0.122 2.762-0.122zM15.981 7.845c0.58 0.6 1.136 1.237 1.659 1.901l0.040 0.053c-0.55-0.025-1.112-0.042-1.681-0.042-0.575 0-1.143 0.012-1.7 0.042 0.556-0.72 1.106-1.357 1.689-1.964l-0.008 0.008zM9.88 4.033c2.053 0.376 3.82 1.397 5.129 2.841l0.007 0.008c-0.879 0.924-1.707 1.919-2.466 2.968l-0.058 0.084c-1.475 0.153-2.798 0.389-4.086 0.714l0.196-0.042c-0.14-0.612-0.244-1.205-0.317-1.774-0.287-2.334 0.067-4.149 0.892-4.632 0.206-0.097 0.447-0.157 0.701-0.165l0.003-0zM22.090 4.008v0.008c0.013-0 0.028-0.001 0.044-0.001 0.239 0 0.464 0.059 0.662 0.163l-0.008-0.004c0.832 0.477 1.193 2.293 0.912 4.629-0.067 0.575-0.177 1.181-0.312 1.799-1.085-0.278-2.406-0.513-3.754-0.656l-0.128-0.011c-0.826-1.134-1.66-2.131-2.555-3.070l0.012 0.012c1.311-1.46 3.077-2.488 5.074-2.859l0.056-0.009zM22.096 2.646c-2.442 0.371-4.556 1.557-6.1 3.268l-0.008 0.009c-1.555-1.71-3.669-2.888-6.051-3.245l-0.056-0.007c-0.013-0-0.029-0-0.045-0-0.491 0-0.952 0.129-1.351 0.355l0.014-0.007c-1.718 0.991-2.103 4.079-1.216 7.954-3.804 1.175-6.278 3.053-6.278 5.032 0 1.987 2.487 3.87 6.302 5.036-0.88 3.89-0.487 6.983 1.235 7.973 0.378 0.217 0.832 0.344 1.315 0.344 0.022 0 0.044-0 0.065-0.001l-0.003 0c2.442-0.371 4.556-1.558 6.1-3.27l0.008-0.009c1.555 1.711 3.669 2.889 6.051 3.246l0.056 0.007c0.015 0 0.034 0 0.052 0 0.488 0 0.947-0.128 1.344-0.351l-0.014 0.007c1.717-0.99 2.103-4.078 1.216-7.954 3.79-1.165 6.264-3.047 6.264-5.029 0-1.987-2.487-3.87-6.302-5.039 0.88-3.886 0.487-6.982-1.235-7.973-0.382-0.219-0.84-0.348-1.328-0.348-0.013 0-0.026 0-0.039 0l0.002-0zM18.787 16.005c0 1.543-1.251 2.794-2.794 2.794s-2.794-1.251-2.794-2.794c0-1.543 1.251-2.794 2.794-2.794 0.772 0 1.47 0.313 1.976 0.818v0c0.506 0.506 0.818 1.204 0.818 1.976 0 0 0 0 0 0v0z"></path>
							</svg>
						</h3>
						<h3 className="text-xl font-bold">
							<svg
								width="80"
								height="80"
								viewBox="0 0 24 24"
								fill="currentColor"
								xmlns="http://www.w3.org/2000/svg">
								<g clip-path="url(#clip0)">
									<path
										d="M11.2141 0.00645944C11.1625 0.0111515 10.9982 0.0275738 10.8504 0.039304C7.44164 0.346635 4.24868 2.18593 2.22639 5.01291C1.10029 6.58476 0.380059 8.36775 0.107918 10.2563C0.0117302 10.9156 0 11.1103 0 12.0041C0 12.898 0.0117302 13.0927 0.107918 13.7519C0.760117 18.2587 3.96716 22.0452 8.31672 23.4481C9.0956 23.6991 9.91672 23.8704 10.8504 23.9736C11.2141 24.0135 12.7859 24.0135 13.1496 23.9736C14.7613 23.7953 16.1267 23.3965 17.4733 22.7091C17.6798 22.6035 17.7196 22.5754 17.6915 22.5519C17.6727 22.5378 16.793 21.3578 15.7372 19.9314L13.8182 17.339L11.4135 13.7801C10.0903 11.8235 9.00176 10.2235 8.99238 10.2235C8.98299 10.2211 8.97361 11.8024 8.96891 13.7331C8.96188 17.1138 8.95953 17.2499 8.9173 17.3296C8.85631 17.4446 8.80938 17.4915 8.71085 17.5431C8.63578 17.5807 8.57009 17.5877 8.21584 17.5877H7.80997L7.70205 17.5197C7.63167 17.4751 7.58006 17.4164 7.54487 17.3484L7.4956 17.2428L7.50029 12.539L7.50733 7.83285L7.58006 7.74136C7.6176 7.69209 7.69736 7.62875 7.75367 7.59825C7.84985 7.55133 7.88739 7.54664 8.29325 7.54664C8.77185 7.54664 8.85161 7.5654 8.97595 7.70147C9.01114 7.73901 10.3132 9.7003 11.871 12.0628C13.4287 14.4252 15.5589 17.651 16.6053 19.2346L18.5056 22.1132L18.6018 22.0499C19.4534 21.4962 20.3543 20.7079 21.0674 19.8868C22.5853 18.1437 23.5636 16.0182 23.8921 13.7519C23.9883 13.0927 24 12.898 24 12.0041C24 11.1103 23.9883 10.9156 23.8921 10.2563C23.2399 5.74957 20.0328 1.96306 15.6833 0.560125C14.9161 0.311445 14.0997 0.140184 13.1848 0.036958C12.9595 0.0134976 11.4088 -0.0123089 11.2141 0.00645944ZM16.1267 7.26511C16.2393 7.32142 16.3308 7.42933 16.3636 7.54194C16.3824 7.60294 16.3871 8.90734 16.3824 11.8469L16.3754 16.0651L15.6317 14.9249L14.8856 13.7848V10.7185C14.8856 8.73608 14.895 7.62171 14.9091 7.56775C14.9466 7.43637 15.0287 7.33315 15.1413 7.27215C15.2375 7.22288 15.2727 7.21819 15.6411 7.21819C15.9883 7.21819 16.0493 7.22288 16.1267 7.26511Z"
										fill="currentColor"
									/>
								</g>
								<defs>
									<clipPath id="clip0">
										<rect
											width="24"
											height="24"
											fill="currentColor"
										/>
									</clipPath>
								</defs>
							</svg>
						</h3>
					</div>
				</div>
			</section>
			{/* <section className="w-full flex flex-col items-center justify-center mx-auto bg-white text-black px-24 lg:px-8 py-24">
				<div className="w-full max-w-7xl">
					<h2 className="max-w-3xl w-full mx-auto text-center text-3xl font-bold mb-12">
						Our preferred content management systems of choice
						include Craft Commerce and Shopify
					</h2>
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24">
						<Image
							src={ph1}
							alt="Service Image"
							width={600}
							height={600}
							className="object-cover w-full"
						/>
						<div className="">
							<h3 className="w-full text-left text-2xl font-bold mb-6">
								Shopify
							</h3>
							<p className="mb-4">
								Our custom Shopify sites are a cheaper and
								faster option than Craft Commerce. We start with
								an existing Shopify template and customise as
								much as possible. You could have an eCommerce
								store online within 3 weeks.
							</p>
							<Link
								href="/shopify"
								className="link text-orange-400">
								Learn more about Shopify
							</Link>
							<p className="mb-2 mt-4 flex gap-2 items-center">
								<MdOutlineCheck className="text-orange-400 text-xl" />
								Built in 3 weeks
							</p>
							<p className="mb-2 flex gap-2 items-center">
								<MdOutlineCheck className="text-orange-400 text-xl" />
								Fixed price
							</p>
							<p className="mb-2 flex gap-2 items-center">
								<MdOutlineCheck className="text-orange-400 text-xl" />
								Hosting included
							</p>
						</div>
						<Image
							src={ph1}
							alt="Service Image"
							width={600}
							height={600}
							className="object-cover w-full lg:col-start-2"
						/>
						<div className="lg:col-start-1 lg:row-start-2">
							<h3 className="w-full text-left text-2xl font-bold mb-6">
								Stripe
							</h3>
							<p className="mb-4">
								Build with no limits. This is our bespoke
								website option, we design and build exactly what
								you need from the ground up. A very powerful
								tool that allows for growth.
							</p>
							<Link
								href="/shopify"
								className="link text-orange-400">
								Learn more about Stripe
							</Link>
							<p className="mb-2 mt-4 flex gap-2 items-center">
								<MdOutlineCheck className="text-orange-400 text-xl" />
								Minimum 6 weeks build
							</p>
							<p className="mb-2 flex gap-2 items-center">
								<MdOutlineCheck className="text-orange-400 text-xl" />
								No specification limits
							</p>
							<p className="mb-2 flex gap-2 items-center">
								<MdOutlineCheck className="text-orange-400 text-xl" />
								No design restrictions
							</p>
						</div>
					</div>
				</div>
			</section> */}
			<section className="w-full flex flex-col items-center justify-center mx-auto bg-white text-black py-16">
				<div className="w-full max-w-7xl px-4 md:px-8">
					<h2 className="max-w-3xl mx-auto text-center text-2xl font-bold mb-16">
						Stand out from the crowd.
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-24">
						<div>
							<h3 className="font-bold text-xl mb-2 flex gap-2 items-center">
								<MdOutlineInsertLink className="text-orange-400 text-3xl" />
								Link Building
							</h3>
							<p>
								Increasing the number and quality of inbound
								links to a webpage with the goal of increasing
								the search engine rankings of that page or
								website.
							</p>
						</div>
						<div>
							<h3 className="font-bold text-xl mb-2 flex gap-2 items-center">
								<MdOutlinePeopleAlt className="text-orange-400 text-3xl" />
								Digital PR
							</h3>
							<p>
								An online marketing strategy used by businesses
								to increase their online presence. We network
								with journalists, bloggers and influencers to
								gain high-quality backlinks and social media
								mentions to improve SEO.
							</p>
						</div>
						<div>
							<h3 className="font-bold text-xl mb-2 flex gap-2 items-center">
								<MdOutlineFeaturedPlayList className="text-orange-400 text-3xl" />
								On-Site Content
							</h3>
							<p>
								Without relevant content on your website, there
								is no reason for users to stick around, or for
								Google to rank your site accordingly. Make sure
								your website content is relevant and targeted
								towards your desired search terms.
							</p>
						</div>
						<div>
							<h3 className="font-bold text-xl mb-2 flex gap-2 items-center">
								<MdOutlineVpnKey className="text-orange-400 text-3xl" />
								Keyword Research
							</h3>
							<p>
								Research the keyword terms that work best for
								your business. Base this decision on volume and
								difficulty, alongside your offering.
							</p>
						</div>
						<div>
							<h3 className="font-bold text-xl mb-2 flex gap-2 items-center">
								<MdOutlineSpeed className="text-orange-400 text-3xl" />
								Page Performance
							</h3>
							<p>
								Making your website perform is vital in terms of
								search visibility. Improving code, image
								compression, server setup is one of the most
								important aspects of SEO.
							</p>
						</div>
						<div>
							<h3 className="font-bold text-xl mb-2 flex gap-2 items-center">
								<MdOutlineDataArray className="text-orange-400 text-3xl" />
								Meta Data
							</h3>
							<p>
								Inserting relevant Meta Data including Titles,
								Descriptions, and Keywords based around keyword
								research is one of the first things you should
								do in terms of SEO.
							</p>
						</div>

						<div>
							<h3 className="font-bold text-xl mb-2 flex gap-2 items-center">
								<MdOutlineLibraryBooks className="text-orange-400 text-3xl" />
								Blogging
							</h3>
							<p>
								We create relevant blog posts on topic and on
								trend, that provide useful information to the
								user. This helps improve fresh content for when
								your site gets reviewed. And targets a range of
								keywords that you may not target as high
								priority.
							</p>
						</div>
						<div>
							<h3 className="font-bold text-xl mb-2 flex gap-2 items-center">
								<MdOutlineLeaderboard className="text-orange-400 text-3xl" />
								Thought Leadership
							</h3>
							<p>
								Being recognised as a thought leader in your
								industry whose expertise is respected. Thought
								leaders are commonly asked to share their
								insight with a relevant audience, which in turn
								gains links to your website and respect amongst
								visitors - increasing brand recognition and
								respect.
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
				<div className="grid grid-cols-1 md:grid-cols-2 max-w-7xl px-4 md:px-8 w-full">
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
								href="/web-development"
								className="text-4xl tracking-tight group-hover:pl-4 group-hover:text-orange-400 transition-all ease-in-out duration-300">
								Web Development
							</Link>
						</div>
						<div className="border-b w-full py-6 group cursor-pointer">
							<Link
								href="/ecom"
								className="text-4xl tracking-tight group-hover:pl-4 group-hover:text-orange-400 transition-all ease-in-out duration-300">
								eCommerce
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
