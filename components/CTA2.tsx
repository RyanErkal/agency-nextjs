"use client";

import Image from "next/image";
import Link from "next/link";
import stock2 from "@/public/stock2.webp";

export default function CTA2() {
	return (
		<section className="overflow-hidden bg-white text-black max-w-7xl px-8 py-8 mx-auto flex flex-col items-center">
			<div className=" w-full flex flex-col xl:flex-row items-center justify-between ">
				<div className="w-full">
					<Image
						src={stock2}
						alt="Service Image"
						width={600}
						height={600}
						className="object-fill mb-8 xl:mb-0 rounded-xl"
					/>
				</div>
				<div className="w-full flex flex-col xl:pl-6">
					<h1 className="text-5xl font-bold w-full text-left tracking-tight mb-6">
						Let&apos;s Build Something
					</h1>
					<p className="text-sm xl:text-lg mb-6">
						Whether you&apos;re looking to build a new website, or
						redesign an existing one, we can help you.
					</p>
					<div className="flex items-center gap-4">
						<Link
							href="/new-project"
							className="btn px-6 bg-white border-2 border-gray-900 hover:bg-orange-400 hover:border-orange-400 hover:text-white hover:drop-shadow-lg transition-all ease-in-out duration-300 rounded-full">
							Start a Project
						</Link>
						<Link href="/contact" className="link w-fit mx-6">
							Get in touch
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
}
