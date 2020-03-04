import React, { useState, useLayoutEffect } from "react";
import { useDispatch } from "react-redux";

import AppBarComp from "./AppBarComp";
import { updateWindowSize } from "../store/windowSize/actions";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

function useWindowSize() {
  const [size, setSize] = useState([0, 0]);
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  dispatch(
    updateWindowSize({
      width: size[0],
      height: size[1]
    })
  );
  return size;
}

function App() {
  const [width, height] = useWindowSize();

  const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1
    },
    paper0: {
      padding: theme.spacing(1),
      textAlign: "center",
      color: theme.palette.text.secondary,
      height: `calc(${height}px - 90px)`,
      width: "200px"
    },
    paper1: {
      padding: theme.spacing(1),
      textAlign: "center",
      color: "grey",
      height: `calc(${height}px - 90px)`,
      width: `calc(${width}px - 250px)`
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
