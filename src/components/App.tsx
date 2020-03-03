import React, { useState, useEffect } from "react";
import AppBarComp from "./AppBarComp";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

function App() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1
    },
    paper0: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary,
      height: "88vh", // TODO: Fit it properly
      width: "200px"
    },
    paper1: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary,
      height: "88vh",
      width: `calc(${width}px - 210px)`
    }
  }));

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBarComp />
      <Grid container spacing={1}>
        <Paper className={classes.paper0}>200px</Paper>
        <Paper className={classes.paper1}>xs=9</Paper>
      </Grid>
    </div>
  );
}

export default App;
