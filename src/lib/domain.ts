export const extractDomain = (url: string | undefined) => {
	if (url === undefined || url === "")
		throw new Error("NEXT_PUBLIC_APP_URL is not set")

	const urlObj = new URL(url)
	return urlObj.hostname
}
