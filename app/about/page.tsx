import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import { getSEOTags } from "@/libs/seo";
import Image from "next/image";
import stock3 from "@/public/stock3.webp";
import stock4 from "@/public/stock4.webp";

export const metadata = getSEOTags({
	title: "ReDesign | About",
	canonicalUrlRelative: "/about"
});

export default function About() {
	return (
		<>
			<Header />
			<section
				id="work"
				className="max-w-7xl flex flex-col items-center justify-center mx-auto text-black px-4 md:px-8 pt-24">
				<h2 className="text-4xl lg:text-6xl font-bold w-full text-left mb-16">
					Get to know us
				</h2>
				<h3 className="text-2xl lg:text-4xl font-bold w-full text-left mb-8">
					Our mission is to create beautiful, functional websites for
					our clients that drive results.
				</h3>
				<p className="text-lg lg:text-xl w-full text-left mb-12">
					We are a team of designers and developers that are
					passionate about design and development. We believe that a
					website is more than just a digital presence, it is an
					extension of your brand and a tool to drive results. Our
					mission is to create websites that are not only visually
					stunning, but also user-friendly and optimized for
					performance. We work closely with our clients to understand
					their goals and create a website that meets their needs and
					exceeds their expectations.
				</p>
				<video
					autoPlay
					loop
					muted
					playsInline
					src="https://redesign-media.s3.eu-north-1.amazonaws.com/redesigncompressed.mp4"
					className="w-full h-full rounded-xl mb-24"
				/>
				<h3 className="text-2xl lg:text-4xl font-bold w-full text-left mb-8">
					Design is not just what it looks and feels like.
				</h3>
				<p className="text-lg lg:text-xl w-full text-left mb-12">
					Design is how it works. We believe that good design is more
					than just aesthetics, it is about creating a seamless user
					experience that is intuitive and easy to use. We take a
					human-centered approach to design, focusing on the needs and
					goals of the end user. Our websites are designed with the
					user in mind, ensuring that they are easy to navigate,
					accessible, and engaging. We believe that good design is
					essential to the success of a website and we strive to
					create websites that are not only visually stunning, but
					also functional and user-friendly.
				</p>
				<div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4 mb-24">
					<Image
						src={stock4}
						alt="Stock Image"
						placeholder="blur"
						className="w-full rounded-xl"
					/>
					<Image
						src={stock3}
						alt="Stock Image"
						placeholder="blur"
						className="w-full rounded-xl"
					/>
				</div>
				<h3 className="text-2xl lg:text-4xl font-bold w-full text-left mb-8">
					Not just a pretty face.
				</h3>
				<p className="text-lg lg:text-xl w-full text-left mb-12">
					We understand that a website&apos;s success is not solely
					measured by its aesthetic appeal or technical prowess; it's
					also about its ability to generate tangible results for your
					business. That&apos;s why we are relentless in our pursuit
					of strategies that drive revenue and maximize ROI.
					<br /> <br />
					Our approach to revenue generation is rooted in a deep
					understanding of your business objectives and target
					audience. We conduct thorough research and analysis to
					identify opportunities for monetization and conversion
					optimization. Whether it&apos;s through strategic placement
					of calls-to-action, streamlined checkout processes, or
					personalized user experiences, we implement tactics designed
					to turn visitors into customers and browsers into buyers.
				</p>
				{/* <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4">
					<Image
						src={stock4}
						alt="Stock Image"
						placeholder="blur"
						className="w-full rounded-xl"
					/>
					<Image
						src={stock3}
						alt="Stock Image"
						placeholder="blur"
						className="w-full rounded-xl"
					/>
				</div> */}
			</section>
			<Contact />
			<Footer />
		</>
	);
}
