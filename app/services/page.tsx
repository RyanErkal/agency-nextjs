"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTA2 from "@/components/CTA2";
import Mailing from "@/components/Mailing";
import Image from "next/image";
import Link from "next/link";

export default function Services() {
	return (
		<>
			<Header />
			<section
				id="services"
				className="flex flex-col items-center bg-white text-black">
				<div className="flex flex-col items-center justify-center px-8 py-32 xl:px-32 overflow-hidden bg-white">
					<h1 className="playfair text-4xl font-bold mb-12 text-left w-full">
						A web development agency with expertise
					</h1>
					<div className="grid grid-cols-2 xl:grid-cols-3 gap-20 max-w-7xl">
						<Link href="/web-design" className="group">
							<div className="w-auto h-auto overflow-hidden">
								<Image
									src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80"
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
								search for your business. It is the first
								impression you make on your customers.
							</p>
						</Link>
						<Link href="/web-dev" className="group">
							<div className="w-auto h-auto overflow-hidden">
								<Image
									src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80"
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
								A website is a brands most important marketing
								tool. It is the first thing people see when they
								search for your business. It is the first
								impression you make on your customers.
							</p>
						</Link>
						<Link href="/seo" className="group">
							<div className="w-auto h-auto overflow-hidden">
								<Image
									src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80"
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
								A website is a brands most important marketing
								tool. It is the first thing people see when they
								search for your business. It is the first
								impression you make on your customers.
							</p>
						</Link>
						<Link href="/ecom" className="group">
							<div className="w-auto h-auto overflow-hidden">
								<Image
									src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80"
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
								A website is a brands most important marketing
								tool. It is the first thing people see when they
								search for your business. It is the first
								impression you make on your customers.
							</p>
						</Link>
						<Link href="/shopify" className="group">
							<div className="w-auto h-auto overflow-hidden">
								<Image
									src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80"
									alt="Service Image"
									width={300}
									height={300}
									layout="responsive"
									className="group-hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer mb-6"
								/>
							</div>
							<h2 className="text-xl font-bold mt-2 link w-fit mb-2">
								Shopify Development
							</h2>
							<p className="text-black/75">
								A website is a brands most important marketing
								tool. It is the first thing people see when they
								search for your business. It is the first
								impression you make on your customers.
							</p>
						</Link>
						<Link href="/web-hosting" className="group">
							<div className="w-auto h-auto overflow-hidden">
								<Image
									src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80"
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
								A website is a brands most important marketing
								tool. It is the first thing people see when they
								search for your business. It is the first
								impression you make on your customers.
							</p>
						</Link>
						<Link href="/copy" className="group">
							<div className="w-auto h-auto overflow-hidden">
								<Image
									src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80"
									alt="Service Image"
									width={300}
									height={300}
									layout="responsive"
									className="group-hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer mb-6"
								/>
							</div>
							<h2 className="text-xl font-bold mt-2 link w-fit mb-2">
								Copywriting
							</h2>
							<p className="text-black/75">
								A website is a brands most important marketing
								tool. It is the first thing people see when they
								search for your business. It is the first
								impression you make on your customers.
							</p>
						</Link>
						<Link href="/cms" className="group">
							<div className="w-auto h-auto overflow-hidden">
								<Image
									src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80"
									alt="Service Image"
									width={300}
									height={300}
									layout="responsive"
									className="group-hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer mb-6"
								/>
							</div>
							<h2 className="text-xl font-bold mt-2 link w-fit mb-2">
								CMS
							</h2>
							<p className="text-black/75">
								A website is a brands most important marketing
								tool. It is the first thing people see when they
								search for your business. It is the first
								impression you make on your customers.
							</p>
						</Link>
						<Link href="/cybersecurity" className="group">
							<div className="w-auto h-auto overflow-hidden">
								<Image
									src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80"
									alt="Service Image"
									width={300}
									height={300}
									layout="responsive"
									className="group-hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer mb-6"
								/>
							</div>
							<h2 className="text-xl font-bold mt-2 link w-fit mb-2">
								CyberSecurity
							</h2>
							<p className="text-black/75">
								A website is a brands most important marketing
								tool. It is the first thing people see when they
								search for your business. It is the first
								impression you make on your customers.
							</p>
						</Link>
						<Link href="/ppc" className="group">
							<div className="w-auto h-auto overflow-hidden">
								<Image
									src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80"
									alt="Service Image"
									width={300}
									height={300}
									layout="responsive"
									className="group-hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer mb-6"
								/>
							</div>
							<h2 className="text-xl font-bold mt-2 link w-fit mb-2">
								PPC
							</h2>
							<p className="text-black/75">
								A website is a brands most important marketing
								tool. It is the first thing people see when they
								search for your business. It is the first
								impression you make on your customers.
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
