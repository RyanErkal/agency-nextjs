import React from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
/* import ExperienceCard from "@/components/ExperienceCard"; */
import FAQ from "./components/FAQ";
import ph1 from "@/public/ph1.png";
import { MdOutlineInsertLink } from "react-icons/md";

export default function WebDesign() {
	return (
		<>
			<Header />
			<section
				id="web-design"
				className="max-w-7xl flex flex-col items-center justify-center mx-auto text-black px-24 lg:px-8 py-24">
				<h2 className="w-full text-left text-5xl font-bold mb-12">
					Looking for content writers to define your brand tone of
					voice and help SEO?
				</h2>
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-24">
					<h3 className="w-full text-left text-2xl font-bold">
						Speak up in a crowded digital world. Whisper the right
						things in your customer&apos;s ear. Build a reputation
						on the voice of your brand.
					</h3>
					<div>
						<p className="mb-12">
							Brands are more than just great looking websites.
							The voice of your brand is integral in the journey
							your customers take to discover you, get to know
							you, identify with you, and stay loyal. Effectively
							written content gives you the power to tell a story
							and build relationships with the people you want to.
							<br />
							<br />
							Today we are bombarded with more content on a daily
							basis than ever before. How do you speak up over the
							noise of a saturated digital world and get your
							audience to stop scrolling and start reading? Our
							content writing team use perceptive and intuitive
							approaches to building brand reputation and
							establishing rapport with your target audience.
						</p>
						<Link
							href="/new-project"
							className="btn xl:px-6 bg-white border-2 border-gray-900 hover:bg-orange-400 hover:border-orange-400 hover:text-white hover:drop-shadow-lg transition-all ease-in-out duration-300 rounded-sm">
							Start a Project
						</Link>
					</div>
				</div>
			</section>
			<section className="w-full flex flex-col items-center justify-center mx-auto bg-black text-white px-24 lg:px-8 pt-24 pb-0">
				<div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-24 relative">
					<div className="row-start-2 lg:row-start-1 transform -translate-y-[150px] lg:transform-none">
						<h2 className="w-full text-left text-3xl font-bold mb-8">
							Content that works hand-in-hand with SEO
						</h2>
						<p className="mb-12">
							Without a solid SEO strategy, your content risks
							getting gets swallowed up without even being seen.
							Half the success of any content relies on
							positioning it in right the right places to get
							noticed and consumed by relevant customers.
							<br />
							<br />
							Writing successful, optimised content is more than
							simply stuffing keywords into a service page and
							hoping for the best. Balancing SEO and your unique,
							natural tone of voice require skill. We know just
							how to do this, in fact, we&apos;ve won awards for
							the results we produce.
							<br />
							<br />
							Every piece of content we write has a plan behind
							it, whether it&apos;s one cog in a well-oiled
							content optimisation plan, a perfectly timed press
							release to enhance your backlink profile, or a witty
							strapline that reminds your audience you&apos;re
							just like them.
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
			<section className="w-full flex flex-col items-center justify-center mx-auto bg-white text-black px-24 lg:px-8 py-24">
				<div className="w-full max-w-7xl">
					<h2 className="max-w-3xl mx-auto text-center text-3xl font-bold mb-16">
						A team of experts that can handle hosting and technical
						support
					</h2>
					<div className="grid grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-24">
						<div>
							<h3 className="font-bold text-xl mb-2 flex gap-2 items-center">
								<MdOutlineInsertLink className="text-orange-400 text-3xl" />
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
								<MdOutlineInsertLink className="text-orange-400 text-3xl" />
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
								<MdOutlineInsertLink className="text-orange-400 text-3xl" />
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
								<MdOutlineInsertLink className="text-orange-400 text-3xl" />
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
								<MdOutlineInsertLink className="text-orange-400 text-3xl" />
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
								<MdOutlineInsertLink className="text-orange-400 text-3xl" />
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
			<section className="w-full flex flex-col items-center justify-center mx-auto bg-black text-white px-24 lg:px-8 pt-24 pb-0">
				<div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-24 relative">
					<div className="row-start-2 lg:row-start-1 transform -translate-y-[150px] lg:transform-none">
						<h2 className="w-full text-left text-3xl font-bold mb-8">
							We know how to write like an expert in pretty much
							anything
						</h2>
						<p className="mb-12">
							Since every company and every audience is unique, so
							are our strategies. We start every content writing
							project by getting to know your brand and goals
							inside out.
							<br />
							<br />
							We get under the skin of your audience to understand
							their everyday lives, from their biggest challenges
							to insider jargon. Adapting content writing to new
							industries is second nature to us, we&apos;ve done
							it quite a few times.
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
			<section className="w-full flex flex-col items-center justify-center mx-auto bg-white text-black px-24 lg:px-8 py-12">
				<div className="w-full max-w-7xl">
					<h2 className="mx-auto text-center text-3xl font-bold mb-12">
						More Services
					</h2>
					<div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
						<Link
							href="/web-dev"
							className="flex flex-col items-start gap-8 w-full group">
							<div className="w-full h-auto overflow-hidden">
								<Image
									src={ph1}
									alt="Service Image"
									width={600}
									height={600}
									className="w-full group-hover:scale-105 transition-all ease-in-out duration-300"
								/>
							</div>
							<h1 className="text-xl font-bold text-left">
								Web Development
							</h1>
						</Link>
						<Link
							href="/ecom"
							className="flex flex-col items-start gap-8 w-full group">
							<div className="w-full h-auto overflow-hidden">
								<Image
									src={ph1}
									alt="Service Image"
									width={600}
									height={600}
									className="w-full group-hover:scale-105 transition-all ease-in-out duration-300"
								/>
							</div>
							<h1 className="text-xl font-bold text-left">
								eCommerce
							</h1>
						</Link>
						<Link
							href="/seo"
							className="flex flex-col items-start gap-8 w-full group">
							<div className="w-full h-auto overflow-hidden">
								<Image
									src={ph1}
									alt="Service Image"
									width={600}
									height={600}
									className="w-full group-hover:scale-105 transition-all ease-in-out duration-300"
								/>
							</div>
							<h1 className="text-xl font-bold text-left">SEO</h1>
						</Link>
					</div>
				</div>
			</section>
			<FAQ />
			<Contact />
			<Footer />
		</>
	);
}
