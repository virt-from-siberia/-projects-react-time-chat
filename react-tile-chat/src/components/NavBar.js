import React from 'react';
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import {NavLink} from "react-router-dom";
import {LOGIN_ROUTE} from "../utils/constants";


export const NavBar = () => {
  const user = false

  return (
    <AppBar color="secondary" position="static">
      <Toolbar variant="dense">
        <Grid container justify="flex-end">
          {!user ?
            (<Button variant="outline">Логин</Button>) :
            (
              <NavLink to={LOGIN_ROUTE}>
                <Button variant="outline">Выйти</Button>
              </NavLink>
            )
          }
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

