import React, { Component } from "react"
import {NavLink} from "react-router-dom"
import {SocialIcon} from "react-social-icons"
import '../index.css';
import '../OnClick.js';
import { render } from "react-dom";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"> </link>

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
        <header className= "bg-red-800">

        
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
                    className= "inline-flex items-center py-3 px-3 my-6 rounded text-gray-100 hover:text-white "
                    activeClassName= "bg-black text-white">
                        UI UX Projects
                    </NavLink>
                    
                    <NavLink to ="/post"
                    className= "inline-flex items-center py-3 px-3 my-6 rounded text-gray-100 hover:text-white"
                    activeClassName= "bg-black text-white">
                        HCI Research
                    </NavLink>
                   
                    <NavLink to= "/about"
                    className= "inline-flex items-center py-3 px-3 my-6 rounded text-gray-100 hover:text-white"
                    activeClassName= "bg-black text-white">
                        About Me
                    </NavLink>

                    <NavLink to= "/resume"
                    className= "inline-flex items-center py-3 px-3 my-6 rounded text-gray-100 hover:text-white"
                    activeClassName= "bg-black text-white">
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