"use client";

import Testimonial from "./Testimonial";

export default function Testimonials() {
	return (
		<section
			id="testimonials"
			className="max-w-7xl flex flex-col items-center justify-center mx-auto text-black px-8 py-24">
			<h2 className="w-full text-left text-5xl font-bold mb-12">
				What Our Clients Say
			</h2>
			<div className="grid grid-cols-1 xl:grid-cols-2 gap-8 max-w-7xl">
				<div className="xl:row-span-2 xl:row-start-1">
					<Testimonial
						title="Game Changer"
						name="Joe Gann"
						position="Founder of Alliance Coaching"
						description="Working with this team was a game-changer for our online presence. They didn't just design a website; they crafted an engaging digital experience that has significantly boosted our customer engagement and sales. Their attention to detail and innovative approach sets them apart."
					/>
				</div>
				<div className="xl:row-span-2 xl:row-start-2">
					<Testimonial
						title="Exceeded Expectations"
						name="Cian O'Brien"
						position="Founder of Team CBC"
						description="This agency played a crucial role in the expansion of our online services. They didn't just meet our expectations; they exceeded them by providing innovative solutions and proactive support. Their understanding of web development trends and customer-focused approach has been a major factor in our success."
					/>
				</div>
				<div className="xl:row-span-2">
					<Testimonial
						title="Engagement Skyrocketed"
						name="Daragh Allen"
						position="Founder of Resilient Intent"
						description="The creativity and technical expertise of this web development agency are second to none. They delivered a stunning website that not only looks great but also performs exceptionally in terms of speed and SEO. Our web traffic and customer engagement have skyrocketed since the launch."
					/>
				</div>
				<div className="xl:row-span-2">
					<Testimonial
						title="Outstanding"
						name="Darragh MacNamara"
						position="Founder of Ignite Coaching"
						description="This web development agency is a true partner in our business growth. They re-engineered our old website into a modern, responsive, and highly effective tool for our marketing efforts. Their attention to user experience and SEO has dramatically increased our web traffic and lead generation."
					/>
				</div>
				<div className="xl:row-span-2">
					<Testimonial
						title="Crucial"
						name="Ross Byrne"
						position="Head Coach at ProCoach"
						description="This agency played a crucial role in the expansion of our online services. They didn't just meet our expectations; they exceeded them by providing innovative solutions and proactive support. Their understanding of web development trends and customer-focused approach has been a major factor in our success."
					/>
				</div>
			</div>
		</section>
	);
}
