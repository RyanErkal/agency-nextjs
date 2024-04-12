import React from "react";
import Header from "@/components/Header";
import ExperienceCard2 from "@/components/ExperienceCard2";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import alliance from "@/public/alliance.webp";
import ignite from "@/public/ignite.webp";
import resilient from "@/public/resilient.webp";
import voics from "@/public/voics.webp";
import massy from "@/public/massy.webp";
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
			</section>
			<Contact />
			<Footer />
		</>
	);
}
