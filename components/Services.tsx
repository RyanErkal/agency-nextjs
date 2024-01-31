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
				className="flex flex-col items-center justify-center px-8 py-32 xl:px-32 overflow-hidden bg-white">
				<h1 className="playfair text-4xl font-bold mb-6 z-10">
					Our Services
				</h1>
				<div className="flex flex-col items-center max-w-7xl">
					<Link href="/web-design" className=" grid grid-cols-2">
						<Parallax
							speed={10}
							className="w-full h-auto overflow-hidden">
							<Image
								src={web2}
								alt="Service Image"
								width={600}
								height={600}
								className="object-fill cursor-pointer"
							/>
						</Parallax>
						<Parallax className="w-full flex flex-col items-start justify-center ml-6">
							<h1 className="text-2xl font-bold w-full text-left mb-2">
								Web Design
							</h1>
							<p className=" text-black/75">
								A website is a brands most important marketing
								tool. It is the first thing people see when they
								search for your business. It is the first
								impression you make on your customers.
							</p>
						</Parallax>
					</Link>
					<Link href="/web-dev" className=" grid grid-cols-2">
						<Parallax className="w-full flex flex-col items-start justify-center mr-6">
							<h1 className="text-2xl font-bold w-full text-left mb-2">
								Web Development
							</h1>
							<p className=" text-black/75">
								A website is a brands most important marketing
								tool. It is the first thing people see when they
								search for your business. It is the first
								impression you make on your customers.
							</p>
						</Parallax>
						<Parallax
							speed={10}
							className="w-full h-auto overflow-hidden">
							<Image
								src={web3}
								alt="Service Image"
								width={600}
								height={600}
								className="object-fill cursor-pointer"
							/>
						</Parallax>
					</Link>
					<Link href="/seo" className=" grid grid-cols-2">
						<Parallax
							speed={10}
							className="w-full h-auto overflow-hidden">
							<Image
								src={web4}
								alt="Service Image"
								width={600}
								height={600}
								className="object-fill cursor-pointer"
							/>
						</Parallax>
						<Parallax className="w-full flex flex-col items-start justify-center ml-6">
							<h1 className="text-2xl font-bold w-full text-left mb-2">
								SEO
							</h1>
							<p className=" text-black/75">
								A website is a brands most important marketing
								tool. It is the first thing people see when they
								search for your business. It is the first
								impression you make on your customers.
							</p>
						</Parallax>
					</Link>
					<Link href="/ecom" className=" grid grid-cols-2">
						<Parallax className="w-full flex flex-col items-start justify-center mr-6">
							<h1 className="text-2xl font-bold w-full text-left mb-2">
								eCommerce
							</h1>
							<p className=" text-black/75">
								A website is a brands most important marketing
								tool. It is the first thing people see when they
								search for your business. It is the first
								impression you make on your customers.
							</p>
						</Parallax>
						<Parallax
							speed={10}
							className="w-full h-auto overflow-hidden">
							<Image
								src={web5}
								alt="Service Image"
								width={600}
								height={600}
								className="object-fill cursor-pointer"
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
