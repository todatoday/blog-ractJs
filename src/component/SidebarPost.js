import React, { useState, useEffect } from 'react';
import SideBar from './SideBar';
import '../css/sidBarPost.css';
import PostData from '../data/blog.json';
import { NavLink } from 'react-router-dom';

function SidbarPost(props) {
    const [slugs, setPost] = useState([]);

    useEffect(() => {

        const slugs = PostData.data;
        setPost(slugs);

    }, slugs)


    return (

        <div>
            
            <div className="Last-post">



                <div className="lastpost">
                    <h2 className="text-center">Last Post</h2>

                    {slugs.map(post => {
                        return (
                            <NavLink key={post.id} to={`/post/${post.slug}`}>

                                <div className="postshow">

                                    <h3>{post.blogTitle}</h3>
                                    <span>posted on {post.postedOn} by {post.author} </span>
                                </div>
                            </NavLink>
                        )
                    })} 

                </div>
                {/* <h2 className="text-center ">Social media</h2>

                <div className="sidBarimg">
                    <img src="/../image/femmes-robe-longue-en-mousseline-de-soie-d-impress.jpg" alt="" />
                </div>
                <p >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate, a totam. Porro, non tenetur sapiente incidunt quis adipisci esse? Corporis dignissimos quam eaque dolore, corrupti voluptatem culpa illum excepturi, vel labore repudiandae laudantium. Dolores corrupti, doloremque obcaecati hic sint facilis velit, molestiae optio fuga ad sit? Voluptates sapiente fuga adipisci?</p> */}

            </div>
            {/* <SideBar /> */}
            {/* <div className="social-mediaa">
                <h2 className="text-center">Social Talk</h2>
            </div> */}
        </div>
    )
}
export default SidbarPost;