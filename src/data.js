export const profile = {
  name: 'Jaivardhan Singh',
  initials: 'JS',
  location: 'Jamshedpur, Jharkhand, India',
  email: 'jaivardhan.workmail@gmail.com',
  phone: '+91 8709938626',
  linkedin: 'https://www.linkedin.com/in/jaivardhansingh14',
  github: 'https://github.com/JAIVARDHAN1402',
  resume: '/Jaivardhan_Singh_Resume.pdf',
  roles: [
    'Software Developer',
    'Full-Stack Engineer',
    'C++ / DSA Enthusiast',
    'React & Next.js Developer',
  ],
  tagline:
    'Computer Science undergraduate at VIT Vellore, building full-stack web applications and production automation tools that real teams depend on every day.',
  summary:
    'Computer Science undergraduate at VIT Vellore with two software development internships building production automation tools. Strong in C++ DSA (200+ problems solved) with full-stack project experience across React, Next.js and MongoDB. Currently seeking SDE roles where I can own features end to end.',
}

export const stats = [
  { value: '200+', label: 'DSA Problems Solved' },
  { value: '2', label: 'Dev Internships' },
  { value: '8.16', label: 'CGPA / 10.0' },
  { value: '3rd', label: 'IEEE Hackathon Place' },
]

export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'coding', label: 'Coding' },
  { id: 'contact', label: 'Contact' },
]

export const skills = [
  {
    title: 'Languages',
    icon: 'Code2',
    accent: 'violet',
    items: ['C++ (Main)', 'JavaScript', 'SQL', 'Java'],
  },
  {
    title: 'Frontend',
    icon: 'Layout',
    accent: 'cyan',
    items: ['React.js', 'Next.js', 'Tailwind CSS', 'HTML', 'CSS'],
  },
  {
    title: 'Backend',
    icon: 'Server',
    accent: 'fuchsia',
    items: ['Next.js API Routes', 'REST APIs', 'JWT Authentication'],
  },
  {
    title: 'Databases',
    icon: 'Database',
    accent: 'emerald',
    items: ['Oracle SQL', 'MongoDB'],
  },
  {
    title: 'Tools',
    icon: 'Wrench',
    accent: 'amber',
    items: ['Git', 'GitHub', 'VS Code', 'Vercel'],
  },
  {
    title: 'CS Fundamentals',
    icon: 'BrainCircuit',
    accent: 'sky',
    items: ['DSA', 'DBMS', 'Operating Systems', 'OOP', 'Computer Networks'],
  },
]

export const marqueeSkills = [
  'C++',
  'React.js',
  'Next.js',
  'JavaScript',
  'Tailwind CSS',
  'MongoDB',
  'Oracle SQL',
  'REST APIs',
  'JWT Auth',
  'Java',
  'Git',
  'Vercel',
  'DSA',
  'DBMS',
  'VB.NET',
]

export const experience = [
  {
    company: 'Timken India Limited',
    role: 'Software Developer Intern',
    period: 'May 2025 – Jun 2025',
    location: 'Jamshedpur, Jharkhand',
    stack: ['VB.NET', 'Oracle SQL'],
    points: [
      'Engineered a Network Device Management System centralizing IT asset tracking for 200+ network devices across multiple company locations.',
      'Designed master data entry forms (Company, Location, Asset Type) that cut manual data entry time by ~35% by standardizing and automating asset registration workflows.',
      'Implemented real-time device monitoring with automated email alerts, reducing downtime detection from 15+ minutes to under 1 minute for critical infrastructure.',
    ],
  },
  {
    company: 'Tata Cummins Private Limited',
    role: 'Software Developer Intern',
    period: 'Dec 2024 – Jan 2025',
    location: 'Jamshedpur, Jharkhand',
    stack: ['VB.NET', 'Oracle SQL'],
    points: [
      'Developed end-to-end quality inspection automation software, replacing manual processes across the production line and reducing human error while improving inspection throughput.',
      'Integrated camera-based verification and QR code generation, improving traceability and cutting manual verification steps by ~50%.',
      'Built a data access module enabling engineers to retrieve and audit past inspection records for defect analysis and compliance reporting.',
    ],
  },
]

