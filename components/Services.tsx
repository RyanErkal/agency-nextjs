"use client";

import Image from "next/image";
import Link from "next/link";
import ph1 from "@/public/ph1.png";
import ph2 from "@/public/ph2.png";
import ph3 from "@/public/ph3.png";
import ph4 from "@/public/ph4.png";

export default function Services() {
	return (
		<>
			<section
				id="services"
				className="max-w-7xl flex flex-col items-center justify-center mx-auto text-black px-8 py-24">
				<h2 className="w-full text-left text-5xl font-bold tracking-tight mb-8">
					Our Services
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-7xl w-full">
					<Link
						href="/web-design"
						className="flex flex-col items-start gap-8 w-full group">
						<div className="w-full h-auto overflow-hidden rounded-xl">
							<Image
								src={ph1}
								alt="Service Image"
								width={600}
								height={600}
								className="w-full group-hover:scale-105 transition-all ease-in-out duration-300"
							/>
						</div>
						<h1 className="text-xl font-bold text-left">
							Web Design
						</h1>
					</Link>
					<Link
						href="/web-dev"
						className="flex flex-col items-start gap-8 w-full group">
						<div className="w-full h-auto overflow-hidden rounded-xl">
							<Image
								src={ph2}
								alt="Service Image"
								width={600}
								height={600}
								className="w-full group-hover:scale-105 transition-all ease-in-out duration-300"
							/>
						</div>
						<h1 className="text-xl font-bold w-fit text-left">
							Web Development
						</h1>
					</Link>
					<Link
						href="/seo"
						className="flex flex-col items-start gap-8 w-full group">
						<div className="w-full h-auto overflow-hidden rounded-xl">
							<Image
								src={ph3}
								alt="Service Image"
								width={600}
								height={600}
								className="w-full group-hover:scale-105 transition-all ease-in-out duration-300"
							/>
						</div>
						<h1 className="text-xl font-bold text-left">SEO</h1>
					</Link>
					<Link
						href="/ecom"
						className="flex flex-col items-start gap-8 w-full group">
						<div className="w-full h-auto overflow-hidden rounded-xl">
							<Image
								src={ph4}
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
				</div>
				<div className="flex items-center justify-center w-full z-10">
					<Link href="/services">
						<button className="btn btn-wide px-6 mt-16 bg-white border-2 border-gray-900 hover:bg-orange-400 hover:border-orange-400 hover:text-white hover:drop-shadow-lg transition-all ease-in-out duration-300 rounded-full">
							All Services
						</button>
					</Link>
				</div>
			</section>
		</>
	);
}
