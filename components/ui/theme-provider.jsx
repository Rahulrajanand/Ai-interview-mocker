"use client"

import React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"

// Custom ThemeProvider to wrap your app with the theme context
export function ThemeProvider({ children, ...props }) {
  return (
    <NextThemesProvider {...props}>
      {children}
    </NextThemesProvider>
  )
}
