import Link from "next/link";

export default function Services() {
	return (
		<>
			<section
				id="services"
				className="flex flex-col items-center justify-center max-w-7xl mx-auto text-black px-8 py-24">
				<div className="grid grid-cols-1 md:grid-cols-2 w-full">
					<h2 className="w-full text-left text-5xl font-bold tracking-tight md:mb-8">
						Our Services
					</h2>
					<div className="flex flex-col items-start w-full">
						<div className="border-b w-full pb-6 group cursor-pointer">
							<Link
								href="/web-design"
								className="text-4xl tracking-tight group-hover:pl-4 group-hover:text-orange-400 transition-all ease-in-out duration-300">
								Web Design
							</Link>
						</div>
						<div className="border-b w-full py-6 group cursor-pointer">
							<Link
								href="/web-dev"
								className="text-4xl tracking-tight group-hover:pl-4 group-hover:text-orange-400 transition-all ease-in-out duration-300">
								Web Development
							</Link>
						</div>
						<div className="border-b w-full py-6 group cursor-pointer">
							<Link
								href="/ecom"
								className="text-4xl tracking-tight group-hover:pl-4 group-hover:text-orange-400 transition-all ease-in-out duration-300">
								eCommerce
							</Link>
						</div>
						<div className="border-b w-full py-6 group cursor-pointer">
							<Link
								href="/seo"
								className="text-4xl tracking-tight group-hover:pl-4 group-hover:text-orange-400 transition-all ease-in-out duration-300">
								SEO
							</Link>
						</div>
						<div className="w-full pt-6 group cursor-pointer">
							<Link
								href="/services"
								className="text-4xl tracking-tight group-hover:pl-4 group-hover:text-orange-400 transition-all ease-in-out duration-300">
								All Services
							</Link>
						</div>
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
