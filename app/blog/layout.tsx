import HeaderBlog from "./_assets/components/HeaderBlog";
import Footer from "@/components/Footer";

export default async function LayoutBlog({ children }: { children: any }) {
	return (
		<div>
			<HeaderBlog />

			<main className="flex flex-col items-center justify-center bg-white text-black px-8 py-32 xl:px-32">
				{children}
			</main>

			<div className="h-24" />

			<Footer />
		</div>
	);
}
