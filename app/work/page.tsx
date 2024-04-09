import React from "react";
import Header from "@/components/Header";
import ExperienceCard2 from "@/components/ExperienceCard2";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import alliance from "@/public/alliance.webp";
import ignite from "@/public/ignite.webp";
import resilient from "@/public/resilient.webp";
import voics from "@/public/voics.webp";
import { getSEOTags } from "@/libs/seo";

export const metadata = getSEOTags({
	title: "ReDesign | Our Work",
	canonicalUrlRelative: "/work"
});

export default function Work() {
	return (
		<>
			<Header />
			<section
				id="work"
				className="max-w-7xl flex flex-col items-center justify-center mx-auto text-black px-4 md:px-8 py-24">
				<h2 className="text-4xl lg:text-6xl font-bold w-full text-left mb-16">
					Some of our work
				</h2>
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 w-full max-w-7xl">
					<div className="flex flex-col gap-12 lg:gap-20">
						<ExperienceCard2
							id={"alliance"}
							title="Alliance Coaching"
							services={["Web Design", "Web Development", "SEO"]}
							image={alliance}
						/>
						<ExperienceCard2
							id={"voics"}
							title="Voics"
							services={["Web Design", "Web Development"]}
							image={voics}
						/>
					</div>
					<div className="flex flex-col gap-12 lg:gap-20">
						<ExperienceCard2
							id={"ignite"}
							title="Team Ignite"
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
							title="Resilient Intent"
							services={[
								"Web Design",
								"Web Development",
								"Branding",
								"Makreting"
							]}
							image={resilient}
						/>
					</div>
				</div>
			</section>
			<Contact />
			<Footer />
		</>
	);
}
