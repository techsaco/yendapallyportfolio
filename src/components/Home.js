import React from "react"
import image from "../updated.png"
import bgimagedark from "../darkthememarble.png"
import bg1 from "../1.png"
import bg2 from "../red1.png"
import bg3 from "../3.png"
import bg4 from "../red2.png"
import "../index.css"
import { createMuiTheme, makeStyles } from "@material-ui/core/styles";
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import { useState } from "react";
import { ThemeProvider } from "@emotion/react"
import IconButton from "@material-ui/core/IconButton";

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
            <br></br>
            <section className= "container mx-auto">
            <img src= {bg1} alt= "Designedbydivy" className="relative flex object-cover w-full h-full" />
            <br></br>
            <img src= {bg2} alt= "Designedbydivy" className="relative flex object-cover w-full h-full"/>
            <br></br>
            <img src= {bg3} alt= "Designedbydivy" className="relative flex object-cover w-full h-full"/>
            <br></br>
            <img src= {bg4} alt= "Designedbydivy" className="relative flex object-cover w-full h-full"/>
            
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