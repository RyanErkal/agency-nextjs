"use client";

import React from "react";
import { ParallaxBanner } from "react-scroll-parallax";

export default function ParallaxImage({
	children
}: {
	children?: React.ReactNode;
}) {
	return (
		<>
			<ParallaxBanner
				layers={[
					{
						image: "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
						speed: -30
					}
				]}
				style={{
					height: "100%",
					width: "100%"
				}}>
				{children}
			</ParallaxBanner>
		</>
	);
}
