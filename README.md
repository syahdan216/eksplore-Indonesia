# 🇮🇩 Explore Indonesia — Website Wisata, Budaya & Kuliner Nusantara

Website informatif dan interaktif yang memperkenalkan kekayaan wisata, keanekaragaman budaya, kuliner legendaris, serta situs bersejarah di Indonesia. Dirancang dengan estetika visual **Nusantara Vintage** sesuai spesifikasi Product Requirements Document (PRD).

---

## 🎨 Karakteristik Desain (Nusantara Vintage)

- **Mustard Gold (`#E5A93B`)**: Aksen utama, tombol CTA, highlight, icon
- **Burnt Orange (`#D45D34`)**: Aksen sekunder, hover states, badges
- **Olive Green (`#5B7053`)**: Unsur alam, tag kategori & era
- **Dark Chocolate (`#3E2723`)**: Teks utama, judul, navbar & footer
- **Warm Cream (`#F7F4EB`)**: Latar belakang utama
- **Tipografi**: Playfair Display (Heading) & Lato (Body)
- **Aksen Dekoratif**: Ornamen batik, garis pembatas vintage (✦), kartu ber-radius halus, bayangan natural

---

## 🚀 Fitur Utama Sesuai PRD

1. **🏠 Beranda (Home)**
   - Hero Section dengan latar lanskap Nusantara & tombol aksi
   - Preview 3 pilar: Destinasi Wisata, Budaya & Tradisi, Kuliner Nusantara
   - Widget interaktif *"Tahukah Kamu?"* dengan tombol acak fakta menarik
   - Banner Call-to-Action menuju Peta Interaktif

2. **🏝️ Destinasi Wisata (`/destinasi`)**
   - Kartu destinasi dari berbagai kepulauan (Sumatera, Jawa, Bali, NTT, Kalimantan, Sulawesi, Papua)
   - Filter interaktif per kepulauan / region
   - Modal popup rincian lengkap beserta tips perjalanan

3. **🎭 Galeri Budaya & Tradisi (`/budaya`)**
   - Tampilan visual masonry gallery dengan efek overlay saat hover
   - Filter kategori: Tarian, Pakaian Adat, Alat Musik, Upacara Adat, Kerajinan
   - Modal popup penjelasan sejarah dan asal daerah budaya

4. **🍛 Kuliner Nusantara (`/kuliner`)**
   - Katalog masakan khas Nusantara dengan label cita rasa (*Pedas*, *Manis*, *Berkuah*, *Kering*)
   - Filter per region & modal detail resep / kisah makanan

5. **🏛️ Tempat Bersejarah (`/sejarah`)**
   - Direktori situs cagar budaya dari era Prasejarah, Hindu-Buddha, Islam, Kolonial, hingga Kemerdekaan
   - Filter berdasarkan era & modal detail situs bersejarah

6. **🗺️ Peta Interaktif (`/peta`)**
   - Peta vektor kepulauan Indonesia (SVG) yang interaktif
   - Klik pulau/wilayah untuk membuka panel rincian provinsi unggulan
   - Ringkasan destinasi wisata, warisan budaya, dan makanan khas per provinsi

7. **🧠 Kuis Budaya Nusantara (`/kuis`)**
   - Bank soal 20 pertanyaan pilihan ganda (10 soal acak per sesi)
   - Indikator progres soal & skor langsung
   - Umpan balik benar/salah instan dengan penjelasan edukatif
   - Layar hasil akhir lengkap dengan predikat dan tombol mulai ulang

8. **ℹ️ Tentang Kami (`/tentang`)**
   - Profil proyek, tim pengembang, serta sumber referensi edukatif

---

## 🛠️ Cara Menjalankan Proyek

Pastikan telah menginstal [Node.js](https://nodejs.org/) di komputer Anda.

1. Buka terminal dan masuk ke folder proyek:
   ```bash
   cd explore-indonesia
   ```

2. Jalankan server pengembangan:
   ```bash
   npm run dev
   ```

3. Buka peramban (browser) di tautan yang ditampilkan (biasanya `http://localhost:5173`).

4. Untuk membuat build produksi:
   ```bash
   npm run build
   ```
