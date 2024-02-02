"use client";

import Testimonial from "./Testimonial";
import { Parallax } from "react-scroll-parallax";

export default function Testimonials() {
	return (
		<div
			id="testimonials"
			className="flex flex-col items-center justify-center bg-white text-black px-8 py-32 xl:px-32 overflow-hidden">
			<h1 className="playfair text-4xl font-bold mb-6">
				What Our Clients Say
			</h1>
			<div className="grid grid-cols-1 xl:grid-cols-2 gap-8 max-w-7xl">
				<div className="xl:row-span-2 xl:row-start-1">
					<Parallax
						translateX={[-25, 0, "easeOutExpo"]}
						translateY={[50, 0, "easeOutExpo"]}>
						<Testimonial
							title="Game Changer"
							name="Joe Gann"
							position="Founder of Alliance Coaching"
							description="Working with this team was a game-changer for our online presence. They didn't just design a website; they crafted an engaging digital experience that has significantly boosted our customer engagement and sales. Their attention to detail and innovative approach sets them apart."
						/>
					</Parallax>
				</div>
				<div className="xl:row-span-2 xl:row-start-2">
					<Parallax
						translateX={[25, 0, "easeOutExpo"]}
						translateY={[50, 0, "easeOutExpo"]}>
						<Testimonial
							title="Exceeded Expectations"
							name="Cian O'Brien"
							position="Founder of Team CBC"
							description="This agency played a crucial role in the expansion of our online services. They didn't just meet our expectations; they exceeded them by providing innovative solutions and proactive support. Their understanding of web development trends and customer-focused approach has been a major factor in our success."
						/>
					</Parallax>
				</div>
				<div className="xl:row-span-2">
					<Parallax
						translateX={[-25, 0, "easeOutExpo"]}
						translateY={[50, 0, "easeOutExpo"]}>
						<Testimonial
							title="Engagement Skyrocketed"
							name="Daragh Allen"
							position="Founder of Resilient Intent"
							description="The creativity and technical expertise of this web development agency are second to none. They delivered a stunning website that not only looks great but also performs exceptionally in terms of speed and SEO. Our web traffic and customer engagement have skyrocketed since the launch."
						/>
					</Parallax>
				</div>
				<div className="xl:row-span-2">
					<Parallax
						translateX={[25, 0, "easeOutExpo"]}
						translateY={[50, 0, "easeOutExpo"]}>
						<Testimonial
							title="Outstanding"
							name="Darragh MacNamara"
							position="Founder of Ignite Coaching"
							description="This web development agency is a true partner in our business growth. They re-engineered our old website into a modern, responsive, and highly effective tool for our marketing efforts. Their attention to user experience and SEO has dramatically increased our web traffic and lead generation."
						/>
					</Parallax>
				</div>
				<div className="xl:row-span-2">
					<Parallax
						translateX={[-25, 0, "easeOutExpo"]}
						translateY={[50, 0, "easeOutExpo"]}>
						<Testimonial
							title="Crucial"
							name="Ross Byrne"
							position="Head Coach at ProCoach"
							description="This agency played a crucial role in the expansion of our online services. They didn't just meet our expectations; they exceeded them by providing innovative solutions and proactive support. Their understanding of web development trends and customer-focused approach has been a major factor in our success."
						/>
					</Parallax>
				</div>
			</div>
		</div>
	);
}
