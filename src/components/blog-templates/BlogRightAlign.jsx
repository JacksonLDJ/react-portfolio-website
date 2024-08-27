import React from "react";
import { cn } from "../../utils/cn"
import ReactMarkdown from "react-markdown";

export const BlogRightAlign = (props) => {
    return (
        <div key={props.index} className={cn("blog-template-common", "blog-template-right-align", props.content.className)}>
            <h2 className="blog-text">{props.content.title}</h2>
            <p><ReactMarkdown>{props.content.content}</ReactMarkdown></p>
        </div>
    );
}