import React from 'react'
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import { useHistory } from "react-router-dom";

import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetupPage() {
  const history = useHistory();
  const meetingsCollectionRef = collection(db, "meetups");

  const addMeetupHandler = async (meetupData) => {
    await addDoc(meetingsCollectionRef, meetupData).then(() => {
      history.replace("/react");
    });
  };

  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
}

export default NewMeetupPage;
