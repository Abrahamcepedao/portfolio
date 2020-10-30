import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import { lightBlue } from "@material-ui/core/colors";
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';

const useStyles = makeStyles((theme) => ({
  landingContainer: {
    width: "100vw",
    backgroundImage: 'linear-gradient(180deg, rgb(247,247,255)0%, rgb(255,255,255)100%)',
    padding: "50px",
    [theme.breakpoints.down('576')]: {
      padding: "20px"
    }
  },
  infoContainer: {
    width: "100%",
    margin: "auto",
    textAlign: "center",
    color: "#010400",
  },
  title: {
    fontSize: "100px",
    fontWeight: "bold",
    marginBottom: "50px",
    [theme.breakpoints.down('576')]: {
      fontSize: "35px"
    }
  },
  subtitle: {
    textAlign: "left",
    marginBottom: "-10px",
    fontWeight: "bolder"
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
    backgroundImage: 'linear-gradient(180deg, rgba(20,20,20,0.1)0%, rgb(20,20,20,1)60%)',
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
    top: ""
  },
  projectText: {
    textAlign: "justify"
  },
  projectInfo: {
    position: "relative",
    top: "245px",
    width: "100%",
    color: "white",
    borderRadius: "10px",
    height: "250px",
    display: "flex",
    flexDirection: "column",
    padding: "10px",
    //backgroundImage: 'linear-gradient(180deg, rgb(247,247,255)0%, rgb(255,255,255)100%)',
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
    marginRight: "10px",
    color: "rgb(20,20,20)"
  },
  projectTagsItemText: {
    marginBottom: "0px",
    marginTop: "-3px"
  },
  itemButton: {
    minWidth: "100px",
    margin: "auto",
    borderRadius: "25px",
    padding: "10px 20px"
  },
  scroll: {
    position: "relative",
    top: "-40px",
    right: "15px",
    textAlign: "right",
    cursor: "pointer",
    '&:hover svg': {
      transform: "translateX(15px)"
    },
    '& svg': {
      transition: "transform 450ms",
    }
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
        <div className={classes.projectsContainer}>
          <h2 className={classes.subtitle}>For fun projects</h2>
          <div className={classes.projectRow}>
            <div className={classes.projectItem} style={{backgroundImage: "url(./img/Home/Projects/netflix.png)"}}>
              <div className={classes.projectOverlay}>
                  <div className={classes.projectInfo}>  
                    <h3 className={classes.projectTitle}>Netflix clone</h3>
                    <p className={classes.projectText}>Project description goes here ..Project description goes here ..Project description goes here ..</p>
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
            <div className={classes.projectItem} style={{backgroundImage: "url(./img/Home/Projects/spotify.png)"}}>
              <div className={classes.projectOverlay}>
                  <div className={classes.projectInfo}>  
                    <h3 className={classes.projectTitle}>Spotify clone</h3>
                    <p className={classes.projectText}>Project description goes here ..Project description goes here ..Project description goes here ..</p>
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
            <div className={classes.projectItem} style={{backgroundImage: "url(./img/Home/Projects/amazon.png)"}}>
              <div className={classes.projectOverlay}>
                  <div className={classes.projectInfo}>  
                    <h3 className={classes.projectTitle}>Amazon clone</h3>
                    <p className={classes.projectText}>Project description goes here ..Project description goes here ..Project description goes here ..</p>
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
            <div className={classes.projectItem} style={{backgroundImage: "url(./img/Home/Projects/hulu.png)"}}>
              <div className={classes.projectOverlay}>
                  <div className={classes.projectInfo}>  
                    <h3 className={classes.projectTitle}>Hulu clone</h3>
                    <p className={classes.projectText}>Project description goes here ..Project description goes here ..Project description goes here ..</p>
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
              <div className={classes.projectOverlay}>
                  <div className={classes.projectInfo}>  
                    <h3 className={classes.projectTitle}>Project title</h3>
                    <p className={classes.projectText}>Project description goes here ..Project description goes here ..Project description goes here ..</p>
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
              <div className={classes.projectOverlay}>
                  <div className={classes.projectInfo}>  
                    <h3 className={classes.projectTitle}>Project title</h3>
                    <p className={classes.projectText}>Project description goes here ..Project description goes here ..Project description goes here ..</p>
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
          </div>
          <p className={classes.scroll}>Scroll<ArrowRightAltIcon/></p>
        </div>
        <div className={classes.projectsContainer}>
          <h2 className={classes.subtitle}>School projects</h2>
          <div className={classes.projectRow}>
            <div className={classes.projectItem}>
              <div className={classes.projectOverlay}>
                  <div className={classes.projectInfo}>  
                    <h3 className={classes.projectTitle}>Project title</h3>
                    <p className={classes.projectText}>Project description goes here ..Project description goes here ..Project description goes here ..</p>
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
              <div className={classes.projectOverlay}>
                  <div className={classes.projectInfo}>  
                    <h3 className={classes.projectTitle}>Project title</h3>
                    <p className={classes.projectText}>Project description goes here ..Project description goes here ..Project description goes here ..</p>
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
              <div className={classes.projectOverlay}>
                  <div className={classes.projectInfo}>  
                    <h3 className={classes.projectTitle}>Project title</h3>
                    <p className={classes.projectText}>Project description goes here ..Project description goes here ..Project description goes here ..</p>
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
              <div className={classes.projectOverlay}>
                  <div className={classes.projectInfo}>  
                    <h3 className={classes.projectTitle}>Project title</h3>
                    <p className={classes.projectText}>Project description goes here ..Project description goes here ..Project description goes here ..</p>
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
              <div className={classes.projectOverlay}>
                  <div className={classes.projectInfo}>  
                    <h3 className={classes.projectTitle}>Project title</h3>
                    <p className={classes.projectText}>Project description goes here ..Project description goes here ..Project description goes here ..</p>
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
              <div className={classes.projectOverlay}>
                  <div className={classes.projectInfo}>  
                    <h3 className={classes.projectTitle}>Project title</h3>
                    <p className={classes.projectText}>Project description goes here ..Project description goes here ..Project description goes here ..</p>
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
