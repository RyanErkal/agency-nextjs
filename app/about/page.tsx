import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function About() {
	return (
		<>
			<Header />
			<section
				id="work"
				className="max-w-7xl flex flex-col items-center justify-center mx-auto text-black px-4 md:px-8 py-24">
				<h2 className="text-4xl lg:text-6xl font-bold w-full text-left mb-16">
					Get to know us
				</h2>
			</section>
			<Footer />
		</>
	);
}
