import styles from "./MeetupItem.module.css";
import Card from "../ui/Card";

export default function MeetupList({ image, title, address, description }) {
  return (
    <li className={styles.item}>
      <Card>
        <div className={styles.image}>
          <img src={image} alt={description} />
        </div>
        <div className={styles.content}>
          <h3>{title}</h3>
          <address>{address}</address>
          <p>{description}</p>
        </div>
        <div className={styles.actions}>
          <button>Add to favorites</button>
        </div>
      </Card>
    </li>
  );
}
