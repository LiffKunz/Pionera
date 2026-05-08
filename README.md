# PIONERA GENERATION 2025 — README v7
**Buku Kenangan Digital · MA Al-Fakhriyah Baturaja**
**Production-Grade · Mobile-First · Vanilla JS · All Bugs Fixed**

---

## 📁 Struktur File Lengkap

```
Pionera/
├── index.html          ← Halaman utama
├── gallery.html        ← Galeri foto & video
├── 404.html            ← Halaman 404 custom
├── style.css           ← Semua styling (v7)
├── script.js           ← Semua logic & data (v7)
├── manifest.json       ← PWA manifest
├── robots.txt          ← SEO robots
├── sitemap.xml         ← SEO sitemap
└── assets/
    ├── logo.png                    ← Logo Pionera (WAJIB)
    ├── logo-alfakhriyah.png
    ├── sejarah/gedung.jpg
    ├── sambutan/abah.jpg
    ├── sambutan/missnur.jpg
    ├── sambutan/refita.jpg
    ├── guru/[nama-slug].jpg        ← huruf kecil, spasi→-
    ├── siswa/[nama-slug].jpg
    └── gallery/
        ├── haflah-01~07.jpg
        ├── grade10-01~05.jpg
        ├── ldks-01~04.jpg
        ├── aksi-01~03.jpg
        └── momen-01~06.jpg
```

---

## ⚙️ Edit Data — semua di `script.js`

### Santri
```js
{ name: 'Nama Lengkap',
  ttl:  'Kota, DD Bulan YYYY',
  ig:   '@username',      // '-' jika tidak ada
  cita: 'Cita-cita',
  kesan:'Kesan...',
  pesan:'Pesan...',
  motto:'Motto.' },
```

### Video Galeri
```js
{ id:    'YOUTUBE_VIDEO_ID',
  title: 'Judul',
  tag:   'Label',
  sub:   'Deskripsi singkat' },
```

### Foto Galeri
```js
{ src:   'assets/gallery/nama.jpg',
  cat:   'haflah',   // haflah|grade10|ldks|aksi|momen
  label: 'Keterangan' },
```

### Link Sosial (index.html)
```html
<a href="https://wa.me/628XXXXXXXXXX" ...>
<a href="https://instagram.com/username" ...>
```

---

## 🎨 Ganti Tema
Di `style.css`:
```css
:root {
  --gold:  #d4a843;   /* emas utama */
  --gold2: #f0c84a;   /* emas terang */
  --bg:    #030c1a;   /* background */
  --surf:  #091726;   /* surface card */
}
```

---

## ✨ Fitur v7

| Fitur | Keterangan |
|-------|-----------|
| **Info Cards** | Sejarah, Visi, Misi jadi 3 compact card yang buka popup — tidak panjang lagi |
| **SVG Icons Drawer** | Semua emoji di nav drawer diganti SVG icon yang proper |
| **Clean URL** | `/Pionera/` bukan `/Pionera/index.html` · hash update saat scroll |
| **Page Transition** | Fade+slide saat pindah halaman |
| **PWA Manifest** | "Add to Home Screen" di HP, icon di launcher |
| **404 Page** | Halaman 404 custom dengan canvas stars + tombol navigasi |
| **robots.txt** | SEO crawl rules |
| **sitemap.xml** | SEO sitemap |
| **Skip Link** | Accessibility — keyboard skip to content |
| **GPU Hints** | `will-change`, `contain`, `translateZ(0)` di elemen animasi |
| **RAF Pause** | Canvas stars berhenti saat tab tidak aktif (hemat baterai) |
| **Selection Color** | `::selection` gold |
| **Preload Logo** | Critical asset preloaded |
| **Modal Landscape** | Desktop: foto kiri, konten kanan. Mobile: compact row atas |
| **Modal Swipe Nav** | Geser atau ‹ › browse santri |
| **Stats Row** | 37 · 54 · 3 · ∞ dengan counter animasi |
| **∞ Counter** | Count up lalu flip ke ∞ |
| **Section Dividers** | SVG ornamen antara section |
| **Back to Top** | Tombol ↑ pojok kanan bawah |
| **Toast** | Notifikasi setelah share |
| **Shimmer** | Skeleton loading foto |
| **TDD Suite** | `?test=1` atau `window.__runTests()` |

---

## 🐛 Semua Bug Fixed

| Bug | Fix |
|-----|-----|
| Semua tombol mati di mobile | `mob-bg pointer-events:none` |
| Timeline mobile dot meleset | Grid 2-col, dot col-1, ::before rail |
| m-close terlalu kecil (30px) | 40×40px min |
| Ham button touch area kecil | 44×44px |
| Modal scroll crop border-radius | overflow:hidden outer + scroll inner |
| Scroll nav melompat section panjang | getBoundingClientRect per scroll |
| Guru card double nama | Hapus gc-popup, gc-info compact |
| Gallery nav transparan | isGallery detect |
| iOS scroll jump close modal | body.style.top restore |
| TDD false positive mob-bg | Force display:block test |
| Canvas RAF terus jalan | visibilitychange pause |

---

## 📱 Breakpoints

| Lebar | Layout |
|-------|--------|
| >1060px | Desktop penuh |
| ≤1060px | Grid 4 kolom, scroll-nav sembunyi |
| ≤768px | Mobile: hamburger, info-cards 1 kolom |
| ≤600px | Modal stack vertikal |
| ≤480px | 2 kolom murid & guru |
| ≤360px | Gallery 1 kolom |

---

## 🧪 TDD

```
# Auto test
https://liffkunz.github.io/Pionera/?test=1

# Manual console
window.__runTests()
```

---

## 🚀 Deploy GitHub Pages

1. Push semua file ke repo
2. **Settings → Pages → Source: main / root**
3. Live di `https://username.github.io/Pionera/`
4. URL otomatis clean: `/Pionera/` bukan `/Pionera/index.html`

---

## ✅ Checklist Sebelum Launch

- [ ] `assets/logo.png` ada
- [ ] Foto sambutan 3 orang
- [ ] Foto santri 37 di `assets/siswa/`
- [ ] Foto guru di `assets/guru/`
- [ ] Foto gedung di `assets/sejarah/gedung.jpg`
- [ ] Foto galeri di `assets/gallery/`
- [ ] Link WA diisi nomor
- [ ] Link IG diisi username
- [ ] YouTube video ID diisi
- [ ] OG image URL sudah pakai URL absolut
- [ ] `window.__runTests()` → semua hijau ✅
- [ ] Test di HP: semua tombol bisa diklik ✅
- [ ] Test share profil santri ✅

---

*PIONERA GENERATION 2025 · MA Al-Fakhriyah Baturaja · v7*
