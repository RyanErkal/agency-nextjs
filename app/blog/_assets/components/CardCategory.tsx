import type { JSX } from "react";
import Link from "next/link";
import { categoryType } from "../content";

// This is the category card that appears in the home page and in the category page
const CardCategory = ({
	category,
	tag = "h2"
}: {
	category: categoryType;
	tag?: keyof JSX.IntrinsicElements;
}) => {
	const TitleTag = tag;

	return (
		<Link
			className="btn btn-wide bg-white border-2 border-gray-900 hover:bg-orange-400 hover:border-orange-400 hover:text-white hover:drop-shadow-lg transition-all ease-in-out duration-300 rounded-sm"
			href={`/blog/category/${category.slug}`}
			title={category.title}
			rel="tag">
			<TitleTag className="md:text-lg font-bold">
				{category?.titleShort || category.title}
			</TitleTag>
		</Link>
	);
};

export default CardCategory;
