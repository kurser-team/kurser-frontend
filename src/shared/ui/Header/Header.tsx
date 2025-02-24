import { LogoShort } from "@/shared/icons"

import styles from "./Header.module.scss"

export const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles["logo-container"]}>
        <LogoShort />
      </div>
    </div>
  )
}
