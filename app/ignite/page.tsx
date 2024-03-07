import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import alliance from "@/public/alliance/alliance.webp";
import ignitemockup1 from "@/public/ignite/ignitemockup1.webp";
import ignitemockup2 from "@/public/ignite/ignitemockup2.webp";
import ignite from "@/public/ignite.webp";
import ignite1 from "@/public/ignite/ignite1.webp";
import ignite2 from "@/public/ignite/ignite2.webp";
import ignite3 from "@/public/ignite/ignite3.webp";
import voics from "@/public/voics.webp";
import resilient from "@/public/resilient.webp";

export default function Alliance() {
	return (
		<>
			<Header />
			<section className="w-full max-w-7xl bg-white flex flex-col items-center mx-auto px-8 py-24">
				<div className="flex flex-wrap gap-6 w-full mb-12">
					<p className="bg-gray-100 px-4 py-2 rounded-full font-semibold tracking-tight">
						Web Design
					</p>
					<p className="bg-gray-100 px-4 py-2 rounded-full font-semibold tracking-tight">
						Web Development
					</p>
					<p className="bg-gray-100 px-4 py-2 rounded-full font-semibold tracking-tight">
						SEO
					</p>
					<p className="bg-gray-100 px-4 py-2 rounded-full font-semibold tracking-tight">
						Lead Generation
					</p>
					<p className="bg-gray-100 px-4 py-2 rounded-full font-semibold tracking-tight">
						Marketting
					</p>
				</div>
				<h1 className="font-bold text-6xl w-full text-left mb-12 tracking-tight">
					Team Ignite
				</h1>
				<h2 className="font-semibold text-2xl w-full text-left tracking-tight mb-12">
					A results driven bodybuilding coaching brand.
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
					<div className="flex flex-col">
						<Image
							src={ignite2}
							alt="Alliance Coaching"
							placeholder="blur"
							className="object-cover w-full rounded-xl"
						/>
						<Image
							src={ignitemockup1}
							alt="Alliance Coaching"
							className="object-cover w-full rounded-xl mt-8"
						/>
						<Image
							src={ignite3}
							alt="Alliance Coaching"
							placeholder="blur"
							className="object-cover w-full rounded-xl mt-8"
						/>
						<div className="flex flex-col p-8 bg-gray-100 rounded-xl w-fit mt-8">
							<h3 className="font-bold text-3xl mb-4 tracking-tight">
								Social Proof
							</h3>
							<p className="mb-4">
								Trust is crucial. We showcased ample social
								proof through transformations and client
								testimonials to demonstrate the real results
								achieved through the coaching process. Social
								proof builds credibility and trust, showing
								potential clients the tangible benefits of
								embarking on their fitness journey with Team
								Ignite.
							</p>
						</div>
					</div>
					<div className="flex flex-col ">
						<div className="flex flex-col p-8 bg-gray-100 rounded-xl w-fit mb-8">
							<h3 className="font-bold text-3xl mb-4 tracking-tight">
								Brand Identity
							</h3>
							<p className="mb-4">
								Team Ignite was a new brand that needed a
								website to showcase their services and attract
								new clients. They wanted a website that was
								modern, professional, and easy to navigate. We
								designed a website that was clean, modern, and
								easy to navigate. We used a combination of
								high-quality images and engaging copy to
								showcase their services and attract new clients.
								We also optimized the website for search engines
								to help improve their online visibility.
							</p>
						</div>
						<Image
							src={ignite}
							alt="Alliance Coaching"
							placeholder="blur"
							className="object-cover w-full rounded-xl"
						/>
						<div className="flex flex-col p-8 bg-gray-100 rounded-xl w-fit mt-8">
							<h3 className="font-bold text-3xl mb-4 tracking-tight">
								Conversion
							</h3>
							<p className="mb-4">
								Central to the website&apos;s design are
								conversion pathways engineered to turn visitors
								into leads. Calls to action beckon the visitor
								closer to making a commitment, whether it&apos;s
								through engaging with the free content,
								scheduling a personal consultation, or enquiring
								furhter. These CTAs are not just prompts but
								bridges over the gap between interest and
								action, carefully placed to reduce hesitation
								and simplify the decision-making process.
							</p>
						</div>
						<Image
							src={ignitemockup2}
							alt="Alliance Coaching"
							className="object-cover w-full rounded-xl mt-8"
						/>
						<Image
							src={ignite1}
							alt="Alliance Coaching"
							placeholder="blur"
							className="object-cover w-full rounded-xl mt-8"
						/>
					</div>
				</div>
				<div className="flex flex-col w-full mt-12">
					<h2 className="font-bold text-5xl w-full text-left tracking-tight mt-12">
						More Projects
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full mt-12">
						<Link href="/alliance" className="group">
							<div className="overflow-hidden rounded-xl w-fit h-fit">
								<Image
									src={alliance}
									alt="Alliance Coaching"
									width={600}
									height={600}
									placeholder="blur"
									className="object-cover w-full rounded-xl transition-all duration-300 ease-in-out hover:scale-105"
								/>
							</div>
							<h3 className="font-bold text-2xl mt-4 tracking-tight link w-fit">
								Alliance
							</h3>
						</Link>
						<Link href="/voics" className="group w-full">
							<div className="overflow-hidden rounded-xl w-full">
								<Image
									src={voics}
									alt="Voics"
									width={600}
									height={600}
									placeholder="blur"
									className="object-fill w-full rounded-xl transition-all duration-300 ease-in-out hover:scale-105"
								/>
							</div>
							<h3 className="font-bold text-2xl mt-4 tracking-tight link w-fit">
								Voics
							</h3>
						</Link>
						<Link
							href="/resilient"
							className="overflow-hidden rounded-xl group">
							<div className="overflow-hidden rounded-xl w-fit h-fit">
								<Image
									src={resilient}
									alt="Resilient Intent Coaching"
									width={600}
									height={600}
									placeholder="blur"
									className="object-cover w-full rounded-xl transition-all duration-300 ease-in-out hover:scale-105"
								/>
							</div>
							<h3 className="font-bold text-2xl mt-4 tracking-tight link w-fit">
								Resilient Intent
							</h3>
						</Link>
					</div>
				</div>
			</section>
			<Footer />
		</>
	);
}
