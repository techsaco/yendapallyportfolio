import React, { Component } from "react"
import {NavLink} from "react-router-dom"
import {SocialIcon} from "react-social-icons"
import '../index.css';
import '../OnClick.js';
import { render } from "react-dom";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
<link href='https://fonts.googleapis.com/css?family=Lustria' rel='stylesheet'></link>
class NavBar extends Component {
container = React.createRef();
state = {
    open: false,
};

handleButtonClick = () => {
    this.setState((state) => {
        return {
            open: !this.state.open,
        };
    });
};

componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
}
componentWillUnmount() {
  document.removeEventListener("mousedown", this.handleClickOutside);
}

handleClickOutside = (event) => {
    if (
      this.container.current &&
      !this.container.current.contains(event.target)
    ) {
      this.setState({
        open: false,
      });
    }
  };


    render(){

    
    return (
        <header className= "bg-red-800" height= "100" >

        
            <div class="md:hidden flex items-center">
            <div className = "container" ref={this.container}>
	        <button class="outline-none mobile-menu-button" onClick = {this.handleButtonClick}>
                    <svg
                        class="w-12 h- text-white-500"
                        x-show="!showMenu"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                    <path d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
	        
                  
                    </button>
            {this.state.open && ( 
            <div class = "dropdown">
            <ul>

                
                <a  href = "/project">UI UX Projects<br></br></a> 
                
                <a  href = "/post">HCI Research<br></br></a>

                <a  href = "/about">About <br></br></a>

                <a  href = "/resume"> Resume <br></br></a>

               

                   
            
               
            </ul>
            </div>


            )}
            </div>
            <NavLink to= "/" 
exact 
activeClassName= "text-white-100"
className= "inline-flex items-center py-6 px-3 mr-4 text-gray-100 hover:text-white text-4xl font-Verdana tracking-widest"
> 
 &#60;DIV&#62;
</NavLink>
            </div>

            <div class= "relative container mx-auto flex justify-between ">
                <nav className = " hidden md:block relative flex flex-wrap items-center justify-between px-1 py-2 navbar-expand-lg mb-3" >
                    <NavLink to= "/" 
                    exact 
                    activeClassName= "text-white-100"
                    className= "inline-flex items-center py-6 px-3 mr-4 text-gray-100 hover:text-white text-4xl font-Verdana tracking-widest"
                    > 
                     &#60;DIV&#62;
                    </NavLink>
                   
                    <NavLink to= "/project"
                    className= "inline-flex items-center py-3 px-3 my-6 rounded text-gray-100 hover:text-gray-900 "
                    activeClassName= "bg-red-800 text-gray-900">
                        UI UX Projects
                    </NavLink>
                    
                    <NavLink to ="/post"
                    className= "inline-flex items-center py-3 px-3 my-6 rounded text-gray-100 hover:text-gray-900"
                    activeClassName= "bg-red-800 text-gray-900">
                        HCI Research
                    </NavLink>
                   
                    <NavLink to= "/about"
                    className= "inline-flex items-center py-3 px-3 my-6 rounded text-gray-100 hover:text-gray-900"
                    activeClassName= "bg-red-800 text-gray-900">
                        About Me
                    </NavLink>

                    <NavLink to= "/resume"
                    className= "inline-flex items-center py-3 px-3 my-6 rounded text-gray-100 hover:text-gray-900"
                    activeClassName= "bg-red-800 text-gray-900">
                        Resume
                    </NavLink>

                </nav>
                <div className= "hidden md:block inline-flex py-3 px-3 my-6">
                    <SocialIcon url = "https://www.linkedin.com/in/divya-y-78a3a293/" className="mr-4" target="_blank" fgColor="#fff" bgColor ="#000000" style={{height: 35, width:35}}></SocialIcon>
                    <SocialIcon url = "https://github.com/techsaco" className="mr-4" target="_blank" fgColor="#fff" bgColor= "#000000" style={{height: 35, width:35}}></SocialIcon>
                </div>


                

                
            </div>
            
        </header>
    )
            }
}

export default NavBar;