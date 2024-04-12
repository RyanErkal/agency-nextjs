import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function WorkCard({ id, image, title, name, services }: any) {
	return (
		<Link href={`/${id}`} className="relative group w-full cursor-pointer">
			<div className="overflow-hidden rounded-3xl w-full ">
				<Image
					src={image}
					alt="events"
					height={900}
					width={600}
					className="w-full object-cover group-hover:scale-105 transition-all duration-300 ease-in-out rounded-3xl"
				/>
			</div>
			<div className="absolute top-[-1px] left-[-1px] flex items-end justify-end transition-all duration-200 ease-in-out">
				<div className="relative text-xs lg:text-sm font-bold h-fit px-3 lg:px-4 py-1 lg:py-2 bg-white rounded-br-2xl lg:transform lg:translate-y-[-70px] lg:group-hover:translate-y-[0px] transition-all ease-in-out duration-300 flex gap-2 ">
					<p className="bg-gray-100 text-black px-2 lg:px-4 py-1.5 lg:py-3 mb-2 text-left rounded-xl lg:opacity-0 lg:group-hover:opacity-100 transition-all ease-in-out duration-200">
						{services[0]}
					</p>
					<p className="bg-gray-100 text-black px-2 lg:px-4 py-1.5 lg:py-3 mb-2 text-left rounded-xl lg:opacity-0 lg:group-hover:opacity-100 transition-all ease-in-out duration-200">
						{services[1]}
					</p>
					{services.length > 2 && (
						<p className="bg-gray-100 text-black px-2 lg:px-4 py-1.5 lg:py-3 mb-2 text-left rounded-xl lg:opacity-0 lg:group-hover:opacity-100 transition-all ease-in-out duration-200">
							+{services.length - 2}
						</p>
					)}
					<svg
						className="absolute w-10 h-10 lg:w-12 lg:h-12 text-white fill-current left-[0px] bottom-[1px] z-50  transform-gpu rotate-270 scale-x-[-1] translate-y-[100%]"
						version="1.1"
						xmlns="http://www.w3.org/2000/svg"
						fill="currentColor"
						viewBox="0 0 100 100">
						<path d="M98.1 0h1.9v51.9h-1.9c0-27.6-22.4-50-50-50V0h50z"></path>
					</svg>
					<svg
						className="absolute w-10 h-10 lg:w-12 lg:h-12 text-white fill-current right-[1px] top-[-1px] z-50 transform-gpu rotate-180 scale-y-[-1] translate-x-[100%]"
						version="1.1"
						xmlns="http://www.w3.org/2000/svg"
						fill="currentColor"
						viewBox="0 0 100 100">
						<path d="M98.1 0h1.9v51.9h-1.9c0-27.6-22.4-50-50-50V0h50z"></path>
					</svg>
				</div>
			</div>
			{/* <div className="absolute bottom-[-1px] right-[-1px] flex items-end justify-end transition-all duration-200 ease-in-out">
				<div className="relative text-lg l:text-xl font-bold h-fit px-3 lg:px-4 py-1 lg:py-2 bg-white font-gray-950 rounded-tl-2xl lg:transform lg:translate-y-[80px] lg:group-hover:translate-y-[0px] transition-all ease-in-out duration-300">
					<p className="bg-gray-100 text-black px-3 lg:px-4 py-1.5 lg:py-3 mt-2 text-left rounded-xl lg:opacity-0 lg:group-hover:opacity-100 transition-all ease-in-out duration-200">
						{title}
					</p>
					<svg
						className="absolute w-10 h-10 lg:w-12 lg:h-12 text-white fill-current left-[1px] bottom-[-1px] z-50  transform-gpu rotate-180 scale-x-[-1] translate-x-[-100%]"
						version="1.1"
						xmlns="http://www.w3.org/2000/svg"
						fill="currentColor"
						viewBox="0 0 100 100">
						<path d="M98.1 0h1.9v51.9h-1.9c0-27.6-22.4-50-50-50V0h50z"></path>
					</svg>
					<svg
						className="absolute w-10 h-10 lg:w-12 lg:h-12 text-white fill-current right-[0px] top-[1px] z-50 transform-gpu rotate-180 scale-x-[-1] translate-y-[-100%]"
						version="1.1"
						xmlns="http://www.w3.org/2000/svg"
						fill="currentColor"
						viewBox="0 0 100 100">
						<path d="M98.1 0h1.9v51.9h-1.9c0-27.6-22.4-50-50-50V0h50z"></path>
					</svg>
				</div>
			</div> */}
			<div className="flex flex-col">
				<h3 className="text-sm font-bold text-black/80 mt-4 lg:mt-6">
					2024 - {name}{" "}
				</h3>
				<h2 className="text-xl lg:text-2xl font-bold text-gray-950 mt-2 lg:mt-4">
					{title}
				</h2>
			</div>
		</Link>
	);
}
