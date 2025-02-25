import { Balance } from "@/features/balance"
import { Header } from "@/shared/ui/Header"
import { AnimatedLogo } from "@/features/auth/ui/AnimatedLogo"
import { Spinner } from "@/shared/ui/Spinner"

import styles from "./Dashboard.module.scss"

export const Dashboard = () => {
  return (
    <div className={styles.container}>
      <Header />
      <Balance />
      <AnimatedLogo />
      <Spinner style={{ width: "48px", height: "48px" }} />
    </div>
  )
}
