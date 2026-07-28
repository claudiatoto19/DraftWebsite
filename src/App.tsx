import { useState, useEffect } from 'react'
import resumePdf from '../assets/Resume_Ryota-Theodora.pdf'
import mlAnalysisPdf from '../assets/ML_analysis.pdf'
import soccerTrendsPdf from '../assets/soccer_trends.pdf'
import co2EmissionsPdf from '../assets/CO2_emissions.pdf'

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Resume', href: '#resume' },
  { label: 'Work Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
]

const EDUCATION = [
  {
    degree: 'Master of Science — Data Analytics',
    school: 'McDaniel College',
    location: 'Westminster, MD',
    period: 'Aug 2023 – Aug 2025',
    detail: 'GPA: 3.8',
  },
  {
    degree: 'Bachelor of Science — Computer Science',
    school: 'University of Washington, Bothell',
    location: 'Bothell, WA',
    period: 'Sep 2021 – Jun 2023',
    detail: '',
  },
]

const SKILLS = [
  {
    category: 'Programming Languages',
    items: ['Python', 'R', 'SQL', 'Java', 'C++', 'JavaScript', 'TypeScript'],
  },
  {
    category: 'Data Science & Engineering',
    items: [
      'Regression', 'Classification', 'Clustering', 'Anomaly Detection',
      'Model Evaluation', 'Statistical Analysis', 'Hypothesis Testing', 'Forecasting',
      'Feature Engineering', 'ETL Pipelines', 'Automation', 'Data Quality',
      'Performance Optimization', 'Object-Oriented Programming (OOP)', 'Debugging',
      'Unit Testing', 'System Integration',
    ],
  },
  {
    category: 'Tools & Platforms',
    items: [
      'scikit-learn', 'TensorFlow', 'Power BI', 'Tableau', 'Excel',
      'PostgreSQL', 'NoSQL', 'Git', 'Linux', 'AWS', 'Azure',
    ],
  },
]

const WORK_EXPERIENCE = [
  {
    role: 'Quality Analyst',
    company: 'Providence Health & Services',
    location: 'Everett, WA',
    period: 'Feb 2025 – Present',
    bullets: [
      'Developed automated ETL pipelines and reporting workflows using Python and SQL, reducing manual analysis time by 50% while improving data reliability.',
      'Analyzed 10,000+ operational incident records using root-cause analysis and anomaly detection techniques to identify recurring system failures and performance bottlenecks, enabling long-term corrective actions.',
      'Improved workflow reliability by collaborating with engineering, operations, and leadership teams while maintaining scalable, reusable automation scripts that followed clean coding and maintainability best practices.',
    ],
  },
  {
    role: 'Data Analyst Intern',
    company: 'Kalbe Farma',
    location: 'Bekasi, Indonesia',
    period: 'Aug 2024 – Oct 2024',
    bullets: [
      'Developed an automated ETL process using Python and PostgreSQL to process 2,500+ daily records, optimizing data storage and retrieval efficiency.',
      'Built scalable SQL/Python data validation pipelines to process 3M+ records, improving anomaly detection, data integrity, and operational monitoring accuracy.',
      'Automated critical operational workflows using JavaScript and Power Automate, reducing manual intervention and improving the reliability of daily data operations.',
    ],
  },
  {
    role: 'Computer Science Lead Tutor',
    company: 'University of Washington, Bothell',
    location: 'Bothell, WA',
    period: 'Oct 2021 – Mar 2023',
    bullets: [
      'Led tutoring sessions in Data Structures, Algorithms, Object-Oriented Programming, and core Computer Science concepts using C++, Java, and Python, supporting 250+ students monthly through one-on-one mentoring and group instruction.',
      'Guided students in implementing algorithms and debugging software by teaching recursion, dynamic memory management, sorting/searching algorithms, inheritance, polymorphism, and time complexity analysis.',
      'Promoted clean coding standards and software development best practices through structured mentoring and code reviews, helping students improve code quality and debugging efficiency.',
    ],
  },
]

const PROJECTS = [
  {
    title: 'Comparative Analysis on Different Machine Learning Models',
    description:
      'Investigates the stock performance of Netflix (NFLX) using five machine learning models: Decision Trees, Random Forests, K-Nearest Neighbors (KNN), Gradient Boosting, and Support Vector Machines (SVM). The analysis provides insights into the effectiveness of these techniques in stock market prediction.',
    tags: ['Python', 'scikit-learn', 'Machine Learning', 'Finance'],
    pdfUrl: mlAnalysisPdf,
  },
  {
    title: 'Analyzing Trends in International Soccer Matches',
    description:
      'Explores historical match data focusing on win-loss ratios and goal-scoring patterns. Advanced statistical methods and machine learning algorithms were applied to identify shifts in regional dominance and the impact of in-game events, informing future predictions about the sport\'s competitive landscape.',
    tags: ['Python', 'Statistics', 'Machine Learning', 'Sports Analytics'],
    pdfUrl: soccerTrendsPdf,
  },
  {
    title: 'Carbon Dioxide Emissions Exploratory Data Analysis',
    description:
      'Explores CO₂ emissions globally, focusing on trends, country contributions, and the impact of key events like the COVID-19 pandemic. The findings underscore the critical importance of addressing climate change by reducing carbon emissions.',
    tags: ['Python', 'EDA', 'Data Visualization', 'Climate'],
    pdfUrl: co2EmissionsPdf,
  },
]

