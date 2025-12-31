export const projectsData = [
  {
    id: "the-path-political-compass",
    title: "The P.A.T.H. - Political Alignment Testing Hub",
    category: "Full-Stack Web App",
    subTitle: "Civic Tech & Data Visualization",
    filterCategory: "full-stack",
    img: "/assets/images/projects/path-project.png",
    client: "Personal Project",
    date: "Dec 2025",
    duration: "Ongoing",
    github: "https://github.com/sarasithagalagama/The_P.A.T.H",
    preview: "", // Add live link here if available
    technologies: [
      "Next.js 16",
      "Tailwind CSS v4",
      "Chart.js",
      "next-intl",
      "Vercel OG",
      "Shadcn/UI",
    ],
    images: [
      "/assets/images/projects/the-path/home.png",
      "/assets/images/projects/the-path/quiz.png",
      "/assets/images/projects/the-path/result.png",
      "/assets/images/projects/the-path/leaders.png",
    ],
    socialLinks: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
    },
    // Custom sections for this project so headers aren't generic
    projectSections: [
      {
        title: "The Vision",
        content: [
          {
            type: "paragraph",
            text: "A production-ready, trilingual (English, Sinhala, Tamil) political compass web application for Sri Lanka. Built with Next.js 16, this app measures users on two axes (Economic: Left/Right, Social: Authoritarian/Liberal) and matches them to historical Sri Lankan politicians.",
          },
        ],
      },
      {
        title: "Key Features",
        content: [
          {
            type: "list",
            items: [
              "Trilingual Support: Full support for English, Sinhala, and Tamil",
              "20 Curated Questions: 10 economic and 10 social questions specific to Sri Lankan politics",
              "Interactive Quiz: Smooth slider-based interface for answering questions",
              "Political Compass Visualization: Beautiful scatter plot showing user position and historical politicians",
              "Dynamic Floating Hero: Immersive home page featuring floating historical figures with parallax-like organic motion",
              "Leadership Archive: Detailed profiles of historical and current leaders with localized biographies",
              "Civic Education Modules: Timeline of Turning Points, Fundamental Rights, and MythBusters",
              "Politician Matching: Algorithm to find the closest historical Sri Lankan politician to your ideology",
              "Unified Profile Card: Generate high-quality, downloadable profile cards combining your archetype and compass result",
              "Deep Dark/Gold Theme: Premium classy design with black backgrounds and gold accents",
              "Fully Client-Side: No database required, runs entirely in the browser for privacy",
            ],
          },
        ],
      },
      {
        title: "Tech Stack",
        content: [
          {
            type: "list",
            items: [
              "Framework: Next.js 16 (App Router)",
              "Language: JavaScript (ES6+)",
              "Styling: Tailwind CSS v4",
              "UI Components: Custom components with Shadcn/UI principles",
              "Charts: Chart.js with react-chartjs-2",
              "Internationalization: next-intl",
              "OG Images: Vercel OG",
            ],
          },
        ],
      },
      {
        title: "The Political Compass Axes",
        content: [
          {
            type: "paragraph",
            text: "The application uses a 2D coordinate system to map ideologies:",
          },
          {
            type: "list",
            items: [
              "Economic Axis (X): Left (-10) [State control, subsidies] ↔ Right (+10) [Free market, privatization]",
              "Social Axis (Y): Libertarian (-10) [Civil liberties, reform] ↔ Authoritarian (+10) [Centralization, traditional values]",
            ],
          },
        ],
      },
      {
        title: "Leadership Archive",
        content: [
          {
            type: "paragraph",
            text: "A digital museum of Sri Lanka's political history, featuring detailed profiles for:",
          },
          {
            type: "paragraph",
            text: "The Executive Presidency (1978–Present):",
          },
          {
            type: "list",
            items: [
              "J.R. Jayewardene, Ranasinghe Premadasa, D.B. Wijetunga",
              "Chandrika Bandaranaike, Mahinda Rajapaksa, Maithripala Sirisena",
              "Gotabaya Rajapaksa, Ranil Wickremesinghe, Anura Kumara Dissanayake",
            ],
          },
          {
            type: "paragraph",
            text: "The Parliamentary Era (1947–1978):",
          },
          {
            type: "list",
            items: [
              "D.S. Senanayake, Dudley Senanayake, Sir John Kotelawala",
              "S.W.R.D. Bandaranaike, W. Dahanayake, Sirimavo Bandaranaike",
            ],
          },
        ],
      },
    ],
  },
];
