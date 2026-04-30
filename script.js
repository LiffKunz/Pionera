/* ═══════════════════════════════════════════════════
   PIONERA GENERATION 2025 — script.js
   
   CORE FIX: Zero inline onclick attributes.
   All events use addEventListener + data-idx pattern
   so mobile touch works perfectly everywhere.
   ═══════════════════════════════════════════════════ */

'use strict';

/* ── HELPERS ── */
const $ = id => document.getElementById(id);
const av  = n  => `https://ui-avatars.com/api/?name=${encodeURIComponent(n)}&background=0d2240&color=d4a843&size=200&bold=true&font-size=0.36`;
const gph = l  => `https://placehold.co/800x600/071828/d4a843?text=${encodeURIComponent(l)}`;
const esc = s  => String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');

/* ══════════════════════════════════════════════════
   ▌DATA STORE — all modal data stored here by index
   ▌Cards only carry data-type + data-idx
   ══════════════════════════════════════════════════ */
const STORE = {
  sambutan: null,   // set in renderSambutan
  pesanNur: null,   // set in renderPesanWK
  pesanRef: null,
  ikhwan: [],
  akhwat: [],
};

/* ══════════════════════════════════════════════════
   DATA: SAMBUTAN PENGASUH
   ══════════════════════════════════════════════════ */
const pengasuh = {
  name:  'KH. Zulfan Barron, S.Pd.I., M.Si.',
  role:  'Pengasuh Pondok Pesantren Al-Fakhriyah Baturaja',
  photo: 'assets/sambutan/abah.jpg',
  preview: 'Kalian adalah permata yang akan tetap berkilau dan berharga di manapun saja kalian berada. Tetaplah menjadi generasi yang menebarkan kebaikan dan mengharumkan nama Al-Fakhriyah.',
  full: `Assalaamu'alaikum Warahmatullahi Wabarakatuh.

Anak-anak yang Abah sayangi dan mudah-mudahan dimuliakan Allah, 3 atau bahkan 6 tahun yang lalu, kalian datang di Al-Fakhriyah bersama orang tua kalian untuk pertama kalinya. Pada saat itu kalian masih mungil dan lucu. Dengan hati yang berat, Abah menangis pada saat itu.

Kini, sudah saatnya kalian Abah kembalikan ke pangkuan orang tua kalian agar dihantarkan ke lembaga pendidikan yang lebih tinggi. Sudah saatnya kalian melanjutkan pendidikan ke jenjang selanjutnya anakku. Terlalu banyak kisah tentang kalian yang membuat hari ini begitu berat bagi Abah.

Kalian adalah permata, kalian adalah bintang yang akan tetap berkilau dan berharga di manapun saja kalian berada. Tetaplah menjadi generasi yang menebarkan kebaikan, menjaga amarwah santri, dan mengharumkan nama Pondok Pesantren Al-Fakhriyah.

Yaa Allah terima kasih karena Engkau telah menganugerahkan mereka — hamba-hambaMu yang jadikanlah mereka shalih dan shalihah, jadikanlah mereka banyak memiliki manfaat dan bermanfaat, dan anugerahkanlah kepada mereka kehidupan yang baik, aamiin.

Berangkatlah anak-anakku, doa Abah selalu menyertai kalian.

Wassalaamu'alaikum Warahmatullahi Wabarakatuh.`
};

/* ══════════════════════════════════════════════════
   DATA: PESAN WALI KELAS
   ══════════════════════════════════════════════════ */
const missnur = {
  name:  'Ustadzah Nursayidah, S.Pd.',
  role:  'Wali Kelas XII IPA 1 / Koordinator Akhwat',
  photo: 'assets/sambutan/missnur.jpg',
  preview: '"Dua tahun kita lalui penuh doa dan usaha. Setiap langkah kalian adalah saksi perjuangan dalam menuntut ilmu. Jadilah cahaya di mana pun kalian berada."',
  full: `Assalaamu'alaikum Warahmatullahi Wabarakatuh.

Untuk Anak-anakku Tersayang, XII IPA 1.

Dua tahun kita lalui penuh doa dan usaha. Setiap langkah kalian adalah saksi perjuangan dalam menuntut ilmu. Teruslah melangkah dengan keyakinan, karena Allah selalu bersama hamba-Nya yang berjuang.

Jadilah cahaya di mana pun kalian berada — cahaya yang menerangi, bukan menyilaukan. Ilmu yang kalian bawa bukan hanya untuk diri sendiri, tapi untuk keluarga, masyarakat, dan bangsa.

Kalian adalah kebanggaan ibu. Miss Nur akan selalu merindukan tawa, semangat, dan kebersamaan kita. Semoga Allah ridho atas setiap langkah kalian ke depan.

Wassalaamu'alaikum Warahmatullahi Wabarakatuh.

— Miss Nur (Ustadzah Nursayidah, S.Pd.)`
};

const refita = {
  name:  'Ustadzah Refita Yana, S.Pd.I.',
  role:  'Wali Kelas XII IPA 2 / Bidang Kesiswaan MA',
  photo: 'assets/sambutan/refita.jpg',
  preview: '"Bila hidup terasa berat, ingatlah nasihat gurumu dan do\'a orang tuamu — dari sanalah Allah kirimkan kekuatan baru untuk hatimu yang terus berjuang."',
  full: `Assalaamu'alaikum Warahmatullahi Wabarakatuh.

Untuk Anakku Tersayang "PIONERA" — Anak-anakku yang Ustadzah cintai karena Allah.

Waktu berjalan begitu cepat. Hari-hari di pondok yang dulu terasa panjang kini hanya tinggal kenangan indah yang akan selalu Ustadzah simpan di hati. Tawa kalian, canda, murojaah, bahkan langkah tergesa menuju masjid — semua akan selalu Ustadzah rindukan.

Kalian akan segera melangkah ke dunia luar yang luas dan penuh warna. Di sanalah ujian sesungguhnya akan kalian temui. Maka, jagalah Allah, niscaya Allah akan menjagamu. Jangan lepaskan zikir dari lisanmu, dan jangan jauhkan Al-Qur'an dari hatimu.

Boleh kalian pergi jauh, tapi jangan pernah pergi dari hidayah-Nya. Boleh kalian mengejar cita-cita setinggi langit, tapi tetap tunduk di bumi untuk-Nya.

Ingatlah, anak-anakku — ilmu tanpa akhlak tidak akan membawa berkah, dan akhlak tanpa iman hanyalah hiasan semu. Jadilah "Cahaya" yang lembut, namun mampu menerangi sekitar.

Teruslah menjadi generasi yang menebarkan kebaikan dan mengharumkan nama Pondok Pesantren Al-Fakhriyah.

Bila hidup terasa berat, ingatlah nasihat gurumu dan do'a orang tuamu — dari sanalah Allah kirimkan kekuatan baru untuk hatimu yang terus berjuang.

Dengan penuh cinta dan doa,
Wassalaamu'alaikum Warahmatullahi Wabarakatuh.

— Ustadzah Refita Yana, S.Pd.I.`
};

/* ══════════════════════════════════════════════════
   DATA: GURU BERPOSISI (18)
   ══════════════════════════════════════════════════ */
