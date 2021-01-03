import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import image from "../pinkmarble.jpg"
import sanityClient from "../client.js";

export default function Project(){

    const [projectData, setProject] = useState(null);

    useEffect(()=>{
        sanityClient
            .fetch(`*[_type == "project"]{
                title,
                id,
                slug,
                mainImage{
                    asset->{
                        _id,
                        url
                    },
                    alt
                }
            }`)
            .then((data)=> setProject(data))
            .catch(console.error);
    }, []);
    return (
        <main>
            <img src= {image} alt= "Designedbydivy" className="absolute object-cover w-full h-full"/>
            <section className= "container mx-auto">
                <h1 className= "text-5xl flex justify-center cursive"> Blog Post </h1>
                <h2 className = "text-lg text-gray-600 flex justify-center mb-12">Welcome to blogs!</h2>
                <div className= "grid md: grid-cols-2 lg:grid-cols-3 gap-8">
                   {projectData && projectData.map((project,index)=>(
                    <article>
                        <Link to= {"/project/" + project.slug.current} key={project.slug.current}>
                        <span className= "block h-64 relative rounded shadow leading-snug bg-white border-l -8 border-black"
                        key={index}>
                            <img
                                src= {project.mainImage.asset.url}
                                alt={project.mainImage.alt}
                                className= "w-full h-full rounded-r object-cover absolute"
                            />
                            <span className= "block relative h-full flex justify-end items-end pr-4 pb-4">
                                <h3 className = "text-white text-lg font-blog-bold px-5 py-1 bg-gray-900 text-black bg-opacity-75 rounded">

                                    {project.title}
                                    
                                </h3>
                            </span>
                        </span>
                        </Link>
                    </article>
    ))}
                </div>
            </section>
        </main>
    )
    }
    
    
    
    
    
    
