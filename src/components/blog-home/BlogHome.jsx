import React from "react";
import { cn } from '../../utils/cn';
import { posts } from '../../data/posts';
import { useNavigate } from "react-router-dom";
import { markdownPreview } from "../../utils/markdownPreview";
import "../../styles/Blog.css";


const BlogHome = () => {
    const navigate = useNavigate();

    const OpenPost = (slug) => {
        navigate(`/blog?post=${slug}`);
    }



    return ( 
      <section id="blog-home" className="container">
      <h1 className="blog-home-title">Penetration Testing Write-Ups & Projects</h1>
    
      <div className="blog-grid">
        {posts.slice(0, 4).map((post, index) => (
          <div className="blog-listing" key={index}>
            <h2>{post.title}</h2>
            <p>{markdownPreview(post.content[0].content, 80)}</p>
            <button
              className={cn("btn", "blog-btn")}
              onClick={() => OpenPost(post.slug)}
            >
              Read More
            </button>
          </div>
        ))}
      </div>
    </section>    
    );
}

export default BlogHome;
