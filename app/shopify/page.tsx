import React from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
/* import ExperienceCard from "@/components/ExperienceCard"; */
import FAQ from "./components/FAQ";
import { getSEOTags } from "@/libs/seo";
import stock2 from "@/public/stock2.webp";
import { MdOutlineCheck } from "react-icons/md";
import { MdOutlinePhoneIphone } from "react-icons/md";
import { MdOutlinePinDrop } from "react-icons/md";
import { MdOutlineLock } from "react-icons/md";
import { MdOutlineCalculate } from "react-icons/md";
import { MdOutlinePayments } from "react-icons/md";
import { MdOutlineLocalShipping } from "react-icons/md";
import gymshark from "@/public/brands/gymshark.webp";
import huel from "@/public/brands/huel.webp";
import redbull from "@/public/brands/redbull.webp";
import kylie from "@/public/brands/kylie.webp";

export const metadata = getSEOTags({
	title: "Shopify Agency Manchester | ReDesign",
	canonicalUrlRelative: "/shopify"
});

export default function WebDesign() {
	return (
		<>
			<Header />
			<section
				id="web-design"
				className="max-w-7xl flex flex-col items-center justify-center mx-auto text-black px-4 md:px-8 py-24">
				<h2 className="w-full text-left text-5xl font-bold tracking-tight mb-12">
					A Shopify Agency you can trust
				</h2>
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-24">
					<h3 className="w-full text-left text-2xl font-bold">
						We build beautiful, high-performing Shopify websites
						that are designed to convert. We can have your store up
						and running in 2 weeks.
					</h3>
					<div>
						<p className="mb-12">
							Shopify is our cheaper option of eCommerce that we
							offer here at ReDesign. Our team of Shopify experts
							help people build an online store with hundreds of
							built-in features, and has the ability to integrate
							with third party apps. You can sell products
							directly on your website, and across multiple
							marketplaces including social media. We have
							experience across various different industries, so
							you can trust you&apos;re in good hands.
						</p>
						<Link
							href="/new-project"
							className="btn btn-wide xl:px-6 bg-white border-2 border-gray-900 hover:bg-orange-400 hover:border-orange-400 hover:text-white hover:drop-shadow-lg transition-all ease-in-out duration-300 rounded-full">
							Start a Project
						</Link>
					</div>
				</div>
			</section>
			<section className="w-full flex flex-col items-center justify-center mx-auto bg-white text-black px-4 md:px-8 py-16">
				{/* <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-24 relative">
					<div className="row-start-2 lg:row-start-1 transform -translate-y-[150px] lg:transform-none">
						<h2 className="w-full text-left text-2xl font-bold mb-12">
							We&apos;re proud to be recognised as a verified Craft CMS
							and Craft Commerce partner.
						</h2>
						<p className="mb-12">
							Craft states that a Craft Verified Partner has
							proven Craft CMS development experience, deep
							knowledge of Craft and exhibits professional and
							reliable business practices. You can put your trust
							in our team of Craft experts and have faith that
							you&apos;re working with an agency who knows Craft CMS
							and who has been reviewed by Pixel & Tonic
							themselves.
						</p>
						<Link
							href="/contact"
							className="btn xl:px-6 bg-white border-2 border-white hover:bg-orange-400 hover:border-orange-400 text-black hover:text-white transition-all ease-in-out duration-300 rounded-sm">
							Book a Call
						</Link>
					</div>
					<Image
						src={ph1}
						alt="Service Image"
						width={900}
						height={900}
						className="object-cover transform -translate-y-[150px] h-[700px]"
					/>
				</div> */}
				<div className="w-full max-w-7xl">
					<h2 className="w-full text-center text-2xl font-bold mb-12">
						Some of the biggest brands use Shopify
					</h2>
					<div className="flex flex-wrap justify-center gap-24">
						<Image
							src={gymshark}
							alt="Gymshark"
							width={200}
							height={200}
							className="object-contain"
						/>
						<Image
							src={huel}
							alt="Huel"
							width={100}
							height={200}
							className="object-contain"
						/>
						<Image
							src={redbull}
							alt="Redbull"
							width={100}
							height={200}
							className="object-contain"
						/>
						<Image
							src={kylie}
							alt="Kylie Cosmetics"
							width={150}
							height={200}
							className="object-contain"
						/>
					</div>
				</div>
			</section>
			<section className="w-full flex flex-col items-center justify-center mx-auto bg-black text-white py-16">
				<div className="w-full max-w-7xl px-4 md:px-8">
					<h2 className="max-w-3xl w-full mx-auto text-center text-2xl font-bold mb-12">
						Empowering independent business owners in the UK and
						beyond
					</h2>
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24">
						<Image
							src={stock2}
							alt="Service Image"
							width={600}
							height={600}
							placeholder="blur"
							className="object-cover w-full rounded-xl"
						/>
						<div className="flex flex-col gap-4 justify-center">
							<h3 className="w-full text-left text-xl font-bold">
								Convenience without compromise.
							</h3>
							<p className="">
								Shopify makes it easy to build and manage your
								online store
							</p>
							<div className="flex gap-2 items-center">
								<MdOutlineCheck className="text-orange-400 text-xl flex-shrink-0" />
								<p className="flex gap-2 items-center">
									Use one platform to sell products to anyone,
									anywhere.
								</p>
							</div>
							<div className="flex gap-2 items-center">
								<MdOutlineCheck className="text-orange-400 text-xl flex-shrink-0" />
								<p className="flex gap-2 items-center">
									Take the guesswork out of marketing with
									built-in tools that help you analyze
									campaigns on Facebook and Google.
								</p>
							</div>
							<div className="flex gap-2 items-center">
								<MdOutlineCheck className="text-orange-400 text-xl flex-shrink-0" />
								<p className="flex gap-2 items-center">
									Use a single dashboard to manage orders,
									shipping, and payments anywhere you go.
								</p>
							</div>
						</div>
						<Image
							src={stock2}
							alt="Service Image"
							width={600}
							height={600}
							placeholder="blur"
							className="object-cover w-full lg:col-start-2 rounded-xl"
						/>
						<div className="lg:col-start-1 lg:row-start-2 flex flex-col justify-center">
							<h3 className="w-full text-left text-xl font-bold mb-6">
								Start selling online or revamp your existing
								store.
							</h3>
							<p className="mb-4">
								Selling online with your own eCommerce website
								has never been easier or faster. Our custom
								Shopify options allow you to impress your
								customers with a beautiful store.
							</p>
						</div>
					</div>
				</div>
			</section>
			<section className="w-full flex flex-col items-center justify-center mx-auto bg-white text-black py-16">
				<div className="w-full max-w-7xl px-4 md:px-8">
					<h2 className=" mx-auto text-center text-2xl font-bold mb-16">
						Shopify is ready to go out of the box.
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-24">
						<div>
							<h3 className="font-bold text-xl mb-2 flex gap-2 items-center">
								<MdOutlinePhoneIphone className="text-orange-400 text-3xl" />
								Mobile ready
							</h3>
							<p>
								Your online Shopify store includes a built-in
								mobile commerce shopping cart. Your customers
								can browse and buy from your store using any
								mobile phone or tablet.
							</p>
						</div>
						<div>
							<h3 className="font-bold text-xl mb-2 flex gap-2 items-center">
								<MdOutlinePinDrop className="text-orange-400 text-3xl" />
								Track orders
							</h3>
							<p>
								Keep track of which orders have been paid for,
								shipped or delivered. We connect with fulfilment
								services like Amazon Services, Shipwire, and
								Rakuten Super Logistics.
							</p>
						</div>
						<div>
							<h3 className="font-bold text-xl mb-2 flex gap-2 items-center">
								<MdOutlineLock className="text-orange-400 text-3xl" />
								Security
							</h3>
							<p>
								Every Shopify store includes a free 256-bit SSL
								certificate. All pages, content, credit card,
								and transaction information is protected by the
								same level of security used by banks.
							</p>
						</div>
						<div>
							<h3 className="font-bold text-xl mb-2 flex gap-2 items-center">
								<MdOutlineCalculate className="text-orange-400 text-3xl" />
								Automatic taxes
							</h3>
							<p>
								Based on your location, Shopify will
								automatically handle major country and state tax
								rates.
							</p>
						</div>
						<div>
							<h3 className="font-bold text-xl mb-2 flex gap-2 items-center">
								<MdOutlinePayments className="text-orange-400 text-3xl" />
								Pay anyway
							</h3>
							<p>
								From bitcoin to PayPal, Shopify integrates with
								over 100 external payment gateways from around
								the world.
							</p>
						</div>
						<div>
							<h3 className="font-bold text-xl mb-2 flex gap-2 items-center">
								<MdOutlineLocalShipping className="text-orange-400 text-3xl" />
								Flexible shipping rates
							</h3>
							<p>
								Set up shipping rates by fixed-price, tiered
								pricing, weight-based, and location-based rates.
							</p>
						</div>
					</div>
				</div>
			</section>
			{/* <section className="w-full flex flex-col items-center justify-center mx-auto bg-white text-black px-24 lg:px-8 py-12">
				<div className="w-full max-w-7xl">
					<h2 className="mx-auto text-center text-3xl font-bold mb-12">
						Web design projects we&apos;ve worked on
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-16 w-full max-w-7xl">
						<div className="flex flex-col gap-16">
							<ExperienceCard
								id={1}
								title="Alliance Coaching"
								description="Web design & development for online coaching brand"
								img={alliance}
							/>

							<ExperienceCard
								id={4}
								title="Voics"
								description="Podcast as a service web design & development"
								img={voics}
							/>
						</div>
						<div className="flex flex-col gap-16">
							<ExperienceCard
								id={3}
								title="Resilient Intent"
								description="An educational platform for fitness professionals"
								img={resilient1}
							/>
							<ExperienceCard
								id={2}
								title="Team Ignite"
								description="Bodybuilding coaching brand digital presence"
								img={ignite}
							/>
						</div>
					</div>
				</div>
			</section> */}
			<section className="w-full flex flex-col items-center justify-center mx-auto bg-white text-black py-12">
				<div className="grid grid-cols-1 md:grid-cols-2 max-w-7xl px-4 md:px-8 w-full">
					<h2 className="w-full text-left text-5xl font-bold tracking-tight mb-12 md:mb-0">
						More Services
					</h2>
					<div className="flex flex-col items-start w-full">
						<div className="border-b w-full pb-6 group cursor-pointer">
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
			<FAQ />
			<Contact />
			<Footer />
		</>
	);
}
