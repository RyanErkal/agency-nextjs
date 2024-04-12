import Link from "next/link";

const Hero = () => {
	return (
		<section className="w-full flex flex-col items-center justify-start">
			<div className="max-w-7xl px-4 md:px-8 py-24">
				<div className="flex flex-col items-center justify-center gap-12 w-full">
					<h1 className="font-bold text-4xl lg:text-6xl tracking-tight text-center xl:text-left">
						Design, Develop, Deploy
					</h1>
					<p className="text-lg text-center ">
						Crafting digital experiences that elevate brand
						awareness, increase authority, and drive revenue.
					</p>
					<div className="flex items-center gap-2">
						<Link
							href="/#work"
							className="btn px-6 bg-white border-2 border-gray-900 hover:bg-orange-400 hover:border-orange-400 hover:text-white transition-all ease-in-out duration-300 hover:drop-shadow-lg rounded-full">
							View Our Work
						</Link>

						<Link href="/#testimonials" className="link mx-6">
							Meet Our Clients
						</Link>
					</div>
					<video
						autoPlay
						loop
						muted
						playsInline
						preload="auto"
						src="https://redesign-media.s3.eu-north-1.amazonaws.com/redesignmovnew.mp4"
						className="w-full h-full rounded-xl"
					/>
				</div>
			</div>
		</section>
	);
};

export default Hero;
