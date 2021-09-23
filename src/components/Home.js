import React from "react"
import image from "../marblehomescreen.jpg"
import bg1 from "../1.png"
import bg2 from "../2.png"
import bg3 from "../3.png"
import bg4 from "../reducecognitiveload.png"
import "../index.css"

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"> </link>

export default function Home(){
    
    return (
        <main>
            <div className = "body">
            <img src= {image} alt= "Designedbydivy" className="relative flex object-cover w-full h-full"/>
            <br></br>
            <section className= "container mx-auto">
            <img src= {bg3} alt= "Designedbydivy" className="relative flex object-cover w-full h-full" />
            <br></br>
            <img src= {bg2} alt= "Designedbydivy" className="relative flex object-cover w-full h-full"/>
            <br></br>
            <img src= {bg1} alt= "Designedbydivy" className="relative flex object-cover w-full h-full"/>
            <br></br>
            <img src= {bg4} alt= "Designedbydivy" className="relative flex object-cover w-full h-full"/>
            
            </section>
            <section className = "relative flex justify-center ">
            
            </section>
            </div>
        </main>
    )
}