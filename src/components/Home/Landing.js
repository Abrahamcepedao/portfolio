import React from 'react';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  landingContainer: {
    width: "100vw",
    height: "100vh",
    backgroundColor: "#EEEEFF",
  },
}));

function Landing({classes}) {
    classes = useStyles();
    return (
      <div className={classes.landingContainer}>
        <h1>landing</h1>
        <div className={classes.logo}></div>
        <img src="./img/Home/Landing/logo.png" alt="AC" />
      </div>
    );
}

export default Landing;