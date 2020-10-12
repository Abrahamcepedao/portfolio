import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import HomeIcon from "@material-ui/icons/Home";
import SchoolIcon from "@material-ui/icons/School";
import DesktopMacIcon from "@material-ui/icons/DesktopMac";
import CodeIcon from "@material-ui/icons/Code";
import ContactMailIcon from "@material-ui/icons/ContactMail";
import { HashLink } from "react-router-hash-link";

const useStyles = makeStyles((theme) => ({
  menu: {
    position: "fixed",
    left: "0px",
    bottom: "0px",
    width: "100vw",
    height: "100px",
  },
  menuContainer: {
    width: "90%",
    height: "80%",
    maxWidth: "700px",
    margin: "auto",
    backgroundColor: "#EEEEFF",
    borderRadius: "40px",
    boxShadow: "0 5px 10px rgba(25, 25, 25, 0.15), 0 10px 10px rgba(25, 25, 25, 0.12)",
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    textAlign: "center"
  },
  menuItem: {
      cursor: "pointer"
  }
}));

function Menu({ classes }) {
  classes = useStyles();
  return (
    <div className={classes.menu}>
      <div className={classes.menuContainer}>
        <HashLink
          activeClass="active"
          to="/#home"
          smooth
          className={classes.navLinks}
        >
          <div className={classes.menuItem}>
            <HomeIcon />
            <p>Home</p>
          </div>
        </HashLink>
        <HashLink
          activeClass="active"
          to="/#education"
          smooth
          className={classes.navLinks}
        >
          <div className={classes.menuItem}>
            <SchoolIcon />
            <p>Education</p>
          </div>
        </HashLink>
        <HashLink
          activeClass="active"
          to="/#projects"
          smooth
          className={classes.navLinks}
        >
          <div className={classes.menuItem}>
            <DesktopMacIcon />
            <p>Projects</p>
          </div>
        </HashLink>
        <HashLink
          activeClass="active"
          to="/#skills"
          smooth
          className={classes.navLinks}
        >
          <div className={classes.menuItem}>
            <CodeIcon />
            <p>Skills</p>
          </div>
        </HashLink>
        <HashLink
          activeClass="active"
          to="/#contact"
          smooth
          className={classes.navLinks}
        >
          <div className={classes.menuItem}>
            <ContactMailIcon />
            <p>Contact</p>
          </div>
        </HashLink>
      </div>
    </div>
  );
}

export default Menu;
