import Header from "@/components/Header";
import Hero from "@/components/Hero";
import InfiniteCarousel from "@/components/InfiniteCarousel";
import Experience from "@/components/Experience";
import TestimonialsParallax from "@/components/TestimonialsParallax";
import Services from "@/components/Services";
import CTA2 from "@/components/CTA2";
import Mailing from "@/components/Mailing";
import Footer from "@/components/Footer";

export default function Home() {
	return (
		<>
			<header className="max-h-screen xl:h-screen">
				<Header />
				<Hero />
			</header>
			<InfiniteCarousel />
			<Experience />
			<TestimonialsParallax />
			<Services />
			<CTA2 />
			<Mailing />
			<Footer />
		</>
	);
}
