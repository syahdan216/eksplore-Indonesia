import { Link } from 'react-router-dom';
import { FaInstagram, FaTwitter, FaYoutube, FaEnvelope } from 'react-icons/fa';
import styles from './Footer.module.css';

const quickLinks = [
  { to: '/', label: 'Beranda' },
  { to: '/destinasi', label: 'Destinasi' },
  { to: '/budaya', label: 'Budaya' },
  { to: '/kuliner', label: 'Kuliner' },
  { to: '/sejarah', label: 'Sejarah' },
  { to: '/peta', label: 'Peta' },
  { to: '/kuis', label: 'Kuis' },
];

const socialLinks = [
  { href: '#', icon: <FaInstagram />, label: 'Instagram' },
  { href: '#', icon: <FaTwitter />, label: 'Twitter' },
  { href: '#', icon: <FaYoutube />, label: 'YouTube' },
  { href: 'mailto:info@exploreindonesia.id', icon: <FaEnvelope />, label: 'Email' },
];

function Footer() {
  return (
    <footer className={styles.footer}>
      {/* Decorative batik-style ornament border */}
      <div className={styles.ornamentBorder}>
        <svg
          className={styles.ornamentSvg}
          viewBox="0 0 1200 40"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="batikPattern" x="0" y="0" width="60" height="40" patternUnits="userSpaceOnUse">
              {/* Central diamond */}
              <polygon points="30,4 42,20 30,36 18,20" fill="none" stroke="#E5A93B" strokeWidth="1.5" />
              {/* Inner diamond */}
              <polygon points="30,10 36,20 30,30 24,20" fill="none" stroke="#D45D34" strokeWidth="1" />
              {/* Center dot */}
              <circle cx="30" cy="20" r="2.5" fill="#E5A93B" />
              {/* Corner curls */}
              <circle cx="0" cy="20" r="3" fill="none" stroke="#E5A93B" strokeWidth="1" />
              <circle cx="60" cy="20" r="3" fill="none" stroke="#E5A93B" strokeWidth="1" />
              {/* Top and bottom petals */}
              <ellipse cx="30" cy="2" rx="5" ry="2" fill="none" stroke="#D45D34" strokeWidth="0.8" />
              <ellipse cx="30" cy="38" rx="5" ry="2" fill="none" stroke="#D45D34" strokeWidth="0.8" />
            </pattern>
          </defs>
          <rect width="1200" height="40" fill="url(#batikPattern)" />
          {/* Top gold line */}
          <line x1="0" y1="0" x2="1200" y2="0" stroke="#E5A93B" strokeWidth="2" />
          {/* Bottom gold line */}
          <line x1="0" y1="39" x2="1200" y2="39" stroke="#E5A93B" strokeWidth="1" />
        </svg>
      </div>

      <div className={styles.container}>
        <div className={styles.grid}>
          {/* About Column */}
          <div className={styles.column}>
            <h3 className={styles.columnTitle}>Explore Indonesia</h3>
            <p className={styles.aboutText}>
              Menjelajahi keindahan Nusantara dari Sabang sampai Merauke. 
              Temukan destinasi menakjubkan, budaya yang kaya, kuliner lezat, 
              dan sejarah yang membanggakan dari seluruh penjuru Indonesia.
            </p>
          </div>

          {/* Quick Links Column */}
          <div className={styles.column}>
            <h3 className={styles.columnTitle}>Tautan Cepat</h3>
            <ul className={styles.linkList}>
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className={styles.footerLink}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social Column */}
          <div className={styles.column}>
            <h3 className={styles.columnTitle}>Hubungi Kami</h3>
            <p className={styles.aboutText}>
              Punya pertanyaan atau saran? Jangan ragu untuk menghubungi kami 
              melalui media sosial atau email.
            </p>
            <div className={styles.socialLinks}>
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className={styles.socialIcon}
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className={styles.bottomBar}>
        <p className={styles.copyright}>
          © 2026 Explore Indonesia. Dibuat dengan ❤️ untuk Nusantara.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
