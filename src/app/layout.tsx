import clsx from "clsx"
import { Geist } from "next/font/google"

import "@shared/styles/global/_themes.scss"

import styles from "./layout.module.scss"

const geist = Geist({ subsets: ["latin"] })

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
