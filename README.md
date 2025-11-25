# Template Ucapan Ulang Tahun Interaktif

Template ini menyediakan halaman ucapan ulang tahun yang responsif dan interaktif dengan animasi teks, efek parallax, confetti, serta musik latar opsional.

## Struktur Folder
- `index.html` – Struktur HTML utama
- `css/` – CSS modular
  - `base.css` – Variabel tema, tipografi, reset ringan
  - `layout.css` – Layout responsif dan parallax wrapper
  - `components.css` – Komponen kartu, tombol, frame foto, kontrol audio
  - `animations.css` – Keyframes dan kelas animasi
- `js/` – Logika interaksi
  - `configLoader.js` – Memuat konfigurasi JSON dan menerapkan tema
  - `textAnimator.js` – Animasi teks kalimat per kalimat dengan kontrol
  - `parallax.js` – Efek parallax sederhana
  - `confetti.js` – Confetti saat halaman selesai dimuat
  - `audioController.js` – Kontrol musik (play/pause, volume)
  - `main.js` – Inisialisasi keseluruhan
- `config/` – Konfigurasi terpisah
  - `messages.json` – Daftar kalimat ucapan
  - `theme.json` – Warna tema (`primary`, `secondary`, `accent`)
  - `animation.json` – Durasi animasi dan intensitas parallax
  - `icons.json` – Pilihan icon Font Awesome dan opsi musik
- `assets/` – Gambar/font opsional (tambahkan sesuai kebutuhan)

## Kustomisasi
### 1. Kalimat Ucapan (`config/messages.json`)
Edit array `messages` untuk mengubah urutan dan isi kalimat:
```json
{
  "messages": [
    "Kalimat 1",
    "Kalimat 2",
    "Kalimat 3"
  ]
}
```

### 2. Warna Tema (`config/theme.json`)
Ubah nilai warna sesuai brand Anda:
```json
{
  "primary": "#FF6B8B",
  "secondary": "#4ECDC4",
  "accent": "#FFE66D"
}
```
Variabel ini otomatis diterapkan ke `:root` sebagai `--color-primary`, `--color-secondary`, `--color-accent`.

### 3. Durasi Animasi (`config/animation.json`)
Atur kecepatan teks dan transisi, serta intensitas parallax dan jumlah confetti:
```json
{
  "textSpeed": 2500,
  "transition": 600,
  "parallaxIntensity": 0.2,
  "confettiCount": 60
}
```

### 4. Icon Font Awesome (`config/icons.json`)
Tentukan icon dekoratif dan apakah musik aktif:
```json
{
  "header": ["fa-birthday-cake", "fa-star"],
  "decorations": ["fa-gift", "fa-heart"],
  "audioEnabled": true
}
```
Catatan: Pastikan icon tersedia di versi Font Awesome yang digunakan.

## Gambar & Font
- Tambahkan foto utama ke `assets/images/` lalu ubah `src` pada elemen `<img>` di `index.html`
- Opsional: Tambahkan font lokal ke `assets/fonts/` bila tidak menggunakan CDN

## Kontrol Animasi Teks
- Tombol `Play` memulai animasi teks dari awal
- Tombol `Pause` menghentikan sementara animasi
- Kecepatan teks dan durasi transisi dikendalikan oleh `animation.json`

## Musik Latar
- Tombol `Musik` menyalakan/mematikan musik
- Slider `Volume` mengatur tingkat suara
- Sumber audio dapat diubah di `audioController.js` atau dikonfigurasi melalui logika Anda sendiri

## Aksesibilitas & Responsif
- Navigasi keyboard didukung untuk tombol dan slider
- `aria-label` disediakan untuk kontrol penting
- Layout mobile-first dengan penyesuaian di tablet dan desktop

## Menjalankan Secara Lokal
- Gunakan server statis (mis. VSCode Live Server) agar `fetch` untuk file JSON bekerja dengan benar
- Buka `index.html` di browser melalui server lokal

## Catatan Kode
- Komentar disediakan dalam file JS/CSS untuk memudahkan modifikasi
- Struktur modular memudahkan perawatan dan pengembangan
