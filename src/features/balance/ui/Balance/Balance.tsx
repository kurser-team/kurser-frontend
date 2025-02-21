import styles from "./Balance.module.scss"

export const Balance = () => {
  return (
    <div className={styles.container}>
      <div className={styles.total}>
        <span className={styles["total-balance"]}>Total balance</span>
        <span className={styles["balance-value"]}>$4,300,00</span>
      </div>
      <div className={styles.actions}></div>
    </div>
  )
}
