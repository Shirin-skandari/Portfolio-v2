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
          <button>View My Work</button>
          <button>About Me</button>
        </div>

      </div>
      
    </main>
  );
}