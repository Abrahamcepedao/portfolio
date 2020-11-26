import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import { Row } from "react-bootstrap";
import { useDataLayerValue } from './../../DataLayer';
import Work from "./Work"

const useStyles = makeStyles((theme) => ({
  landingContainer: {
    width: "100vw",
    padding: "50px",
    backgroundImage: 'linear-gradient(180deg, rgba(247,247,255,1)10%, rgba(255,255,255,1)90%)',
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
    fontWeight: "bold"
  },
  projectRow: {
    display: "flex",
    overflowX: "scroll !important",
    padding: "20px 0px 60px 0px"
  },
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

function Projects({ classes }) {
  classes = useStyles();
  const [{dark}] = useDataLayerValue();

  const openInNewTab = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  return (
    <div className={classes.landingContainer} id={"projects"} style={{backgroundImage: dark && 'linear-gradient(180deg, rgba(20,20,20,1)10%, rgba(25,25,25,1)90%)'}}>
      <div className={classes.infoContainer} >
        <h1 className={classes.title} style={{color: dark && "rgb(247,255,255)"}}>Work & Projects</h1>
        <div className={classes.projectsContainer}>
          <h2 className={classes.subtitle} style={{color: dark && "rgb(247,255,255)"}}>For fun projects</h2>
          <div className={classes.projectRow}>
            <div className={classes.projectItem} style={{backgroundImage: "url(./img/Home/Projects/netflix.png)"}}>
              <div className={classes.projectOverlay}  style={{backgroundImage: dark && 'linear-gradient(180deg, rgba(60,60,60,0.1)0%, rgb(60,60,60,1)60%)'}}>
                  <div className={classes.projectInfo}>  
                    <h3 className={classes.projectTitle}>Netflix clone</h3>
                    <p className={classes.projectText}>A Netflix clone imatiting its design and some of its functionality. Based on a tutorial with additional functions.</p>
                    <div className={classes.projectTagsRow}>
                      <div className={classes.projectTagsItem} style={{backgroundColor: "#C33C54"}}><p className={classes.projectTagsItemText}>React</p></div>
                      <div className={classes.projectTagsItem} style={{backgroundColor: "#E89005"}}><p className={classes.projectTagsItemText}>Firebase</p></div>
                      <div className={classes.projectTagsItem} style={{backgroundColor: "#EC7505"}}><p className={classes.projectTagsItemText}>IMDB_API</p></div>
                      <div className={classes.projectTagsItem} style={{backgroundColor: "#007CBE"}}><p className={classes.projectTagsItemText}>Material_UI</p></div>
                    </div>
                    <Row>
                      <ColorButton className={classes.itemButton}
                        onClick={() => {
                            openInNewTab(
                                "https://github.com/Abrahamcepedao/Netflix-react-clone"
                            );
                        }}>
                        Repo
                      </ColorButton>
                      <ColorButton className={classes.itemButton}
                        onClick={() => {
                            openInNewTab(
                                "https://netflix-react-clone-90718.web.app/"
                            );
                        }}>
                        Website
                      </ColorButton>
                    </Row>
                  </div>
              </div>
            </div>
            <div className={classes.projectItem} style={{backgroundImage: "url(./img/Home/Projects/spotify.png)"}}>
              <div className={classes.projectOverlay}  style={{backgroundImage: dark && 'linear-gradient(180deg, rgba(60,60,60,0.1)0%, rgb(60,60,60,1)60%)'}}>
                  <div className={classes.projectInfo}>  
                    <h3 className={classes.projectTitle}>Spotify clone</h3>
                    <p className={classes.projectText}>A Spotify clone imatiting its design and some of its functionality. Based on a tutorial with additional functions.</p>
                    <div className={classes.projectTagsRow}>
                      <div className={classes.projectTagsItem} style={{backgroundColor: "#C33C54"}}><p className={classes.projectTagsItemText}>React</p></div>
                      <div className={classes.projectTagsItem} style={{backgroundColor: "#E89005"}}><p className={classes.projectTagsItemText}>Firebase</p></div>
                      <div className={classes.projectTagsItem} style={{backgroundColor: "#EC7505"}}><p className={classes.projectTagsItemText}>Spotify_API</p></div>
                      <div className={classes.projectTagsItem} style={{backgroundColor: "#B7F0AD"}}><p className={classes.projectTagsItemText}>Context_API</p></div>
                      <div className={classes.projectTagsItem} style={{backgroundColor: "#007CBE"}}><p className={classes.projectTagsItemText}>Material_UI</p></div>
                    </div>
                    <Row>
                      <ColorButton className={classes.itemButton}
                        onClick={() => {
                            openInNewTab(
                                "https://github.com/Abrahamcepedao/spotify-clone"
                            );
                        }}>
                        Repo
                      </ColorButton>
                      <ColorButton className={classes.itemButton}
                        onClick={() => {
                            openInNewTab(
                                "https://spotify-clone-app-36604.web.app/"
                            );
                        }}>
                        Website
                      </ColorButton>
                    </Row>
                  </div>
              </div>
            </div>
            <div className={classes.projectItem} style={{backgroundImage: "url(./img/Home/Projects/amazon.png)"}}>
              <div className={classes.projectOverlay}  style={{backgroundImage: dark && 'linear-gradient(180deg, rgba(60,60,60,0.1)0%, rgb(60,60,60,1)60%)'}}>
                  <div className={classes.projectInfo}>  
                    <h3 className={classes.projectTitle}>Amazon clone</h3>
                    <p className={classes.projectText}>An Amazone clone imatiting its design and some of its functionality. Based on a tutorial with additional functions.</p>
                    <div className={classes.projectTagsRow}>
                      <div className={classes.projectTagsItem} style={{backgroundColor: "#C33C54"}}><p className={classes.projectTagsItemText}>React</p></div>
                      <div className={classes.projectTagsItem} style={{backgroundColor: "#E89005"}}><p className={classes.projectTagsItemText}>Firebase</p></div>
                      <div className={classes.projectTagsItem} style={{backgroundColor: "#B7F0AD"}}><p className={classes.projectTagsItemText}>Context_API</p></div>
                      <div className={classes.projectTagsItem} style={{backgroundColor: "#007CBE"}}><p className={classes.projectTagsItemText}>Material_UI</p></div>
                    </div>
                    <Row>
                      <ColorButton className={classes.itemButton}
                        onClick={() => {
                            openInNewTab(
                                "https://github.com/Abrahamcepedao/Amazon-clone"
                            );
                        }}>
                        Repo
                      </ColorButton>
                      <ColorButton className={classes.itemButton}
                        onClick={() => {
                            openInNewTab(
                                "https://clone-89dfa.web.app/"
                            );
                        }}>
                        Website
                      </ColorButton>
                    </Row>
                  </div>
              </div>
            </div>
            <div className={classes.projectItem} style={{backgroundImage: "url(./img/Home/Projects/hulu.png)"}}>
              <div className={classes.projectOverlay}  style={{backgroundImage: dark && 'linear-gradient(180deg, rgba(60,60,60,0.1)0%, rgb(60,60,60,1)60%)'}}>
                  <div className={classes.projectInfo}>  
                    <h3 className={classes.projectTitle}>Hulu clone</h3>
                    <p className={classes.projectText}>A Hulu clone imatiting its design and some of its functionality. Based on a tutorial with additional functions.</p>
                    <div className={classes.projectTagsRow}>
                      <div className={classes.projectTagsItem} style={{backgroundColor: "#C33C54"}}><p className={classes.projectTagsItemText}>React</p></div>
                      <div className={classes.projectTagsItem} style={{backgroundColor: "#E89005"}}><p className={classes.projectTagsItemText}>Firebase</p></div>
                      <div className={classes.projectTagsItem} style={{backgroundColor: "#B7F0AD"}}><p className={classes.projectTagsItemText}>Context_API</p></div>
                      <div className={classes.projectTagsItem} style={{backgroundColor: "#007CBE"}}><p className={classes.projectTagsItemText}>Material_UI</p></div>
                    </div>
                    <Row>
                      <ColorButton className={classes.itemButton}
                        onClick={() => {
                            openInNewTab(
                                "https://github.com/Abrahamcepedao/Hulu-clone"
                            );
                        }}>
                        Repo
                      </ColorButton>
                      <ColorButton className={classes.itemButton}
                        onClick={() => {
                            openInNewTab(
                                "https://hulu-react-clone-401b1.web.app/"
                            );
                        }}>
                        Website
                      </ColorButton>
                    </Row>
                  </div>
              </div>
            </div>
            <div className={classes.projectItem} style={{backgroundImage: "url(./img/Home/Projects/instagram.png)"}}>
              <div className={classes.projectOverlay}  style={{backgroundImage: dark && 'linear-gradient(180deg, rgba(60,60,60,0.1)0%, rgb(60,60,60,1)60%)'}}>
                  <div className={classes.projectInfo}>  
                    <h3 className={classes.projectTitle}>Instagram clone</h3>
                    <p className={classes.projectText}>A Instagram clone imatiting its design and some of its functionality. Based on a tutorial with additional functions.</p>
                    <div className={classes.projectTagsRow}>
                      <div className={classes.projectTagsItem} style={{backgroundColor: "#C33C54"}}><p className={classes.projectTagsItemText}>React</p></div>
                      <div className={classes.projectTagsItem} style={{backgroundColor: "#E89005"}}><p className={classes.projectTagsItemText}>Firebase</p></div>
                      <div className={classes.projectTagsItem} style={{backgroundColor: "#B7F0AD"}}><p className={classes.projectTagsItemText}>Context_API</p></div>
                      <div className={classes.projectTagsItem} style={{backgroundColor: "#007CBE"}}><p className={classes.projectTagsItemText}>Material_UI</p></div>
                    </div>
                    <Row>
                      <ColorButton className={classes.itemButton}
                        onClick={() => {
                            openInNewTab(
                                "https://github.com/Abrahamcepedao/instagram-clone-react"
                            );
                        }}>
                        Repo
                      </ColorButton>
                      <ColorButton className={classes.itemButton}
                        onClick={() => {
                            openInNewTab(
                                "https://instragam-clone-11576.web.app/"
                            );
                        }}>
                        Website
                      </ColorButton>
                    </Row>
                  </div>
              </div>
            </div>
            <div className={classes.projectItem} style={{backgroundImage: "url(./img/Home/Projects/evernote.png)"}}>
              <div className={classes.projectOverlay}  style={{backgroundImage: dark && 'linear-gradient(180deg, rgba(60,60,60,0.1)0%, rgb(60,60,60,1)60%)'}}>
                  <div className={classes.projectInfo}>  
                    <h3 className={classes.projectTitle}>Evernote clone</h3>
                    <p className={classes.projectText}>A Evernote clone imatiting its design and some of its functionality. Based on a tutorial with additional functions.</p>
                    <div className={classes.projectTagsRow}>
                      <div className={classes.projectTagsItem} style={{backgroundColor: "#C33C54"}}><p className={classes.projectTagsItemText}>React</p></div>
                      <div className={classes.projectTagsItem} style={{backgroundColor: "#E89005"}}><p className={classes.projectTagsItemText}>Firebase</p></div>
                      <div className={classes.projectTagsItem} style={{backgroundColor: "#B7F0AD"}}><p className={classes.projectTagsItemText}>Context_API</p></div>
                      <div className={classes.projectTagsItem} style={{backgroundColor: "#007CBE"}}><p className={classes.projectTagsItemText}>Material_UI</p></div>
                    </div>
                    <Row>
                      <ColorButton className={classes.itemButton}
                        onClick={() => {
                            openInNewTab(
                                "https://github.com/Abrahamcepedao/instagram-clone-react"
                            );
                        }}>
                        Repo
                      </ColorButton>
                      <ColorButton className={classes.itemButton}
                        onClick={() => {
                            openInNewTab(
                                "https://instragam-clone-11576.web.app/"
                            );
                        }}>
                        Website
                      </ColorButton>
                    </Row>
                  </div>
              </div>
            </div>
            <div className={classes.projectItem} style={{backgroundImage: "url(./img/Home/Projects/project_management.png)"}}>
              <div className={classes.projectOverlay}  style={{backgroundImage: dark && 'linear-gradient(180deg, rgba(60,60,60,0.1)0%, rgb(60,60,60,1)60%)'}}>
                  <div className={classes.projectInfo}>  
                    <h3 className={classes.projectTitle}>Project manager</h3>
                    <p className={classes.projectText}>A project management web app to list the activities needed to be done for each project.</p>
                    <div className={classes.projectTagsRow}>
                      <div className={classes.projectTagsItem} style={{backgroundColor: "#C33C54"}}><p className={classes.projectTagsItemText}>React</p></div>
                      <div className={classes.projectTagsItem} style={{backgroundColor: "#E89005"}}><p className={classes.projectTagsItemText}>Firebase</p></div>
                      <div className={classes.projectTagsItem} style={{backgroundColor: "#B7F0AD"}}><p className={classes.projectTagsItemText}>Context_API</p></div>
                      <div className={classes.projectTagsItem} style={{backgroundColor: "#007CBE"}}><p className={classes.projectTagsItemText}>Material_UI</p></div>
                    </div>
                    <Row>
                      <ColorButton className={classes.itemButton}
                        onClick={() => {
                            openInNewTab(
                                "https://github.com/Abrahamcepedao/project-management-reacp-app"
                            );
                        }}>
                        Repo
                      </ColorButton>
                      <ColorButton className={classes.itemButton}
                        onClick={() => {
                            openInNewTab(
                                "https://project-management-react-5d698.web.app/"
                            );
                        }}>
                        Website
                      </ColorButton>
                    </Row>
                  </div>
              </div>
            </div>
            <div className={classes.projectItem} style={{backgroundImage: "url(./img/Home/Projects/todo.png)"}}>
              <div className={classes.projectOverlay}  style={{backgroundImage: dark && 'linear-gradient(180deg, rgba(60,60,60,0.1)0%, rgb(60,60,60,1)60%)'}}>
                  <div className={classes.projectInfo}>  
                    <h3 className={classes.projectTitle}>Todo list</h3>
                    <p className={classes.projectText}>A todo list web app made with React and Firebase. I made it to learn the basics of React.</p>
                    <div className={classes.projectTagsRow}>
                      <div className={classes.projectTagsItem} style={{backgroundColor: "#C33C54"}}><p className={classes.projectTagsItemText}>React</p></div>
                      <div className={classes.projectTagsItem} style={{backgroundColor: "#E89005"}}><p className={classes.projectTagsItemText}>Firebase</p></div>
                      <div className={classes.projectTagsItem} style={{backgroundColor: "#B7F0AD"}}><p className={classes.projectTagsItemText}>Context_API</p></div>
                      <div className={classes.projectTagsItem} style={{backgroundColor: "#007CBE"}}><p className={classes.projectTagsItemText}>Material_UI</p></div>
                    </div>
                    <Row>
                      <ColorButton className={classes.itemButton}
                        onClick={() => {
                            openInNewTab(
                                "https://github.com/Abrahamcepedao/todo-react-app"
                            );
                        }}>
                        Repo
                      </ColorButton>
                      <ColorButton className={classes.itemButton}
                        onClick={() => {
                            openInNewTab(
                                "https://todo-react-app-3bd1b.web.app/"
                            );
                        }}>
                        Website
                      </ColorButton>
                    </Row>
                  </div>
              </div>
            </div>
            <div className={classes.projectItem} style={{backgroundImage: "url(./img/Home/Projects/tudu.png)"}}>
              <div className={classes.projectOverlay}  style={{backgroundImage: dark && 'linear-gradient(180deg, rgba(60,60,60,0.1)0%, rgb(60,60,60,1)60%)'}}>
                  <div className={classes.projectInfo}>  
                    <h3 className={classes.projectTitle}>Tudu</h3>
                    <p className={classes.projectText}>I made a todo list iOS app, seeking to learn these skills and having a personalized todo list app.</p>
                    <div className={classes.projectTagsRow}>
                      <div className={classes.projectTagsItem} style={{backgroundColor: "#C33C54"}}><p className={classes.projectTagsItemText}>Swift</p></div>
                      <div className={classes.projectTagsItem} style={{backgroundColor: "#E89005"}}><p className={classes.projectTagsItemText}>Xcode</p></div>
                      <div className={classes.projectTagsItem} style={{backgroundColor: "#EC7505"}}><p className={classes.projectTagsItemText}>Realm</p></div>
                    </div>
                    <Row>
                      <ColorButton className={classes.itemButton}
                        onClick={() => {
                            openInNewTab(
                                "https://github.com/Abrahamcepedao/TuDu_App"
                            );
                        }}>
                        Repo
                      </ColorButton>
                    </Row>
                  </div>
              </div>
            </div>
            <div className={classes.projectItem} style={{backgroundImage: "url(./img/Home/Projects/url_shortener.png)"}}>
              <div className={classes.projectOverlay}  style={{backgroundImage: dark && 'linear-gradient(180deg, rgba(60,60,60,0.1)0%, rgb(60,60,60,1)60%)'}}>
                  <div className={classes.projectInfo}>  
                    <h3 className={classes.projectTitle}>Bulk url shortener</h3>
                    <p className={classes.projectText}>I made a bulk url shortener using python and the tiny url API. Its opensource so anyone can use it.</p>
                    <div className={classes.projectTagsRow}>
                      <div className={classes.projectTagsItem} style={{backgroundColor: "#C33C54"}}><p className={classes.projectTagsItemText}>Python</p></div>
                      <div className={classes.projectTagsItem} style={{backgroundColor: "#E89005"}}><p className={classes.projectTagsItemText}>TinyUrl_API</p></div>
                    </div>
                    <Row>
                      <ColorButton className={classes.itemButton}
                        onClick={() => {
                            openInNewTab(
                                "https://github.com/Abrahamcepedao/URL_Shortener"
                            );
                        }}>
                        Repo
                      </ColorButton>
                    </Row>
                  </div>
              </div>
            </div>
          </div>
          <p className={classes.scroll}  style={{color: dark && "rgb(247,255,255)"}}>Scroll<ArrowRightAltIcon/></p>
        </div>
        <div className={classes.projectsContainer}>
          <h2 className={classes.subtitle} style={{color: dark && "rgb(247,255,255)"}}>School projects</h2>
          <div className={classes.projectRow}>
            <div className={classes.projectItem} style={{backgroundImage: "url(./img/Home/Projects/volcano.png)"}}>
              <div className={classes.projectOverlay}  style={{backgroundImage: dark && 'linear-gradient(180deg, rgba(60,60,60,0.1)0%, rgb(60,60,60,1)60%)'}}>
                  <div className={classes.projectInfo}>  
                    <h3 className={classes.projectTitle}>Projectile simulator</h3>
                    <p className={classes.projectText}>A simulation of a projectile during a volcano eruption. This simulation can be altered with certain variables.</p>
                    <div className={classes.projectTagsRow}>
                      <div className={classes.projectTagsItem} style={{backgroundColor: "#C33C54"}}><p className={classes.projectTagsItemText}>MatLab</p></div>
                      <div className={classes.projectTagsItem} style={{backgroundColor: "#E89005"}}><p className={classes.projectTagsItemText}>MatLab_App</p></div>
                    </div>
                    <Row>
                      <ColorButton className={classes.itemButton}
                        onClick={() => {
                            openInNewTab(
                                "https://github.com/Abrahamcepedao/ITC/tree/master/Semestre1/modelacion%20computacional%20del%20movimiento/MATLAB/proyecto%202"
                            );
                        }}>
                        Repo
                      </ColorButton>
                    </Row>
                  </div>
              </div>
            </div>
            <div className={classes.projectItem} style={{backgroundImage: "url(./img/Home/Projects/airport.png)"}}>
              <div className={classes.projectOverlay}  style={{backgroundImage: dark && 'linear-gradient(180deg, rgba(60,60,60,0.1)0%, rgb(60,60,60,1)60%)'}}>
                  <div className={classes.projectInfo}>  
                    <h3 className={classes.projectTitle}>Airport simulator</h3>
                    <p className={classes.projectText}>A console simulation of an aiport where one can fetch flights according to the date among other funtions.</p>
                    <div className={classes.projectTagsRow}>
                      <div className={classes.projectTagsItem} style={{backgroundColor: "#C33C54"}}><p className={classes.projectTagsItemText}>C++</p></div>
                      <div className={classes.projectTagsItem} style={{backgroundColor: "#E89005"}}><p className={classes.projectTagsItemText}>txt_files</p></div>
                    </div>
                    <Row>
                      <ColorButton className={classes.itemButton}
                        onClick={() => {
                            openInNewTab(
                                "https://github.com/Abrahamcepedao/ITC/tree/master/Semestre1/c%2B%2B/A00827666_AbrahamCepedas"
                            );
                        }}>
                        Repo
                      </ColorButton>
                    </Row>
                  </div>
              </div>
            </div>
            <div className={classes.projectItem} style={{backgroundImage: "url(./img/Home/Projects/formula1.png)"}}>
              <div className={classes.projectOverlay}  style={{backgroundImage: dark && 'linear-gradient(180deg, rgba(60,60,60,0.1)0%, rgb(60,60,60,1)60%)'}}>
                  <div className={classes.projectInfo}>  
                    <h3 className={classes.projectTitle}>Curve simulator</h3>
                    <p className={classes.projectText}>A simulator of a the curve of a formula 1 race track with the intent of finding the adecuate speed given the angle.</p>
                    <div className={classes.projectTagsRow}>
                      <div className={classes.projectTagsItem} style={{backgroundColor: "#C33C54"}}><p className={classes.projectTagsItemText}>MatLab</p></div>
                      <div className={classes.projectTagsItem} style={{backgroundColor: "#E89005"}}><p className={classes.projectTagsItemText}>MatLab_App</p></div>
                    </div>
                    <Row>
                      <ColorButton className={classes.itemButton}
                        onClick={() => {
                            openInNewTab(
                                "https://github.com/Abrahamcepedao/ITC/tree/master/Semestre1/Modelacion%20computacional%20aplicando%20leyes%20de%20conservacion/archivos%20reto"
                            );
                        }}>
                        Repo
                      </ColorButton>
                    </Row>
                  </div>
              </div>
            </div>
            <div className={classes.projectItem} style={{backgroundImage: "url(./img/Home/Projects/electric.png)"}}>
              <div className={classes.projectOverlay}  style={{backgroundImage: dark && 'linear-gradient(180deg, rgba(60,60,60,0.1)0%, rgb(60,60,60,1)60%)'}}>
                  <div className={classes.projectInfo}>  
                    <h3 className={classes.projectTitle}>Electric field</h3>
                    <p className={classes.projectText}>An electric field simulator that can be altered according to the value of several variables.</p>
                    <div className={classes.projectTagsRow}>
                      <div className={classes.projectTagsItem} style={{backgroundColor: "#C33C54"}}><p className={classes.projectTagsItemText}>MatLab</p></div>
                      <div className={classes.projectTagsItem} style={{backgroundColor: "#E89005"}}><p className={classes.projectTagsItemText}>MatLab_App</p></div>
                    </div>
                    <Row>
                      <ColorButton className={classes.itemButton}
                        onClick={() => {
                            openInNewTab(
                                "https://github.com/Abrahamcepedao/ITC/blob/master/Semestre2/Modelacion%20computacional%20de%20sistemas%20electricos/entregables/entregable_3.mlapp"
                            );
                        }}>
                        Repo
                      </ColorButton>
                    </Row>
                  </div>
              </div>
            </div>
            <div className={classes.projectItem} style={{backgroundImage: "url(./img/Home/Projects/magnetic.png)"}}>
              <div className={classes.projectOverlay}  style={{backgroundImage: dark && 'linear-gradient(180deg, rgba(60,60,60,0.1)0%, rgb(60,60,60,1)60%)'}}>
                  <div className={classes.projectInfo}>  
                    <h3 className={classes.projectTitle}>Magnetic field</h3>
                    <p className={classes.projectText}>An electric field simulator that can be altered according to the value of several variables.</p>
                    <div className={classes.projectTagsRow}>
                      <div className={classes.projectTagsItem} style={{backgroundColor: "#C33C54"}}><p className={classes.projectTagsItemText}>MatLab</p></div>
                      <div className={classes.projectTagsItem} style={{backgroundColor: "#E89005"}}><p className={classes.projectTagsItemText}>MatLab_App</p></div>
                    </div>
                    <Row>
                      <ColorButton className={classes.itemButton}
                        onClick={() => {
                            openInNewTab(
                                "https://github.com/Abrahamcepedao/ITC/blob/master/Semestre2/Modelacion%20computacional%20de%20sistemas%20electromagneticos/entregables/entregable3.mlapp"
                            );
                        }}>
                        Repo
                      </ColorButton>
                    </Row>
                  </div>
              </div>
            </div>
            <div className={classes.projectItem} style={{backgroundImage: "url(./img/Home/Projects/genoma.png)"}}>
              <div className={classes.projectOverlay}  style={{backgroundImage: dark && 'linear-gradient(180deg, rgba(60,60,60,0.1)0%, rgb(60,60,60,1)60%)'}}>
                  <div className={classes.projectInfo}>  
                    <h3 className={classes.projectTitle}>Lung cancer</h3>
                    <p className={classes.projectText}>An algorithm that analyzes certain genes to early detect the possibility of lung cancer in a certain gene.</p>
                    <div className={classes.projectTagsRow}>
                      <div className={classes.projectTagsItem} style={{backgroundColor: "#C33C54"}}><p className={classes.projectTagsItemText}>R</p></div>
                      <div className={classes.projectTagsItem} style={{backgroundColor: "#E89005"}}><p className={classes.projectTagsItemText}>Python</p></div>
                      <div className={classes.projectTagsItem} style={{backgroundColor: "#B7F0AD"}}><p className={classes.projectTagsItemText}>Tensorflow</p></div>
                      <div className={classes.projectTagsItem} style={{backgroundColor: "#007CBE"}}><p className={classes.projectTagsItemText}>Keras</p></div>
                    </div>
                    <Row>
                      <ColorButton className={classes.itemButton}
                        onClick={() => {
                            openInNewTab(
                                "https://github.com/Abrahamcepedao/ITC/tree/master/Semestre2/analisis%20de%20biologia%20computacional/archivos%20r/actividad%205"
                            );
                        }}>
                        Repo
                      </ColorButton>
                    </Row>
                  </div>
              </div>
            </div>
            <div className={classes.projectItem} style={{backgroundImage: "url(./img/Home/Projects/beer.png)"}}>
              <div className={classes.projectOverlay}  style={{backgroundImage: dark && 'linear-gradient(180deg, rgba(60,60,60,0.1)0%, rgb(60,60,60,1)60%)'}}>
                  <div className={classes.projectInfo}>  
                    <h3 className={classes.projectTitle}>Beer tar 3D model</h3>
                    <p className={classes.projectText}>A 3D model of a beer tar using polynomial and exponential functions, and used a printed it with a 3D printer.</p>
                    <div className={classes.projectTagsRow}>
                      <div className={classes.projectTagsItem} style={{backgroundColor: "#C33C54"}}><p className={classes.projectTagsItemText}>MatLab</p></div>
                      <div className={classes.projectTagsItem} style={{backgroundColor: "#E89005"}}><p className={classes.projectTagsItemText}>3D_printer</p></div>
                    </div>
                    <Row>
                      <ColorButton className={classes.itemButton}
                        onClick={() => {
                            openInNewTab(
                                "https://github.com/Abrahamcepedao/ITC/tree/master/Semestre2/modelacion%20de%20la%20ingenieria%20con%20matematica%20computacional/proyecto"
                            );
                        }}>
                        Repo
                      </ColorButton>
                    </Row>
                  </div>
              </div>
            </div>
            <div className={classes.projectItem} style={{backgroundImage: "url(./img/Home/Projects/streaming.png)"}}>
              <div className={classes.projectOverlay}  style={{backgroundImage: dark && 'linear-gradient(180deg, rgba(60,60,60,0.1)0%, rgb(60,60,60,1)60%)'}}>
                  <div className={classes.projectInfo}>  
                    <h3 className={classes.projectTitle}>Streaming simulator</h3>
                    <p className={classes.projectText}>A streaming service console simulator that can fetch the movies and series or watch them and store their history.</p>
                    <div className={classes.projectTagsRow}>
                      <div className={classes.projectTagsItem} style={{backgroundColor: "#C33C54"}}><p className={classes.projectTagsItemText}>C++</p></div>
                      <div className={classes.projectTagsItem} style={{backgroundColor: "#E89005"}}><p className={classes.projectTagsItemText}>txt_files</p></div>
                    </div>
                    <Row>
                      <ColorButton className={classes.itemButton}
                        onClick={() => {
                            openInNewTab(
                                "https://github.com/Abrahamcepedao/ITC/tree/master/Semestre2/programacion%20orientada%20a%20objetos/proyecto/A00827666_ProyectoIntegrador"
                            );
                        }}>
                        Repo
                      </ColorButton>
                    </Row>
                  </div>
              </div>
            </div>
          </div>
          <p className={classes.scroll} style={{color: dark && "rgb(247,255,255)"}}>Scroll<ArrowRightAltIcon/></p>
        </div>
        <Work/>
      </div>
    </div>
  );
}

export default Projects;
