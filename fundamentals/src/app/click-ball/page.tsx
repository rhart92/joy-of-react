'use client'
import styles from './styles.module.css'

export default function ClickBall() {
  const clickHandler = (type: "bomb" | "ball") => {
    if (type === "bomb") {
      alert('You lose!')
    } else {
      alert('You win!')
    }
  }

  return (
    <div className={`m-4 border border-white ${styles.container}`}>
      <button className={styles.ball} onClick={() => clickHandler("ball")}></button>
      <button className={styles.bomb} onClick={() => clickHandler("bomb")}>💣</button>
    </div>
  )
}
