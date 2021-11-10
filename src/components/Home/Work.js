import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import { useDataLayerValue } from './../../DataLayer';
import { useMediaQuery } from 'react-responsive'

const useStyles = makeStyles((theme) => ({
    subtitle: {
        textAlign: "left",
        marginBottom: "-10px",
        fontWeight: "bold"
    },
    workContainer:{
        width: "100%",
        padding: "50px 5%",
        [theme.breakpoints.down('576')]: {
            padding: "50px 10px"
        }
    },
    workItem: {
        width: "100%",
        display: "flex",
        alignItems: "center"
    },
    workItemLeft:{
        width: "50%",
        textAlign: "right",
        padding: "10px 30px 10px 0px",
        borderRight: "solid rgb(100,100,110) 3px",
        [theme.breakpoints.down('768')]: {
            width: "90%"
        },
        [theme.breakpoints.down('576')]: {
            width:  "80%"
        }
    },
    workItemContent: {
        width: "100%",
        backgroundImage:  'linear-gradient(90deg, rgba(32, 151, 243, 0)0%, rgba(32, 151, 243, 1)60%)',
        borderRadius: "10px",
        padding: "20px 30px 20px 50px",
        color: "rgb(20,20,20)",
        transition: "transform 450ms",
        '&:hover': {
            transform: "scale(1.02)"
        },
        [theme.breakpoints.down('768')]: {
            padding: "20px 10px 20px 20px",
        }
    },
    workItemRight: {
        [theme.breakpoints.down('768')]: {
            width: "10%"
        },
        [theme.breakpoints.down('576')]: {
            width:  "20%"
        }
    },
    workItemContentRight: {
        width: "100%",
        display: "flex",
        alignItems: "center",
    },
    workItemCircle: {
        position: "relative",
        left: "-11.5px",
        top: "-7px",
        minWidth: "20px",
        minHeight: "20px",
        background: "rgb(247,255,255)",
        border: "solid rgb(32, 151, 243) 3px",
        borderRadius: "50%"
    },
    date: {
        flex: "1",
        textAlign: "left",
        fontWeight: "bolder",
        [theme.breakpoints.down('768')]: {
            fontSize: "12px",
            fontWeight: "normal"
        }

    },
    workItemLeft2: {
        width: "50%",
        textAlign: "right",
        padding: "10px 30px 10px 0px",
    },
    workItemRight2: {
        position: "relative",
        width: "50%",
        left: "-3px",
        padding: "10px 0px 10px 20px",
        borderLeft: "solid rgb(100,100,110) 3px",
        textAlign: "left"
    },
    workItemContent2: {
        width: "100%",
        backgroundImage:  'linear-gradient(90deg, rgba(32, 151, 243, 1)0%, rgba(32, 151, 243, 0)100%)',
        color: "rgb(20,20,20)",
        borderRadius: "10px",
        padding: "20px 50px 20px 30px",
        transition: "transform 450ms",
        '&:hover': {
            transform: "scale(1.02)"
        }
    },
    workItemContentLeft2: {
        width: "100%",
        display: "flex",
        alignItems: "center",       
    },
    workItemCircle2:{
        position: "relative",
        left: "37.5px",
        top: "-7px",
        width: "20px",
        height: "20px",
        background: "rgb(247,255,255)",
        border: "solid rgb(32, 151, 243) 3px",
        borderRadius: "50%",
        float: "right",
        zIndex: "10",
        marginLeft: "-27px"
    },
    date2: {
        flex: "1",
        fontWeight: "bolder",
        [theme.breakpoints.down('768')]: {
            fontSize: "12px",
            fontWeight: "normal"
        }
    },
    itemButton: {
        minWidth: "100px",
        borderRadius: "25px",
        padding: "10px 20px"
    },

}));

