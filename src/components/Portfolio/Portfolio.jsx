import React from 'react'
import './Portfolio.css'
import { cn } from '../../utils/cn';
import { posts } from '../../data/posts';

const Portfolio = (props) => {

  return (
    <div className="portfolio">
      <h1>Blog Posts</h1>
      {/*Each Post clicky thing*/}
      {posts.map((post, index) => (
        <div className="blog-listing" key={index}>
          <h2>{post.title}</h2>
          <p>{post.content[0].content.slice(0, 50) + "..."}</p>
          <button
            className={cn("btn", "blog-btn")}
            onClick={() => props.OpenPost(post.slug)}
          >
            Read More
          </button>
        </div>
      ))}
    </div>
  );
};

export default Portfolio