import React from "react"
import image from "../marblehomescreen.jpg"
import pink from "../pinkmarble.jpg"

export default function Home(){
    
    return (
        <main>
            <img src= {image} alt= "Designedbydivy" className="relative flex object-cover w-full h-full"/>
            <img src= {pink} className = "responsive"/>
            <section className = "relative flex justify-center ">
            
            </section>
            
        </main>
    )
}
