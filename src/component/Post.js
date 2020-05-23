import React, { useState, useEffect } from 'react';
import SidebarPost from './SidebarPost';

import '../css/post.css';
import PostData from '../data/blog.json';

function Post(props) {

    const [post, setPost] = useState({

        id: "",
        blogCategory: "",
        blogTitle: "",
        slug: "",
        postedOn: "",
        author: "",
        blogImage: "",
        blogText: "",
    });
    const [slug, setSlug] = useState("");

    useEffect(() => {
        const slug = props.match.params.slug;
        const post = PostData.data.find(post => post.slug == slug);
        setPost(post);
        setSlug(slug);

    }, [post, props.match.params.slug])

    return (
        <div>

 
           

            <section className="contenu">
                <div>

                <SidebarPost/>
                </div>
                
                <div className="blogPost">
                    <h3 className="text-center">{post.blogCategory}</h3>
                    <h1 className="text-center">{post.blogTitle}</h1>
                    <h2 className="text-center">posted on {post.postedOn} by {post.author} </h2>


                    <div className="postImageContainer">
                        <img src={post.blogImage} alt="" className="postImage" />
                    </div>

                    <h3 className="text-center">{post.blogTitle}</h3>

                    <p>{post.blogText}</p>

                </div>

            </section>






        </div>
    )

}

export default Post;
