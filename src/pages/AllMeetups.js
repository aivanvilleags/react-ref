import { useState, useEffect } from "react";

import MeetupList from "../components/meetups/MeetupList";
// import { DUMMY_DATA } from "../data/DummyData";

export default function AllMeetups() {
  const [isLoading, setIsLoading] = useState(true);
  const [meetups, setmeetups] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    const urlDb = "https://meetups-db-default-rtdb.firebaseio.com/meetups.json";
    fetch(urlDb)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const meetups = [];

        for (const key in data) {
          const newMeetup = {
            id: key,
            ...data[key],
          };

          meetups.push(newMeetup);
        }

        setIsLoading(false);
        setmeetups(meetups);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading data...</p>
      </section>
    );
  }

  return (
    <div>
      <h1>All Meetups</h1>
      <MeetupList meetups={meetups} />
    </div>
  );
}
