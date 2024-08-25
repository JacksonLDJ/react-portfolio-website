import React from "react";

export const BlogBasic = (props) => {
    return (
        <div key={props.index} className={props.content.className}>
            <h2>{props.content.title}</h2>
            <p>{props.content.content}</p>
        </div>
    );
}