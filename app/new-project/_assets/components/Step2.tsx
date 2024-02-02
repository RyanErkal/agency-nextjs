export default function Step1({ formData, handleInput }: any) {
	return (
		<div className="w-full flex flex-col">
			<h1 className="playfair text-4xl font-bold w-full text-left mb-12">
				When and What?
			</h1>
			<form className="flex flex-col gap-4 mb-6">
				<label htmlFor="startDate">Desired Start Date</label>
				<input
					onChange={handleInput}
					type="text"
					name="startDate"
					id="startDate"
					placeholder="DD/MM/YYYY"
					className="bg-white text-black text-opacity-75 focus:ring-transparent focus:outline-none focus:border-orange-400 border-b-2 border-gray-100 text-lg py-2 transition-all ease-in-out duration-300 w-full mb-2"
				/>
				<label htmlFor="email">Desired Completion Date</label>
				<input
					onChange={handleInput}
					type="text"
					name="endDate"
					id="endDate"
					placeholder="DD/MM/YYYY"
					className="bg-white text-black text-opacity-75 focus:ring-transparent focus:outline-none focus:border-orange-400 border-b-2 border-gray-100 text-lg py-2 transition-all ease-in-out duration-300 w-full mb-2"
				/>
				<label htmlFor="phone">Services Required</label>
				<div className="form-control flex flex-wrap">
					<label className="label cursor-pointer w-fit">
						<span className="label-text mr-2">Web Design</span>
						<input
							type="checkbox"
							name="webDesign"
							id="webDesign"
							className="checkbox"
						/>
					</label>
					<label className="label cursor-pointer w-fit">
						<span className="label-text mr-2">Web Development</span>
						<input
							type="checkbox"
							name="webDevelopment"
							id="webDevelopment"
							className="checkbox"
						/>
					</label>
					<label className="label cursor-pointer w-fit">
						<span className="label-text mr-2">SEO</span>
						<input
							type="checkbox"
							name="SEO"
							id="SEO"
							className="checkbox"
						/>
					</label>
					<label className="label cursor-pointer w-fit">
						<span className="label-text mr-2">eCommerce</span>
						<input
							type="checkbox"
							name="eCommerce"
							id="eCommerce"
							className="checkbox"
						/>
					</label>
					<label className="label cursor-pointer w-fit">
						<span className="label-text mr-2">
							We&apos;ll take the lot
						</span>
						<input
							type="checkbox"
							name="all"
							id="all"
							className="checkbox"
						/>
					</label>
				</div>
			</form>
		</div>
	);
}
