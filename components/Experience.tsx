import ExperienceCard from "./ExperienceCard";

export default function Experience() {
	return (
		<div
			id="ourwork"
			className="flex flex-col items-center justify-center bg-white text-black px-8 py-8 xl:px-32">
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
			</div>
			<div className="w-full">
				<div className="w-full bg-white mt-8 rounded-lg flex items-center justify-center">
					<a
						href="/projects"
						className="btn btn-wide bg-white border-2 border-gray-900 hover:bg-orange-400 hover:border-orange-400 hover:text-white hover:drop-shadow-lg transition-all ease-in-out duration-300 rounded-sm">
						All Projects
					</a>
				</div>
			</div>
		</div>
	);
}
