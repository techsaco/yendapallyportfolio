import React, {useEffect, useState} from "react";
import sanityClient from "../client.js";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";
import "../App.css";
import "../index.css";
import image from "../pinkmarble.jpg"
import resume from "../Yendapally_Divya_Resume.pdf"



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

        

        <div className="bg-gray-200 min-h-screen p-12">
        <div className="container shadow-lg mx-auto bg-red-100 rounded-lg">
          <div className="relative">
            <div className="absolute h-full w-full flex items-center justify-center p-8">
              {/* Title Section */}
              <div className="rounded ">
              <h9 className="fancy text-6xl text-black mb-4 text-right">
                  
                  Hi! I'm Divya
  
                </h9>
                
                <div className="flex justify-center text-gray-800">
                  <img
                    src={urlFor(author.authorImage).url()}
                    className="w-45 h-45"
                    style={{ height: "250px" }}
                    alt="Author is Kap"
                  />

                </div>
              </div>
            </div>
            <img
              className="w-full object-cover rounded-t"
              src={image}
              alt=""
              style={{ height: "200px" }}
            />
          </div>
          <div className="px-16 lg:px-48 py-12 lg:py-20 prose lg:prose-xl max-w-full">
            
            <BlockContent
              blocks={author.bio} 
              projectId={sanityClient.clientConfig.projectId}
              dataset={sanityClient.clientConfig.dataset}
            />
          </div>
        </div>
      </div>
    );
}