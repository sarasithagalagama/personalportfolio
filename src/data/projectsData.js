export const projectsData = [
  {
    id: "the-path-political-compass",
    title: "The P.A.T.H. - Political Alignment Testing Hub",
    category: "Full-Stack Web App",
    subTitle: "Civic Tech & Data Visualization",
    filterCategory: ["full-stack", "ui-ux"],
    img: "/assets/images/projects/path-project.png",
    client: "Personal Project",
    date: "Dec 2025",
    duration: "Ongoing",
    github: "https://github.com/sarasithagalagama/The_P.A.T.H",
    preview: "https://thepathsl.vercel.app/en", // Add live link here if available
    technologies: [
      "Next.js 16",
      "Tailwind CSS v4",
      "Chart.js",
      "next-intl",
      "Vercel OG",
      "Shadcn/UI",
    ],
    images: [
      "/assets/images/projects/the-path/ui-1.png",
      "/assets/images/projects/the-path/ui-2.png",
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
  {
    id: "weather-air-quality-dashboard",
    title: "Weather & Air Quality Power BI Dashboard",
    category: "Data Analytics & BI",
    subTitle: "Real-time Climate Analytics",
    filterCategory: ["dashboards", "ui-ux"],
    img: "/assets/images/projects/weather-dashboard/dashboard-main.png",
    client: "Personal Project",
    date: "Dec 2025",
    duration: "Ongoing",
    github: "", // No GitHub link provided
    preview: "", // User said 'Live Dashboard (Optional)' is empty
    technologies: ["Power BI", "DAX", "Power Query", "WeatherAPI", "JSON"],
    images: [
      "/assets/images/projects/weather-dashboard/dashboard-main.png",
      "/assets/images/projects/weather-dashboard/ui-wireframe.png",
    ],
    socialLinks: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
    },
    projectSections: [
      {
        title: "Project Overview",
        content: [
          {
            type: "paragraph",
            text: "This project centralizes live weather and air quality data to provide actionable insights across Sri Lanka’s Wet and Dry climatic zones. It transforms raw JSON API data into meaningful visual intelligence to support environmental awareness and data-driven decision-making.",
          },
        ],
      },
      {
        title: "Key Features",
        content: [
          {
            type: "list",
            items: [
              "Real-time weather data integration using WeatherAPI",
              "Automated ETL pipeline built with Power Query",
              "Advanced DAX measures for Air Quality Index (AQI) classification",
              "Dynamic Weather Advisory System based on combined metrics (Humidity + PM10)",
              "Conditional formatting using Hex color codes to highlight AQI severity",
              "Chronologically accurate time-series visuals using custom format strings",
              "Analysis of 7-day forecasts, UV Index, and pollutant levels (PM2.5, PM10, SO₂)",
              "Coverage of 7 major locations across Sri Lanka",
            ],
          },
        ],
      },
      {
        title: "Tools & Technologies",
        content: [
          {
            type: "list",
            items: [
              "Power BI (Visualization & Reporting)",
              "DAX (Data Analysis Expressions)",
              "Power Query (ETL & Data Transformation)",
              "WeatherAPI (JSON Data Source)",
            ],
          },
        ],
      },
      {
        title: "Use Cases",
        content: [
          {
            type: "list",
            items: [
              "Environmental and climate trend monitoring",
              "Public health awareness related to air pollution",
              "Comparative analysis between Wet and Dry zones",
              "Learning reference for Power BI, DAX, and API integration",
            ],
          },
        ],
      },
      {
        title: "Future Enhancements",
        content: [
          {
            type: "list",
            items: [
              "Add more cities and rural locations",
              "Historical trend analysis",
              "Automated alerts based on AQI thresholds",
              "Mobile-optimized dashboard layout",
            ],
          },
        ],
      },
    ],
  },
  {
    id: "potato-disease-analyzer",
    title: "Potato Disease Analyzer",
    category: "AI & ML Projects",
    subTitle: "AI-powered disease detection system",
    filterCategory: "ai-ml",
    img: "/assets/images/projects/potato-disease/main.png", // Placeholder, user needs to add image
    client: "Personal Project",
    date: "Dec 2025",
    duration: "Completed",
    github:
      "https://github.com/sarasithagalagama/Potato-Disease-Classification", // Add if available
    preview: "", // Add if available
    technologies: [
      "Python",
      "TensorFlow",
      "FastAPI",
      "Google Gemini AI",
      "HTML5/CSS3",
    ],
    images: [
      "/assets/images/projects/potato-disease/main.png",
      "/assets/images/projects/potato-disease/detection.png",
    ],
    socialLinks: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
    },
    projectSections: [
      {
        title: "Project Overview",
        content: [
          {
            type: "paragraph",
            text: "This application uses a Convolutional Neural Network (CNN) to detect three conditions in potato leaves: Early Blight (Fungal disease), Late Blight (Serious fungal disease), and Healthy conditions. It integrates Google Gemini AI to provide context-aware insights alongside the classification.",
          },
        ],
      },
      {
        title: "Key Features",
        content: [
          {
            type: "list",
            items: [
              "🔬 Disease Detection - 95%+ accuracy using TensorFlow CNN model",
              "🤖 AI Explanations - Context-aware insights powered by Google Gemini",
              "💬 Chat Assistant - Ask agricultural questions in real-time",
              "📊 Visual Analytics - Confidence distribution charts",
              "🎨 Modern UI - Glassmorphic design with dark/light themes", // Combined for brevity
            ],
          },
        ],
      },
      {
        title: "UI/UX Highlights",
        content: [
          {
            type: "list",
            items: [
              "Glassmorphic Design - Modern frosted glass aesthetic with backdrop blur",
              "Smooth Animations - Cubic-bezier transitions and micro-interactions",
              "Responsive Layout - Optimized for desktop, tablet, and mobile",
              "Dark/Light Themes - Seamless theme switching with local storage",
              "Interactive Elements - Hover effects, loading states, and visual feedback",
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
              "Backend: Python 3.8+, FastAPI, TensorFlow 2.x, Google Gemini AI (2.5-flash)",
              "Frontend: HTML5, CSS3, JavaScript",
            ],
          },
        ],
      },
      {
        title: "How It Works",
        content: [
          {
            type: "list",
            items: [
              "1. Upload a potato leaf image (drag & drop or click)",
              "2. Click 'Run Analysis Protocol'",
              "3. View disease diagnosis with confidence scores",
              "4. Read AI-generated explanation and expand treatment roadmap",
              "5. Use chat assistant for additional questions",
            ],
          },
        ],
      },
    ],
  },
  {
    id: "movie-posters-vol1",
    title: "Movie Poster Designs Vol-01",
    category: "Design & Branding",
    subTitle: "Cinematic Key Art Collection",
    filterCategory: "design-branding",
    img: "/assets/images/projects/movie-posters/cover.png",
    client: "Fiverr Freelance Projects",
    date: "2023 - 2025",
    duration: "Completed",
    github: "",
    preview: "",
    technologies: [],
    images: [
      "/assets/images/projects/movie-posters/cover.png",
      "/assets/images/projects/movie-posters/grid.jpg",
    ],
    socialLinks: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
    },
    projectSections: [
      {
        title: "Collection Overview",
        content: [
          {
            type: "paragraph",
            text: "A curated collection of cinematic movie posters designed for independent films and high-concept personal projects. This volume showcases a mastery of visual storytelling, where lighting, composition, and typography merge to establish a distinct mood for each genre—from psychological thrillers to period dramas.",
          },
        ],
      },
      {
        title: "Design Philosophy",
        content: [
          {
            type: "paragraph",
            text: "Each poster is treated as a single-frame story. I focus on 'Key Art' principles: establishing a strong focal point, using color grading to evoke emotion (e.g., cold blues for suspense, warm ambers for drama), and ensuring the typography complements rather than distracts from the imagery.",
          },
        ],
      },
      {
        title: "Key Techniques",
        content: [
          {
            type: "list",
            items: [
              "Advanced Compositing: Blending multiple assets seamlessly.",
              "Color Grading: Using curves and lookup tables (LUTs) for cinematic looks.",
              "Texturing: Adding grain, scratches, and lens flares for realism.",
              "Typography: Custom kerning and layout for billing blocks and titles.",
            ],
          },
        ],
      },
    ],
  },
];
