import Image from "next/image";
import Link from "next/link";
import hero from "@/public/hero1.png";

const Hero = () => {
	return (
		<section className="w-full h-full flex flex-col items-center justify-start px-8 pt-16 xl:pb-16 xl:px-32 overflow-hidden">
			<div className="max-w-7xl flex flex-col xl:flex-row justify-between h-full">
				<div className="flex flex-col items-center xl:items-start justify-center gap-10 z-10 w-full">
					<h1 className="font-bold text-4xl lg:text-6xl playfair text-center xl:text-left">
						Design, Develop,{" "}
						<span className="highlight text-black/80">Deploy</span>
					</h1>
					<p className="text-lg text-black/75 text-center xl:text-left w-full">
						Crafting digital experiences that elevate brand
						awareness, boost engagement, and increase revenue.
					</p>
					<Link
						href="/new-project"
						className="btn btn-wide bg-white border-2 border-gray-900 hover:bg-orange-400 hover:border-orange-400 hover:text-white hover:drop-shadow-lg transition-all ease-in-out duration-300 rounded-sm">
						Get Started
					</Link>
				</div>
				<div className="h-full xl:ml-32 overflow-hidden xl:overflow-visible">
					<Image
						src={hero}
						alt="Hero Image"
						height={1000}
						width={1000}
						className="h-full object-cover overflow-hidden xl:overflow-visible"
					/>
				</div>
			</div>
		</section>
	);
};

export default Hero;
