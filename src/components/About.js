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
                body,
                "authorImage": image.asset -> url
                }`) .then((data) => setAuthor(data[0]))
                    .catch(console.error);
    },[]);
    
    if (!author) return <div> loading.. </div>

    
    
    
    
    return (

        

        <div className="bg-white min-h-screen p-12">
        <div className="container shadow-lg mx-auto bg-white rounded-lg">
          <div className="relative">
            <div className="relative h-full w-full flex items-center justify-center p-8">
              {/* Title Section */}
              <div className="rounded ">
              <h9 className="fancy sm:text-2 lg:text-6l text-black mb-4 align-text-center">
                  
                Welcome!
  
                </h9>
                
                <div className="flex justify-center text-gray-800">
                  <img
                    src={urlFor(author.authorImage).url()}
                    className="w-45 h-45"
                    style={{ height: "200px" }}
                    alt="Author is Kap"
                  />

                </div>
           
           
              </div>
            </div>
           

            <div className="heading-0 px-16 lg:px-48 py-1 lg:py-1 prose lg:prose-xl max-w-full">
            
            <BlockContent
              blocks={author.body}
              projectId={sanityClient.clientConfig.projectId}
              dataset={sanityClient.clientConfig.dataset}
            />
          </div>

          </div>
 
        </div>
      </div>
    );
}