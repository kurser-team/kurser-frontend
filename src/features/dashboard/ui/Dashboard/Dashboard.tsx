"use client"

import { Balance } from "@/features/balance"
import { Header } from "@/shared/ui/Header"
import { AnimatedLogo } from "@/features/auth/ui/AnimatedLogo"
import { Spinner } from "@/shared/ui/Spinner"
import { Button } from "@/shared/ui/Button"
import { Tab, Tabs } from "@/shared/ui/Tabs"
import { HomeIcon, RefreshIcon, RoundedArrowsIcon } from "@/shared/icons"
import { useState } from "react"

import styles from "./Dashboard.module.scss"

export const Dashboard = () => {
  const [tab, setTab] = useState<string>("")

  return (
    <div className={styles.container}>
      <Header />
      <Balance />
      <AnimatedLogo />
      <Spinner style={{ width: "48px", height: "48px" }} />

      <Button variant="default" style={{ padding: "18px" }}>
        Click me
      </Button>
      <Button variant="contained">Get</Button>
      <Button variant="outlined">Click me</Button>

      <Tabs tab={tab} setTab={setTab}>
        <Tab value="Tab 1" Icon={HomeIcon} />
        <Tab value="Tab 2" Icon={RoundedArrowsIcon} />
        <Tab value="Tab 3" Icon={RefreshIcon} />
      </Tabs>
    </div>
  )
}
