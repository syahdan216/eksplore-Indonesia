import { useState } from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import wisataData from '../data/wisata.json';
import Card from '../components/Card/Card';
import Modal from '../components/Modal/Modal';
import styles from './DestinasiWisata.module.css';

const filterOptions = [
  'Semua',
  'Sumatera',
  'Jawa',
  'Kalimantan',
  'Sulawesi',
  'Bali & Nusa Tenggara',
  'Papua & Maluku',
];

const DestinasiWisata = () => {
  const [activeFilter, setActiveFilter] = useState('Semua');
  const [selectedItem, setSelectedItem] = useState(null);

  const filteredData =
    activeFilter === 'Semua'
      ? wisataData
      : wisataData.filter((item) => item.pulau === activeFilter);

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
          <h1>Destinasi Wisata</h1>
          <p>Jelajahi keindahan alam dan budaya Indonesia dari Sabang sampai Merauke</p>
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
                subtitle={item.provinsi}
                description={item.deskripsiSingkat}
                onClick={() => handleCardClick(item)}
              />
            ))}
          </div>

          {/* Empty State */}
          {filteredData.length === 0 && (
            <div className={styles.emptyState}>
              <p>Belum ada destinasi untuk wilayah ini.</p>
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
              <div className={styles.modalLocation}>
                <FaMapMarkerAlt className={styles.locationIcon} />
                <span>{selectedItem.provinsi}, {selectedItem.pulau}</span>
              </div>
              <p className={styles.modalDescription}>{selectedItem.deskripsi}</p>
              {selectedItem.tips && (
                <div className={styles.modalTips}>
                  <h4>💡 Tips Perjalanan</h4>
                  <p>{selectedItem.tips}</p>
                </div>
              )}
            </div>
          </div>
        </Modal>
      )}
    </main>
  );
};

export default DestinasiWisata;
