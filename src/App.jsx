import { useState } from 'react'
import heroImage from './assets/hero.png'
import './App.css'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Website',
      description: 'A fully functional e-commerce platform with product catalog, shopping cart, and checkout functionality',
      tags: ['React', 'JavaScript', 'CSS', 'Responsive Design'],
      link: '#'
    },
    {
      id: 2,
      title: 'Store Website',
      description: 'Modern store website showcasing products with intuitive UI and smooth navigation',
      tags: ['React', 'HTML/CSS', 'JavaScript'],
      link: '#'
    },
    {
      id: 3,
      title: 'Portfolio Website',
      description: 'Personal portfolio website displaying projects, skills, and professional information',
      tags: ['React', 'Vite', 'CSS', 'Responsive'],
      link: '#'
    },
    {
      id: 4,
      title: 'More Projects Coming Soon',
      description: 'Working on innovative solutions to solve real-world problems through engineering and technology',
      tags: ['React', 'JavaScript', 'Web Development'],
      link: '#'
    }
  ]

  const skills = [
    { category: 'Programming Languages', items: ['JavaScript', 'C Programming', 'HTML/CSS'] },
    { category: 'Frontend', items: ['React', 'CSS3', 'Responsive Design', 'Modern Frameworks'] },
    { category: 'Developer Tools', items: ['Git', 'GitHub', 'VS Code', 'Vite'] }
  ]

  return (
    <div className="portfolio">
      {/* Navigation */}
      <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-logo">
            <a href="#home">Portfolio</a>
          </div>
          <button 
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          <ul className={`nav-menu ${menuOpen ? 'active' : ''}`}>
            <li><a href="#home" onClick={() => setMenuOpen(false)}>Home</a></li>
            <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
            <li><a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a></li>
            <li><a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a></li>
            <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero-section">
        <div className="hero-content">
          <div className="hero-copy">
            <h1 className="hero-title">Hi, I'm <span className="gradient-text">Kaushik</span></h1>
            <p className="hero-subtitle">Engineering Student Turning Ideas Into Digital Solutions</p>
            <p className="hero-description">
              Passionate web developer and engineering student solving real-world problems through code.
              Experienced in modern frameworks like React, JavaScript, and creating responsive web applications.
            </p>
            <div className="hero-buttons">
              <a href="#projects" className="btn btn-primary">View My Work</a>
              <a href="#contact" className="btn btn-secondary">Get In Touch</a>
            </div>
            <div className="social-links">
            <a href="#" className="social-icon" title="GitHub">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a href="#" className="social-icon" title="LinkedIn">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.002 1.413-.103.249-.129.597-.129.946v5.446h-3.554s.048-8.836 0-9.754h3.554v1.391c.435-.671 1.213-1.627 2.946-1.627 2.152 0 3.767 1.406 3.767 4.431v5.559zM5.337 8.855c-1.144 0-1.915-.758-1.915-1.706 0-.956.768-1.71 1.958-1.71 1.188 0 1.913.754 1.937 1.71 0 .948-.749 1.706-1.98 1.706zm1.581 11.597H3.715V9.505h3.203v10.947zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
              </svg>
            </a>
            <a href="#" className="social-icon" title="Twitter">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-7a10.6 10.6 0 01-9-5.5z"/>
              </svg>
            </a>
            </div>
          </div>
          <div className="hero-image-card">
            <div className="img-frame">
              <img src={heroImage} alt="Profile" className="profile-img" />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            <div className="about-text">
              <p>
                I'm an engineering student with a strong passion for web development and programming. 
                I have a science background (SSC 71%) and am currently pursuing my diploma in engineering.
              </p>
              <p>
                I'm dedicated to learning modern frameworks like React and exploring the latest in web technology. 
                My goal is to solve real-world problems through innovative engineering solutions and create impactful digital products.
              </p>
              <p>
                I'm always eager to work on new projects, collaborate with others, and continuously improve my skills 
                in web development, programming, and technology.
              </p>
            </div>
            <div className="about-stats">
              <div className="stat">
                <h3>3+</h3>
                <p>Projects</p>
              </div>
              <div className="stat">
                <h3>5+</h3>
                <p>Skills</p>
              </div>
              <div className="stat">
                <h3>71%</h3>
                <p>SSC %</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects-section">
        <div className="container">
          <h2 className="section-title">Featured Projects</h2>
          <div className="projects-grid">
            {projects.map(project => (
              <div key={project.id} className="project-card">
                <div className="project-header">
                  <h3>{project.title}</h3>
                </div>
                <p className="project-description">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="tag">{tag}</span>
                  ))}
                </div>
                <a href={project.link} className="project-link">View Project →</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills-section">
        <div className="container">
          <h2 className="section-title">Skills & Technologies</h2>
          <div className="skills-grid">
            {skills.map((skillGroup, idx) => (
              <div key={idx} className="skill-group">
                <h3>{skillGroup.category}</h3>
                <div className="skill-items">
                  {skillGroup.items.map((skill, sidx) => (
                    <div key={sidx} className="skill-item">{skill}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="container">
          <h2 className="section-title">Get In Touch</h2>
          <p className="contact-subtitle">Let's collaborate and build something amazing together!</p>
          <div className="contact-content">
            <div className="contact-info">
              <div className="info-item">
                <h4>Email</h4>
                <a href="mailto:your-email@example.com">your-email@example.com</a>
              </div>
              <div className="info-item">
                <h4>GitHub</h4>
                <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer">github.com/your-username</a>
              </div>
              <div className="info-item">
                <h4>Phone</h4>
                <a href="tel:+919876543210">+91 98765 43210</a>
              </div>
            </div>
            <a href="mailto:your-email@example.com" className="btn btn-primary">Send Me an Email</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2024 Kaushik. All rights reserved.</p>
          <div className="footer-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
