import React from 'react';
import {Container} from "@mui/material";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

export const Login = () => {
  return (
    <Container>
      <Grid
        style={{height: window.innerHeight - 50}}
        alignItems="center"
        justify="center"
      >
        <Grid style={{width: 400, background: "lightgray"}}
              container
              alignItems="center"
              direction="column"
        >
          <Box p={5}>
            <Button variant="outlined">Войти с помощью google</Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

