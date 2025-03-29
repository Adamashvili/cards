import styles from "./SecondCard.module.css"

export default function SecondCard({item}) {
  return (
    <div className={styles.card}>
        <img src={item.images[0]} alt="" />
        <h3>{item.title}</h3>
        <h6>{item.category}</h6>
        <p>{item.description}</p>
        <button>Call</button>
    </div>
  )
}