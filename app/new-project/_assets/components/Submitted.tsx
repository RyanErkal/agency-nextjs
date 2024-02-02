export default function Submitted({ formData }: any) {
	return (
		<div className="w-full flex flex-col">
			<h1 className="playfair text-4xl font-bold w-full text-left mb-6">
				Thank you {formData.name}
			</h1>
			<p className="text-md text-black/75">
				We&apos;ll be in touch with you shortly to discuss your project.
			</p>
		</div>
	);
}
