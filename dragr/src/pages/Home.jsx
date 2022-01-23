import React, { useState, useEffect } from 'react';
import EventCard from '../components/EventCard';
import { collection, getDocs } from "firebase/firestore"; 
import db from '../firebase';

export default function Home() {
  const [events, setEvents] = useState([]);
  const getEvents = async () => {
    //const querySnapshot = await getDocs(collection(db, "events"));
    const docSnapshot = await getDocs(collection(db, "events"));
    const eventsData = [];
    docSnapshot.forEach((doc) =>
      eventsData.push(doc.data())
    );

    setEvents(eventsData);
  };

  useEffect(() => {
    getEvents();
  }, []);

  const renderEvents = () => {
    return events.map(({performer, location, date, time, picture}) =>
      <EventCard key={date} performer={performer} location={location} date={date} time={time} picture={picture} />
    );
  }

  const styles = {
    page: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    eventsWrapper: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    }
  }

  return (
    <div>
      <div style={styles.eventsWrapper}>
        { renderEvents() }
      </div>
    </div>
  );
}
