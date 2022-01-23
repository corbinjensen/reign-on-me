import React from 'react';
import {
  Card,
  Button,
} from 'react-bootstrap';

export default function App({ performer, location, date, time }) {
  const styles = {
    container: {
      margin: '4vw',
      width: '20vw'
    },
    button: {
      margin: '0 auto',
      backgroundColor: 'red',
      border: 'none',
    }
  }
  return (
    <Card style={styles.container}>
      <Card.Img variant="top" src="https://source.unsplash.com/400x200/" />
      <Card.Body>
        <Card.Title>{performer}</Card.Title>
        {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
        <Card.Text>
          is performing at <b>{location}</b> on <b>{date}</b> at <b>{time}</b>. 
        </Card.Text>
        <Button style={styles.button}>Details</Button>
      </Card.Body>
    </Card>
  );
}