"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import config from "@/config";
import Headroom from "react-headroom";
import { useLockBodyScroll } from "@uidotdev/usehooks";

const links: {
	href: string;
	label: string;
}[] = [
	{
		href: "/work",
		label: "Our Work"
	},
	{
		href: "/services",
		label: "Services"
	},
	{
		href: "/about",
		label: "About"
	},
	{
		href: "/contact",
		label: "Contact Us"
	}
];

export function Menu({
	isOpen,
	setIsOpen
}: {
	isOpen: boolean;
	setIsOpen: (isOpen: boolean) => void;
}) {
	useLockBodyScroll();
	return (
		<div className={`w-full relative z-50 ${isOpen ? "" : "hidden"}`}>
			<div
				className={`fixed w-full inset-y-0 right-0 z-10 px-8 py-4 overflow-y-auto bg-gray-100/50 backdrop-blur-lg sm:max-w-sm sm:ring-1 sm:ring-neutral/10 transform origin-right transition ease-in-out duration-300`}>
				{/* Your logo/name on small screens */}

				<div className="flex items-center justify-between">
					<Link
						className=""
						title={`${config.appName} homepage`}
						href="/">
						<h1 className="text-4xl font-bold">ReDesign</h1>
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
				<div className="flow-root mt-6 w-full ">
					<div className="py-6">
						<div className="flex flex-col gap-y-8 items-end">
							{links.map((link) => (
								<Link
									href={link.href}
									key={link.href}
									className="link text-2xl"
									title={link.label}>
									{link.label}
								</Link>
							))}
							<Link
								href="/new-project"
								className="text-lg btn btn-block bg-transparent border-2 border-gray-900 hover:bg-orange-400 hover:border-orange-400 hover:text-white hover:drop-shadow-lg transition-all ease-in-out duration-300 rounded-full"
								title="Start a new project">
								Start a project
							</Link>
						</div>
					</div>
					{/* CTA on small screens */}
				</div>
			</div>
		</div>
	);
}

// A header with a logo on the left, links in the center (like Pricing, etc...), and a CTA (like Get Started or Login) on the right.
// The header is responsive, and on mobile, the links are hidden behind a burger button.
export default function Header() {
	const searchParams = useSearchParams();
	const [isOpen, setIsOpen] = useState<boolean>(false);

	// setIsOpen(false) when the route changes (i.e: when the user clicks on a link on mobile)
	useEffect(() => {
		setIsOpen(false);
	}, [searchParams]);

	return (
		<>
			<Headroom>
				<header className="bg-gray-100/50 backdrop-blur-lg overflow-hidden max-w-7xl mt-6 mx-4 rounded-full xl:mx-auto">
					<nav
						className="container flex items-center justify-between px-16 py-4 mx-auto max-w-7xl text-black"
						aria-label="Global">
						{/* Your logo/name on large screens */}
						<div className="flex lg:flex-1">
							<Link className="shrink-0 py-4" href="/">
								<h1 className="text-4xl font-bold">ReDesign</h1>
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
						<div className="hidden lg:flex lg:justify-center lg:gap-12 lg:items-center w-full">
							{links.map((link) => (
								<Link
									href={link.href}
									key={link.href}
									className="link text-sm"
									title={link.label}>
									{link.label}
								</Link>
							))}
						</div>

						{/* CTA on large screens */}
						<div className="hidden lg:flex shrink-0">
							<Link
								href="/new-project"
								className="btn px-8 border-2 bg-transparent border-black hover:bg-orange-400 hover:border-orange-400 hover:text-white transition-all ease-in-out duration-300 rounded-full"
								title="Start a new project">
								Start A Project
							</Link>
						</div>
					</nav>

					{/* Mobile menu, show/hide based on menu state. */}
				</header>
			</Headroom>
			{isOpen && <Menu isOpen={isOpen} setIsOpen={setIsOpen} />}
		</>
	);
}
