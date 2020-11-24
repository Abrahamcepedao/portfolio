import React from 'react';
import { makeStyles, withStyles } from "@material-ui/core/styles";
import InstagramIcon from "@material-ui/icons/Instagram";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { Button } from "@material-ui/core";
import { useDataLayerValue } from './../../DataLayer';

const useStyles = makeStyles((theme) => ({
  landingBackground: {
    width: "100vw",
    height: "100vh",
    backgroundImage: 'url(./img/Home/Landing/background.png)',
    backgroundSize: "cover",
    backgroundPosition: "center",
    [theme.breakpoints.up('992')]: {
      backgroundAttachment: "fixed"
    }
    //backgroundColor: "#EEEEFF",
    //backgroundImage: "linear-gradient(to bottom, #EEEEFF, #617C8B)",
  },
  landingContainer: {
    width: "100%",
    height: "100%",
    backgroundImage: 'linear-gradient(180deg, rgba(247,247,255,1)10%, rgba(255,255,255,0)50%, rgba(247,247,255,1)90%)'
    //backgroundColor: "#EEEEFF",
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


const StyledButtonLight = withStyles((theme) => ({
  root: {
    color: "white",
    backgroundColor: "black",
    borderRadius: "100px",
    transition: "transform 450ms",
    fontWeight: "bolder",
    padding: "10px 20px",
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

function Landing({classes}) {
    classes = useStyles();
    const [{dark}, dispatch] = useDataLayerValue();

    const setDark = () => {
        dispatch({
            type: "SET_DARK",
            dark: !dark
        });
        console.log("dark",dark);
    }

    return (
      <div className={classes.landingBackground} id={"home"}>
        <div className={classes.landingContainer} style={{backgroundImage: dark && 'linear-gradient(180deg, rgba(20,20,20,1)10%, rgba(255,255,255,0)50%, rgba(20,20,20,1)90%)'}}>
          <div className={classes.topContainer}>
            <img
              src="./img/Home/Landing/logo.png"
              alt="AC"
              className={classes.logo}
            />
            <div className={classes.socialIcons}>
              <InstagramIcon style={{ margin: "10px", color: (dark ? "white" : "#010400"), fontSize: "25px" }} />
              <GitHubIcon style={{ margin: "10px", color: (dark ? "white" : "#010400"), fontSize: "25px" }} />
              <LinkedInIcon style={{ margin: "10px", color: (dark ? "white" : "#010400"), fontSize: "25px" }} />
            </div>
            {dark ? (
              <StyledButtonDark
                className={classes.darkButton}
                onClick={() => setDark()}>
                  Light Mode
              </StyledButtonDark>
            ) : (
              <StyledButtonLight
                className={classes.darkButton}
                onClick={() => setDark()}>
                  Dark Mode
              </StyledButtonLight>
            )}
            
          </div>
          <div className={classes.infoContainer}>
            <img
              src="./img/Home/Landing/avatar.png"
              alt="AV"
              className={classes.avatar}
            />
            <div></div>
            <h1 className={classes.title} style={{color: dark && "white"}}>I am Abraham Cepeda</h1>
            <h3 className={classes.text} style={{color: dark && "white"}}>
              I am a 20 year old computer programmer studying computer science at
              Tecnológico de Monterrey while developing my technological skills.
            </h3>
          </div>
        </div>
      </div>
      
    );
}

export default Landing;