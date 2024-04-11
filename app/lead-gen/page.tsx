import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Page() {
	return (
		<div className="h-screen flex flex-col justify-between">
			<Header />
			<section className="w-full max-w-7xl mx-auto px-4 md:px-8 py-16 flex flex-col items-center">
				<h2 className="text-5xl font-bold tracking-tight">
					Coming Soon...
				</h2>
			</section>
			<Footer />
		</div>
	);
}
