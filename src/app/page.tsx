import { Dashboard } from "@/features/dashboard"
import Link from "next/link"

const HomePage = () => {
  return (
    <>
      <Dashboard />
      <Link href="/auth/login.html" target="_blank">
        Login
      </Link>
    </>
  )
}

export default HomePage
