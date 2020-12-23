import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import image from "../pinkmarble.jpg"
import sanityClient from "../client.js";
import getYouTubeId from 'get-youtube-id'
import YouTube from 'react-youtube'
import PortableText from '@sanity/block-content-to-react'
export default function Post({blocks}){

 
    const [postData, setPost] = useState(null);
    const serializers = {
        types: {
          youtube: ({node}) => {
            const { url } = node
            const id = getYouTubeId(url)
            return (<YouTube videoId={id} />)
          
            
          }
        }
    }

    useEffect(()=>{
        sanityClient
            .fetch(`*[_type == "post"]{
                title,
                slug,
                mainImage{
                    asset->{
                        _id,
                        url
                    },
                    alt
                }
            }`)
            .then((data)=> setPost(data))
            .catch(console.error);
    }, []);
    return (
        <main>
            <img src= {image} alt= "Designedbydivy" className="absolute object-cover w-full h-full"/>
            <section className= "container mx-auto">
                <h1 className= "text-5xl flex justify-center cursive"> Blog Post </h1>
                <h2 className = "text-lg text-gray-600 flex justify-center mb-12">Welcome to blogs!</h2>
                <div className= "grid md: grid-cols-2 lg:grid-cols-3 gap-8">
                   {postData && postData.map((post,index)=>(
                    <article>
                        <Link to= {"/post/" + post.slug.current} key={post.slug.current}>
                        <span className= "block h-64 relative rounded shadow leading-snug bg-white border-l -8 border-green-400"
                        key={index}>
                            <img
                                src= {post.mainImage.asset.url}
                                alt={post.mainImage.alt}
                                className= "w-full h-full rounded-r object-cover absolute"
                            />
                            <span className= "block relative h-full flex justify-end items-end pr-4 pb-4">
                                <h3 className = "text-white text-lg font-blog-bold px-5 py-1 bg-gray-900 text-black bg-opacity-75 rounded">
                                    {post.title}
                                </h3>
                            </span>
                        </span>
                        </Link>
                        
                    </article>
    ))}
                </div>
            </section>
            <PortableText blocks={blocks} serializers={serializers} />
        </main>
        
    )
    }
    
    
    
    
    
    
