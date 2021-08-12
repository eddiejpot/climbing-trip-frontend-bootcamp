/* =================================================================== */
/* =========================================================== IMPORTS */
/* =================================================================== */
import './App.css';
import React, { useEffect, useState } from 'react';
import { getCookie } from './util/cookie.mjs';
import LoginSignUp from './components/LoginSignUp/LoginSignUp.jsx';
import Trip from './components/Trip/AllTrips.jsx';

/* =================================================================== */
/* ============================================================== MAIN */
/* =================================================================== */
export default function App() {
  // State Management
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // On page load
  useEffect(() => {
    // Check if user is logged in, if logged in change login state to true
    if (getCookie('userId')) {
      setIsLoggedIn(() => true);
    }
  }, []);

  /* =========================================================== RENDER */
  const ComponentToRender = () => {
    if (isLoggedIn) {
      return (
        <Trip />
      );
    }
    return (
      <LoginSignUp />
    );
  };

  return (
    <ComponentToRender />
  );
}
