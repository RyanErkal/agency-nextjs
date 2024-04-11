import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import resilient from "@/public/resilient.webp";
import ri1 from "@/public/resilient/ri1.webp";
import ri2 from "@/public/resilient/ri2.webp";
import ri3 from "@/public/resilient/ri3.webp";
import resilientmock1 from "@/public/resilient/rm1.webp";
import resilientmock2 from "@/public/resilient/rm2.webp";
import alliance from "@/public/alliance/alliance.webp";
import ignite from "@/public/ignite.webp";
import voics from "@/public/voics.webp";

export default function Alliance() {
	return (
		<>
			<Header />
			<section className="w-full max-w-7xl bg-white flex flex-col items-center mx-auto px-4 md:px-8 py-24">
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
						Branding
					</p>
					<p className="bg-gray-100 px-4 py-2 rounded-full font-semibold tracking-tight">
						Marketing
					</p>
				</div>
				<h1 className="font-bold text-6xl w-full text-left mb-12 tracking-tight">
					Resilient Intent
				</h1>
				<h2 className="font-semibold text-2xl w-full text-left tracking-tight mb-12">
					An educational platform for online fitness coaches.
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
					<div className="flex flex-col">
						<Image
							src={resilient}
							alt="Alliance Coaching"
							placeholder="blur"
							className="object-cover w-full rounded-xl"
						/>
						<Image
							src={resilientmock1}
							alt="Alliance Coaching"
							className="object-cover w-full rounded-xl mt-8"
						/>

						<Image
							src={ri1}
							alt="Alliance Coaching"
							placeholder="blur"
							className="object-cover w-full rounded-xl mt-8"
						/>
						<div className="flex flex-col p-8 bg-gray-100 rounded-xl w-fit mt-8">
							<h3 className="font-bold text-3xl mb-4 tracking-tight">
								Conversion Pathways
							</h3>
							<p className="mb-4">
								At the heart of the website&apos;s architecture
								are meticulously designed conversion routes,
								crafted to transform site visitors into
								potential leads. Strategically positioned calls
								to action guide users towards deeper engagement,
								whether that&apos;s by exploring free content,
								booking a private consultation, or making an
								inquiry. By strategically positioning these
								elements, we aim to minimize any second-guessing
								and streamline the journey towards a decision,
								effectively narrowing the gap between the
								user&apos;s initial interest and their
								subsequent action.
							</p>
						</div>
					</div>
					<div className="flex flex-col ">
						<div className="flex flex-col p-8 bg-gray-100 rounded-xl w-fit mb-8">
							<h3 className="font-bold text-3xl mb-4 tracking-tight">
								Experience
							</h3>
							<p className="mb-4">
								Resilient Intent is a platform that offers
								online fitness coaching. We designed a website
								that was clean, modern, and easy to navigate. We
								used a combination of high-quality images and
								engaging copy to showcase their services and
								attract new clients. We also optimized the
								website for search engines to help improve their
								online visibility.
							</p>
						</div>
						<Image
							src={ri3}
							alt="Alliance Coaching"
							placeholder="blur"
							className="object-cover w-full rounded-xl"
						/>
						<div className="flex flex-col p-8 bg-gray-100 rounded-xl w-fit mt-8">
							<h3 className="font-bold text-3xl mb-4 tracking-tight">
								Brand Identity
							</h3>
							<p className="mb-4">
								We designed a brand identity that was modern,
								and professional. The goal was to create a brand
								that was memorable and would stand out in the
								fitness industry. We used a combination of
								modern typography and a vibrant color palette to
								create a brand that was fresh and modern. We
								also designed a logo that was simple, yet
								memorable, and would be easily recognizable
								across all platforms.
							</p>
						</div>
						<Image
							src={ri2}
							alt="Alliance Coaching"
							placeholder="blur"
							className="object-cover w-full rounded-xl mt-8"
						/>
						<Image
							src={resilientmock2}
							alt="Alliance Coaching"
							className="object-cover w-full rounded-xl mt-8"
						/>
					</div>
				</div>
				<div className="flex flex-col w-full mt-12">
					<h2 className="font-bold text-5xl w-full text-left tracking-tight mt-12">
						More Projects
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full mt-12">
						<Link href="/ignite" className="group">
							<div className="overflow-hidden rounded-xl w-fit h-fit">
								<Image
									src={ignite}
									alt="Ignite Coaching"
									width={600}
									height={600}
									placeholder="blur"
									className="object-cover w-full rounded-xl transition-all duration-300 ease-in-out hover:scale-105"
								/>
							</div>
							<h3 className="font-bold text-2xl mt-4 tracking-tight link w-fit">
								Ignite
							</h3>
						</Link>
						<Link href="/alliance" className="group w-full">
							<div className="overflow-hidden rounded-xl w-full">
								<Image
									src={alliance}
									alt="Alliance"
									width={600}
									height={600}
									placeholder="blur"
									className="object-fill w-full rounded-xl transition-all duration-300 ease-in-out hover:scale-105"
								/>
							</div>
							<h3 className="font-bold text-2xl mt-4 tracking-tight link w-fit">
								Alliance
							</h3>
						</Link>
						<Link
							href="/voics"
							className="overflow-hidden rounded-xl group">
							<div className="overflow-hidden rounded-xl w-fit h-fit">
								<Image
									src={voics}
									alt="Resilient Intent Coaching"
									width={600}
									height={600}
									placeholder="blur"
									className="object-cover w-full rounded-xl transition-all duration-300 ease-in-out hover:scale-105"
								/>
							</div>
							<h3 className="font-bold text-2xl mt-4 tracking-tight link w-fit">
								Voics
							</h3>
						</Link>
					</div>
				</div>
			</section>
			<Footer />
		</>
	);
}
