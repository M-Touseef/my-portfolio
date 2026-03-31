export const projects = [
  {
    id: 1,
    title: "Deepfake Detector",
    description:
      "Proof-of-reality deepfake detection platform using EfficientNet-B0 + Transformer Encoder trained on FaceForensics++ C23. Achieved 96.76% F1 score with Grad-CAM explainability, frame-wise verdicts, and production-ready API.",
    techStack: ["React", "Node.js", "MongoDB", "PyTorch", "EfficientNet", "Transformers"],
    category: "Machine Learning",
    liveUrl: "#",
    githubUrl: "https://github.com/M-Touseef/Deep-Fake-Video-Detector",
    imageUrl: "/images/projects/deepfake-detector.png",
    highlights: [
      "Processed thousands of video frames with batched GPU inference and asynchronous workers",
      "Delivered 96.76% F1 score on FaceForensics++ C23 split with robust evaluation pipeline",
      "Integrated Grad-CAM heatmaps and segment-level verdicts for explainable decisions",
      "Exposed REST API endpoints for uploading videos and retrieving authenticity reports"
    ]
  },
  {
    id: 2,
    title: "University Admissions Platform",
    description:
      "End-to-end admissions system that digitizes applicant intake, document verification, and review workflows for universities handling 50,000+ annual applications.",
    techStack: ["React", "Node.js", "MongoDB", "Express", "Stripe API"],
    category: "Full Stack",
    liveUrl: "#",
    githubUrl: "https://github.com/M-Touseef/AdmissionPlatform",
    imageUrl: "/images/projects/admissions-platform.png",
    highlights: [
      "Designed multi-step application flows with autosave and validation for thousands of concurrent users",
      "Implemented role-based dashboards for applicants, reviewers, and admins with real-time status tracking",
      "Integrated Stripe for secure fee payments and automated receipt generation",
      "Optimized MongoDB queries and indexes to keep dashboard load times under 200 ms"
    ]
  },
  {
    id: 3,
    title: "Nutrition-Focused E‑Commerce",
    description:
      "AI-assisted e-commerce experience that recommends meals and products based on dietary preferences, macros, and health goals.",
    techStack: ["React", "Node.js", "MongoDB", "JWT Auth"],
    category: "Full Stack",
    liveUrl: "#",
    githubUrl: "#",
    imageUrl: "/images/projects/nutrition-ecommerce.png",
    highlights: [
      "Built recommendation logic that personalizes catalog views based on dietary profiles and history",
      "Secured customer accounts with JWT auth and refresh tokens",
      "Implemented order history, saved plans, and nutrition breakdown per cart",
      "Designed responsive UI optimized for mobile grocery browsing"
    ]
  }
];

export const categories = ["All", "Full Stack", "Machine Learning"];
