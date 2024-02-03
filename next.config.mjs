/** @type {import('next').NextConfig} */
import { PHASE_DEVELOPMENT_SERVER } from "next/constants.js";

const nextConfig = (phase) => {
	if (phase === PHASE_DEVELOPMENT_SERVER) {
		return {
			reactStrictMode: true,
			env: {
				mongodb_username: "deghedy",
				mongodb_password: "Aboudeghedy100_",
				mongodb_clustername: "cluster0",
				mongodb_database: "personal-blog-next-dev",
			},
		};
	}
	return {
		reactStrictMode: true,
		env: {
			mongodb_username: "deghedy",
			mongodb_password: "Aboudeghedy100_",
			mongodb_clustername: "cluster0",
			mongodb_database: "personal-blog-next",
		},
	};
};

export default nextConfig;
