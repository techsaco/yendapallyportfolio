import React from "react"
import {NavLink} from "react-router-dom"
import {SocialIcon} from "react-social-icons"
import { Route, Switch } from 'react-router-dom';
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"> </link>


export default function NavBar(){
    return (
        
    <header className= "bg-red-200">
            <div class= "relative container mx-auto flex justify-between">
        
        <Navbar collapseOnSelect fixed= 'top' expand='sm' bg='dark' variant = 'dark'>
            <Container>
                <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                <Navbar.Collapse id= 'responsive-navbar-nav'>
                    <Nav>
                        <Nav.Link href = '/'> Home </Nav.Link>
                        <Nav.Link href = '/project'> Project </Nav.Link>
                        <Nav.Link href = '/post'> Post </Nav.Link>
                        <Nav.Link href = '/about'> About </Nav.Link>
                        <Nav.Link href = '/resume'> Resume </Nav.Link>
                   </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        
        <div className= "inline-flex py-3 px-3 my-6">
                    <SocialIcon url = "https://www.linkedin.com/in/divya-y-78a3a293/" className="mr-4" target="_blank" fgColor="#fff" style={{height: 35, width:35}}></SocialIcon>
                    <SocialIcon url = "https://github.com/techsaco" className="mr-4" target="_blank" fgColor="#fff" style={{height: 35, width:35}}></SocialIcon>
                </div>
            </div>
        </header>
                   
  
    )
}
