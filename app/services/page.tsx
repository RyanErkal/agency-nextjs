import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTA2 from "@/components/CTA2";
import Link from "next/link";
import stock1 from "@/public/stock1.webp";
import stock2 from "@/public/stock2.webp";
import stock3 from "@/public/stock3.webp";
import stock4 from "@/public/stock4.webp";
import stock5 from "@/public/stock5.webp";
import { getSEOTags } from "@/libs/seo";
import Image from "next/image";

export const metadata = getSEOTags({
	title: "ReDesign | Services",
	canonicalUrlRelative: "/services"
});

const ServicesList = [
	{
		title: "Web Design",
		description:
			"A website is a brands most important marketing tool. It is the first thing people see when they search for your business.",
		image: stock1,
		link: "/web-design"
	},
	{
		title: "eCommerce",
		description:
			"An online store is a great way to sell your products and services. We can help you create a beautiful and functional store.",
		image: stock2,
		link: "/ecom"
	},
	{
		title: "SEO",
		description:
			"Search Engine Optimization is the process of improving your website to increase its visibility for relevant searches.",
		image: stock3,
		link: "/seo"
	},
	{
		title: "Web Development",
		description:
			"Custom web development services for businesses of all sizes.",
		image: stock4,
		link: "/web-dev"
	},
	{
		title: "Shopify",
		description:
			"Launch your online store with Shopify. We offer a range of services to help you get started.",
		image: stock5,
		link: "/shopify"
	},
	{
		title: "Web Hosting",
		description:
			"Reliable web hosting is essential for your website. We offer a range of hosting services to suit your needs.",
		image: stock1,
		link: "/web-hosting"
	},
	{
		title: "Content Writing",
		description:
			"Stand out from the competition and build your authority with high-quality content.",
		image: stock2,
		link: "/content-writing"
	}
];

