"use client"

import type { ThemeProviderProps } from "next-themes"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { AnchoredToastProvider, ToastProvider } from "@/components/ui/toast"

export function Providers({ children, ...props }: ThemeProviderProps) {
	return (
		<NextThemesProvider {...props}>
			<ToastProvider>
				<AnchoredToastProvider>{children}</AnchoredToastProvider>
			</ToastProvider>
		</NextThemesProvider>
	)
}
