import Link from "next/link";
import ExperienceCard from "./ExperienceCard";
import alliance from "@/public/alliance.webp";
import ignite from "@/public/coaching3.webp";
import resilient1 from "@/public/resilient1.png";
import voics from "@/public/voics.png";

export default function Experience() {
	return (
		<section
			id="work"
			className="max-w-7xl flex flex-col items-center justify-center mx-auto text-black px-8 py-24">
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
			<div className="w-full">
				<div className="w-full bg-white mt-16 rounded-lg flex items-center justify-center">
					<Link
						href="/work"
						className="btn btn-wide bg-white border-2 border-gray-900 hover:bg-orange-400 hover:border-orange-400 hover:text-white hover:drop-shadow-lg transition-all ease-in-out duration-300 rounded-sm">
						All Our Work
					</Link>
				</div>
			</div>
		</section>
	);
}
