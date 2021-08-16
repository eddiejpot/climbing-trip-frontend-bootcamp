import React, { useEffect, useContext, useState } from 'react';
// eslint-disable-next-line import/no-cycle
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import Container from '@material-ui/core/Container';
import { Grid } from '@material-ui/core';
import SingleTripTable from './SingleTripTable.jsx';

/* ================================== CONTEXT =============================== */

import { isLoggedInContext } from '../../Context/isLoggedIn.jsx';

/* ================================MAIN==============================  */
export default function SingleTrip() {
  // local state
  const [tripRoutes, setTripRoutes] = useState([{
    id: '', name: '', difficulty: '',
  }]);
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
    let singleTripRoutes = '';
    async function getTrip() {
      const id = window.location.pathname.split('/')[2];
      const singleTripDetails = await axios.get(`http://localhost:3004/trip/${id}`);
      //  array of route objects
      singleTripRoutes = singleTripDetails.data.tripRoutes;
      console.log(singleTripRoutes);
      setTripRoutes(singleTripRoutes);
    }
    getTrip();
  }, []);

  /* ==========================RENDER ================================= */

  return (
    <Container sx={{ m: 10 }}>
      <Grid container spacing={1}>
        <Grid>ALL ROUTES</Grid>
        <Grid><button type="button" onClick="do somthing">New Route</button></Grid>
      </Grid>
      <SingleTripTable tripRoutes={tripRoutes} />
    </Container>
  );
}
