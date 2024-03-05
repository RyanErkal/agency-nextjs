"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTA2 from "@/components/CTA2";
import Mailing from "@/components/Mailing";
import Image from "next/image";
import Link from "next/link";
import ph1 from "@/public/ph1.png";
import ph2 from "@/public/ph2.png";
import ph3 from "@/public/ph3.png";
import ph4 from "@/public/ph4.png";

export default function Services() {
	return (
		<>
			<Header />
			<section
				id="services"
				className="flex flex-col items-center bg-white text-black">
				<div className="flex flex-col items-center justify-center px-8 py-32 xl:px-32 overflow-hidden bg-white">
					<h2 className="playfair text-4xl font-bold mb-12 text-left w-full">
						A web design agency with expertise
					</h2>
					<div className="grid grid-cols-1 xl:grid-cols-3 gap-20 max-w-7xl">
						<Link href="/web-design" className="group">
							<div className="w-auto h-auto overflow-hidden">
								<Image
									src={ph1}
									alt="Service Image"
									width={300}
									height={300}
									layout="responsive"
									className="group-hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer mb-6"
								/>
							</div>
							<h2 className="text-xl font-bold mt-2 link w-fit mb-2">
								Web Design
							</h2>
							<p className="text-black/75">
								A website is a brands most important marketing
								tool. It is the first thing people see when they
								search for your business.
							</p>
						</Link>
						<Link href="/ecom" className="group">
							<div className="w-auto h-auto overflow-hidden">
								<Image
									src={ph4}
									alt="Service Image"
									width={300}
									height={300}
									layout="responsive"
									className="group-hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer mb-6"
								/>
							</div>
							<h2 className="text-xl font-bold mt-2 link w-fit mb-2">
								eCommerce
							</h2>
							<p className="text-black/75">
								Sell products online with our eCommerce
								solutions using services like Stripe and
								Shopify.
							</p>
						</Link>
						<Link href="/seo" className="group">
							<div className="w-auto h-auto overflow-hidden">
								<Image
									src={ph3}
									alt="Service Image"
									width={300}
									height={300}
									layout="responsive"
									className="group-hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer mb-6"
								/>
							</div>
							<h2 className="text-xl font-bold mt-2 link w-fit mb-2">
								SEO
							</h2>
							<p className="text-black/75">
								Get your business seen online with expert Search
								Engine Optimization.
							</p>
						</Link>
						<Link href="/web-dev" className="group">
							<div className="w-auto h-auto overflow-hidden">
								<Image
									src={ph2}
									alt="Service Image"
									width={300}
									height={300}
									layout="responsive"
									className="group-hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer mb-6"
								/>
							</div>
							<h2 className="text-xl font-bold mt-2 link w-fit mb-2">
								Web Development
							</h2>
							<p className="text-black/75">
								Custom web development services for businesses
								of all sizes.
							</p>
						</Link>
						<Link href="/shopify" className="group">
							<div className="w-auto h-auto overflow-hidden">
								<Image
									src={ph1}
									alt="Service Image"
									width={300}
									height={300}
									layout="responsive"
									className="group-hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer mb-6"
								/>
							</div>
							<h2 className="text-xl font-bold mt-2 link w-fit mb-2">
								Shopify
							</h2>
							<p className="text-black/75">
								Launch your online store with Shopify. We offer
								a range of services to help you get started.
							</p>
						</Link>
						<Link href="/web-hosting" className="group">
							<div className="w-auto h-auto overflow-hidden">
								<Image
									src={ph2}
									alt="Service Image"
									width={300}
									height={300}
									layout="responsive"
									className="group-hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer mb-6"
								/>
							</div>
							<h2 className="text-xl font-bold mt-2 link w-fit mb-2">
								Web Hosting
							</h2>
							<p className="text-black/75">
								Web hosting services for businesses of all
								sizes.
							</p>
						</Link>
						<Link href="/copy" className="group">
							<div className="w-auto h-auto overflow-hidden">
								<Image
									src={ph3}
									alt="Service Image"
									width={300}
									height={300}
									layout="responsive"
									className="group-hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer mb-6"
								/>
							</div>
							<h2 className="text-xl font-bold mt-2 link w-fit mb-2">
								Content Writing
							</h2>
							<p className="text-black/75">
								Stand out from the competition and build your
								authority with high-quality content.
							</p>
						</Link>
					</div>
				</div>
			</section>
			<CTA2 />
			<Mailing />
			<Footer />
		</>
	);
}