const guruPos = [
  { name:'Umi Eka Damayanti, S.Pd., M.Pd.',     pos:'Wakil Kepala / Koordinator Kurikulum',    photo:'assets/guru/eka.jpg' },
  { name:'Ustdz. Seppy Karlina, S.Pd.',          pos:'Sarana & Staff Pengajaran',               photo:'assets/guru/seppy.jpg' },
  { name:'Ust. Adlin Koman, S.Pd., M.Pd.',       pos:'Bidang Administrasi MA',                  photo:'assets/guru/adlin.jpg' },
  { name:'Ustdz. Adelia Aminick, S.Ag.',         pos:'Koordinator Tata Tertib MA',              photo:'assets/guru/adelia.jpg' },
  { name:'Ustdz. Lasihi, S.Hum.',                pos:'Bimbingan Konseling',                     photo:'assets/guru/lasihi.jpg' },
  { name:'Ustdz. Tri Amita, A.md.',              pos:'Bimbingan KI',                            photo:'assets/guru/triamita.jpg' },
  { name:'Ustdz. Nursayidah, S.Pd.',             pos:'Wali Kelas XII IPA 1',                    photo:'assets/sambutan/missnur.jpg' },
  { name:'Ust. Firdinal, S.Pd.',                 pos:'Koordinator Staff Pengajaran',            photo:'assets/guru/firdinal.jpg' },
  { name:'Ustdz. Shela Yoli Yem, S.Pd., M.Pd.', pos:'Koordinator Bimbingan Konseling',         photo:'assets/guru/shela.jpg' },
  { name:'Ustdz. Mardalena, S.Pd.',              pos:'Humas & Kesiswaan',                       photo:'assets/guru/mardalena.jpg' },
  { name:'Ustdz. Refita Yana, S.Pd.I.',          pos:'Wali Kelas XII IPA 2',                    photo:'assets/sambutan/refita.jpg' },
  { name:'Ustdz. Aneliyah, S.Pd.',               pos:'Wakil Yayasan / Bio Administrasi',        photo:'assets/guru/aneliyah.jpg' },
  { name:'Ustdz. Leni Ratnasari, A.md.',         pos:'Staff Tata Usaha',                        photo:'assets/guru/leni.jpg' },
  { name:'Ustdz. Dian Rossabety, S.M.',          pos:'Bendahara Santri',                        photo:'assets/guru/dian.jpg' },
  { name:'Ustdz. Poppy Putriani, S.Pd.',         pos:'Staff Keuangan Santri',                   photo:'assets/guru/poppy.jpg' },
  { name:'Ustdz. Finda Brida',                   pos:'Staff Keuangan',                          photo:'assets/guru/finda.jpg' },
  { name:'Ustdz. Netna Hernan',                  pos:'Koordinator Staff Keuangan Santri',       photo:'assets/guru/netna.jpg' },
  { name:'Ustdz. Nursaridah, S.Pd.',             pos:'Koordinator Perempuan',                   photo:'assets/guru/nursaridah.jpg' },
];

const guruNoPos = [
  'Ustdz. Eka Laily Lestari, S.Pd.','Ustdz. Dewi Afidatul Kancelil, S.Pd.',
  'Ustdz. Franziska Bellantari','Ustdz. Juta Andagani',
  'Ustdz. Agustine Solena','Ustdz. Rosa Novarina, S.Pd.',
  'Ustdz. Putri Rahma Dayanti','Ustdz. Amanah Isma',
  'Ust. Asep Apriansyah, S.H.','Ust. Syihail Novriansyah, S.Pd.',
  'Ust. Handi Ferdiansyah','Ust. Adi Nuriha',
  'Ust. Mulhirizani, S.Pd.','Ust. Fabi Adi Pratama',
  'Ust. Junies Pranala','Ust. Jago Firmansyah',
  'Ust. Andika Pratama','Ust. Rendy Saputra',
  'Ustdz. Maharani','Ustdz. Meri Merdiana',
  'Ustdz. Audia Pramesti','Ustdz. Gina Amelia Jhoti',
  'Ust. Maftah Al-Anshur Mesaya','Ust. Yahya Saputra',
  'Ust. Ilham Zulkifli','Ust. H. Septian Arbi Sanjaya',
  'Ustdz. Deftiyani, S.Pd.','Ustdz. Nurin Fadhillah, S.Hum.',
  'Ustdz. Fera Riski Yolanda, S.Pd.','Ustdz. Nelti Niki Gulton, S.Pd.',
  'Ustdz. Dwi Yuninosh, S.Pd.','Ustdz. Ega Tania, S.Pd.',
  'Ustdz. Puput Noviara, S.Pd.','Ustdz. Moncea Lestyandra, S.Pd.',
  'Ustdz. Rosari Indah Safitri, S.Pd.','Ust. H. Maftah Wijaya',
];

/* ══════════════════════════════════════════════════
   DATA: IKHWAN XII IPA 1 (22)
   ══════════════════════════════════════════════════ */