const INTERESTS = [
  { icon: '🥾', label: 'Hiking' },
  { icon: '📊', label: 'Data & Analytics' },
  { icon: '🤖', label: 'Machine Learning' },
  { icon: '📚', label: 'Continuous Learning' },
  { icon: '🌏', label: 'Traveling' },
  { icon: '🎮', label: 'Gaming' },
]

export default function App() {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('about')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40)
      const sections = ['about', 'resume', 'experience', 'projects']
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id)
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(id)
          break
        }
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="min-h-screen bg-white text-[#1a1a1a]" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>

      {/* ─── HEADER ─── */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm border-b border-[#E8EDF2]' : 'bg-transparent'
        }`}
      >
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-[#1E3A5F] font-semibold tracking-tight text-lg cursor-pointer bg-transparent border-0 p-0"
          >
            Ryota Theodora
          </button>
          <nav className="flex items-center gap-1">
            {NAV_LINKS.map((link) => {
              const id = link.href.replace('#', '')
              const isActive = activeSection === id
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors duration-150 ${
                    isActive
                      ? 'bg-[#1E3A5F] text-white'
                      : 'text-[#4A6A8A] hover:text-[#1E3A5F] hover:bg-[#EEF3F8]'
                  }`}
                >
                  {link.label}
                </a>
              )
            })}
          </nav>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 pt-24">

        {/* ─── ABOUT ─── */}
        <section id="about" className="py-20 border-b border-[#E8EDF2]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-xs uppercase tracking-widest text-[#4A6A8A] font-medium mb-4">About Me</p>
              <h1
                className="text-5xl leading-tight text-[#1E3A5F] mb-6"
                style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
              >
                Hi, I'm<br />Ryota Theodora.
              </h1>
              <p className="text-[#4A4A4A] text-base leading-relaxed mb-4">
                I'm a data analyst with a background in Computer Science and a Master's in
                Data Analytics. I specialize in ETL pipelines, machine learning, and turning complex data into
                actionable insights.
              </p>
              <p className="text-[#4A4A4A] text-base leading-relaxed mb-8">
                Currently working as a Quality Analyst at Providence Health & Services, where I build automated
                workflows and apply analytical methods to improve operational reliability and decision-making.
              </p>

              <div className="flex flex-wrap gap-3">
                <a
                  href="https://linkedin.com/in/ryotatheodora"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border-2 border-[#1E3A5F] text-[#1E3A5F] text-sm font-semibold hover:bg-[#1E3A5F] hover:text-white transition-colors duration-150"
                >
                  <LinkedInIcon />
                  LinkedIn
                </a>
                <a
                  href="mailto:ryotatheodora@gmail.com"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border-2 border-[#1E3A5F] text-[#1E3A5F] text-sm font-semibold hover:bg-[#1E3A5F] hover:text-white transition-colors duration-150"
                >
                  <EmailIcon />
                  Email Me
                </a>
              </div>
            </div>

            <div>
              <div className="w-full aspect-square rounded-2xl mb-8 overflow-hidden bg-[#D4E3F0]">
                <img
                  src="/assets/Headpic.jpg"
                  alt="Ryota Theodora"
                  className="h-full w-full object-cover"
                />
              </div>

              <p className="text-xs uppercase tracking-widest text-[#4A6A8A] font-medium mb-4">Interests</p>
              <div className="grid grid-cols-2 gap-2">
                {INTERESTS.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg bg-[#F4F7FB] text-sm text-[#1E3A5F] font-medium"
                  >
                    <span className="text-base">{item.icon}</span>
                    {item.label}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ─── RESUME ─── */}
        <section id="resume" className="py-20 border-b border-[#E8EDF2]">
          <p className="text-xs uppercase tracking-widest text-[#4A6A8A] font-medium mb-4">Resume</p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
            <h2
              className="text-4xl text-[#1E3A5F]"
              style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
            >
              Full Resume
            </h2>
            <a
              href={resumePdf}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 bg-[#1E3A5F] text-white text-sm font-semibold rounded-lg hover:bg-[#2A5082] transition-colors duration-150 self-start"
            >
              <DownloadIcon />
              Download PDF
            </a>
          </div>

          <div className="border border-[#E8EDF2] rounded-2xl overflow-hidden">
            {/* Header */}
            <div className="bg-[#1E3A5F] px-8 py-7">
              <h3 className="text-2xl font-bold text-white mb-1">Ryota Theodora</h3>
              <p className="text-[#9DB8D4] text-sm">Data Analyst & Software Engineer</p>
              <p className="text-[#9DB8D4] text-sm mt-1">yourname@email.com · linkedin.com/in/yourname · github.com/yourname</p>
            </div>

            <div className="p-8 space-y-8 bg-[#FAFBFD]">
              {/* Education */}
              <div>
                <p className="text-xs uppercase tracking-widest text-[#4A6A8A] font-semibold mb-4 pb-2 border-b border-[#E8EDF2]">
                  Education
                </p>
                <div className="space-y-4">
                  {EDUCATION.map((ed) => (
                    <div key={ed.degree} className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1">
                      <div>
                        <p className="font-semibold text-[#1a1a1a] text-sm">{ed.degree}</p>
                        <p className="text-sm text-[#4A6A8A]">{ed.school} · {ed.location}</p>
                        {ed.detail && <p className="text-sm text-[#1E3A5F] font-medium">{ed.detail}</p>}
                      </div>
                      <span className="text-xs text-[#4A6A8A] whitespace-nowrap pt-0.5">{ed.period}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Skills */}
              <div>
                <p className="text-xs uppercase tracking-widest text-[#4A6A8A] font-semibold mb-4 pb-2 border-b border-[#E8EDF2]">
                  Skills
                </p>
                <div className="space-y-4">
                  {SKILLS.map((group) => (
                    <div key={group.category}>
                      <p className="text-xs font-semibold text-[#1E3A5F] mb-2">{group.category}</p>
                      <div className="flex flex-wrap gap-1.5">
                        {group.items.map((skill) => (
                          <span
                            key={skill}
                            className="px-2.5 py-1 bg-[#EEF3F8] text-[#1E3A5F] text-xs font-medium rounded-full"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── WORK EXPERIENCE ─── */}
        <section id="experience" className="py-20 border-b border-[#E8EDF2]">
          <p className="text-xs uppercase tracking-widest text-[#4A6A8A] font-medium mb-4">Career</p>
          <h2
            className="text-4xl text-[#1E3A5F] mb-12"
            style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
          >
            Work Experience
          </h2>

          <div className="space-y-12">
            {WORK_EXPERIENCE.map((job, i) => (
              <div key={i} className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-6">
                <div className="md:pt-0.5">
                  <p className="text-xs font-semibold text-[#1E3A5F] uppercase tracking-wider mb-1">{job.period}</p>
                  <p className="text-xs text-[#4A6A8A]">{job.location}</p>
                </div>
                <div className="border-l-2 border-[#D4E3F0] pl-6">
                  <div className="flex items-center gap-2 mb-0.5">
                    <div className="w-2 h-2 rounded-full bg-[#1E3A5F] -ml-[29px] shrink-0" />
                    <h3 className="text-lg font-semibold text-[#1a1a1a]">{job.role}</h3>
                  </div>
                  <p className="text-sm font-medium text-[#4A6A8A] mb-4">{job.company}</p>
                  <ul className="space-y-2.5">
                    {job.bullets.map((b, j) => (
                      <li key={j} className="flex items-start gap-3 text-sm text-[#4A4A4A] leading-relaxed">
                        <span className="mt-2 w-1 h-1 rounded-full bg-[#1E3A5F] shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ─── PROJECTS ─── */}
        <section id="projects" className="py-20">
          <p className="text-xs uppercase tracking-widest text-[#4A6A8A] font-medium mb-4">Work</p>
          <h2
            className="text-4xl text-[#1E3A5F] mb-12"
            style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
          >
            Selected Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PROJECTS.map((project, i) => (
              <ProjectCard key={i} project={project} />
            ))}
          </div>
        </section>
      </main>

      {/* ─── FOOTER ─── */}
      <footer className="border-t border-[#E8EDF2] mt-8 py-8">
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-[#4A6A8A]">© 2025 Ryota Theodora. All rights reserved.</p>
          <div className="flex gap-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-[#4A6A8A] hover:text-[#1E3A5F] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  )
}

function ProjectCard({ project }: { project: typeof PROJECTS[number] }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      className={`group relative flex flex-col border rounded-2xl p-6 transition-all duration-200 ${
        hovered
          ? 'border-[#1E3A5F] shadow-lg -translate-y-0.5'
          : 'border-[#E8EDF2] shadow-sm'
      }`}
      style={{ boxShadow: hovered ? '0 8px 30px rgba(30,58,95,0.10)' : undefined }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="flex-1">
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tags.map((tag) => (
            <span key={tag} className="px-2 py-0.5 bg-[#EEF3F8] text-[#1E3A5F] text-xs font-medium rounded-full">
              {tag}
            </span>
          ))}
        </div>
        <h3 className="text-base font-semibold text-[#1a1a1a] mb-2 leading-snug">{project.title}</h3>
        <p className="text-sm text-[#4A4A4A] leading-relaxed mb-6">{project.description}</p>
      </div>

      <a
        href={project.pdfUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-sm font-semibold text-[#1E3A5F] hover:gap-3 transition-all duration-150"
      >
        <span>Learn More</span>
        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#1E3A5F] text-white">
          <ArrowIcon />
        </span>
      </a>
    </div>
  )
}

function LinkedInIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

function EmailIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
}

function DownloadIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" x2="12" y1="15" y2="3" />
    </svg>
  )
}

function ArrowIcon() {
  return (
    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  )
}
