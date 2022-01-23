import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Header from './components/Header';
import Home from './pages/Home';
import EventCard from './components/EventCard';
import EventForm from './components/EventForm';

export default function App() {
  return (
    <div>
      <Router>
      <Header />
        <Routes>
          <Route exact path='/performers' element={<Header />}/>
          <Route exact path='/events' element={<EventForm />}/>
          <Route exact path='/' element={<Home />}/>
        </Routes>
      </Router>
    </div>
  );
}