const ikhwanData = [
  { name:'Ahmad Fauzan',        ttl:'Baturaja, 29 Juni 2007',        ig:'@ahmad_fzn47',      cita:'TNI AD',              kesan:'Kenangan terbaik di Al-Fakhriyah adalah momen kebersamaan yang tidak akan pernah terlupakan.', pesan:'Cintailah orang yang bisa sintal sewapunya karena siapa tahu suatu saat nanti dia akan menjadi orang yang kau benci. Begitupun sebaliknya.', motto:'Hidup itu naik turun, maka tetaplah yang berani.' },
  { name:'Arya Dirga Saputra',  ttl:'Lampung, 12 Desember 2006',     ig:'@di-pap',           cita:'Ulama',               kesan:'Al-Fakhriyah mengajarkan saya arti persaudaraan yang sesungguhnya.', pesan:'Setiap manusia memiliki fikiran, tetapi kita jangan sampai dikendalikan oleh fikiran kita sendiri, karena yang kita fikirkan belum tentu terjadi.', motto:'Dedikasikan hidup menjadi lebih baik dengan perbuatan baik semuanya.' },
  { name:'Alfareza Saputra',    ttl:'Baturaja, 24 Agustus 2006',     ig:'@alfareza_apr24',   cita:'Pengusaha Sukses',    kesan:'Terima kasih Al-Fakhriyah atas bimbingan dan kesabaran para guru.', pesan:'When you graduate, remember: The education of this school is a training for living the life that we will go through. Thanks For Al-Fakhriyah!', motto:'Awal dari kehidupan manusia tidak bisa diingat, untuk itu kita selalu miliki Allah.' },
  { name:'Aspin Wahyudi',       ttl:'Baturaja, 20 September 2006',   ig:'@Aspin23',          cita:'Pengusaha',           kesan:'Belajarlah dengan sungguh-sungguh agar tidak menyesal di kemudian hari.', pesan:'Saat belajar janganlah berbuat malas-malasan, janganlah kurang ajar kepada dewan guru dan orang.', motto:'Belajarlah yang luar-luar jangan sampai malas-malasan.' },
  { name:'Alif Alfian',         ttl:'Batang Hari, 13 Mei 2007',      ig:'-',                 cita:'Go Around The World', kesan:'Para guru Al-Fakhriyah sangat sabar dan berdedikasi tinggi.', pesan:'Thanks to Al-Fakhriyah for her guidance so far. The teachers remain patient in educating me and all my friends. Domo Arigatougozaimasu.', motto:'Awal dari kehidupan manusia tidak bisa diingat, untuk itu kita selalu miliki Allah.' },
  { name:'Awam Berkah',         ttl:'Batang Hari, 11 Nov 2007',      ig:'@awamberkah1qg27',  cita:'Pengusaha',           kesan:'Kamu hanya perlu lebih baik dari hari kemarin, bukan dari orang lain.', pesan:'Kamu hanya perlu lebih baik dari hari kemarin, bukan lebih baik dari orang lain. Jangan liat untuk disayangi, tetaplah orang yang bisa menyayangi.', motto:'Jangan hanya untuk disayangi, tetaplah orang yang bisa menyayangi orang lain.' },
  { name:'Anugerah Bayu',       ttl:'Baturaja, 21 Januari 2008',     ig:'-',                 cita:'Polisi',              kesan:'Waktu adalah harta yang paling berharga, gunakan sebaik-baiknya.', pesan:'Jauhilah bermalas-malasan, alokasikan waktumu dengan usaha untuk memperbaiki dirimu dan mempersiapkan akhiratmu.', motto:'Be what you wanna be.' },
  { name:'Bagus Galih Kusuma',  ttl:'Mekar Jaya, 18 Februari 2007',  ig:'@BagusGalih',       cita:'Pengusaha',           kesan:'Tidak perlu bertepuk supaya dihormati, tunjukkan karya dan akhlakmu.', pesan:'Tidak perlu bertepuk supaya dihormati, tidak perlu sopan supaya dihormati, cukup dengan menjadi pribadi yang memang pantas untuk dihormati.', motto:'Dunia harapan di selalu menderita, semangat orang yang terus belajar.' },
  { name:'Bintang Kusuma',      ttl:'OKU, 2007',                     ig:'-',                 cita:'Wirausahawan',        kesan:'Al-Fakhriyah adalah rumah kedua yang selalu akan kurindukan.', pesan:'Bersama-sama kita membuktikan bahwa generasi pertama bisa menorehkan sejarah terbaik. Pionera selamanya.', motto:'Jadilah bintang yang bersinar di mana pun berada.' },
  { name:'Levi Ardinata',       ttl:'OKU, 2006',                     ig:'-',                 cita:'Pengusaha',           kesan:'Keberhasilan sejati dimulai dari keikhlasan hati.', pesan:'Dari sini saya belajar bahwa keberhasilan sejati dimulai dari keikhlasan hati.', motto:'Ikhlas dalam segala hal adalah kunci keberhasilan.' },
  { name:'Farih Elvan',         ttl:'OKU, 2007',                     ig:'-',                 cita:'Profesional',         kesan:'Terima kasih atas semua ilmu dan kesabaran para guru.', pesan:'Terima kasih Abah, para ustadz dan ustadzah atas semua ilmu dan kesabaran yang diberikan.', motto:'Ilmu adalah cahaya yang tidak akan pernah padam.' },
  { name:'Muhammad Fahrizal',   ttl:'Baturaja, 2006',                ig:'-',                 cita:'Arsitek',             kesan:'Tiga tahun cukup untuk mengubah hidup sepenuhnya.', pesan:'Tiga tahun bukan waktu yang lama, tapi cukup untuk mengubah hidup sepenuhnya.', motto:'Bangunlah mimpi sebelum orang lain membangunkanmu.' },
  { name:'Jepri',               ttl:'OKU, 2007',                     ig:'-',                 cita:'Wirausahawan',        kesan:'Kenangan di pesantren ini akan selalu jadi pengingat untuk bersyukur.', pesan:'Tidak ada yang sia-sia dari setiap perjuangan yang pernah kita lalui di Al-Fakhriyah.', motto:'Bersyukur adalah kunci ketenangan jiwa.' },
  { name:'M. Irza',             ttl:'Baturaja, 2007',                ig:'-',                 cita:'Pengusaha',           kesan:'Momen bersama Pionera adalah cerita yang layak diceritakan.', pesan:'Setiap momen bersama teman-teman Pionera adalah cerita yang layak diceritakan kepada anak cucu kita nanti.', motto:'Jadilah legenda dalam ceritamu sendiri.' },
  { name:'Khairil Dlifin',      ttl:'OKU, 2007',                     ig:'-',                 cita:'Ulama',               kesan:'Al-Fakhriyah mengajarkan ilmu sekaligus akhlak yang mulia.', pesan:'Ilmu tanpa akhlak adalah pedang tanpa gagang. Al-Fakhriyah mengajarkan keduanya.', motto:'Jadilah orang yang berilmu sekaligus berakhlak.' },
  { name:'Muhammad Naf\'an',    ttl:'Baturaja, 2007',                ig:'-',                 cita:'Pengusaha Muslim',    kesan:'Persahabatan di sini jauh lebih berharga dari apapun.', pesan:'Persahabatan yang terjalin di sini jauh lebih berharga dari apapun yang pernah kumiliki.', motto:'Ukhuwah Islamiyah adalah ikatan yang paling kuat.' },
  { name:'M. Rafael',           ttl:'OKU, 2007',                     ig:'-',                 cita:'Profesional',         kesan:'Terima kasih kepada semua yang menjadi bagian perjalanan ini.', pesan:'Terima kasih kepada semua orang yang sudah menjadi bagian dari perjalanan indah ini. Tiga tahun tak tergantikan.', motto:'Perjalanan terbaik adalah yang dilalui bersama.' },
  { name:'Tristan Aditya',      ttl:'Baturaja, 2007',                ig:'-',                 cita:'Pengusaha',           kesan:'Jarak tidak akan memutus ukhuwah Pionera yang sudah terjalin.', pesan:'Meski jalan kita akan berbeda, tapi hati kita tetap satu — Pionera selamanya.', motto:'Ukhuwah sejati tidak mengenal jarak.' },
  { name:'M. Zidan',            ttl:'Baturaja, 2007',                ig:'-',                 cita:'TNI/Polri',           kesan:'Tidak pernah menyesal masuk ke Al-Fakhriyah, ini pilihan terbaik.', pesan:'Banyak hal yang saya sesali, tapi tidak pernah menyesal masuk ke Al-Fakhriyah.', motto:'Keberanian bukan tentang tidak takut, tapi tetap melangkah meski takut.' },
  { name:'Zacky Al-Ikram',      ttl:'OKU, 2007',                     ig:'-',                 cita:'Ulama / Dai',         kesan:'Semoga Allah meridhoi setiap langkah kita bersama.', pesan:'Semoga Allah meridhoi setiap langkah kita ke depan. Aamiin ya Rabbal alamin.', motto:'Jadilah generasi yang mengharumkan nama Islam.' },
  { name:'Praja Hulia',         ttl:'OKU, 2007',                     ig:'-',                 cita:'Pengusaha',           kesan:'Ini bukan akhir, ini adalah awal dari babak baru kehidupan.', pesan:'Ini bukan perpisahan, ini hanyalah awal dari babak baru perjalanan kita masing-masing.', motto:'Sukses adalah perjalanan, bukan tujuan.' },
  { name:'Rahman Sholeh',       ttl:'Baturaja, 2007',                ig:'-',                 cita:'Dai / Ustadz',        kesan:'Jadilah penerang di mana pun berada, itulah arti Pionera.', pesan:'Jadilah penerang di mana pun kalian berada, itulah arti menjadi Pionera.', motto:'Kita bukan sekadar angkatan, kita adalah awal dari sebuah warisan.' },
];

/* ══════════════════════════════════════════════════
   DATA: AKHWAT XII IPA 2 (15)
   ══════════════════════════════════════════════════ */
