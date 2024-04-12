import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import massy2 from "@/public/massy/2.webp";
import massy3 from "@/public/massy/3.webp";
import massy4 from "@/public/massy.webp";
import ignite from "@/public/ignite.webp";
import voics from "@/public/voics.webp";
import alliance from "@/public/alliance/alliance.webp";

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
						Branding
					</p>
					<p className="bg-gray-100 px-4 py-2 rounded-full font-semibold tracking-tight">
						SEO
					</p>
				</div>
				<h1 className="font-bold text-6xl w-full text-left mb-12 tracking-tight">
					Massy Media
				</h1>
				<h2 className="font-semibold text-2xl w-full text-left tracking-tight mb-12">
					A media company that focuses on quality and storytelling.
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
					<div className="flex flex-col">
						<Image
							src={massy4}
							alt="Alliance Coaching"
							placeholder="blur"
							className="object-cover w-full rounded-xl"
						/>
						<div className="flex flex-col p-8 bg-gray-100 rounded-xl w-fit mt-8">
							<h3 className="font-bold text-3xl mb-4 tracking-tight">
								Showcase
							</h3>
							<p className="mb-4">
								Massy Media is a media company that focuses on
								quality and storytelling. They wanted a website
								that would showcase their work and services in a
								way that would attract potential clients. Not
								only did we create a visually stunning website,
								but we also optimized it for search engines to
								help improve their online visibility.
							</p>
						</div>
						<Image
							src={massy3}
							alt="Alliance Coaching"
							placeholder="blur"
							className="object-cover w-full rounded-xl mt-8"
						/>
						<video
							autoPlay
							loop
							muted
							playsInline
							preload="auto"
							className="w-full rounded-xl mt-8"
							src="https://massy-media.s3.eu-north-1.amazonaws.com/sunbedcompressed.mp4"
						/>
					</div>
					<div className="flex flex-col ">
						<div className="flex flex-col p-8 bg-gray-100 rounded-xl w-fit mb-8">
							<h3 className="font-bold text-3xl mb-4 tracking-tight">
								Niche Focus
							</h3>
							<p className="mb-4">
								We designed the website to reflect Massy
								Media&apos;s focus on their specific niche and
								expertise. The design is clean and minimalistic,
								allowing the content to take center stage. The
								use of white space and bold typography creates a
								sense of elegance and sophistication, while the
								use of high-quality images and videos showcases
								the company&apos;s work in the best possible
								light.
							</p>
						</div>
						<video
							autoPlay
							loop
							muted
							playsInline
							preload="auto"
							className="w-full rounded-xl"
							src="https://massy-media.s3.eu-north-1.amazonaws.com/upbeatscompressed.mp4"
						/>
						<Image
							src={massy2}
							alt="Alliance Coaching"
							placeholder="blur"
							className="object-cover w-full rounded-xl mt-8"
						/>
						<div className="flex flex-col p-8 bg-gray-100 rounded-xl w-fit mt-8">
							<h3 className="font-bold text-3xl mb-4 tracking-tight">
								Conversion
							</h3>
							<p className="mb-4">
								Massy Media needed a streamlined, visually
								compelling site that not only showcased their
								portfolio but also guided visitors effortlessly
								towards booking sessions and enquiring about
								their services. Every element on the site was
								strategically placed to drive conversions. From
								prominently displayed call-to-action buttons to
								simplified contact forms that pop up at just the
								right moment, we ensured that booking a session
								was as simple as a few clicks.
							</p>
						</div>
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
							href="/alliance"
							className="overflow-hidden rounded-xl group">
							<div className="overflow-hidden rounded-xl w-fit h-fit">
								<Image
									src={alliance}
									alt="Alliance"
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
					</div>
				</div>
			</section>
			<Footer />
		</>
	);
}
