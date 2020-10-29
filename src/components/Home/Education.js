import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";

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

function Education({ classes }) {
  classes = useStyles();
  return (
    <div className={classes.landingContainer} id={"education"}>
      <div className={classes.infoContainer}>
        <h1 className={classes.title}>Education</h1>
        <Row>
          <Col sm={6}>
            <div className={classes.itemContainer}>
              <div className={classes.itemOverlay}>
                <p>High School</p>
                <h3>Madison International School</h3>
                <ColorButton className={classes.itemButton}>More info</ColorButton>
              </div>
            </div>
          </Col>
          <Col sm={6}>
            <div className={classes.itemContainer}>
              <div className={classes.itemOverlay}>
                <p>Online and in-person</p>
                <h3>Courses</h3>
                <ColorButton className={classes.itemButton}>More info</ColorButton>
              </div>
            </div>
          </Col>
          <Col>
            <div className={classes.itemContainer}>
              <div className={classes.itemOverlay}>
                <p>CS Bachelor</p>
                <h3>Tecnológico de Monterrey</h3>
                <ColorButton className={classes.itemButton}>More info</ColorButton>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Education;