export default function Services() {
	return (
		<>
			<Header />
			<section
				id="services"
				className="flex flex-col items-center bg-white text-black w-full max-w-7xl mx-auto">
				<div className="flex flex-col items-center justify-center px-4 md:px-8 py-24 w-full ">
					{/* <h2 className="playfair text-4xl font-bold tracking-tight mb-12 text-left w-full">
						A web design agency with expertise
					</h2> */}
					<div className="flex flex-col md:flex-row w-full md:gap-24 justify-between items-start">
						<h3 className="text-7xl font-bold text-left w-full mb-8 lg:mb-0">
							Design
						</h3>
						<div className="flex flex-col items-start justify-start w-full">
							<Link
								href="/web-design"
								className="flex w-full items-center group relative pb-6 border-b border-gray-950/10 cursor-pointer">
								<Image
									src={stock1}
									alt="corporate"
									height={100}
									width={100}
									className="object-cover hidden lg:block rounded-3xl lg:transform origin-left lg:scale-x-[0%] lg:opacity-0 lg:group-hover:opacity-100 lg:group-hover:scale-x-[100%] transition-all ease-in-out duration-300 h-16 w-24"
								/>
								<h3 className="text-3xl tracking-tight text-left pl-4 lg:pl-0 lg:group-hover:pl-4 lg:group-hover:text-orange-400 transition-all ease-in-out duration-300 lg:ml-[-100px] lg:group-hover:ml-0">
									Web Design
								</h3>
							</Link>

							<Link
								href="/shopify"
								className="flex w-full items-center group relative py-6 border-b border-gray-950/10 cursor-pointer">
								<Image
									src={stock2}
									alt="corporate"
									height={100}
									width={100}
									className="object-cover hidden lg:block rounded-3xl lg:transform origin-left lg:scale-x-[0%] lg:opacity-0 lg:group-hover:opacity-100 lg:group-hover:scale-x-[100%] transition-all ease-in-out duration-300 h-16 w-24"
								/>
								<h3 className="text-3xl tracking-tight text-left pl-4 lg:pl-0 lg:group-hover:pl-4 lg:group-hover:text-orange-400 transition-all ease-in-out duration-300 lg:ml-[-100px] lg:group-hover:ml-0">
									Shopify
								</h3>
							</Link>
							<Link
								href="/content-writing"
								className="flex w-full items-center group relative py-6 cursor-pointer">
								<Image
									src={stock3}
									alt="corporate"
									height={100}
									width={100}
									className="object-cover hidden lg:block rounded-3xl lg:transform origin-left lg:scale-x-[0%] lg:opacity-0 lg:group-hover:opacity-100 lg:group-hover:scale-x-[100%] transition-all ease-in-out duration-300 h-16 w-24"
								/>
								<h3 className="text-3xl tracking-tight text-left pl-4 lg:pl-0 lg:group-hover:pl-4 lg:group-hover:text-orange-400 transition-all ease-in-out duration-300 lg:ml-[-100px] lg:group-hover:ml-0">
									Content Writing
								</h3>
							</Link>
						</div>
					</div>
					<div className="flex flex-col md:flex-row w-full md:gap-24 justify-between items-start mt-12">
						<h3 className="text-7xl font-bold text-left w-full mb-8 lg:mb-0">
							Develop
						</h3>
						<div className="flex flex-col items-start justify-start w-full">
							<Link
								href="/web-dev"
								className="flex w-full items-center group relative py-6 border-b border-gray-950/10 cursor-pointer">
								<Image
									src={stock4}
									alt="corporate"
									height={100}
									width={100}
									className="object-cover hidden lg:block rounded-3xl lg:transform origin-left lg:scale-x-[0%] lg:opacity-0 lg:group-hover:opacity-100 lg:group-hover:scale-x-[100%] transition-all ease-in-out duration-300 h-16 w-24"
								/>
								<h3 className="text-3xl tracking-tight text-left pl-4 lg:pl-0 lg:group-hover:pl-4 lg:group-hover:text-orange-400 transition-all ease-in-out duration-300 lg:ml-[-100px] lg:group-hover:ml-0">
									Web Development
								</h3>
							</Link>
							<Link
								href="/ecom"
								className="flex w-full items-center group relative py-6 border-b border-gray-950/10 cursor-pointer">
								<Image
									src={stock5}
									alt="corporate"
									height={100}
									width={100}
									className="object-cover hidden lg:block rounded-3xl lg:transform origin-left lg:scale-x-[0%] lg:opacity-0 lg:group-hover:opacity-100 lg:group-hover:scale-x-[100%] transition-all ease-in-out duration-300 h-16 w-24"
								/>
								<h3 className="text-3xl tracking-tight text-left pl-4 lg:pl-0 lg:group-hover:pl-4 lg:group-hover:text-orange-400 transition-all ease-in-out duration-300 lg:ml-[-100px] lg:group-hover:ml-0">
									eCommerce
								</h3>
							</Link>
							<Link
								href="/seo"
								className="flex w-full items-center group relative py-6  cursor-pointer">
								<Image
									src={stock1}
									alt="corporate"
									height={100}
									width={100}
									className="object-cover hidden lg:block rounded-3xl lg:transform origin-left lg:scale-x-[0%] lg:opacity-0 lg:group-hover:opacity-100 lg:group-hover:scale-x-[100%] transition-all ease-in-out duration-300 h-16 w-24"
								/>
								<h3 className="text-3xl tracking-tight text-left pl-4 lg:pl-0 lg:group-hover:pl-4 lg:group-hover:text-orange-400 transition-all ease-in-out duration-300 lg:ml-[-100px] lg:group-hover:ml-0">
									SEO
								</h3>
							</Link>
						</div>
					</div>
					<div className="flex flex-col md:flex-row w-full md:gap-24 justify-between items-start mt-12">
						<h3 className="text-7xl font-bold text-left w-full mb-8 lg:mb-0">
							Support
						</h3>
						<div className="flex flex-col items-start justify-start w-full">
							<Link
								href="/web-hosting"
								className="flex w-full items-center group relative py-6 border-b border-gray-950/10 cursor-pointer">
								<Image
									src={stock2}
									alt="corporate"
									height={100}
									width={100}
									className="object-cover hidden lg:block rounded-3xl lg:transform origin-left lg:scale-x-[0%] lg:opacity-0 lg:group-hover:opacity-100 lg:group-hover:scale-x-[100%] transition-all ease-in-out duration-300 h-16 w-24"
								/>
								<h3 className="text-3xl tracking-tight text-left pl-4 lg:pl-0 lg:group-hover:pl-4 lg:group-hover:text-orange-400 transition-all ease-in-out duration-300 lg:ml-[-100px] lg:group-hover:ml-0">
									Web Hosting
								</h3>
							</Link>
							{/* <Link
								href="/seo"
								className="flex w-full items-center group relative py-6 border-b border-gray-950/10 cursor-pointer">
								<Image
									src={stock3}
									alt="corporate"
									height={100}
									width={100}
									className="object-cover rounded-3xl lg:transform origin-left lg:scale-x-[0%] lg:opacity-0 lg:group-hover:opacity-100 lg:group-hover:scale-x-[100%] transition-all ease-in-out duration-300 h-16 w-24"
								/>
								<h3 className="text-3xl tracking-tight text-left pl-4 lg:pl-0 lg:group-hover:pl-4 lg:group-hover:text-orange-400 transition-all ease-in-out duration-300 lg:ml-[-100px] lg:group-hover:ml-0">
									Ongoing SEO
								</h3>
							</Link> */}
							<Link
								href="/lead-gen"
								className="flex w-full items-center group relative pt-6 cursor-pointer">
								<Image
									src={stock4}
									alt="corporate"
									height={100}
									width={100}
									className="object-cover hidden lg:block rounded-3xl lg:transform origin-left lg:scale-x-[0%] lg:opacity-0 lg:group-hover:opacity-100 lg:group-hover:scale-x-[100%] transition-all ease-in-out duration-300 h-16 w-24"
								/>
								<h3 className="text-3xl tracking-tight text-left pl-4 lg:pl-0 lg:group-hover:pl-4 lg:group-hover:text-orange-400 transition-all ease-in-out duration-300 lg:ml-[-100px] lg:group-hover:ml-0">
									Lead Generation
								</h3>
							</Link>
						</div>
					</div>
					<div className="flex w-full gap-12 justify-between items-start"></div>
				</div>
			</section>
			<CTA2 />
			<Footer />
		</>
	);
}

/* <div className="grid grid-cols-1 xl:grid-cols-3 gap-20 max-w-7xl">
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
						<Link href="/content-writing" className="group">
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
					</div> */
