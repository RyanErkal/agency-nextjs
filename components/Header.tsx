"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import config from "@/config";

const links: {
	href: string;
	label: string;
}[] = [
	{
		href: "/#ourwork",
		label: "Work"
	},
	{
		href: "/#testimonials",
		label: "Clients"
	},
	{
		href: "/#services",
		label: "Services"
	},
	{
		href: "/blog",
		label: "Blog"
	},
	{
		href: "/contact",
		label: "Contact Us"
	}
];

// A header with a logo on the left, links in the center (like Pricing, etc...), and a CTA (like Get Started or Login) on the right.
// The header is responsive, and on mobile, the links are hidden behind a burger button.
const Header = () => {
	const searchParams = useSearchParams();
	const [isOpen, setIsOpen] = useState<boolean>(false);

	// setIsOpen(false) when the route changes (i.e: when the user clicks on a link on mobile)
	useEffect(() => {
		setIsOpen(false);
	}, [searchParams]);

	return (
		<header className="bg-white z-0">
			<nav
				className=" max-w-7xl container flex items-center justify-between px-8 py-4 mx-auto text-black"
				aria-label="Global">
				{/* Your logo/name on large screens */}
				<div className="flex lg:flex-1">
					<Link
						className="flex items-center gap-2 shrink-0 "
						href="/">
						<h1 className="text-4xl playfair">
							<strong className="playfair-extrabold">RE</strong>
							design
						</h1>
					</Link>
				</div>

				{/* Burger button to open menu on mobile */}
				<div className="flex lg:hidden">
					<button
						type="button"
						className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
						onClick={() => setIsOpen(true)}>
						<span className="sr-only">Open main menu</span>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className="w-6 h-6 text-base-content">
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
							/>
						</svg>
					</button>
				</div>

				{/* Your links on large screens */}
				<div className="hidden lg:flex lg:justify-center lg:gap-12 lg:items-center">
					{links.map((link) => (
						<Link
							href={link.href}
							key={link.href}
							className="link"
							title={link.label}>
							{link.label}
						</Link>
					))}
				</div>

				{/* CTA on large screens */}
				{/* <div className="hidden lg:flex lg:justify-end lg:flex-1">
					<button className="btn btn-ghost rounded">
						Get Started
					</button>
				</div> */}
			</nav>

			{/* Mobile menu, show/hide based on menu state. */}
			<div className={`relative z-50 ${isOpen ? "" : "hidden"}`}>
				<div
					className={`fixed inset-y-0 right-0 z-10 w-full px-8 py-4 overflow-y-auto bg-base-200 sm:max-w-sm sm:ring-1 sm:ring-neutral/10 transform origin-right transition ease-in-out duration-300`}>
					{/* Your logo/name on small screens */}
					<div className="flex items-center justify-between">
						<Link
							className="flex items-center gap-2 shrink-0 "
							title={`${config.appName} homepage`}
							href="/">
							<h1 className="text-4xl playfair">
								<strong className="playfair-extrabold">
									RE
								</strong>
								design
							</h1>
						</Link>
						<button
							type="button"
							className="-m-2.5 rounded-md p-2.5"
							onClick={() => setIsOpen(false)}>
							<span className="sr-only">Close menu</span>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								stroke="currentColor"
								className="w-6 h-6">
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M6 18L18 6M6 6l12 12"
								/>
							</svg>
						</button>
					</div>

					{/* Your links on small screens */}
					<div className="flow-root mt-6">
						<div className="py-4">
							<div className="flex flex-col gap-y-4 items-start">
								{links.map((link) => (
									<Link
										href={link.href}
										key={link.href}
										className="link"
										title={link.label}>
										{link.label}
									</Link>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
