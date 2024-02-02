"use client";

import Image from "next/image";
import Link from "next/link";
import { Parallax } from "react-scroll-parallax";
import web5 from "@/public/web5.webp";
import web2 from "@/public/web2.webp";
import web3 from "@/public/web3.webp";
import web4 from "@/public/web4.webp";

export default function Services() {
	return (
		<>
			<div
				id="services"
				className="flex flex-col items-center justify-center px-8 py-32 xl:px-32 overflow-hidden">
				<h1 className="playfair text-4xl font-bold z-10">
					Our Services
				</h1>
				<div className="flex flex-col items-center max-w-screen max-w-7xl mb-16 overflow-hidden">
					<Link
						href="/web-design"
						className=" grid grid-cols-1 xl:grid-cols-2">
						<Parallax
							speed={5}
							className="w-full h-auto overflow-hidden">
							<Image
								src={web2}
								alt="Service Image"
								width={600}
								height={600}
								className="object-fill cursor-pointer z-0"
							/>
						</Parallax>
						<div className="w-full flex flex-col items-start justify-center xl:mr-6 z-30">
							<h1 className="text-2xl font-bold w-full text-left mb-2">
								Web Design
							</h1>
							<p className="text-sm xl:text-lg text-black/75">
								A website is a brands most important marketing
								tool. It is the first thing people see when they
								search for your business. It is the first
								impression you make on your customers.
							</p>
						</div>
					</Link>
					<Link
						href="/web-dev"
						className=" grid grid-cols-1 xl:grid-cols-2">
						<div className="w-full flex flex-col items-start justify-center xl:mr-6 z-30 order-2 xl:order-1">
							<h1 className="text-2xl font-bold w-full text-left mb-2">
								Web Development
							</h1>
							<p className="text-sm xl:text-lg text-black/75">
								A website is a brands most important marketing
								tool. It is the first thing people see when they
								search for your business. It is the first
								impression you make on your customers.
							</p>
						</div>
						<Parallax
							speed={5}
							className="w-full h-auto overflow-hidden order-1 xl:order-2">
							<Image
								src={web3}
								alt="Service Image"
								width={600}
								height={600}
								className="object-fill cursor-pointer z-0"
							/>
						</Parallax>
					</Link>
					<Link
						href="/seo"
						className=" grid grid-cols-1 xl:grid-cols-2">
						<Parallax
							speed={5}
							className="w-full h-auto overflow-hidden">
							<Image
								src={web4}
								alt="Service Image"
								width={600}
								height={600}
								className="object-fill cursor-pointer z-0"
							/>
						</Parallax>
						<div className="w-full flex flex-col items-start justify-center xl:ml-6 z-30">
							<h1 className="text-2xl font-bold w-full text-left mb-2">
								SEO
							</h1>
							<p className="text-sm xl:text-lg text-black/75">
								A website is a brands most important marketing
								tool. It is the first thing people see when they
								search for your business. It is the first
								impression you make on your customers.
							</p>
						</div>
					</Link>
					<Link
						href="/ecom"
						className=" grid grid-cols-1 xl:grid-cols-2">
						<div className="w-full flex flex-col items-start justify-center xl:mr-6 z-30 order-2 xl:order-1">
							<h1 className="text-2xl font-bold w-full text-left mb-2">
								eCommerce
							</h1>
							<p className="text-sm xl:text-lg text-black/75">
								A website is a brands most important marketing
								tool. It is the first thing people see when they
								search for your business. It is the first
								impression you make on your customers.
							</p>
						</div>
						<Parallax
							speed={5}
							className="w-full h-auto overflow-hidden z-10 order-1 xl:order-2">
							<Image
								src={web5}
								alt="Service Image"
								width={600}
								height={600}
								className="object-fill cursor-pointer z-10"
							/>
						</Parallax>
					</Link>
				</div>
				<div className="flex items-center justify-center w-full z-10">
					<Link href="/services">
						<button className="btn btn-wide px-6 bg-white border-2 border-gray-900 hover:bg-orange-400 hover:border-orange-400 hover:text-white hover:drop-shadow-lg transition-all ease-in-out duration-300 rounded-sm">
							All Services
						</button>
					</Link>
				</div>
			</div>
		</>
	);
}
