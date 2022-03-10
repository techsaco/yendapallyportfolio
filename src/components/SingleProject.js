import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import sanityClient from "../client.js";
import BlockContent from "@sanity/block-content-to-react";
import imageUrlBuilder from "@sanity/image-url";
import YouTube from "react-youtube";


const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

export default function SinleProject({blocks}) {
  const [projectData, setProjectData] = useState(null);
  const { slug } = useParams();
  

  useEffect(() => {
    sanityClient
      .fetch(
        `*[slug.current == "${slug}"]{
           title,
           title1,
           title2,
           tube,
           slug,
           mainImage{
           asset->{
              _id,
              url
            }
          },
          body,
          bodyPortableText,
          "name": author->name,
          "authorImage": author->image
       }`
      )
      .then((data) => setProjectData(data[0]))
      .catch(console.error);
  }, [slug]);


  if (!projectData) return <div>Loading...</div>;
  
  
  if (projectData.title == ("T.I.M.E. Trauma-Informed-Medicine-Education")) return (
    <div className="bg-gray-200 min-h-screen p-12">
      <div className="container shadow-lg mx-auto bg-green-100 rounded-lg">
        <div className="relative">
          <div className="absolute h-full w-full flex items-center justify-center p-8">
            {/* Title Section */}
            <div className="bg-white bg-opacity-75 rounded p-12">
              <h2 className="font-verdana text-3xl lg:text-2xl mb-4">
                {projectData.title}
              </h2>
              <div className="flex justify-center text-gray-800">
                <img
                  src={urlFor(projectData.authorImage).url()}
                  className="w-10 h-10 rounded-full"
                  alt="Author is Kap"
                />
                <h4 className="cursive flex items-center pl-2 text-2xl">
                  {projectData.name}
                 
                </h4>
              </div>
            </div>
          </div>
          <img
            className="w-full object-cover rounded-t"
            src={urlFor(projectData.mainImage).url()}
            alt=""
            style={{ height: "400px" }}
          />
        </div>
        <div className="px-16 lg:px-48 py-12 lg:py-20 prose lg:prose-xl max-w-full">
          {projectData.videoLink}
          
          
          <BlockContent
            blocks={projectData.body}
            projectId={sanityClient.clientConfig.projectId}
            dataset={sanityClient.clientConfig.dataset}
          />
        
             
        <YouTube videoId= {projectData.title1}> </YouTube>
          
          
          
          
          
        </div>
      </div>
    </div>
  )
  
  else if (projectData.title == ("Recover- Creating a more Sustainable Future")) return (
    <div className="bg-gray-200 min-h-screen p-12">
      <div className="container shadow-lg mx-auto bg-green-100 rounded-lg">
        <div className="relative">
          <div className="absolute h-full w-full flex items-center justify-center p-8">
            {/* Title Section */}
            <div className="bg-white bg-opacity-75 rounded p-12">
            <h2 className="font-verdana text-3xl lg:text-2xl mb-4">
                {projectData.title}
              </h2>
              <div className="flex justify-center text-gray-800">
                <img
                  src={urlFor(projectData.authorImage).url()}
                  className="w-10 h-10 rounded-full"
                  alt="Author is Kap"
                />
                <h4 className="cursive flex items-center pl-2 text-2xl">
                  {projectData.name}
                 
                </h4>
              </div>
            </div>
          </div>
          <img
            className="w-full object-cover rounded-t"
            src={urlFor(projectData.mainImage).url()}
            alt=""
            style={{ height: "400px" }}
          />
        </div>
        <div className="px-16 lg:px-48 py-12 lg:py-20 prose lg:prose-xl max-w-full">
          {projectData.videoLink}
          
          
          <BlockContent
            blocks={projectData.body}
            projectId={sanityClient.clientConfig.projectId}
            dataset={sanityClient.clientConfig.dataset}
          />
        
             
        <YouTube videoId= {projectData.title1}> </YouTube>
          
          
          
          
          
        </div>
      </div>
    </div>
  )
  
  else if (projectData.title == ("Terran Orbital")) return (
    <div className="bg-gray-200 min-h-screen p-12">
      <div className="container shadow-lg mx-auto bg-green-100 rounded-lg">
        <div className="relative">
          <div className="absolute h-full w-full flex items-center justify-center p-8">
            {/* Title Section */}
            <div className="bg-white bg-opacity-75 rounded p-12">
            <h2 className="font-verdana text-3xl lg:text-2xl mb-4">
                {projectData.title}
              </h2>
              <div className="flex justify-center text-gray-800">
                <img
                  src={urlFor(projectData.authorImage).url()}
                  className="w-10 h-10 rounded-full"
                  alt="Author is Kap"
                />
                <h4 className="cursive flex items-center pl-2 text-2xl">
                  {projectData.name}
                 
                </h4>
              </div>
            </div>
          </div>
          <img
            className="w-full object-cover rounded-t"
            src={urlFor(projectData.mainImage).url()}
            alt=""
            style={{ height: "400px" }}
          />
        </div>
        <div className="px-16 lg:px-48 py-12 lg:py-20 prose lg:prose-xl max-w-full">
          {projectData.videoLink}
          
          
          <BlockContent
            blocks={projectData.body}
            projectId={sanityClient.clientConfig.projectId}
            dataset={sanityClient.clientConfig.dataset}
          />
        
             
        <YouTube videoId= {projectData.title1}> </YouTube>
          
          
          
          
          
        </div>
      </div>
    </div>
  )
  else{
    return (
      <div className="bg-gray-200 min-h-screen p-12">
        <div className="container shadow-lg mx-auto bg-green-100 rounded-lg">
          <div className="relative">
            <div className="absolute h-full w-full flex items-center justify-center p-8">
              {/* Title Section */}
              <div className="bg-white bg-opacity-75 rounded p-12">
              <h2 className="font-verdana text-3xl lg:text-2xl mb-4">
                  
                  {projectData.title}
  
                </h2>
                <div className="flex justify-center text-gray-800">
                  <img
                    src={urlFor(projectData.authorImage).url()}
                    className="w-10 h-10 rounded-full"
                    alt="Author is Kap"
                  />
                  <h4 className="cursive flex items-center pl-2 text-2xl">
                    {projectData.name}
                   
                  </h4>
                </div>
              </div>
            </div>
            <img
              className="w-full object-cover rounded-t"
              src={urlFor(projectData.mainImage).url()}
              alt=""
              style={{ height: "400px" }}
            />
          </div>
          <div className="px-16 lg:px-48 py-12 lg:py-20 prose lg:prose-xl max-w-full">
            {projectData.videoLink}
            
            
            <BlockContent
              blocks={projectData.body}
              projectId={sanityClient.clientConfig.projectId}
              dataset={sanityClient.clientConfig.dataset}
            />
          </div>
        </div>
      </div>
    )
  }
 
}
