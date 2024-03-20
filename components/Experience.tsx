import Link from "next/link";
import ExperienceCard from "./ExperienceCard";
import alliance from "@/public/alliance.webp";
import ignite from "@/public/ignite.webp";
import resilient from "@/public/resilient.webp";
import voics from "@/public/voics.webp";

export default function Experience() {
	return (
		<section
			id="work"
			className="max-w-7xl flex flex-col items-center justify-center mx-auto text-black px-4 md:px-8 py-24">
			<div className="grid grid-cols-1 md:grid-cols-2 gap-16 w-full max-w-7xl">
				<div className="flex flex-col gap-16">
					<ExperienceCard
						id={"alliance"}
						title="Alliance Coaching"
						description="Website & SEO for an online coaching brand"
						services={["Web Design", "Web Development", "SEO"]}
						img={alliance}
					/>

					<ExperienceCard
						id={"voics"}
						title="Voics"
						description="Podcast agency website & SEO"
						services={["Web Design", "Web Development"]}
						img={voics}
					/>
				</div>
				<div className="flex flex-col gap-16">
					<ExperienceCard
						id={"ignite"}
						title="Team Ignite"
						description="Bodybuilding coaching brand website & marketing"
						services={[
							"Web Design",
							"Web Development",
							"SEO",
							"Lead Generation",
							"Marketing"
						]}
						img={ignite}
					/>
					<ExperienceCard
						id={"resilient"}
						title="Resilient Intent"
						description="An educational platform for fitness professionals"
						services={[
							"Web Design",
							"Web Development",
							"Branding",
							"Makreting"
						]}
						img={resilient}
					/>
				</div>
			</div>
			<div className="w-full">
				<div className="w-full bg-white mt-16 rounded-lg flex items-center justify-center">
					<Link
						href="/work"
						className="btn btn-wide bg-white border-2 border-gray-900 hover:bg-orange-400 hover:border-orange-400 hover:text-white hover:drop-shadow-lg transition-all ease-in-out duration-300 rounded-full">
						All Our Work
					</Link>
				</div>
			</div>
		</section>
	);
}
