import { useState, useMemo } from 'react';
import {
  FaMapMarkerAlt,
  FaTheaterMasks,
  FaUtensils,
  FaCompass,
  FaInfoCircle,
  FaSearch,
  FaGlobeAsia,
  FaLandmark
} from 'react-icons/fa';
import provinsiData from '../data/provinsi.json';
import styles from './PetaInteraktif.module.css';

const islands = [
  { id: 'Sumatera', name: 'Sumatera', pinX: 165, pinY: 185 },
  { id: 'Jawa', name: 'Jawa', pinX: 345, pinY: 345 },
  { id: 'Kalimantan', name: 'Kalimantan', pinX: 395, pinY: 195 },
  { id: 'Sulawesi', name: 'Sulawesi', pinX: 535, pinY: 220 },
  { id: 'Bali & Nusa Tenggara', name: 'Bali & Nusa Tenggara', pinX: 555, pinY: 360 },
  { id: 'Papua & Maluku', name: 'Papua & Maluku', pinX: 770, pinY: 250 },
];

const PetaInteraktif = () => {
  const [selectedRegion, setSelectedRegion] = useState('Jawa');
  const [selectedProvince, setSelectedProvince] = useState(
    provinsiData.find((p) => p.pulau === 'Jawa') || provinsiData[0]
  );
  const [hoveredRegion, setHoveredRegion] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  // Filtered provinces by region or search query
  const filteredProvinces = useMemo(() => {
    if (searchQuery.trim()) {
      return provinsiData.filter((p) =>
        p.nama.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.pulau.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.wisata.some(w => w.toLowerCase().includes(searchQuery.toLowerCase())) ||
        p.kuliner.some(k => k.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }
    return provinsiData.filter((p) => p.pulau === selectedRegion);
  }, [searchQuery, selectedRegion]);

  const handleSelectRegion = (regionName) => {
    setSearchQuery('');
    setSelectedRegion(regionName);
    const firstProv = provinsiData.find((p) => p.pulau === regionName);
    if (firstProv) {
      setSelectedProvince(firstProv);
    }
  };

  const handleSelectProvince = (prov) => {
    setSelectedProvince(prov);
    setSelectedRegion(prov.pulau);
  };

  return (
    <main className={styles.page}>
      <header className="page-header">
        <div className="container">
          <h1>Peta Interaktif Indonesia</h1>
          <p>Eksplorasi ragam kekayaan daerah dari Sabang sampai Merauke</p>
          <div className="ornament-divider">
            <span>✦</span>
          </div>
        </div>
      </header>

      {/* Stats Quick Bar */}
      <section className={styles.statsBar}>
        <div className="container">
          <div className={styles.statsGrid}>
            <div className={styles.statItem}>
              <FaGlobeAsia className={styles.statIcon} />
              <div>
                <strong className={styles.statValue}>17.508</strong>
                <span className={styles.statLabel}>Pulau Tropis</span>
              </div>
            </div>
            <div className={styles.statItem}>
              <FaCompass className={styles.statIcon} />
              <div>
                <strong className={styles.statValue}>38</strong>
                <span className={styles.statLabel}>Provinsi Nusantara</span>
              </div>
            </div>
            <div className={styles.statItem}>
              <FaTheaterMasks className={styles.statIcon} />
              <div>
                <strong className={styles.statValue}>700+</strong>
                <span className={styles.statLabel}>Bahasa Daerah</span>
              </div>
            </div>
            <div className={styles.statItem}>
              <FaLandmark className={styles.statIcon} />
              <div>
                <strong className={styles.statValue}>300+</strong>
                <span className={styles.statLabel}>Kelompok Etnis</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.interactiveContainer}>
            {/* Map Visual Box */}
            <div className={styles.mapSection}>
              <div className={styles.mapHeader}>
                <div className={styles.mapBadge}>
                  <FaCompass /> Peta Jelajah Nusantara
                </div>
                <p className={styles.mapInstruction}>
                  Arahkan kursor atau klik kepulauan pada peta untuk menjelajahi keunikan budaya lokal
                </p>
              </div>

              {/* Search Box */}
              <div className={styles.searchWrapper}>
                <FaSearch className={styles.searchIcon} />
                <input
                  type="text"
                  placeholder="Cari nama provinsi, wisata, atau kuliner..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className={styles.searchInput}
                />
                {searchQuery && (
                  <button
                    className={styles.clearSearchBtn}
                    onClick={() => setSearchQuery('')}
                    aria-label="Bersihkan pencarian"
                  >
                    ✕
                  </button>
                )}
              </div>

              {/* Stylized SVG Archipelago Map */}
              <div className={styles.svgMapWrapper}>
                <svg
                  viewBox="0 0 900 420"
                  className={styles.archipelagoSvg}
                  role="img"
                  aria-label="Peta Interaktif Kepulauan Indonesia"
                >
                  <defs>
                    <pattern id="vintageGrid" width="36" height="36" patternUnits="userSpaceOnUse">
                      <path d="M 36 0 L 0 0 0 36" fill="none" stroke="rgba(229, 169, 59, 0.12)" strokeWidth="1" />
                    </pattern>
                    <radialGradient id="oceanGlow" cx="50%" cy="50%" r="60%">
                      <stop offset="0%" stopColor="#f7f3e8" />
                      <stop offset="100%" stopColor="#ede5d2" />
                    </radialGradient>
                  </defs>

                  {/* Ocean Canvas */}
                  <rect width="900" height="420" fill="url(#oceanGlow)" />
                  <rect width="900" height="420" fill="url(#vintageGrid)" />

                  {/* Ocean Coordinates / Compass Rose */}
                  <g opacity="0.45" transform="translate(830, 65)">
                    <circle cx="0" cy="0" r="28" fill="none" stroke="var(--mustard-gold)" strokeWidth="1" />
                    <line x1="0" y1="-34" x2="0" y2="34" stroke="var(--mustard-gold)" strokeWidth="1.5" />
                    <line x1="-34" y1="0" x2="34" y2="0" stroke="var(--mustard-gold)" strokeWidth="1.5" />
                    <text x="0" y="-38" textAnchor="middle" fontSize="12" fill="var(--dark-chocolate)" fontWeight="bold">U</text>
                  </g>

                  {/* Sumatera */}
                  <g
                    className={`${styles.islandGroup} ${selectedRegion === 'Sumatera' ? styles.activeIsland : ''}`}
                    onClick={() => handleSelectRegion('Sumatera')}
                    onMouseEnter={() => setHoveredRegion('Sumatera')}
                    onMouseLeave={() => setHoveredRegion(null)}
                  >
                    <path
                      d="M 80,60 L 140,110 L 220,230 L 250,290 L 220,310 L 170,270 L 120,180 L 70,110 Z"
                      className={styles.islandPath}
                    />
                    <text x="145" y="190" className={styles.islandText}>SUMATERA</text>
                  </g>

                  {/* Jawa */}
                  <g
                    className={`${styles.islandGroup} ${selectedRegion === 'Jawa' ? styles.activeIsland : ''}`}
                    onClick={() => handleSelectRegion('Jawa')}
                    onMouseEnter={() => setHoveredRegion('Jawa')}
                    onMouseLeave={() => setHoveredRegion(null)}
                  >
                    <path
                      d="M 240,335 L 350,330 L 440,340 L 460,355 L 430,365 L 330,360 L 230,350 Z"
                      className={styles.islandPath}
                    />
                    <text x="340" y="352" className={styles.islandText}>JAWA</text>
                  </g>

                  {/* Kalimantan */}
                  <g
                    className={`${styles.islandGroup} ${selectedRegion === 'Kalimantan' ? styles.activeIsland : ''}`}
                    onClick={() => handleSelectRegion('Kalimantan')}
                    onMouseEnter={() => setHoveredRegion('Kalimantan')}
                    onMouseLeave={() => setHoveredRegion(null)}
                  >
                    <path
                      d="M 330,130 L 420,120 L 470,160 L 460,250 L 370,270 L 320,220 L 310,160 Z"
                      className={styles.islandPath}
                    />
                    <text x="390" y="200" className={styles.islandText}>KALIMANTAN</text>
                  </g>

                  {/* Sulawesi */}
                  <g
                    className={`${styles.islandGroup} ${selectedRegion === 'Sulawesi' ? styles.activeIsland : ''}`}
                    onClick={() => handleSelectRegion('Sulawesi')}
                    onMouseEnter={() => setHoveredRegion('Sulawesi')}
                    onMouseLeave={() => setHoveredRegion(null)}
                  >
                    <path
                      d="M 500,160 L 550,140 L 560,180 L 530,210 L 560,240 L 530,300 L 505,270 L 515,220 L 485,210 Z"
                      className={styles.islandPath}
                    />
                    <text x="535" y="225" className={styles.islandText}>SULAWESI</text>
                  </g>

                  {/* Bali & Nusa Tenggara */}
                  <g
                    className={`${styles.islandGroup} ${selectedRegion === 'Bali & Nusa Tenggara' ? styles.activeIsland : ''}`}
                    onClick={() => handleSelectRegion('Bali & Nusa Tenggara')}
                    onMouseEnter={() => setHoveredRegion('Bali & Nusa Tenggara')}
                    onMouseLeave={() => setHoveredRegion(null)}
                  >
                    <ellipse cx="485" cy="355" rx="14" ry="8" className={styles.islandPath} />
                    <ellipse cx="525" cy="358" rx="20" ry="8" className={styles.islandPath} />
                    <ellipse cx="575" cy="360" rx="24" ry="9" className={styles.islandPath} />
                    <ellipse cx="630" cy="362" rx="26" ry="10" className={styles.islandPath} />
                    <text x="555" y="380" className={styles.islandText}>BALI & NUSA TENGGARA</text>
                  </g>

                  {/* Papua & Maluku */}
                  <g
                    className={`${styles.islandGroup} ${selectedRegion === 'Papua & Maluku' ? styles.activeIsland : ''}`}
                    onClick={() => handleSelectRegion('Papua & Maluku')}
                    onMouseEnter={() => setHoveredRegion('Papua & Maluku')}
                    onMouseLeave={() => setHoveredRegion(null)}
                  >
                    <ellipse cx="630" cy="190" rx="12" ry="16" className={styles.islandPath} />
                    <ellipse cx="650" cy="240" rx="15" ry="12" className={styles.islandPath} />
                    <path
                      d="M 690,195 L 750,175 L 860,225 L 850,310 L 780,315 L 750,260 L 710,250 L 685,225 Z"
                      className={styles.islandPath}
                    />
                    <text x="770" y="255" className={styles.islandText}>PAPUA & MALUKU</text>
                  </g>

                  {/* Pulsing Beacons on Active Region */}
                  {islands.map((isle) => (
                    <g key={isle.id} transform={`translate(${isle.pinX}, ${isle.pinY})`}>
                      <circle
                        cx="0"
                        cy="0"
                        r={selectedRegion === isle.id ? "10" : "5"}
                        className={selectedRegion === isle.id ? styles.pulseCircleActive : styles.pulseCircle}
                      />
                      <circle
                        cx="0"
                        cy="0"
                        r="3"
                        fill={selectedRegion === isle.id ? "var(--burnt-orange)" : "var(--mustard-gold)"}
                      />
                    </g>
                  ))}
                </svg>

                {hoveredRegion && (
                  <div className={styles.mapTooltip}>
                    Wilayah: <strong>{hoveredRegion}</strong> (Klik untuk eksplorasi)
                  </div>
                )}
              </div>

              {/* Quick Region Selector Buttons */}
              <div className={styles.regionBtnGroup}>
                {islands.map((isle) => (
                  <button
                    key={isle.id}
                    className={`${styles.regionButton} ${selectedRegion === isle.id && !searchQuery ? styles.activeRegionButton : ''}`}
                    onClick={() => handleSelectRegion(isle.id)}
                  >
                    {isle.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Detail Sidebar / Panel */}
            <aside className={styles.detailSidebar}>
              <div className={styles.sidebarHeader}>
                <div>
                  <h2 className={styles.sidebarRegionTitle}>
                    {searchQuery ? `Hasil Pencarian: "${searchQuery}"` : selectedRegion}
                  </h2>
                  <span className={styles.provinceCountBadge}>
                    {filteredProvinces.length} Provinsi Ditemukan
                  </span>
                </div>
              </div>

              {/* Province Pill Selector */}
              <div className={styles.provincePills}>
                {filteredProvinces.map((prov) => (
                  <button
                    key={prov.id}
                    className={`${styles.provincePill} ${selectedProvince?.id === prov.id ? styles.activeProvincePill : ''}`}
                    onClick={() => handleSelectProvince(prov)}
                  >
                    {prov.nama}
                  </button>
                ))}
              </div>

              {selectedProvince ? (
                <div className={styles.provinceCard}>
                  <div className={styles.cardHeader}>
                    <div>
                      <h3 className={styles.provinceName}>{selectedProvince.nama}</h3>
                      <span className={styles.islandTag}>Wilayah {selectedProvince.pulau}</span>
                    </div>
                  </div>

                  <div className={styles.sectionHighlight}>
                    <div className={styles.highlightHeader}>
                      <FaMapMarkerAlt className={styles.highlightIconWisata} />
                      <h4>Destinasi Wisata Unggulan</h4>
                    </div>
                    <ul className={styles.highlightList}>
                      {selectedProvince.wisata?.map((w, idx) => (
                        <li key={idx} className={styles.listItem}>{w}</li>
                      ))}
                    </ul>
                  </div>

                  <div className={styles.sectionHighlight}>
                    <div className={styles.highlightHeader}>
                      <FaTheaterMasks className={styles.highlightIconBudaya} />
                      <h4>Kesenian & Budaya Adat</h4>
                    </div>
                    <ul className={styles.highlightList}>
                      {selectedProvince.budaya?.map((b, idx) => (
                        <li key={idx} className={styles.listItem}>{b}</li>
                      ))}
                    </ul>
                  </div>

                  <div className={styles.sectionHighlight}>
                    <div className={styles.highlightHeader}>
                      <FaUtensils className={styles.highlightIconKuliner} />
                      <h4>Kuliner Tradisional Khas</h4>
                    </div>
                    <ul className={styles.highlightList}>
                      {selectedProvince.kuliner?.map((k, idx) => (
                        <li key={idx} className={styles.listItem}>{k}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ) : (
                <div className={styles.emptyNotice}>
                  <FaInfoCircle /> Silakan pilih wilayah atau provinsi untuk melihat konten
                </div>
              )}
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PetaInteraktif;
