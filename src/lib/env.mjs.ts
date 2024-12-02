import { createEnv } from "@t3-oss/env-nextjs"
import { z } from "zod"

export const env = createEnv({
	server: {},
	client: {
		NEXT_PUBLIC_COMMIT_URL: z.string()
	},
	runtimeEnv: {
		NEXT_PUBLIC_COMMIT_URL: process.env.NEXT_PUBLIC_COMMIT_URL
	},
	skipValidation: process.env.BUILD_TIME?.toLowerCase() === "true"
})
