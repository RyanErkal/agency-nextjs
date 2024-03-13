import React from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
/* import ExperienceCard from "@/components/ExperienceCard"; */
import FAQ from "./components/FAQ";
import { getSEOTags } from "@/libs/seo";
import stock1 from "@/public/stock1.webp";
import stock2 from "@/public/stock2.webp";
import { MdOutlineCheck } from "react-icons/md";

export const metadata = getSEOTags({
	title: "eCommerce Agency Manchester | ReDesign",
	canonicalUrlRelative: "/ecom"
});

export default function WebDesign() {
	return (
		<>
			<Header />
			<section
				id="web-design"
				className="max-w-7xl flex flex-col items-center justify-center mx-auto text-black px-8 pt-24 pb-0">
				<h2 className="w-full text-left text-5xl tracking-tight font-bold mb-12">
					eCommerce
				</h2>
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-24">
					<h3 className="w-full text-left text-2xl font-bold">
						Have the ability to sell products online to your
						customers 24/7 and update content easily.
					</h3>
					<div>
						<p className="mb-12">
							ReDesign have the ability to research your
							competition, the industry and create a shopping
							experience that will convert sales. Online you can
							target specific customers in various locations, and
							adapt your marketing spend to your needs. Having an
							online presence in the modern day is a given, but
							having a website that performs well is more
							important.
						</p>
						<Link
							href="/new-project"
							className="btn btn-wide xl:px-6 bg-white border-2 border-gray-900 hover:bg-orange-400 hover:border-orange-400 hover:text-white hover:drop-shadow-lg transition-all ease-in-out duration-300 rounded-full">
							Start a Project
						</Link>
					</div>
				</div>
			</section>
			<section className="w-full flex flex-col items-center justify-center mx-auto bg-black text-white py-24">
				<div className="w-full max-w-7xl px-8 grid grid-cols-1 lg:grid-cols-2 gap-24 relative">
					<div className="row-start-2 lg:row-start-1 transform -translate-y-[150px] lg:transform-none">
						<h2 className="w-full text-left text-2xl font-bold mb-8">
							10 products, or 10,000 products?
						</h2>
						<p className="mb-12">
							We know some shops only have low stock, or a small
							amount of products but others have lots of product
							choice. Our eCommerce platforms allows for this
							change, and growth is not a problem. We love working
							on small independent shops, as well as dealing with
							established companies and creating unique website
							features & systems.
						</p>
						<Link
							href="/contact"
							className="btn btn-wide xl:px-6 bg-white border-2 border-white hover:bg-orange-400 hover:border-orange-400 text-black hover:text-white transition-all ease-in-out duration-300 rounded-full">
							Book a Call
						</Link>
					</div>
					<Image
						src={stock1}
						alt="Service Image"
						width={900}
						height={900}
						className="object-cover transform -translate-y-[150px] h-[700px] rounded-xl"
					/>
				</div>
				<div className="w-full max-w-7xl">
					<h2 className="w-full text-center text-2xl font-bold mb-12">
						We use the latest technology
					</h2>
					<div className="flex flex-wrap justify-center gap-24">
						<h3 className="text-xl font-bold">
							<svg
								fill="currentColor"
								version="1.1"
								width="80"
								height="80"
								viewBox="0 0 512 512"
								enable-background="new 0 0 512 512">
								<g id="c2be471c56fc5b4dd571614bb3052f50">
									<path
										d="M425.228,100.457c0,0-0.425-2.308-1.734-3.144c-1.311-0.836-2.732-0.998-2.732-0.998l-41.082-3.057l-30.228-30.053
		c-1.147-0.874-2.471-1.385-3.817-1.66c-3.219-0.624-7.548,0.125-8.347,0.312l-15.682,4.853
		c-6.812-20.11-16.118-34.432-27.795-42.716c-8.634-6.101-18.146-8.695-28.363-7.922c-2.146-2.857-4.51-5.352-7.099-7.448
		c-11.334-9.157-25.955-10.579-43.446-4.241c-52.454,19.05-74.722,87.029-82.75,120.987L86.437,139.53
		c0,0-10.767,3.069-13.293,6.088c-2.775,3.318-3.306,12.301-3.306,12.301l-38.78,299.087L323.215,511.5l157.728-34.133
		L425.228,100.457z M263.326,84.763l-50.513,15.632c6.693-26.211,19.555-52.996,44.145-63.438
		C262.066,50.331,263.476,68.632,263.326,84.763z M220.897,20.901c10.685-3.88,18.894-3.706,25.069,0.461
		c-32.96,15.033-47.351,52.909-53.563,85.357l-40.445,12.525C160.99,86.584,181.144,35.335,220.897,20.901z M249.204,241.318
		c-2.314-1.123-5.046-2.321-8.134-3.456c-3.063-1.147-6.475-2.233-10.174-3.131c-3.662-0.898-7.604-1.622-11.758-2.046
		c-4.117-0.437-8.44-0.574-12.918-0.312c-4.11,0.25-7.834,0.985-11.109,2.158c-3.256,1.148-6.075,2.745-8.396,4.729
		c-2.32,1.971-4.148,4.329-5.439,7.049c-1.279,2.707-2.034,5.751-2.177,9.132c-0.112,2.508,0.281,4.903,1.16,7.235
		c0.879,2.346,2.258,4.641,4.129,6.912c1.884,2.295,4.267,4.565,7.167,6.886c2.913,2.358,6.351,4.729,10.317,7.211
		c5.564,3.568,11.253,7.585,16.661,12.188c5.489,4.679,10.679,9.956,15.139,15.969c4.517,6.076,8.271,12.888,10.804,20.522
		c2.545,7.71,3.849,16.206,3.438,25.562c-0.667,15.308-4.023,28.506-9.569,39.447c-5.477,10.804-13.037,19.287-22.144,25.45
		c-8.907,6.013-19.225,9.743-30.446,11.24c-10.897,1.459-22.581,0.811-34.632-1.847c-0.088-0.013-0.188-0.05-0.287-0.075
		c-0.094-0.012-0.188-0.037-0.281-0.049c-0.093-0.025-0.187-0.051-0.287-0.075c-0.094-0.013-0.188-0.038-0.287-0.062
		c-5.651-1.372-11.104-3.144-16.225-5.228c-5.046-2.033-9.781-4.354-14.097-6.861c-4.254-2.482-8.109-5.14-11.446-7.896
		c-3.3-2.732-6.107-5.539-8.309-8.371l13.292-44.113c2.246,1.896,4.99,4.055,8.115,6.237c3.156,2.233,6.706,4.504,10.504,6.637
		c3.842,2.146,7.947,4.13,12.17,5.751c4.279,1.635,8.683,2.907,13.049,3.543c3.855,0.562,7.298,0.449,10.311-0.224
		c3.038-0.687,5.626-1.946,7.748-3.681c2.133-1.709,3.786-3.893,4.94-6.4c1.154-2.532,1.809-5.364,1.934-8.396
		c0.137-3.044-0.138-5.901-0.905-8.671c-0.761-2.781-2.008-5.464-3.799-8.158c-1.791-2.683-4.111-5.377-7.048-8.159
		c-2.907-2.757-6.394-5.602-10.523-8.62c-5.084-3.793-9.85-7.897-14.122-12.363c-4.217-4.417-7.959-9.195-11.022-14.372
		c-3.031-5.14-5.42-10.691-6.967-16.729c-1.541-6.001-2.251-12.501-1.953-19.587c0.524-11.839,2.889-22.755,6.85-32.573
		c4.004-9.931,9.674-18.838,16.785-26.511c7.255-7.822,16.075-14.422,26.242-19.499c10.461-5.228,22.419-8.895,35.674-10.629
		c6.15-0.812,12.052-1.186,17.628-1.21c5.664-0.025,10.985,0.312,15.881,0.936c4.965,0.636,9.488,1.559,13.499,2.694
		c4.042,1.147,7.548,2.495,10.436,3.967L249.204,241.318z M280.836,79.349c-0.025-1.983-0.075-3.992-0.149-6.038
		c-0.587-15.719-2.721-28.956-6.351-39.685c3.955,0.399,7.548,1.709,10.829,4.03c9.145,6.475,15.731,19.511,20.372,34.045
		L280.836,79.349z"></path>
								</g>
							</svg>
						</h3>
						<h3 className="text-xl font-bold">
							<svg
								fill="currentColor"
								width="80"
								height="80"
								viewBox="0 0 32 32"
								xmlns="http://www.w3.org/2000/svg">
								<path d="M8.25 10.435l-2.165 0.46-0.010 7.12c0 1.315 0.99 2.165 2.305 2.165 0.73 0 1.265-0.135 1.56-0.295v-1.69c-0.285 0.115-1.685 0.525-1.685-0.785v-3.16h1.685v-1.89h-1.685zM12.705 13.015l-0.135-0.655h-1.92v7.66h2.215v-5.155c0.525-0.69 1.41-0.555 1.695-0.465v-2.040c-0.3-0.105-1.335-0.3-1.855 0.655zM17.32 9.4l-2.23 0.475v1.81l2.23-0.475zM2.245 14.615c0-0.345 0.29-0.48 0.755-0.485 0.675 0 1.535 0.205 2.21 0.57v-2.090c-0.735-0.29-1.47-0.405-2.205-0.405-1.8 0-3 0.94-3 2.51 0 2.46 3.375 2.060 3.375 3.12 0 0.41-0.355 0.545-0.85 0.545-0.735 0-1.685-0.305-2.43-0.71v2c0.825 0.355 1.66 0.505 2.425 0.505 1.845 0 3.115-0.79 3.115-2.39 0-2.645-3.395-2.17-3.395-3.17zM32 16.28c0-2.275-1.1-4.070-3.21-4.070s-3.395 1.795-3.395 4.055c0 2.675 1.515 3.91 3.675 3.91 1.060 0 1.855-0.24 2.46-0.575v-1.67c-0.605 0.305-1.3 0.49-2.18 0.49-0.865 0-1.625-0.305-1.725-1.345h4.345c0.010-0.115 0.030-0.58 0.030-0.795zM27.605 15.44c0-1 0.615-1.42 1.17-1.42 0.545 0 1.125 0.42 1.125 1.42zM21.96 12.21c-0.87 0-1.43 0.41-1.74 0.695l-0.115-0.55h-1.955v10.24l2.22-0.47 0.005-2.51c0.32 0.235 0.795 0.56 1.57 0.56 1.59 0 3.040-1.16 3.040-3.98 0.005-2.58-1.465-3.985-3.025-3.985zM21.43 18.335c-0.52 0-0.83-0.19-1.045-0.42l-0.015-3.3c0.23-0.255 0.55-0.44 1.060-0.44 0.81 0 1.37 0.91 1.37 2.070 0.005 1.195-0.545 2.090-1.37 2.090zM15.095 20.020h2.23v-7.66h-2.23z" />
							</svg>
						</h3>
						<h3 className="text-xl font-bold">
							<svg
								fill="currentColor"
								version="1.1"
								id="Capa_1"
								width="80"
								height="80"
								viewBox="0 0 56.48 56.48">
								<g>
									<path
										d="M55.026,9.939H1.454C0.65,9.939,0,10.59,0,11.393v33.695c0,0.803,0.65,1.454,1.454,1.454h53.572
		c0.804,0,1.454-0.651,1.454-1.454V11.393C56.48,10.591,55.83,9.939,55.026,9.939z M47.159,27.097h-8.045
		c0,1.827,1.248,2.515,3.045,2.515c1.002,0,2.269-0.452,3.036-1.14l1.768,1.285c-1.287,1.277-3.006,1.965-4.754,1.965
		c-1.435,0-2.976-0.334-4.097-1.355v0.943c0,3.381-2.683,4.933-5.668,4.933c-1.67,0-3.37-0.758-4.529-1.877l2.034-1.394
		c0.639,0.549,1.542,1.012,2.544,1.012c1.759,0,2.985-0.855,2.985-2.428v-1.149c-0.814,0.776-2.032,1.308-3.369,1.308
		c-1.473,0-2.534-0.551-3.182-1.111v1.132h-2.623v-1.142h-0.049c-0.541,0.776-1.444,1.131-3.222,1.131
		c-1.66,0-2.928-0.481-3.704-1.26c-0.982,0.808-2.544,1.239-4.332,1.239c-2.112,0-4.067-0.657-5.737-2.004l1.827-1.552
		c1.13,0.951,2.368,1.443,4.116,1.443c1.494,0,2.574-0.492,2.574-1.443c0-0.796-0.697-1.031-1.591-1.1l-2.319-0.178
		c-2.161-0.156-3.762-1.258-3.762-3.183c0-2.279,2.112-3.449,4.873-3.449c1.985,0,3.409,0.453,4.597,1.179
		c0.963-0.863,2.22-1.168,3.92-1.168c2.269,0,4.037,0.462,4.882,1.699c0.088-0.107,0.177-0.216,0.285-0.335
		c0.59-0.636,1.749-1.375,3.447-1.375c1.336,0,2.398,0.442,3.369,1.328v-1.189h2.634v1.229c1.041-0.982,2.437-1.366,3.743-1.366
		c2.878,0,5.353,1.976,5.363,5.275C47.229,26.085,47.159,27.097,47.159,27.097z M23.161,26.939h3.143v0.816
		c0,1.749-0.747,1.944-2.937,1.944c-1.779,0-2.466-0.656-2.466-1.414C20.901,27.47,21.618,26.939,23.161,26.939z M34.948,23.324
		c0.472,0.512,0.53,0.825,0.53,2.653c0,1.808-0.059,2.123-0.53,2.631c-0.373,0.403-1.062,0.875-2.122,0.875
		c-1.09,0-1.896-0.472-2.27-0.875c-0.471-0.509-0.5-0.795-0.53-2.631c-0.021-1.848,0.06-2.142,0.53-2.653
		c0.373-0.402,1.18-0.875,2.27-0.875C33.887,22.449,34.575,22.922,34.948,23.324z M45.186,25.123h-6.071
		c0-1.956,1.423-2.908,3.024-2.908C43.741,22.215,45.186,23.177,45.186,25.123z M26.304,23.805v1.15H22.67
		c-1.396,0-2.457,0.382-3.163,0.991c-0.609-0.59-1.553-0.973-2.888-1.04l-2.161-0.139c-1.317-0.089-1.719-0.57-1.719-1.061
		c0-0.775,0.56-1.346,2.239-1.346c1.415,0,2.466,0.422,3.497,1.041l1.11-1.12l1.1,1.13c0.688-0.639,1.572-1.041,2.938-1.041
		C25.508,22.372,26.304,22.744,26.304,23.805z"
									/>
								</g>
							</svg>
						</h3>
						<h3 className="text-xl font-bold">
							<svg
								width="80"
								height="80"
								viewBox="0 -184.5 512 512"
								version="1.1"
								preserveAspectRatio="xMidYMid">
								<g>
									<path
										d="M56.1158844,48.5509565 C44.5313279,48.5509565 34.754354,57.9673043 34.754354,69.9169391 C34.7027427,75.5980341 36.9367488,81.0614617 40.9540553,85.0787682 C44.9713619,89.0960748 50.4347895,91.3300809 56.1158844,91.2784696 C67.7004409,91.2784696 77.4729627,81.8621217 77.4729627,69.9169391 C77.4729627,57.9673043 67.7004409,48.5509565 56.1158844,48.5509565 L56.1158844,48.5509565 Z M22.8091714,69.5518609 C22.8091714,51.4493217 37.6527192,36.6057739 55.7552583,36.6057739 C73.8533453,36.6057739 88.6968931,51.4493217 88.6968931,69.5518609 C88.6968931,70.6381913 88.6968931,72.0896 88.336267,73.1759304 C87.9711888,76.4304696 90.5089279,78.9637565 93.7679192,78.9637565 C99.1995714,78.9637565 99.9208235,72.0896 99.9208235,69.5518609 C99.9208235,45.2919652 80.0062496,25.3773913 55.7552583,25.3773913 C31.4953627,25.3773913 11.5896931,45.2919652 11.5896931,69.5518609 C11.5896931,93.8162087 31.4953627,113.72633 55.7552583,113.72633 C68.7867714,113.72633 80.3713279,108.294678 88.336267,99.2434087 L97.3830844,106.847722 C87.6105627,118.43673 72.4063888,125.680688 56.1114322,125.680688 C41.2119172,125.726759 26.9096072,119.82693 16.3760978,109.289242 C5.8425884,98.7515532 -0.0515670361,84.4469042 0.000339955804,69.5474087 C0.000339955804,38.7739826 24.9773801,13.4322087 56.1158844,13.4322087 C86.8848583,13.4322087 111.866006,38.7784348 111.866006,69.556313 C111.866006,81.8665739 106.073728,92.0086261 94.1285453,92.0086261 C89.0575192,92.0086261 85.8029801,89.470887 83.9909453,86.9376 C78.198667,96.3539478 67.6959888,102.506852 55.7508062,102.506852 C47.0038892,102.536553 38.606655,99.0749963 32.4216151,92.8899563 C26.2365751,86.7049163 22.775018,78.3076822 22.8047192,69.5607652 L22.8091714,69.5518609 Z M56.1114322,59.774887 C61.5430844,59.774887 65.8884062,64.1202087 65.8884062,69.5518609 C65.8884062,74.983513 61.5430844,79.3289177 56.1158844,79.3289177 C53.5196023,79.3395412 51.0265653,78.3129086 49.190701,76.4770443 C47.3548367,74.64118 46.3282041,72.148143 46.3388276,69.5518609 C46.3388276,64.1202087 50.6842322,59.774887 56.1158844,59.774887 L56.1114322,59.774887 Z"
										fill="currentColor"></path>
									<path
										d="M359.507189,47.4824348 C366.319015,47.4824348 372.8052,50.067705 377.454251,54.938197 L378.255293,55.8213565 L378.255293,48.9338435 L391.954632,48.9338435 L391.954632,107.649113 L391.931052,110.501712 C391.754315,120.466798 390.542551,125.171014 386.910319,130.488765 C381.861554,138.101983 372.845902,142.086678 362.752824,142.086678 C345.46629,142.086678 334.396126,131.332658 333.922984,113.901002 L333.907189,112.729043 L347.245902,112.729043 L347.40361,114.736052 C347.731643,118.432733 348.173226,120.339717 349.409658,122.514922 C351.934041,126.864696 357.343432,129.402435 362.752824,129.402435 C372.530493,129.402435 377.574193,123.619722 377.879876,111.722385 L377.894667,110.55193 L377.894667,102.217461 C372.485276,108.37927 366.715258,110.917009 359.146563,110.917009 C343.283467,110.917009 331.382806,97.8632348 331.382806,79.742887 C331.382806,60.8923826 343.283467,47.4824348 359.507189,47.4824348 Z M413.948371,48.9338435 L413.948371,83.3669565 C413.948371,93.517913 417.554632,98.228313 425.488406,98.228313 C433.492494,98.228313 437.130338,93.8371673 437.371706,84.397678 L437.384615,83.3669565 L437.384615,48.9338435 L451.088406,48.9338435 L451.088406,83.7320348 C451.088406,93.1528348 449.645902,98.228313 444.957763,103.303791 C439.91345,108.37927 433.42218,110.917009 425.488406,110.917009 C417.915258,110.917009 411.067815,108.37927 406.379676,103.303791 C402.268538,98.482087 400.435656,93.6603826 400.262646,85.113108 L400.249032,83.7320348 L400.249032,48.9338435 L413.948371,48.9338435 Z M240.166667,47.1218087 C247.33701,47.1218087 252.245699,49.3994471 257.951455,54.8783979 L258.910319,55.8213565 L258.910319,48.9338435 L272.614111,48.9338435 L272.614111,108.739896 L258.910319,108.739896 L258.910319,102.582539 C252.423502,108.37927 247.735363,110.55193 240.522841,110.55193 C223.938493,110.55193 212.037832,97.1419826 212.037832,78.2914783 C212.037832,60.5317565 223.938493,47.1218087 240.166667,47.1218087 Z M187.163537,47.1218087 C200.151231,47.1218087 206.989027,55.0233938 207.339917,70.4977755 L207.354145,71.7690435 L207.354145,109.826226 L193.650354,109.826226 L193.650354,76.4794435 C193.650354,64.8815304 191.125971,60.5317565 184.634702,60.5317565 C176.965473,60.5317565 173.674293,65.6228012 173.469939,77.451198 L173.459745,78.6565565 L173.459745,109.4656 L159.760406,109.4656 L159.760406,76.1188174 C159.760406,65.2466087 156.875397,60.1711304 150.744754,60.1711304 C143.071217,60.1711304 139.784067,65.2621751 139.579978,77.0905719 L139.569797,78.2959304 L139.569797,109.104974 L125.866006,109.104974 L125.866006,48.9338435 L139.569797,48.9338435 L139.569797,54.3699478 C144.614111,48.5687652 147.859745,47.1218087 153.629763,47.1218087 C160.121032,47.1218087 165.886597,50.0201739 169.492858,55.8213565 C173.820371,50.3808 179.951015,47.1218087 187.163537,47.1218087 Z M297.492858,48.9338435 L297.492858,109.104974 L283.789067,109.104974 L283.789067,48.9338435 L297.492858,48.9338435 Z M490.027119,47.1218087 C504.438806,47.1218087 511.312682,55.0447638 511.647368,70.8948006 L511.660232,72.1296696 L511.660232,109.104974 L497.956441,109.104974 L497.956441,75.393113 C497.956441,63.7952 495.436511,59.8060522 486.781484,59.8060522 C477.677425,59.8060522 474.354489,64.9359596 474.172039,78.8526717 L474.164024,109.104974 L460.460232,109.104974 L460.460232,48.9338435 L473.803397,48.9338435 L473.803397,54.3699478 C479.208337,48.9338435 483.53585,47.1218087 490.027119,47.1218087 Z M323.809658,0 L323.809658,108.739896 L310.110319,108.739896 L310.110319,0 L323.809658,0 Z M242.686597,59.4409739 C233.314771,59.4454261 226.10225,67.7798957 226.10225,78.6565565 C226.10225,90.2544696 232.954145,98.228313 242.686597,98.228313 C252.784128,98.228313 259.631571,90.2544696 259.631571,78.6565565 C259.631571,67.7597934 253.192837,59.9274996 243.595501,59.4628214 L242.686597,59.4454261 L242.686597,59.4409739 Z M362.031571,59.4409739 C351.934041,59.4454261 345.442771,67.4192696 345.442771,79.0171826 C345.442771,90.6150957 351.934041,98.228313 362.031571,98.228313 C371.764024,98.228313 378.615919,90.2544696 378.615919,78.6565565 C378.615919,67.7597934 372.512099,59.9274996 362.939121,59.4628214 L362.031571,59.4409739 Z M290.636511,15.2219826 C293.045318,15.2038523 295.355822,16.1540293 297.051814,17.8583963 C298.747805,19.5627633 299.686589,21.8779194 299.656615,24.2821565 C299.687795,26.6871605 298.749545,29.0034729 297.05342,30.708811 C295.357296,32.4141491 293.0461,33.364934 290.640963,33.3467826 C285.592197,33.3467826 281.625311,29.3576348 281.625311,24.2821565 C281.595355,21.8786971 282.533531,19.5642298 284.228554,17.8599956 C285.73524,16.3451207 287.72732,15.4256252 289.839519,15.2518844 L290.640963,15.2219826 L290.636511,15.2219826 Z"
										fill="currentColor"></path>
								</g>
							</svg>
						</h3>
					</div>
				</div>
			</section>
			<section className="w-full flex flex-col items-center justify-center mx-auto bg-white text-black py-16">
				<div className="w-full max-w-7xl px-8">
					<h2 className="max-w-3xl w-full mx-auto text-center text-2xl font-bold mb-12">
						Fully custom or Shopify?
					</h2>
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24">
						<Image
							src={stock2}
							alt="Service Image"
							width={600}
							height={600}
							className="object-cover w-full rounded-xl"
						/>
						<div className="flex flex-col justify-center">
							<h3 className="w-full text-left text-xl font-bold mb-6 ">
								Shopify
							</h3>
							<p className="mb-4">
								Our custom Shopify sites are a cheaper and
								faster option than our custom eCommerce
								solution. We start with an existing Shopify
								template and customise as much as possible. You
								could have an eCommerce store online within 2
								weeks.
							</p>
							<Link
								href="/shopify"
								className="link text-orange-400 w-fit">
								Learn more about Shopify
							</Link>
							<p className="mb-2 mt-4 flex gap-2 items-center">
								<MdOutlineCheck className="text-orange-400 text-xl flex-shrink-0" />
								Built in 2 weeks
							</p>
							<p className="mb-2 flex gap-2 items-center">
								<MdOutlineCheck className="text-orange-400 text-xl flex-shrink-0" />
								Fixed price
							</p>
							<p className="mb-2 flex gap-2 items-center">
								<MdOutlineCheck className="text-orange-400 text-xl flex-shrink-0" />
								Hosting included
							</p>
						</div>
						<Image
							src={stock2}
							alt="Service Image"
							width={600}
							height={600}
							className="object-cover w-full lg:col-start-2 rounded-xl"
						/>
						<div className="lg:col-start-1 lg:row-start-2 flex flex-col justify-center">
							<h3 className="w-full text-left text-xl font-bold mb-6">
								Custom Development
							</h3>
							<p className="mb-4">
								Build with no limits. This is our bespoke
								website option, we design and build exactly what
								you need from the ground up. A very powerful
								tool that allows for growth.
							</p>
							<p className="mb-2 flex gap-2 items-center">
								<MdOutlineCheck className="text-orange-400 text-xl flex-shrink-0" />
								Minimum 6 weeks build
							</p>
							<p className="mb-2 flex gap-2 items-center">
								<MdOutlineCheck className="text-orange-400 text-xl flex-shrink-0" />
								No specification limits
							</p>
							<p className="mb-2 flex gap-2 items-center">
								<MdOutlineCheck className="text-orange-400 text-xl flex-shrink-0" />
								No design restrictions
							</p>
						</div>
					</div>
				</div>
			</section>
			{/* <section className="w-full flex flex-col items-center justify-center mx-auto bg-white text-black px-24 lg:px-8 py-24">
				<div className="w-full max-w-7xl">
					<h2 className="max-w-3xl mx-auto text-center text-3xl font-bold mb-12">
						A team of web design experts that can help you design
						and build a website you&apos;re proud of
					</h2>
					<div className="grid grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-24">
						<div>
							<h3 className="font-bold text-xl mb-2 flex gap-2 items-center">
								<MdOutlineDesignServices className="text-orange-400 text-3xl" />
								Web Design
							</h3>
							<p>
								Bespoke web design perfect for your brand and
								target audience.
							</p>
						</div>
						<div>
							<h3 className="font-bold text-xl mb-2 flex gap-2 items-center">
								<MdOutlineShoppingCart className="text-orange-400 text-3xl" />
								eCommerce
							</h3>
							<p>
								Sell products online 24/7 through a
								well-designed, easy to use eCommerce website.
							</p>
						</div>
						<div>
							<h3 className="font-bold text-xl mb-2 flex gap-2 items-center">
								<MdOutlineAccessibility className="text-orange-400 text-3xl" />
								UX Design
							</h3>
							<p>
								Provide meaningful and relevant experiences to
								users through user experience (UX) design.
							</p>
						</div>
						<div>
							<h3 className="font-bold text-xl mb-2 flex gap-2 items-center">
								<MdOutlinePhonelink className="text-orange-400 text-3xl" />
								Responsive Design
							</h3>
							<p>
								Designed for all the latest devices including
								iPhone and iPad.
							</p>
						</div>
						<div>
							<h3 className="font-bold text-xl mb-2 flex gap-2 items-center">
								<MdOutlineListAlt className="text-orange-400 text-3xl" />
								Wireframes
							</h3>
							<p>
								A visualization tool for presenting proposed
								structure, functions, and content of a website.
							</p>
						</div>
						<div>
							<h3 className="font-bold text-xl mb-2 flex gap-2 items-center">
								<MdOutlineAutoGraph className="text-orange-400 text-3xl" />
								Strategy
							</h3>
							<p>
								Not only looking at the now, but also to the
								future to see potential growth.
							</p>
						</div>
					</div>
				</div>
			</section> */}
			{/* <section className="w-full flex flex-col items-center justify-center mx-auto bg-white text-black px-24 lg:px-8 py-12">
				<div className="w-full max-w-7xl">
					<h2 className="mx-auto text-center text-3xl font-bold mb-12">
						Web design projects we&apos;ve worked on
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-16 w-full max-w-7xl">
						<div className="flex flex-col gap-16">
							<ExperienceCard
								id={1}
								title="Alliance Coaching"
								description="Web design & development for online coaching brand"
								img={alliance}
							/>

							<ExperienceCard
								id={4}
								title="Voics"
								description="Podcast as a service web design & development"
								img={voics}
							/>
						</div>
						<div className="flex flex-col gap-16">
							<ExperienceCard
								id={3}
								title="Resilient Intent"
								description="An educational platform for fitness professionals"
								img={resilient1}
							/>
							<ExperienceCard
								id={2}
								title="Team Ignite"
								description="Bodybuilding coaching brand digital presence"
								img={ignite}
							/>
						</div>
					</div>
				</div>
			</section> */}
			<section className="w-full flex flex-col items-center justify-center mx-auto bg-white text-black py-12">
				<div className="grid grid-cols-1 md:grid-cols-2 max-w-7xl px-8 w-full">
					<h2 className="w-full text-left text-5xl font-bold tracking-tight mb-12 md:mb-0">
						More Services
					</h2>
					<div className="flex flex-col items-start w-full">
						<div className="border-b w-full pb-6 group cursor-pointer">
							<Link
								href="/web-design"
								className="text-4xl tracking-tight group-hover:pl-4 group-hover:text-orange-400 transition-all ease-in-out duration-300">
								Web Design
							</Link>
						</div>
						<div className="border-b w-full py-6 group cursor-pointer">
							<Link
								href="/web-development"
								className="text-4xl tracking-tight group-hover:pl-4 group-hover:text-orange-400 transition-all ease-in-out duration-300">
								Web Development
							</Link>
						</div>
						<div className="border-b w-full py-6 group cursor-pointer">
							<Link
								href="/seo"
								className="text-4xl tracking-tight group-hover:pl-4 group-hover:text-orange-400 transition-all ease-in-out duration-300">
								SEO
							</Link>
						</div>
						<div className="w-full pt-6 group cursor-pointer">
							<Link
								href="/services"
								className="text-4xl tracking-tight group-hover:pl-4 group-hover:text-orange-400 transition-all ease-in-out duration-300">
								All Services
							</Link>
						</div>
					</div>
				</div>
			</section>
			<FAQ />
			<Contact />
			<Footer />
		</>
	);
}
