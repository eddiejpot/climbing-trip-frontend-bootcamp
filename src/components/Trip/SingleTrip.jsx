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
export default function SingleTrip() {
  // On page load. If user is not logged in, route to login page
  const { isLoggedIn } = useContext(isLoggedInContext);
  const history = useHistory();
  if (!isLoggedIn) {
    console.log(isLoggedIn);
    console.log('check');
    history.push('/');
  }
  // State Management
  console.log('this ran');
  // On page load
  useEffect(() => {

  }, []);

  /* =========================================================== RENDER */
  return (
    <>
      <h1>SINGLE TRIP</h1>
      <p>To do: Route Table Component</p>
    </>
  );
}
