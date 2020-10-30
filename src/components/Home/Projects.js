import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { Button, Grid } from "@material-ui/core";
import { grey, lightBlue } from "@material-ui/core/colors";
import { Row } from "react-bootstrap";

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
  projectRow: {
    display: "flex",
    overflowX: "scroll !important",
    padding: "20px 0px 60px 0px"
  },
  projectItem: {
    minWidth: '300px',
    height: "500px",
    backgroundImage: "url(./img/Home/Education/background.jpg)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    margin: "auto",
    borderRadius: "10px",
    marginRight: "20px",
    transition: "transform 450ms",
    '&:hover': {
      transform: "scale(1.02)",
    },
    boxShadow: "0 5px 10px rgba(25, 25, 25, 0.15), 0 10px 10px rgba(25, 25, 25, 0.12)",
  },
  projectOverlay: {
    width: "100%",
    height: "100%",
    backgroundImage: 'linear-gradient(180deg, rgba(20,20,20,0.1)0%, rgb(20,20,20,1)100%)',
    borderRadius: "10px",
    marginBottom: "30px",
    display: "grid",
    flexDirection: "column",
    justifyContent: "space-evenly",
    textAlign: 'center',
    color: 'white',
    overflow: "hidden"
  },
  projectTitle: {
    position: "relative",
    top: "450px"
  },
  projectInfo: {
    position: "relative",
    top: "360px",
    width: "100%",
    color: "rgb(20,20,20)",
    borderRadius: "10px",
    height: "250px",
    display: "flex",
    flexDirection: "column",
    padding: "10px",
    backgroundImage: 'linear-gradient(180deg, rgb(247,247,255)0%, rgb(255,255,255)100%)',
  },
  projectTagsRow: {
    maxWidth: "280px",
    display: "inline-flex",
    overflowX: "scroll !important",
    marginBottom: "20px"
  },
  projectTagsItem: {
    background: "rgb(237,237,245)",
    padding: "10px 20px",
    borderRadius: "25px",
    marginRight: "10px"
  },
  projectTagsItemText: {
    marginBottom: "0px"
  },
  itemButton: {
    minWidth: "100px",
    margin: "auto",
    borderRadius: "25px",
    padding: "10px 20px"
  }
}));

const ColorButton = withStyles((theme) => ({
  root: {
    color: "#010400",
    backgroundColor: lightBlue[500],
    transition: "transform 450ms",
    '&:hover': {
      backgroundColor: lightBlue[700],
      transform: "scale(1.08)",
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: lightBlue[700],
      border: 'none',
    },
    '&:focus': {
      backgroundColor: lightBlue[700],
    },
  },
}))(Button);

function Projects({ classes }) {
  classes = useStyles();
  return (
    <div className={classes.landingContainer} id={"projects"}>
      <div className={classes.infoContainer}>
        <h1 className={classes.title}>Work & Projects</h1>
        <div className={classes.projectRow}>
          <div className={classes.projectItem}>
            <div className={classes.projectOverlay}>
                <h3 className={classes.projectTitle}>Project title</h3>
                <div className={classes.projectInfo}>  
                  <p>Project description goes here ..Project description goes here ..Project description goes here ..</p>
                  <div className={classes.projectTagsRow}>
                    <div className={classes.projectTagsItem}><p className={classes.projectTagsItemText}>item</p></div>
                    <div className={classes.projectTagsItem}><p className={classes.projectTagsItemText}>item</p></div>
                    <div className={classes.projectTagsItem}><p className={classes.projectTagsItemText}>item</p></div>
                    <div className={classes.projectTagsItem}><p className={classes.projectTagsItemText}>item</p></div>
                  </div>
                  <ColorButton className={classes.itemButton}>More info</ColorButton>
                </div>
            </div>
          </div>
          <div className={classes.projectItem}>
            <h3>Project title</h3>
            <p>Project description</p>
            <div className={classes.projectTagsRow}>
              <div className={classes.projectTagsItem}>item</div>
              <div className={classes.projectTagsItem}>item</div>
              <div className={classes.projectTagsItem}>item</div>
              <div className={classes.projectTagsItem}>item</div>
            </div>
            <ColorButton className={classes.itemButton}>More info</ColorButton>
          </div>
          <div className={classes.projectItem}>
            <h3>Project title</h3>
            <p>Project description</p>
            <div className={classes.projectTagsRow}>
              <div className={classes.projectTagsItem}>item</div>
              <div className={classes.projectTagsItem}>item</div>
              <div className={classes.projectTagsItem}>item</div>
              <div className={classes.projectTagsItem}>item</div>
            </div>
            <ColorButton className={classes.itemButton}>More info</ColorButton>
          </div>
          <div className={classes.projectItem}>
            <h3>Project title</h3>
            <p>Project description</p>
            <div className={classes.projectTagsRow}>
              <div className={classes.projectTagsItem}>item</div>
              <div className={classes.projectTagsItem}>item</div>
              <div className={classes.projectTagsItem}>item</div>
              <div className={classes.projectTagsItem}>item</div>
            </div>
            <ColorButton className={classes.itemButton}>More info</ColorButton>
          </div>
          <div className={classes.projectItem}>
            <h3>Project title</h3>
            <p>Project description</p>
            <div className={classes.projectTagsRow}>
              <div className={classes.projectTagsItem}>item</div>
              <div className={classes.projectTagsItem}>item</div>
              <div className={classes.projectTagsItem}>item</div>
              <div className={classes.projectTagsItem}>item</div>
            </div>
            <ColorButton className={classes.itemButton}>More info</ColorButton>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
