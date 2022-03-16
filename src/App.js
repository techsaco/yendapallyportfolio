import {BrowserRouter, Route, Switch} from "react-router-dom"
import Home from "./components/Home";
import About from "./components/About";
import SinglePost from "./components/SinglePost";
import Post from "./components/Post";
import Project from "./components/Project";
import SingleProject from "./components/SingleProject";
import NavBar from "./components/NavBar";
import Resume from "./components/Resume"
import { useState } from "react";
import { ThemeProvider } from "@material-ui/core";
import { createMuiTheme, makeStyles } from "@material-ui/core/styles";
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles(theme => ({
  root: {
    marginBottom: theme.spacing(2),
    flexGrow: 1
  },
  title: {
    flexGrow: 1
  }
}));


  

function App() {
  const [theme, setTheme] = useState(true);
  const classes = useStyles();
  const icon = !theme ? <Brightness7Icon /> : <Brightness4Icon />;
  
  const appliedTheme = createMuiTheme(theme ? light : dark);
  return(

  <ThemeProvider theme={appliedTheme}>
   
  <BrowserRouter>
 
  <NavBar/>
  
  
    <Switch>
      <Route component = {Home} path = '/' exact/>
      <Route component = {About} path = '/about' />
      <Route component = {SinglePost} path = '/post/:slug' />
      <Route component = {Post} path = '/post' />
      <Route component = {SingleProject} path = '/project/:slug' />
      <Route component = {Project} path = '/project' />
      <Route component = {Resume} path = '/resume' />
    </Switch>
  </BrowserRouter>
  </ThemeProvider>
  );
  
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

export default App;