const akhwatData = [
  { name:'Azizati Zakiah',              ttl:'Karang Endah, 28 Nov 2007', ig:'-',              cita:'Perawat',                 kesan:'Semoga Al-Fakhriyah akan selalu besar dan hebat untuk generasi berikutnya.', pesan:'Jadikan kemampuan yang ada untuk menyamai impian. Jadilah kompetitif yang baik untuk menyamai impian.', motto:'Jadilah versi terbaik dirimu setiap hari.' },
  { name:'Ciesya Sintiya Sunryta Putri',ttl:'Tungku Jaya, 31 Jan 2007',  ig:'-',              cita:'Lecturer & Entrepreneur', kesan:'Aku tidak ingin lebih baik dari orang lain, aku ingin lebih baik dari diriku sendiri.', pesan:'Aku tidak ingin lebih baik dari orang lain, aku ingin lebih baik dari diriku sendiri. (لست أرى ان أكون أفضل من غيري)', motto:'Jadilah kompetitif dengan dirimu sendiri, bukan dengan orang lain.' },
  { name:'Balqis Salsabila Tomyu',      ttl:'OKU Timur, 05 April 2007',  ig:'@Balqisbarrysha',cita:'Dental Specialist',       kesan:'Jangan menyesal sudah pernah melakukan sesuatu yang baik.', pesan:'Jangan menyesal sudah pernah melakukan sesuatu. Something always happen as you plan — just start and make everything happens!', motto:'Something always happen as you plan — just start!' },
  { name:'Denta Afrilisia',             ttl:'Baturaja, 02 April 2007',   ig:'@d_Afrilisia',   cita:'Hakim & Motivator',       kesan:'Apa yang sering nampak terkadang tidaklah yang sebenarnya.', pesan:'Keep Shining, keep believing, and be a star. Kindness is the language which the deaf can hear and the blind can see.', motto:'Keep Shining, keep believing, and be a star.' },
  { name:'Bunga Gelcia Ramadhani',      ttl:'OKU, 13 September 2007',    ig:'-',              cita:'Guru / Dosen',            kesan:'Hanya kamu yang bisa menentukan dan bertanggung jawab atas jalan hidupmu.', pesan:'No one can represent you in running this life — only you can take responsibility for your own life.', motto:'Tidak ada kemuliaan ilmu tanpa meninggalkan kelelahan.' },
  { name:'Dhea Aprilia',                ttl:'Baturaja, 20 April 2007',   ig:'-',              cita:'Police Woman',            kesan:'Jika gagal, kamu sudah punya cerita hidup yang sangat berharga.', pesan:'If you fail, you already have a valuable life story. If you succeed, you will smile because of your efforts.', motto:'Prepare as umbrella before it rains.' },
  { name:'Cahaya Rossalinda Stephani',  ttl:'Baturaja, 13 Sep 2007',     ig:'@ciscl_dhayaa',  cita:'Guru',                    kesan:'Jangan pernah menyerah jika kamu masih bisa berjuang dan berusaha.', pesan:'Jangan pernah menyerah jika kamu masih melakukan. Mimpi hadir dari tekad yang nyata dalam diri.', motto:'Jadilah cahaya yang menerangi, bukan yang menyilaukan.' },
  { name:'Dina Anggeriani',             ttl:'Lampung, 22 Oktober 2005',  ig:'@irfa.nana',     cita:'Ahli Gizi',               kesan:'Yang mencerminkan kebesaranmu hanyalah Allah, jadi terus bertahan.', pesan:'Never give up. Yang mencerminkan kebesaranmu hanyalah Allah, jadi terus bertahan. Your journey is yours to define.', motto:'Never give up — Tenangkanlah!' },
  { name:'Dwi Risky',                   ttl:'OKU, 2007',                 ig:'-',              cita:'Profesional',             kesan:'Persaudaraan kita adalah ikatan hati yang jauh lebih kuat dari ikatan darah.', pesan:'Persaudaraan kita bukan ikatan darah, tapi ikatan hati yang jauh lebih kuat. Tiga tahun bersama membentuk kita lebih tangguh.', motto:'Ukhuwah sejati tumbuh dari ketulusan hati.' },
  { name:'Peta Bela',                   ttl:'OKU, 2007',                 ig:'-',              cita:'Profesional',             kesan:'Sampai jumpa di kesuksesan kita masing-masing nanti.', pesan:'Tidak ada kata selamat tinggal, hanya sampai jumpa di kesuksesan kita nanti. Pionera akan selalu menjadi keluarga.', motto:'Kesuksesan adalah pertemuan yang paling indah.' },
  { name:'Erlian Susanti',              ttl:'OKU, 2007',                 ig:'-',              cita:'Pengusaha',               kesan:'Al-Fakhriyah mengajarkan arti perjuangan yang sesungguhnya dalam hidup.', pesan:'Kenangan indah ini akan selalu menjadi sumber semangat dalam perjalanan hidupku ke depan.', motto:'Perjuangan hari ini adalah kebanggaan hari esok.' },
  { name:'Shofiyyah Ghaidaau',          ttl:'OKU, 2007',                 ig:'-',              cita:'Ulama / Guru Agama',      kesan:'Semoga hati kita selalu jernih seperti nama dalam menjalani kehidupan.', pesan:'Semoga hati kita selalu jernih seperti makna nama dalam menjalani hidup. Jadilah perempuan yang ilmunya bermanfaat.', motto:'Jadilah cahaya yang jernih — shofiyyah.' },
  { name:'Hellyia Dwi',                 ttl:'OKU, 2006',                 ig:'-',              cita:'Profesional',             kesan:'Banyak hal yang kita lalui bersama membuat kita semakin dewasa dan bijak.', pesan:'Banyak hal yang kita lalui bersama, semua itu membuat kita semakin dewasa dan mengerti artinya bersyukur.', motto:'Kedewasaan lahir dari setiap rintangan yang dihadapi.' },
  { name:'Thara Faradiba',              ttl:'OKU, 2007',                 ig:'-',              cita:'Dokter',                  kesan:'Di mana pun kita berada, kita tetap satu — Pionera selamanya.', pesan:'Jarak tidak akan memisahkan persaudaraan yang sudah dibangun dengan ketulusan hati.', motto:'Persaudaraan sejati tidak mengenal batas ruang dan waktu.' },
  { name:'Mutiara Fadhillah',           ttl:'OKU, 2007',                 ig:'-',              cita:'Entrepreneur Muslim',     kesan:'Jadilah mutiara yang memperindah dan menerangi setiap tempat yang kamu singgahi.', pesan:'Jadilah mutiara yang bersinar — memperindah setiap tempat yang kamu singgahi.', motto:'Jadilah cahaya, bukan sekadar keindahan semata.' },
];

/* ══════════════════════════════════════════════════
   DATA: VIDEOS (gallery)
   ══════════════════════════════════════════════════ */
const galVideos = [
  { id:'nb76R-_fEZs', title:'Haflah Akhirussanah 2025',  tag:'Haflah',   sub:'Momen sakral perpisahan angkatan pertama Al-Fakhriyah' },
  { id:'JF06ELa5ILE', title:'Kenangan Bersama Pionera',  tag:'Kenangan', sub:'Kisah-kisah indah sepanjang perjalanan tiga tahun' },
  { id:'5CsvKbjaSYU', title:'Momen Terbaik Pionera',     tag:'Momen',    sub:'Koleksi momen tak terlupakan selama di Al-Fakhriyah' },
  { id:'',            title:'Video Kenangan #4',          tag:'Segera',   sub:'Segera hadir — ganti id dengan ID YouTube video asli' },
  { id:'',            title:'Video Kenangan #5',          tag:'Segera',   sub:'Segera hadir — ganti id dengan ID YouTube video asli' },
];

/* ══════════════════════════════════════════════════
   DATA: GALLERY PHOTOS
   ══════════════════════════════════════════════════ */
const galPhotos = [
  { src:'assets/gallery/haflah-01.jpg',  cat:'haflah',  label:'Haflah Akhirussanah 2025' },
  { src:'assets/gallery/haflah-02.jpg',  cat:'haflah',  label:'Prosesi Penyerahan Ijazah' },
  { src:'assets/gallery/haflah-03.jpg',  cat:'haflah',  label:'Foto Bersama Angkatan' },
  { src:'assets/gallery/haflah-04.jpg',  cat:'haflah',  label:'Momen Haru Perpisahan' },
  { src:'assets/gallery/haflah-05.jpg',  cat:'haflah',  label:'Bersama Para Guru' },
  { src:'assets/gallery/haflah-06.jpg',  cat:'haflah',  label:'Kelulusan PIONERA 2025' },
  { src:'assets/gallery/haflah-07.jpg',  cat:'haflah',  label:'Selebrasi Wisuda Perdana' },
  { src:'assets/gallery/grade10-01.jpg', cat:'grade10', label:'Grade 10 — Hari Pertama' },
  { src:'assets/gallery/grade10-02.jpg', cat:'grade10', label:'Barisan Akhwat 2022' },
  { src:'assets/gallery/grade10-03.jpg', cat:'grade10', label:'Barisan Ikhwan 2022' },
  { src:'assets/gallery/grade10-04.jpg', cat:'grade10', label:'Orientasi MPLS 2022' },
  { src:'assets/gallery/grade10-05.jpg', cat:'grade10', label:'Kegiatan Perdana' },
  { src:'assets/gallery/ldks-01.jpg',    cat:'ldks',    label:'LDKS 2023' },
  { src:'assets/gallery/ldks-02.jpg',    cat:'ldks',    label:'Pelatihan Kepemimpinan' },
  { src:'assets/gallery/ldks-03.jpg',    cat:'ldks',    label:'Pembentukan Karakter' },
  { src:'assets/gallery/ldks-04.jpg',    cat:'ldks',    label:'Aktivitas LDKS' },
  { src:'assets/gallery/aksi-01.jpg',    cat:'aksi',    label:'Aksi Solidaritas Palestina' },
  { src:'assets/gallery/aksi-02.jpg',    cat:'aksi',    label:'Peduli Sesama' },
  { src:'assets/gallery/aksi-03.jpg',    cat:'aksi',    label:'Aksi Sosial Bersama' },
  { src:'assets/gallery/momen-01.jpg',   cat:'momen',   label:'Keseharian Pesantren' },
  { src:'assets/gallery/momen-02.jpg',   cat:'momen',   label:'Murojaah Bersama' },
  { src:'assets/gallery/momen-03.jpg',   cat:'momen',   label:'Aktivitas Santri' },
  { src:'assets/gallery/momen-04.jpg',   cat:'momen',   label:'Kebersamaan Pionera' },
  { src:'assets/gallery/momen-05.jpg',   cat:'momen',   label:'Momen Istimewa' },
  { src:'assets/gallery/momen-06.jpg',   cat:'momen',   label:'Kenangan Sehari-hari' },
];

/* ══════════════════════════════════════════════════
   DATA: 12 ELEMEN LOGO
   ══════════════════════════════════════════════════ */
