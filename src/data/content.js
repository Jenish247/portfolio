export const profile = {
  name: "Jenish Modi",
  role: "Software Engineer & AI Researcher",
  location: "Windsor, Ontario, CA",
  email: "modi8a@uwindsor.ca",
  phone: "+1 647 227 2987",
  // TODO: add your real LinkedIn / GitHub URLs here
  linkedin: "https://linkedin.com/in/your-handle",
  github: "https://github.com/your-handle",
  summary:
    "Software engineer with 1.5+ years building enterprise applications for government-scale systems, and an M.Sc. in Computer Science from the University of Windsor. I take features from design through deployment — full-stack, across C#, Java, JavaScript, Python, SQL, and REST APIs — and I'm equally at home writing peer-reviewed systems research as I am shipping production code.",
  stats: [
    { value: "10,000+", label: "users served in production" },
    { value: "150K", label: "code–comment pairs in my RAG dataset" },
    { value: "1", label: "peer-reviewed IEEE publication" },
  ],
};

export const categories = [
  { id: "all", label: "All work" },
  { id: "enterprise", label: "Enterprise & Government", color: "coral" },
  { id: "research", label: "AI & Research", color: "violet" },
  { id: "data", label: "Data & Full-Stack", color: "mint" },
];

export const projects = [
  {
    id: "agri-cms",
    title: "Unified CMS — Gujarat Agriculture Web Ecosystem",
    period: "Jan – Oct 2024",
    category: "enterprise",
    description:
      "Part of the core team that designed a single CMS architecture to centrally manage 9 sub-sites under Gujarat's main Agriculture portal, replacing fragmented site management with one unified content platform.",
    stack: ["ASP.NET MVC", "JavaScript", "C#", "MySQL"],
    href: "https://agri.gujarat.gov.in",
    metric: "9 sub-sites unified",
  },
  {
    id: "agri-portal",
    title: "Directorate of Agriculture Web Portal",
    period: "Nov 2023 – May 2024",
    category: "enterprise",
    description:
      "Built and maintained a live government portal serving citizens and staff statewide — backend modules, admin workflows, real-time data updates, and RESTful APIs for third-party integration.",
    stack: [".NET Core MVC", "C#", "MySQL", "Bootstrap", "AJAX", "jQuery"],
    metric: "10,000+ active users",
  },
  {
    id: "geofence",
    title: "GeoFence-Based Employee Attendance System",
    period: "Jun – Nov 2024",
    category: "enterprise",
    description:
      "Backend and web portal for a location-based check-in system paired with a companion mobile app. Built the office-boundary module — admins configure lat/long coordinates so employees can only check in from approved premises.",
    stack: ["C#", "Swagger API", "REST"],
    metric: "Boundary-validated check-ins",
  },
  {
    id: "nwrws",
    title: "NWRWS Departmental Portal",
    period: "Aug – Nov 2024",
    category: "enterprise",
    description:
      "Multi-department portal managing workflows across government offices under Gujarat's Water Resources & Water Supply department — cross-office data flows and administrative processes at scale.",
    stack: ["C#", "ASP.NET", "Client Communication"],
    metric: "Multi-department scale",
  },
  {
    id: "edge-cloud",
    title: "Edge-Cloud Task Offloading Analysis",
    period: "Published — IEEE COMPSAC 2025",
    category: "research",
    description:
      "Co-authored a peer-reviewed comparison of five workload orchestration policies for task offloading in edge computing, simulating 200–2,400+ IoT devices in EdgeCloudSim. Found the Fuzzy-Based policy held service times under 2s up to 1,000 devices, while Network-Based policy won at 2,000+ devices under load (2.5s vs 3.1s) — with adaptive switching cutting failure rates ~30–40%.",
    stack: ["EdgeCloudSim", "Simulation", "Data Analysis"],
    href: "https://ieeexplore.ieee.org/document/11126554",
    metric: "IEEE COMPSAC, Toronto",
    featured: true,
  },
  {
    id: "rag-comments",
    title: "Multi-Intent Code Comment Generation",
    period: "In progress — VS Code extension",
    category: "research",
    description:
      "A RAG pipeline that generates multi-intent code comments (what / why / how-to-use / how-it's-done / property). Structured 150K Stack Overflow Q&A pairs, built an intent classifier, and used CodeBERT embeddings + FAISS similarity search to surface relevant prior knowledge for new code.",
    stack: ["RAG", "CodeBERT", "FAISS", "Python"],
    metric: "150K training pairs",
  },
  {
    id: "tiffin",
    title: "Tiffin Subscription & Delivery Platform",
    period: "Personal project",
    category: "data",
    description:
      "Full-stack food subscription platform: users pick daily meal plans across multiple providers with automated delivery scheduling. Designed the React frontend, Node/Express backend, and MongoDB models end-to-end.",
    stack: ["React.js", "Node.js", "Express", "MongoDB"],
    metric: "End-to-end full stack",
  },
  {
    id: "hr-analytics",
    title: "HR Analytics — Employee Attrition Dashboard",
    period: "Personal project",
    category: "data",
    description:
      "Analyzed attrition across 1,470 employee records: cleaned data in Excel, wrote SQL for department/role/salary/overtime breakdowns, and built a Tableau dashboard. Overtime employees showed ~30.5% attrition — nearly 3x the baseline — concentrated among Sales Reps and under-30 staff.",
    stack: ["Excel", "MySQL", "Tableau"],
    metric: "1,470 records analyzed",
  },
  {
    id: "face-recognition",
    title: "Face Recognition Application",
    period: "Personal project",
    category: "data",
    description:
      "Built a face recognition application to detect and identify faces, exploring practical authentication and identification workflows.",
    stack: ["Python", "Facial Recognition"],
    metric: "Auth workflow exploration",
  },
  {
    id: "library",
    title: "Library Management System",
    period: "Academic project",
    category: "data",
    description:
      "Library management system in .NET WebForms with a comprehensive Assert-based unit test suite covering every core function, validating correctness and catching regressions.",
    stack: ["ASP.NET Web Forms", "SQL"],
    metric: "Full unit test coverage",
  },
];

