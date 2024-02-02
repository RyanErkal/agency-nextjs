export default function Step1({ formData, handleInput }: any) {
	return (
		<div className="w-full flex flex-col">
			<h1 className="playfair text-4xl font-bold w-full text-left mb-12">
				Let&apos;s get started.
			</h1>
			<form className="flex flex-col gap-4 mb-6">
				<label htmlFor="name">Name</label>
				<input
					onChange={handleInput}
					value={formData.name}
					type="text"
					name="name"
					id="name"
					className="bg-white text-black text-opacity-75 focus:ring-transparent focus:outline-none focus:border-orange-400 border-b-2 border-gray-100 text-lg py-2 transition-all ease-in-out duration-300 w-full mb-2"
				/>
				<label htmlFor="email">Email</label>
				<input
					onChange={handleInput}
					value={formData.email}
					type="email"
					name="email"
					id="email"
					className="bg-white text-black text-opacity-75 focus:ring-transparent focus:outline-none focus:border-orange-400 border-b-2 border-gray-100 text-lg py-2 transition-all ease-in-out duration-300 w-full mb-2"
				/>
				<label htmlFor="phone">Company Name</label>
				<input
					onChange={handleInput}
					value={formData.company}
					type="text"
					name="company"
					id="company"
					className="bg-white text-black text-opacity-75 focus:ring-transparent focus:outline-none focus:border-orange-400 border-b-2 border-gray-100 text-lg py-2 transition-all ease-in-out duration-300 w-full mb-2"
				/>
			</form>
		</div>
	);
}
