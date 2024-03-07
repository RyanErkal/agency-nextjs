"use client";

import Image from "next/image";
import Link from "next/link";

export default function ExperienceCard({
	id,
	title,
	description,
	img
}: {
	id: string;
	title: string;
	description: string;
	img: any;
}) {
	return (
		<Link
			href={`/${id}`}
			className="text-black flex flex-col items-start justify-center cursor-pointer group">
			<div className="w-full h-auto overflow-hidden rounded-xl">
				<Image
					src={img}
					alt="Mockup Image"
					width={500}
					height={500}
					className="w-full object-cover group-hover:scale-105 transition-all ease-in-out duration-300 rounded-xl"
				/>
			</div>
			<div className="flex flex-col items-start justify-center text-left w-full mt-8">
				<h2 className="link transition-all ease-in-out duration-300 font-bold text-lg mb-4">
					{title}
				</h2>
				<h3 className="text-black/80">{description}</h3>
			</div>
		</Link>
	);
}
