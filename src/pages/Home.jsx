import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaMapMarkedAlt, FaTheaterMasks, FaUtensils, FaLightbulb, FaMap } from 'react-icons/fa';
import HeroSection from '../components/HeroSection/HeroSection';
import styles from './Home.module.css';

const fakta = [
  'Indonesia memiliki lebih dari 17.000 pulau yang tersebar dari Sabang sampai Merauke.',
  'Indonesia adalah negara kepulauan terbesar di dunia dengan garis pantai terpanjang kedua.',
  'Bahasa daerah di Indonesia mencapai lebih dari 700 bahasa, menjadikannya salah satu negara paling beragam secara linguistik.',
  'Candi Borobudur adalah candi Buddha terbesar di dunia dan menjadi Situs Warisan Dunia UNESCO.',
  'Komodo, kadal terbesar di dunia, hanya ditemukan secara alami di Indonesia.',
  'Indonesia memiliki hutan hujan tropis terbesar ketiga di dunia setelah Brasil dan Kongo.',
  'Rendang dari Sumatera Barat dinobatkan sebagai makanan terlezat di dunia oleh CNN.',
  'Indonesia memiliki lebih dari 300 suku bangsa dengan adat istiadat yang unik.',
  'Raja Ampat memiliki 75% spesies karang dunia, menjadikannya surga bawah laut.',
  'Batik Indonesia diakui UNESCO sebagai Warisan Budaya Tak Benda Kemanusiaan sejak 2009.',
];

const categories = [
  {
    icon: FaMapMarkedAlt,
    title: 'Destinasi Wisata',
    description: 'Temukan keindahan alam dan pesona wisata di berbagai penjuru Nusantara.',
    to: '/destinasi',
  },
  {
    icon: FaTheaterMasks,
    title: 'Budaya & Tradisi',
    description: 'Pelajari kekayaan budaya, seni, dan tradisi dari ratusan suku bangsa.',
    to: '/budaya',
  },
  {
    icon: FaUtensils,
    title: 'Kuliner Nusantara',
    description: 'Jelajahi cita rasa kuliner legendaris dari Sabang sampai Merauke.',
    to: '/kuliner',
  },
];

function getRandomIndex(excludeIndex, max) {
  let newIndex;
  do {
    newIndex = Math.floor(Math.random() * max);
  } while (newIndex === excludeIndex);
  return newIndex;
}

function Home() {
  const [faktaIndex, setFaktaIndex] = useState(() =>
    Math.floor(Math.random() * fakta.length)
  );

  const handleNewFact = () => {
    setFaktaIndex((prev) => getRandomIndex(prev, fakta.length));
  };

  return (
    <div className={styles.homePage}>
      {/* Hero Section */}
      <HeroSection />

      {/* Jelajahi Indonesia */}
      <section className={`${styles.exploreSection} section`}>
        <div className="container">
          <h2 className="section-title">Jelajahi Indonesia</h2>
          <div className="ornament-divider">
            <span>✦</span>
          </div>
          <p className="section-subtitle">
            Mulai petualanganmu menjelajahi keindahan Nusantara
          </p>

          <div className={styles.categoryGrid}>
            {categories.map((cat) => (
              <Link to={cat.to} key={cat.title} className={styles.categoryCard}>
                <div className={styles.categoryIconWrapper}>
                  <cat.icon className={styles.categoryIcon} />
                </div>
                <h3 className={styles.categoryTitle}>{cat.title}</h3>
                <p className={styles.categoryDesc}>{cat.description}</p>
                <span className={styles.categoryLink}>Selengkapnya →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Tahukah Kamu */}
      <section className={`${styles.faktaSection} section`}>
        <div className="container">
          <h2 className="section-title">Tahukah Kamu?</h2>
          <div className="ornament-divider">
            <span>✦</span>
          </div>

          <div className={styles.faktaCard}>
            <div className={styles.faktaIconWrapper}>
              <FaLightbulb className={styles.faktaIcon} />
            </div>
            <p className={styles.faktaText}>{fakta[faktaIndex]}</p>
            <button
              className={`btn btn-secondary ${styles.faktaButton}`}
              onClick={handleNewFact}
            >
              Fakta Lainnya
            </button>
          </div>
        </div>
      </section>

      {/* CTA Peta */}
      <section className={`${styles.ctaSection} section`}>
        <div className="container">
          <div className={styles.ctaContent}>
            <FaMap className={styles.ctaIcon} />
            <h2 className={styles.ctaTitle}>Jelajahi Lewat Peta</h2>
            <p className={styles.ctaText}>
              Temukan destinasi wisata, budaya, dan kuliner di seluruh Indonesia
              melalui peta interaktif kami. Klik, jelajahi, dan rencanakan
              petualanganmu!
            </p>
            <Link to="/peta" className={`btn btn-primary ${styles.ctaButton}`}>
              Buka Peta Interaktif
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
