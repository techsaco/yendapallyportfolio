import React from "react"
import {NavLink} from "react-router-dom"
import {SocialIcon} from "react-social-icons"
import { Route, Switch } from 'react-router-dom';
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"> </link>


export default function NavBar(){
    return (
        
     <header className= "bg-red-200">
            <div class= "relative container mx-auto flex justify-between">
                <nav className = "relative flex flex-wrap items-center justify-between px-1 py-2 navbar-expand-lg mb-3" >
                    <NavLink to= "/" 
                    exact 
                    activeClassName= "text-white-100"
                    className= "inline-flex items-center py-6 px-3 mr-4 text-gray-800 hover:text-white text-4xl font-Verdana tracking-widest"
                    > 
                     &#60;DIV&#62;
                    </NavLink>
                   
                    <NavLink to= "/project"
                    className= "inline-flex items-center py-3 px-3 my-6 rounded text-gray-800 hover:text-white "
                    activeClassName= "bg-red-300 text-white">
                        UI UX Projects
                    </NavLink>
                    
                    <NavLink to ="/post"
                    className= "inline-flex items-center py-3 px-3 my-6 rounded text-gray-800 hover:text-white"
                    activeClassName= "bg-red-300 text-white">
                        HCI Research
                    </NavLink>
                   
                    <NavLink to= "/about"
                    className= "inline-flex items-center py-3 px-3 my-6 rounded text-gray-800 hover:text-white"
                    activeClassName= "bg-red-300 text-white">
                        About Me
                    </NavLink>

                    <NavLink to= "/resume"
                    className= "inline-flex items-center py-3 px-3 my-6 rounded text-gray-800 hover:text-white"
                    activeClassName= "bg-red-300 text-white">
                        Resume
                    </NavLink>

                </nav>
                <div className= "inline-flex py-3 px-3 my-6">
                    <SocialIcon url = "https://www.linkedin.com/in/divya-y-78a3a293/" className="mr-4" target="_blank" fgColor="#fff" style={{height: 35, width:35}}></SocialIcon>
                    <SocialIcon url = "https://github.com/techsaco" className="mr-4" target="_blank" fgColor="#fff" style={{height: 35, width:35}}></SocialIcon>
                </div>
            </div>
        </header>

                   
  
    )
}
