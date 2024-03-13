"use client";

import Image from "next/image";
import Link from "next/link";

export default function ExperienceCard({
	id,
	title,
	description,
	services,
	img
}: {
	id: string;
	title: string;
	description: string;
	services: string[];
	img: any;
}) {
	return (
		<Link
			href={`/${id}`}
			className="relative text-black flex flex-col items-start justify-center cursor-pointer group">
			<div className="w-full h-auto overflow-hidden rounded-xl">
				<Image
					src={img}
					alt="Mockup Image"
					width={500}
					height={500}
					className="w-full object-cover group-hover:scale-105 transition-all ease-in-out duration-300 rounded-xl z-0"
				/>
			</div>
			<div className="flex flex-col items-start justify-center text-left w-full mt-8">
				<h2 className="link transition-all ease-in-out duration-300 font-bold text-lg mb-4">
					{title}
				</h2>
				<h3 className="text-black/80">{description}</h3>
			</div>
			<div className="absolute top-0 left-0 p-4 flex flex-col justify-start items-start gap-2 z-20 ">
				{services.map((service, i) => (
					<h3 className="font-semibold bg-white/25 backdrop-blur-sm text-black px-4 py-2 rounded-full opacity-0 group-hover:opacity-100 transition-all ease-in-out duration-300">
						{service}
					</h3>
				))}
			</div>
		</Link>
	);
}
