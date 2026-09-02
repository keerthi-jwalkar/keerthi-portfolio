import { useState, useEffect } from 'react'

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { href: '#about', label: 'About' },
    { href: '#experience', label: 'Experience' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="container">
        <a href="#about" className="nav-logo">
          KJ<span>.</span>
        </a>

        <div className={`nav-links${menuOpen ? ' open' : ''}`}>
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </a>
          ))}
        </div>

        <button
          className="mobile-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <i className={`fas ${menuOpen ? 'fa-xmark' : 'fa-bars'}`} />
        </button>
      </div>
    </nav>
  )
}

function Hero() {
  return (
    <section id="about" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1>
              Hi, I'm <span className="highlight">Keerthi Jwalkar</span>
            </h1>

            <p className="tagline">
              Computer Science Engineering Student | Web Developer
            </p>

            <p className="location">
              <i className="fas fa-map-pin" style={{ marginRight: 6 }} />
              Koderma, Jharkhand
            </p>

            <p>
              Computer Science Engineering student and aspiring Web Developer
              with hands-on experience in Python, Django, Java, JavaScript,
              HTML, CSS and MySQL. I enjoy building practical web applications,
              solving problems and continuously learning new technologies
              through real-world projects.
            </p>

            <div className="hero-actions">
              <a href="#contact" className="btn btn-primary">
                <i className="fas fa-paper-plane" />
                Get in Touch
              </a>

              <a href="#projects" className="btn btn-secondary">
                <i className="fas fa-code" />
                View Projects
              </a>
            </div>

            <div className="social-links">
              <a
                href="https://github.com/keerthi-jwalkar"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <i className="fab fa-github" />
              </a>

              <a
                href="https://www.linkedin.com/in/keerthi-jwalkar-8444312b2/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <i className="fab fa-linkedin-in" />
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="avatar-frame">
              <div className="avatar-placeholder">
                <span>KJ</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const experienceData = [
  {
    role: 'Python Intern',
    company: 'Bright Code Software Services Pvt. Ltd.',
    date: 'May 2026 — Jul 2026',
    points: [
      'Worked on Python-based development and practical programming tasks during the internship.',
      'Gained hands-on experience in developing and working with Python applications.',
      'Improved programming and problem-solving skills through practical projects and assignments.',
    ],
  },
  {
    role: 'Java Intern',
    company: 'Bright Code Software Services Pvt. Ltd.',
    date: 'Jun 2025 — Jul 2025',
    points: [
      'Worked on Java programming and application development during the internship.',
      'Gained practical experience with Java, database connectivity and web application concepts.',
      'Worked on programming tasks and improved understanding of software development practices.',
    ],
  },
]

function Experience() {
  return (
    <section id="experience">
      <div className="container">
        <span className="section-label">Career</span>

        <h2 className="section-title">Experience</h2>

        <p className="section-subtitle">
          My internship experience and practical learning journey.
        </p>

        <div className="timeline">
          {experienceData.map((item, i) => (
            <div className="timeline-item" key={i}>
              <div className="timeline-dot" />

              <div className="timeline-header">
                <div>
                  <span className="timeline-role">{item.role}</span>
                  <span className="timeline-company">
                    {' '}
                    &middot; {item.company}
                  </span>
                </div>

                <span className="timeline-date">{item.date}</span>
              </div>

              <div className="timeline-desc">
                <ul>
                  {item.points.map((pt, j) => (
                    <li key={j}>{pt}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const skillCategories = [
  {
    icon: 'fa-code',
    title: 'Programming',
    skills: ['Python', 'Java', 'JavaScript'],
  },
  {
    icon: 'fa-laptop-code',
    title: 'Web Development',
    skills: ['HTML', 'CSS', 'JavaScript', 'Django'],
  },
  {
    icon: 'fa-database',
    title: 'Database',
    skills: ['MySQL'],
  },
  {
    icon: 'fa-screwdriver-wrench',
    title: 'Tools',
    skills: ['VS Code', 'Eclipse', 'Git', 'GitHub', 'XAMPP'],
  },
]

function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <span className="section-label">Expertise</span>

        <h2 className="section-title">Skills & Tools</h2>

        <p className="section-subtitle">
          Technologies and tools I use for learning and building practical
          projects.
        </p>

        <div className="skills-grid">
          {skillCategories.map((cat, i) => (
            <div className="skill-category" key={i}>
              <h3>
                <i className={`fas ${cat.icon}`} />
                {cat.title}
              </h3>

              <div className="skill-tags">
                {cat.skills.map((s) => (
                  <span className="skill-tag" key={s}>
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const projectsData = [
  {
    icon: 'fa-building',
    title: 'Village Portal',
    desc: 'A digital village management platform designed to connect villagers, panchayat administration and local shop owners. The system includes complaint management, government schemes, marketplace, directory, jobs and emergency contact features.',
    tech: ['Python', 'Django', 'HTML', 'CSS', 'Bootstrap', 'MySQL'],
    live: '#',
    code: 'https://github.com/keerthi-jwalkar',
  },
  {
    icon: 'fa-plane',
    title: 'Tour and Travel Management System',
    desc: 'A web-based tour and travel management system developed to manage user registration, login, travel ticket booking, contact requests and administrative activities.',
    tech: ['Java', 'JSP', 'MySQL', 'Eclipse'],
    live: '#',
    code: 'https://github.com/keerthi-jwalkar',
  },
  {
    icon: 'fa-user',
    title: 'Personal Portfolio',
    desc: 'A responsive personal portfolio website currently being developed using React and Vite to showcase my education, technical skills, internship experience, projects and professional profile.',
    tech: ['React', 'Vite', 'JavaScript', 'CSS'],
    live: '#',
    code: 'https://github.com/keerthi-jwalkar',
  },
]

function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <span className="section-label">Work</span>

        <h2 className="section-title">Featured Projects</h2>

        <p className="section-subtitle">
          A selection of projects I have built while learning and developing
          my technical skills.
        </p>

        <div className="projects-grid">
          {projectsData.map((proj, i) => (
            <div className="project-card" key={i}>
              <div className="project-icon">
                <i className={`fas ${proj.icon}`} />
              </div>

              <h3>{proj.title}</h3>

              <p>{proj.desc}</p>

              <div className="project-tech">
                {proj.tech.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>

              <div className="project-links">
                <a
                  href={proj.live}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fas fa-external-link-alt" /> Live Demo
                </a>

                <a
                  href={proj.code}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-github" /> Source
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const validate = () => {
    const errs = {}

    if (!form.name.trim()) {
      errs.name = 'Name is required'
    }

    if (!form.email.trim()) {
      errs.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      errs.email = 'Please enter a valid email'
    }

    if (!form.message.trim()) {
      errs.message = 'Message is required'
    } else if (form.message.trim().length < 10) {
      errs.message = 'Message must be at least 10 characters'
    }

    return errs
  }

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })

    if (errors[e.target.name]) {
      setErrors({
        ...errors,
        [e.target.name]: '',
      })
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const errs = validate()

    if (Object.keys(errs).length) {
      setErrors(errs)
      return
    }

    setSubmitted(true)

    setForm({
      name: '',
      email: '',
      message: '',
    })
  }

  return (
    <section id="contact">
      <div className="container">
        <span className="section-label">Connect</span>

        <h2 className="section-title">Get in Touch</h2>

        <p className="section-subtitle">
          Whether you have a project in mind, a job opportunity, or just want
          to say hi — I&rsquo;d love to hear from you.
        </p>

        <div className="contact-grid">
          <div className="contact-info">
            <h3>Let&rsquo;s work together</h3>

            <p>
              I&rsquo;m currently building my skills through practical
              projects and looking forward to opportunities where I can learn,
              contribute and grow as a developer.
            </p>

            <div className="contact-methods">
              <div className="contact-method">
                <i className="fas fa-envelope" />

                <div>
                  <span className="label">Email</span>
                  <span className="value">keerthijwalkar@gmail.com</span>
                </div>
              </div>

              <div className="contact-method">
                <i className="fas fa-phone" />

                <div>
                  <span className="label">Phone</span>
                  <span className="value">6207715404</span>
                </div>
              </div>

              <div className="contact-method">
                <i className="fas fa-location-dot" />

                <div>
                  <span className="label">Location</span>
                  <span className="value">Koderma, Jharkhand</span>
                </div>
              </div>
            </div>
          </div>

          <form
            className="contact-form"
            onSubmit={handleSubmit}
            noValidate
          >
            {submitted ? (
              <div className="form-success">
                <i
                  className="fas fa-check-circle"
                  style={{ marginRight: 8 }}
                />
                Thanks! I&rsquo;ll get back to you soon.
              </div>
            ) : (
              <>
                <div className="form-group">
                  <label htmlFor="name">Name</label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    value={form.name}
                    onChange={handleChange}
                    className={errors.name ? 'error' : ''}
                  />

                  {errors.name && (
                    <p className="form-error">{errors.name}</p>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email</label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={handleChange}
                    className={errors.email ? 'error' : ''}
                  />

                  {errors.email && (
                    <p className="form-error">{errors.email}</p>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>

                  <textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your project..."
                    value={form.message}
                    onChange={handleChange}
                    className={errors.message ? 'error' : ''}
                  />

                  {errors.message && (
                    <p className="form-error">{errors.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  className="btn btn-primary btn-submit"
                >
                  <i className="fas fa-paper-plane" />
                  Send Message
                </button>
              </>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="social-links">
          <a
            href="https://github.com/keerthi-jwalkar"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <i className="fab fa-github" />
          </a>

          <a
            href="https://www.linkedin.com/in/keerthi-jwalkar-8444312b2/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <i className="fab fa-linkedin-in" />
          </a>
        </div>

        <p>
          &copy; {new Date().getFullYear()} Keerthi Jwalkar. Built with React
          &amp; Vite.
        </p>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </>
  )
}