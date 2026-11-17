import { useState } from 'react';
import { FaMapMarkerAlt, FaCalendarAlt, FaLandmark } from 'react-icons/fa';
import sejarahData from '../data/sejarah.json';
import Card from '../components/Card/Card';
import Modal from '../components/Modal/Modal';
import styles from './TempatBersejarah.module.css';

const eraFilters = [
  'Semua',
  'Prasejarah',
  'Hindu-Buddha',
  'Islam',
  'Kolonial',
  'Kemerdekaan',
];

const TempatBersejarah = () => {
  const [activeFilter, setActiveFilter] = useState('Semua');
  const [selectedItem, setSelectedItem] = useState(null);

  const filteredData =
    activeFilter === 'Semua'
      ? sejarahData
      : sejarahData.filter((item) => item.era === activeFilter);

  return (
    <main className={styles.page}>
      <header className="page-header">
        <div className="container">
          <h1>Tempat Bersejarah</h1>
          <p>Menelusuri jejak peradaban dan warisan sejarah agung Nusantara</p>
          <div className="ornament-divider">
            <span>✦</span>
          </div>
        </div>
      </header>

      <section className="section">
        <div className="container">
          {/* Filter Bar */}
          <div className="filter-bar">
            {eraFilters.map((era) => (
              <button
                key={era}
                className={`filter-btn ${activeFilter === era ? 'active' : ''}`}
                onClick={() => setActiveFilter(era)}
              >
                {era}
              </button>
            ))}
          </div>

          {/* Grid Layout */}
          <div className="card-grid">
            {filteredData.map((item) => (
              <Card
                key={item.id}
                image={item.gambar}
                title={item.nama}
                subtitle={item.lokasi}
                description={item.deskripsi.substring(0, 100) + '...'}
                onClick={() => setSelectedItem(item)}
              >
                <div className={styles.metaRow}>
                  <span className={styles.eraBadge}>
                    <FaLandmark className={styles.badgeIcon} /> {item.era}
                  </span>
                  <span className={styles.yearBadge}>
                    <FaCalendarAlt className={styles.badgeIcon} /> {item.tahun}
                  </span>
                </div>
              </Card>
            ))}
          </div>

          {filteredData.length === 0 && (
            <div className={styles.emptyState}>
              <p>Belum ada data tempat bersejarah untuk era ini.</p>
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
              <h2 className={styles.modalTitle}>{selectedItem.nama}</h2>
              <div className={styles.modalLocation}>
                <FaMapMarkerAlt />
                <span>{selectedItem.lokasi}</span>
              </div>
              <div className={styles.modalMeta}>
                <span className={styles.eraBadge}>Era: {selectedItem.era}</span>
                <span className={styles.yearBadge}>Waktu: {selectedItem.tahun}</span>
              </div>
              <p className={styles.modalDescription}>{selectedItem.deskripsi}</p>
            </div>
          </div>
        </Modal>
      )}
    </main>
  );
};

export default TempatBersejarah;

