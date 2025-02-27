import { FC, HTMLAttributes } from "react"
import clsx from "clsx"
import styles from "./Button.module.scss"

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  variant: "default" | "contained" | "outlined"
}

export const Button: FC<ButtonProps> = ({ variant, className, ...props }) => {
  return (
    <button
      className={clsx(styles.button, className)}
      data-variant={variant}
      {...props}
    />
  )
}
