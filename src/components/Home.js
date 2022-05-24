import React from "react"
import image from "../Albert Einstein.png"
import bgimagedark from "../darkthememarble.png"
import bg1 from "../1.png"
import bg2 from "../red1.png"
import bg3 from "../3.png"
import bg4 from "../red2.png"
import bg5 from "../items.png"
import bg6 from "../uic.png"
import icons from "../icon.png"
import "../index.css"
import { createMuiTheme, makeStyles } from "@material-ui/core/styles";
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import { useState } from "react";
import { ThemeProvider } from "@emotion/react"
import IconButton from "@material-ui/core/IconButton";
import Project from "./Project"
import Post from "./Post"
import About from "./About"

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"> </link>
const useStyles = makeStyles(theme => ({
    root: {
      marginBottom: theme.spacing(2),
      flexGrow: 1
    },
    title: {
      flexGrow: 1
    }
  }));

export default function Home(){

  const [theme, setTheme] = useState(true);
  const classes = useStyles();
  const icon = !theme ? <Brightness7Icon /> : <Brightness4Icon />;
  const hiimage = !theme ? bgimagedark : image;
  

    return (
       
        <main>
        
            <div className = "body">
            <img src= {hiimage} alt= "Designedbydivy" className="relative flex object-cover w-full h-full"/>
            <div class="divider"><span></span><span>
            <h4 class="wordCarousel">
    <h3>Hi, I am  </h3>
    <div>
       
        <ul class="flip3">
            <li>Developer</li>
            <li>Designer</li>
            <li>Divya</li>
        </ul>
    </div>
</h4>
              </span><span></span></div>
            
            <img src= {icons} alt= "Designedbydivy" className="relative flex object-cover w-full h-full" />
           <div>
           <div class="divider"><span></span><span>UX Research</span><span></span></div>
           
          
            <Post/>

            <div class="divider"><span></span><span>UI UX Design </span><span></span></div>
           

            <Project/>
            <div class="divider"><span></span><span>About Me </span><span></span></div>
            <About/>
            </div>
            <section className= "container mx-auto">
           

            </section>
            <section className = "relative flex justify-center ">
            
            </section>
            </div>
        </main>
       
    )
}

export const light = {
  
    palette: {
      primary: {
        // light: will be calculated from palette.primary.main,
        main: '#ff4400',
        // dark: will be calculated from palette.primary.main,
        // contrastText: will be calculated to contrast with palette.primary.main
      },
      secondary: {
        light: '#0066ff',
        main: '#0044ff',
        // dark: will be calculated from palette.secondary.main,
        contrastText: '#ffcc00',
      },
      // Used by `getContrastText()` to maximize the contrast between
      // the background and the text.
      contrastThreshold: 3,
      // Used by the functions below to shift a color's luminance by approximately
      // two indexes within its tonal palette.
      // E.g., shift from Red 500 to Red 300 or Red 700.
      tonalOffset: 0.2,
    },
};
export const dark = {
  palette: {
    type: "dark"
  }
};