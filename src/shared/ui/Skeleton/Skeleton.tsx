import { FC, HTMLAttributes } from "react"

export interface SkeletonProps extends HTMLAttributes<HTMLSpanElement> {
  height: number
}

export const Skeleton: FC<SkeletonProps> = ({ height, ...props }) => {
  return <span style={{ height: height }} {...props}></span>
}
