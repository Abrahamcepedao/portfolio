import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import InstagramIcon from "@material-ui/icons/Instagram";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import * as basicScroll from "basicscroll";

const useStyles = makeStyles((theme) => ({
  landingContainer: {
    width: "100vw",
    height: "100vh",
    backgroundColor: "#EEEEFF",
    //backgroundImage: "linear-gradient(to bottom, #EEEEFF, #617C8B)",
  },
  topContainer: {
    width: "90%",
    maxWidth: "800px",
    margin: "auto",
    padding: "20px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: {
    width: "80px",
    objectFit: "contain",
  },
  socialIcons: {
    flex: "1",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  darkButton: {
    width: "100px",
    height: "30px",
    fontWeight: "bolder",
    backgroundColor: "#010400",
    borderRadius: "25px",
    color: "#EEEEFF",
    textAlign: "center",
  },
  infoContainer: {
    width: "90%",
    maxWidth: "600px",
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
    textAlign: "center",
    color: "#010400",
  },
  avatar: {
    width: "80%",
    objectFit: "contain",
    margin: "auto",
    [theme.breakpoints.down('576')]: {
      width: "50%"
    }
  },
  title: {
    fontSize: "50px",
    fontWeight: "bold",
    marginBottom: "20px",
    [theme.breakpoints.down('576')]: {
      fontSize: "30px"
    }
  },
  text: {
    fontSize: "25px",
    fontWeight: "400",
    [theme.breakpoints.down('576')]:{
      fontSize: "18px"
    }
  },
}));

function Landing({classes}) {
    classes = useStyles();
    return (
      <div className={classes.landingContainer} id={"home"}>
        <div className={classes.topContainer}>
          <img
            src="./img/Home/Landing/logo.png"
            alt="AC"
            className={classes.logo}
          />
          <div className={classes.socialIcons}>
            <InstagramIcon style={{ margin: "10px", color: "#010400", fontSize: "25px" }} />
            <GitHubIcon style={{ margin: "10px", color: "#010400", fontSize: "25px" }} />
            <LinkedInIcon style={{ margin: "10px", color: "#010400", fontSize: "25px" }} />
          </div>
          <button className={classes.darkButton}>Dark Mode</button>
        </div>
        <div className={classes.infoContainer}>
          <img
            src="./img/Home/Landing/avatar.png"
            alt="AV"
            className={classes.avatar}
          />
          <div></div>
          <h1 className={classes.title}>I am Abraham Cepeda</h1>
          <h3 className={classes.text}>
            I am a 20 year old computer programmer studying computer science at
            Tecnológico de Monterrey while developing my technological skills.
          </h3>
        </div>
      </div>
    );
}

export default Landing;