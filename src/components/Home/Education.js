import React, { useState } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { Row, Col } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from "@material-ui/core";
import { grey, lightBlue } from "@material-ui/core/colors";
import List from '@material-ui/core/List';
import InfoIcon from '@material-ui/icons/Info';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import { useDataLayerValue } from './../../DataLayer';

const useStyles = makeStyles((theme) => ({
  landingContainer: {
    position: "relative",
    width: "100vw",
    padding: "50px",
    marginTop: "-70px",
    backgroundImage: 'linear-gradient(180deg, rgba(247,247,255,1)10%, rgba(255,255,255,1)90%)',
    [theme.breakpoints.down('576')]: {
      padding: "20px",
      marginTop: "-100px",
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
    padding: "50px 50px",
    marginBottom: "30px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    textAlign: 'center',
    color: 'white',
  },
  modalButtonContainer: {
    textAlign: "center"
  },
  itemButton: {
    minWidth: "100px",
    margin: "auto",
    borderRadius: "25px",
    padding: "10px 20px",
  },
  itemLink: {
    textDecoration: "none",
    color: "rgb(20,20,20)",
    '&:hover': {
      textDecoration: "none !important",
      color: "rgb(20,20,20)",
    }
  },
  InfoIcon: {
    color: lightBlue[700],
    cursor: "pointer"
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

const StyledButtonDark = withStyles((theme) => ({
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

const ColorButtonBlue = withStyles((theme) => ({
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

function EducationModal(props, {classes}) {
  classes = useStyles();
  const openInNewTab = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Madison International School - Campus Mérida
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          While I was in high school, the school was in the process of being certified by the IB (International Baccalaureate). Therefore, I experienced the rigurosity of this diploma to a significant extent.
        </p>
        <p>During the last two years of high school, I studied a computer science class where we learned how to program in Java using the Eclipse IDE. Furthermore, we learned about network structure and components.</p>
        <div className={classes.modalButtonContainer}>
          <ColorButtonBlue className={classes.itemButton}
            onClick={() => {
                openInNewTab(
                    "https://github.com/Abrahamcepedao/Computer-Science-IB-course"
                );
            }}>
            Repo
          </ColorButtonBlue>
        </div>
      </Modal.Body>
    </Modal>
  );
}

function BachelorModal(props, {classes}) {
  classes = useStyles();
  const openInNewTab = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };


  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Computer Science Bachelor at ITESM
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>First semester CS related classes</h4>
        <List>
          <ListItem>
            <ListItemText
              primary="Object oriented programming I"
              secondary={"C++"}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Computational modelling aplying laws of conservation"
              secondary={"MatLab"}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Computational modelling of movement"
              secondary={"MatLab"}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Computational thinking"
              secondary={"Python"}
            />
          </ListItem>
        </List>
        <h4>Second semester CS related classes</h4>
        <List>
          <ListItem>
            <ListItemText
              primary="Computational biology analysis"
              secondary={"R"}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Physics experimentation and statistical thinking"
              secondary={"MatLab"}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Computational modelling of electric systems"
              secondary={"MatLab"}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Computational modelling of electromagnetic systems"
              secondary={"MatLab"}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Engineering modelling with computational mathematics"
              secondary={"MatLab"}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Object oriented programming II"
              secondary={"C++"}
            />
          </ListItem>
        </List>
        <h4>Third semester CS related classes</h4>
        <List>
          <ListItem>
            <ListItemText
              primary="Data structures and fundamental algorithms (C++)"
              secondary={"C++"}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Modelling of minimum systems and computer architectures"
              secondary={"Marie.js"}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Implementation of Internet of Things (IoT)"
              secondary={"MySQL • React • Firebase • Python • Arduino"}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Software requirements analysis"
              secondary={"Swift • Realm • Xcode"}
            />
          </ListItem>
        </List>
        <h4>Fourth semester CS related classes</h4>
        <List>
          <ListItem>
            <ListItemText
              primary="Implementation of computational methods"
              secondary={"Erlang • Python • Prolog"}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Devices interconnections"
              secondary={"Cisco Packet Tracer"}
            />
          </ListItem>
          <ListItem>
            <ListItemText 
              primary="Software development and decision making"
              secondary={"MySQL • React • Python • Flask • Unity"}
            />
          </ListItem>
        </List>
        <h4>Fifth semester CS related classes</h4>
        <List>
          <ListItem>
            <ListItemText
              primary="Integration of comùter security in networks and software systemms"
              secondary={"Siwft • Networks • MySql • Xcode"}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Modelling of multiagent systems with computer graphics"
              secondary={"C# • Unity • Python • Sockets" }
            />
          </ListItem>
          <ListItem>
            <ListItemText 
              primary="Analysis of advanced algorithmms"
              secondary={"Python"}
            />
          </ListItem>
        </List>
        <h4>Sixth semester CS related classes</h4>
        <List>
          <ListItem>
            <ListItemText
              primary="Software development planning"
              secondary={"UML • Scrum • Analysis"}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Software development"
              secondary={"Next.js • MongoDB • Python • Flask • Machine Learning • BERT • LDA" }
            />
          </ListItem>
          <ListItem>
            <ListItemText 
              primary="Analysis of advanced algorithmms"
              secondary={"Python"}
            />
          </ListItem>
        </List>
        <div className={classes.modalButtonContainer}>
          <ColorButtonBlue className={classes.itemButton}
            onClick={() => {
                openInNewTab(
                    "https://github.com/Abrahamcepedao/ITC"
                );
            }}>
            Repo
          </ColorButtonBlue>
        </div>
      </Modal.Body>
    </Modal>
  );
}

function CoursesModal(props, {classes}) {
  classes = useStyles();
  const openInNewTab = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Online and in-person courses
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Grid item>
          <div className={classes.demo}>
            <List>
              <ListItem>
                <ListItemText
                  primary="iOS 13 & Swift 5 - The Complete iOS App Development Bootcamp"
                  secondary={"iOS App Development"}
                />
                <ListItemIcon>
                  <InfoIcon
                    className={classes.InfoIcon}
                    onClick={() => {
                        openInNewTab(
                            "https://www.udemy.com/course/ios-13-app-development-bootcamp/"
                        );
                    }}
                  />
                </ListItemIcon>
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Diseño Web Desde Cero a Avanzado 45h Curso COMPLETO"
                  secondary={"Web development"}
                />
                <ListItemIcon>
                  <InfoIcon 
                    className={classes.InfoIcon}
                    onClick={() => {
                        openInNewTab(
                            "https://www.udemy.com/course/diseno-web-desde-cero/"
                        );
                    }}
                  />
                </ListItemIcon>
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Illustrator CC para novatos: ¡desde cero hasta experto!"
                  secondary={"Graphic design"}
                />
                <ListItemIcon>
                  <InfoIcon 
                    className={classes.InfoIcon}
                    onClick={() => {
                        openInNewTab(
                            "https://www.udemy.com/course/illustrator-cc-para-novatos-desde-cero-hasta-experto/"
                        );
                    }}
                  />
                </ListItemIcon>
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Artificial Inteligence with Python. In-person course imparted by Dacodes Academy"
                  secondary={"Artificial Inteligence"}
                />
                <ListItemIcon>
                  <InfoIcon 
                    className={classes.InfoIcon}
                    onClick={() => {
                        openInNewTab(
                            "https://www.dacodes.com/"
                        );
                    }}
                  />
                </ListItemIcon>
              </ListItem>
            </List>
          </div>
        </Grid>
      </Modal.Body>
    </Modal>
  );
}

function Education({ classes }) {
  classes = useStyles();
  const [{dark}] = useDataLayerValue();

  const [highSchoolModalShow, setHighSchoolModalShow] = useState(false);
  const [coursesModalShow, setCoursesModalShow] = useState(false);
  const [bachelorModalShow, setBachelorModalShow] = useState(false);

  return (
    <div className={classes.landingContainer} id={"education"} style={{backgroundImage: dark && 'linear-gradient(180deg, rgba(20,20,20,1)10%, rgba(25,25,25,1)90%)'}}>
      <div className={classes.infoContainer}>
        <h1 className={classes.title} style={{color: dark && "rgb(247,255,255)"}}>Education</h1>
        <Row>
          <Col sm={6}>
            <div className={classes.itemContainer} style={{backgroundImage: "url(/portfolio/img/Home/Education/madison.jpg)"}}>
              <div className={classes.itemOverlay} style={{backgroundColor: dark && "rgba(247,255,255,0.75)"}}>
                <p style={{color: dark && "rgb(20,20,20)"}}>High School</p>
                <h3 style={{color: dark && "rgb(20,20,20)"}}>Madison International School</h3>
                {dark ? (
                  <StyledButtonDark className={classes.itemButton} onClick={() => setHighSchoolModalShow(true)}>More info</StyledButtonDark>
                ) : (
                  <ColorButton className={classes.itemButton} onClick={() => setHighSchoolModalShow(true)}>More info</ColorButton>
                )}
              </div>
            </div>
          </Col>
          <Col sm={6}>
            <div className={classes.itemContainer} style={{backgroundImage: "url(/portfolio/img/Home/Education/ai.jpg)"}}>
              <div className={classes.itemOverlay} style={{backgroundColor: dark && "rgba(247,255,255,0.75)"}}>
                <p style={{color: dark && "rgb(20,20,20)"}}>Online and in-person</p>
                <h3 style={{color: dark && "rgb(20,20,20)"}}>Courses</h3>
                {dark ? (
                  <StyledButtonDark className={classes.itemButton} onClick={() => setCoursesModalShow(true)}>More info</StyledButtonDark>
                ) : (
                  <ColorButton className={classes.itemButton} onClick={() => setCoursesModalShow(true)}>More info</ColorButton>
                )}
              </div>
            </div>
          </Col>
          <Col>
            <div className={classes.itemContainer} style={{backgroundImage: "url(/portfolio/img/Home/Education/ITESM.jpg)"}}>
              <div className={classes.itemOverlay} style={{backgroundColor: dark && "rgba(247,255,255,0.75)"}}>
                <p style={{color: dark && "rgb(20,20,20)"}}>CS Bachelor</p>
                <h3 style={{color: dark && "rgb(20,20,20)"}}>Tecnológico de Monterrey</h3>
                {dark ? (
                  <StyledButtonDark className={classes.itemButton} onClick={() => setBachelorModalShow(true)}>More info</StyledButtonDark>
                ) : (
                  <ColorButton className={classes.itemButton} onClick={() => setBachelorModalShow(true)}>More info</ColorButton>
                )}
              </div>
            </div>
          </Col>
        </Row>
      </div>
      <EducationModal
        show={highSchoolModalShow}
        onHide={() => setHighSchoolModalShow(false)}
      />
      <CoursesModal
        show={coursesModalShow}
        onHide={() => setCoursesModalShow(false)}
      />
      <BachelorModal
        show={bachelorModalShow}
        onHide={() => setBachelorModalShow(false)}
      />
    </div>
  );
}

export default Education;
