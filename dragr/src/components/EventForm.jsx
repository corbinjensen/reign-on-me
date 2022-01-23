// New Demo https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/forms_and_events/
// Original Demo (Deprecated) https://reactjs.org/docs/forms.html 
import React from 'react';

export default function EventForm() {

    return(
        <form>
            <h3>Create a New Event:</h3>
            <label>Event Title:</label>
            <input type="eventTitle"></input>
            <br></br>
            <label>Performer Name:</label>
            <input type="performerName"></input>
            <br></br>
            <label>Date:</label>
            <input type="date"></input>
            <br></br>
            <label>Time:</label>
            <input type="time"></input>
            <br></br>
            <label>Location: 
                <input type="location"></input>
            </label>
            <br></br>
            <input type="submit" value="Create New Event"></input>
        </form>
    );
}