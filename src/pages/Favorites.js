import { useContext } from "react";
import FavoritesContext from "../store/favorites-context";

import MeetupList from "../components/meetups/MeetupList";

export default function Favorites() {
  const favoritesCtx = useContext(FavoritesContext);

  return (
    <section>
      <h1>My Favorites</h1>
      {favoritesCtx.totalFavorites ? (
        <MeetupList meetups={favoritesCtx.favorites} />
      ) : (
        <p>Not favorites yet</p>
      )}
    </section>
  );
}
