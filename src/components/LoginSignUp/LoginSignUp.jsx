/* =================================================================== */
/*= ========================================================== IMPORTS */
/*= ================================================================== */
import React, { useState, useContext } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { useHistory } from 'react-router-dom';
import { createCookie } from '../../util/cookie.mjs';

/* =========================================================== CONTEXT */
import { isLoggedInContext } from '../../Context/IsLoggedIn.jsx';

/* =================================================================== */
/* ============================================================== MAIN */
/* =================================================================== */
export default function SignUp() {
  // On page load. If user is logged in, route to trip page
  const { isLoggedIn, setIsLoggedIn } = useContext(isLoggedInContext);
  const history = useHistory();
  if (isLoggedIn) {
    history.push('/trips');
  }

  // State Management
  const [isAMember, setIsAMemeber] = useState(true);

  // User Login Or Sign Up
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const dataToSend = { email: data.get('email') };

    if (isAMember) {
      // Login
      console.log('Logging In', dataToSend);
      createCookie('userId', 1);
      setIsLoggedIn(() => true);
    } else {
      // Sign up
      console.log('Sign Up', dataToSend);
    }
  };

  /* =========================================================== RENDER */
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >

        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography component="h1" variant="h5">
                {isAMember ? 'HAVE AN ACCOUNT?' : 'CREATE ACCOUNT'}
              </Typography>
              <TextField
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
          </Grid>
          <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
            {isAMember ? 'LOGIN' : 'SIGN ME UP'}
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="#" variant="body2" onClick={() => setIsAMemeber(() => !isAMember)}>
                {isAMember ? 'Dont have an account? Sign Up!' : 'Have an account? Login!'}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
