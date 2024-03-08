"use client";

import Link from "next/link";
import { useState } from "react";

export default function WebDesign() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		company: "",
		summary: "",
		challenge: ""
	});

	function handleInput(e: any) {
		setFormData({
			...formData,
			[e.target.name]: e.target.value
		});
	}

	return (
		<>
			<div
				id="contact"
				className="flex flex-col items-center justify-center bg-white text-black px-8 py-16">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-7xl">
					<div className="flex flex-col items-left justify-start w-full">
						<h2 className="text-4xl lg:text-6xl font-bold mb-6">
							Get in touch
						</h2>
						<p className="text-black/75 pr-10 leading-relaxed">
							For general enquiries, please fill out the form to
							get in touch. Alternatively, if you know your
							project details - head over to our{" "}
							<span>
								<Link
									href="/new-project"
									className="cursor-pointer text-orange-400 underline">
									project planner{" "}
								</Link>
							</span>
							for a more refined step-by-step process.
						</p>
					</div>
					<div className="flex flex-col items-left justify-start w-full">
						<form>
							<input
								onChange={handleInput}
								value={formData.name}
								placeholder="Name"
								type="text"
								name="name"
								id="name"
								className="bg-white text-black text-opacity-75 focus:ring-transparent focus:outline-none focus:border-orange-400 border-b-2 border-gray-100 text-lg py-2 transition-all ease-in-out duration-300 w-full mb-4"
							/>
							<input
								onChange={handleInput}
								value={formData.email}
								placeholder="Email"
								type="email"
								name="email"
								id="email"
								className="bg-white text-black text-opacity-75 focus:ring-transparent focus:outline-none focus:border-orange-400 border-b-2 border-gray-100 text-lg py-4 transition-all ease-in-out duration-300 w-full mb-4"
							/>
							<input
								onChange={handleInput}
								value={formData.company}
								placeholder="Company Name"
								type="text"
								name="company"
								id="company"
								className="bg-white text-black text-opacity-75 focus:ring-transparent focus:outline-none focus:border-orange-400 border-b-2 border-gray-100 text-lg py-4 transition-all ease-in-out duration-300 w-full mb-4"
							/>
							<textarea
								onChange={handleInput}
								value={formData.summary}
								placeholder="Tell us about our project"
								name="summary"
								id="summary"
								className="bg-white text-black text-opacity-75 focus:ring-transparent focus:outline-none focus:border-orange-400 border-b-2 border-gray-100 text-lg py-4 transition-all ease-in-out duration-300 w-full mb-4"
							/>
							<textarea
								onChange={handleInput}
								value={formData.challenge}
								placeholder="Tell us about our project"
								name="challenge"
								id="challenge"
								className="bg-white text-black text-opacity-75 focus:ring-transparent focus:outline-none focus:border-orange-400 border-b-2 border-gray-100 text-lg py-4 transition-all ease-in-out duration-300 w-full mb-8"
							/>
							<p className="text-black/75 mb-8">
								By submitting this form, you agree to our{" "}
								<span>
									<Link
										href="/privacy-policy"
										className="cursor-pointer text-orange-400 underline">
										privacy policy
									</Link>
								</span>
								.
							</p>
							<button className="btn btn-block lg:btn-wide bg-white border-2 border-gray-900 hover:bg-orange-400 hover:border-orange-400 hover:text-white hover:drop-shadow-lg transition-all ease-in-out duration-300 rounded-full">
								Submit
							</button>
						</form>
					</div>
				</div>
			</div>
		</>
	);
}