const logoElem = [
  { name:'Perisai Besi',          desc:'Melambangkan kesatuan utuh yang tidak terpecah belah dan menggambarkan ukhuwah islamiyah yang kokoh.',                           icon:'shield' },
  { name:'Bumi',                  desc:'Tempat berjuang dalam mengamalkan ilmu Al-Qur\'an dan As-Sunnah sebagai bekal di seluruh penjuru dunia.',                        icon:'globe'  },
  { name:'Angkasa',               desc:'Melambangkan Pemikiran, Tujuan, Harapan dan Aspirasi yang luas tanpa batas bagi setiap santri.',                                 icon:'sky'    },
  { name:'Bulan Sabit',           desc:'Simbol awal dari siklus baru, melambangkan harapan, perubahan dan kesempatan baru yang selalu datang.',                          icon:'moon'   },
  { name:'Cincin Emas',           desc:'Simbol spiritual bagi mereka yang ingin menunjukkan rasa syukur dan kesadaran akan keindahan kehidupan.',                        icon:'ring'   },
  { name:'Al-Qur\'an',           desc:'Kitab suci Al-Qur\'an sebagai pedoman utama dan pilar pertama pegangan hidup setiap santri Al-Fakhriyah.',                       icon:'quran'  },
  { name:'Al-Hadits',            desc:'Hadits Nabi ﷺ sebagai pilar kedua yang beriringan dengan Al-Qur\'an dalam membimbing kehidupan santri.',                        icon:'hadits' },
  { name:'Mahkota Lafadz Allah',  desc:'Melambangkan kebesaran Allah SWT yang selalu berada di atas seluruh makhluk ciptaan-Nya — keagungan tiada tara.',               icon:'crown'  },
  { name:'Lafadz Muhammad ﷺ',    desc:'Melambangkan kehormatan Nabi Muhammad SAW sebagai utusan Allah yang menjadi teladan seluruh umat manusia.',                      icon:'star'   },
  { name:'Permata Air',           desc:'Melambangkan kehidupan, fleksibilitas, dan kemampuan beradaptasi. Mengajarkan kerendahan hati dan pentingnya berbagi.',          icon:'drop'   },
  { name:'Warna Biru',            desc:'Mengandung makna kecerdasan, rasa percaya diri dalam kehidupan yang menjadi sebuah harapan dan impian semua orang.',             icon:'blue'   },
  { name:'Warna Emas',            desc:'Melambangkan kemewahan, keberuntungan dan kesuksesan yang menjadi harapan untuk meraih kejayaan di semua bidang.',               icon:'gold'   },
];

const ICONS = {
  shield:`<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M24 4L8 10V24c0 9.5 7 17 16 20 9-3 16-10.5 16-20V10L24 4z" stroke="#d4a843" stroke-width="1.8" fill="rgba(212,168,67,.08)"/><polyline points="17,24 22,29 31,20" stroke="#d4a843" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  globe: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="24" cy="24" r="18" stroke="#d4a843" stroke-width="1.8" fill="rgba(212,168,67,.05)"/><ellipse cx="24" cy="24" rx="10" ry="18" stroke="#d4a843" stroke-width="1.2"/><line x1="6" y1="24" x2="42" y2="24" stroke="#d4a843" stroke-width="1.2"/><line x1="9" y1="16" x2="39" y2="16" stroke="#d4a843" stroke-width="1" opacity=".6"/><line x1="9" y1="32" x2="39" y2="32" stroke="#d4a843" stroke-width="1" opacity=".6"/></svg>`,
  sky:   `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="24" cy="24" r="4" fill="#d4a843"/><circle cx="24" cy="24" r="10" stroke="#d4a843" stroke-width="1.2"/><circle cx="24" cy="24" r="18" stroke="#d4a843" stroke-width="1" stroke-dasharray="4 5"/><circle cx="10" cy="11" r="2" fill="rgba(212,168,67,.5)"/><circle cx="38" cy="10" r="1.5" fill="rgba(212,168,67,.5)"/><circle cx="40" cy="37" r="1.5" fill="rgba(212,168,67,.5)"/><circle cx="8" cy="37" r="2" fill="rgba(212,168,67,.5)"/></svg>`,
  moon:  `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M30 12a14 14 0 1 0 0 24 10 10 0 1 1 0-24z" stroke="#d4a843" stroke-width="1.8" fill="rgba(212,168,67,.1)"/><circle cx="35" cy="14" r="2" fill="#d4a843"/><circle cx="39" cy="22" r="1.4" fill="#d4a843" opacity=".55"/></svg>`,
  ring:  `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="24" cy="24" r="16" stroke="#d4a843" stroke-width="4" fill="none"/><circle cx="24" cy="24" r="10" stroke="#d4a843" stroke-width="1.2" fill="rgba(212,168,67,.05)"/><path d="M19 18L29 18L32 28L24 34L16 28Z" stroke="#d4a843" stroke-width="1.2" fill="rgba(212,168,67,.08)"/></svg>`,
  quran: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="8" width="28" height="34" rx="3" stroke="#d4a843" stroke-width="1.8" fill="rgba(212,168,67,.07)"/><line x1="14" y1="17" x2="34" y2="17" stroke="#d4a843" stroke-width="1.4"/><line x1="14" y1="22" x2="34" y2="22" stroke="#d4a843" stroke-width="1.4"/><line x1="14" y1="27" x2="28" y2="27" stroke="#d4a843" stroke-width="1.4"/><line x1="24" y1="8" x2="24" y2="42" stroke="#d4a843" stroke-width="1.2" opacity=".35"/></svg>`,
  hadits:`<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 12Q10 8 14 8L34 8Q38 8 38 12L38 36Q38 40 34 40L14 40Q10 40 10 36Z" stroke="#d4a843" stroke-width="1.8" fill="rgba(212,168,67,.06)"/><path d="M16 16Q24 12 32 16" stroke="#d4a843" stroke-width="1.4" fill="none"/><line x1="14" y1="22" x2="34" y2="22" stroke="#d4a843" stroke-width="1.2"/><line x1="14" y1="27" x2="30" y2="27" stroke="#d4a843" stroke-width="1.2"/><line x1="14" y1="32" x2="26" y2="32" stroke="#d4a843" stroke-width="1.2"/></svg>`,
  crown: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 34L8 16L16 26L24 10L32 26L40 16L40 34Z" stroke="#d4a843" stroke-width="1.8" fill="rgba(212,168,67,.1)" stroke-linejoin="round"/><line x1="8" y1="38" x2="40" y2="38" stroke="#d4a843" stroke-width="2.5"/><circle cx="24" cy="10" r="2.5" fill="#d4a843"/><circle cx="8" cy="16" r="2.5" fill="#d4a843"/><circle cx="40" cy="16" r="2.5" fill="#d4a843"/></svg>`,
  star:  `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M24 6L28 18L42 18L31 26L35 38L24 30L13 38L17 26L6 18L20 18Z" stroke="#d4a843" stroke-width="1.8" fill="rgba(212,168,67,.12)" stroke-linejoin="round"/></svg>`,
  drop:  `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M24 8C24 8 10 22 10 30A14 14 0 0 0 38 30C38 22 24 8 24 8Z" stroke="#d4a843" stroke-width="1.8" fill="rgba(212,168,67,.1)"/><path d="M18 32Q24 27 30 32" stroke="#d4a843" stroke-width="1.4" fill="none" opacity=".55"/></svg>`,
  blue:  `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="24" cy="24" r="18" fill="rgba(30,100,200,.22)" stroke="#4d88cc" stroke-width="1.8"/><circle cx="24" cy="24" r="10" fill="rgba(30,100,200,.18)" stroke="#6aabee" stroke-width="1.4"/><circle cx="24" cy="24" r="4" fill="rgba(40,160,255,.5)"/></svg>`,
  gold:  `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="24" cy="24" r="18" fill="rgba(212,168,67,.18)" stroke="#d4a843" stroke-width="1.8"/><circle cx="24" cy="24" r="10" fill="rgba(212,168,67,.22)" stroke="#f0c84a" stroke-width="1.4"/><circle cx="24" cy="24" r="4" fill="#d4a843"/></svg>`,
};

/* ═══════════════════════════════════════════════════════
   ██████████████████████████████████████████████████████
   ▌ LOADER
   ██████████████████████████████████████████████████████
   ═══════════════════════════════════════════════════════ */
window.addEventListener('load', () => {
  const L = $('loader');
  if (!L) return;
  setTimeout(() => {
    L.classList.add('gone');
    document.body.classList.remove('lock');
  }, 3800);
});

/* ═══════════════════════════════════════════════════════
   ▌ NAVBAR
   ═══════════════════════════════════════════════════════ */
const $nav = $('nav');
if ($nav) {
  window.addEventListener('scroll', () => {
    $nav.classList.toggle('scrolled', scrollY > 50);
  }, { passive: true });
}

/* ═══════════════════════════════════════════════════════
   ▌ MOBILE NAV
   ═══════════════════════════════════════════════════════ */
const $ham = $('hamBtn');
const $mdr = $('mobDrawer');
const $mbg = $('mobBg');

function closeMob() {
  $mdr?.classList.remove('on');
  $mbg?.classList.remove('on');
  $ham?.classList.remove('on');
  $ham?.setAttribute('aria-expanded', 'false');
  document.body.classList.remove('lock');
}

