import { FaGlobe, FaHeart, FaBookOpen } from 'react-icons/fa';
import styles from './TentangKami.module.css';

const teamMembers = [
  { initials: 'SR', name: 'Syahdan Rajbani', role: 'Frontend Developer' },
  { initials: 'WW', name: 'Wanatifo Winajaya', role: 'UI/UX Designer' },
  { initials: 'AN', name: 'Azka Nurfaiza', role: 'Content Writer' },
];

const sumberReferensi = [
  'Kementerian Pariwisata dan Ekonomi Kreatif Republik Indonesia',
  'Badan Pusat Statistik (BPS) Indonesia',
  'UNESCO — Warisan Budaya Tak Benda',
  'Wikipedia Indonesia — Ensiklopedia Bebas',
  'Indonesia Travel (indonesia.travel)',
];

function TentangKami() {
  return (
    <div className={styles.tentangPage}>
      {/* Page Header */}
      <header className="page-header">
        <div className="container">
          <h1>Tentang Kami</h1>
          <p>Mengenal lebih dekat tim dan misi di balik Explore Indonesia</p>
        </div>
      </header>

      {/* Misi Section */}
      <section className={`${styles.misiSection} section`}>
        <div className="container">
          <h2 className="section-title">Misi Kami</h2>
          <div className="ornament-divider">
            <span>✦</span>
          </div>

          <div className={styles.misiContent}>
            <div className={styles.misiCard}>
              <div className={styles.misiIconWrapper}>
                <FaGlobe className={styles.misiIcon} />
              </div>
              <h3>Mengenalkan Indonesia</h3>
              <p>
                Explore Indonesia hadir sebagai platform digital yang
                memperkenalkan kekayaan alam, budaya, kuliner, dan sejarah
                Indonesia kepada masyarakat luas, baik lokal maupun
                internasional.
              </p>
            </div>

            <div className={styles.misiCard}>
              <div className={styles.misiIconWrapper}>
                <FaHeart className={styles.misiIcon} />
              </div>
              <h3>Menumbuhkan Kecintaan</h3>
              <p>
                Kami percaya bahwa dengan mengenal lebih dalam tentang Indonesia,
                akan tumbuh rasa cinta dan kebanggaan terhadap tanah air yang
                kaya akan keindahan dan keberagaman.
              </p>
            </div>

            <div className={styles.misiCard}>
              <div className={styles.misiIconWrapper}>
                <FaBookOpen className={styles.misiIcon} />
              </div>
              <h3>Edukasi Interaktif</h3>
              <p>
                Melalui fitur peta interaktif, kuis budaya, dan galeri visual,
                kami menyajikan informasi edukatif dengan cara yang menarik dan
                mudah dipahami oleh semua kalangan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tim Pengembang */}
      <section className={`${styles.teamSection} section`}>
        <div className="container">
          <h2 className="section-title">Tim Pengembang</h2>
          <div className="ornament-divider">
            <span>✦</span>
          </div>
          <p className="section-subtitle">
            Orang-orang di balik layar Explore Indonesia
          </p>

          <div className={styles.teamGrid}>
            {teamMembers.map((member) => (
              <div key={member.name} className={styles.teamCard}>
                <div className={styles.avatar}>{member.initials}</div>
                <h3 className={styles.memberName}>{member.name}</h3>
                <p className={styles.memberRole}>{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sumber Referensi */}
      <section className={`${styles.referensiSection} section`}>
        <div className="container">
          <h2 className="section-title">Sumber Referensi</h2>
          <div className="ornament-divider">
            <span>✦</span>
          </div>
          <p className="section-subtitle">
            Data dan informasi kami bersumber dari referensi terpercaya
          </p>

          <ul className={styles.referensiList}>
            {sumberReferensi.map((sumber, index) => (
              <li key={index} className={styles.referensiItem}>
                <span className={styles.referensiBullet}>✦</span>
                {sumber}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}

export default TentangKami;
