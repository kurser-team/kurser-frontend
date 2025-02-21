import { Balance } from "@/features/balance"
import { Header } from "@/shared/ui/Header"

import styles from "./Dashboard.module.scss"

export const Dashboard = () => {
  return (
    <div className={styles.container}>
      <Header />
      <Balance />
    </div>
  )
}
