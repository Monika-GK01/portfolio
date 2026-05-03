// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#6a11cb, #2575fc, #f953c6, #b91d73, #f4c4f3, #fc67fa",
  firstName: "Monika",
  middleName: "Gamakonda Kumar",
  lastName: "Raja",
  message:
    "Aspiring Full Stack Developer · Java · React · Node.js · Building impactful solutions with AI & Web Tech.",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/Monika-GK01",
    },
    {
      image: "fa-linkedin",
      url: "https://linkedin.com/in/monika-moni01",
    },
    {
      image: "fa-envelope",
      url: "mailto:gkmonika01@gmail.com",
    },
  ],
  customLinks: [
    {
      label: "LeetCode",
      url: "https://leetcode.com/u/gk_monika/",
    },
    {
      label: "HackerRank",
      url: "https://www.hackerrank.com/profile/gkmonika01",
    },
  ],
};

// ABOUT SECTION
const about = {
  show: true,
  heading: "About Me",
  imageLink: null,
  imageSize: 375,
  message:
    "I'm Monika Gamakonda Kumar Raja, a B.Tech Computer Science (AIML) student at Mohan Babu University, Tirupati with a CGPA of 9.86. " +
    "I'm passionate about Full Stack Development, AI, and ML, with hands-on experience in Java, React, Node.js, and MongoDB. " +
    "I work as a Content Lead at Codeunia, where I host sessions for 100+ students and manage technical blogs. " +
    "I'm also an active ACM Club Coordinator and have competed in multiple national hackathons.",
  resume: "https://drive.google.com/file/d/your-resume-link/view",
};

// PROJECTS SECTION
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "Monika-GK01",
  reposLength: 4,
  specificRepos: [],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message: "",
  images: [],
  imageSize: {
    width: "615",
    height: "450",
  },
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Java", value: 85 },
    { name: "Python", value: 78 },
    { name: "JavaScript", value: 80 },
    { name: "React / TypeScript", value: 75 },
    { name: "Node.js / Express.js", value: 75 },
    { name: "HTML / Tailwind / Bootstrap", value: 85 },
    { name: "MongoDB / MySQL", value: 78 },
    { name: "DSA / OOPS", value: 80 },
  ],
  softSkills: [
    { name: "Leadership", value: 92 },
    { name: "Communication", value: 90 },
    { name: "Problem Solving", value: 88 },
    { name: "Collaboration", value: 88 },
    { name: "Adaptability", value: 85 },
    { name: "Organization", value: 85 },
    { name: "Creativity", value: 82 },
    { name: "Goal-Oriented", value: 88 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently looking for Full Stack Developer or AI/ML opportunities. If you have a position available, a question, or just want to say hi, feel free to reach out at",
  email: "gkmonika01@gmail.com",
};

// EXPERIENCE SECTION
const experiences = {
  show: true,
  heading: "Experience",
  data: [
    {
      role: "Content Lead — Codeunia",
      companyLogo: "fa-pen-nib",
      date: "Aug 2025 – Present",
      bullets: [
        "Hosted and organized Google Meet sessions with 100+ students, enabling knowledge-sharing with industry leaders.",
        "Published and managed technical blogs, increasing readership by 35%.",
      ],
    },
  ],
};

// ACHIEVEMENTS & CERTIFICATIONS SECTION
const achievements = {
  show: true,
  heading: "Achievements & Certifications",
  data: [
    {
      title: "SENSORA Hackathon",
      description: "Runner-up among 100+ national teams at VIT Gravitas.",
      icon: "fa-trophy",
    },
    {
      title: "SYNAPSE 2K25",
      description: "Ranked 11th among 200+ teams in a national hackathon by Hubexes.",
      icon: "fa-trophy",
    },
    {
      title: "XHorizon 2025",
      description: "Top 15 among 140+ teams at MBU 24-hour national hackathon.",
      icon: "fa-trophy",
    },
    {
      title: "HackerRank",
      description: "Earned a Problem Solving badge in Java.",
      icon: "fa-code",
    },
    {
      title: "ServiceNow",
      description: "Earned a badge in ServiceNow University under ServiceNow Fundamentals.",
      icon: "fa-star",
    },
    {
      title: "Responsive Design Certification",
      description: "Certified in Responsive Web Design by NxtWave.",
      icon: "fa-certificate",
    },
    {
      title: "Web Development Virtual Internship",
      description: "Completed Web Development Virtual Internship at Codeunia.",
      icon: "fa-certificate",
    },
    {
      title: "Welcome to ServiceNow (Xanadu)",
      description: "Micro-Certification from ServiceNow University.",
      icon: "fa-certificate",
    },
  ],
};

export {
  navBar,
  mainBody,
  about,
  repos,
  skills,
  leadership,
  getInTouch,
  experiences,
  achievements,
};
