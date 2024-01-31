import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTA2 from "@/components/CTA2";
import Mailing from "@/components/Mailing";
import ExperienceCard from "@/components/ExperienceCard";

export default function Experience() {
	return (
		<>
			<Header />
			<div
				id="ourwork"
				className="flex flex-col items-center justify-center bg-white text-black px-8 py-16 xl:px-32">
				<h1 className="playfair text-4xl font-bold mb-6"></h1>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-7xl">
					<div>
						<ExperienceCard
							id={1}
							title="Resilient Intent Coaching"
							services={["Web Design", "Web Devlopment", "SEO"]}
						/>
					</div>
					<div>
						<ExperienceCard
							id={2}
							title="Alliance Coaching"
							services={["Web Development", "eCommerce"]}
						/>
					</div>
					<div>
						<ExperienceCard
							id={3}
							title="Ignite Coaching"
							services={["Web Design", "Web Development"]}
						/>
					</div>
					<div>
						<ExperienceCard
							id={4}
							title="Team CBC"
							services={["Web Development"]}
						/>
					</div>
					<div>
						<ExperienceCard
							id={5}
							title="Another Project"
							services={["Web Development"]}
						/>
					</div>
					<div>
						<ExperienceCard
							id={6}
							title="Another Project Again"
							services={["Web Development"]}
						/>
					</div>
				</div>
			</div>
			<CTA2 />
			<Mailing />
			<Footer />
		</>
	);
}
