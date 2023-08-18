import { ReactNode } from "react"

export type InputProperties =  {
  placeholder?: string,
  style?: {[key: string]: string}
  className?: string,
  prefix?: ReactNode
}