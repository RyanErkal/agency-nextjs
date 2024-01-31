import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTA2 from "@/components/CTA2";
import Mailing from "@/components/Mailing";

export default function Project({
	params
}: {
	params: {
		id: any;
	};
}) {
	return (
		<>
			<Header />
			<div className="flex flex-col items-center justify-center bg-white text-black px-8 py-16 xl:px-32">
				<h1 className="playfair text-4xl font-bold mb-6">
					Project {params.id}
				</h1>
			</div>
			<CTA2 />
			<Mailing />
			<Footer />
		</>
	);
}
