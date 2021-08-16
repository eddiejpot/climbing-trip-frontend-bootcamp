/* =================================================================== */
/* =========================================================== IMPORTS */
/* =================================================================== */
import React, { useContext } from 'react';
// eslint-disable-next-line import/no-cycle
import { useHistory } from 'react-router-dom';
import TripTable from '../Tables/TripTable.jsx';
import AllTripsNavBar from '../NavBar/AllTripsNavBar.jsx';

/* =================================================================== */
/* ================================================ CONTEXT / REDUCERS */
/* =================================================================== */
import { isLoggedInContext } from '../../Context/IsLoggedIn.jsx';
import { AllTripProvider } from '../../Context/UserAllTrips.jsx';

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
  // // State Management
  // // initialize the state from the context provider
  // const { state, dispatch } = useContext(AllTripsContext);
  // // This page should reload only when a new route is added or details of a trip are changed

  // // On page load
  // useEffect(() => {
  //   // get all trips data
  //   loadAllTrips(dispatch);
  // }, []);
  console.log('ALL TRIPS PAGE');

  /* =========================================================== RENDER */
  return (
    <>
      <AllTripsNavBar />
      <h1>ALL TRIPS</h1>
      <AllTripProvider>
        <TripTable />
      </AllTripProvider>
    </>
  );
}
