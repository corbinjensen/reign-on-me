import React from 'react';
import Header from '../components/Header';

export default function EventPage() {

    return (
        <div>
          <Header />
          <div style={styles.eventsWrapper}>
            <h2>Event Page Title</h2>
            <img />
            <div className='event_deets'>
                <ul>
                    <li>Location: </li>
                    <li>Date: </li>
                    <ul>Time: </ul>
                </ul>
            </div>
          </div>
        </div>
      );
}