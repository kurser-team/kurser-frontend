import { FC, HTMLAttributes } from "react"

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  variant: "default"
}

export const Button: FC<ButtonProps> = ({ variant }) => {
  return <button></button>
}
