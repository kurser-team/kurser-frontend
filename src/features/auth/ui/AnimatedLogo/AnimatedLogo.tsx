"use client"

import { BrandArrowIcon, LogoLongWithoutArrow } from "@/shared/icons"
import { useMemo, useRef, useState } from "react"
import { useMouseMove } from "@/shared/lib/hooks"

import styles from "./AnimatedLogo.module.scss"

export const AnimatedLogo = () => {
  const brandArrowRef = useRef<HTMLElement>(null)
  const [isVideoEnded, setIsVideoEnded] = useState(false)

  const mousePosition = useMouseMove()

  const arrowAngle = useMemo(() => {
    if (!isVideoEnded) return 0

    const boundingRect = brandArrowRef.current?.getBoundingClientRect()
    if (!boundingRect) return 0

    const centerX = boundingRect.x + boundingRect.width / 2
    const centerY = boundingRect.y + boundingRect.height / 2

    const deltaX = mousePosition.x - centerX
    const deltaY = mousePosition.y - centerY

    if (deltaX > 0) {
      return Math.atan(deltaY / deltaX)
    } else {
      return Math.atan(deltaY / deltaX) - Math.PI
    }
  }, [mousePosition])

  const onEnded = () => {
    setIsVideoEnded(true)
  }

  return (
    <div className={styles.container}>
      {!isVideoEnded ? (
        <video autoPlay muted onEnded={onEnded} className={styles.video}>
          <source src="intro.webm" type="video/webm" />
        </video>
      ) : (
        <div className={styles["logo-container"]}>
          <LogoLongWithoutArrow className={styles["logo-without-arrow"]} />
          <BrandArrowIcon
            ref={brandArrowRef}
            style={{ transform: `rotate(${arrowAngle}rad)` }}
            className={styles["brand-arrow"]}
          />
        </div>
      )}
    </div>
  )
}
