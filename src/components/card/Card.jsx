import styles from "./Card.module.css"

export default function Card() {
    console.log(styles);
    

  return (
    <>
        <h3 className={styles.myName}>Re-school is the Best...</h3>
    </>
  )
}