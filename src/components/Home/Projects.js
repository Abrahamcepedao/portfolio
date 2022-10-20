import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import { useDataLayerValue } from './../../DataLayer';
import Work from "./Work"
import Project from "./Project";

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

function Projects({ classes }) {
  classes = useStyles();
  const [{dark}] = useDataLayerValue();


  const funProjects = [
    {
      title: "Netflix clone",
      description: "A Netflix clone imatiting its design and some of its functionality. Based on a tutorial with additional functions.",
      img: "url(/portfolio/img/Home/Projects/netflix.png)",
      tags: [{name: "React", color: "#C33C54"},{name: "Firebase", color: "#E89005"},{name: "IMDB_API", color: "#EC7505"},{name: "Material_UI", color: "#007CBE"}],
      repo: "https://github.com/Abrahamcepedao/Netflix-react-clone",
      web: "https://netflix-react-clone-90718.web.app/"
    },
    {
      title: "Spotify clone",
      description: "A Spotify clone imatiting its design and some of its functionality. Based on a tutorial with additional functions.",
      img: "url(/portfolio/img/Home/Projects/spotify.png)",
      tags: [{name: "React", color: "#C33C54"},{name: "Firebase", color: "#E89005"},{name: "Spotify_API", color: "#EC7505"},{name: "Context_API", color: "#B7F0AD"},{name: "Material_UI", color: "#007CBE"}],
      repo: "https://github.com/Abrahamcepedao/spotify-clone",
      web: "https://spotify-clone-app-36604.web.app/"
    },
    {
      title: "Amazon clone",
      description: "An Amazone clone imatiting its design and some of its functionality. Based on a tutorial with additional functions.",
      img: "url(/portfolio/img/Home/Projects/amazon.png)",
      tags: [{name: "React", color: "#C33C54"},{name: "Firebase", color: "#E89005"},{name: "Context_API", color: "#B7F0AD"},{name: "Material_UI", color: "#007CBE"}],
      repo: "https://github.com/Abrahamcepedao/Amazon-clone",
      web: "https://clone-89dfa.web.app/"
    },
    {
      title: "Hulu clone",
      description: "A Hulu clone imatiting its design and some of its functionality. Based on a tutorial with additional functions.",
      img: "url(/portfolio/img/Home/Projects/hulu.png)",
      tags: [{name: "React", color: "#C33C54"},{name: "Firebase", color: "#E89005"},{name: "Context_API", color: "#B7F0AD"},{name: "Material_UI", color: "#007CBE"}],
      repo: "https://github.com/Abrahamcepedao/Hulu-clone",
      web: "https://hulu-react-clone-401b1.web.app/"
    },
    {
      title: "Instagram clone",
      description: "A Instagram clone imatiting its design and some of its functionality. Based on a tutorial with additional functions.",
      img: "url(/portfolio/img/Home/Projects/instagram.png)",
      tags: [{name: "React", color: "#C33C54"},{name: "Firebase", color: "#E89005"},{name: "Context_API", color: "#B7F0AD"},{name: "Material_UI", color: "#007CBE"}],
      repo: "https://github.com/Abrahamcepedao/instagram-clone-react",
      web: "https://instragam-clone-11576.web.app/"
    },
    {
      title: "Evernote clone",
      description: "A Instagram clone imatiting its design and some of its functionality. Based on a tutorial with additional functions.",
      img: "url(/portfolio/img/Home/Projects/evernote.png)",
      tags: [{name: "React", color: "#C33C54"},{name: "Firebase", color: "#E89005"},{name: "Context_API", color: "#B7F0AD"},{name: "Material_UI", color: "#007CBE"}],
      repo: "https://github.com/Abrahamcepedao/evernote-react-app",
      web: "https://evernote-react-clone-76dc9.web.app/"
    },
    {
      title: "Project manager",
      description: "A project management web app to list the activities needed to be done for each project.",
      img: "url(/portfolio/img/Home/Projects/project_management.png)",
      tags: [{name: "React", color: "#C33C54"},{name: "Firebase", color: "#E89005"},{name: "Context_API", color: "#B7F0AD"},{name: "Material_UI", color: "#007CBE"}],
      repo: "https://github.com/Abrahamcepedao/project-management-reacp-app",
      web: "https://project-management-react-5d698.web.app/"
    },
    {
      title: "Todo list",
      description: "A todo list web app made with React and Firebase. I made it to learn the basics of React.",
      img: "url(/portfolio/img/Home/Projects/todo.png)",
      tags: [{name: "React", color: "#C33C54"},{name: "Firebase", color: "#E89005"},{name: "Context_API", color: "#B7F0AD"},{name: "Material_UI", color: "#007CBE"}],
      repo: "https://github.com/Abrahamcepedao/todo-react-app",
      web: "https://todo-react-app-3bd1b.web.app/"
    },
    {
      title: "Tudu",
      description: "I made a todo list iOS app, seeking to learn these skills and having a personalized todo list app.",
      img: "url(/portfolio/img/Home/Projects/tudu.png)",
      tags: [{name: "React", color: "#C33C54"},{name: "Xcode", color: "#E89005"},{name: "Realm", color: "#EC7505"}],
      repo: "https://github.com/Abrahamcepedao/TuDu_App",
      web: "https://dfuture.tk/toodu/"
    },
    {
      title: "Bulk url shortener",
      description: "I made a bulk url shortener using python and the tiny url API. Its opensource so anyone can use it.",
      img: "url(/portfolio/img/Home/Projects/url_shortener.png)",
      tags: [{name: "Python", color: "#C33C54"},{name: "TinyUrl_API", color: "#E89005"}],
      repo: "https://github.com/Abrahamcepedao/URL_Shortener",
      web: ""
    }
  ]

  const schoolProjects = [
    {
      title: "CEMEX web app",
      description: "Developed and deployed a web using React, MongoDB and Falsk with machine learning clustering algorithms.",
      img: "url(/portfolio/img/Home/Projects/cemex.png)",
      tags: [{name: "React", color: "#C33C54"},{name: "Flask", color: "#E89005"},{name: "MongoDB", color: "#E89005"},{name: "AWS", color: "#E89005"}],
      repo: "https://github.com/Abrahamcepedao/CemexWeb",
      web: "http://dfuture.com.mx/cemexfix"
    },
    {
      title: "iOS mobile app",
      description: "Developed an iOS mobile app using Swift, Xcode, and Realm for the Marco Museum at Monterrey.",
      img: "url(/portfolio/img/Home/Projects/marco.png)",
      tags: [{name: "Swift", color: "#C33C54"},{name: "Xcode", color: "#E89005"},{name: "Realm", color: "#E89005"}],
      repo: "https://github.com/Abrahamcepedao/MarcoFinal",
      web: "http://dfuture.com.mx/marco"
    },
    {
      title: "Gamifyng web app",
      description: "Developed a gamifying web app using React and SQL server connected to a unity game for Ternium.",
      img: "url(/portfolio/img/Home/Projects/ternium.png)",
      tags: [{name: "React", color: "#C33C54"},{name: "C#", color: "#E89005"},{name: "MySQL", color: "#E89005"}],
      repo: "",
      web: "http://dfuture.com.mx/ternium"
    },
    {
      title: "Projectile simulator",
      description: "A simulation of a projectile during a volcano eruption. This simulation can be altered with certain variables.",
      img: "url(/portfolio/img/Home/Projects/volcano.png)",
      tags: [{name: "MatLab", color: "#C33C54"},{name: "MatLab_App", color: "#E89005"}],
      repo: "https://github.com/Abrahamcepedao/ITC/tree/master/Semestre1/modelacion%20computacional%20del%20movimiento/MATLAB/proyecto%202",
      web: ""
    },
    {
      title: "Airport simulator",
      description: "A console simulation of an aiport where one can fetch flights according to the date among other funtions.",
      img: "url(/portfolio/img/Home/Projects/airport.png)",
      tags: [{name: "c++", color: "#C33C54"},{name: "txt_files", color: "#E89005"}],
      repo: "https://github.com/Abrahamcepedao/ITC/tree/master/Semestre1/c%2B%2B/A00827666_AbrahamCepedas",
      web: ""
    },
    {
      title: "Curve simulator",
      description: "A simulator of a the curve of a formula 1 race track with the intent of finding the adecuate speed given the angle.",
      img: "url(/portfolio/img/Home/Projects/formula1.png)",
      tags: [{name: "Matlab", color: "#C33C54"},{name: "Matlab_App", color: "#E89005"}],
      repo: "https://github.com/Abrahamcepedao/ITC/tree/master/Semestre1/Modelacion%20computacional%20aplicando%20leyes%20de%20conservacion/archivos%20reto",
      web: ""
    },
    {
      title: "Electric field",
      description: "An electric field simulator that can be altered according to the value of several variables.",
      img: "url(/portfolio/img/Home/Projects/electric.png)",
      tags: [{name: "Matlab", color: "#C33C54"},{name: "Matlab_App", color: "#E89005"}],
      repo: "https://github.com/Abrahamcepedao/ITC/blob/master/Semestre2/Modelacion%20computacional%20de%20sistemas%20electricos/entregables/entregable_3.mlapp",
      web: ""
    },
    {
      title: "Magnetic field",
      description: "An electric magnetic simulator that can be altered according to the value of several variables.",
      img: "url(/portfolio/img/Home/Projects/magnetic.png)",
      tags: [{name: "Matlab", color: "#C33C54"},{name: "Matlab_App", color: "#E89005"}],
      repo: "https://github.com/Abrahamcepedao/ITC/blob/master/Semestre2/Modelacion%20computacional%20de%20sistemas%20electromagneticos/entregables/entregable3.mlapp",
      web: ""
    },
    {
      title: "Lung cancer",
      description: "An algorithm that analyzes certain genes to early detect the possibility of lung cancer in a certain gene.",
      img: "url(/portfolio/img/Home/Projects/genoma.png)",
      tags: [{name: "R", color: "#C33C54"},{name: "Python", color: "#E89005"},{name: "Tensorflow", color: "#B7F0AD"},{name: "Keras", color: "#007CBE"}],
      repo: "https://github.com/Abrahamcepedao/ITC/tree/master/Semestre2/analisis%20de%20biologia%20computacional/archivos%20r/actividad%205",
      web: ""
    },
    {
      title: "Beer tar 3D model",
      description: "A 3D model of a beer tar using polynomial and exponential functions, and used a printed it with a 3D printer.",
      img: "url(/portfolio/img/Home/Projects/beer.png)",
      tags: [{name: "Matlab", color: "#C33C54"},{name: "3D printer", color: "#E89005"}],
      repo: "https://github.com/Abrahamcepedao/ITC/tree/master/Semestre2/modelacion%20de%20la%20ingenieria%20con%20matematica%20computacional/proyecto",
      web: ""
    },
    {
      title: "Streaming simulator",
      description: "A streaming service console simulator that can fetch the movies and series or watch them and store their history.",
      img: "url(/portfolio/img/Home/Projects/streaming.png)",
      tags: [{name: "C++", color: "#C33C54"},{name: "txt_files", color: "#E89005"}],
      repo: "https://github.com/Abrahamcepedao/ITC/tree/master/Semestre2/programacion%20orientada%20a%20objetos/proyecto/A00827666_ProyectoIntegrador",
      web: ""
    },
  ]

  return (
    <div className={classes.landingContainer} id={"projects"} style={{backgroundImage: dark && 'linear-gradient(180deg, rgba(20,20,20,1)10%, rgba(25,25,25,1)90%)'}}>
      <div className={classes.infoContainer} >
        <h1 className={classes.title} style={{color: dark && "rgb(247,255,255)"}}>Work & Projects</h1>
        <div className={classes.projectsContainer}>
          <h2 className={classes.subtitle} style={{color: dark && "rgb(247,255,255)"}}>For fun projects</h2>
          <div className={classes.projectRow}>
            {funProjects.map((item, i) => (
              <Project key={i} project={item}/>
            ))}
          </div>
          <p className={classes.scroll}  style={{color: dark && "rgb(247,255,255)"}}>Scroll<ArrowRightAltIcon/></p>
        </div>
        <div className={classes.projectsContainer}>
          <h2 className={classes.subtitle} style={{color: dark && "rgb(247,255,255)"}}>School projects</h2>
          <div className={classes.projectRow}>
            {schoolProjects.map((item, i) => (
              <Project key={i} project={item}/>
            ))}
          </div>
          <p className={classes.scroll} style={{color: dark && "rgb(247,255,255)"}}>Scroll<ArrowRightAltIcon/></p>
        </div>
        <Work/>
      </div>
    </div>
  );
}

export default Projects;
