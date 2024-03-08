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
						Marketing
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
								Story Telling
							</h3>
							<p className="mb-4">
								We wanted to create a website that told a story.
								At the core of every fitness journey is a story
								- a tale of challenge, perseverance, and
								ultimately, transformation. Recognizing this, we
								meticulously crafted the website to capture and
								convey these stories, making them the heartbeat
								of Team Ignite&apos;s online presence.
							</p>
						</div>
					</div>
					<div className="flex flex-col ">
						<div className="flex flex-col p-8 bg-gray-100 rounded-xl w-fit mb-8">
							<h3 className="font-bold text-3xl mb-4 tracking-tight">
								Authority
							</h3>
							<p className="mb-4">
								Our initial focus was on building a website that
								exuded authority and credibility. Each element
								on the site was meticulously chosen to build a
								narrative of expertise and proven results.
								Authority in the fitness domain is cemented by
								sharing knowledge. Our content strategy was
								designed to make Team Ignite a hub of invaluable
								information.
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
								Community
							</h3>
							<p className="mb-4">
								We recognized that authority is not just about
								broadcasting expertise, it&apos;s about
								fostering communities. Our goal was to highlight
								the community aspect of Team Ignite. We wanted
								to create a space where people could come
								together, share their experiences, and support
								each other. Putting the &quot;Team&quot; in Team
								Ignite.
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
