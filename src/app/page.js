"use client";

import { useState } from "react";
import styles from "./page.module.scss";

export default function Home() {
  const [selectedProject, setSelectedProject] = useState(null);

 const skills = {
    frontend: [
      { name: "HTML", level: 90 },
      { name: "CSS", level: 80 },
      { name: "JavaScript", level: 55 },
    ],

    programming: [
      { name: "Python", level: 75 },
    ],

    tools: [
      { name: "Git", level: 50 },
      { name: "GitHub", level: 60 },
      { name: "VS Code", level: 75 },
    ],
  };

  const achievements = [
    {
      title: "Personal Portfolio",
      description: "Built and launched my personal portfolio website.",
      year: "2026",
    },
    {
      title: "Python Course",
      description: "Completed a Python programming course.",
      year: "2025",
    },
    {
      title: "Top Student",
      description: "Achieved top rank in my English language class.",
      year: "2026",
    },
    {
      title: "English Progress",
      description: "Continuously improving my English toward B2.",
      year: "2026",
    },
  ];

  const projects = [
    {
      title: "Personal Portfolio",
      description:
        "A modern personal portfolio website built to showcase my skills and projects.",
      details:
      "A personal portfolio website designed and developed to showcase my skills, experience, achievements, and projects in a clean and modern interface.",
      features: [
        "Responsive design",
        "Modern UI",
        "Project showcase",
        "Skills and achievements sections",
      ],
      technologies: ["Next.js", "React", "SCSS"],
      live: "#",
      github: "#",
      type: "portfolio",
    },
    {
      title: "To-Do List",
      description:
        "A simple and interactive task management application.",
      details: "An interactive task management application that allows users to organize their daily tasks through a simple and clean interface.",
      features: [ "Add tasks",
         "Delete tasks", 
         "Interactive UI", 
        "Responsive design",
      ],
      technologies: ["HTML", "CSS", "JavaScript"],
      live: "#",
      github: "#",
      type: "todo",
    },
    {
      title: "Calculator",
      description:
        "A simple and responsive calculator application with a clean user interface.",
      details: "A responsive calculator built with JavaScript, featuring a clean interface and basic arithmetic operations.",
      features:
       [ "Basic arithmetic operations",
         "Responsive layout", 
         "Interactive buttons",
          "Clean UI", 
        ],
      technologies: ["HTML", "CSS", "JavaScript"],
      live: "#",
      github: "#",
      type: "calculator",
    },
  ];
  return (
    <main className={styles.home}>
      <div className={styles.hero}>
        <p className={styles.greeting}>Hi, I'm</p>
        <h1 className={styles.name}>Shirin Skandari</h1>
        <div className={styles.roles}>
          <p>Web Designer</p>
          <p>Frontend Developer</p>
        </div>
          
        
        <h2 className={styles.tagline}>
          Building ideas into reality
        </h2>
        <p className={styles.description}>
          I create clean, modern and interactive websites.
        </p>
        <div className={styles.homeButtons}>
          <a href="#projects" className={styles.primaryButton}>
            View My Work
            </a>
          <a href="#about" className={styles.secondaryButton}>
            About Me
            </a>
          <a href="#resume" className={styles.secondaryButton}>
            Resume
          </a>
        </div>

      </div>

      <section id="about" className={styles.about}>
      
        <h2 className={styles.sectionTitle}>About Me</h2>
        
        <div className={styles.whoIAm}>
          <h3>Who I Am</h3>
          <p>I'm a Frontend Developer and future AI Engineer.
           I enjoy creating clean, modern and interactive websites.</p>

          <dl className={styles.personalInfo}>
            <div className={styles.infoItem}>
              <dt>Name</dt>
              <dd>Shirin Skandari</dd>
            </div>

            <div className={styles.infoItem}>
              <dt>Age</dt>
              <dd>16</dd>
            </div>

            <div className={styles.infoItem}>
              <dt>Location</dt>
              <dd>Tehran, Iran</dd>
            </div>

            <div className={styles.infoItem}>
              <dt>Focus</dt>
              <dd>Frontend & AI</dd>
            </div>
          </dl>
        </div>

        <div className={styles.myStory}>
          <h3>My Story</h3>
          <p>
            I've always enjoyed creating things. For me, programming is more than writing code - it's a way to bring ideas to life, solve problems, and keep learning every day.
          </p>
        </div>

        <dl className={styles.myJourney}>
          <div className={styles.journeyItem}>
            <dt>2024</dt>
            <dd>
              <h4>Started Programming</h4>
              <p>My first step into programming and Python.</p>
            </dd>
          </div>
          <div className={styles.journeyItem}>
            <dt>2025</dt>
            <dd>
              <h4>Web Development</h4>
              <p>
                Learned HTML, CSS, and JavaScript through personal projects.
              </p>
            </dd>
          </div>  

          <div className={styles.journeyItem}>
            <dt>2026</dt>
            <dd>
              <h4>Frontend & AI</h4>
              <p>
                Building real projects, improving my English, and preparing for AI Engineering.
              </p>
            </dd>
          </div> 
        </dl>
      </section>


      <section id="resume" className={styles.resume}>
        <h2 className={styles.sectionTitle}>Resume</h2>

        <div className={styles.education}>
          <h3>Education</h3>
          
          <div className={styles.educationItem}>
            <span>2022 - Present</span>
            <div>
              <h4>High School Student</h4>
              <p>Software & Network Engineering</p>
              <p>GPA: 18.77 / 20</p>
              <p>Focus: Programming & Web Development</p>
            </div>
          </div>
        </div>

        <div className={styles.skills}>
          <h3>Skills</h3>

          <div className={styles.skillCategories}>
            <div className={styles.skillCategory}>
              <h4>Frontend</h4>

              <div className={styles.skillList}>
                {skills.frontend.map((skill) => (
                  <div className={styles.skillCard} key={skill.name}>
                    <div className={styles.skillHeader}>
                      <span>{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>

                    <div className={styles.skillBar}>
                      <div
                        className={styles.skillProgress}
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.skillCategory}>
              <h4>Programming</h4>

              <div className={styles.skillList}>
                {skills.programming.map((skill) => (
                  <div className={styles.skillCard} key={skill.name}>
                    <div className={styles.skillHeader}>
                      <span>{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>

                    <div className={styles.skillBar}>
                      <div
                        className={styles.skillProgress}
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.skillCategory}>
              <h4>Tools</h4>

              <div className={styles.skillList}>
                {skills.tools.map((skill) => (
                  <div className={styles.skillCard} key={skill.name}>
                    <div className={styles.skillHeader}>
                      <span>{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>

                    <div className={styles.skillBar}>
                      <div
                        className={styles.skillProgress}
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      <div className={styles.achievements}>
        <h3>Achievement</h3>

        <div className={styles.achievementList}>
          {achievements.map((achievement) => (
            <div className={styles.achievementItem} key={achievement.title}>
              <span>{achievement.year}</span>

              <div>
                <h4>{achievement.title}</h4>
                <p>{achievement.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      </section>

      <section id="projects" className={styles.projects}>
        <h2 className={styles.sectionTitle}>Projects</h2>

        <div className={styles.projectsGrid}>
          {projects.map((project) => (
           <article 
              className={styles.projectCard} 
              key={project.title}
              onClick={() => {
                setSelectedProject(project);
              }}
           > 
            <div className={styles.projectPreview}>
              <div className={styles.browserBar}>
                <span></span>
                <span></span>
                <span></span>
              </div>

              <div
                className={`${styles.previewScreen} ${styles[project.type]}`}
              >
                <span className={styles.previewLabel}>{project.title}</span>
              </div>
            </div>

            <div className={styles.projectContent}>
                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className={styles.technologies}>
                  {project.technologies.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>

                <div className={styles.projectButtons}>
                  <a href={project.live} className={styles.primaryButton}>
                    Live Demo
                  </a>

                  <a href={project.github} className={styles.secondaryButton}>
                    GitHub
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
      
      {selectedProject && (
        <div 
          className={styles.modalOverlay}
          onClick={() => setSelectedProject(null)}
        >
          <div 
          className={styles.modalContent}
          onClick={(e) => e.stopPropagation()}
          >
            <button 
            className={styles.modalClose}
            onClick={() => setSelectedProject(null)}
          >
            × 
            </button>
            <div 
              className={`${styles.modalPreview} ${styles[selectedProject.type]}`}
            >
              <span>{selectedProject.title}</span>
            </div>
            <div className={styles.modalInfo}>
              <h2>{selectedProject.title}</h2>

              <p>{selectedProject.details}</p>

              <div className={styles.modalTechnologies}>
                {selectedProject.technologies.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>

              <h3>Features</h3>

              <ul className={styles.modalFeatures}>
                {selectedProject.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>

              <div className={styles.modalButtons}>
                <a
                  href={selectedProject.live}
                  className={styles.primaryButton}
                >
                  Live Demo
                </a>

                <a 
                  hred={selectedProject.github}
                  className={styles.secondaryButton}
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}