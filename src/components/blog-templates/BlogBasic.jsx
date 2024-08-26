import React from "react";
import { cn } from "../../utils/cn"

//If you want to create a new template copy all this code and add to a new file (named after the template)
//Rename the export const ... to the same name as file e.g. BlogRightAlign
//Go to the Blog.js file and find the switch statement and add a new option

export const BlogBasic = (props) => {
    return (
        // the classname ordering is take the common css, then the template css and finally any overrides set in the posts.js file
        <div key={props.index} className={cn("blog-template-common", "blog-template-basic", props.content.className)}>
            {/* This is an example of conditional rendering, the html is only rendered if an img field is provided */}
            {props.content.img && props.content.img !== "" && 
                <img src={props.content.img} alt="" />
            }
            <h2>{props.content.title}</h2>
            <p className="blog-content">{props.content.content}</p>
        </div>
    );
}