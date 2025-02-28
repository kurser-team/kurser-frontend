"use client"

import {
  Children,
  cloneElement,
  FormEvent,
  HTMLAttributes,
  ReactElement,
} from "react"
import { v4 } from "uuid"
import { TabProps } from "./Tab"

import clsx from "clsx"
import styles from "./Tabs.module.scss"

export interface TabsProps extends HTMLAttributes<HTMLFieldSetElement> {
  tab: string
  setTab: (tab: string) => void
}

export const Tabs = ({
  children,
  className,
  tab,
  setTab,
  ...props
}: TabsProps) => {
  const name = v4()

  const onChange = (event: FormEvent<HTMLFieldSetElement>) => {
    const target = event.target as HTMLInputElement
    setTab(target.value)
  }

  return (
    <fieldset
      data-tab={tab}
      onChange={onChange}
      className={clsx(styles.fieldset, className)}
      {...props}
    >
      {Children.map(children, (child) => {
        if (child && typeof child === "object" && "type" in child) {
          return cloneElement(child as ReactElement<TabProps>, {
            name: name,
            isActive: tab === (child as ReactElement<TabProps>).props.value,
          })
        } else return child
      })}
    </fieldset>
  )
}
