import React from "react";
import { useSearchParams } from "react-router-dom";
import { posts } from "../data/posts";
import { BlogBasic } from "../components/blog-templates/BlogBasic";
import { BlogRightAlign } from "../components/blog-templates/BlogRightAlign";
import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { cn } from "../utils/cn"
import { markdownPreview } from "../utils/markdownPreview";
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
    <div className="blog-page">
      <BlogMasthead />

      <article className="blog-post">
        <div className="blog-post__header">
          <button
            className="blog-post__back-link"
            onClick={() => props.closePost()}
            type="button"
          >
            <BiArrowBack />
            <span>All blog posts</span>
          </button>
          <h1>{props.post.title}</h1>
        </div>

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
      </article>
    </div>
  );
};

// Home Page Component
const BlogHome = (props) => {
  return (
    <div className="blog-page">
      <BlogMasthead />

      <div className="blog-home">
        <div className="blog-grid">
          {posts.map((post, index) => (
            <div className="blog-listing" key={index}>
              <h2>{post.title}</h2>
              <p>{markdownPreview(post.content[0].content, 80)}</p>
              <button
                className={cn("btn", "blog-btn")}
                onClick={() => props.OpenPost(post.slug)}
              >
                Read More
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const BlogMasthead = () => {
  return (
    <header className="blog-masthead">
      <div className="blog-masthead__socials">
        <a
          href="https://www.linkedin.com/in/liam-jackson-29717a294/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/JacksonLDJ"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
      </div>

      <div className="blog-masthead__content">
        <Link to="/" className="blog-masthead__home-link">
          <h1>Liam Jackson</h1>
        </Link>
        <h5>Junior Security Consultant and Penetration Tester</h5>
      </div>

      <div className="section-divider"></div>
    </header>
  );
};
