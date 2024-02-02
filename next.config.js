/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		remotePatterns: [
			// NextJS <Image> component needs to whitelist domains for src={}
			{
				hostname: "d6f6d0kpz0gyr.cloudfront.net"
			}
		]
	}
};

module.exports = nextConfig;
