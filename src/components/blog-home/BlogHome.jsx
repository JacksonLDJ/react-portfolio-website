import React from "react";
import { cn } from '../../utils/cn';
import { posts } from '../../data/posts';
import { useNavigate } from "react-router-dom";
import "../../styles/Blog.css";


const BlogHome = () => {
    const navigate = useNavigate();

    const OpenPost = (slug) => {
        navigate(`/blog?post=${slug}`);
    }



    return ( 
    <section id="blog-home" className="container">
        <h1 className="blog-home-title">Recent Blogs</h1>

        {posts.slice(0,3).map((post, index) => (
        <div className="blog-listing" key={index}>
          <h2>{post.title}</h2>
          <p>{post.content[0].content.slice(0, 50) + "..."}</p>
          <button
            className={cn("btn", "blog-btn")}
            onClick={() => OpenPost(post.slug)}
          >
            Read More
          </button>
        </div>
      ))}

    </section>
    );
}

export default BlogHome;