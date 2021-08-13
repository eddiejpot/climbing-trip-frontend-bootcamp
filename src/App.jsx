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

/* =========================================================== CONTEXT */
import { IsLoggedInProvider } from './Context/isLoggedIn.jsx';

/* =================================================================== */
/* ============================================================== MAIN */
/* =================================================================== */
export default function App() {
  /* =========================================================== RENDER */
  return (
    <Router>
      <Switch>
        <IsLoggedInProvider>
          <Route path="/" exact component={LoginSignUp} />
          <Route path="/trip" exact component={AllTrips} />
          <Route path="/trip/:id" exact component={SingleTrip} />
        </IsLoggedInProvider>
      </Switch>
    </Router>
  );
}
