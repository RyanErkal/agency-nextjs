export default function Mailing() {
	return (
		<div className="flex flex-col items-center justify-center bg-white text-black px-8 py-16 xl:px-32">
			<div className="max-w-7xl w-full">
				<h1 className="playfair text-4xl font-bold mb-6 w-full text-left">
					Subscribe to our newsletter
				</h1>
				<div className="w-full">
					<input
						className="bg-white text-black text-opacity-75 focus:ring-transparent focus:outline-none focus:border-orange-400 border-b-2 border-gray-100 text-xl py-4 transition-all ease-in-out duration-300 w-full mb-4"
						placeholder="Enter your email"
					/>
					<button className="btn btn-wide bg-white border-2 border-gray-900 hover:bg-orange-400 hover:border-orange-400 hover:text-white hover:drop-shadow-lg transition-all ease-in-out duration-300 rounded-sm">
						Submit
					</button>
				</div>
			</div>
		</div>
	);
}
