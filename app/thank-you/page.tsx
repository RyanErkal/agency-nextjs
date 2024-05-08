import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Page() {
	return (
		<>
			<Header />
			<section className="min-h-screen flex flex-col items-center justify-center bg-white text-black max-w-7xl px-4 md:px-8 py-16 mx-auto">
				<h2 className="text-5xl font-bold mb-6 tracking-tight">
					Thank you for your submission!
				</h2>
				<p className="text-xl mb-6">
					We will get back to you as soon as possible.
				</p>
			</section>
			<Footer />
		</>
	);
}
