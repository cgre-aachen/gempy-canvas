import React, { useState, useLayoutEffect } from "react";
import { useDispatch } from "react-redux";

import AppBarComp from "./AppBarComp";
import SideBar from "./SideBar";
import SketchBoard from "./SketchBoard";
import { updateWindowSize } from "../store/windowSize/actions";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

import { getSanityCheck } from "./../api/index";

/* src/components/App.tsx
 * Following index.tsx (entry point) as main platform of the app. It includes
 * Navigation, routing and a function to extract the window size on change as
 * it is needed by Konva and the Backend.
 *
 * useWindowSize()
 * dynamically gets the windowssize and stores it in the redux-store. The
 * functin includes material-ui's makeStyles() as width and hight of the
 * components have to be consitent over alle compoenents and with the ones in
 * the store.
 */

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

  // Size is assigned dynamically with a dependency on store;
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

  getSanityCheck();

  return (
    <div className={classes.root}>
      <AppBarComp />
      <Grid container spacing={1}>
        <Paper className={classes.paper0}>
          <SideBar />
        </Paper>
        <Paper className={classes.paper1}>
          <SketchBoard />
        </Paper>
      </Grid>
    </div>
  );
}

export default App;
