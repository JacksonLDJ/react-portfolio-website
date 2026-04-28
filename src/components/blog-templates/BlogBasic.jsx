import React from "react";
import { cn } from "../../utils/cn";
import ReactMarkdown from "react-markdown";

//If you want to create a new template copy all this code and add to a new file (named after the template)
//Rename the export const ... to the same name as file e.g. BlogRightAlign
//Go to the Blog.js file and find the switch statement and add a new option

export const BlogBasic = (props) => {
  return (
    <article
      key={props.index}
      className={cn(
        "blog-template-common",
        "blog-template-basic",
        props.content.className
      )}
    >
      {props.content.img && props.content.img !== "" && (
        <img className="blog-content-image" src={props.content.img} alt="" />
      )}

      {props.content.title && <h2>{props.content.title}</h2>}

      <div className="blog-content">
        <ReactMarkdown>{props.content.content}</ReactMarkdown>
      </div>
    </article>
  );
};
