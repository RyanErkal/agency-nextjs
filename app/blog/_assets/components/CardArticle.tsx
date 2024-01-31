import type { JSX } from "react";
import Link from "next/link";
import Image from "next/image";
import BadgeCategory from "./BadgeCategory";
import Avatar from "./Avatar";
import { articleType } from "../content";

// This is the article card that appears in the home page, in the category page, and in the author's page
const CardArticle = ({
	article,
	tag = "h2",
	showCategory = true,
	isImagePriority = false
}: {
	article: articleType;
	tag?: keyof JSX.IntrinsicElements;
	showCategory?: boolean;
	isImagePriority?: boolean;
}) => {
	const TitleTag = tag;

	return (
		<article className="card bg-gray-100 rounded-sm overflow-hidden group">
			{article.image?.src && (
				<Link
					href={`/blog/${article.slug}`}
					className="link "
					title={article.title}
					rel="bookmark">
					<figure>
						<Image
							src={article.image.src}
							alt={article.image.alt}
							width={600}
							height={338}
							priority={isImagePriority}
							placeholder="blur"
							className="aspect-video object-center object-cover group-hover:scale-[1.03] duration-200 ease-in-out"
						/>
					</figure>
				</Link>
			)}
			<div className="card-body">
				{/* CATEGORIES */}
				{showCategory && (
					<div className="flex flex-wrap gap-2">
						{article.categories.map((category) => (
							<BadgeCategory
								category={category}
								key={category.slug}
							/>
						))}
					</div>
				)}

				{/* TITLE WITH RIGHT TAG */}
				<TitleTag className="mb-1 text-xl md:text-2xl font-bold">
					<Link
						href={`/blog/${article.slug}`}
						className="link"
						title={article.title}
						rel="bookmark">
						{article.title}
					</Link>
				</TitleTag>

				<div className=" text-black/75 space-y-4">
					{/* DESCRIPTION */}
					<p className="">{article.description}</p>

					{/* AUTHOR & DATE */}
					<div className="flex items-center gap-4 text-sm">
						<Avatar article={article} />

						<span itemProp="datePublished">
							{new Date(article.publishedAt).toLocaleDateString(
								"en-US",
								{
									month: "long",
									day: "numeric"
								}
							)}
						</span>
					</div>
				</div>
			</div>
		</article>
	);
};

export default CardArticle;
