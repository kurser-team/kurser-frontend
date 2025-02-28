import { FC, HTMLAttributes, useRef } from "react"

import styles from "./Tab.module.scss"
import clsx from "clsx"

export interface TabProps extends HTMLAttributes<HTMLDivElement> {
  value: string
  isActive: boolean
  label?: string
  name?: string
  Icon?: FC<unknown>
}

export const Tab = ({
  value,
  isActive,
  name,
  label,
  Icon,
  className,
  ...props
}: TabProps) => {
  const ref = useRef<HTMLInputElement>(null)

  return (
    <div
      ref={ref}
      data-active={isActive}
      className={clsx(styles.container, className)}
      {...props}
    >
      <label htmlFor={value} data-active={isActive} className={styles.label}>
        {label}
        {Icon && <Icon />}
      </label>
      <input
        type="radio"
        id={value}
        name={name}
        value={value}
        className={styles.input}
      />
    </div>
  )
}
