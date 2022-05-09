import { useNavigate } from "react-router";

import NewMeetupForm from "../components/meetups/NewMeetupForm";

export default function NewMeetup() {
  const navigate = useNavigate();

  function addMeetupHandler(meetupData) {
    const urlDb = "https://meetups-db-default-rtdb.firebaseio.com/meetups.json";
    fetch(urlDb, {
      method: "POST",
      body: JSON.stringify(meetupData),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => {
      navigate("/");
    });
  }

  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
}
