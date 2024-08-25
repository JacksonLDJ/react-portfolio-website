import React from "react";

export const BlogRightAlign = (props) => {
    return (
        <div key={props.index} style={{textAlign: "right"}}>
            <h2>{props.content.title}</h2>
            <p>{props.content.content}</p>
        </div>
    );
}