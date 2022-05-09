import { DUMMY_DATA } from "../data/DummyData";

import MeetupList from "../components/meetups/MeetupList";

export default function AllMeetups(params) {
  return (
    <div>
      <h1>All Meetups</h1>
      <MeetupList meetups={DUMMY_DATA} />
    </div>
  );
}
