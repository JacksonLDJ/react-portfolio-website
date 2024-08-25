import React from "react";
import { useSearchParams } from "react-router-dom";
import { posts } from "../data/posts";
import { BlogBasic } from "../components/blog-templates/BlogBasic";
import { BlogRightAlign } from "../components/blog-templates/BlogRightAlign";
import { useNavigate } from "react-router-dom";

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

const BlogPost = (props) => {
  return (
    <div style={{ width: "1000px", margin: "0 auto", paddingTop: "50px" }}>
      <button className="btn" onClick={() => props.closePost()}>
        Back
      </button>
      <h1>{props.post.title}</h1>
      {/*Each post content*/}
      {props.post.content.map((content, index) => {
        switch (content.template) {
          case "align-right":
            return <BlogRightAlign content={content} index={index} />;
          default:
            return <BlogBasic content={content} index={index} />;
        }
      })}
    </div>
  );
};

const BlogHome = (props) => {
  const navigate = useNavigate();

  return (
    <div style={{ width: "500px", margin: "0 auto", paddingTop: "50px" }}>
      <button
        className="btn"
        style={{ background: "none" }}
        onClick={() => navigate("/")}
      >
        Back
      </button>
      <h1>Blog Posts</h1>
      {/*Each Post clicky thing*/}
      {posts.map((post, index) => (
        <div style={{ paddingBottom: "60px" }} key={index}>
          <h2>{post.title}</h2>
          <p>{post.content[0].content.slice(0, 50) + "..."}</p>
          <button
            className="btn"
            style={{ background: "none", margin: "0 auto" }}
            onClick={() => props.OpenPost(post.slug)}
          >
            Read More
          </button>
        </div>
      ))}
    </div>
  );
};