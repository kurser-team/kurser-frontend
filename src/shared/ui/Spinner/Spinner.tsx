import { BrandArrowIcon } from "@/shared/icons"

import styles from "./Spinner.module.scss"
import clsx from "clsx"
import { HTMLAttributes } from "react"

export const Spinner = ({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className={clsx(styles.container, className)} {...props}>
      <BrandArrowIcon className={clsx(styles.arrow, styles["arrow-1"])} />
      <BrandArrowIcon className={clsx(styles.arrow, styles["arrow-2"])} />
      <BrandArrowIcon className={clsx(styles.arrow, styles["arrow-3"])} />
      <BrandArrowIcon className={clsx(styles.arrow, styles["arrow-4"])} />
    </div>
  )
}
