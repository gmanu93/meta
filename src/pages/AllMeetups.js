import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from 'react';

import MeetupList from "../components/meetups/MeetupList";

function AllMeetupsPage() {
  const [loadedMeetups, setLoadedMeetups] = useState([]);
  const meetingsCollectionRef = collection(db, "meetups");

  useEffect(() => {
    const getMeetings = async () => {
      const data = await getDocs(meetingsCollectionRef);
      setLoadedMeetups(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    }

    getMeetings();
  },[]);

  return (
    <section>
      <h1>All Meetups</h1>
      <MeetupList meetups={loadedMeetups} />
    </section>
  );
}

export default AllMeetupsPage;
