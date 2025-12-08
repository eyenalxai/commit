import { createEnv } from "@t3-oss/env-core"
import * as z from "zod"

export const env = createEnv({
	clientPrefix: "NEXT_PUBLIC_",
	server: {
		NODE_ENV: z
			.enum(["development", "test", "production"])
			.default("development")
	},
	client: {
		NEXT_PUBLIC_APP_URL: z.url()
	},
	runtimeEnv: {
		NODE_ENV: process.env.NODE_ENV,
		NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL
	},
	isServer: typeof window === "undefined"
})
