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
          <button className={styles.primaryButton}>
            View My Work
            </button>
          <button className={styles.secondaryButton}>
            About Me
            </button>
        </div>

      </div>
      <section className={styles.about}>
        <h2>About Me</h2>
        
        <div className={styles.whoIAm}>
          <h3>Who I Am</h3>
          <p>I'm a Frontend Developer and future AI Engineer.
           I enjoy creating clean, modern and interactive websites.</p>

          <dl className={styles.personalInfo}>
            <dt>Name</dt>
            <dd>Shirin Skandari</dd>

            <dt>Age</dt>
            <dd>16</dd>

            <dt>Location</dt>
            <dd>Tehran, Iran</dd>

            <dt>Focus</dt>
            <dd>Frontend & AI</dd>
          </dl>
          
        </div>

      </section>
      
    </main>
  );
}