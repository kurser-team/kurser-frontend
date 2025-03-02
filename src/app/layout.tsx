import clsx from "clsx"
import { Metadata } from "next"
import { Geist } from "next/font/google"

const geist = Geist({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
})

import styles from "./layout.module.scss"
import "@shared/styles/global/_themes.scss"

export const metadata: Metadata = {
  title: "kurser wallet",
  description:
    "Your friendly guide to the crypto world — safe, simple, and smart",
  icons: {
    icon: "/favicon.ico",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={clsx(styles.body, geist.className)}>{children}</body>
    </html>
  )
}
