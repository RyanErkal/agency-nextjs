"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import { useState } from "react";
import Step1 from "./_assets/components/Step1";
import Step2 from "./_assets/components/Step2";
import Step3 from "./_assets/components/Step3";
import Step4 from "./_assets/components/Step4";
import Submitted from "./_assets/components/Submitted";

export default function WebDesign() {
	const [page, setPage] = useState(1);
	const [errorMessage, setErrorMessage] = useState("");
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		company: "",
		startDate: "",
		endDate: "",
		services: {
			webDesign: false,
			webDev: false,
			seo: false,
			eCommerce: false,
			all: false
		},
		budget: 1000,
		summary: "",
		media: null
	});

	function handleInput(e: any) {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	}

	function checkInput() {
		if (page === 1) {
			if (formData.name === "") {
				setErrorMessage("Please enter your name");
			} else if (formData.email === "") {
				setErrorMessage("Please enter your email");
			} else if (formData.company === "") {
				setErrorMessage("Please enter your company name");
			} else {
				setErrorMessage("");
				nextPage();
			}
		} else if (page === 2) {
			if (formData.startDate === "") {
				setErrorMessage("Please enter your start date");
			} else if (formData.endDate === "") {
				setErrorMessage("Please enter your end date");
			} else {
				setErrorMessage("");
				nextPage();
			}
		} else if (page === 3) {
			if (formData.summary === "") {
				setErrorMessage("Please enter a summary");
			} else {
				setErrorMessage("");
				nextPage();
			}
		} else {
			console.log("submitted");
			nextPage();
		}
	}

	function nextPage() {
		setPage(page + 1);
	}

	return (
		<>
			<Header />
			<section className="relative overflow-hidden bg-white text-black px-8 py-16 xl:px-32 flex flex-col items-center">
				<div className="max-w-7xl w-full flex flex-col xl:flex-row items-start justify-between ">
					<div className="w-full hidden xl:flex">
						<Image
							src="https://d6f6d0kpz0gyr.cloudfront.net/uploads/transforms/07188dc2fd9e350907e80925ab0cd493/184554/madebyshape-web-design-enquiry_2020-10-05-092502_6c0c164bd2b597ee32b68b8b5755bd2e.webp"
							alt="Service Image"
							width={600}
							height={600}
							className="object-fill"
						/>
					</div>
					<div className="w-full flex flex-col xl:ml-6">
						{page === 1 ? (
							<Step1
								formData={formData}
								handleInput={handleInput}
							/>
						) : page === 2 ? (
							<Step2
								formData={formData}
								handleInput={handleInput}
							/>
						) : page === 3 ? (
							<Step3
								formData={formData}
								handleInput={handleInput}
							/>
						) : page === 4 ? (
							<Step4
								formData={formData}
								handleInput={handleInput}
							/>
						) : (
							<Submitted formData={formData} />
						)}

						{page !== 5 && (
							<button
								onClick={checkInput}
								className="btn btn-wide bg-white border-2 border-gray-900 hover:bg-orange-400 hover:border-orange-400 hover:text-white hover:drop-shadow-lg transition-all ease-in-out duration-300 rounded-sm">
								{page !== 4 ? "Next" : "Submit"}
							</button>
						)}
						{errorMessage !== "" && (
							<div
								role="alert"
								className="alert alert-error z-10 w-fit rounded-sm mt-6">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="stroke-current shrink-0 h-6 w-6"
									fill="none"
									viewBox="0 0 24 24">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
									/>
								</svg>
								<span>{errorMessage}</span>
							</div>
						)}
					</div>
				</div>
			</section>
			<div className=" w-full bottom-0">
				<Footer />
			</div>
		</>
	);
}
