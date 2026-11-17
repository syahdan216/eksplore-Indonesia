import { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import styles from './ScrollToTop.module.css';

function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      className={`${styles.scrollBtn} ${visible ? styles.visible : ''}`}
      onClick={scrollToTop}
      aria-label="Kembali ke atas"
      title="Kembali ke atas"
    >
      <FaArrowUp />
    </button>
  );
}

export default ScrollToTop;
