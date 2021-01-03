import React from "react"
import {NavLink} from "react-router-dom"
import {SocialIcon} from "react-social-icons"

export default function NavBar(){
    return (
        <header className= "bg-red-200">
            <div className= "container mx-auto flex justify-between">
                <nav >
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

                </nav>
                <div className= "inline-flex py-3 px-3 my-6">
                    <SocialIcon url = "https://www.linkedin.com/in/divya-y-78a3a293/" className="mr-4" target="_blank" fgColor="#fff" style={{height: 35, width:35}}></SocialIcon>
                    <SocialIcon url = "https://github.com/techsaco" className="mr-4" target="_blank" fgColor="#fff" style={{height: 35, width:35}}></SocialIcon>
                </div>
            </div>
        </header>
    )
}