const StyledButtonLight = withStyles((theme) => ({
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

const StyledButtonDark = withStyles((theme) => ({
  root: {
    color: "#010400",
    backgroundColor: "white",
    borderRadius: "100px",
    transition: "transform 450ms",
    fontWeight: "bolder",
    padding: "10px 20px",
    '&:hover': {
      backgroundColor: "rgb(237,237,245)",
      transform: "scale(1.08)",
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: "rgb(237,237,245)",
      border: 'none',
    },
    '&:focus': {
      backgroundColor: "rgb(237,237,245)",
    },
  },
}))(Button);

function Work({ classes }) {
  classes = useStyles();
  const [{dark}] = useDataLayerValue();
  
  const isMobile = useMediaQuery({
    query: '(max-width: 768px)'
  })

  const openInNewTab = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  return (
    <div className={{backgroundColor: dark && "rgb(20,20,20)"}}>
        <h2 className={classes.subtitle} style={{color: dark && "rgb(247,255,255)", textAlign: "center"}}>Software related work</h2>
        <div className={classes.workContainer}>
            {/* NearShore Technologies */}
            <div className={classes.workItem}>
                <div className={classes.workItemLeft}>
                    <div className={classes.workItemContent}>
                        <h3 style={{color: dark && "rgb(247,255,255)"}}><strong>NearShore Technologies - internship</strong></h3>
                        <p style={{color: dark && "rgb(247,255,255)"}}>Did an intership at NearShore Technologies during the summer of 2017. I was required to work with excel worksheets and studied the principles of Quality Assurance.</p>
                        {dark ? (
                            <StyledButtonDark
                                className={classes.darkButton}
                                onClick={() => {
                                    openInNewTab(
                                        "https://www.nearshoretechnology.com/"
                                    );
                                }}>
                                More info
                            </StyledButtonDark>
                            ) : (
                            <StyledButtonLight
                                className={classes.darkButton}
                                onClick={() => {
                                    openInNewTab(
                                        "https://www.nearshoretechnology.com/"
                                    );
                                }}>
                                More info
                            </StyledButtonLight>
                        )}
                    </div>
                </div>
                <div className={classes.workItemRight}>
                    <div className={classes.workItemContentRight}>
                        <div className={classes.workItemCircle} style={{backgroundColor: dark && "rgb(20,20,20)"}}></div>
                        <p className={classes.date} style={{color: dark && "rgb(247,255,255)"}}>Summer 2017</p>
                    </div>
                </div>
            </div>

            {/* Duture */}
            { isMobile ? (
                <div className={classes.workItem}>
                    <div className={classes.workItemLeft}>
                        <div className={classes.workItemContent}>
                            <h3 style={{color: dark && "rgb(247,255,255)"}}><strong>DFuture Web Development</strong></h3>
                            <p style={{color: dark && "rgb(247,255,255)"}}>Founded DFuture with the purpose of improving my skills and building websites for companies. Therefore, my responsibilities include web development and having meetings with the clients.</p>
                            {dark ? (
                                <StyledButtonDark
                                    className={classes.darkButton}
                                    onClick={() => {
                                        openInNewTab(
                                            "https://dfuture.tk/"
                                        );
                                    }}>
                                    More info
                                </StyledButtonDark>
                                ) : (
                                <StyledButtonLight
                                    className={classes.darkButton}
                                    onClick={() => {
                                        openInNewTab(
                                            "https://dfuture.tk"
                                        );
                                    }}>
                                    More info
                                </StyledButtonLight>
                            )}
                        </div>
                    </div>
                    <div className={classes.workItemRight}>
                        <div className={classes.workItemContentRight}>
                            <div className={classes.workItemCircle} style={{backgroundColor: dark && "rgb(20,20,20)"}}></div>
                            <p className={classes.date} style={{color: dark && "rgb(247,255,255)"}}>2017 - Present</p>
                        </div>
                    </div>
                </div>
            ) : (
                <div className={classes.workItem}>
                    <div className={classes.workItemLeft2}>
                        <div className={classes.workItemContentLeft2}>
                            <p className={classes.date2}  style={{color: dark && "rgb(247,255,255)"}}>2017 - Present</p>
                            <div className={classes.workItemCircle2} style={{backgroundColor: dark && "rgb(20,20,20)"}}></div>
                        </div>
                    </div>
                    <div className={classes.workItemRight2}>
                        <div className={classes.workItemContent2}>
                            <h3 style={{color: dark && "rgb(247,255,255)"}}><strong>DFuture Web Development</strong></h3>
                            <p  style={{color: dark && "rgb(247,255,255)"}}>Founded DFuture with the purpose of improving my skills and building websites for companies. Therefore, my responsibilities include web development and having meetings with the clients.</p>
                            {dark ? (
                                <StyledButtonDark
                                    className={classes.darkButton}
                                    onClick={() => {
                                        openInNewTab(
                                            "https://dfuture.tk"
                                        );
                                    }}>
                                    More info
                                </StyledButtonDark>
                                ) : (
                                <StyledButtonLight
                                    className={classes.darkButton}
                                    onClick={() => {
                                        openInNewTab(
                                            "https://dfuture.tk"
                                        );
                                    }}>
                                    More info
                                </StyledButtonLight>
                            )}
                        </div>
                    </div>
                </div>
            )}
            
            

            {/* DuudApp */}
            <div className={classes.workItem}>
                <div className={classes.workItemLeft}>
                    <div className={classes.workItemContent}>
                        <h3 style={{color: dark && "rgb(247,255,255)"}}><strong>Duud App - cofounder</strong></h3>
                        <p style={{color: dark && "rgb(247,255,255)"}}>Cofounded Duud App, which is an app that allows users to send stickers through their keyboard while chatting on a social media platform. I developed the content, the website and managed the app development.</p>
                        {dark ? (
                            <StyledButtonDark
                                className={classes.darkButton}
                                onClick={() => {
                                    openInNewTab(
                                        "https://dfuture.tk/duud/"
                                    );
                                }}>
                                More info
                            </StyledButtonDark>
                            ) : (
                            <StyledButtonLight
                                className={classes.darkButton}
                                onClick={() => {
                                    openInNewTab(
                                        "https://dfuture.tk/duud/"
                                    );
                                }}>
                                More info
                            </StyledButtonLight>
                        )}
                    </div>
                </div>
                <div className={classes.workItemRight}>
                    <div className={classes.workItemContentRight}>
                        <div className={classes.workItemCircle} style={{backgroundColor: dark && "rgb(20,20,20)"}}></div>
                        <p className={classes.date} style={{color: dark && "rgb(247,255,255)"}}>Feb 2018 - Dic 2018</p>
                    </div>
                </div>
            </div>

            {/* ITESM - on campus job */}
            {isMobile ? (
                <div className={classes.workItem}>
                    <div className={classes.workItemLeft}>
                        <div className={classes.workItemContent}>
                            <h3 style={{color: dark && "rgb(247,255,255)"}}><strong>ITESM - On-campus job</strong></h3>
                            <p style={{color: dark && "rgb(247,255,255)"}}>Did an on-campus job at ITESM where I had the opportunity to collaborate on several projects, including one of covid-19 live tracking and the population expansion of Monterrey. Additionally, I was in charge of creating scripts using R to analyze covid data and generate reports.</p>
                            {dark ? (
                                <StyledButtonDark
                                    className={classes.darkButton}
                                    onClick={() => {
                                        openInNewTab(
                                            "https://tec.mx/es"
                                        );
                                    }}>
                                    More info
                                </StyledButtonDark>
                                ) : (
                                <StyledButtonLight
                                    className={classes.darkButton}
                                    onClick={() => {
                                        openInNewTab(
                                            "https://tec.mx/es"
                                        );
                                    }}>
                                    More info
                                </StyledButtonLight>
                            )}
                        </div>
                    </div>
                    <div className={classes.workItemRight}>
                        <div className={classes.workItemContentRight}>
                            <div className={classes.workItemCircle} style={{backgroundColor: dark && "rgb(20,20,20)"}}></div>
                            <p className={classes.date} style={{color: dark && "rgb(247,255,255)"}}>Aug 2020 - Present</p>
                        </div>
                    </div>
                </div>
            ) : (
                <div className={classes.workItem}>
                    <div className={classes.workItemLeft2}>
                        <div className={classes.workItemContentLeft2}>
                            <p className={classes.date2}  style={{color: dark && "rgb(247,255,255)"}}>Aug 2020 - Present</p>
                            <div className={classes.workItemCircle2} style={{backgroundColor: dark && "rgb(20,20,20)"}}></div>
                        </div>
                    </div>
                    <div className={classes.workItemRight2}>
                        <div className={classes.workItemContent2}>
                            <h3 style={{color: dark && "rgb(247,255,255)"}}><strong>ITESM - On campus job</strong></h3>
                            <p  style={{color: dark && "rgb(247,255,255)"}}>Did an on-campus job at ITESM where I had the opportunity to collaborate on several projects, including one of covid-19 live tracking and the population expansion of Monterrey. Additionally, I was in charge of creating scripts using R to analyze covid data and generate reports.</p>
                            {dark ? (
                                <StyledButtonDark
                                    className={classes.darkButton}
                                    onClick={() => {
                                        openInNewTab(
                                            "https://tec.mx/en"
                                        );
                                    }}>
                                    More info
                                </StyledButtonDark>
                                ) : (
                                <StyledButtonLight
                                    className={classes.darkButton}
                                    onClick={() => {
                                        openInNewTab(
                                            "https://tec.mx/en"
                                        );
                                    }}>
                                    More info
                                </StyledButtonLight>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    </div>
  );
}

export default Work;
