import React from 'react';
import Header from '../components/Header';
import EventCard from '../components/EventCard';

export default function Home() {
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
        <EventCard performer="John Doe" location="New York, NY" date="Thursday, Jan 27 2022" time="9pm" />
        <EventCard performer="Jane Doe" location="Los Angeles, CA" date="Friday, Jan 28 2022" time="7pm" />
        <EventCard performer="John Doe" location="New York, NY" date="Thursday, Jan 27 2022" time="9pm" />
        <EventCard performer="Jane Doe" location="Los Angeles, CA" date="Friday, Jan 28 2022" time="7pm" />
      </div>
    </div>
  );
}
