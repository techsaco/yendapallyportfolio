import React, {useEffect, useState} from "react";
import "../App.css";
import "../index.css"
import resume from "../Yendapally_Divya_Resume.pdf"
import resumeImage from "../resumeimage.jpg"
export default function Resume(){
    
    
    
    return (
        
        <main>
             <h2 className = "font-Segoe UI text-1xl text-blue-600 mb-4">
             <p>  <a href={resume}> DOWNLOAD MY RESUME </a></p>
                        </h2>
            <img src= {resumeImage} width= "800" height = "121" class= "center border"/>
                        
                    
        </main>
    );
}