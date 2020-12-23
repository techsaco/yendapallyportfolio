import React, {useEffect, useState} from "react";
import sanityClient from "../client.js";
import image from "../pinkmarble.jpg";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";
import "../App.css";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source){
    return builder.image(source);
}


export default function About(){
    
    const [author, setAuthor] = useState(null);

    useEffect(() => {
        sanityClient
            .fetch(
                `*[_type == "author"]{
                name,
                bio,
                "authorImage": image.asset -> url
                }`) .then((data) => setAuthor(data[0]))
                    .catch(console.error);
    },[]);
    
    if (!author) return <div> loading.. </div>

    
    
    
    
    return (
        <main className= "relative">
             
            <div classname= "p-10 lg:pt-48 container mx-auto relative">
              
                <section className = "bg_image lg:flex p-40 absolute object-cover w-full h-full ">
               
                    <img src = {urlFor(author.authorImage).url()} className= "w-32 h-32 lg:w-64 lg:h-64 mr-8 border" alt={author.name}/>
                    <div className = "text-lg flex flex-col justify-center">
                        <h1 className = "cursive text-6xl text-gray-600 mb-4">
                            Hey there. I'm {" "}
                            <span className= "text-black">{author.name}</span>
                        </h1>
                        <div className= "prose lg:prose-xl text-black">
                            <BlockContent blocks = {author.bio} projectId= "m7y80hkd" dataset= "production"/>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}