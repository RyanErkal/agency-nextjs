export default function Step3({ formData, handleInput }: any) {
	return (
		<div className="w-full flex flex-col">
			<h1 className="playfair text-4xl font-bold w-full text-left mb-12">
				Lets talk money.
			</h1>
			<form className="flex flex-col gap-4 mb-6">
				<label htmlFor="name">Budget</label>
				<label htmlFor="name">£{formData.budget}</label>
				<input
					name="budget"
					onChange={handleInput}
					type="range"
					min={1000}
					max={50000}
					value={formData.budget}
					className="range"
					step={1000}
				/>

				<label htmlFor="email">Summary</label>
				<textarea
					onChange={handleInput}
					value={formData.summary}
					placeholder="Tell us about your project"
					name="summary"
					id="summary"
					className="textarea textarea-bordered focus:ring-transparent focus:outline-none focus:border-2 focus:border-orange-400 border-2 border-gray-100 text-lg py-2 transition-all ease-in-out duration-300 w-full mb-2 rounded-sm"
				/>
			</form>
		</div>
	);
}
