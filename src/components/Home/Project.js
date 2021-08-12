import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";
import { Row } from "react-bootstrap";
import { useDataLayerValue } from './../../DataLayer';

const useStyles = makeStyles((theme) => ({
  projectItem: {
    minWidth: '300px',
    height: "500px",
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
  itemLink: {
    textDecoration: "none",
    color: "rgb(20,20,20)",
    '&:hover': {
      textDecoration: "none !important",
      color: "rgb(20,20,20)",
    }
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
    backgroundColor: grey[50],
    transition: "transform 450ms",
    '&:hover': {
      backgroundColor: grey[100],
      transform: "scale(1.08)",
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: grey[100],
      border: 'none',
    },
    '&:focus': {
      backgroundColor: grey[100],
    },
  },
}))(Button);

function Project({ classes, project }) {
  classes = useStyles();
  const [{dark}] = useDataLayerValue();

  const openInNewTab = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  return (
    <div className={classes.projectItem} style={{backgroundImage: project.img}}>
        <div className={classes.projectOverlay}  style={{backgroundImage: dark && 'linear-gradient(180deg, rgba(60,60,60,0.1)0%, rgb(60,60,60,1)60%)'}}>
            <div className={classes.projectInfo}>  
            <h3 className={classes.projectTitle}>{project.title}</h3>
            <p className={classes.projectText}>{project.description}</p>
            <div className={classes.projectTagsRow}>
                {project.tags.map((item, i) => (
                    <div className={classes.projectTagsItem} style={{backgroundColor: item.color}}><p className={classes.projectTagsItemText}>{item.name}</p></div>
                ))}
            </div>
            <Row>
                {project.repo !== "" && (
                    <ColorButton className={classes.itemButton}
                    onClick={() => {
                        openInNewTab(
                            project.repo
                        );
                    }}>
                    Repo
                    </ColorButton>
                )}
                {project.web !== "" && (
                    <ColorButton className={classes.itemButton}
                    onClick={() => {
                        openInNewTab(
                            project.web
                        );
                    }}>
                    Repo
                    </ColorButton>
                )}
            </Row>
            </div>
        </div>
    </div>
  );
}

export default Project;
