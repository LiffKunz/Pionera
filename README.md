# PIONERA GENERATION 2025 — README v6
**Website Buku Kenangan Digital · MA Al-Fakhriyah Baturaja**
**Mobile-First · Fully Accessible · All Bugs Fixed**

---

## 📁 Struktur File

```
Pionera/
├── index.html          ← Halaman utama
├── gallery.html        ← Halaman galeri foto & video
├── style.css           ← Semua styling (v6)
├── script.js           ← Semua logic & data (v6)
└── assets/
    ├── logo.png                    ← Logo Pionera (WAJIB)
    ├── logo-alfakhriyah.png        ← Logo Al-Fakhriyah
    ├── sejarah/gedung.jpg          ← Foto gedung pesantren
    ├── sambutan/
    │   ├── abah.jpg                ← Foto KH. Zulfan Barron
    │   ├── missnur.jpg             ← Foto Ustadzah Nursayidah
    │   └── refita.jpg              ← Foto Ustadzah Refita Yana
    ├── guru/[nama-slug].jpg        ← Foto guru (huruf kecil, spasi → -)
    ├── siswa/[nama-slug].jpg       ← Foto santri (huruf kecil, spasi → -)
    └── gallery/
        ├── haflah-01.jpg ... haflah-07.jpg
        ├── grade10-01.jpg ... grade10-05.jpg
        ├── ldks-01.jpg ... ldks-04.jpg
        ├── aksi-01.jpg ... aksi-03.jpg
        └── momen-01.jpg ... momen-06.jpg
```

**Cara slug nama:** `Ustdz. Nursayidah, S.Pd.` → hapus non-huruf → `nursayidah spd` → spasi jadi `-` → `nursayidah-spd.jpg`

---

## ⚙️ Edit Data — semua di `script.js`

### Santri (Ikhwan & Akhwat)
```js
{ name:  'Nama Lengkap',
  ttl:   'Kota, DD Bulan YYYY',
  ig:    '@username',    // tulis '-' kalau tidak ada
  cita:  'Cita-cita',
  kesan: 'Kesan selama di Al-Fakhriyah...',
  pesan: 'Pesan untuk teman-teman...',
  motto: 'Motto hidup.' },
```

### Video Galeri
```js
{ id:    'YOUTUBE_VIDEO_ID',   // dari youtube.com/watch?v=XXXX
  title: 'Judul Video',
  tag:   'Label',
  sub:   'Deskripsi singkat' },
```

### Tambah Foto Galeri
```js
{ src:   'assets/gallery/nama-foto.jpg',
  cat:   'haflah',   // haflah | grade10 | ldks | aksi | momen
  label: 'Keterangan foto' },
```

### Link Sosial (di index.html)
```html
<!-- WhatsApp -->
<a href="https://wa.me/628XXXXXXXXXX" ...>

<!-- Instagram -->
<a href="https://instagram.com/username_resmi" ...>
```

---

## 🎨 Ganti Tema
Di bagian atas `style.css`:
```css
:root {
  --gold:  #d4a843;   /* emas utama */
  --gold2: #f0c84a;   /* emas terang */
  --gold3: #b8911e;   /* emas gelap */
  --bg:    #030c1a;   /* background utama */
}
```

---

## ✨ Semua Fitur v6