export const research = {
  title: "An Analysis of Task Offloading Approaches in Edge-Cloud Continuum",
  venue: "IEEE 49th Annual Computers, Software, and Applications Conference (COMPSAC 2025), Toronto, ON",
  href: "https://ieeexplore.ieee.org/document/11126554",
  points: [
    "Compared five orchestration policies — Network-Based, Utilization-Based, Fuzzy-Based, Fuzzy-Competitor, and Hybrid — across 200 to 2,400+ simulated IoT devices.",
    "Fuzzy-Based policy delivered service times under 2 seconds for up to 1,000 devices.",
    "Network-Based policy won under high-bandwidth overload at 2,000+ devices (2.5s vs. 3.1s).",
    "Identified an optimal policy-switching threshold near 1,000 devices.",
    "Adaptive orchestration cut task failure rates by roughly 30–40%.",
  ],
};

export const experience = [
  {
    role: "Graduate Assistant",
    org: "University of Windsor",
    location: "Windsor, ON",
    period: "2025 — 2026",
    points: [
      "Led interactive Java lab sessions, contributing to a 25% improvement in undergraduates' grasp of OOP concepts.",
      "Assessed 60+ exam papers each semester alongside assignments and lab work, keeping grading consistent.",
      "Designed an AI-powered code comment generation system using RAG, CodeBERT, FAISS, and LLMs over 150,000 Stack Overflow code–comment pairs.",
    ],
  },
  {
    role: "Software Developer (.NET Core MVC)",
    org: "Dev Information Technology Ltd.",
    location: "Gandhinagar, IN",
    period: "2023 — 2024",
    points: [
      "Developed and maintained 5+ enterprise web applications using .NET Core MVC, C#, JavaScript, jQuery, AJAX, and MySQL.",
      "Built the Directorate of Agriculture web portal serving 10,000+ users — backend modules, admin workflows, real-time updates.",
      "Built the office-location management module for a GeoFence-based attendance system validating check-ins against configured boundaries.",
      "Designed RESTful APIs with ASP.NET and Swagger for internal and third-party interoperability.",
      "Optimized MySQL queries and indexing, cutting data retrieval time ~17%.",
      "Built automated report generation, saving ~13 hours/month of repetitive admin work.",
    ],
  },
  {
    role: "Software Developer Intern",
    org: "Gujarat Informatics Ltd.",
    location: "Gandhinagar, IN",
    period: "2023",
    points: [
      "Implemented code-first and database-first approaches in .NET, speeding up module development ~12%.",
      "Built an internship project in .NET Core MVC to go deeper on MVC architecture.",
      "Contributed to government software initiatives across the full SDLC.",
    ],
  },
];

export const education = [
  {
    degree: "M.Sc. Computer Science (A+)",
    org: "University of Windsor",
    location: "Windsor, ON",
    period: "2025 — 2026",
    note: "Thesis: LLM-guided Multi-intent Code Comment Generation by Leveraging Crowdsourcing Knowledge in Stack Overflow",
  },
  {
    degree: "B.E. Computer Engineering",
    org: "Ahmedabad Institute of Technology",
    location: "Ahmedabad, IN",
    period: "2019 — 2023",
    note: "CGPA: 8.86 / 10",
  },
];

export const skills = [
  {
    group: "Languages",
    color: "coral",
    items: ["Python", "C#", "Java", "JavaScript", "SQL", "C++"],
  },
  {
    group: "Frameworks & Tech",
    color: "coral",
    items: [".NET Core MVC", "ASP.NET Web API", "React", "Express.js", "Node.js", "AJAX", "jQuery"],
  },
  {
    group: "AI & Machine Learning",
    color: "violet",
    items: ["RAG", "LLMs", "Prompt Engineering", "CodeBERT", "Hugging Face Transformers", "FAISS", "Scikit-learn"],
  },
  {
    group: "Databases",
    color: "mint",
    items: ["MySQL", "SQL Server", "MongoDB"],
  },
  {
    group: "Tools",
    color: "mint",
    items: ["Git", "Docker", "Jenkins", "VS Code", "JIRA", "Postman", "Swagger", "Jupyter"],
  },
  {
    group: "Libraries",
    color: "amber",
    items: ["Pandas", "NumPy", "Matplotlib", "Bootstrap"],
  },
];
