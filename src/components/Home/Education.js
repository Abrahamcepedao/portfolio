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
import FolderIcon from '@material-ui/icons/Folder';
import { useDataLayerValue } from './../../DataLayer';

const useStyles = makeStyles((theme) => ({
  landingContainer: {
    width: "100vw",
    height: "100vh",
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
          <ColorButtonBlue className={classes.itemButton}><a href="https://github.com/Abrahamcepedao/Computer-Science-IB-course" target="_blank" className={classes.itemLink}>REPO</a></ColorButtonBlue>
        </div>
      </Modal.Body>
    </Modal>
  );
}

function BachelorModal(props, {classes}) {
  classes = useStyles();
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
              primary="Programación orientada a objetos I"
              secondary={"C++"}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Modelación computacional aplicando leyes de conservación"
              secondary={"MatLab"}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Modelación computacional del movimiento"
              secondary={"MatLab"}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Pensamiento computacional"
              secondary={"Python"}
            />
          </ListItem>
        </List>
        <h4>Second semester CS related classes</h4>
        <List>
          <ListItem>
            <ListItemText
              primary="Análisis de biología computacional"
              secondary={"R"}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Experimentación física y pensamiento estadístico"
              secondary={"MatLab"}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Modelación computacional de sistemas eléctricos"
              secondary={"MatLab"}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Modelación computacional de sistemas electromagnéticos"
              secondary={"MatLab"}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Modelación de la ingenería con matemática computacional"
              secondary={"MatLab"}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Programación orientada a objetos II"
              secondary={"C++"}
            />
          </ListItem>
        </List>
        <h4>Third semester CS related classes</h4>
        <List>
          <ListItem>
            <ListItemText
              primary="Programación de estructuras de datos y algoritmos fundamentales (C++)"
              secondary={"C++"}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Modelación de sistemas mínimos y arquitecturas computacionales"
              secondary={"Marie.js"}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Implementación de Internet de las cosas"
              secondary={"MySQL • React • Firebase"}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Análisis de requerimento de Software"
              secondary={"Swift"}
            />
          </ListItem>
        </List>
        <div className={classes.modalButtonContainer}>
          <ColorButtonBlue className={classes.itemButton}><a href="https://github.com/Abrahamcepedao/ITC" target="_blank" className={classes.itemLink}>REPO</a></ColorButtonBlue>
        </div>
      </Modal.Body>
    </Modal>
  );
}

function CoursesModal(props, {classes}) {
  classes = useStyles();
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
                  <a href="https://www.udemy.com/course/ios-13-app-development-bootcamp/" target="_blank"><InfoIcon /></a>
                </ListItemIcon>
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Diseño Web Desde Cero a Avanzado 45h Curso COMPLETO"
                  secondary={"Web development"}
                />
                <ListItemIcon>
                  <a href="https://www.udemy.com/course/diseno-web-desde-cero/" target="_blank"><InfoIcon /></a>
                </ListItemIcon>
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Illustrator CC para novatos: ¡desde cero hasta experto!"
                  secondary={"Graphic design"}
                />
                <ListItemIcon>
                  <a href="https://www.udemy.com/course/illustrator-cc-para-novatos-desde-cero-hasta-experto/" target="_blank"><InfoIcon /></a>
                </ListItemIcon>
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Artificial Inteligence with Python. In-person course imparted by Dacodes Academy"
                  secondary={"Artificial Inteligence"}
                />
                <ListItemIcon>
                  <a href="https://www.dacodes.com/" target="_blank"><InfoIcon /></a>
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
    <div className={classes.landingContainer} id={"education"} style={{backgroundColor: dark && "rgb(20,20,20)"}}>
      <div className={classes.infoContainer} style={{backgroundColor: dark && "rgb(20,20,20)"}}>
        <h1 className={classes.title} style={{color: dark && "rgb(247,255,255)"}}>Education</h1>
        <Row>
          <Col sm={6}>
            <div className={classes.itemContainer} style={{backgroundImage: "url(./img/Home/Education/madison.jpg)"}}>
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
            <div className={classes.itemContainer} style={{backgroundImage: "url(./img/Home/Education/ai.jpg)"}}>
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
            <div className={classes.itemContainer} style={{backgroundImage: "url(./img/Home/Education/ITESM.jpg)"}}>
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
