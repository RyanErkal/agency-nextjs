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
			className="max-w-7xl flex flex-col items-center justify-center mx-auto text-black px-4 md:px-8 py-24">
			<h2 className="w-full text-left text-5xl font-bold tracking-tight mb-12">
				What Our Clients Say
			</h2>
			<div className="grid grid-cols-1 xl:grid-cols-2 gap-8 max-w-7xl">
				<div className="xl:row-span-2 xl:row-start-1">
					<div className="bg-gray-100  min-h-72 p-8 flex flex-col items-left justify-start rounded-xl">
						<p className="text-lg text-left text-black/80 mb-4">
							Working with this team was a{" "}
							<span className="font-semibold text-orange-400">
								game-changer
							</span>{" "}
							for our online presence. They didn&apos;t just
							design a website; they crafted an engaging digital
							experience that has significantly boosted our
							customer engagement and sales. Their attention to
							detail and innovative approach sets them apart.
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
				</div>
				<div className="xl:row-span-2 xl:row-start-2">
					<div className="bg-gray-100  min-h-72 p-8 flex flex-col items-left justify-start rounded-xl">
						<p className="text-lg text-left text-black/80 mb-4">
							This agency played a crucial role in the expansion
							of our online services. They{" "}
							<span className="font-semibold text-orange-400">
								exceeded expectations
							</span>{" "}
							by providing innovative solutions and proactive
							support. Their understanding of web development
							trends and customer-focused approach has been a
							major factor in our success.
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
				</div>
				<div className="xl:row-span-2">
					<div className="bg-gray-100  min-h-72 p-8 flex flex-col items-left justify-start rounded-xl">
						<p className="text-lg text-left text-black/80 mb-4">
							The creativity and technical expertise of this web
							development agency are second to none. They
							delivered a stunning website that not only looks
							great but also performs exceptionally in terms of
							speed and SEO. Our web traffic and customer{" "}
							<span className="font-semibold text-orange-400">
								engagement has skyrocketed
							</span>{" "}
							since the launch.
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
				</div>
				<div className="xl:row-span-2">
					<div className="bg-gray-100  min-h-72 p-8 flex flex-col items-left justify-start rounded-xl">
						<p className="text-lg text-left text-black/80 mb-4">
							This web development agency is a true partner in our
							business growth. They re-engineered our old website
							into a modern, responsive, and highly effective tool
							for our marketing efforts. Their attention to user
							experience and SEO has{" "}
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
				<div className="xl:row-span-2">
					<div className="bg-gray-100  min-h-72 p-8 flex flex-col items-left justify-start rounded-xl">
						<p className="text-lg text-left text-black/80 mb-4">
							This agency played a{" "}
							<span className="font-semibold text-orange-400">
								crucial role
							</span>{" "}
							in the expansion of our online services. They
							didn&apos;t just meet our expectations; they
							exceeded them by providing innovative solutions and
							proactive support. Their understanding of web
							development trends and customer-focused approach has
							been a major factor in our success.
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
			</div>
		</section>
	);
}
