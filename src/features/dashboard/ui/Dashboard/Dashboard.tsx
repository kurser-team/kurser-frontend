import { Balance } from "@/features/balance"
import { Header } from "@/shared/ui/Header"
import { AnimatedLogo } from "@/features/auth/ui/AnimatedLogo"
import { Spinner } from "@/shared/ui/Spinner"

import styles from "./Dashboard.module.scss"
import { Skeleton } from "@/shared/ui/Skeleton"

export const Dashboard = () => {
  return (
    <div className={styles.container}>
      <Header />
      <Balance />
      <AnimatedLogo />
      <Spinner style={{ width: "48px", height: "48px" }} />

      <div
        style={{
          height: "48px",
          width: "48px",
        }}
      >
        <Skeleton style={{ borderRadius: "9999px" }} />
      </div>
      <div
        style={{
          height: "10px",
        }}
      >
        <Skeleton style={{ borderRadius: "0px" }} />
      </div>
      <div
        style={{
          height: "20px",
        }}
      >
        <Skeleton />
      </div>
    </div>
  )
}
