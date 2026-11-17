import { Link } from 'react-router-dom';
import { FaChevronDown } from 'react-icons/fa';
import styles from './HeroSection.module.css';

const HeroSection = () => {
  return (
    <section className={styles.hero}>
      {/* Background image */}
      <div className={styles.bgImage} />
      <div className={styles.bgOverlay} />

      {/* Decorative batik-inspired ornaments */}
      <div className={styles.ornamentTopLeft} />
      <div className={styles.ornamentTopRight} />
      <div className={styles.ornamentBottomLeft} />
      <div className={styles.ornamentBottomRight} />

      {/* Content */}
      <div className={styles.content}>
        <div className={styles.ornamentDivider} />
        <h1 className={styles.heading}>
          Jelajahi Keindahan Nusantara
        </h1>
        <p className={styles.subtitle}>
          Temukan pesona wisata, budaya, kuliner, dan warisan sejarah Indonesia yang memukau
        </p>
        <div className={styles.cta}>
          <Link to="/peta" className={styles.btnPrimary}>
            Mulai Jelajahi
          </Link>
          <Link to="/destinasi" className={styles.btnSecondary}>
            Lihat Destinasi
          </Link>
        </div>
      </div>

      {/* Scroll-down indicator */}
      <div className={styles.scrollIndicator}>
        <span className={styles.scrollText}>Gulir ke bawah</span>
        <FaChevronDown className={styles.scrollChevron} />
      </div>
    </section>
  );
};

export default HeroSection;
