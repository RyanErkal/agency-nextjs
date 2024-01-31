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
		<div className="bg-gray-100 text-gray-900 min-h-72 p-8 flex flex-col items-left justify-start rounded-sm">
			<div className="flex w-full justify-between items-center mb-4">
				<div>
					<h2 className="text-lg font-bold">{name}</h2>
					<h3 className="text-sm opacity-75">{position}</h3>
				</div>
				<p>LOGO</p>
			</div>
			<h1 className="font-bold text-xl">{title}</h1>
			<p className="text-sm text-left opacity-75">{description}</p>
		</div>
	);
}
