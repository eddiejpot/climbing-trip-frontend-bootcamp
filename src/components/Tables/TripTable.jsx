/* =================================================================== */
/* =========================================================== IMPORTS */
/* =================================================================== */
import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
/* =================================================================== */
/* ================================================ CONTEXT / REDUCERS */
/* =================================================================== */
import { AllTripsContext, loadAllTrips } from '../../Context/UserAllTrips.jsx';

/* =================================================================== */
/* ============================================================== MAIN */
/* =================================================================== */

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function TripTable() {
  const history = useHistory();
  const classes = useStyles();

  // State Management
  // initialize the state from the context provider
  const { state, dispatch } = useContext(AllTripsContext);
  // // On page load
  useEffect(() => {
    // get all trips data
    loadAllTrips(dispatch);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const ComponentToRender = () => {
    console.log('TRIPTABLE STATE');

    for (let i = 0; i < state.trips.length; i += 1) {
      console.log(state.trips[i]);
      console.log(state.trips[i].numRoutes);
    }

    if (state.trips.length === 0) {
      return <h1>loading...</h1>;
    }
    return (
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>TRIP</TableCell>
              <TableCell align="left">NO. OF ROUTES</TableCell>
              <TableCell align="left">FROM</TableCell>
              <TableCell align="left">TO</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {state.trips.map((row) => (
              <TableRow key={row.id} onClick={() => history.push(`/trip/${row.id}`)}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="left">{row.numOfRoutes}</TableCell>
                <TableCell align="left">{row.startDate}</TableCell>
                <TableCell align="left">{row.endDate}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  };

  return (
    <ComponentToRender />
  );
}
