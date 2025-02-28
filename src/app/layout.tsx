import clsx from "clsx"
import { Geist } from "next/font/google"
import { Metadata } from "next"

const geist = Geist({ subsets: ["latin"] })

import styles from "./layout.module.scss"
import "@shared/styles/global/_themes.scss"

export const metadata: Metadata = {
  title: "kurser wallet",
  description:
    "Your friendly guide to the crypto world - safe, simple, and smart",
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
