import React from "react";
import { cn } from "../../utils/cn"

export const BlogRightAlign = (props) => {
    return (
        <div key={props.index} className={cn("blog-template-common", "blog-template-right-align", props.content.className)}>
            <h2 className="blog-text">{props.content.title}</h2>
            <p>{props.content.content}</p>
        </div>
    );
}