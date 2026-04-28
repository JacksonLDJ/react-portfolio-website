import React from "react";
import { cn } from "../../utils/cn";
import ReactMarkdown from "react-markdown";

export const BlogRightAlign = (props) => {
  return (
    <article
      key={props.index}
      className={cn(
        "blog-template-common",
        "blog-template-right-align",
        props.content.className
      )}
    >
      {props.content.title && <h2>{props.content.title}</h2>}

      <div className="blog-content">
        <ReactMarkdown>{props.content.content}</ReactMarkdown>
      </div>
    </article>
  );
};
