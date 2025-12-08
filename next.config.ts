import type { NextConfig } from "next"
import { extractDomain } from "@/lib/domain"

const nextConfig: NextConfig = {
	transpilePackages: ["geist"],
	allowedDevOrigins:
		process.env.NODE_ENV !== "development"
			? undefined
			: [extractDomain(process.env.NEXT_PUBLIC_APP_URL)]
}

module.exports = nextConfig