| Fitur | Keterangan |
|-------|-----------|
| **Modal Landscape** | Desktop: foto kiri, konten kanan. Mobile: foto atas (row), konten bawah scroll |
| **Modal Swipe Nav** | Geser atau klik ‹ › untuk browse santri tanpa tutup-buka modal (seperti IG Story) |
| **Sejarah Expandable** | Klik card sejarah → popup modal dengan isi lengkap. Mobile tidak kepanjangan |
| **Visi Misi Popup** | Klik card visi/misi → popup modal. Ringkas di halaman, detail di popup |
| **Scroll Nav** | Dot indicator kanan layar (desktop), klik langsung jump ke section |
| **Parallax Hero** | Logo gerak lebih lambat dari teks — efek depth |
| **Stats Row** | 37 Santri · 54 Guru · 3 Tahun · ∞ Kenangan dengan counter animasi |
| **∞ Counter** | Angka count up lalu flip ke ∞ dengan fade animation |
| **Section Dividers** | Ornamen SVG bintang/diamond antara section |
| **Glassmorphism Cards** | Sambutan & Pesan WK pakai blur backdrop |
| **Guru Popup** | Hover card guru → popup nama + jabatan (desktop). Mobile: title attribute |
| **Share Profil** | Tombol share di modal santri dengan Web Share API |
| **Toast Notification** | Muncul setelah berhasil copy/share |
| **Download Foto** | Ikon unduh di galeri dan lightbox |
| **Keyboard Lightbox** | ← → untuk navigasi foto, Escape untuk tutup |
| **Shimmer Loading** | Animasi skeleton saat foto belum load |
| **Navbar Active** | Link nav highlight sesuai section aktif saat scroll |
| **Back to Top** | Tombol ↑ muncul setelah scroll 420px |
| **Footer Redesigned** | Logo dengan glow, divider gem, quote, SVG buttons |
| **Gallery Hero Redesigned** | Gradient title, badge, background radial |
| **TDD Test Suite** | `?test=1` atau `window.__runTests()` di console |

---

## 🐛 Bug Fixes (semua versi)

| Bug | Status |
|-----|--------|
| mob-bg memblokir semua tap di mobile | ✅ `pointer-events:none` |
| m-close tombol 30px terlalu kecil | ✅ 40×40px min |
| Ham button touch target kecil | ✅ 44×44px |
| Timeline mobile dot meleset dari garis | ✅ Grid 2-col, dot col-1, garis via ::before |
| Scroll nav tidak highlight section panjang | ✅ getBoundingClientRect() per scroll |
| Gallery nav transparan di top | ✅ isGallery detect |
| Loader 3.8s terlalu lama | ✅ 2s |
| iOS scroll jump saat close modal | ✅ body.style.top + scrollTo restore |
| Modal border-radius terpotong scroll | ✅ overflow:hidden outer + scroll inner |
| Guru card nama double (gc-info + popup) | ✅ Hapus gc-popup, gc-info tetap |
| TDD false positive mob-bg | ✅ Force display:block sebelum cek |

---

## 📱 Breakpoints

| Lebar | Layout |
|-------|--------|
| >1060px | Desktop penuh, scroll-nav aktif |
| ≤1060px | Grid 4 kolom murid, 4 kolom guru |
| ≤768px | Mobile: hamburger, timeline vertical grid |
| ≤600px | Modal stack vertikal (foto atas, konten bawah) |
| ≤480px | 2 kolom murid & guru |
| ≤360px | 2 kolom gallery |

---

## 🧪 TDD Test Suite

```
# Auto-run saat buka halaman
https://liffkunz.github.io/Pionera/?test=1
https://liffkunz.github.io/Pionera/gallery.html?test=1

# Manual di console
window.__runTests()
```

**Coverage:** Data integrity (37+15+22 santri, 18+36 guru) · DOM elements · Render output · Bug fixes · Modal behavior · Gallery filter · Lightbox · Utility functions

---

## ✅ Checklist Sebelum Launch

- [ ] `assets/logo.png` sudah ada
- [ ] Foto sambutan (abah, missnur, refita) sudah diupload
- [ ] Foto santri di `assets/siswa/` (nama sesuai slug)
- [ ] Foto guru di `assets/guru/`
- [ ] Foto gedung di `assets/sejarah/gedung.jpg`
- [ ] Foto galeri di `assets/gallery/` dan didaftarkan di `galPhotos`
- [ ] Link WhatsApp Community sudah diisi nomor (`wa.me/628...`)
- [ ] Link Instagram Pionera sudah benar
- [ ] YouTube video ID sudah diisi di `galVideos`
- [ ] OG meta image URL sudah pakai URL absolut yang benar
- [ ] Test di HP: semua tombol bisa diklik ✅
- [ ] `window.__runTests()` → semua hijau ✅

---

*PIONERA GENERATION 2025 · MA Al-Fakhriyah Baturaja · v6*
