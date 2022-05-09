import styles from "./MeetupList.module.css";
import MeetupItem from "./MeetupItem";

export default function MeetupList({ meetups }) {
  return (
    <ul className={styles.list}>
      {meetups.map((meetup) => {
        return (
          <MeetupItem
            key={meetup.id}
            id={meetup.id}
            image={meetup.image}
            description={meetup.description}
            title={meetup.title}
          />
        );
      })}
    </ul>
  );
}
