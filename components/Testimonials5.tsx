import Image from "next/image";
import joe from "@/public/joe.jpeg";
import cian from "@/public/cian.jpeg";
import dallen from "@/public/dallen.jpeg";
import dmac from "@/public/dmac.jpeg";
import mike from "@/public/mike.jpeg";

export default function Testimonials() {
	return (
		<section
			id="testimonials"
			className="max-w-7xl flex flex-col items-center justify-center mx-auto text-black px-4 md:px-8 py-16">
			<h2 className="w-full text-left text-5xl font-bold tracking-tight mb-12">
				What Our Clients Say
			</h2>
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl">
				<div className="flex flex-col gap-8">
					<div className="bg-gray-100 p-8 flex flex-col items-left justify-start rounded-xl">
						<p className="text-lg text-left text-black/80 mb-4">
							Working with the team was a{" "}
							<span className="font-semibold text-orange-400">
								game-changer
							</span>{" "}
							for our online presence. Their attention to detail
							was excellent. Very professional but fun to work
							with. They didn&apos;t just make a website they
							through how it would generate more leads and more
							clients.
						</p>
						<div className="flex w-full justify-start items-center border-t border-base-content/5 pt-4">
							<Image
								src={joe}
								alt="avatar"
								width={60}
								height={60}
								className="rounded-full object-cover mr-4"
							/>
							<div>
								<h2 className="text-lg font-bold">Joe Gann</h2>
								<h3 className="text-base text-black/80">
									Founder of Alliance Coaching
								</h3>
							</div>
						</div>
					</div>
					<div className="bg-gray-100 p-8 flex flex-col items-left justify-start rounded-xl">
						<p className="text-lg text-left text-black/80 mb-4">
							The website was{" "}
							<span className="font-semibold text-orange-400">
								clean, fresh and professional
							</span>{" "}
							looking. It performs great in terms of speed and SEO
							which we didnt have before with a previous web
							development agency. Would highly recommend the team
							here.
						</p>
						<div className="flex w-full justify-start items-center border-t border-base-content/5 pt-4">
							<Image
								src={dallen}
								alt="avatar"
								width={60}
								height={60}
								className="rounded-full object-cover mr-4"
							/>
							<div>
								<h2 className="text-lg font-bold">
									Darragh Allen
								</h2>
								<h3 className="text-base text-black/80">
									Founder of Resilient Intent
								</h3>
							</div>
						</div>
					</div>
					<div className="bg-gray-100 p-8 flex flex-col items-left justify-start rounded-xl">
						<p className="text-lg text-left text-black/80 mb-4">
							We&apos;ve been working with this web development
							team for a few months now and they have been{" "}
							<span className="font-semibold text-orange-400">
								easy to work with
							</span>
							. I&apos;m not super technical but they explained
							everything in a way that I could understand. They
							have been very responsive and have helped us to get
							our website up and running quickly.
						</p>
						<div className="flex w-full justify-start items-center border-t border-base-content/5 pt-4">
							<Image
								src={mike}
								alt="avatar"
								width={60}
								height={60}
								className="rounded-full object-cover mr-4"
							/>
							<div className="flex flex-col">
								<h2 className="text-lg font-bold">
									Mike Geary
								</h2>
								<h3 className="text-base text-black/80">
									Founder of Equalise Coaching
								</h3>
							</div>
						</div>
					</div>
				</div>
				<div className="flex flex-col gap-8 lg:pt-36">
					<div className="bg-gray-100 p-8 flex flex-col items-left justify-start rounded-xl">
						<p className="text-lg text-left text-black/80 mb-4">
							The team helped us flesh out our offer to serve more
							clients at scale. They{" "}
							<span className="font-semibold text-orange-400">
								exceeded expectations
							</span>{" "}
							by with both the design and the functionality of the
							site. Their understanding of web development trends
							and customer-focused approach has been a major
							factor in our success.
						</p>
						<div className="flex w-full justify-start items-center border-t border-base-content/5 pt-4">
							<Image
								src={cian}
								alt="avatar"
								width={60}
								height={60}
								className="rounded-full object-cover mr-4"
							/>
							<div>
								<h2 className="text-lg font-bold">
									Cian O&apos;Brien
								</h2>
								<h3 className="text-base text-black/80">
									Founder of Team CBC
								</h3>
							</div>
						</div>
					</div>
					<div className="bg-gray-100 p-8 flex flex-col items-left justify-start rounded-xl">
						<p className="text-lg text-left text-black/80 mb-4">
							This web development agency has been great to work
							with. They redesigned our old website into a clean,
							responsive and functional one. Their attention to
							user experience and SEO has{" "}
							<span className="font-semibold text-orange-400">
								dramatically increased our lead generation
							</span>
							.
						</p>
						<div className="flex w-full justify-start items-center border-t border-base-content/5 pt-4">
							<Image
								src={dmac}
								alt="avatar"
								width={60}
								height={60}
								className="rounded-full object-cover mr-4"
							/>
							<div>
								<h2 className="text-lg font-bold">
									Darragh MacNamara
								</h2>
								<h3 className="text-base text-black/80">
									Founder of Team Ignite
								</h3>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
