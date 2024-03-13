import React from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
/* import ExperienceCard from "@/components/ExperienceCard"; */
import FAQ from "./components/FAQ";
import { getSEOTags } from "@/libs/seo";
import ph1 from "@/public/ph1.png";
import { MdOutlineSpatialAudioOff } from "react-icons/md";
import { MdOutlinePlaylistAddCheck } from "react-icons/md";
import { MdOutlineFeaturedPlayList } from "react-icons/md";
import { MdOutlineLibraryBooks } from "react-icons/md";
import { MdOutlineNewspaper } from "react-icons/md";
import { MdOutlineVpnKey } from "react-icons/md";

export const metadata = getSEOTags({
	title: "Content Writing Agency Manchester | ReDesign",
	canonicalUrlRelative: "/content-writing"
});

export default function WebDesign() {
	return (
		<>
			<Header />
			<section
				id="web-design"
				className="max-w-7xl flex flex-col items-center justify-center mx-auto text-black px-8 py-24">
				<h2 className="w-full text-left text-5xl tracking-tight font-bold mb-12">
					Content writing to build your reputation and authority.
				</h2>
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-24">
					<h3 className="w-full text-left text-2xl font-bold">
						Speak up in a crowded digital world. We build websites
						that not only look great, but also communicate your
						brand&apos;s voice.
					</h3>
					<div>
						<p className="mb-12">
							Brands transcend beyond visually appealing websites;
							the essence of your brand&apos;s voice plays a
							crucial role in guiding your customers&apos;
							journey—from discovery and acquaintance to
							identification and loyalty. Masterfully crafted
							content empowers you to weave compelling narratives
							and foster meaningful connections with your desired
							audience.
							<br />
							<br />
							In an era where we&apos;re inundated with content
							like never before, standing out in the crowded
							digital landscape poses a significant challenge. How
							can you ensure your message resonates loudly,
							compelling your audience to pause their endless
							scrolling and engage with your content? Our team of
							content writers employs insightful and empathetic
							strategies to enhance your brand&apos;s presence and
							cultivate a strong bond with your target market.
						</p>
						<Link
							href="/new-project"
							className="btn btn-wide xl:px-6 bg-white border-2 border-gray-900 hover:bg-orange-400 hover:border-orange-400 hover:text-white hover:drop-shadow-lg transition-all ease-in-out duration-300 rounded-full">
							Start a Project
						</Link>
					</div>
				</div>
			</section>
			<section className="w-full flex flex-col items-center justify-center mx-auto bg-black text-white px-8 pt-24 pb-0">
				<div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-24 relative">
					<div className="row-start-2 lg:row-start-1 transform -translate-y-[150px] lg:transform-none">
						<h2 className="w-full text-left text-3xl font-bold mb-8">
							Content that synergizes perfectly with SEO
						</h2>
						<p className="mb-12">
							Without a robust SEO foundation, your content might
							never reach its intended audience, getting lost in
							the digital void. The effectiveness of your content
							is significantly dependent on its strategic
							placement, ensuring it captures the attention of
							relevant customers.
							<br />
							<br />
							Crafting content that&apos;s both impactful and
							SEO-optimized goes beyond mere keyword insertion
							into a webpage and hoping for visibility. Achieving
							a harmony between SEO practices and maintaining your
							brand&apos;s authentic voice is an art.
							<br />
							<br />
							Behind every content piece we create lies a
							strategic plan, whether it&apos;s an integral part
							of a comprehensive content optimization strategy, a
							timely press release aimed at boosting your backlink
							profile, or a clever tagline that resonates with
							your audience, reminding them of your brand's
							relatability.
						</p>
						<Link
							href="/contact"
							className="btn btn-wide xl:px-6 bg-white border-2 border-white hover:bg-orange-400 hover:border-orange-400 text-black hover:text-white transition-all ease-in-out duration-300 rounded-full">
							Book a Call
						</Link>
					</div>
					<Image
						src={ph1}
						alt="Service Image"
						width={900}
						height={900}
						className="object-cover transform -translate-y-[150px] h-[700px] rounded-xl"
					/>
				</div>
			</section>
			{/* <section className="w-full flex flex-col items-center justify-center mx-auto bg-white text-black px-24 lg:px-8 py-24">
				<div className="w-full max-w-7xl">
					<h2 className="max-w-3xl w-full mx-auto text-center text-3xl font-bold mb-12">
						Our Web Development Services
					</h2>
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24">
						<Image
							src={ph1}
							alt="Service Image"
							width={600}
							height={600}
							className="object-cover w-full"
						/>
						<div className="">
							<h3 className="w-full text-left text-2xl font-bold mb-6">
								Are you ready for growth without limits?
							</h3>

							<p className="mb-2 mt-4 flex gap-2 items-center">
								<MdOutlineCheck className="text-orange-400 text-xl" />
								Scale and adapt cloud hosting to meet your exact
								requirements
							</p>
							<p className="mb-2 flex gap-2 items-center">
								<MdOutlineCheck className="text-orange-400 text-xl" />
								Unlimited, unmetered bandwidth with no hidden
								costs
							</p>
							<p className="mb-2 flex gap-2 items-center">
								<MdOutlineCheck className="text-orange-400 text-xl" />
								Access to state-of-the-art network
								infrastructure
							</p>
							<p className="mb-2 flex gap-2 items-center">
								<MdOutlineCheck className="text-orange-400 text-xl" />
								100% network uptime guarantee
							</p>
						</div>
					</div>
				</div>
			</section> */}
			<section className="w-full flex flex-col items-center justify-center mx-auto bg-white text-black px-8 py-24">
				<div className="w-full max-w-7xl">
					<h2 className="max-w-3xl mx-auto text-center text-3xl font-bold mb-16">
						Have your brand&apos;s voice heard
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-24">
						<div>
							<h3 className="font-bold text-xl mb-2 flex gap-2 items-center">
								<MdOutlineSpatialAudioOff className="text-orange-400 text-3xl" />
								Tone of Voice
							</h3>
							<p>
								Defining how your brand identity is conveyed
								through words. The message and personality that
								makes you you, and resonates with your target
								audience.
							</p>
						</div>
						<div>
							<h3 className="font-bold text-xl mb-2 flex gap-2 items-center">
								<MdOutlinePlaylistAddCheck className="text-orange-400 text-3xl" />
								SEO Content
							</h3>
							<p>
								Good content and SEO go hand in hand. We combine
								the two in a strategy that puts your content in
								front of the right people and captures their
								attention when they see it.
							</p>
						</div>
						<div>
							<h3 className="font-bold text-xl mb-2 flex gap-2 items-center">
								<MdOutlineFeaturedPlayList className="text-orange-400 text-3xl" />
								On-Page Content
							</h3>
							<p>
								Your website is the front page of your brand.
								From the first impression of your home page to
								the USP of each service or product you sell,
								on-page content is there to help people discover
								you and become loyal customers.
							</p>
						</div>
						<div>
							<h3 className="font-bold text-xl mb-2 flex gap-2 items-center">
								<MdOutlineLibraryBooks className="text-orange-400 text-3xl" />
								Blog Content
							</h3>
							<p>
								Become a thought leader in your industry with
								blog content that is on-brand, on-trend,
								meticulously researched, and flaunts your
								intellectual authority. Blog content is also
								integral to your site&apos;s SEO.
							</p>
						</div>
						<div>
							<h3 className="font-bold text-xl mb-2 flex gap-2 items-center">
								<MdOutlineNewspaper className="text-orange-400 text-3xl" />
								Press
							</h3>
							<p>
								Build awareness the right way through
								professionally written link building content
								that champions your brand&apos;s voice. Our
								network of journalists, bloggers, and
								influencers help us to tap into new pools of
								potential customers.
							</p>
						</div>
						<div>
							<h3 className="font-bold text-xl mb-2 flex gap-2 items-center">
								<MdOutlineVpnKey className="text-orange-400 text-3xl" />
								Keyword Research
							</h3>
							<p>
								Research the keyword terms that work best for
								your business. Base this decision on volume and
								difficulty, alongside your offering.
							</p>
						</div>
					</div>
				</div>
			</section>
			<section className="w-full flex flex-col items-center justify-center mx-auto bg-black text-white px-8 pt-24 pb-0">
				<div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-24 relative">
					<div className="row-start-2 lg:row-start-1 transform -translate-y-[150px] lg:transform-none">
						<h2 className="w-full text-left text-3xl font-bold mb-8">
							Write like an expert in pretty much anything
						</h2>
						<p className="mb-12">
							Our approach is as distinct as each company and its
							audience. Every content writing endeavor begins with
							a deep dive into understanding your brand and
							objectives thoroughly.
							<br />
							<br />
							We immerse ourselves in your audience&apos;s world,
							grasping everything from their significant
							challenges to the specific language they use.
							Tailoring our content writing to fit various
							industries is something we excel at, having
							successfully navigated this process on numerous
							occasions.
						</p>
						<Link
							href="/contact"
							className="btn btn-wide xl:px-6 bg-white border-2 border-white hover:bg-orange-400 hover:border-orange-400 text-black hover:text-white transition-all ease-in-out duration-300 rounded-full">
							Book a Call
						</Link>
					</div>
					<Image
						src={ph1}
						alt="Service Image"
						width={900}
						height={900}
						className="object-cover transform -translate-y-[150px] h-[700px] rounded-xl"
					/>
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
			<section className="w-full flex flex-col items-center justify-center mx-auto bg-white text-black px-8 pt-24 pb-12">
				<div className="grid grid-cols-1 md:grid-cols-2 max-w-7xl w-full">
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
