import { useState } from 'react';
import { FaMapMarkerAlt, FaTag, FaImage } from 'react-icons/fa';
import budayaData from '../data/budaya.json';
import Modal from '../components/Modal/Modal';
import styles from './BudayaTradisi.module.css';

const categories = [
  'Semua',
  'Tarian',
  'Pakaian Adat',
  'Alat Musik',
  'Upacara Adat',
  'Kerajinan',
];

const BudayaTradisi = () => {
  const [activeFilter, setActiveFilter] = useState('Semua');
  const [selectedItem, setSelectedItem] = useState(null);
  const [failedImages, setFailedImages] = useState({});

  const filteredData =
    activeFilter === 'Semua'
      ? budayaData
      : budayaData.filter((item) => item.kategori === activeFilter);

  const handleImageError = (id) => {
    setFailedImages((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <main className={styles.page}>
      <header className="page-header">
        <div className="container">
          <h1>Galeri Budaya & Tradisi</h1>
          <p>Kekayaan kearifan lokal, seni pertunjukan, dan mahakarya warisan leluhur</p>
          <div className="ornament-divider">
            <span>✦</span>
          </div>
        </div>
      </header>

      <section className="section">
        <div className="container">
          {/* Filter Bar */}
          <div className="filter-bar">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`filter-btn ${activeFilter === cat ? 'active' : ''}`}
                onClick={() => setActiveFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Masonry / Visual Gallery Grid */}
          <div className={styles.galleryGrid}>
            {filteredData.map((item) => (
              <div
                key={item.id}
                className={styles.galleryItem}
                onClick={() => setSelectedItem(item)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') setSelectedItem(item);
                }}
              >
                <div className={styles.imageWrapper}>
                  {!failedImages[item.id] ? (
                    <img
                      src={item.gambar}
                      alt={item.nama}
                      className={styles.image}
                      loading="lazy"
                      onError={() => handleImageError(item.id)}
                    />
                  ) : (
                    <div style={{
                      width: '100%',
                      height: '100%',
                      background: 'linear-gradient(135deg, #3E2723 0%, #5d3d2e 100%)',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--mustard-gold)'
                    }}>
                      <FaImage style={{ fontSize: '2.5rem', marginBottom: '8px' }} />
                      <span style={{ fontFamily: 'var(--font-heading)', color: '#fff' }}>{item.nama}</span>
                    </div>
                  )}
                  <div className={styles.overlay}>
                    <span className={styles.categoryBadge}>{item.kategori}</span>
                    <h3 className={styles.itemTitle}>{item.nama}</h3>
                    <p className={styles.itemOrigin}>
                      <FaMapMarkerAlt className={styles.icon} /> {item.asal}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredData.length === 0 && (
            <div className={styles.emptyState}>
              <p>Belum ada koleksi budaya untuk kategori ini.</p>
            </div>
          )}
        </div>
      </section>

      {/* Modal Detail */}
      {selectedItem && (
        <Modal onClose={() => setSelectedItem(null)}>
          <div className={styles.modalContent}>
            <div className={styles.modalImageWrapper}>
              <img
                src={selectedItem.gambar}
                alt={selectedItem.nama}
                className={styles.modalImage}
              />
            </div>
            <div className={styles.modalBody}>
              <div className={styles.modalHeaderRow}>
                <span className={styles.categoryBadge}>
                  <FaTag className={styles.icon} /> {selectedItem.kategori}
                </span>
                <span className={styles.modalOrigin}>
                  <FaMapMarkerAlt className={styles.icon} /> {selectedItem.asal}
                </span>
              </div>
              <h2 className={styles.modalTitle}>{selectedItem.nama}</h2>
              <p className={styles.modalDescription}>{selectedItem.deskripsi}</p>
            </div>
          </div>
        </Modal>
      )}
    </main>
  );
};

export default BudayaTradisi;
