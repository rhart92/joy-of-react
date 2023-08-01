import React from "react"
import styles from "./spinner.module.css"
import { Loader } from 'react-feather'

export function Spinner(props: { size?: number }) {
  return <span className={styles.spinner}><Loader size={props.size ?? 32} /></span>
}