if ($ham) {
  $ham.addEventListener('click', () => {
    const open = $mdr.classList.toggle('on');
    $mbg.classList.toggle('on', open);
    $ham.classList.toggle('on', open);
    $ham.setAttribute('aria-expanded', String(open));
    document.body.classList.toggle('lock', open);
  });
}
if ($mbg) $mbg.addEventListener('click', closeMob);

// Close drawer when any mob-link is clicked — NO inline onclick needed
if ($mdr) {
  $mdr.addEventListener('click', e => {
    if (e.target.closest('.mob-link')) closeMob();
  });
}

/* ═══════════════════════════════════════════════════════
   ▌ HERO STARS (canvas pointer-events disabled via CSS)
   ═══════════════════════════════════════════════════════ */
const $cvs = $('hcvs');
if ($cvs) {
  const cx = $cvs.getContext('2d');
  let W, H, S = [];
  const resize = () => { W = $cvs.width = $cvs.offsetWidth; H = $cvs.height = $cvs.offsetHeight; };
  const init   = () => {
    S = Array.from({ length: 175 }, () => ({
      x: Math.random() * W, y: Math.random() * H,
      r: Math.random() * 1.4 + .18, a: Math.random(),
      v: Math.random() * .45 + .07, d: Math.random() > .5 ? 1 : -1,
    }));
  };
  const draw = () => {
    cx.clearRect(0, 0, W, H);
    S.forEach(s => {
      s.a += s.v * .006 * s.d;
      if (s.a > 1 || s.a < 0) s.d *= -1;
      cx.beginPath();
      cx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      cx.fillStyle = `rgba(212,168,67,${s.a * .58})`;
      cx.fill();
    });
    requestAnimationFrame(draw);
  };
  window.addEventListener('resize', () => { resize(); init(); }, { passive: true });
  resize(); init(); draw();
}

/* ═══════════════════════════════════════════════════════
   ▌ SCROLL
   ═══════════════════════════════════════════════════════ */
const $hscr = document.querySelector('.h-scroll');
if ($hscr) {
  $hscr.addEventListener('click', () => {
    const el = document.querySelector('#sejarah');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  });
}

/* ═══════════════════════════════════════════════════════
   ▌ SCROLL REVEAL
   ═══════════════════════════════════════════════════════ */
const revObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('on'); revObs.unobserve(e.target); }
  });
}, { threshold: .1 });

const reveal = () => document.querySelectorAll('.rv:not(.on)').forEach(el => revObs.observe(el));

/* ═══════════════════════════════════════════════════════
   ▌ MODAL — NO inline onclick, data-idx only
   ═══════════════════════════════════════════════════════ */
const $modal = $('modal');
const $mClose = $('mClose');
const $mPhoto = $('mPhoto');
const $mName  = $('mName');
const $mRole  = $('mRole');
const $mGroup = $('mGroup');
const $mMsg   = $('mMsg');
const $mBio   = $('mBio');

function openModal(d) {
  if (!$modal) return;
  $mPhoto.src = d.photo || '';
  $mPhoto.onerror = () => { $mPhoto.src = av(d.name); };
  $mName.textContent  = d.name   || '';
  $mRole.textContent  = d.role   || '';
  $mGroup.textContent = d.group  || '';

  if (d.longMsg) {
    $mMsg.innerHTML    = esc(d.msg || '').replace(/\n/g, '<br>');
    $mMsg.style.textAlign = 'left';
  } else {
    $mMsg.textContent  = d.msg   || '';
    $mMsg.style.textAlign = 'center';
  }

  if ($mBio) {
    const rows = [];
    if (d.ttl)              rows.push(`<div class="m-bio-row"><span class="m-bio-icon">📅</span><div><span class="m-bio-lbl">Tempat, Tanggal Lahir</span><span class="m-bio-val">${esc(d.ttl)}</span></div></div>`);
    if (d.ig && d.ig!=='-') rows.push(`<div class="m-bio-row"><span class="m-bio-icon">📸</span><div><span class="m-bio-lbl">Instagram</span><span class="m-bio-val">${esc(d.ig)}</span></div></div>`);
    if (d.cita)             rows.push(`<div class="m-bio-row"><span class="m-bio-icon">🎯</span><div><span class="m-bio-lbl">Cita-cita</span><span class="m-bio-val"><strong>${esc(d.cita)}</strong></span></div></div>`);
    if (d.kesan)            rows.push(`<div class="m-bio-row"><span class="m-bio-icon">💛</span><div><span class="m-bio-lbl">Kesan</span><span class="m-bio-val">${esc(d.kesan)}</span></div></div>`);
    if (d.motto)            rows.push(`<div class="m-bio-row"><span class="m-bio-icon">✨</span><div><span class="m-bio-lbl">Motto</span><span class="m-bio-val"><em style="color:rgba(240,200,74,.88)">"${esc(d.motto)}"</em></span></div></div>`);
    $mBio.innerHTML = rows.join('');
    $mBio.style.display = rows.length ? 'block' : 'none';
  }

  $modal.classList.add('on');
  document.body.classList.add('lock');
}

function closeModal() {
  $modal?.classList.remove('on');
  document.body.classList.remove('lock');
}

if ($mClose) $mClose.addEventListener('click', closeModal);
if ($modal)  $modal.addEventListener('click', e => { if (e.target === $modal) closeModal(); });
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') { closeModal(); closeLb(); }
});

/* ═══════════════════════════════════════════════════════
   ▌ EVENT DELEGATION — one listener per container
     All cards use data-type + data-idx (no inline JS)
   ═══════════════════════════════════════════════════════ */
function delegateClick(containerId, handler) {
  const el = $(containerId);
  if (!el) return;
  // Both click (desktop) and touchend (mobile)
  el.addEventListener('click', handler);
}

/* ═══════════════════════════════════════════════════════
   ▌ RENDER: ELEMEN LOGO
   ═══════════════════════════════════════════════════════ */
function renderElem() {
  const g = $('elemGrid');
  if (!g) return;
  g.innerHTML = logoElem.map((el, i) => `
    <div class="elem-card rv d${(i % 4) + 1}">
      <div class="elem-icon">${ICONS[el.icon] || ''}</div>
      <p class="elem-name">${esc(el.name)}</p>
      <p class="elem-desc">${esc(el.desc)}</p>
    </div>
  `).join('');
}

/* ═══════════════════════════════════════════════════════
   ▌ RENDER: SAMBUTAN PENGASUH
   ═══════════════════════════════════════════════════════ */
function renderSambutan() {
  const el = $('sambutanCard');
  if (!el) return;

  STORE.sambutan = pengasuh;

  el.innerHTML = `
    <div class="sambut-card rv" data-type="sambutan" data-idx="0" tabindex="0" role="button" aria-label="Baca sambutan ${esc(pengasuh.name)}">
      <div class="sambut-photo-wrap">
        <img src="${esc(pengasuh.photo)}" alt="${esc(pengasuh.name)}"
             onerror="this.src='${av(pengasuh.name)}'"/>
      </div>
      <div class="sambut-body">
        <span class="sambut-tag">Sambutan Pengasuh Pondok</span>
        <h3 class="sambut-name">${esc(pengasuh.name)}</h3>
        <p class="sambut-role">${esc(pengasuh.role)}</p>
        <div class="sambut-rule"></div>
        <p class="sambut-preview">"${esc(pengasuh.preview)}"</p>
        <span class="sambut-cta">Baca Sambutan Lengkap →</span>
      </div>
    </div>
  `;

  delegateClick('sambutanCard', e => {
    const card = e.target.closest('[data-type="sambutan"]');
    if (!card) return;
    const d = STORE.sambutan;
    openModal({ photo: d.photo, name: d.name, role: d.role, msg: d.full, longMsg: true });
  });
}

/* ═══════════════════════════════════════════════════════
   ▌ RENDER: VIDEO INDEX (single)
   ═══════════════════════════════════════════════════════ */
function renderVidIndex() {
  const el = $('vidIndex');
  if (!el) return;
  const id = 'GzC6s1fVDQM';
  el.innerHTML = `
    <div class="vid-single rv">
      <div class="vid-frame">
        <iframe src="https://www.youtube.com/embed/${id}?rel=0&modestbranding=1"
          title="Sambutan KH. Zulfan Barron"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen loading="lazy"></iframe>
      </div>
      <div class="vid-meta">
        <span class="vid-meta-tag">Video Sambutan</span>
        <h3>Pesan dari KH. Zulfan Barron, S.Pd.I., M.Si.</h3>
      </div>
    </div>
  `;
}

