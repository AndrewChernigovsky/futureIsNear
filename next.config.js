/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'http',
				hostname: 'chernigovsky1081.eternalhost.info',
				port: '',
				pathname: '/img/**/*',
			},
		],
	},
};
module.exports = nextConfig
