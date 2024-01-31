"use client";

import styles from "@/app/page.module.css";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

export default function Home() {
	const firstText = useRef(null);
	const secondText = useRef(null);
	const slider = useRef(null);
	let xPercent = 0;
	let direction = -1;

	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);
		requestAnimationFrame(animate);
		gsap.to(slider.current, {
			scrollTrigger: {
				trigger: document.documentElement,
				scrub: true,
				start: "top",
				end: "bottom",
				onUpdate: (e) => (direction = e.direction * -1)
			},
			x: "-600px"
		});
	}, []);

	const animate = () => {
		if (xPercent < -100) {
			xPercent = 0;
		} else if (xPercent > 0) {
			xPercent = -100;
		}
		gsap.set(firstText.current, { xPercent: xPercent });
		gsap.set(secondText.current, { xPercent: xPercent });
		xPercent += 0.025 * direction;
		requestAnimationFrame(animate);
	};

	return (
		<main className={styles.main}>
			<div className={styles.sliderContainer}>
				<div ref={slider} className={styles.slider}>
					<p ref={firstText} className="">
						Design, Develop, Deploy, Design, Develop, Deploy,
						Design, Develop, Deploy, Design, Develop, Deploy,
						Design, Develop, Deploy, Design, Develop, Deploy,{" "}
					</p>
					<p ref={secondText}>
						Design, Develop, Deploy, Design, Develop, Deploy,
						Design, Develop, Deploy, Design, Develop, Deploy,
						Design, Develop, Deploy, Design, Develop, Deploy,{" "}
					</p>
				</div>
			</div>
		</main>
	);
}
