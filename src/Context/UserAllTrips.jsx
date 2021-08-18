/*= ==================================================================================== */
/*= ============================================================================ IMPORT */
/*= ==================================================================================== */
import React, { useReducer, createContext } from 'react';
import axios from 'axios';

/*= ======================================================================== INITIALSTATE */
// create an object that represents all the data contained in the app
// we moved all of this data from the app component into the booking
export const initialState = {
  trips: [],
};

/*= ============================================================================== GLOBALS */
// define each action we want to do on the
// data we defined above
const CREATE_TRIP = 'CREATE_TRIP';
const DELETE_TRIP = 'DELETE_TRIP';
const LOAD_TRIPS = 'LOAD_TRIPS';

/*= ======================================================================= REDUCER FUNCTION */
// define the matching reducer function
export function allTripsReducer(state, action) {
  switch (action.type) {
    case CREATE_TRIP:
      break;

    case DELETE_TRIP:
      break;
    case LOAD_TRIPS:
      return { ...state, trips: action.payload.trips };
    default:
      return state;
  }
  return state;
}

/*= ========================================================================== ACTION CREATORS */
// These functions accept any input relevant to the action,
// and return an object that represents that action, which is typically
// passed to the dispatch function. Actions always contain a type attribute
// used to identify the action and tell the reducer what logic to run.
export function loadAllTripsAction(trips) {
  return {
    type: LOAD_TRIPS,
    payload: {
      trips,
    },
  };
}

/*= ========================================================================== PROVIDER CODE */
// In this section we extract out the provider HOC

export const AllTripsContext = createContext(null);
const { Provider } = AllTripsContext;

export function AllTripProvider({ children }) {
  const [state, dispatch] = useReducer(allTripsReducer, initialState);
  return (
    <Provider value={{ state, dispatch }}>
      {children}
    </Provider>
  );
}
/*= ============================================================================== REQUESTS */
// In this section we extract out the
// code that makes requests to the backend
// these functions must be passed the dispatch from the current context
const BACKEND_URL = 'http://localhost:3004';

export async function loadAllTrips(callbackDispatch) {
  console.log('in load all trips function');
  // get all trips
  const { data } = await axios.get(`${BACKEND_URL}/trips`);

  // find no of routes for each trip
  const promises = [];

  // THIS DOESN'T REALLY WORK - gets the data by it later disappears
  const findNumOfRoutes = (index) => {
    const tripId = data.trips[index].id;
    return axios.get(`${BACKEND_URL}/trip/${tripId}`);
  };

  const resolvePromises = () => {
    for (let i = 0; i < data.trips.length; i += 1) {
      promises.push(findNumOfRoutes(i));
    }

    Promise.all(promises)
      .then((results) => {
        for (let i = 0; i < results.length; i += 1) {
          const trip = results[i];
          data.trips[i].numRoutes = trip.data.tripRoutes.length;
        }
      })
      .catch((e) => {
        // Handle errors here
      });
  };

  resolvePromises();

  callbackDispatch(loadAllTripsAction(data.trips));
  // console.log('ASKJDIJHASHDasd');
  // console.log(data.trips);
}
