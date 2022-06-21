import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useDataLayerValue } from './../../DataLayer';
import { MDBIcon } from "mdbreact";
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';

const useStyles = makeStyles((theme) => ({
  container: {
    width: "100vw",
    padding: "50px",
    backgroundImage: 'linear-gradient(180deg, rgba(247,247,255,1)10%, rgba(255,255,255,1)90%)',
    [theme.breakpoints.down('576')]: {
      padding: "20px"
    }
  },
  title: {
    fontSize: "100px",
    fontWeight: "bold",
    marginBottom: "50px",
    textAlign: "center",
    [theme.breakpoints.down('576')]: {
      fontSize: "35px"
    }
  },
  skillsContainer: {
    width: "95%",
    maxWidth: "900px",
    padding: "50px",
    margin: "auto",
    marginTop: "45px",
    borderRadius: "10px",
    backgroundImage: "linear-gradient( 135deg,  rgba(255,85,85,1) 0.1%, rgba(85,85,255,1) 100%)",
    [theme.breakpoints.down('576')]: {
      padding: "20px"
    }
  },
  subtitle: {
    fontWeight: "bold"
  },
  skillsRow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "5px 5px 30px 5px",
    overflowX: "scroll"
  },
  skillsItem: {
    textAlign: "center",
    backgroundColor: "rgb(247,255,255)",
    padding: "10px",
    borderRadius: "10px",
    minWidth: "120px",
    marginRight: "20px",
    transition: "transform 450ms",
    '&:hover': {
      transform: "scale(1.08)"
    }
  },
  skillsItemText: {
    fontWeight: "bolder"
  },
  scroll: {
    position: "relative",
    top: "-20px",
    right: "12px",
    textAlign: "right",
    cursor: "pointer",
    fontWeight: "bolder",
    [theme.breakpoints.up('1000px')]:{
      visibility: "hidden",
    },
    '&:hover svg': {
      transform: "translateX(15px)"
    },
    '& svg': {
      transition: "transform 450ms",
    }
  }
}));

