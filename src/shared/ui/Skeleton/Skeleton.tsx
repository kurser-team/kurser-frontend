import { HTMLAttributes } from "react"

import styles from "./Skeleton.module.scss"
import clsx from "clsx"

export const Skeleton = ({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) => {
  return <div className={clsx(className, styles.container)} {...props}></div>
}
