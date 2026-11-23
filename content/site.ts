/**
 * Everything personal lives in this file.
 * Text in [square brackets] is a placeholder: the site highlights it in amber so you can find and replace it.
 * Empty link values ("") also show as amber placeholders instead of dead links.
 */

export type Project = {
  title: string;
  kind: string; // short label for your involvement
  summary: string;
  role: string; // what YOU did
  highlights: string[];
  stack: string[];
  /** GitHub URL. "" shows a placeholder. "private" shows "Source code is private" (use for employer code). */
  repo: string;
  /** Optional live/demo link. Leave "" to hide. */
  demo?: string;
  /** Optional recognition, shown as a highlighted line. */
  award?: string;
  /** Optional links, such as publications. */
  links?: { label: string; url: string }[];
};

export const site = {
  name: "Nidhi Patel",
  initials: "NP",
  /** Optional portrait: put a square image in /public and set e.g. "/me.jpg". Empty shows initials. */
  photo: "/nidhi.jpg",
  title: "Nidhi Patel | iOS and AI Engineer",
  description:
    "Nidhi Patel is an iOS engineer with strong product instincts, expanding into AI engineering and intelligent workflows. Cornell Tech MEng in Computer Science.",
  headline: "Software engineer with strong product instincts, experience in mobile development, expanding into AI engineering and intelligent workflows.",
  intro:
    "I build and ship production iOS products. At Hilti I worked on CrewCenter, a construction workforce app with 100,000+ users. I am now studying Computer Science at Cornell Tech, focusing on AI agents and LLM-powered workflows.",
  now: [
    { label: "Studying", value: "MEng Computer Science, Cornell Tech" },
    { label: "Previously", value: "Software Engineer, Hilti Technology Solutions India" },
  ],

  links: {
    email: "nidhibpatel02@gmail.com",
    linkedin: "https://www.linkedin.com/in/nidhibpatel02/",
    github: "https://github.com/nidhip02",
    resume: "/resume.pdf", // replace the file public/resume.pdf and keep this path
  },

  /**
   * Meeting booking through Google Calendar.
   * 1. In Google Calendar choose Create > Appointment schedule and set your hours.
   * 2. Open the schedule, choose Share, then "Add to website".
   * 3. Paste the iframe src URL into embedUrl, and the plain booking page link into bookingUrl.
   */
  calendar: {
    /** Meeting invites are sent to this Google Calendar. */
    email: "nidhibpatel02@gmail.com",
    embedUrl: "",
    bookingUrl: "https://calendar.app.google/Dh1AZQ456cKiKwD76",
  },

  skills: [
    {
      group: "iOS development",
      items: ["Swift", "SwiftUI", "Combine", "MVVM", "Apollo GraphQL", "Asynchronous programming"],
    },
    {
      group: "Quality and reliability",
      items: ["Automated testing", "SonarQube", "Crash analytics", "Performance optimization"],
    },
    {
      group: "Data and machine learning",
      items: ["Python", "Deep learning", "Model evaluation", "Feature selection", "Training efficiency"],
    },
    {
      group: "AI engineering",
      items: ["AI agent workflows", "Human-in-the-loop design", "LLM applications (learning)", "Tool use and evaluation (learning)"],
    },
    {
      group: "Product and tooling",
      items: ["GraphQL", "Cloud tooling", "Cross-platform feature parity", "Usability design"],
    },
  ],

  experience: [
    {
      role: "Software Engineer",
      org: "Hilti Technology Solutions India",
      period: "July 2024 to 2026",
      note: "Joined as an intern and moved into a full-time role. Worked on CrewCenter, a construction workforce and time-tracking product.",
      bullets: [
        "Built and improved production iOS features in Swift and SwiftUI.",
        "Redesigned the CrewCenter landing experience for a product with 100,000+ users.",
        "Worked on the Extra Time / Overtime feature, with real-time work-time calculations, for an app with 20,000+ daily active users.",
        "Cut a reported GraphQL operation from about 15 seconds to 5 seconds using chunking and parallel requests.",
        "Raised automated test coverage from 68% to 76% and reduced a reported SonarQube issue count from 112 to 50.",
        "Contributed to an AI agent framework for leave requests, approvals and timesheets, and to payroll exports designed to unify data from three systems.",
        "Owned design, implementation and release of Construction Diary.",
      ],
      work: [
      {
        title: "CrewCenter iOS",
        kind: "Team product, my contributions",
        summary: "Production iOS app for construction workforce management and time tracking.",
        role: "Landing-page redesign, Extra Time feature work, GraphQL performance, testing.",
        highlights: [
          "GraphQL data fetching: about 15 s to 5 s using chunking and parallel requests.",
          "Test coverage 68% to 76%. SonarQube issues 112 to 50.",
          "Real-time work-time calculations for Extra Time / Overtime.",
        ],
        stack: ["Swift", "SwiftUI", "Combine", "MVVM", "Apollo GraphQL"],
        repo: "private",
      },
      {
        title: "Construction Diary",
        kind: "Owned end to end",
        summary: "Site diary with photo documentation, secure signatures, and PDF generation and sharing.",
        role: "Design, implementation and release.",
        highlights: [
          "Photo documentation attached to diary entries.",
          "Secure signatures and a shareable PDF report.",
          "[Add one outcome, such as adoption or time saved, only if verified.]",
        ],
        stack: ["Swift", "SwiftUI"],
        repo: "private",
      },
      {
        title: "AI agent framework for construction workflows",
        kind: "Team project, my contribution",
        summary:
          "An AI agent framework intended to help non-technical construction workers with leave requests, approvals and timesheet tasks.",
        role: "[Describe exactly what you built, and what the team built.]",
        highlights: [
          "Goal: let workers complete routine admin tasks in plain language.",
          "Related work: payroll exports designed to unify data from three systems.",
        ],
        stack: ["AI agents", "Workflow automation"],
        repo: "private",
      },
      {
        title: "Actionable notifications and Live Activities",
        kind: "Hackathon, later developed for production",
        summary: "Actionable push notifications, reminders, widgets and Live Activities to support more accurate clock-ins.",
        role: "[Describe your part in the hackathon team.]",
        highlights: [
          "Idea later developed further for production use.",
          "Reminders and actions surfaced where users already look.",
        ],
        stack: ["Swift", "SwiftUI", "WidgetKit", "ActivityKit"],
        repo: "",
      },
      ],
    },
    {
      role: "Machine learning researcher",
      org: "COEP Technological University, Department of Computer Science and Engineering",
      period: "Papers published 2024 and 2025",
      note: "Two peer-reviewed papers: malware classification and GPU-optimized deep learning for protein localization.",
      bullets: [
        "First author of a malware detection paper that received the Best Paper award at ICCUBEA 2024, an IEEE international conference organized by PCCOE, Pune.",
        "Co-author, with equal contribution, of a GPU optimization study for protein subcellular localization, published in SN Computer Science (Springer, 2025).",
        "Evaluated models, selected features and improved training efficiency.",
      ],
    },
  ],

  projects: [
    {
      title: "PCOS-AI: explainable risk screening with cited reports",
      kind: "Cornell Tech team project, in progress",
      summary:
        "A tool that screens patients for PCOS risk from clinical, lab and ultrasound data, explains each prediction, and writes a short cited report using retrieval-augmented generation (RAG).",
      role: "Built the RAG and reporting pipeline, the demo and the application interface.",
      highlights: [
        "Risk model: calibrated ExtraTrees with SMOTE and 5-fold stratified cross-validation. On the held-out test set it reached ROC-AUC 0.941, accuracy 0.899, recall 0.861 and Brier score 0.063 (541 patients, 432 train and 109 test).",
        "Explains each prediction with SHAP.",
        "Report generation: hybrid dense and sparse retrieval with Qwen2.5-3B, writing a short cited report. Retrieval scored Hit@3 1.0 and MRR 0.958 on 24 test queries over 34 passages.",
        "Midpoint checkpoint presentation done. Final report and Gradio demo are still to come.",
      ],
      stack: ["Python", "scikit-learn", "SHAP", "RAG", "Qwen2.5-3B", "Hybrid retrieval", "Gradio"],
      repo: "",
    },
    {
      title: "Drive Gatekeeper: an MCP server that controls what Claude can read",
      kind: "Solo project, working prototype",
      summary:
        "A personal Model Context Protocol (MCP) server that sits between Claude and Google Drive, so every file access is checked, approved by me and logged.",
      role: "Designed and built all of it myself.",
      highlights: [
        "A blocklist of what Claude is not allowed to access.",
        "An Allow or Deny prompt for every access, on an approvals page that only my own Mac can open.",
        "Read-only Google Drive OAuth and a log of every request in JSONL.",
        "Works end to end with my own Claude, running locally on my Mac.",
      ],
      stack: ["Node.js", "Model Context Protocol", "Google Drive API", "OAuth", "ngrok"],
      repo: "private",
    },
    {
      title: "PeerLens: citation checking for academic drafts",
      kind: "Startup team project, in progress",
      summary:
        "Checks the citations and quotes in an academic draft against their sources, flags claims the source does not support, and deletes the draft within 24 hours.",
      role: "Sole developer on a team of business and project management students.",
      highlights: [
        "Reads Word drafts and checks each citation and quote against its source, using Semantic Scholar and the Claude API.",
        "Privacy by design: uploaded drafts are deleted within 24 hours.",
        "Prototype in progress. No public link yet.",
      ],
      stack: ["Claude API", "PostgreSQL", "Semantic Scholar", "Word file parsing"],
      repo: "",
    },
    {
      title: "Machine learning classifiers for malware detection",
      kind: "Research paper, first author",
      summary:
        "A comparison of machine learning classifiers for detecting and classifying malware, including obfuscated malware, on the CIC-MalMem-2022 dataset.",
      role: "First author. Evaluated nine classifiers in binary, 4-class and 16-class settings.",
      award: "Best Paper, ICCUBEA 2024 (IEEE international conference organized by PCCOE, Pune)",
      highlights: [
        "Compared Naive Bayes, Decision Trees, Extra Trees, Random Forest, AdaBoost, Gradient Boost, LightGBM, CatBoost and SVM, tuned for performance.",
        "LightGBM was the strongest classifier across binary, 4-class and 16-class tasks, balancing speed, accuracy and scalability.",
        "Measured accuracy, precision, recall, F1 score and training time for each model.",
      ],
      stack: ["Python", "Scikit-learn", "LightGBM", "CatBoost", "Feature selection"],
      repo: "",
      links: [{ label: "Read the paper (IEEE Xplore)", url: "https://ieeexplore.ieee.org/abstract/document/10775101" }],
    },
    {
      title: "GPU-optimized deep learning for protein localization",
      kind: "Research paper, co-author (equal contribution)",
      summary:
        "A comparative study of GPU optimization techniques for classifying protein subcellular localization in the Human Protein Atlas dataset, using VGG16 and InceptionV3.",
      role: "Co-author with equal contribution, published in SN Computer Science (Springer, 2025).",
      highlights: [
        "Tested mixed precision training, batch size optimization, memory pinning and model pruning.",
        "Mixed precision cut InceptionV3 average epoch time by about 50% (12,600 s to 6,332 s) and VGG16 by about 40%.",
        "Showed InceptionV3 generally benefits more than VGG16 from these optimizations.",
      ],
      stack: ["Python", "Deep learning", "GPU optimization", "VGG16", "InceptionV3"],
      repo: "",
      links: [{ label: "Read the paper (SN Computer Science)", url: "https://link.springer.com/article/10.1007/s42979-025-04090-2" }],
    },
  ] satisfies Project[],

  education: [
    {
      school: "Cornell Tech",
      degree: "Master of Engineering, Computer Science",
      period: "Started August 2026",
      detail: "",
    },
    {
      school: "COEP Technological University",
      degree: "B.Tech, Computer Engineering",
      period: "May 2024",
      detail: "Honors track in Big Data Analytics and Deep Learning.",
    },
  ],

  contact: {
    heading: "Contact me",
    body: "Open to iOS engineering, product engineering and applied AI roles, and to conversations about interesting product problems. Pick a time that suits you or send an email.",
  },
};
