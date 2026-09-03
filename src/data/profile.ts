import type { Profile } from "@/types";

export const profile: Profile = {
  name: "Maximiliano Farias",
  title: "QA Engineer",
  subtitle: "Functional · Manual · Automation Testing",
  location: "Buenos Aires, Argentina",
  email: "maxifarias81@gmail.com",
  linkedin: "https://www.linkedin.com/in/maximilianofarias81",
  summary:
    "I'm a QA Engineer specializing in quality across multiple projects, with strong experience in Fintech solutions and financial platforms. My work focuses on making sure software products meet client expectations and user needs — from early lifecycle stages through to release. I adapt testing strategies to each project's characteristics, and translate complex business requirements into clear, effective test strategies.",
  skills: [
    {
      category: "Testing & QA",
      items: [
        "Functional",
        "Manual",
        "Exploratory",
        "Regression",
        "Smoke",
        "Sanity",
        "Integration",
        "E2E",
        "API Testing",
        "Test Case Design",
        "Defect Management",
      ],
    },
    {
      category: "Automation",
      items: [
        "Cypress",
        "Selenium",
        "Playwright",
        "UI Automation",
        "API Automation",
        "E2E Automation",
        "POM",
      ],
    },
    {
      category: "API & Backend",
      items: [
        "REST",
        "JSON",
        "SQL",
        "API Validation",
        "Backend Services",
        "Database Testing",
      ],
    },
    {
      category: "Cloud",
      items: ["AWS", "DynamoDB", "S3", "Lambda", "Cognito"],
    },
    {
      category: "Programming",
      items: ["TypeScript", "JavaScript", "Python", "Node.js", "React"],
    },
    {
      category: "Tools & AI",
      items: [
        "Jira",
        "Zephyr Scale",
        "Git",
        "Agile/Scrum",
        "AI Test Generation",
        "Requirements Analysis",
        "Automation Assistance",
      ],
    },
  ],
  experience: [
    {
      company: "Crombie S.R.L",
      type: "Software Factory",
      role: "QA Engineer",
      period: "Dec 2022 — Present",
      bullets: [
        "Joined as a Trainee and grew into my current role through international projects and progressively broader responsibilities.",
        "Started with test execution and defect tracking; expanded into requirements analysis, scenario design, and test planning.",
        "Worked on higher-complexity features and integrations, incorporating automation and a comprehensive view of application components and their risk surface.",
        "Currently acting with greater autonomy in coverage strategy and priorities, while supporting fellow QA engineers and collaborating with technical and business teams.",
      ],
    },
  ],
  certifications: [
    {
      group: "Certification",
      items: [{ name: "ISTQB Certified Tester – Foundation Level (CTFL)", source: "", inProgress: true }],
    },
    {
      group: "QA Specialization",
      items: [
        {
          name: "AWS for Software Testers: Cloud Automation Testing",
          source: "Udemy",
          year: 2025,
        },
        { name: "Cypress Automation Testing", source: "Udemy", year: 2024 },
        { name: "Software Testing", source: "Udemy", year: 2024 },
        {
          name: "Exploratory Testing for Agile Teams",
          source: "Udemy",
          year: 2024,
        },
      ],
    },
    {
      group: "Technical Training",
      items: [
        { name: "Python", source: "Udemy", year: 2024 },
        { name: "Full Stack Development", source: "Coderhouse", year: 2022 },
        {
          name: "JavaScript · TypeScript · Web Development",
          source: "Coderhouse",
          year: 2022,
        },
      ],
    },
  ],
  competencies: [
    "Analytical thinking",
    "Critical thinking",
    "Ownership",
    "Problem-solving",
    "Effective communication",
    "Priority management",
    "Leadership & mentorship",
  ],
  languages: [
    { lang: "Spanish", level: "Native" },
    { lang: "English", level: "Intermediate" },
  ],
};
