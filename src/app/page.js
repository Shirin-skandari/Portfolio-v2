import styles from "./page.module.scss";

export default function Home() {
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
                Building real projects, improving my English, and preparing for AI Engineering
              </p>
            </dd>
          </div> 
        </dl>
      </section>
      
    </main>
  );
}