import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useDataLayerValue } from './../../DataLayer';
import { MDBIcon } from "mdbreact";
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
    paddingTop: "20px",
    paddingBottom: "20px",
    overflowX: "scroll"
  },
  skillsItem: {
    textAlign: "center",
    backgroundColor: "rgb(247,255,255)",
    padding: "10px",
    borderRadius: "10px",
    minWidth: "90px",
    marginRight: "20px",
    transition: "transform 450ms",
    '&:hover': {
      transform: "scale(1.08)"
    }
  },
  skillsItemText: {
    fontWeight: "bolder"
  }
}));

function Skills({ classes }) {
  classes = useStyles();
  const [{dark}] = useDataLayerValue();

  return (
    <div className={classes.container} id={"skills"} style={{backgroundImage: dark && 'linear-gradient(180deg, rgba(20,20,20,1)10%, rgba(25,25,25,1)90%)'}}>
      <h1 className={classes.title} style={{color: dark && "rgb(247,255,255)"}}>Skills</h1>
      <div className={classes.skillsContainer}>
        <h3 className={classes.subtitle} style={{color: dark && "rgb(247,255,255)"}}>Web</h3>
        <div className={classes.skillsRow}>
          <div className={classes.skillsItem} style={{backgroundColor: dark && "rgb(20,20,20)"}}>
            <MDBIcon fab icon="html5" size="3x" style={{color: dark && "rgb(247,255,255)"}}/>
            <h5 className={classes.skillsItemText} style={{color: dark && "rgb(247,255,255)"}}>HTML 5</h5>
          </div>
          <div className={classes.skillsItem} style={{backgroundColor: dark && "rgb(20,20,20)"}}>
            <MDBIcon fab icon="html5" size="3x" style={{color: dark && "rgb(247,255,255)"}}/>
            <h5 className={classes.skillsItemText} style={{color: dark && "rgb(247,255,255)"}}>HTML 5</h5>
          </div>
          <div className={classes.skillsItem} style={{backgroundColor: dark && "rgb(20,20,20)"}}>
            <MDBIcon fab icon="html5" size="3x" style={{color: dark && "rgb(247,255,255)"}}/>
            <h5 className={classes.skillsItemText} style={{color: dark && "rgb(247,255,255)"}}>HTML 5</h5>
          </div>
          <div className={classes.skillsItem} style={{backgroundColor: dark && "rgb(20,20,20)"}}>
            <MDBIcon fab icon="html5" size="3x" style={{color: dark && "rgb(247,255,255)"}}/>
            <h5 className={classes.skillsItemText} style={{color: dark && "rgb(247,255,255)"}}>HTML 5</h5>
          </div>
          <div className={classes.skillsItem} style={{backgroundColor: dark && "rgb(20,20,20)"}}>
            <MDBIcon fab icon="html5" size="3x" style={{color: dark && "rgb(247,255,255)"}}/>
            <h5 className={classes.skillsItemText} style={{color: dark && "rgb(247,255,255)"}}>HTML 5</h5>
          </div>
          <div className={classes.skillsItem} style={{backgroundColor: dark && "rgb(20,20,20)"}}>
            <MDBIcon fab icon="html5" size="3x" style={{color: dark && "rgb(247,255,255)"}}/>
            <h5 className={classes.skillsItemText} style={{color: dark && "rgb(247,255,255)"}}>HTML 5</h5>
          </div>
        </div>
        <h3 className={classes.subtitle} style={{color: dark && "rgb(247,255,255)"}}>Web</h3>
        <div className={classes.skillsRow}>
          <div className={classes.skillsItem} style={{backgroundColor: dark && "rgb(20,20,20)"}}>
            <MDBIcon fab icon="html5" size="3x" style={{color: dark && "rgb(247,255,255)"}}/>
            <h5 className={classes.skillsItemText} style={{color: dark && "rgb(247,255,255)"}}>HTML 5</h5>
          </div>
          <div className={classes.skillsItem} style={{backgroundColor: dark && "rgb(20,20,20)"}}>
            <MDBIcon fab icon="html5" size="3x" style={{color: dark && "rgb(247,255,255)"}}/>
            <h5 className={classes.skillsItemText} style={{color: dark && "rgb(247,255,255)"}}>HTML 5</h5>
          </div>
          <div className={classes.skillsItem} style={{backgroundColor: dark && "rgb(20,20,20)"}}>
            <MDBIcon fab icon="html5" size="3x" style={{color: dark && "rgb(247,255,255)"}}/>
            <h5 className={classes.skillsItemText} style={{color: dark && "rgb(247,255,255)"}}>HTML 5</h5>
          </div>
          <div className={classes.skillsItem} style={{backgroundColor: dark && "rgb(20,20,20)"}}>
            <MDBIcon fab icon="html5" size="3x" style={{color: dark && "rgb(247,255,255)"}}/>
            <h5 className={classes.skillsItemText} style={{color: dark && "rgb(247,255,255)"}}>HTML 5</h5>
          </div>
          <div className={classes.skillsItem} style={{backgroundColor: dark && "rgb(20,20,20)"}}>
            <MDBIcon fab icon="html5" size="3x" style={{color: dark && "rgb(247,255,255)"}}/>
            <h5 className={classes.skillsItemText} style={{color: dark && "rgb(247,255,255)"}}>HTML 5</h5>
          </div>
          <div className={classes.skillsItem} style={{backgroundColor: dark && "rgb(20,20,20)"}}>
            <MDBIcon fab icon="html5" size="3x" style={{color: dark && "rgb(247,255,255)"}}/>
            <h5 className={classes.skillsItemText} style={{color: dark && "rgb(247,255,255)"}}>HTML 5</h5>
          </div>
        </div>
        <h3 className={classes.subtitle} style={{color: dark && "rgb(247,255,255)"}}>Web</h3>
        <div className={classes.skillsRow}>
          <div className={classes.skillsItem} style={{backgroundColor: dark && "rgb(20,20,20)"}}>
            <MDBIcon fab icon="html5" size="3x" style={{color: dark && "rgb(247,255,255)"}}/>
            <h5 className={classes.skillsItemText} style={{color: dark && "rgb(247,255,255)"}}>HTML 5</h5>
          </div>
          <div className={classes.skillsItem} style={{backgroundColor: dark && "rgb(20,20,20)"}}>
            <MDBIcon fab icon="html5" size="3x" style={{color: dark && "rgb(247,255,255)"}}/>
            <h5 className={classes.skillsItemText} style={{color: dark && "rgb(247,255,255)"}}>HTML 5</h5>
          </div>
          <div className={classes.skillsItem} style={{backgroundColor: dark && "rgb(20,20,20)"}}>
            <MDBIcon fab icon="html5" size="3x" style={{color: dark && "rgb(247,255,255)"}}/>
            <h5 className={classes.skillsItemText} style={{color: dark && "rgb(247,255,255)"}}>HTML 5</h5>
          </div>
          <div className={classes.skillsItem} style={{backgroundColor: dark && "rgb(20,20,20)"}}>
            <MDBIcon fab icon="html5" size="3x" style={{color: dark && "rgb(247,255,255)"}}/>
            <h5 className={classes.skillsItemText} style={{color: dark && "rgb(247,255,255)"}}>HTML 5</h5>
          </div>
          <div className={classes.skillsItem} style={{backgroundColor: dark && "rgb(20,20,20)"}}>
            <MDBIcon fab icon="html5" size="3x" style={{color: dark && "rgb(247,255,255)"}}/>
            <h5 className={classes.skillsItemText} style={{color: dark && "rgb(247,255,255)"}}>HTML 5</h5>
          </div>
          <div className={classes.skillsItem} style={{backgroundColor: dark && "rgb(20,20,20)"}}>
            <MDBIcon fab icon="html5" size="3x" style={{color: dark && "rgb(247,255,255)"}}/>
            <h5 className={classes.skillsItemText} style={{color: dark && "rgb(247,255,255)"}}>HTML 5</h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
