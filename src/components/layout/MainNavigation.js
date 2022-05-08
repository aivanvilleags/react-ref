import { Link } from "react-router-dom";
import styles from "./MainNavigation.module.css";

export default function MainNavigation(params) {
  return (
    <header className={styles.header}>
      <div>REACT MEETUP</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Meetups</Link>
          </li>
          <li>
            <Link to="/new-meetup">New Meetup</Link>
          </li>
          <li>
            <Link to="/favorites">Favorites</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
