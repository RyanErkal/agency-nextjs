export default function Step3({ formData, handleInput }: any) {
	return (
		<div className="w-full flex flex-col">
			<h1 className="playfair text-4xl font-bold w-full text-left mb-12">
				Almost there...
			</h1>
			<form className="flex flex-col gap-4 mb-6">
				<label htmlFor="name">Any design briefs?</label>
				<input
					name="media"
					onChange={handleInput}
					type="file"
					value={formData.media}
				/>
			</form>
		</div>
	);
}
