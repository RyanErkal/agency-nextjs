import React from "react";
import Image from "next/image";
import alliance1 from "@/public/logos/alliance1.webp";
import ignite from "@/public/logos/ignite.webp";
import resilient from "@/public/logos/resilient.webp";
import massy from "@/public/massy.png";

export default function LogoCloud() {
	return (
		<div className="bg-white py-4">
			<div className="mx-auto max-w-7xl px-8">
				<h2 className="text-center text-lg font-semibold leading-8 text-black">
					Trusted by industry experts
				</h2>
				<div className="mx-auto max-w-7xl flex justify-center items-center flex-wrap gap-10">
					<Image
						className="object-contain"
						src={alliance1}
						alt="Alliance Logo"
						width={200}
						height={200}
					/>
					<Image
						className="object-contain"
						src={ignite}
						alt="Ignite Logo"
						width={200}
						height={200}
					/>
					<Image
						className="object-contain"
						src={resilient}
						alt="Resilient Logo"
						width={150}
						height={150}
					/>
					<Image
						className="object-contain"
						src={massy}
						alt="Voics Logo"
						width={200}
						height={200}
					/>
				</div>
			</div>
		</div>
	);
}
