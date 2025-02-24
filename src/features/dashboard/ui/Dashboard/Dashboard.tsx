import { Balance } from "@/features/balance"
import { Header } from "@/shared/ui/Header"

import styles from "./Dashboard.module.scss"
import { AnimatedLogo } from "@/features/auth/ui/AnimatedLogo"

export const Dashboard = () => {
  return (
    <div className={styles.container}>
      <Header />
      <Balance />
      <AnimatedLogo />
      <input type="text" />
    </div>
  )
}
