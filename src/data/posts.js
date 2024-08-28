// TEMPLATES
// basic, align-right

export const posts = [
  {
    title: "The first Blog Post!",
    slug: "university",
    // This is a list of content objects
    content: [
      // Example of a content object
      {
        // This choose the template component
        template: "basic",
        // Title can be empty
        title: "My first blog post!",
        // Img url can be empty
        img: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*OohqW5DGh9CQS4hLY5FXzA.png",
        // This overrides class names with custom ones
        className: "",
        // Actual Content
        content:
          "Hello World!"
      },
      {
        template: "align-right",
        title: "",
        className: "blog-text",
        content:
          "**Hello** and welcome to my very first blog post on my new ReactJS website/app! This is the first application I've built using ReactJS and is a work in progress! I’m using this website to document my final year of studying at the University of Bolton where I hope to attain a First Class Honours Degree in my Cybersecurity Degree Apprenticeship.\n\nI’ll be using this blog section to discuss new security theories and topics I’ve discovered and use it as a means to documents my progress in my Synoptic Project (dissertation) where I plan to conduct a full security audit and analysis of my current employers security. I’ll also be writing about my studies into Cisco’s CyberOps and COMP TIA’s Sec+’s qualifications I plan on completing before I finish my degree!\n\nThanks for checking my first blog out, please take a look at the other blog posts I’ve put up and feel free to email me should you have any questions! Thanks!",
      },
    ],
  },
  {
    title: "University so far",
    slug: "university-so-far",
    content: [
      {
        template: "basic",
        title: "",
        content:
          "My Final Year at University",
      },
      {
        template: "basic",
        title: "",
        content:
          "I'm currently in my final year of Unviersity and I'm working on my Synoptic Project which is essentially my dissertation! So far, these are the topics I've covered: \n\n• Security Fundamentals \n\n• Secure Systems \n\n• Programming for CyberSecurity \n\n• Programming and Scripting \n\n• Networks and Security \n\n• Business Software Developing \n\n\• Ethical Hacking and Digital Forensics \n\n "
      },
    ],
  },
  {
    title: "Digital Forensics and Ethical Hacking",
    slug: "digital-forensics-ehtical-hacking",
    content: [
      {
        template: "basic",
        title: "",
        content:
          "Digital Forensics and Ethical Hacking - Module Overview",
      },
      {
        template: "basic",
        title: "",
        content:
          "Digital Forensics and Ethical Hacking was my latest module where we covered importance of preserving data for digital forensics purposes and the process of ethically hacking a system where-in we attacked a vulnerable host using the Metasploit Framework tool in Kali. In addition to this there was an examination which covered the followig topics: \n\n\• CIA and DAD Triads and how the other topics we had been studying could impact both. \n\n • Security and Risk Management - ISO 27002:2013,ISO 27002:2022 as well as Quantatative Risk Management. \n\n\ •  Information Management Security Systems - ISO 27001, ITIL & COBIT \n\n • Software Fuzzing - using SPIKE \n\n\ • Understanding different types of attacks such as TCP Syn Flood Attacks and ways to mitigate the risk. \n\n\ Overall, this was an incredibly interesting module, it not reinforced the fundamentals of Cybersecurity but also taught me how to exploit tools such as the Metasploit Framework but how to perform the attacks manually myself. I was also able to look into IDS and IPS' and implement Fail2Ban on a Ubuntu virtual machine and block IP addresses that were attempting to brute force the SSH Service"
      },
    ],
  },
];
