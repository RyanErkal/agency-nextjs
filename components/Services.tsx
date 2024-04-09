import Link from "next/link";
import Image from "next/image";
import stock1 from "@/public/stock1.webp";
import stock2 from "@/public/stock2.webp";
import stock3 from "@/public/stock3.webp";
import stock4 from "@/public/stock4.webp";
import stock5 from "@/public/stock5.webp";

export default function Services() {
	return (
		<>
			<section
				id="services"
				className="flex flex-col items-center justify-center max-w-7xl mx-auto text-black px-4 md:px-8 py-24">
				<div className="grid grid-cols-1 lg:grid-cols-2 w-full">
					<div className="flex flex-col gap-2 mb-12 lg:mb-0 pt-4">
						<h2 className="w-full text-left font-bold text-4xl lg:text-5xl tracking-tight ">
							Our Services
						</h2>
					</div>
					<div className="w-full">
						<Link
							href="/web-design"
							className="flex items-center group relative pb-6 border-b border-gray-950/10 cursor-pointer">
							<Image
								src={stock1}
								alt="corporate"
								height={100}
								width={100}
								className="object-cover rounded-3xl lg:transform origin-left lg:scale-x-[0%] lg:opacity-0 lg:group-hover:opacity-100 lg:group-hover:scale-x-[100%] transition-all ease-in-out duration-300 h-16 w-24"
							/>
							<h3 className="text-3xl tracking-tight text-left pl-4 lg:pl-0 lg:group-hover:pl-4 lg:group-hover:text-orange-400 transition-all ease-in-out duration-300 lg:ml-[-100px] lg:group-hover:ml-0">
								Web Design
							</h3>
						</Link>
						<Link
							href="/web-dev"
							className="flex items-center group relative py-6 border-b border-gray-950/10 cursor-pointer">
							<Image
								src={stock2}
								alt="corporate"
								height={100}
								width={100}
								className="object-cover rounded-3xl lg:transform origin-left lg:scale-x-[0%] lg:opacity-0 lg:group-hover:opacity-100 lg:group-hover:scale-x-[100%] transition-all ease-in-out duration-300 h-16 w-24"
							/>
							<h3 className="text-3xl tracking-tight text-left pl-4 lg:pl-0 lg:group-hover:pl-4 lg:group-hover:text-orange-400 transition-all ease-in-out duration-300 lg:ml-[-100px] lg:group-hover:ml-0">
								Web Development
							</h3>
						</Link>
						<Link
							href="/ecom"
							className="flex items-center group relative py-6 border-b border-gray-950/10 cursor-pointer">
							<Image
								src={stock3}
								alt="corporate"
								height={100}
								width={100}
								className="object-cover rounded-3xl lg:transform origin-left lg:scale-x-[0%] lg:opacity-0 lg:group-hover:opacity-100 lg:group-hover:scale-x-[100%] transition-all ease-in-out duration-300 h-16 w-24"
							/>
							<h3 className="text-3xl tracking-tight text-left pl-4 lg:pl-0 lg:group-hover:pl-4 lg:group-hover:text-orange-400 transition-all ease-in-out duration-300 lg:ml-[-100px] lg:group-hover:ml-0">
								eCommerce
							</h3>
						</Link>
						<Link
							href="/seo"
							className="flex items-center group relative py-6 border-b border-gray-950/10 cursor-pointer">
							<Image
								src={stock4}
								alt="corporate"
								height={100}
								width={100}
								className="object-cover rounded-3xl lg:transform origin-left lg:scale-x-[0%] lg:opacity-0 lg:group-hover:opacity-100 lg:group-hover:scale-x-[100%] transition-all ease-in-out duration-300 h-16 w-24"
							/>
							<h3 className="text-3xl tracking-tight text-left pl-4 lg:pl-0 lg:group-hover:pl-4 lg:group-hover:text-orange-400 transition-all ease-in-out duration-300 lg:ml-[-100px] lg:group-hover:ml-0">
								SEO
							</h3>
						</Link>
						<Link
							href="/services"
							className="flex items-center group relative pt-6 cursor-pointer">
							<Image
								src={stock5}
								alt="corporate"
								height={100}
								width={100}
								className="object-cover rounded-3xl lg:transform origin-left lg:scale-x-[0%] lg:opacity-0 lg:group-hover:opacity-100 lg:group-hover:scale-x-[100%] transition-all ease-in-out duration-300 h-16 w-24"
							/>
							<h3 className="text-3xl tracking-tight text-left pl-4 lg:pl-0 lg:group-hover:pl-4 lg:group-hover:text-orange-400 transition-all ease-in-out duration-300 lg:ml-[-100px] lg:group-hover:ml-0">
								All Services
							</h3>
						</Link>
					</div>
				</div>
			</section>
		</>
	);
}

/* <Link
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
						<h1 className="text-xl font-bold text-left link">
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
						<h1 className="text-xl font-bold w-fit text-left link">
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
						<h1 className="text-xl font-bold text-left link">
							SEO
						</h1>
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
						<h1 className="text-xl font-bold text-left link">
							eCommerce
						</h1>
					</Link> */
