import React from "react";
import { useSearchParams } from "react-router-dom";
import { posts } from "../data/posts";
import { BlogBasic } from "../components/blog-templates/BlogBasic";
import { BlogRightAlign } from "../components/blog-templates/BlogRightAlign";
import { useNavigate } from "react-router-dom";
import { cn } from "../utils/cn"
import "../styles/Blog.css";

export const Blog = () => {
  // VARIABLES
  const [searchParams, setSearchParams] = useSearchParams();
  const post = posts.find((post) => post.slug === searchParams.get("post"));

  // FUNCTIONS
  const OpenPost = (slug) => {
    setSearchParams({ post: slug });
  };

  const ClosePost = () => {
    setSearchParams({});
  };

  if (!post) {
    return <BlogHome OpenPost={OpenPost} />;
  }
  return <BlogPost post={post} closePost={ClosePost} />;
};

// Post Page Component
const BlogPost = (props) => {
  return (
    <div className="blog-post">
      <button className={cn("btn", "blog-btn")} onClick={() => props.closePost()}>
        Back
      </button>
      <h1>{props.post.title}</h1>
      {/*Each post content - .map is a for loop where it looks like () => and the brackets are the args and everything after => is what is rendered*/}
      {props.post.content.map((content, index) => {
        // switch statement will render the correct template depending on what is set in the the post.js file for each content object
        switch (content.template) {
          case "align-right":
            return <BlogRightAlign content={content} index={index} />;
          // To add a new option add: 
          // case "{nameoftemplate}":
          //   return <ComponentYouWantToUse content={content} index={index} />
          // Make sure you import the component you want
          default:
            return <BlogBasic content={content} index={index} />;
        }
      })}
    </div>
  );
};

// Home Page Component
const BlogHome = (props) => {
  const navigate = useNavigate();

  return (
    <div className="blog-home">
      <button
        className={cn("btn", "blog-home-btn")}
        onClick={() => navigate("/")}
      >
        Back To Main Website
      </button>
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