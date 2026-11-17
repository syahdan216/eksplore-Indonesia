import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes, FaSun, FaMoon } from 'react-icons/fa';
import { useTheme } from '../../context/ThemeContext';
import styles from './Navbar.module.css';

const navLinks = [
  { to: '/', label: 'Beranda' },
  { to: '/destinasi', label: 'Destinasi' },
  { to: '/budaya', label: 'Budaya' },
  { to: '/kuliner', label: 'Kuliner' },
  { to: '/sejarah', label: 'Sejarah' },
  { to: '/peta', label: 'Peta' },
  { to: '/kuis', label: 'Kuis' },
  { to: '/tentang', label: 'Tentang' },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <NavLink to="/" className={styles.logo} onClick={closeMenu}>
          Explore <span className={styles.logoAccent}>Indonesia</span>
        </NavLink>

        <div className={styles.rightActions}>
          <button
            className={styles.themeToggleBtn}
            onClick={toggleTheme}
            aria-label={isDark ? "Ganti ke mode terang" : "Ganti ke mode gelap"}
            title={isDark ? "Mode Terang" : "Mode Gelap"}
          >
            {isDark ? (
              <FaSun className={styles.sunIcon} />
            ) : (
              <FaMoon className={styles.moonIcon} />
            )}
          </button>

          <button
            className={styles.hamburger}
            onClick={toggleMenu}
            aria-label={menuOpen ? 'Tutup menu' : 'Buka menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        <ul className={`${styles.navLinks} ${menuOpen ? styles.navLinksOpen : ''}`}>
          {navLinks.map((link) => (
            <li key={link.to} className={styles.navItem}>
              <NavLink
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `${styles.navLink} ${isActive ? styles.navLinkActive : ''}`
                }
                onClick={closeMenu}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
