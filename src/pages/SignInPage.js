import React from 'react';
import { Box, Button, Grid, Typography } from '@mui/material';

import { Auth } from 'aws-amplify';

const SignInPage = () => {

  const handleSubmit = async () => {
    try {
      await Auth.federatedSignIn();
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <Grid
      container
      spacing={1}
      justifyContent="center"
      alignItems="center"
      direction="column"
      height="100vh">
      <Grid container item md={6} xs={12} direction="column" alignItems="center" p={3}>
        <Box>
          <Button
            type="submit"
            variant="contained"
            onClick={handleSubmit}
            sx={{ display: 'block', width: 300, margin: '30px auto', backgroundColor: "#28183A", height: "40px", color: "#FFF" }}
          >Log in</Button>
        </Box>
      </Grid>
    </Grid>
  );
};

export default SignInPage;
