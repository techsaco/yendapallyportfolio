import {BrowserRouter, Route, Switch} from "react-router-dom"
import Home from "./components/Home";
import About from "./components/About";
import SinglePost from "./components/SinglePost";
import Post from "./components/Post";
import Project from "./components/Project";
import SingleProject from "./components/SingleProject";
import NavBar from "./components/NavBar";
import Resume from "./components/Resume"



function App() {
  return(
  <BrowserRouter>
  <NavBar />
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
  );
  
}

export default App;
