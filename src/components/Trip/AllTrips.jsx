/* =================================================================== */
/* =========================================================== IMPORTS */
/* =================================================================== */
import React, { useEffect, useContext } from 'react';
// eslint-disable-next-line import/no-cycle
import { useHistory } from 'react-router-dom';

/* =================================================================== */
/* =========================================================== CONTEXT */
/* =================================================================== */
import { isLoggedInContext } from '../../Context/isLoggedIn.jsx';

/* =================================================================== */
/* ============================================================== MAIN */
/* =================================================================== */
export default function AllTrips() {
  // On page load. If user is not logged in, route to login page
  const { isLoggedIn } = useContext(isLoggedInContext);
  const history = useHistory();
  if (!isLoggedIn) {
    history.push('/');
  }
  // State Management

  // On page load
  useEffect(() => {

  }, []);

  /* =========================================================== RENDER */
  return (
    <>
      <h1>ALL TRIPS</h1>
      <p>To do:  Trips Table Component</p>
    </>
  );
}
