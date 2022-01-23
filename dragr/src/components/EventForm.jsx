// New Demo https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/forms_and_events/
// Original Demo (Deprecated) https://reactjs.org/docs/forms.html 
import React from 'react';
import { useFormik } from 'formik';
import { collection, addDoc } from "firebase/firestore"; 
import db from '../firebase';

export default function EventForm() {

    const submitInfo = async (values) => {
        await addDoc(collection(db, "events"), {
            title: values.title,
            performer: values.performer,
            date: values.date,
            time: values.time,
            location: values.location
        });
    };

    const formik = useFormik({
        initialValues: {
            title: '',
            performer: '',
            date: '',
            time: '',
            location: ''
        },
        onSubmit: values => {
            submitInfo(values);
        },
    });

    return(
        <form onSubmit={formik.handleSubmit}>
            <h3>Create a New Event:</h3>
            <label>Event Title:</label>
            <input id="title" name="title" onChange={formik.handleChange} type="eventTitle"></input>
            <br></br>
            <label>Performer Name:</label>
            <input id="performer" name="performer" onChange={formik.handleChange} type="performerName"></input>
            <br></br>
            <label>Date:</label>
            <input id="date" name="date" onChange={formik.handleChange} type="date"></input>
            <br></br>
            <label>Time:</label>
            <input id="time" name="time" onChange={formik.handleChange} type="time"></input>
            <br></br>
            <label>Location: 
                <input id="location" name="location" onChange={formik.handleChange} type="location"></input>
            </label>
            <br></br>
            <input type="submit" value="Create New Event"></input>
        </form>
    );
}