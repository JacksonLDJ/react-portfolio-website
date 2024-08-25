// TEMPLATES
// basic, align-right

export const posts = [
  {
    title: "My University Work",
    slug: "university",
    // This is a list of content objects
    content: [
      // Example of a content object
      {
        // This choose the template component
        template: "basic",
        // Title can be empty
        title: "Introduction",
        // Img url can be empty
        img: "https://cdn.britannica.com/02/152302-050-1A984FCB/African-savanna-elephant.jpg",
        // This overrides class names with custom ones
        className: "blog-title-red",
        // Actual Content
        content:
          "Hello world! ",
      },
      {
        template: "align-right",
        title: "",
        className: "blog-title-red",
        content:
          "This is officially the first blog post on the website! The blog posts will be used to document my journey through university, the things that I learn and the project that I complete. This website being one of them!",
      },
    ],
  },
  {
    title: "Probnet",
    slug: "probnet",
    content: [
      {
        template: "basic",
        title: "Introduction",
        content:
          "This is the introduction to my university work. In this section, I will provide an overview of the project and its objectives.",
      },
      {
        template: "align-right",
        title: "About the Project",
        content:
          "This is the introduction to my university work. In this section, I will provide an overview of the project and its objectives.",
      },
    ],
  },
];
