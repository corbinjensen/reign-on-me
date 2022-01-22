import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Header from './components/Header';
import Home from './pages/Home';
import EventCard from './components/EventCard';

export default function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path='/performers' element={<Header />}/>
          <Route exact path='/events' element={<Header />}/>
          <Route exact path='/' element={<Home />}/>
        </Routes>
      </Router>
    </div>
  );
}
