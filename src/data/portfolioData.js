export const profile = {
  name: 'Alisha Siddique',
  title: 'Full Stack Developer',
  tagline:
    'I build secure, scalable, and data-driven web applications with modern backend systems and intelligent features.',
  email: 'alishasiddique529@gmail.com',
  phone: '+92 347 7241156',
  location: 'Lahore, Pakistan',
  linkedin: 'https://www.linkedin.com/in/alisha-siddique',
  github: 'https://github.com/Alisha418',
}

export const about =
  'Backend-focused Full Stack Developer with experience in Django, PostgreSQL, REST APIs, and AI-powered applications. I enjoy designing reliable server-side architectures, building clean data pipelines, and delivering user-centered products that scale.'

export const skills = [
  {
    category: 'Frontend',
    items: ['React.js', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap'],
  },
  {
    category: 'Backend',
    items: ['Python', 'Django', 'REST APIs', 'C# (ASP.NET, WPF)', 'Java', 'PHP', 'C++ (OOP, DSA)'],
  },
  {
    category: 'AI/ML',
    items: [
      'LLM Fine-tuning',
      'Zero-shot/Few-shot Learning',
      'BLEU/ROUGE Metrics',
      'Data Preprocessing',
      'Machine Learning',
    ],
  },
  {
    category: 'Databases',
    items: ['PostgreSQL', 'MySQL', 'SQLite', 'SQL Server'],
  },
  {
    category: 'Tools',
    items: ['Git', 'GitHub', 'Postman', 'VS Code', 'Visual Studio', 'IntelliJ IDEA', 'Draw.io'],
  },
]

/** image: paths under `public/images` → served as `/images/...` */
export const projects = [
  {
    title: 'Packman (Spring Boot)',
    description:
      'A Spring Boot Pac-Man experience with AI-driven ghosts, single-player and multiplayer modes, hashed room-code sync, and a RESTful backend.',
    techStack: ['Java', 'Spring Boot', 'REST API', 'WebSockets / Sync'],
    github: 'https://github.com/Alisha418/Packman_springboot',
    demo: '',
    image: '/images/packman.jpg',
  },
  {
    title: 'SecureDoc — Encrypted Sharing & Verification',
    description:
      'Confidential document exchange with RSA-2048 encryption, DSA signatures, PBKDF2 password hashing, and AJAX-driven upload, share, and verify flows.',
    techStack: ['Flask', 'Python', 'SQLite', 'cryptography', 'HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/Alisha418/Digital-Signatue-System-',
    demo: '',
    image: '/images/digital.png',
  },
  {
    title: 'Apex Banking System',
    description:
      'Java console banking with JDBC and MySQL: admin governance, user CRUD, deposits and withdrawals with balance checks, Saving/Current accounts, and transaction audit logs.',
    techStack: ['Java', 'MySQL', 'JDBC', 'OOP'],
    github: 'https://github.com/Alisha418/Banking-Management-System',
    demo: '',
    image: '/images/banking.png',
  },
  {
    title: 'Gemini AI Clone',
    description:
      'Responsive Gemini-style chat UI with real-time responses via Google Gemini 1.5 Flash, Context API state, sidebar history, and polished loading states.',
    techStack: ['React', 'Vite', 'Google Generative AI', 'CSS'],
    github: 'https://github.com/Alisha418/Gemini-Clone',
    demo: '',
    image: '/images/gemini.jpg',
  },
  {
    title: 'Role-Based Learning Management System',
    description:
      'Centralized LMS with Admin, Teacher, and Student portals: courses, quizzes, enrollment, materials, and performance tracking on PHP and MySQL.',
    techStack: ['PHP', 'MySQL', 'Bootstrap', 'JavaScript'],
    github: 'https://github.com/Alisha418/Learning-Management-System',
    demo: '',
    image: '/images/lms.png',
  },
  {
    title: 'Django Tweet Hub',
    description:
      'Micro-blogging app with Django auth, tweet CRUD and search for registered users, image uploads, and public read access where appropriate.',
    techStack: ['Django', 'Python', 'Bootstrap', 'SQLite', 'PostgreSQL-ready'],
    github: 'https://github.com/Alisha418/tweet-project',
    demo: '',
    image: '/images/tweet.png',
  },
  {
    title: 'NeatNow — AI Urban Waste Management',
    description:
      'Multi-role waste reporting with citizen and worker apps, admin portal, AI validation, GPS assignment, and real-time status tracking.',
    techStack: ['Django', 'PostgreSQL', 'React', 'Flutter', 'AI validation'],
    github: 'https://github.com/Alisha418',
    demo: '',
    image: '',
  },
  {
    title: 'NLP Translation Framework',
    description:
      'Urdu ↔ English/Roman pipelines comparing fine-tuning vs zero-shot/few-shot; 100k+ sentences, BLEU/ROUGE evaluation across GPT and Gemini.',
    techStack: ['Python', 'NLP', 'BLEU/ROUGE', 'GPT', 'Gemini'],
    github: 'https://github.com/Alisha418',
    demo: '',
    image: '/images/NLP.jpg',
  },
]

export const experience = [
  {
    role: 'Data Engineering Intern',
    company: 'SkyCode Ltd, Lahore',
    period: '09/2023 - 03/2025',
    highlights: [
      'Analyzed and processed real-world datasets using Pandas, NumPy, and Matplotlib.',
      'Designed and managed SQL databases for structured storage and optimized querying.',
      'Automated preprocessing workflows to improve speed and consistency.',
      'Strengthened DSA and OOP foundations for scalable and maintainable solutions.',
    ],
  },
]
