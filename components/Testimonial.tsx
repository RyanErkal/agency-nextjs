export default function Testimonial({
	name,
	position,
	title,
	description
}: {
	name: string;
	position: string;
	title: string;
	description: string;
}) {
	return (
		<div className="bg-gray-100  min-h-72 p-8 flex flex-col items-left justify-start rounded-sm">
			<h2 className="font-bold text-xl mb-4">{title}</h2>
			<p className="text-sm text-left text-black/80 mb-4">
				{description}
			</p>
			<div className="flex w-full justify-between items-center border-t border-base-content/5 pt-4">
				<div>
					<h2 className="text-base font-bold">{name}</h2>
					<h3 className="text-sm text-black/80">{position}</h3>
				</div>
			</div>
		</div>
	);
}
