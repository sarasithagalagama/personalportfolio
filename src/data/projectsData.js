export const projectsData = [
  {
    id: "githype-github-finder",
    title: "GitHype - Modern GitHub Profile Finder",
    category: "Full-Stack Web App",
    subTitle: "Discover Developers & Repos",
    filterCategory: ["full-stack", "ui-ux"],
    img: "/assets/images/projects/githype/cover.png",
    client: "Personal Project",
    date: "Jan 2026",
    duration: "Completed",
    github: "https://github.com/sarasithagalagama/github-user-finder",
    preview: "https://githype.sarasitha.me/",
    technologies: [
      "React 18",
      "Vite",
      "Vanilla CSS",
      "GitHub REST API",
      "Glassmorphism",
    ],
    images: [
      "/assets/images/projects/githype/cover.png",
      "/assets/images/projects/githype/profile.png",
      "/assets/images/projects/githype/classroom.png",
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
            text: "GitHype is a modern, aesthetically pleasing GitHub user finder application built with React and Vite. It features a 'Neo-Glass Bento' design system, providing a premium and responsive user experience. It goes beyond simple search by offering a 'Community Classroom' to explore trending resources and learning paths.",
          },
        ],
      },
      {
        title: "Key Features",
        content: [
          {
            type: "list",
            items: [
              "🔍 Smart Search: Instant user search with real-time suggestions and debounced input.",
              "👤 Detailed Profiles (Bento Grid): Identity cards, stats overview, location, and latest repositories.",
              "🎓 Community Classroom: Curated roadmaps for Web Dev, Interviews, and CS.",
              "🎨 Neo-Glass Bento Design: Deep blue/slate background, glassmorphism, and vibrant gradients.",
              "🛠️ Optimized Performance: Debounced API calls and responsive layout.",
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
              "Framework: React 18 & Vite",
              "Styling: Vanilla CSS (CSS Variables, Flexbox, Grid)",
              "API: GitHub REST API",
              "Icons: Font Awesome 6",
              "Fonts: Outfit (Headings) & Inter (Body)",
            ],
          },
        ],
      },
    ],
  },
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
    title: "PotatoPulse - Potato Disease Detection",
    category: "AI & ML Projects",
    subTitle: "End-to-End Deep Learning Solution",
    filterCategory: "ai-ml",
    img: "/assets/images/projects/potato-disease/stream-ui.png",
    client: "Personal Project",
    date: "Jan 2026",
    duration: "Completed",
    github: "https://github.com/sarasithagalagama/PotatoPulse",
    preview: "https://potatopulse.streamlit.app/",
    technologies: ["Python", "TensorFlow", "Streamlit", "OpenCV"],
    images: ["/assets/images/projects/potato-disease/stream-ui.png"],
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
            text: "PotatoPulse is an end-to-end deep learning solution designed to automate the detection of pathological states in potato leaf imagery. Built to address crop yield loss caused by Phytophthora infestans (Late Blight) and Alternaria solani (Early Blight), this system leverages a custom Deep Convolutional Neural Network (CNN) to achieve high-accuracy classification in real-time.",
          },
          {
            type: "paragraph",
            text: "The project demonstrates a full machine learning lifecycle—from data pipeline construction and image preprocessing to model architecture design and deployment of a scalable inference engine.",
          },
        ],
      },
      {
        title: "Key Features",
        content: [
          {
            type: "list",
            items: [
              "Advanced Custom CNN: 6-block architecture with ~97.7% training accuracy.",
              "High Reliability: 94.5% accuracy on unseen test data with minimal generalization gap.",
              "Robust Augmentation: RandomFlip and RandomRotation layers for orientation invariance.",
              "Streamlit Deployment: Interactive, production-grade web interface for real-time analysis.",
            ],
          },
        ],
      },
      {
        title: "Technical Architecture",
        content: [
          {
            type: "paragraph",
            text: "The core classification engine is a sequential CNN trained on the PlantVillage dataset, engineered for robustness and generalization:",
          },
          {
            type: "list",
            items: [
              "Data Pipeline: Automated partitioning (Train/Val/Test), resizing, and normalization.",
              "Augmentation: Integrated RandomFlip and RandomRotation layers to mitigate overfitting.",
              "Model Structure: 6-block Convolutional Network using 32-64 filter feature extraction layers with ReLU activation.",
              "Pooling: MaxPooling for spatial down-sampling and translational invariance.",
              "Output: Flatten and Dense layers with Softmax activation for multi-class probability distribution.",
            ],
          },
        ],
      },
      {
        title: "Training Strategy",
        content: [
          {
            type: "list",
            items: [
              "Dataset: PlantVillage dataset loaded via image_dataset_from_directory().",
              "Preprocessing: Resizing to 256x256 and Rescaling (1./255) for pixel normalization.",
              "Optimization: Adam optimizer with Sparse Categorical Crossentropy loss.",
              "Epochs: Trained for 20 epochs to ensure convergence.",
            ],
          },
        ],
      },
      {
        title: "Performance & Robustness",
        content: [
          {
            type: "paragraph",
            text: "The model demonstrates excellent generalization with minimal overfitting:",
          },
          {
            type: "list",
            items: [
              "Training Accuracy: ~97.77%",
              "Validation Accuracy: ~97.40%",
              "Test Accuracy: ~94.53% (on completely unseen data)",
              "Generalization Gap: ~0.37% (indicating no memorization of training data)",
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
              "Deep Learning: TensorFlow, Keras",
              "Computer Vision: OpenCV, Pillow (PIL), NumPy",
              "Data Processing: Pandas, Matplotlib",
              "Deployment & UI: Streamlit",
              "Version Control: Git",
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
    technologies: [
      "Adobe Photoshop",
      "Adobe Lightroom",
      "Digital Compositing",
      "Typography",
    ],
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
  {
    id: "movie-posters-vol2",
    title: "Movie Poster Designs Vol-02",
    category: "Design & Branding",
    subTitle: "Advanced Key Art & Compositing",
    filterCategory: "design-branding",
    img: "/assets/images/projects/movie-posters/cover-vol2.png",
    client: "Fiverr Freelance Projects",
    date: "2024 - 2025",
    duration: "Completed",
    github: "",
    preview: "",
    technologies: [
      "Adobe Photoshop",
      "Adobe Lightroom",
      "Digital Compositing",
      "Typography",
    ],
    images: [
      "/assets/images/projects/movie-posters/cover-vol2.png",
      "/assets/images/projects/movie-posters/grid-vol2.jpg",
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
  {
    id: "movie-posters-vol4",
    title: "Movie Poster Designs Vol-04",
    category: "Design & Branding",
    subTitle: "Cinematic Key Art Collection",
    filterCategory: "design-branding",
    img: "/assets/images/projects/movie-posters/cover-vol4.png",
    client: "Fiverr Freelance Projects",
    date: "2024 - 2025",
    duration: "Completed",
    github: "",
    preview: "",
    technologies: [
      "Adobe Photoshop",
      "Adobe Lightroom",
      "Digital Compositing",
      "Typography",
    ],
    images: [
      "/assets/images/projects/movie-posters/cover-vol4.png",
      "/assets/images/projects/movie-posters/grid-vol4.jpg",
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
  {
    id: "movie-posters-vol5",
    title: "Movie Poster Designs Vol-05",
    category: "Design & Branding",
    subTitle: "Advanced Key Art & Compositing",
    filterCategory: "design-branding",
    img: "/assets/images/projects/movie-posters/cover-vol5.png",
    client: "Fiverr Freelance Projects",
    date: "2024 - 2025",
    duration: "Completed",
    github: "",
    preview: "",
    technologies: [
      "Adobe Photoshop",
      "Adobe Lightroom",
      "Digital Compositing",
      "Typography",
    ],
    images: [
      "/assets/images/projects/movie-posters/cover-vol5.png",
      "/assets/images/projects/movie-posters/grid-vol5.jpg",
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
            text: "Volume 05 represents a further evolution in visual storytelling, featuring a diverse range of genres from high-octane action to subtle indie dramas. This collection focuses on high-impact composition and advanced photo-manipulation techniques to create industry-standard theatrical one-sheets.",
          },
        ],
      },
      {
        title: "Creative Direction",
        content: [
          {
            type: "paragraph",
            text: "For this series, the emphasis was on 'genre-blending'—combining elements of horror lighting with action dynamism, or romance with thriller undertones. The goal was to stop the scroll and instantly communicate the film's unique tone through color contrast and visual hierarchy.",
          },
        ],
      },
      {
        title: "Key Techniques",
        content: [
          {
            type: "list",
            items: [
              "Hyper-Realistic Compositing: Integrating diverse elements with matching lighting and perspective.",
              "Dynamic Lighting Effects: Using custom brushes and exposure blending for dramatic impact.",
              "Genre-Specific Color Grading: Tailoring palettes to evoke specific emotional responses.",
              "Title Treatment: Designing custom typography that acts as a visual anchor.",
            ],
          },
        ],
      },
    ],
  },
  {
    id: "movie-posters-vol6",
    title: "Movie Poster Designs Vol-06",
    category: "Design & Branding",
    subTitle: "Cinematic Key Art Collection",
    filterCategory: "design-branding",
    img: "/assets/images/projects/movie-posters/cover-vol6.png",
    client: "Fiverr Freelance Projects",
    date: "2024 - 2025",
    duration: "Completed",
    github: "",
    preview: "",
    technologies: [
      "Adobe Photoshop",
      "Adobe Lightroom",
      "Digital Compositing",
      "Typography",
    ],
    images: [
      "/assets/images/projects/movie-posters/cover-vol6.png",
      "/assets/images/projects/movie-posters/grid-vol6.jpg",
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
