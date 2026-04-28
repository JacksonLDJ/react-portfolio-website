import React from "react";

export const markdownComponents = {
  img: ({ src, alt, title }) => {
    const image = <img src={src} alt={alt || ""} title={title} />;

    if (!title) {
      return image;
    }

    return (
      <figure className="blog-figure">
        {image}
        <figcaption>{title}</figcaption>
      </figure>
    );
  },
};
