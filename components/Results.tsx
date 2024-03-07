import Image from "next/image";
import stripe1 from "@/public/stripe/stripe1.png";
import stripe2 from "@/public/stripe/stripe2.png";
import stripe3 from "@/public/stripe/stripe3.png";
import stripe4 from "@/public/stripe/stripe4.png";
import stripe5 from "@/public/stripe/stripe5.png";
import stripe6 from "@/public/stripe/stripe6.png";
import stripe7 from "@/public/stripe/stripe7.png";
import stripe8 from "@/public/stripe/stripe8.png";

const stripeImages = [
	{ id: 1, image: stripe1 },
	{ id: 2, image: stripe2 },
	{ id: 3, image: stripe3 },
	{ id: 4, image: stripe4 },
	{ id: 5, image: stripe5 },
	{ id: 6, image: stripe6 },
	{ id: 7, image: stripe7 },
	{ id: 8, image: stripe8 }
];

export default function Results() {
	return (
		<section
			id="results"
			className="max-w-7xl flex flex-col items-center justify-center mx-auto text-black px-8 py-24">
			<h2 className="w-full text-left text-5xl font-bold tracking-tight mb-12">
				Let the numbers talk
			</h2>
			<div className="grid grid-cols-1 md:grid-cols-4">
				{stripeImages.map((stripe) => (
					<div
						key={stripe.id}
						className="flex items-center justify-center">
						<Image
							src={stripe.image}
							alt="Stripe"
							width={300}
							height={150}
						/>
					</div>
				))}
			</div>
		</section>
	);
}
