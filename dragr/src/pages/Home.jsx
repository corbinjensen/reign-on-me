import React, { useState, useEffect } from 'react';
import EventCard from '../components/EventCard';
import { collection, getDocs } from "firebase/firestore"; 
import db from '../firebase';

export default function Home() {
  const [events, setEvents] = useState([]);
  const getEvents = async () => {
    //const querySnapshot = await getDocs(collection(db, "events"));
    setEvents([
      {
        performer: "John Doe",
        location: "New York, NY",
        date: "Thursday, Jan 27 2022",
        time: "9PM",
        picture: "https://source.unsplash.com/400x200/"
      },
      {
        performer: "Jane Doe",
        location: "Los Angeles, CA",
        date: "Friday, Jan 28 2022",
        time: "9PM",
        picture: "https://source.unsplash.com/400x200/"
      },
      {
        performer: "John Doe",
        location: "New York, NY",
        date: "Saturday, Jan 29 2022",
        time: "9PM",
        picture: "https://source.unsplash.com/400x200/"
      },
      {
        performer: "Jane Doe",
        location: "New York, NY",
        date: "Sunday, Jan 30 2022",
        time: "9PM",
        picture: "https://source.unsplash.com/400x200/"
      }
    ]);
  };

  useEffect(() => {
    getEvents();
  }, []);

  const renderEvents = () => {
    return events.map(({performer, location, date, time, picture}) =>
      <EventCard performer={performer} location={location} date={date} time={time} picture={picture} />
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
