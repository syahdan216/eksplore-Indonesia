import { useState } from 'react';
import { FaMapMarkerAlt, FaImage } from 'react-icons/fa';
import styles from './Card.module.css';

const Card = ({
  gambar,
  image,
  nama,
  title,
  lokasi,
  subtitle,
  deskripsiSingkat,
  description,
  tags,
  onClick,
  children
}) => {
  const [imgError, setImgError] = useState(false);
  const displayImage = gambar || image;
  const displayTitle = nama || title;
  const displayLocation = lokasi || subtitle;
  const displayDesc = deskripsiSingkat || description;

  return (
    <div
      className={styles.card}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={onClick ? (e) => { if (e.key === 'Enter' || e.key === ' ') onClick(); } : undefined}
    >
      <div className={styles.imageWrapper}>
        {displayImage && !imgError ? (
          <img
            src={displayImage}
            alt={displayTitle || 'Gambar Nusantara'}
            className={styles.image}
            loading="lazy"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className={styles.fallbackWrapper}>
            <FaImage className={styles.fallbackIcon} />
            <span className={styles.fallbackText}>{displayTitle}</span>
          </div>
        )}
        <div className={styles.imageOverlay} />
      </div>

      <div className={styles.content}>
        {displayTitle && <h3 className={styles.nama}>{displayTitle}</h3>}

        {displayLocation && (
          <p className={styles.lokasi}>
            <FaMapMarkerAlt className={styles.lokasiIcon} />
            <span>{displayLocation}</span>
          </p>
        )}

        {displayDesc && (
          <p className={styles.deskripsi}>{displayDesc}</p>
        )}

        {tags && tags.length > 0 && (
          <div className={styles.tags}>
            {tags.map((tag, index) => (
              <span key={index} className={styles.tag}>
                {tag}
              </span>
            ))}
          </div>
        )}

        {children}
      </div>
    </div>
  );
};

export default Card;
