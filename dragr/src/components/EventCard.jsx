import React from 'react';
import {
  Card,
  Button,
} from 'react-bootstrap';

export default function App({ performer, location, date, time, picture }) {
  const styles = {
    container: {
      margin: '2vw',
      width: '20vw',
      backgroundColor: '#e7e0ff'
    },
    button: {
      margin: '0 auto',
      backgroundColor: '#fcc140',
      color: '#58429d',
      border: 'none',
    }
  }
  return (
    <Card style={styles.container}>
      <Card.Img variant="top" src={picture} />
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