export const projects = [
  {
    name: 'InterviewAI',
    subtitle: 'AI Voice Interview Simulator',
    blurb:
      'A voice-based AI interview simulator with hold-to-speak input, live speech-to-text and spoken AI feedback across 6 technical roles — SDE, Frontend, PM, DevOps, Data Analyst and System Design.',
    points: [
      'Integrated Google Gemini API with auto model discovery and retry logic for real-time answer evaluation, scoring and a full performance summary.',
      'Engineered retry-with-backoff and model-fallback logic to survive Gemini rate limits mid-interview, so sessions never drop a response.',
    ],
    tech: ['Next.js', 'Gemini API', 'Web Speech API', 'Tailwind CSS'],
    live: 'https://interviewai-five-brown.vercel.app/',
    github: 'https://github.com/JAIVARDHAN1402/InterviewAI',
    accent: 'from-violet-500/25 via-fuchsia-500/10 to-transparent',
  },
  {
    name: 'Placement Tracker',
    subtitle: 'Multi-Role Placement Platform',
    blurb:
      'A multi-role placement platform with company listings, application tracking, deadlines and real-time stats dashboards for both students and admins.',
    points: [
      'Designed RESTful APIs on MongoDB Atlas with JWT cookie-based auth and built a responsive, role-specific UI deployed on Vercel.',
      'Handled token expiry and refresh via httpOnly cookies, preventing abrupt session drops and needless re-logins during active dashboard use.',
    ],
    tech: ['Next.js', 'MongoDB', 'JWT', 'Tailwind CSS', 'Vercel'],
    live: 'https://placement-tracker-azure.vercel.app/',
    github: 'https://github.com/JAIVARDHAN1402/Placement_Tracker',
    accent: 'from-cyan-500/25 via-sky-500/10 to-transparent',
  },
  {
    name: 'ProjectX',
    subtitle: 'Get Ideas From Experience',
    blurb:
      'A collaborative platform where builders share what they have shipped and spark the next idea — browse projects by category (AI/ML, IoT, Web Dev), submit your own, and discover work through search and filters.',
    points: [
      'Built on Next.js 15 and React 19 with TypeScript, backed by Sanity headless CMS and its embedded Studio dashboard for content management.',
      'Added NextAuth v5 authenticated accounts with personal project profiles, a rich markdown submission editor, and 3D card effects via Three.js.',
    ],
    tech: ['Next.js 15', 'TypeScript', 'Sanity CMS', 'NextAuth', 'Three.js', 'Tailwind CSS'],
    live: 'https://project-x-seven-drab.vercel.app',
    github: 'https://github.com/JAIVARDHAN1402/ProjectX---Get-Ideas-From-Experience',
    accent: 'from-emerald-500/25 via-teal-500/10 to-transparent',
  },
  {
    name: 'Shanti Valley',
    subtitle: 'Housing Society Website',
    blurb:
      'A responsive website for a residential housing society covering amenities, an interactive gallery, contact details and an online monthly maintenance payment flow.',
    points: [
      'Integrated Razorpay (test mode) for maintenance payments, with automatic receipt generation and PDF download via html2pdf.js.',
      'Hand-built in vanilla HTML, CSS and JavaScript — no framework — including a mobile hamburger nav, amenities grid and gallery controls.',
    ],
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Razorpay', 'html2pdf.js'],
    live: 'https://shantivalley.netlify.app/',
    github:
      'https://github.com/JAIVARDHAN1402/Shanti-Valley-Housing-Society-Website-Frontend-Only-',
    accent: 'from-amber-500/25 via-orange-500/10 to-transparent',
  },
]

/**
 * LeetCode stats are fetched live in the browser; `fallback` is used only when
 * the public API is unreachable. GFG has no CORS-friendly public API, so those
 * numbers are static — update them here after a big push.
 * Last synced: 8 Aug 2026.
 */
export const codingProfiles = {
  leetcode: {
    label: 'LeetCode',
    username: 'jaivardhan1402',
    url: 'https://leetcode.com/u/jaivardhan1402/',
    fallback: {
      totalSolved: 168,
      easySolved: 49,
      totalEasy: 958,
      mediumSolved: 106,
      totalMedium: 2095,
      hardSolved: 13,
      totalHard: 960,
      ranking: 998649,
    },
  },
  gfg: {
    label: 'GeeksforGeeks',
    username: 'jaivardhg7yd',
    url: 'https://www.geeksforgeeks.org/user/jaivardhg7yd/',
    codingScore: 156,
    problemsSolved: 43,
    instituteRank: 3196,
  },
}

export const achievements = [
  {
    icon: 'Trophy',
    title: '3rd Place — IEEE SENSE-A-Thon 2026',
    description:
      'Built a real-time Vehicle Health Monitoring System with multi-sensor integration, competing against 50+ engineering college teams.',
    link: 'https://www.linkedin.com/posts/jaivardhansingh14_hackathon-ieee-learning-ugcPost-7446815656844595200-Yc6z/',
    linkLabel: 'View LinkedIn post',
    image: '/certificates/ieee-sense-a-thon.png',
    imageAlt:
      'IEEE VIT Vellore Certificate of Appreciation awarded to Jaivardhan Singh for securing Third Position in SENSE-A-THON 2026',
  },
  {
    icon: 'Target',
    title: '200+ DSA Problems Solved',
    description:
      'Across LeetCode and GeeksforGeeks — covering Arrays, Graphs, Dynamic Programming and Trees, primarily in C++.',
  },
]

export const education = [
  {
    school: 'Vellore Institute of Technology, Vellore',
    detail: 'B.Tech in Computer Science and Engineering',
    score: 'CGPA 8.16 / 10.0',
    period: 'Aug 2023 – Present',
    place: 'Vellore, Tamil Nadu',
  },
  {
    school: 'Vidya Bharati Chinmaya Vidyalaya',
    detail: 'Class XII — CBSE',
    score: '80.0%',
    period: 'Apr 2021 – Mar 2023',
    place: 'Jamshedpur, Jharkhand',
  },
  {
    school: 'Gulmohur High School',
    detail: 'Class X — ICSE',
    score: '81.5%',
    period: 'Apr 2008 – Mar 2021',
    place: 'Jamshedpur, Jharkhand',
  },
]
