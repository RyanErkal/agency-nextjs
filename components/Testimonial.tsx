import Image from "next/image";
import web2 from "@/public/web2.webp";

export default function Testimonial({
	name,
	position,
	description
}: {
	name: string;
	position: string;
	description: string;
}) {
	return (
		<div className="bg-gray-100  min-h-72 p-8 flex flex-col items-left justify-start rounded-xl">
			<p className="text-lg text-left text-black/80 mb-4">
				{description}
			</p>
			<div className="flex w-full justify-start items-center border-t border-base-content/5 pt-4">
				<Image
					src={web2}
					alt="avatar"
					width={60}
					height={60}
					className="rounded-full object-cover mr-4"
				/>
				<div>
					<h2 className="text-lg font-bold">{name}</h2>
					<h3 className="text-sm text-black/80">{position}</h3>
				</div>
			</div>
		</div>
	);
}
