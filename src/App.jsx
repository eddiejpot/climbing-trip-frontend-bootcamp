/* =================================================================== */
/*= ========================================================== IMPORTS */
/*= ================================================================== */
import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import LoginSignUp from './components/LoginSignUp/LoginSignUp.jsx';
import AllTrips from './components/Trip/AllTrips.jsx';
import SingleTrip from './components/Trip/SingleTrip.jsx';
import { createCookie } from './util/cookie.mjs';

/* =========================================================== CONTEXT */
import { IsLoggedInProvider } from './Context/IsLoggedIn.jsx';

console.log('single trip file');

/* =================================================================== */
/* ============================================================== MAIN */
/* =================================================================== */
export default function App() {
  // For this app example we'll log in automatically on page load
  createCookie('userId', 1);
  createCookie('userEmail', 'rock@gmail.com');

  /* =========================================================== RENDER */
  return (
    <Router>
      <Switch>
        <IsLoggedInProvider>
          <Route path="/" exact component={LoginSignUp} />
          <Route path="/trips" exact component={AllTrips} />
          <Route path="/trip/:id" exact component={SingleTrip} />
        </IsLoggedInProvider>
      </Switch>
    </Router>
  );
}
