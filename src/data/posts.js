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
        img: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*OohqW5DGh9CQS4hLY5FXzA.png",
        // This overrides class names with custom ones
        className: "blog-title-red",
        // Actual Content
        content:
          "Hello world! ",
      },
      {
        template: "align-right",
        title: "",
        className: "blog-text",
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
        template: "basic",
        title: "About the Project",
        content:
          "This is the introduction to my university work. In this section, I will provide an overview of the project and its objectives.",
      },
    ],
  },
];