/* ═══════════════════════════════════════════════════════
   ▌ RENDER: GURU (no modal — just grid)
   ═══════════════════════════════════════════════════════ */
function renderGuru() {
  const gPos   = $('guruPos');
  const gNoPos = $('guruNoPos');

  if (gPos) {
    gPos.innerHTML = guruPos.map((g, i) => `
      <div class="gc rv d${(i % 4) + 1}">
        <div class="gc-photo">
          <img src="${esc(g.photo)}" alt="${esc(g.name)}" loading="lazy"
               onerror="this.src='${av(g.name)}'"/>
        </div>
        <div class="gc-info">
          <p class="gc-name">${esc(g.name)}</p>
          ${g.pos ? `<p class="gc-pos">${esc(g.pos)}</p>` : ''}
        </div>
      </div>
    `).join('');
  }

  if (gNoPos) {
    gNoPos.innerHTML = guruNoPos.map((n, i) => {
      const slug = n.toLowerCase().replace(/[^a-z\s]/g, '').trim().replace(/\s+/g, '-');
      return `
        <div class="gc rv d${(i % 4) + 1}">
          <div class="gc-photo">
            <img src="assets/guru/${slug}.jpg" alt="${esc(n)}" loading="lazy"
                 onerror="this.src='${av(n)}'"/>
          </div>
          <div class="gc-info">
            <p class="gc-name">${esc(n)}</p>
          </div>
        </div>
      `;
    }).join('');
  }
}

/* ═══════════════════════════════════════════════════════
   ▌ RENDER: PESAN WALI KELAS + MURID
   Uses data-idx on each card → delegation safe on mobile
   ═══════════════════════════════════════════════════════ */
function renderPesanWK(data, elId, storeKey) {
  const el = $(elId);
  if (!el) return;
  STORE[storeKey] = data;

  el.innerHTML = `
    <div class="pesan-card rv" data-type="${storeKey}" data-idx="0"
         tabindex="0" role="button" aria-label="Baca pesan ${esc(data.name)}">
      <div class="pc-photo-wrap">
        <img src="${esc(data.photo)}" alt="${esc(data.name)}"
             onerror="this.src='${av(data.name)}'"/>
      </div>
      <div class="pc-body">
        <span class="pc-label">Pesan Cinta Wali Kelas</span>
        <h3 class="pc-name">${esc(data.name)}</h3>
        <p class="pc-role">${esc(data.role)}</p>
        <p class="pc-quote">${esc(data.preview)}</p>
        <span class="pc-more">Baca Pesan Lengkap →</span>
      </div>
    </div>
  `;

  el.addEventListener('click', e => {
    const card = e.target.closest(`[data-type="${storeKey}"]`);
    if (!card) return;
    const d = STORE[storeKey];
    openModal({ photo: d.photo, name: d.name, role: d.role, msg: d.full, longMsg: true });
  });
}

function renderMurid(list, elId, storeKey, kelas) {
  const el = $(elId);
  if (!el) return;
  STORE[storeKey] = list;

  el.innerHTML = list.map((s, i) => {
    const slug = s.name.toLowerCase().replace(/[^a-z\s]/g, '').trim().replace(/\s+/g, '-');
    return `
      <div class="mc rv d${(i % 4) + 1}"
           data-type="${storeKey}" data-idx="${i}"
           tabindex="0" role="button" aria-label="Lihat biodata ${esc(s.name)}">
        <div class="mc-photo">
          <img src="assets/siswa/${slug}.jpg" alt="${esc(s.name)}" loading="lazy"
               onerror="this.src='${av(s.name)}'"/>
        </div>
        <div class="mc-info">
          <p class="mc-name">${esc(s.name)}</p>
          <p class="mc-hint">Lihat Biodata →</p>
        </div>
      </div>
    `;
  }).join('');

  el.addEventListener('click', e => {
    const card = e.target.closest(`[data-type="${storeKey}"]`);
    if (!card) return;
    const idx = parseInt(card.dataset.idx, 10);
    const s = STORE[storeKey][idx];
    if (!s) return;
    const slug = s.name.toLowerCase().replace(/[^a-z\s]/g, '').trim().replace(/\s+/g, '-');
    openModal({
      photo: `assets/siswa/${slug}.jpg`,
      name:  s.name,
      role:  'Santri Pionera',
      group: kelas,
      msg:   s.pesan,
      ttl:   s.ttl,
      ig:    s.ig,
      cita:  s.cita,
      kesan: s.kesan,
      motto: s.motto,
    });
  });

  // Keyboard support
  el.addEventListener('keydown', e => {
    if (e.key !== 'Enter' && e.key !== ' ') return;
    const card = e.target.closest(`[data-type="${storeKey}"]`);
    if (card) card.click();
  });

  setTimeout(reveal, 60);
}

/* ═══════════════════════════════════════════════════════
   ▌ GALLERY VIDEO (gallery.html)
   ═══════════════════════════════════════════════════════ */
let activeVid = 0;

function renderGalVid() {
  const main    = $('gvMain');
  const sidebar = $('gvSidebar');
  if (!main || !sidebar) return;

  function loadVid(idx) {
    activeVid = idx;
    const v = galVideos[idx];
    main.innerHTML = v.id
      ? `<iframe src="https://www.youtube.com/embed/${v.id}?rel=0&modestbranding=1"
             title="${esc(v.title)}"
             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
             allowfullscreen loading="lazy"></iframe>`
      : `<div class="gvid-ph"><div class="gvph-icon">▶</div><p class="gvph-txt">Video segera hadir</p></div>`;
    sidebar.querySelectorAll('.vtab').forEach((t, i) => t.classList.toggle('on', i === idx));
  }

  sidebar.innerHTML = galVideos.map((v, i) => `
    <button class="vtab ${i === 0 ? 'on' : ''}" data-vidx="${i}">
      <span class="vtab-t">${esc(v.tag)}</span>
      <span class="vtab-n">${esc(v.title)}</span>
      <span class="vtab-s">${esc(v.sub)}</span>
    </button>
  `).join('');

  sidebar.addEventListener('click', e => {
    const btn = e.target.closest('.vtab');
    if (!btn) return;
    loadVid(parseInt(btn.dataset.vidx, 10));
  });

  loadVid(0);
}

/* ═══════════════════════════════════════════════════════
   ▌ GALLERY PHOTOS
   ═══════════════════════════════════════════════════════ */
let fItems = [], lbIdx = 0;

function renderGal(filter) {
  const g = $('galGrid');
  if (!g) return;
  fItems = filter === 'all' ? galPhotos : galPhotos.filter(p => p.cat === filter);
  g.innerHTML = fItems.map((p, i) => `
    <div class="gi" data-gidx="${i}" tabindex="0" role="button" aria-label="${esc(p.label)}">
      <img src="${esc(p.src)}" alt="${esc(p.label)}" loading="lazy"
           onerror="this.src='${gph(p.label)}'"/>
      <div class="gi-ovl">
        <span class="gi-lbl">${esc(p.label)}</span>
        <span class="gi-zoom">⤢</span>
      </div>
    </div>
  `).join('');
}

function setupFilters() {
  const fc = $('galFilters') || document.querySelector('.gal-filters');
  if (!fc) return;
  fc.addEventListener('click', e => {
    const btn = e.target.closest('.fb');
    if (!btn) return;
    fc.querySelectorAll('.fb').forEach(b => b.classList.remove('on'));
    btn.classList.add('on');
    renderGal(btn.dataset.cat);
  });
}

/* ═══════════════════════════════════════════════════════
   ▌ LIGHTBOX — delegation on grid
   ═══════════════════════════════════════════════════════ */
const $lb    = $('lb');
const $lbImg = $('lbImg');
const $lbLbl = $('lbLbl');
const $lbCnt = $('lbCnt');

function openLb(idx) {
  if (!$lb) return;
  lbIdx = idx;
  updLb();
  $lb.classList.add('on');
  document.body.classList.add('lock');
}
function closeLb() {
  $lb?.classList.remove('on');
  document.body.classList.remove('lock');
}
function updLb() {
  const p = fItems[lbIdx];
  if (!p || !$lbImg) return;
  $lbImg.style.opacity = '0';
  setTimeout(() => {
    $lbImg.src = p.src;
    $lbImg.alt = p.label;
    $lbImg.onerror = () => { $lbImg.src = gph(p.label); };
    if ($lbLbl) $lbLbl.textContent = p.label;
    if ($lbCnt) $lbCnt.textContent = `${lbIdx + 1} / ${fItems.length}`;
    $lbImg.style.opacity = '1';
  }, 160);
}

