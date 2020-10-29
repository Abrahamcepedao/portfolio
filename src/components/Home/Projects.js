import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InstagramIcon from "@material-ui/icons/Instagram";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

const useStyles = makeStyles((theme) => ({
  landingContainer: {
    width: "100vw",
    height: "100vh",
    backgroundImage: 'linear-gradient(180deg, rgb(247,247,255)0%, rgb(255,255,255)100%)'
  },
  infoContainer: {
    width: "100%",
    margin: "auto",
    textAlign: "center",
    color: "#010400",
    padding: "50px"
  },
  title: {
    fontSize: "100px",
    fontWeight: "bold",
    marginBottom: "50px",
    [theme.breakpoints.down('576')]: {
      fontSize: "35px"
    }
  },
  itemContainer: {
    width: '100%',
    height: "300px",
    backgroundImage: "url(./img/Home/Education/background.jpg)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    margin: "auto",
    borderRadius: "10px",
    marginBottom: "30px",
    transition: "transform 450ms",
    '&:hover': {
      transform: "scale(1.02)",
    },
  },
  itemOverlay: {
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(20,20,20,0.75)",
    borderRadius: "10px",
    padding: "50px 20px",
    marginBottom: "30px",
    display: "grid",
    flexDirection: "column",
    justifyContent: "space-evenly",
    textAlign: 'center',
    color: 'white',
  },
  itemButton: {
    minWidth: "100px",
    margin: "auto",
    borderRadius: "25px",
    padding: "10px 20px"
  }
}));

function Projects({ classes }) {
  classes = useStyles();
  return (
    <div className={classes.landingContainer} id={"projects"}>
      <div className={classes.infoContainer}>
        <h1 className={classes.title}>Projects</h1>
      </div>
    </div>
  );
}

export default Projects;
