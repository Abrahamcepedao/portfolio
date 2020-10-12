import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  menu: {
    position: "fixed",
    left: "0px",
    bottom: "0px",
    width: "100vw",
    height: "100px",
  },
  menuContainer: {
    width: "90%",
    height: "80%",
    maxWidth: "700px",
    margin: "auto",
    border: "radius",
    backgroundColor: "#EEEEFF",
    borderRadius: "40px",
    boxShadow: "0 5px 10px rgba(25, 25, 25, 0.15), 0 10px 10px rgba(25, 25, 25, 0.12)",

  },
}));

function Menu({ classes }) {
  classes = useStyles();
  return (
    <div className={classes.menu}>
      <div className={classes.menuContainer}>

      </div>
    </div>
  );
}

export default Menu;
