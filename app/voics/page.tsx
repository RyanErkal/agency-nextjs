import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import alliance from "@/public/alliance/alliance.webp";
import vmock1 from "@/public/voics/vmock1.webp";
import vmock2 from "@/public/voics/vmock2.webp";
import v1 from "@/public/voics/v1.webp";
import v2 from "@/public/voics/v2.webp";
import v3 from "@/public/voics/v3.webp";
import ignite from "@/public/ignite.webp";
import voics from "@/public/voics.webp";
import resilient from "@/public/resilient.webp";

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
				</div>
				<h1 className="font-bold text-6xl w-full text-left mb-12 tracking-tight">
					Voics
				</h1>
				<h2 className="font-semibold text-2xl w-full text-left tracking-tight mb-12">
					A B2B podcast agency.
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
					<div className="flex flex-col">
						<Image
							src={voics}
							alt="Alliance Coaching"
							placeholder="blur"
							className="object-cover w-full rounded-xl"
						/>
						<Image
							src={vmock1}
							alt="Alliance Coaching"
							className="object-cover w-full rounded-xl mt-8"
						/>
						<div className="flex flex-col p-8 bg-gray-100 rounded-xl w-fit mt-8">
							<h3 className="font-bold text-3xl mb-4 tracking-tight">
								Journey
							</h3>
							<p className="mb-4">
								Creating the client journey was a key part of
								the project. We wanted to make sure that the
								website was easy to navigate and that the user
								experience was seamless. We created a clear and
								concise user journey that made it easy for
								visitors to find the information they needed. We
								also made sure that the website was optimized
								for mobile devices to ensure that it looked
								great on all screen sizes.
							</p>
						</div>
						<Image
							src={v1}
							alt="Alliance Coaching"
							placeholder="blur"
							className="object-cover w-full rounded-xl mt-8"
						/>
						<div className="flex flex-col p-8 bg-gray-100 rounded-xl w-fit mt-8">
							<h3 className="font-bold text-3xl mb-4 tracking-tight">
								Attention
							</h3>
							<p className="mb-4">
								Commanding attention was a key part of the
								design process. We wanted to make sure that the
								website was engaging and that it captured the
								attention of visitors. By aligning content
								presentation with user intent, we ensure that
								visitors not only stay longer but are also
								motivated to take action, whether it&apos;s
								subscribing to a newsletter, downloading an
								episode, or sharing content on social media.
							</p>
						</div>
					</div>
					<div className="flex flex-col ">
						<Image
							src={v3}
							alt="Alliance Coaching"
							placeholder="blur"
							className="object-cover w-full rounded-xl"
						/>
						<div className="flex flex-col p-8 bg-gray-100 rounded-xl w-fit mt-8">
							<h3 className="font-bold text-3xl mb-4 tracking-tight">
								Expertise
							</h3>
							<p className="mb-4">
								We designed a website that was clean, modern,
								and easy to navigate. We wanted to convery
								expertise and authority in the industry. We used
								a combination of high-quality images and
								engaging copy to showcase their services and
								attract new clients. We also optimized the
								website for search engines to help improve their
								online visibility.
							</p>
						</div>

						<Image
							src={v2}
							alt="Alliance Coaching"
							placeholder="blur"
							className="object-cover w-full rounded-xl mt-8"
						/>
						<Image
							src={vmock2}
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