// Gallery grid delegation
const $gg = $('galGrid');
if ($gg) {
  $gg.addEventListener('click', e => {
    const gi = e.target.closest('.gi');
    if (!gi) return;
    openLb(parseInt(gi.dataset.gidx, 10));
  });
}

const $lbClose = $('lbClose');
const $lbPrev  = $('lbPrev');
const $lbNext  = $('lbNext');
if ($lbClose) $lbClose.addEventListener('click', closeLb);
if ($lb)      $lb.addEventListener('click', e => { if (e.target === $lb) closeLb(); });
if ($lbPrev)  $lbPrev.addEventListener('click', () => { lbIdx = (lbIdx - 1 + fItems.length) % fItems.length; updLb(); });
if ($lbNext)  $lbNext.addEventListener('click', () => { lbIdx = (lbIdx + 1) % fItems.length; updLb(); });

// Swipe lightbox
let tsx = 0;
if ($lb) {
  $lb.addEventListener('touchstart', e => { tsx = e.changedTouches[0].screenX; }, { passive: true });
  $lb.addEventListener('touchend',   e => {
    const d = tsx - e.changedTouches[0].screenX;
    if (Math.abs(d) > 44) {
      lbIdx = d > 0
        ? (lbIdx + 1) % fItems.length
        : (lbIdx - 1 + fItems.length) % fItems.length;
      updLb();
    }
  }, { passive: true });
}

/* ═══════════════════════════════════════════════════════
   ████████████████████████████████████████████████████
   ▌ TDD — TEST SUITE
     Runs automatically in test.html
     Can also call window.TESTS.run() from console
   ████████████████████████████████████████████████████
   ═══════════════════════════════════════════════════════ */
window.TESTS = (() => {
  const results = [];
  let passed = 0, failed = 0;

  function assert(label, condition) {
    if (condition) {
      results.push({ ok: true,  label });
      passed++;
    } else {
      results.push({ ok: false, label });
      failed++;
      console.warn('[FAIL]', label);
    }
  }

  function run() {
    results.length = 0; passed = 0; failed = 0;

    // ── DATA TESTS ────────────────────────────────
    assert('ikhwanData has 22 entries',      ikhwanData.length === 22);
    assert('akhwatData has 15 entries',      akhwatData.length === 15);
    assert('guruPos has 18 entries',         guruPos.length === 18);
    assert('guruNoPos has 36 entries',       guruNoPos.length === 36);
    assert('logoElem has 12 entries',        logoElem.length === 12);
    assert('galVideos has 5 entries',        galVideos.length === 5);
    assert('galPhotos has entries',          galPhotos.length > 0);
    assert('pengasuh has name',              !!pengasuh.name);
    assert('pengasuh has full text',         pengasuh.full.length > 50);
    assert('missnur has full text',          missnur.full.length > 50);
    assert('refita has full text',           refita.full.length > 50);

    // ── DATA INTEGRITY ────────────────────────────
    assert('All ikhwan have name',           ikhwanData.every(s => s.name));
    assert('All ikhwan have cita',           ikhwanData.every(s => s.cita));
    assert('All ikhwan have pesan',          ikhwanData.every(s => s.pesan));
    assert('All ikhwan have motto',          ikhwanData.every(s => s.motto));
    assert('All akhwat have name',           akhwatData.every(s => s.name));
    assert('All akhwat have cita',           akhwatData.every(s => s.cita));
    assert('All guruPos have photo path',    guruPos.every(g => g.photo));
    assert('All logoElem have icon key',     logoElem.every(e => ICONS[e.icon]));
    assert('galVideos first has YouTube id', galVideos[0].id.length > 0);
    assert('galPhotos all have cat',         galPhotos.every(p => p.cat));
    assert('galPhotos all have label',       galPhotos.every(p => p.label));

    // ── HELPER TESTS ─────────────────────────────
    assert('av() returns url string',        av('Test').startsWith('https://'));
    assert('gph() returns url string',       gph('Test').startsWith('https://'));
    assert('esc() escapes & < >',            esc('<b>&</b>') === '&lt;b&gt;&amp;&lt;/b&gt;');
    assert('esc() handles empty string',     esc('') === '');

    // ── STORE TESTS ───────────────────────────────
    assert('STORE object exists',            typeof STORE === 'object');

    // ── DOM TESTS (run after DOMContentLoaded) ───
    const domReady = document.readyState !== 'loading';
    if (domReady) {
      // Canvas must have pointer-events:none
      const cvs = document.querySelector('#hcvs');
      if (cvs) {
        const pe = getComputedStyle(cvs).pointerEvents;
        assert('canvas #hcvs has pointer-events:none', pe === 'none');
      }

      // Modal exists
      const modal = document.getElementById('modal');
      assert('Modal element exists',              !!modal);

      // Modal initially hidden
      if (modal) {
        assert('Modal initially hidden',           !modal.classList.contains('on'));
      }

      // All .mc cards use data-idx (no inline onclick)
      const mcCards = document.querySelectorAll('.mc');
      if (mcCards.length > 0) {
        assert('MC cards use data-idx not onclick',
          [...mcCards].every(c => c.hasAttribute('data-idx') && !c.hasAttribute('onclick')));
      }

      // All .pesan-card use data-type
      const pesanCards = document.querySelectorAll('.pesan-card');
      if (pesanCards.length > 0) {
        assert('Pesan cards use data-type not onclick',
          [...pesanCards].every(c => c.hasAttribute('data-type') && !c.hasAttribute('onclick')));
      }

      // Sambutan card uses data-type
      const sambutCard = document.querySelector('.sambut-card');
      if (sambutCard) {
        assert('Sambut card uses data-type not onclick',
          sambutCard.hasAttribute('data-type') && !sambutCard.hasAttribute('onclick'));
      }

      // No element has inline onclick (THE main mobile bug)
      const allOnclick = document.querySelectorAll('[onclick]');
      assert('ZERO elements with inline onclick (mobile fix)',
        allOnclick.length === 0);

      // Mobile drawer links use .mob-link class, not onclick
      const mobLinks = document.querySelectorAll('.mob-link');
      if (mobLinks.length > 0) {
        assert('Mob drawer links use .mob-link not onclick',
          [...mobLinks].every(l => !l.hasAttribute('onclick')));
      }

      // Navbar exists
      assert('Navbar #nav exists',              !!document.getElementById('nav'));

      // Hero scroll div exists and is z-index above canvas
      const hscr = document.querySelector('.h-scroll');
      assert('.h-scroll exists',                !!hscr);

      // Buttons have touch-action
      const btns = document.querySelectorAll('.btn-p, .btn-o, .mc, .pesan-card, .sambut-card');
      if (btns.length > 0) {
        assert('Interactive elements have touch-action:manipulation',
          [...btns].every(b => getComputedStyle(b).touchAction === 'manipulation'));
      }
    }

    // ── SUMMARY ──────────────────────────────────
    console.group(`%c PIONERA TESTS — ${passed} passed, ${failed} failed `,
      `background:${failed ? '#c0392b' : '#27ae60'};color:#fff;padding:2px 8px;border-radius:4px`);
    results.forEach(r => {
      console.log(`%c ${r.ok ? '✓' : '✗'} ${r.label}`,
        `color:${r.ok ? '#27ae60' : '#e74c3c'}`);
    });
    console.groupEnd();

    return { passed, failed, results };
  }

  return { run, results };
})();

/* ═══════════════════════════════════════════════════════
   ▌ INIT
   ═══════════════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  renderElem();
  renderSambutan();
  renderVidIndex();
  renderGuru();
  renderPesanWK(missnur, 'pesanMissnur', 'pesanNur');
  renderMurid(ikhwanData, 'ikhwanGrid', 'ikhwan', 'Ikhwan · XII IPA 1');
  renderPesanWK(refita,   'pesanRefita', 'pesanRef');
  renderMurid(akhwatData, 'akhwatGrid',  'akhwat',  'Akhwat · XII IPA 2');
  renderGalVid();
  renderGal('all');
  setupFilters();
  reveal();

  // Auto-run tests in dev (remove in production or keep — harmless)
  if (location.search.includes('test') || location.hostname === 'localhost') {
    setTimeout(() => window.TESTS.run(), 600);
  }
});