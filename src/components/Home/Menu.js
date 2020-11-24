import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import HomeIcon from "@material-ui/icons/Home";
import SchoolIcon from "@material-ui/icons/School";
import DesktopMacIcon from "@material-ui/icons/DesktopMac";
import CodeIcon from "@material-ui/icons/Code";
import ContactMailIcon from "@material-ui/icons/ContactMail";
import { HashLink } from "react-router-hash-link";
import { useDataLayerValue } from './../../DataLayer';

const useStyles = makeStyles((theme) => ({
  menu: {
    position: "fixed",
    left: "0px",
    bottom: "0px",
    width: "100vw",
    height: "100px",
    zIndex: '999'
  },
  menuContainer: {
    width: "90%",
    height: "80%",
    maxWidth: "700px",
    margin: "auto",
    backgroundColor: "rgb(20,20,20)",
    borderRadius: "40px",
    boxShadow: "0 5px 10px rgba(25, 25, 25, 0.15), 0 10px 10px rgba(25, 25, 25, 0.12)",
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    textAlign: "center",
    [theme.breakpoints.down('576')]: {
      position: "relative",
      width: "100%",
      borderRadius: "0px",
      boxShadow: "none",
      top: "20%"
    }
  },
  navLinks: {
    textDecoration: 'none',
    '&:hover': {
      textDecoration: "none !important",
      color: "rgb(247,255,255)",
    }
  },
  menuItem: {
      cursor: "pointer",
      color: 'black',
      padding: "10px",
      borderRadius: "5px",
      '&:hover': {
        backgroundColor: "rgb(45,45,45)"
      }
  },
  menuItemDark: {
      cursor: "pointer",
      color: 'black',
      padding: "10px",
      borderRadius: "5px",
      '&:hover': {
        backgroundColor: "rgb(227,235,235)"
      }
  },
  menuItemText: {
    textDecoration: 'none !important',
    margin: '0px',
    color: "rgb(247,255,255)",
    [theme.breakpoints.down('576')]: {
      fontSize: '12px'
    },
    '&:hover': {
      textDecoration: "none !important",
      color: "rgb(247,255,255)",
    }
  }
}));

function Menu({ classes }) {
  classes = useStyles();
  const [{dark}] = useDataLayerValue();

  return (
    <div className={classes.menu}>
      <div className={classes.menuContainer} style={{backgroundColor: dark && "rgb(247,255,255)"}}>
        <HashLink
          activeClass="active"
          to="/#home"
          smooth
          className={classes.navLinks}
        >
          <div className={dark ? classes.menuItemDark : classes.menuItem}>
            <HomeIcon style={{color: dark ? "rgb(20,20,20)" : "rgb(237,255,255)"}}/>
            <p className={classes.menuItemText} style={{color: dark && "rgb(20,20,20)"}}>Home</p>
          </div>
        </HashLink>
        <HashLink
          activeClass="active"
          to="/#education"
          smooth
          className={classes.navLinks}
        >
          <div className={dark ? classes.menuItemDark : classes.menuItem}>
            <SchoolIcon style={{color: dark ? "rgb(20,20,20)" : "rgb(237,255,255)"}} />
            <p className={classes.menuItemText} style={{color: dark && "rgb(20,20,20)"}}>Education</p>
          </div>
        </HashLink>
        <HashLink
          activeClass="active"
          to="/#projects"
          smooth
          className={classes.navLinks}
        >
          <div className={dark ? classes.menuItemDark : classes.menuItem}>
            <DesktopMacIcon style={{color: dark ? "rgb(20,20,20)" : "rgb(237,255,255)"}} />
            <p className={classes.menuItemText} style={{color: dark && "rgb(20,20,20)"}}>Work & Projects</p>
          </div>
        </HashLink>
        <HashLink
          activeClass="active"
          to="/#skills"
          smooth
          className={classes.navLinks}
        >
          <div className={dark ? classes.menuItemDark : classes.menuItem}>
            <CodeIcon style={{color: dark ? "rgb(20,20,20)" : "rgb(237,255,255)"}} />
            <p className={classes.menuItemText} style={{color: dark && "rgb(20,20,20)"}}>Skills</p>
          </div>
        </HashLink>
        <HashLink
          activeClass="active"
          to="/#contact"
          smooth
          className={classes.navLinks}
        >
          <div className={dark ? classes.menuItemDark : classes.menuItem}>
            <ContactMailIcon style={{color: dark ? "rgb(20,20,20)" : "rgb(237,255,255)"}} />
            <p className={classes.menuItemText} style={{color: dark && "rgb(20,20,20)"}}>Contact</p>
          </div>
        </HashLink>
      </div>
    </div>
  );
}

export default Menu;
