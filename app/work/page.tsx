import React from "react";
import Header from "@/components/Header";
import ExperienceCard from "@/components/ExperienceCard";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import alliance from "@/public/alliance.webp";
import ignite from "@/public/ignite.webp";
import resilient from "@/public/resilient.webp";
import voics from "@/public/voics.webp";

export default function Work() {
	return (
		<>
			<Header />
			<section
				id="work"
				className="max-w-7xl flex flex-col items-center justify-center mx-auto text-black px-8 py-24">
				<h2 className="text-4xl lg:text-6xl font-bold w-full text-left mb-16">
					Some of our work
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-16 w-full max-w-7xl">
					<div className="flex flex-col gap-16">
						<ExperienceCard
							id={"alliance"}
							title="Alliance Coaching"
							description="Website & SEO for an online coaching brand"
							img={alliance}
						/>

						<ExperienceCard
							id={"voics"}
							title="Voics"
							description="Podcast agency website & SEO"
							img={voics}
						/>
					</div>
					<div className="flex flex-col gap-16">
						<ExperienceCard
							id={"ignite"}
							title="Team Ignite"
							description="Bodybuilding coaching brand website & marketing"
							img={ignite}
						/>
						<ExperienceCard
							id={"resilient"}
							title="Resilient Intent"
							description="An educational platform for fitness professionals"
							img={resilient}
						/>
					</div>
				</div>
			</section>
			<Contact />
			<Footer />
		</>
	);
}
