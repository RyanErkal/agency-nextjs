import Link from "next/link";
import ExperienceCard2 from "./ExperienceCard2";
import alliance from "@/public/alliance.webp";
import ignite from "@/public/ignite.webp";
import resilient from "@/public/resilient.webp";
import voics from "@/public/voics.webp";
import massy from "@/public/massy.webp";

export default function Experience() {
	return (
		<section
			id="work"
			className="max-w-7xl flex flex-col items-center justify-center mx-auto text-black px-4 md:px-8 py-24">
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 w-full max-w-7xl">
				<div className="flex flex-col gap-12 lg:gap-20">
					<ExperienceCard2
						id={"massy-media"}
						name="Massy Media"
						title="A portfolio for a media company"
						services={[
							"Web Design",
							"Web Development",
							"Branding",
							"SEO"
						]}
						image={massy}
					/>
					<ExperienceCard2
						id={"alliance"}
						name="Alliance Coaching"
						title="Crafting a digital presence for a coaching business"
						services={["Web Design", "Web Development", "SEO"]}
						image={alliance}
					/>
					<ExperienceCard2
						id={"voics"}
						name="Voics"
						title="A case study for a B2B Podcast Agency"
						services={["Web Design", "Web Development"]}
						image={voics}
					/>
				</div>
				<div className="flex flex-col gap-12 lg:gap-20">
					<ExperienceCard2
						id={"ignite"}
						name="Team Ignite"
						title="Creating a digital presence for a bodybuilding team"
						services={[
							"Web Design",
							"Web Development",
							"SEO",
							"Lead Generation",
							"Marketing"
						]}
						image={ignite}
					/>
					<ExperienceCard2
						id={"resilient"}
						name="Resilient Intent"
						title="Building a place to educate and inspire"
						services={[
							"Web Design",
							"Web Development",
							"Branding",
							"Marketing"
						]}
						image={resilient}
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
