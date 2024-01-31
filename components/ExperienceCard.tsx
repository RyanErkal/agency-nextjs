"use client";

import { Parallax } from "react-scroll-parallax";
import Image from "next/image";
import Link from "next/link";
import mock1 from "@/public/mock1.png";
import mock2 from "@/public/mock2.png";

export default function ExperienceCard({
	id,
	title,
	services
}: {
	id: number;
	title: string;
	services: string[];
}) {
	return (
		<Link
			href={`/project/${id}`}
			className="text-black flex flex-row items-start justify-between cursor-pointer h-[500px] relative">
			<div className="flex flex-col items-start justify-start p-8 w-full absolute inset-0 z-30">
				<h1 className="font-bold backdrop-blur-md bg-white bg-opacity-10 px-4 py-2 mb-2 text-md xl:text-xl w-fit rounded-sm">
					{title}
				</h1>
				{services.map((service) => {
					return (
						<h2
							key={service}
							className={`font-bold backdrop-blur-md bg-white bg-opacity-10 px-4 py-2 mb-2 text-xs xl:text-sm w-fit rounded-sm `}>
							{service}
						</h2>
					);
				})}
			</div>
			<Parallax speed={2} className="absolute right-0">
				<Image
					src={mock2}
					alt="Mockup Image"
					width={500}
					height={500}
					className="object-cover"
				/>
			</Parallax>
			<Parallax
				speed={5}
				className="absolute left-0 lg:pl-10 xl:pl-20 2xl:pl-36">
				<Image
					src={mock1}
					alt="Mockup Image"
					width={500}
					height={500}
					className="object-cover"
				/>
			</Parallax>
		</Link>
	);
}
