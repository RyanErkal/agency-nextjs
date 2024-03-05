import React from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
/* import ExperienceCard from "@/components/ExperienceCard"; */
import FAQ from "./components/FAQ";
import ph1 from "@/public/ph1.png";
import { MdOutlineDesignServices } from "react-icons/md";
import { MdOutlineShoppingCart } from "react-icons/md";
import { MdOutlineAccessibility } from "react-icons/md";
import { MdOutlinePhonelink } from "react-icons/md";
import { MdOutlineListAlt } from "react-icons/md";
import { MdOutlineAutoGraph } from "react-icons/md";

export default function WebDesign() {
	return (
		<>
			<Header />
			<section
				id="web-design"
				className="max-w-7xl flex flex-col items-center justify-center mx-auto text-black px-8 py-24">
				<h2 className="w-full text-left text-5xl font-bold mb-12">
					Web Design
				</h2>
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-24">
					<h3 className="w-full text-left text-2xl font-bold">
						A Web Design Studio in Manchester who offers honest
						advice, industry experience and a great portfolio of
						work.
					</h3>
					<div>
						<p className="mb-12">
							UI/UX, Wireframes, Research and Development - we
							understand all areas of Web Design. We can take a
							start-up business with nothing to a fully
							functioning brand online and offline. We can revamp
							an existing website, or take a successful brand to
							the next level. Our talented and creative web design
							team will work alongside you in collaboration to
							create a site that reflects your brand, talks to
							your audience with meaning and personality, and has
							great functionality across latest devices.
						</p>
						<Link
							href="/new-project"
							className="btn btn-block lg:w-fit xl:px-6 bg-white border-2 border-gray-900 hover:bg-orange-400 hover:border-orange-400 hover:text-white hover:drop-shadow-lg transition-all ease-in-out duration-300 rounded-sm">
							Start a Project
						</Link>
					</div>
				</div>
			</section>
			<section className="w-full flex flex-col items-center justify-center mx-auto bg-black text-white px-8 py-24">
				<div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-24 relative">
					<div className="row-start-2 lg:row-start-1 transform -translate-y-[150px] lg:transform-none">
						<h2 className="w-full text-left text-2xl font-bold mb-12">
							Are you a startup brand, well established company,
							in the UK or worldwide? It doesn't matter. We work
							with a range of clients.
						</h2>
						<p className="mb-12">
							We know it's hard for brands to setup an online
							experience, and budgets can be tight. We like to
							help new brands grow and work in a long term
							relationship.
							<br />
							And we also have the experience of designing,
							building, testing and launching websites for large
							global organisations. We can be an extension of your
							in-house marketing team or take advantage of our
							expert team to be your complete digital arm.
						</p>
						<Link
							href="/contact"
							className="btn btn-block lg:w-fit xl:px-6 bg-white border-2 border-white hover:bg-orange-400 hover:border-orange-400 text-black hover:text-white transition-all ease-in-out duration-300 rounded-sm">
							Book a Call
						</Link>
					</div>
					<Image
						src={ph1}
						alt="Service Image"
						width={900}
						height={900}
						className="object-cover transform -translate-y-[150px] h-[700px]"
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
								viewBox="-4 0 23 23"
								id="meteor-icon-kit__solid-figma"
								fill="none"
								xmlns="http://www.w3.org/2000/svg">
								<path
									d="M7 0H3.5C1.567 0 0 1.567 0 3.5C0 5.433 1.567 7 3.5 7H7V0z"
									fill="currentColor"
								/>
								<path
									d="M8 0H11.5C13.433 0 15 1.567 15 3.5C15 5.433 13.433 7 11.5 7H8V0z"
									fill="currentColor"
								/>
								<path
									d="M7 8H3.5C1.567 8 0 9.567 0 11.5C0 13.433 1.567 15 3.5 15H7V8z"
									fill="currentColor"
								/>
								<path
									d="M7 16H3.5C1.567 16 0 17.567 0 19.5C0 21.433 1.567 23 3.5 23C5.433 23 7 21.433 7 19.5V16z"
									fill="currentColor"
								/>
								<path
									d="M11.5 15C13.433 15 15 13.433 15 11.5C15 9.567 13.433 8 11.5 8C9.567 8 8 9.567 8 11.5C8 13.433 9.567 15 11.5 15z"
									fill="currentColor"
								/>
							</svg>
						</h3>
						<h3 className="text-xl font-bold">
							<svg
								fill="currentColor"
								version="1.1"
								width="80"
								height="80"
								viewBox="0 0 512 512"
								enable-background="new 0 0 512 512">
								<g id="2069a460dcf28295e231f3111e037552">
									<path
										display="inline"
										d="M426.333,0.5H85.667C38.825,0.5,0.5,38.825,0.5,85.667v340.667c0,46.842,38.325,85.167,85.167,85.167
		h340.667c46.842,0,85.167-38.325,85.167-85.167V85.667C511.5,38.825,473.175,0.5,426.333,0.5z M245.329,260.524
		c-17.736,17.736-45.611,26.065-77.103,26.065c-8.326,0-15.927-0.365-21.72-1.451v91.945h-44.159V136.363
		c15.927-2.895,38.009-5.069,68.05-5.069c32.582,0,56.473,6.878,72.039,19.911c14.48,11.947,23.89,31.131,23.89,53.936
		C266.325,228.309,259.086,247.492,245.329,260.524z M337.981,380.706c-21.358,0-40.542-5.069-53.574-12.31l8.687-32.216
		c10.135,6.154,29.322,12.671,45.249,12.671c19.545,0,28.236-7.964,28.236-19.549c0-11.943-7.239-18.099-28.96-25.7
		c-34.391-11.947-48.866-30.769-48.505-51.403c0-31.131,25.7-55.383,66.604-55.383c19.549,0,36.562,5.069,46.695,10.496
		l-8.687,31.493c-7.602-4.342-21.721-10.135-37.285-10.135c-15.928,0-24.615,7.602-24.615,18.46c0,11.224,8.326,16.655,30.77,24.618
		c31.854,11.582,46.696,27.871,47.058,53.937C409.653,357.539,384.678,380.706,337.981,380.706z M221.8,206.95
		c0,28.598-20.273,44.887-53.574,44.887c-9.049,0-16.289-0.362-21.72-1.809v-82.534c4.708-1.085,13.395-2.171,25.704-2.171
		C202.979,165.323,221.8,179.803,221.8,206.95z"></path>
								</g>
							</svg>
						</h3>
						<h3 className="text-xl font-bold">
							<svg
								fill="currentColor"
								width="80"
								height="80"
								viewBox="0 0 32 32"
								xmlns="http://www.w3.org/2000/svg">
								<path d="M0 16v16h32v-32h-32zM25.786 14.724c0.813 0.203 1.432 0.568 2.005 1.156 0.292 0.312 0.729 0.885 0.766 1.026 0.010 0.042-1.38 0.974-2.224 1.495-0.031 0.021-0.156-0.109-0.292-0.313-0.411-0.599-0.844-0.859-1.505-0.906-0.969-0.063-1.594 0.443-1.589 1.292-0.005 0.208 0.042 0.417 0.135 0.599 0.214 0.443 0.615 0.708 1.854 1.245 2.292 0.984 3.271 1.635 3.88 2.557 0.682 1.031 0.833 2.677 0.375 3.906-0.51 1.328-1.771 2.234-3.542 2.531-0.547 0.099-1.849 0.083-2.438-0.026-1.286-0.229-2.505-0.865-3.255-1.698-0.297-0.323-0.87-1.172-0.833-1.229 0.016-0.021 0.146-0.104 0.292-0.188s0.682-0.396 1.188-0.688l0.922-0.536 0.193 0.286c0.271 0.411 0.859 0.974 1.214 1.161 1.021 0.542 2.422 0.464 3.115-0.156 0.281-0.234 0.438-0.594 0.417-0.958 0-0.37-0.047-0.536-0.24-0.813-0.25-0.354-0.755-0.656-2.198-1.281-1.651-0.714-2.365-1.151-3.010-1.854-0.406-0.464-0.708-1.010-0.88-1.599-0.12-0.453-0.151-1.589-0.057-2.042 0.339-1.599 1.547-2.708 3.281-3.036 0.563-0.109 1.875-0.068 2.427 0.068zM18.276 16.063l0.010 1.307h-4.167v11.839h-2.948v-11.839h-4.161v-1.281c0-0.714 0.016-1.307 0.036-1.323 0.016-0.021 2.547-0.031 5.62-0.026l5.594 0.016z" />
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
						<h3 className="text-xl font-bold">
							<svg
								width="80"
								height="80"
								viewBox="0 0 32 32"
								xmlns="http://www.w3.org/2000/svg">
								<title>file_type_tailwind</title>
								<path
									d="M9,13.7q1.4-5.6,7-5.6c5.6,0,6.3,4.2,9.1,4.9q2.8.7,4.9-2.1-1.4,5.6-7,5.6c-5.6,0-6.3-4.2-9.1-4.9Q11.1,10.9,9,13.7ZM2,22.1q1.4-5.6,7-5.6c5.6,0,6.3,4.2,9.1,4.9q2.8.7,4.9-2.1-1.4,5.6-7,5.6c-5.6,0-6.3-4.2-9.1-4.9Q4.1,19.3,2,22.1Z"
									fill="currentColor"
								/>
							</svg>
						</h3>
					</div>
				</div>
			</section>
			<section className="w-full flex flex-col items-center justify-center mx-auto bg-white text-black px-8 py-24">
				<div className="w-full max-w-7xl">
					<h2 className="w-full text-center text-3xl font-bold mb-12">
						We approach project with a clear vision.
					</h2>
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24">
						<Image
							src={ph1}
							alt="Service Image"
							width={600}
							height={600}
							className="object-cover w-full"
						/>
						<div className="mb-6 lg:mb-0 flex flex-col justify-center">
							<h3 className="w-full text-left text-xl font-bold mb-6">
								We like to remove the 'waffle' and design
								beautiful, easy to use websites that are
								functional.
							</h3>
							<p>
								We don't just build pretty websites. Here at
								MadeByShape we understand all aspects of a
								successful site from design through web
								development and testing, to SEO and Hosting. We
								tailor our service to the client and the project
								requirement.
							</p>
						</div>
						<Image
							src={ph1}
							alt="Service Image"
							width={600}
							height={600}
							className="object-cover w-full lg:col-start-2"
						/>
						<div className="lg:col-start-1 lg:row-start-2 lg:mb-0 flex flex-col justify-center">
							<h3 className="w-full text-left text-xl font-bold mb-6">
								We handle every project in-house, we don't
								outsource.
							</h3>
							<p>
								We're a strong team of 16, we know how much work
								we can take on - and we let clients know if
								there will be a delay. Every project we take on
								is produced in-house, no outsourcing involved.
								If we feel we're not the right fit for your
								project, we will do use our digital industry
								experience to recommend a suitable agency for
								you.
							</p>
						</div>
					</div>
				</div>
			</section>
			<section className="w-full flex flex-col items-center justify-center mx-auto bg-white text-black px-8 py-24">
				<div className="w-full max-w-7xl">
					<h2 className="max-w-3xl mx-auto text-center text-3xl font-bold mb-16">
						A team of web design experts that can help you design
						and build a website you're proud of
					</h2>
					<div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-24">
						<div>
							<h3 className="font-bold text-xl mb-2 flex gap-2 items-center">
								<MdOutlineDesignServices className="text-orange-400 text-3xl" />
								Web Design
							</h3>
							<p>
								Bespoke web design perfect for your brand and
								target audience.
							</p>
						</div>
						<div>
							<h3 className="font-bold text-xl mb-2 flex gap-2 items-center">
								<MdOutlineShoppingCart className="text-orange-400 text-3xl" />
								eCommerce
							</h3>
							<p>
								Sell products online 24/7 through a
								well-designed, easy to use eCommerce website.
							</p>
						</div>
						<div>
							<h3 className="font-bold text-xl mb-2 flex gap-2 items-center">
								<MdOutlineAccessibility className="text-orange-400 text-3xl" />
								UX Design
							</h3>
							<p>
								Provide meaningful and relevant experiences to
								users through user experience (UX) design.
							</p>
						</div>
						<div>
							<h3 className="font-bold text-xl mb-2 flex gap-2 items-center">
								<MdOutlinePhonelink className="text-orange-400 text-3xl" />
								Responsive Design
							</h3>
							<p>
								Designed for all the latest devices including
								iPhone and iPad.
							</p>
						</div>
						<div>
							<h3 className="font-bold text-xl mb-2 flex gap-2 items-center">
								<MdOutlineListAlt className="text-orange-400 text-3xl" />
								Wireframes
							</h3>
							<p>
								A visualization tool for presenting proposed
								structure, functions, and content of a website.
							</p>
						</div>
						<div>
							<h3 className="font-bold text-xl mb-2 flex gap-2 items-center">
								<MdOutlineAutoGraph className="text-orange-400 text-3xl" />
								Strategy
							</h3>
							<p>
								Not only looking at the now, but also to the
								future to see potential growth.
							</p>
						</div>
					</div>
				</div>
			</section>
			{/* <section className="w-full flex flex-col items-center justify-center mx-auto bg-white text-black px-24 lg:px-8 py-12">
				<div className="w-full max-w-7xl">
					<h2 className="mx-auto text-center text-3xl font-bold mb-12">
						Web design projects we've worked on
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
			<section className="w-full flex flex-col items-center justify-center mx-auto bg-white text-black px-8 py-12">
				<div className="w-full max-w-7xl">
					<h2 className="mx-auto text-center text-3xl font-bold mb-12">
						More Services
					</h2>
					<div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
						<Link
							href="/web-dev"
							className="flex flex-col items-start gap-8 w-full group">
							<div className="w-full h-auto overflow-hidden">
								<Image
									src={ph1}
									alt="Service Image"
									width={600}
									height={600}
									className="w-full group-hover:scale-105 transition-all ease-in-out duration-300"
								/>
							</div>
							<h1 className="text-xl font-bold text-left">
								Web Development
							</h1>
						</Link>
						<Link
							href="/ecom"
							className="flex flex-col items-start gap-8 w-full group">
							<div className="w-full h-auto overflow-hidden">
								<Image
									src={ph1}
									alt="Service Image"
									width={600}
									height={600}
									className="w-full group-hover:scale-105 transition-all ease-in-out duration-300"
								/>
							</div>
							<h1 className="text-xl font-bold text-left">
								eCommerce
							</h1>
						</Link>
						<Link
							href="/seo"
							className="flex flex-col items-start gap-8 w-full group">
							<div className="w-full h-auto overflow-hidden">
								<Image
									src={ph1}
									alt="Service Image"
									width={600}
									height={600}
									className="w-full group-hover:scale-105 transition-all ease-in-out duration-300"
								/>
							</div>
							<h1 className="text-xl font-bold text-left">SEO</h1>
						</Link>
					</div>
				</div>
			</section>
			<FAQ />
			<Contact />
			<Footer />
		</>
	);
}