function Skills({ classes }) {
  classes = useStyles();
  const [{dark}] = useDataLayerValue();

  return (
    <div className={classes.container} id={"skills"} style={{backgroundImage: dark && 'linear-gradient(180deg, rgba(20,20,20,1)10%, rgba(25,25,25,1)90%)'}}>
      <h1 className={classes.title} style={{color: dark && "rgb(247,255,255)"}}>Skills</h1>
      <div className={classes.skillsContainer}>
        <h3 className={classes.subtitle} style={{color: dark && "rgb(247,255,255)"}}>Web Development</h3>
        <div className={classes.skillsRow}>
          <div className={classes.skillsItem} style={{backgroundColor: dark && "rgb(20,20,20)"}}>
            <MDBIcon fab icon="html5" size="3x" style={{color: dark && "rgb(247,255,255)"}}/>
            <h5 className={classes.skillsItemText} style={{color: dark && "rgb(247,255,255)"}}>HTML 5</h5>
          </div>
          <div className={classes.skillsItem} style={{backgroundColor: dark && "rgb(20,20,20)"}}>
            <MDBIcon fab icon="css3-alt cc_pointer" size="3x" style={{color: dark && "rgb(247,255,255)"}}/>
            <h5 className={classes.skillsItemText} style={{color: dark && "rgb(247,255,255)"}}>CSS</h5>
          </div>
          <div className={classes.skillsItem} style={{backgroundColor: dark && "rgb(20,20,20)"}}>
            <MDBIcon fab icon="js-square cc_pointer" size="3x" style={{color: dark && "rgb(247,255,255)"}}/>
            <h5 className={classes.skillsItemText} style={{color: dark && "rgb(247,255,255)"}}>Javascript</h5>
          </div>
          <div className={classes.skillsItem} style={{backgroundColor: dark && "rgb(20,20,20)"}}>
            <MDBIcon fab icon="react cc_pointer" size="3x" style={{color: dark && "rgb(247,255,255)"}}/>
            <h5 className={classes.skillsItemText} style={{color: dark && "rgb(247,255,255)"}}>React</h5>
          </div>
          <div className={classes.skillsItem} style={{backgroundColor: dark && "rgb(20,20,20)"}}>
            <MDBIcon icon="fire" size="3x" style={{color: dark && "rgb(247,255,255)"}}/>
            <h5 className={classes.skillsItemText} style={{color: dark && "rgb(247,255,255)"}}>Firebase</h5>
          </div>
          <div className={classes.skillsItem} style={{backgroundColor: dark && "rgb(20,20,20)"}}>
            <MDBIcon fab icon="amazon" size="3x" style={{color: dark && "rgb(247,255,255)"}}/>
            <h5 className={classes.skillsItemText} style={{color: dark && "rgb(247,255,255)"}}>Amazon</h5>
          </div>
          <div className={classes.skillsItem} style={{backgroundColor: dark && "rgb(20,20,20)"}}>
            <MDBIcon fab icon="wordpress cc_pointer" size="3x" style={{color: dark && "rgb(247,255,255)"}}/>
            <h5 className={classes.skillsItemText} style={{color: dark && "rgb(247,255,255)"}}>Wordpress</h5>
          </div>
        </div>
        <p className={classes.scroll}  style={{color: dark && "rgb(247,255,255)"}}>Scroll<ArrowRightAltIcon/></p>
        <h3 className={classes.subtitle} style={{color: dark && "rgb(247,255,255)"}}>App Development</h3>
        <div className={classes.skillsRow}>
          <div className={classes.skillsItem} style={{backgroundColor: dark && "rgb(20,20,20)"}}>
            <MDBIcon fab icon="swift cc_pointer" size="3x" style={{color: dark && "rgb(247,255,255)"}}/>
            <h5 className={classes.skillsItemText} style={{color: dark && "rgb(247,255,255)"}}>Swift</h5>
          </div>
          <div className={classes.skillsItem} style={{backgroundColor: dark && "rgb(20,20,20)"}}>
            <MDBIcon fab icon="apple cc_pointer" size="3x" style={{color: dark && "rgb(247,255,255)"}}/>
            <h5 className={classes.skillsItemText} style={{color: dark && "rgb(247,255,255)"}}>Xcode</h5>
          </div>
          <div className={classes.skillsItem} style={{backgroundColor: dark && "rgb(20,20,20)"}}>
            <MDBIcon icon="database cc_pointer" size="3x" style={{color: dark && "rgb(247,255,255)"}}/>
            <h5 className={classes.skillsItemText} style={{color: dark && "rgb(247,255,255)"}}>Realm</h5>
          </div>
          <div className={classes.skillsItem} style={{backgroundColor: dark && "rgb(20,20,20)"}}>
            <MDBIcon fab icon="python cc_pointer" size="3x" style={{color: dark && "rgb(247,255,255)"}}/>
            <h5 className={classes.skillsItemText} style={{color: dark && "rgb(247,255,255)"}}>Python</h5>
          </div>
          <div className={classes.skillsItem} style={{backgroundColor: dark && "rgb(20,20,20)"}}>
            <MDBIcon fab icon="java cc_pointer" size="3x" style={{color: dark && "rgb(247,255,255)"}}/>
            <h5 className={classes.skillsItemText} style={{color: dark && "rgb(247,255,255)"}}>Java</h5>
          </div>
          <div className={classes.skillsItem} style={{backgroundColor: dark && "rgb(20,20,20)"}}>
            <MDBIcon icon="code" size="3x" style={{color: dark && "rgb(247,255,255)"}}/>
            <h5 className={classes.skillsItemText} style={{color: dark && "rgb(247,255,255)"}}>C++</h5>
          </div>
        </div>
        <p className={classes.scroll}  style={{color: dark && "rgb(247,255,255)"}}>Scroll<ArrowRightAltIcon/></p>
        <h3 className={classes.subtitle} style={{color: dark && "rgb(247,255,255)"}}>Backend Development</h3>
        <div className={classes.skillsRow}>
          <div className={classes.skillsItem} style={{backgroundColor: dark && "rgb(20,20,20)"}}>
            <MDBIcon icon="wifi cc_pointer" size="3x" style={{color: dark && "rgb(247,255,255)"}}/>
            <h5 className={classes.skillsItemText} style={{color: dark && "rgb(247,255,255)"}}>Heroku</h5>
          </div>
          <div className={classes.skillsItem} style={{backgroundColor: dark && "rgb(20,20,20)"}}>
            <MDBIcon icon="database cc_pointer" size="3x" style={{color: dark && "rgb(247,255,255)"}}/>
            <h5 className={classes.skillsItemText} style={{color: dark && "rgb(247,255,255)"}}>Realm</h5>
          </div>
          <div className={classes.skillsItem} style={{backgroundColor: dark && "rgb(20,20,20)"}}>
            <MDBIcon fab icon="node" size="3x" style={{color: dark && "rgb(247,255,255)"}}/>
            <h5 className={classes.skillsItemText} style={{color: dark && "rgb(247,255,255)"}}>NodeJS</h5>
          </div>
          <div className={classes.skillsItem} style={{backgroundColor: dark && "rgb(20,20,20)"}}>
            <MDBIcon icon="table" size="3x" style={{color: dark && "rgb(247,255,255)"}}/>
            <h5 className={classes.skillsItemText} style={{color: dark && "rgb(247,255,255)"}}>MySql</h5>
          </div>
          <div className={classes.skillsItem} style={{backgroundColor: dark && "rgb(20,20,20)"}}>
            <MDBIcon fab icon="php cc_pointer" size="3x" style={{color: dark && "rgb(247,255,255)"}}/>
            <h5 className={classes.skillsItemText} style={{color: dark && "rgb(247,255,255)"}}>PHP</h5>
          </div>
          <div className={classes.skillsItem} style={{backgroundColor: dark && "rgb(20,20,20)"}}>
            <MDBIcon icon="terminal cc_pointer" size="3x" style={{color: dark && "rgb(247,255,255)"}}/>
            <h5 className={classes.skillsItemText} style={{color: dark && "rgb(247,255,255)"}}>Bash</h5>
          </div>
        </div>
        <p className={classes.scroll}  style={{color: dark && "rgb(247,255,255)"}}>Scroll<ArrowRightAltIcon/></p>
        <h3 className={classes.subtitle} style={{color: dark && "rgb(247,255,255)"}}>Other skills</h3>
        <div className={classes.skillsRow}>
          <div className={classes.skillsItem} style={{backgroundColor: dark && "rgb(20,20,20)"}}>
            <MDBIcon icon="pen-nib cc_pointer" size="3x" style={{color: dark && "rgb(247,255,255)"}}/>
            <h5 className={classes.skillsItemText} style={{color: dark && "rgb(247,255,255)"}}>Illustrator</h5>
          </div>
          <div className={classes.skillsItem} style={{backgroundColor: dark && "rgb(20,20,20)"}}>
            <MDBIcon icon="pen-fancy cc_pointer" size="3x" style={{color: dark && "rgb(247,255,255)"}}/>
            <h5 className={classes.skillsItemText} style={{color: dark && "rgb(247,255,255)"}}>Affinity designer</h5>
          </div>
          <div className={classes.skillsItem} style={{backgroundColor: dark && "rgb(20,20,20)"}}>
            <MDBIcon fab icon="figma cc_pointer" size="3x" style={{color: dark && "rgb(247,255,255)"}}/>
            <h5 className={classes.skillsItemText} style={{color: dark && "rgb(247,255,255)"}}>Figma</h5>
          </div>
          <div className={classes.skillsItem} style={{backgroundColor: dark && "rgb(20,20,20)"}}>
            <MDBIcon far icon="chart-bar cc_pointer" size="3x" style={{color: dark && "rgb(247,255,255)"}}/>
            <h5 className={classes.skillsItemText} style={{color: dark && "rgb(247,255,255)"}}>MatLab</h5>
          </div>
        </div>
        <p className={classes.scroll}  style={{color: dark && "rgb(247,255,255)"}}>Scroll<ArrowRightAltIcon/></p>
      </div>
    </div>
  );
}

export default Skills;
