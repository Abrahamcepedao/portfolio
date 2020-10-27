import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InstagramIcon from "@material-ui/icons/Instagram";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

const useStyles = makeStyles((theme) => ({
  landingContainer: {
    width: "100vw",
    height: "100vh",
    backgroundImage: "linear-gradient(to bottom, #EEEEFF, #617C8B)",
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
  },
  title: {
    fontSize: "50px",
    fontWeight: "bold",
    marginBottom: "20px",
  },
  text: {
    fontSize: "25px",
    fontWeight: "bolder",
  },
}));

function Contact({ classes }) {
  classes = useStyles();
  return (
    <div className={classes.landingContainer} id={"contact"}>
      <div className={classes.topContainer}>
        <img
          src="./img/Home/Landing/logo.png"
          alt="AC"
          className={classes.logo}
        />
        <div className={classes.socialIcons}>
          <InstagramIcon
            style={{ margin: "10px", color: "#010400", fontSize: "25px" }}
          />
          <GitHubIcon
            style={{ margin: "10px", color: "#010400", fontSize: "25px" }}
          />
          <LinkedInIcon
            style={{ margin: "10px", color: "#010400", fontSize: "25px" }}
          />
        </div>
        <button className={classes.darkButton}>Dark Mode</button>
      </div>
      <div className={classes.infoContainer}>
       
      </div>
    </div>
  );
}

export default Contact;
