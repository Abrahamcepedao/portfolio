import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useDataLayerValue } from './../../DataLayer';

const useStyles = makeStyles((theme) => ({
  container: {
    width: "100vw",
    padding: "50px",
    backgroundImage: 'linear-gradient(180deg, rgba(247,247,255,1)10%, rgba(255,255,255,1)90%)',
    [theme.breakpoints.down('576')]: {
      padding: "20px"
    }
  },
  title: {
    fontSize: "100px",
    fontWeight: "bold",
    marginBottom: "50px",
    textAlign: "center",
    [theme.breakpoints.down('576')]: {
      fontSize: "35px"
    }
  },
}));

function Contact({ classes }) {
  classes = useStyles();
  const [{dark}] = useDataLayerValue();

  return (
    <div className={classes.container} id={"skills"} style={{backgroundImage: dark && 'linear-gradient(180deg, rgba(20,20,20,1)10%, rgba(25,25,25,1)90%)'}}>
      <h1 className={classes.title} style={{color: dark && "rgb(247,255,255)"}}>Contact me</h1>
    </div>
  );
}

export default Contact;
