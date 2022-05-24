import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import sanityClient from "../client.js";
import BlockContent from "@sanity/block-content-to-react";
import imageUrlBuilder from "@sanity/image-url";
import YouTube from 'react-youtube';

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

export default function OnePost() {
  const [postData, setPostData] = useState(null);
  const { slug } = useParams();



  useEffect(() => {
    sanityClient
      .fetch(
        `*[slug.current == "${slug}"]{
           title,
           title1,
           slug,
           mainImage{
           asset->{
              _id,
              url
            }
          },
          body,
          video,
          "name": author->name,
          "authorImage": author->image
          
       }`
      )
      .then((data) => setPostData(data[0]))
      .catch(console.error);
  }, [slug]);

  if (!postData) return <div>Loading...</div>;

  
  if (postData.title == ("Accessibility Design towards the Mental Health Sector, specifically Post Traumatic Stress Disorder (PTSD)")) return (
    <div className="bg-gray-200 min-h-screen p-12">
      <div className="container shadow-lg mx-auto bg-white rounded-lg">
        <div className="relative">
          <div className="absolute h-full w-full items-center flex justify-center p-8">
            {/* Title Section */}
             
           
          </div>
          <img
            className="w-full object-cover rounded-t"
            src={urlFor(postData.mainImage).url()}
            alt=""
            style={{ height: "200px" }}
          />
         
        </div>
        <div className="px-16 lg:px-48 py-12 lg:py-20 prose lg:prose-xl max-w-full">
          <BlockContent
            blocks={postData.body}
            projectId={sanityClient.clientConfig.projectId}
            dataset={sanityClient.clientConfig.dataset}
           
          />
          
        
 
       
 
        

          

         <YouTube videoId= {postData.title1} className = "container mx-auto py-0 px-20"> </YouTube> 
 

         
        </div>
      </div>
      
    </div>
  );
  else{
    return (
      <div className="bg-gray-200 min-h-screen p-12">
        <div className="container shadow-lg mx-auto bg-gray-100 rounded-lg">
          <div className="relative">
            <div className="absolute h-full w-full flex items-center justify-center p-8">
              {/* Title Section */}
           
              
                <div className="flex justify-center text-gray-800">
  
  
                  
                
                  
                
              </div>
            </div>
            <img
              className="w-full object-cover rounded-t"
              src={urlFor(postData.mainImage).url()}
              alt=""
              style={{ height: "400px" }}
            />
           
          </div>
          <div className="px-16 lg:px-48 py-12 lg:py-20 prose lg:prose-xl max-w-full">
            <BlockContent
              blocks={postData.body}
              projectId={sanityClient.clientConfig.projectId}
              dataset={sanityClient.clientConfig.dataset}
             
            />         
          </div>
        </div>
        
      </div>
    )}
}