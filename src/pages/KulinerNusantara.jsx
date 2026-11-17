import { useState } from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import kulinerData from '../data/kuliner.json';
import Card from '../components/Card/Card';
import Modal from '../components/Modal/Modal';
import styles from './KulinerNusantara.module.css';

const filterOptions = [
  'Semua',
  'Sumatera',
  'Jawa',
  'Kalimantan',
  'Sulawesi',
  'Bali & Nusa Tenggara',
  'Papua & Maluku',
];

const KulinerNusantara = () => {
  const [activeFilter, setActiveFilter] = useState('Semua');
  const [selectedItem, setSelectedItem] = useState(null);

  const filteredData =
    activeFilter === 'Semua'
      ? kulinerData
      : kulinerData.filter((item) => item.pulau === activeFilter);

  const handleCardClick = (item) => {
    setSelectedItem(item);
  };

  const handleCloseModal = () => {
    setSelectedItem(null);
  };

  return (
    <main className={styles.page}>
      {/* Page Header */}
      <header className="page-header">
        <div className="container">
          <h1>Kuliner Nusantara</h1>
          <p>Nikmati cita rasa autentik dari berbagai penjuru Nusantara</p>
          <div className="ornament-divider">
            <span>✦</span>
          </div>
        </div>
      </header>

      {/* Content */}
      <section className="section">
        <div className="container">
          {/* Filter Bar */}
          <div className="filter-bar">
            {filterOptions.map((filter) => (
              <button
                key={filter}
                className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Card Grid */}
          <div className="card-grid">
            {filteredData.map((item) => (
              <Card
                key={item.id}
                image={item.gambar}
                title={item.nama}
                subtitle={item.asal}
                description={item.deskripsi.substring(0, 100) + '...'}
                onClick={() => handleCardClick(item)}
              >
                {/* Tags as badges */}
                <div className={styles.tagsContainer}>
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`badge badge-${tag.toLowerCase()}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </div>

          {/* Empty State */}
          {filteredData.length === 0 && (
            <div className={styles.emptyState}>
              <p>Belum ada kuliner untuk wilayah ini.</p>
            </div>
          )}
        </div>
      </section>

      {/* Modal */}
      {selectedItem && (
        <Modal onClose={handleCloseModal}>
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
              <div className={styles.modalOrigin}>
                <FaMapMarkerAlt className={styles.originIcon} />
                <span>{selectedItem.asal}</span>
              </div>
              <div className={styles.modalTags}>
                {selectedItem.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`badge badge-${tag.toLowerCase()}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <p className={styles.modalDescription}>{selectedItem.deskripsi}</p>
            </div>
          </div>
        </Modal>
      )}
    </main>
  );
};

export default KulinerNusantara;
