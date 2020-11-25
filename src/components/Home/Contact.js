import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { useDataLayerValue } from './../../DataLayer';
import { Button } from "@material-ui/core";
import CopyMailTo from "react-copy-mailto";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "100vw",
    padding: "50px",
    paddingBottom: "170px",
    textAlign: "center",
    backgroundImage: 'linear-gradient(180deg, rgba(247,247,255,1)10%, rgba(255,255,255,1)90%)',
    [theme.breakpoints.down('576')]: {
      padding: "20px"
    }
  },
  title: {
    fontSize: "100px",
    fontWeight: "bold",
    marginBottom: "50px",
    [theme.breakpoints.down('576')]: {
      fontSize: "35px"
    }
  },
}));

const StyledButtonLight = withStyles((theme) => ({
  root: {
    color: "white",
    backgroundColor: "black",
    borderRadius: "100px",
    transition: "transform 450ms",
    fontWeight: "bolder",
    padding: "10px 20px",
    cursor: "pointer",
    '&:hover': {
      backgroundColor: "rgb(30,30,30)",
      transform: "scale(1.08)",
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: "rgb(30,30,30)",
      border: 'none',
    },
    '&:focus': {
      backgroundColor: "rgb(30,30,30)",
    },
  },
}))(Button);

const StyledButtonDark = withStyles((theme) => ({
  root: {
    color: "#010400",
    backgroundColor: "white",
    borderRadius: "100px",
    transition: "transform 450ms",
    fontWeight: "bolder",
    padding: "10px 20px",
    cursor: "pointer",
    '&:hover': {
      backgroundColor: "rgb(237,237,245)",
      transform: "scale(1.08)",
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: "rgb(237,237,245)",
      border: 'none',
    },
    '&:focus': {
      backgroundColor: "rgb(237,237,245)",
    },
  },
}))(Button);

function Contact({ classes }) {
  classes = useStyles();
  const [{dark}] = useDataLayerValue();

  const openInNewTab = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  return (
    <div className={classes.container} id={"contact"} style={{backgroundImage: dark && 'linear-gradient(180deg, rgba(20,20,20,1)10%, rgba(25,25,25,1)90%)'}}>
      <h1 className={classes.title} style={{color: dark && "rgb(247,255,255)"}}>Contact me</h1>
      {dark ? (
        <StyledButtonDark
          className={classes.darkButton}
          onClick={() => {
              openInNewTab(
                  "mailto: abraham.cepeda@dfuture.mx"
              );
          }}>
            Send mail
        </StyledButtonDark>
      ) : (
        <StyledButtonLight
          className={classes.darkButton}
          onClick={() => {
              openInNewTab(
                  "mailto: abraham.cepeda@dfuture.mx"
              );
          }}>
            Send mail
        </StyledButtonLight>
      )}
    </div>
  );
}

export default Contact;
