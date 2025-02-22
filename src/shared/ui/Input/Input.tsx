import { FC, HTMLAttributes } from "react"

export interface InputProps extends HTMLAttributes<HTMLInputElement> {
  value: string
}

export const Input: FC<InputProps> = ({ value }) => {
  return <input value={value} />
}
