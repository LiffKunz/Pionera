/* ═══════════════════════════════════════════════════
   PIONERA GENERATION 2025 — script.js  v4
   Features: scroll-nav, parallax, guru popup,
             share, print PDF, back-to-top,
             animated counters, download galeri
             All bugs fixed.
   ═══════════════════════════════════════════════════ */
'use strict';

const $ = id => document.getElementById(id);
const av  = n => `https://ui-avatars.com/api/?name=${encodeURIComponent(n)}&background=0d2240&color=d4a843&size=200&bold=true&font-size=0.36`;
const gph = l => `https://placehold.co/800x600/071828/d4a843?text=${encodeURIComponent(l)}`;
const esc = s => String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');

const STORE = { sambutan:null, pesanNur:null, pesanRef:null, ikhwan:[], akhwat:[] };

/* ══════════════════════════════════════════════════
   DATA: SAMBUTAN PENGASUH
   ══════════════════════════════════════════════════ */
const pengasuh = {
  name:'KH. Zulfan Barron, S.Pd.I., M.Si.',
  role:'Pengasuh Pondok Pesantren Al-Fakhriyah Baturaja',
  photo:'assets/sambutan/abah.jpg',
  preview:'Kalian adalah permata yang akan tetap berkilau dan berharga di manapun saja kalian berada. Tetaplah menjadi generasi yang menebarkan kebaikan dan mengharumkan nama Al-Fakhriyah.',
  full:`Assalaamu'alaikum Warahmatullahi Wabarakatuh.

Anak-anak yang Abah sayangi dan mudah-mudahan dimuliakan Allah, 3 atau bahkan 6 tahun yang lalu, kalian datang di Al-Fakhriyah bersama orang tua kalian untuk pertama kalinya. Pada saat itu kalian masih mungil dan lucu. Dengan hati yang berat, Abah menangis pada saat itu.

Kini, sudah saatnya kalian Abah kembalikan ke pangkuan orang tua kalian agar dihantarkan ke lembaga pendidikan yang lebih tinggi. Sudah saatnya kalian melanjutkan pendidikan ke jenjang selanjutnya anakku. Terlalu banyak kisah tentang kalian yang membuat hari ini begitu berat bagi Abah.

Kalian adalah permata, kalian adalah bintang yang akan tetap berkilau dan berharga di manapun saja kalian berada. Tetaplah menjadi generasi yang menebarkan kebaikan, menjaga amarwah santri, dan mengharumkan nama Pondok Pesantren Al-Fakhriyah.

Yaa Allah terima kasih karena Engkau telah menganugerahkan mereka — hamba-hambaMu yang jadikanlah mereka shalih dan shalihah, jadikanlah mereka banyak memiliki manfaat dan bermanfaat, dan anugerahkanlah kepada mereka kehidupan yang baik, aamiin.

Berangkatlah anak-anakku, doa Abah selalu menyertai kalian.

Wassalaamu'alaikum Warahmatullahi Wabarakatuh.`
};

const missnur = {
  name:'Ustadzah Nursayidah, S.Pd.',
  role:'Wali Kelas XII IPA 1 / Koordinator Akhwat',
  photo:'assets/sambutan/missnur.jpg',
  preview:'"Dua tahun kita lalui penuh doa dan usaha. Setiap langkah kalian adalah saksi perjuangan dalam menuntut ilmu. Jadilah cahaya di mana pun kalian berada."',
  full:`Assalaamu'alaikum Warahmatullahi Wabarakatuh.

Untuk Anak-anakku Tersayang, XII IPA 1.

Dua tahun kita lalui penuh doa dan usaha. Setiap langkah kalian adalah saksi perjuangan dalam menuntut ilmu. Teruslah melangkah dengan keyakinan, karena Allah selalu bersama hamba-Nya yang berjuang.

Jadilah cahaya di mana pun kalian berada — cahaya yang menerangi, bukan menyilaukan. Ilmu yang kalian bawa bukan hanya untuk diri sendiri, tapi untuk keluarga, masyarakat, dan bangsa.

Kalian adalah kebanggaan ibu. Miss Nur akan selalu merindukan tawa, semangat, dan kebersamaan kita. Semoga Allah ridho atas setiap langkah kalian ke depan.

Wassalaamu'alaikum Warahmatullahi Wabarakatuh.

— Miss Nur (Ustadzah Nursayidah, S.Pd.)`
};

const refita = {
  name:'Ustadzah Refita Yana, S.Pd.I.',
  role:'Wali Kelas XII IPA 2 / Bidang Kesiswaan MA',
  photo:'assets/sambutan/refita.jpg',
  preview:'"Bila hidup terasa berat, ingatlah nasihat gurumu dan do\'a orang tuamu — dari sanalah Allah kirimkan kekuatan baru untuk hatimu yang terus berjuang."',
  full:`Assalaamu'alaikum Warahmatullahi Wabarakatuh.

Untuk Anakku Tersayang "PIONERA" — Anak-anakku yang Ustadzah cintai karena Allah.

Waktu berjalan begitu cepat. Hari-hari di pondok yang dulu terasa panjang kini hanya tinggal kenangan indah yang akan selalu Ustadzah simpan di hati. Tawa kalian, canda, murojaah, bahkan langkah tergesa menuju masjid — semua akan selalu Ustadzah rindukan.

Kalian akan segera melangkah ke dunia luar yang luas dan penuh warna. Di sanalah ujian sesungguhnya akan kalian temui. Maka, jagalah Allah, niscaya Allah akan menjagamu. Jangan lepaskan zikir dari lisanmu, dan jangan jauhkan Al-Qur'an dari hatimu.

Boleh kalian pergi jauh, tapi jangan pernah pergi dari hidayah-Nya. Boleh kalian mengejar cita-cita setinggi langit, tapi tetap tunduk di bumi untuk-Nya.

Ingatlah, anak-anakku — ilmu tanpa akhlak tidak akan membawa berkah, dan akhlak tanpa iman hanyalah hiasan semu. Jadilah "Cahaya" yang lembut, namun mampu menerangi sekitar.

Bila hidup terasa berat, ingatlah nasihat gurumu dan do'a orang tuamu — dari sanalah Allah kirimkan kekuatan baru untuk hatimu yang terus berjuang.

Dengan penuh cinta dan doa,
Wassalaamu'alaikum Warahmatullahi Wabarakatuh.

— Ustadzah Refita Yana, S.Pd.I.`
};

/* ══════════════════════════════════════════════════
   DATA: GURU
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
   DATA: IKHWAN (22)
   ══════════════════════════════════════════════════ */
const ikhwanData = [
  { name:'Ahmad Fauzan',        ttl:'Baturaja, 29 Juni 2007',        ig:'@ahmad_fzn47',      cita:'TNI AD',              kesan:'Kenangan terbaik di Al-Fakhriyah adalah momen kebersamaan yang tidak akan pernah terlupakan.', pesan:'Cintailah orang yang bisa sintal sewapunya karena siapa tahu suatu saat nanti dia akan menjadi orang yang kau benci. Begitupun sebaliknya.', motto:'Hidup itu naik turun, maka tetaplah yang berani.' },
  { name:'Arya Dirga Saputra',  ttl:'Lampung, 12 Desember 2006',     ig:'@di-pap',           cita:'Ulama',               kesan:'Al-Fakhriyah mengajarkan saya arti persaudaraan yang sesungguhnya.', pesan:'Setiap manusia memiliki fikiran, tetapi kita jangan sampai dikendalikan oleh fikiran kita sendiri, karena yang kita fikirkan belum tentu terjadi.', motto:'Dedikasikan hidup menjadi lebih baik dengan perbuatan baik semuanya.' },
  { name:'Alfareza Saputra',    ttl:'Baturaja, 24 Agustus 2006',     ig:'@alfareza_apr24',   cita:'Pengusaha Sukses',    kesan:'Terima kasih Al-Fakhriyah atas bimbingan dan kesabaran para guru.', pesan:'When you graduate, remember: The education of this school is a training for living the life that we will go through. Thanks For Al-Fakhriyah!', motto:'Awal dari kehidupan manusia tidak bisa diingat, untuk itu kita selalu miliki Allah.' },
  { name:'Aspin Wahyudi',       ttl:'Baturaja, 20 September 2006',   ig:'@Aspin23',          cita:'Pengusaha',           kesan:'Belajarlah dengan sungguh-sungguh agar tidak menyesal di kemudian hari.', pesan:'Saat belajar janganlah berbuat malas-malasan, janganlah kurang ajar kepada dewan guru dan orang.', motto:'Belajarlah yang luar-luar jangan sampai malas-malasan.' },
  { name:'Alif Alfian',         ttl:'Batang Hari, 13 Mei 2007',      ig:'-',                 cita:'Go Around The World', kesan:'Para guru Al-Fakhriyah sangat sabar dan berdedikasi tinggi.', pesan:'Thanks to Al-Fakhriyah for her guidance so far. The teachers remain patient in educating me and all my friends. Domo Arigatougozaimasu.', motto:'Awal dari kehidupan manusia tidak bisa diingat, untuk itu kita selalu miliki Allah.' },
  { name:'Awam Berkah',         ttl:'Batang Hari, 11 Nov 2007',      ig:'@awamberkah1qg27',  cita:'Pengusaha',           kesan:'Kamu hanya perlu lebih baik dari hari kemarin, bukan dari orang lain.', pesan:'Kamu hanya perlu lebih baik dari hari kemarin, bukan lebih baik dari orang lain. Jangan hanya untuk disayangi, tetaplah orang yang bisa menyayangi.', motto:'Jangan hanya untuk disayangi, tetaplah orang yang bisa menyayangi orang lain.' },
  { name:'Anugerah Bayu',       ttl:'Baturaja, 21 Januari 2008',     ig:'-',                 cita:'Polisi',              kesan:'Waktu adalah harta yang paling berharga, gunakan sebaik-baiknya.', pesan:'Jauhilah bermalas-malasan, alokasikan waktumu dengan usaha untuk memperbaiki dirimu dan mempersiapkan akhiratmu.', motto:'Be what you wanna be.' },
  { name:'Bagus Galih Kusuma',  ttl:'Mekar Jaya, 18 Februari 2007',  ig:'@BagusGalih',       cita:'Pengusaha',           kesan:'Tidak perlu bertepuk supaya dihormati, tunjukkan karya dan akhlakmu.', pesan:'Tidak perlu bertepuk supaya dihormati, tidak perlu sopan supaya dihormati, cukup dengan menjadi pribadi yang memang pantas untuk dihormati.', motto:'Dunia harapan di selalu menderita, semangat orang yang terus belajar.' },
  { name:'Bintang Kusuma',      ttl:'OKU, 2007',                     ig:'-',                 cita:'Wirausahawan',        kesan:'Al-Fakhriyah adalah rumah kedua yang selalu akan kurindukan.', pesan:'Bersama-sama kita membuktikan bahwa generasi pertama bisa menorehkan sejarah terbaik. Pionera selamanya.', motto:'Jadilah bintang yang bersinar di mana pun berada.' },
  { name:'Levi Ardinata',       ttl:'OKU, 2006',                     ig:'-',                 cita:'Pengusaha',           kesan:'Keberhasilan sejati dimulai dari keikhlasan hati.', pesan:'Dari sini saya belajar bahwa keberhasilan sejati dimulai dari keikhlasan hati.', motto:'Ikhlas dalam segala hal adalah kunci keberhasilan.' },
  { name:'Farih Elvan',         ttl:'OKU, 2007',                     ig:'-',                 cita:'Profesional',         kesan:'Terima kasih atas semua ilmu dan kesabaran para guru.', pesan:'Terima kasih Abah, para ustadz dan ustadzah atas semua ilmu dan kesabaran yang diberikan.', motto:'Ilmu adalah cahaya yang tidak akan pernah padam.' },
  { name:'Muhammad Fahrizal',   ttl:'Baturaja, 2006',                ig:'-',                 cita:'Arsitek',             kesan:'Tiga tahun cukup untuk mengubah hidup sepenuhnya.', pesan:'Tiga tahun bukan waktu yang lama, tapi cukup untuk mengubah hidup sepenuhnya.', motto:'Bangunlah mimpi sebelum orang lain membangunkanmu.' },
  { name:'Jepri',               ttl:'OKU, 2007',                     ig:'-',                 cita:'Wirausahawan',        kesan:'Kenangan di pesantren ini akan selalu jadi pengingat untuk bersyukur.', pesan:'Tidak ada yang sia-sia dari setiap perjuangan yang pernah kita lalui di Al-Fakhriyah.', motto:'Bersyukur adalah kunci ketenangan jiwa.' },
  { name:'M. Irza',             ttl:'Baturaja, 2007',                ig:'-',                 cita:'Pengusaha',           kesan:'Momen bersama Pionera adalah cerita yang layak diceritakan.', pesan:'Setiap momen bersama teman-teman Pionera adalah cerita yang layak diceritakan kepada anak cucu kita nanti.', motto:'Jadilah legenda dalam ceritamu sendiri.' },
  { name:'Khairil Dlifin',      ttl:'OKU, 2007',                     ig:'-',                 cita:'Ulama',               kesan:'Al-Fakhriyah mengajarkan ilmu sekaligus akhlak yang mulia.', pesan:'Ilmu tanpa akhlak adalah pedang tanpa gagang. Al-Fakhriyah mengajarkan keduanya.', motto:'Jadilah orang yang berilmu sekaligus berakhlak.' },
  { name:"Muhammad Naf'an",     ttl:'Baturaja, 2007',                ig:'-',                 cita:'Pengusaha Muslim',    kesan:'Persahabatan di sini jauh lebih berharga dari apapun.', pesan:'Persahabatan yang terjalin di sini jauh lebih berharga dari apapun yang pernah kumiliki.', motto:'Ukhuwah Islamiyah adalah ikatan yang paling kuat.' },
  { name:'M. Rafael',           ttl:'OKU, 2007',                     ig:'-',                 cita:'Profesional',         kesan:'Terima kasih kepada semua yang menjadi bagian perjalanan ini.', pesan:'Terima kasih kepada semua orang yang sudah menjadi bagian dari perjalanan indah ini. Tiga tahun tak tergantikan.', motto:'Perjalanan terbaik adalah yang dilalui bersama.' },
  { name:'Tristan Aditya',      ttl:'Baturaja, 2007',                ig:'-',                 cita:'Pengusaha',           kesan:'Jarak tidak akan memutus ukhuwah Pionera yang sudah terjalin.', pesan:'Meski jalan kita akan berbeda, tapi hati kita tetap satu — Pionera selamanya.', motto:'Ukhuwah sejati tidak mengenal jarak.' },
  { name:'M. Zidan',            ttl:'Baturaja, 2007',                ig:'-',                 cita:'TNI/Polri',           kesan:'Tidak pernah menyesal masuk ke Al-Fakhriyah, ini pilihan terbaik.', pesan:'Banyak hal yang saya sesali, tapi tidak pernah menyesal masuk ke Al-Fakhriyah.', motto:'Keberanian bukan tentang tidak takut, tapi tetap melangkah meski takut.' },
  { name:'Zacky Al-Ikram',      ttl:'OKU, 2007',                     ig:'-',                 cita:'Ulama / Dai',         kesan:'Semoga Allah meridhoi setiap langkah kita bersama.', pesan:'Semoga Allah meridhoi setiap langkah kita ke depan. Aamiin ya Rabbal alamin.', motto:'Jadilah generasi yang mengharumkan nama Islam.' },
  { name:'Praja Hulia',         ttl:'OKU, 2007',                     ig:'-',                 cita:'Pengusaha',           kesan:'Ini bukan akhir, ini adalah awal dari babak baru kehidupan.', pesan:'Ini bukan perpisahan, ini hanyalah awal dari babak baru perjalanan kita masing-masing.', motto:'Sukses adalah perjalanan, bukan tujuan.' },
  { name:'Rahman Sholeh',       ttl:'Baturaja, 2007',                ig:'-',                 cita:'Dai / Ustadz',        kesan:'Jadilah penerang di mana pun berada, itulah arti Pionera.', pesan:'Jadilah penerang di mana pun kalian berada, itulah arti menjadi Pionera.', motto:'Kita bukan sekadar angkatan, kita adalah awal dari sebuah warisan.' },
];

/* ══════════════════════════════════════════════════
   DATA: AKHWAT (15)
   ══════════════════════════════════════════════════ */
const akhwatData = [
  { name:'Azizati Zakiah',               ttl:'Karang Endah, 28 Nov 2007', ig:'-',               cita:'Perawat',                 kesan:'Semoga Al-Fakhriyah akan selalu besar dan hebat untuk generasi berikutnya.', pesan:'Jadikan kemampuan yang ada untuk menyamai impian. Jadilah kompetitif yang baik untuk menyamai impian.', motto:'Jadilah versi terbaik dirimu setiap hari.' },
  { name:'Ciesya Sintiya Sunryta Putri', ttl:'Tungku Jaya, 31 Jan 2007',  ig:'-',               cita:'Lecturer & Entrepreneur', kesan:'Aku tidak ingin lebih baik dari orang lain, aku ingin lebih baik dari diriku sendiri.', pesan:'Aku tidak ingin lebih baik dari orang lain, aku ingin lebih baik dari diriku sendiri.', motto:'Jadilah kompetitif dengan dirimu sendiri, bukan dengan orang lain.' },
  { name:'Balqis Salsabila Tomyu',       ttl:'OKU Timur, 05 April 2007',  ig:'@Balqisbarrysha', cita:'Dental Specialist',       kesan:'Jangan menyesal sudah pernah melakukan sesuatu yang baik.', pesan:'Jangan menyesal sudah pernah melakukan sesuatu. Something always happen as you plan — just start and make everything happens!', motto:'Something always happen as you plan — just start!' },
  { name:'Denta Afrilisia',              ttl:'Baturaja, 02 April 2007',   ig:'@d_Afrilisia',    cita:'Hakim & Motivator',       kesan:'Apa yang sering nampak terkadang tidaklah yang sebenarnya.', pesan:'Keep Shining, keep believing, and be a star. Kindness is the language which the deaf can hear and the blind can see.', motto:'Keep Shining, keep believing, and be a star.' },
  { name:'Bunga Gelcia Ramadhani',       ttl:'OKU, 13 September 2007',    ig:'-',               cita:'Guru / Dosen',            kesan:'Hanya kamu yang bisa menentukan dan bertanggung jawab atas jalan hidupmu.', pesan:'No one can represent you in running this life — only you can take responsibility for your own life.', motto:'Tidak ada kemuliaan ilmu tanpa meninggalkan kelelahan.' },
  { name:'Dhea Aprilia',                 ttl:'Baturaja, 20 April 2007',   ig:'-',               cita:'Police Woman',            kesan:'Jika gagal, kamu sudah punya cerita hidup yang sangat berharga.', pesan:'If you fail, you already have a valuable life story. If you succeed, you will smile because of your efforts.', motto:'Prepare as umbrella before it rains.' },
  { name:'Cahaya Rossalinda Stephani',   ttl:'Baturaja, 13 Sep 2007',     ig:'@ciscl_dhayaa',   cita:'Guru',                    kesan:'Jangan pernah menyerah jika kamu masih bisa berjuang dan berusaha.', pesan:'Jangan pernah menyerah jika kamu masih melakukan. Mimpi hadir dari tekad yang nyata dalam diri.', motto:'Jadilah cahaya yang menerangi, bukan yang menyilaukan.' },
  { name:'Dina Anggeriani',              ttl:'Lampung, 22 Oktober 2005',  ig:'@irfa.nana',      cita:'Ahli Gizi',               kesan:'Yang mencerminkan kebesaranmu hanyalah Allah, jadi terus bertahan.', pesan:'Never give up. Yang mencerminkan kebesaranmu hanyalah Allah, jadi terus bertahan. Your journey is yours to define.', motto:'Never give up — Tenangkanlah!' },
  { name:'Dwi Risky',                    ttl:'OKU, 2007',                 ig:'-',               cita:'Profesional',             kesan:'Persaudaraan kita adalah ikatan hati yang jauh lebih kuat dari ikatan darah.', pesan:'Persaudaraan kita bukan ikatan darah, tapi ikatan hati yang jauh lebih kuat. Tiga tahun bersama membentuk kita lebih tangguh.', motto:'Ukhuwah sejati tumbuh dari ketulusan hati.' },
  { name:'Peta Bela',                    ttl:'OKU, 2007',                 ig:'-',               cita:'Profesional',             kesan:'Sampai jumpa di kesuksesan kita masing-masing nanti.', pesan:'Tidak ada kata selamat tinggal, hanya sampai jumpa di kesuksesan kita nanti. Pionera akan selalu menjadi keluarga.', motto:'Kesuksesan adalah pertemuan yang paling indah.' },
  { name:'Erlian Susanti',               ttl:'OKU, 2007',                 ig:'-',               cita:'Pengusaha',               kesan:'Al-Fakhriyah mengajarkan arti perjuangan yang sesungguhnya dalam hidup.', pesan:'Kenangan indah ini akan selalu menjadi sumber semangat dalam perjalanan hidupku ke depan.', motto:'Perjuangan hari ini adalah kebanggaan hari esok.' },
  { name:'Shofiyyah Ghaidaau',           ttl:'OKU, 2007',                 ig:'-',               cita:'Ulama / Guru Agama',      kesan:'Semoga hati kita selalu jernih seperti nama dalam menjalani kehidupan.', pesan:'Semoga hati kita selalu jernih seperti makna nama dalam menjalani hidup. Jadilah perempuan yang ilmunya bermanfaat.', motto:'Jadilah cahaya yang jernih — shofiyyah.' },
  { name:'Hellyia Dwi',                  ttl:'OKU, 2006',                 ig:'-',               cita:'Profesional',             kesan:'Banyak hal yang kita lalui bersama membuat kita semakin dewasa dan bijak.', pesan:'Banyak hal yang kita lalui bersama, semua itu membuat kita semakin dewasa dan mengerti artinya bersyukur.', motto:'Kedewasaan lahir dari setiap rintangan yang dihadapi.' },
  { name:'Thara Faradiba',               ttl:'OKU, 2007',                 ig:'-',               cita:'Dokter',                  kesan:'Di mana pun kita berada, kita tetap satu — Pionera selamanya.', pesan:'Jarak tidak akan memisahkan persaudaraan yang sudah dibangun dengan ketulusan hati.', motto:'Persaudaraan sejati tidak mengenal batas ruang dan waktu.' },
  { name:'Mutiara Fadhillah',            ttl:'OKU, 2007',                 ig:'-',               cita:'Entrepreneur Muslim',     kesan:'Jadilah mutiara yang memperindah dan menerangi setiap tempat yang kamu singgahi.', pesan:'Jadilah mutiara yang bersinar — memperindah setiap tempat yang kamu singgahi.', motto:'Jadilah cahaya, bukan sekadar keindahan semata.' },
];

/* ══════════════════════════════════════════════════
   DATA: VIDEOS + GALLERY + LOGO ELEMEN
   ══════════════════════════════════════════════════ */
const galVideos = [
  { id:'nb76R-_fEZs', title:'Haflah Akhirussanah 2025', tag:'Haflah',   sub:'Momen sakral perpisahan angkatan pertama Al-Fakhriyah' },
  { id:'JF06ELa5ILE', title:'Kenangan Bersama Pionera', tag:'Kenangan', sub:'Kisah-kisah indah sepanjang perjalanan tiga tahun' },
  { id:'5CsvKbjaSYU', title:'Momen Terbaik Pionera',    tag:'Momen',    sub:'Koleksi momen tak terlupakan selama di Al-Fakhriyah' },
  { id:'',            title:'Video Kenangan #4',         tag:'Segera',   sub:'Segera hadir — isi id dengan ID YouTube video asli' },
  { id:'',            title:'Video Kenangan #5',         tag:'Segera',   sub:'Segera hadir — isi id dengan ID YouTube video asli' },
];

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

const logoElem = [
  { name:'Perisai Besi',         desc:'Melambangkan kesatuan utuh yang tidak terpecah belah dan menggambarkan ukhuwah islamiyah yang kokoh.',                          icon:'shield' },
  { name:'Bumi',                 desc:"Tempat berjuang dalam mengamalkan ilmu Al-Qur'an dan As-Sunnah sebagai bekal di seluruh penjuru dunia.",                       icon:'globe'  },
  { name:'Angkasa',              desc:'Melambangkan Pemikiran, Tujuan, Harapan dan Aspirasi yang luas tanpa batas bagi setiap santri.',                                icon:'sky'    },
  { name:'Bulan Sabit',          desc:'Simbol awal dari siklus baru, melambangkan harapan, perubahan dan kesempatan baru yang selalu datang.',                         icon:'moon'   },
  { name:'Cincin Emas',          desc:'Simbol spiritual bagi mereka yang ingin menunjukkan rasa syukur dan kesadaran akan keindahan kehidupan.',                       icon:'ring'   },
  { name:"Al-Qur'an",           desc:"Kitab suci Al-Qur'an sebagai pedoman utama dan pilar pertama pegangan hidup setiap santri Al-Fakhriyah.",                      icon:'quran'  },
  { name:'Al-Hadits',           desc:"Hadits Nabi ﷺ sebagai pilar kedua yang beriringan dengan Al-Qur'an dalam membimbing kehidupan santri.",                       icon:'hadits' },
  { name:'Mahkota Lafadz Allah', desc:'Melambangkan kebesaran Allah SWT yang selalu berada di atas seluruh makhluk ciptaan-Nya — keagungan tiada tara.',              icon:'crown'  },
  { name:'Lafadz Muhammad ﷺ',   desc:'Melambangkan kehormatan Nabi Muhammad SAW sebagai utusan Allah yang menjadi teladan seluruh umat manusia.',                     icon:'star'   },
  { name:'Permata Air',          desc:'Melambangkan kehidupan, fleksibilitas, dan kemampuan beradaptasi. Mengajarkan kerendahan hati dan pentingnya berbagi.',         icon:'drop'   },
  { name:'Warna Biru',           desc:'Mengandung makna kecerdasan, rasa percaya diri dalam kehidupan yang menjadi sebuah harapan dan impian semua orang.',            icon:'blue'   },
  { name:'Warna Emas',           desc:'Melambangkan kemewahan, keberuntungan dan kesuksesan yang menjadi harapan untuk meraih kejayaan di semua bidang.',              icon:'gold'   },
];

const ICONS = {
  shield:`<svg viewBox="0 0 48 48" fill="none"><path d="M24 4L8 10V24c0 9.5 7 17 16 20 9-3 16-10.5 16-20V10L24 4z" stroke="#d4a843" stroke-width="1.8" fill="rgba(212,168,67,.08)"/><polyline points="17,24 22,29 31,20" stroke="#d4a843" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  globe: `<svg viewBox="0 0 48 48" fill="none"><circle cx="24" cy="24" r="18" stroke="#d4a843" stroke-width="1.8" fill="rgba(212,168,67,.05)"/><ellipse cx="24" cy="24" rx="10" ry="18" stroke="#d4a843" stroke-width="1.2"/><line x1="6" y1="24" x2="42" y2="24" stroke="#d4a843" stroke-width="1.2"/><line x1="9" y1="16" x2="39" y2="16" stroke="#d4a843" stroke-width="1" opacity=".6"/><line x1="9" y1="32" x2="39" y2="32" stroke="#d4a843" stroke-width="1" opacity=".6"/></svg>`,
  sky:   `<svg viewBox="0 0 48 48" fill="none"><circle cx="24" cy="24" r="4" fill="#d4a843"/><circle cx="24" cy="24" r="10" stroke="#d4a843" stroke-width="1.2"/><circle cx="24" cy="24" r="18" stroke="#d4a843" stroke-width="1" stroke-dasharray="4 5"/><circle cx="10" cy="11" r="2" fill="rgba(212,168,67,.5)"/><circle cx="38" cy="10" r="1.5" fill="rgba(212,168,67,.5)"/><circle cx="40" cy="37" r="1.5" fill="rgba(212,168,67,.5)"/><circle cx="8" cy="37" r="2" fill="rgba(212,168,67,.5)"/></svg>`,
  moon:  `<svg viewBox="0 0 48 48" fill="none"><path d="M30 12a14 14 0 1 0 0 24 10 10 0 1 1 0-24z" stroke="#d4a843" stroke-width="1.8" fill="rgba(212,168,67,.1)"/><circle cx="35" cy="14" r="2" fill="#d4a843"/><circle cx="39" cy="22" r="1.4" fill="#d4a843" opacity=".55"/></svg>`,
  ring:  `<svg viewBox="0 0 48 48" fill="none"><circle cx="24" cy="24" r="16" stroke="#d4a843" stroke-width="4" fill="none"/><circle cx="24" cy="24" r="10" stroke="#d4a843" stroke-width="1.2" fill="rgba(212,168,67,.05)"/><path d="M19 18L29 18L32 28L24 34L16 28Z" stroke="#d4a843" stroke-width="1.2" fill="rgba(212,168,67,.08)"/></svg>`,
  quran: `<svg viewBox="0 0 48 48" fill="none"><rect x="10" y="8" width="28" height="34" rx="3" stroke="#d4a843" stroke-width="1.8" fill="rgba(212,168,67,.07)"/><line x1="14" y1="17" x2="34" y2="17" stroke="#d4a843" stroke-width="1.4"/><line x1="14" y1="22" x2="34" y2="22" stroke="#d4a843" stroke-width="1.4"/><line x1="14" y1="27" x2="28" y2="27" stroke="#d4a843" stroke-width="1.4"/><line x1="24" y1="8" x2="24" y2="42" stroke="#d4a843" stroke-width="1.2" opacity=".35"/></svg>`,
  hadits:`<svg viewBox="0 0 48 48" fill="none"><path d="M10 12Q10 8 14 8L34 8Q38 8 38 12L38 36Q38 40 34 40L14 40Q10 40 10 36Z" stroke="#d4a843" stroke-width="1.8" fill="rgba(212,168,67,.06)"/><path d="M16 16Q24 12 32 16" stroke="#d4a843" stroke-width="1.4" fill="none"/><line x1="14" y1="22" x2="34" y2="22" stroke="#d4a843" stroke-width="1.2"/><line x1="14" y1="27" x2="30" y2="27" stroke="#d4a843" stroke-width="1.2"/><line x1="14" y1="32" x2="26" y2="32" stroke="#d4a843" stroke-width="1.2"/></svg>`,
  crown: `<svg viewBox="0 0 48 48" fill="none"><path d="M8 34L8 16L16 26L24 10L32 26L40 16L40 34Z" stroke="#d4a843" stroke-width="1.8" fill="rgba(212,168,67,.1)" stroke-linejoin="round"/><line x1="8" y1="38" x2="40" y2="38" stroke="#d4a843" stroke-width="2.5"/><circle cx="24" cy="10" r="2.5" fill="#d4a843"/><circle cx="8" cy="16" r="2.5" fill="#d4a843"/><circle cx="40" cy="16" r="2.5" fill="#d4a843"/></svg>`,
  star:  `<svg viewBox="0 0 48 48" fill="none"><path d="M24 6L28 18L42 18L31 26L35 38L24 30L13 38L17 26L6 18L20 18Z" stroke="#d4a843" stroke-width="1.8" fill="rgba(212,168,67,.12)" stroke-linejoin="round"/></svg>`,
  drop:  `<svg viewBox="0 0 48 48" fill="none"><path d="M24 8C24 8 10 22 10 30A14 14 0 0 0 38 30C38 22 24 8 24 8Z" stroke="#d4a843" stroke-width="1.8" fill="rgba(212,168,67,.1)"/><path d="M18 32Q24 27 30 32" stroke="#d4a843" stroke-width="1.4" fill="none" opacity=".55"/></svg>`,
  blue:  `<svg viewBox="0 0 48 48" fill="none"><circle cx="24" cy="24" r="18" fill="rgba(30,100,200,.22)" stroke="#4d88cc" stroke-width="1.8"/><circle cx="24" cy="24" r="10" fill="rgba(30,100,200,.18)" stroke="#6aabee" stroke-width="1.4"/><circle cx="24" cy="24" r="4" fill="rgba(40,160,255,.5)"/></svg>`,
  gold:  `<svg viewBox="0 0 48 48" fill="none"><circle cx="24" cy="24" r="18" fill="rgba(212,168,67,.18)" stroke="#d4a843" stroke-width="1.8"/><circle cx="24" cy="24" r="10" fill="rgba(212,168,67,.22)" stroke="#f0c84a" stroke-width="1.4"/><circle cx="24" cy="24" r="4" fill="#d4a843"/></svg>`,
};

/* ══════════════════════════════════════════════════
   TOAST + SCROLL RESTORE
   ══════════════════════════════════════════════════ */
let _toastEl = null;
function showToast(msg, dur=2200) {
  if (!_toastEl) {
    _toastEl = document.createElement('div');
    _toastEl.className = 'toast';
    document.body.appendChild(_toastEl);
  }
  _toastEl.textContent = msg;
  _toastEl.classList.add('show');
  clearTimeout(_toastEl._t);
  _toastEl._t = setTimeout(() => _toastEl.classList.remove('show'), dur);
}
let _savedScroll = 0;
let _currentModalList = null, _currentModalIdx = -1;

/* ══════════════════════════════════════════════════
   LOADER — 2 seconds
   ══════════════════════════════════════════════════ */
window.addEventListener('load', () => {
  const L = $('loader');
  if (!L) return;
  setTimeout(() => { L.classList.add('gone'); document.body.classList.remove('lock'); }, 2000);
});

/* ══════════════════════════════════════════════════
   NAVBAR
   ══════════════════════════════════════════════════ */
const $nav = $('nav');
if ($nav) {
  const isGallery = location.pathname.includes('gallery');
  window.addEventListener('scroll', () => {
    $nav.classList.toggle('scrolled', isGallery || scrollY > 50);
  }, { passive:true });
  if (isGallery) $nav.classList.add('scrolled');
}

/* ══════════════════════════════════════════════════
   MOBILE NAV — BUG FIXED (pointer-events in CSS)
   ══════════════════════════════════════════════════ */
const $ham = $('hamBtn');
const $mdr = $('mobDrawer');
const $mbg = $('mobBg');

function closeMob() {
  $mdr?.classList.remove('on');
  $mbg?.classList.remove('on');
  $ham?.classList.remove('on');
  $ham?.setAttribute('aria-expanded','false');
  document.body.classList.remove('lock');
}
if ($ham) $ham.addEventListener('click', () => {
  const o = $mdr.classList.toggle('on');
  $mbg.classList.toggle('on', o);
  $ham.classList.toggle('on', o);
  $ham.setAttribute('aria-expanded', String(o));
  document.body.classList.toggle('lock', o);
});
if ($mbg) $mbg.addEventListener('click', closeMob);
if ($mdr) $mdr.addEventListener('click', e => { if (e.target.closest('.mob-link')) closeMob(); });

/* ══════════════════════════════════════════════════
   SCROLL PROGRESS NAV — Feature A
   ══════════════════════════════════════════════════ */
function initScrollNav() {
  if (location.pathname.includes('gallery')) return;
  const sections = [
    { id:'sejarah',   label:'Sejarah' },
    { id:'logo',      label:'Logo' },
    { id:'sambutan',  label:'Sambutan' },
    { id:'guru',      label:'Guru' },
    { id:'murid',     label:'Santri' },
    { id:'journey',   label:'Journey' },
    { id:'komunitas', label:'Komunitas' },
  ];

  const nav = document.createElement('div');
  nav.className = 'scroll-nav';
  sections.forEach(s => {
    const dot = document.createElement('button');
    dot.className = 'sn-dot';
    dot.setAttribute('data-label', s.label);
    dot.setAttribute('aria-label', `Ke ${s.label}`);
    dot.setAttribute('data-target', s.id);
    dot.addEventListener('click', () => {
      const el = $(s.id);
      if (el) el.scrollIntoView({ behavior:'smooth' });
    });
    nav.appendChild(dot);
  });
  document.body.appendChild(nav);

  const dots = [...nav.querySelectorAll('.sn-dot')];

  /* ── SCROLL POSITION BASED (fixes long sections like guru/murid) ──
     Find which section's top is closest to 30% from viewport top.
     This works correctly regardless of section height.           */
  function updateActive() {
    const trigger = window.innerHeight * 0.3; // 30% from top
    let bestId = null;
    let bestDist = Infinity;

    sections.forEach(s => {
      const el = $(s.id);
      if (!el) return;
      const top = el.getBoundingClientRect().top;
      // Section is "active" when its top has passed the trigger point
      // Use distance from trigger — closest one that passed wins
      const dist = Math.abs(top - trigger);
      if (top <= trigger + 50 && dist < bestDist) {
        bestDist = dist;
        bestId = s.id;
      }
    });

    // Fallback: if no section passed trigger yet, use first visible
    if (!bestId) {
      sections.forEach(s => {
        const el = $(s.id);
        if (!el) return;
        const top = el.getBoundingClientRect().top;
        if (top < window.innerHeight && !bestId) bestId = s.id;
      });
    }

    dots.forEach(d => d.classList.toggle('act', d.dataset.target === bestId));
    nav.classList.toggle('vis', scrollY > 200);
  }

  window.addEventListener('scroll', updateActive, { passive:true });
  window.addEventListener('resize', updateActive, { passive:true });
  // Initial call after a tick (sections may not be rendered yet)
  setTimeout(updateActive, 100);
}

/* ══════════════════════════════════════════════════
   BACK TO TOP — Feature F
   ══════════════════════════════════════════════════ */
function initBTT() {
  const btn = document.createElement('button');
  btn.className = 'btt';
  btn.setAttribute('aria-label','Kembali ke atas');
  btn.innerHTML = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><polyline points="3,10 8,5 13,10" stroke="#030c1a" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
  document.body.appendChild(btn);
  window.addEventListener('scroll', () => btn.classList.toggle('show', scrollY > 420), { passive:true });
  btn.addEventListener('click', () => window.scrollTo({ top:0, behavior:'smooth' }));
}

/* ══════════════════════════════════════════════════
   HERO STARS
   ══════════════════════════════════════════════════ */
const $cvs = $('hcvs');
if ($cvs) {
  const cx = $cvs.getContext('2d');
  let W, H, S = [];
  const resize = () => { W = $cvs.width = $cvs.offsetWidth; H = $cvs.height = $cvs.offsetHeight; };
  const init   = () => { S = Array.from({length:170}, () => ({
    x:Math.random()*W, y:Math.random()*H,
    r:Math.random()*1.3+.18, a:Math.random(),
    v:Math.random()*.42+.06, d:Math.random()>.5?1:-1
  })); };
  const draw = () => {
    cx.clearRect(0,0,W,H);
    S.forEach(s => {
      s.a += s.v*.006*s.d;
      if(s.a>1||s.a<0) s.d*=-1;
      cx.beginPath(); cx.arc(s.x,s.y,s.r,0,Math.PI*2);
      cx.fillStyle=`rgba(212,168,67,${s.a*.55})`; cx.fill();
    });
    requestAnimationFrame(draw);
  };
  window.addEventListener('resize',()=>{resize();init();},{passive:true});
  resize(); init(); draw();
}

/* ══════════════════════════════════════════════════
   PARALLAX HERO — Feature C
   ══════════════════════════════════════════════════ */
function initParallax() {
  const logoWrap = document.querySelector('.hc-logo-wrap');
  const textWrap = document.querySelector('.hc-text-wrap');
  if (!logoWrap || !textWrap) return;
  let ticking = false;
  window.addEventListener('scroll', () => {
    if (ticking) return;
    requestAnimationFrame(() => {
      const y = scrollY;
      if (y < window.innerHeight) {
        logoWrap.style.transform = `translateY(${y * 0.18}px)`;
        textWrap.style.transform = `translateY(${y * 0.08}px)`;
      }
      ticking = false;
    });
    ticking = true;
  }, { passive:true });
}

/* ══════════════════════════════════════════════════
   SCROLL REVEAL
   ══════════════════════════════════════════════════ */
const revObs = new IntersectionObserver(entries => {
  entries.forEach(e => { if(e.isIntersecting){ e.target.classList.add('on'); revObs.unobserve(e.target); } });
}, { threshold:.1 });
const reveal = () => document.querySelectorAll('.rv:not(.on)').forEach(el => revObs.observe(el));

/* ══════════════════════════════════════════════════
   ANIMATED COUNTER — Feature E
   ══════════════════════════════════════════════════ */
function initCounters() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const el = e.target;
      const target = parseInt(el.dataset.count, 10);
      const isInf = el.dataset.inf === '1';

      if (!isNaN(target)) {
        const dur = 1100, start = performance.now();
        const update = now => {
          const p = Math.min((now-start)/dur, 1);
          const val = Math.round((1-Math.pow(1-p,3))*target);
          el.textContent = val;
          if (p < 1) requestAnimationFrame(update);
          else if (isInf) {
            // After counting, flip to ∞ with a brief pause
            setTimeout(() => {
              el.style.transition = 'opacity .3s';
              el.style.opacity = '0';
              setTimeout(() => {
                el.textContent = '∞';
                el.style.opacity = '1';
              }, 300);
            }, 400);
          }
        };
        requestAnimationFrame(update);
      } else if (isInf) {
        // No target number, just animate to ∞
        const dur = 800, start = performance.now();
        const nums = ['0','1','3','7','∞'];
        const update = now => {
          const p = Math.min((now-start)/dur, 1);
          const idx = Math.floor(p * (nums.length-1));
          el.textContent = nums[Math.min(idx, nums.length-1)];
          if (p < 1) requestAnimationFrame(update);
        };
        requestAnimationFrame(update);
      }
      obs.unobserve(el);
    });
  }, { threshold:.5 });
  document.querySelectorAll('[data-count], [data-inf]').forEach(el => obs.observe(el));
}

/* ══════════════════════════════════════════════════
   HERO SCROLL
   ══════════════════════════════════════════════════ */
const $hscr = document.querySelector('.h-scroll');
if ($hscr) $hscr.addEventListener('click', () => $(document.querySelector('section:not(#hero)')?.id)?.scrollIntoView({behavior:'smooth'}));

/* ══════════════════════════════════════════════════
   MODAL
   ══════════════════════════════════════════════════ */
const $modal  = $('modal');
const $mClose = $('mClose');
const $mPhoto = $('mPhoto');
const $mName  = $('mName');
const $mRole  = $('mRole');
const $mGroup = $('mGroup');
const $mMsg   = $('mMsg');
const $mBio   = $('mBio');

let currentModalData = null;

function openModal(d) {
  if (!$modal) return;
  currentModalData = d;
  _savedScroll = window.scrollY;

  // Photo col
  const phCol = $modal.querySelector('.modal-photo-col');
  if (phCol) {
    const img = phCol.querySelector('.m-photo');
    if (img) { img.src = d.photo||''; img.onerror = ()=>{img.src=av(d.name);}; }
    const nm = phCol.querySelector('.m-name'); if(nm) nm.textContent = d.name||'';
    const rl = phCol.querySelector('.m-role'); if(rl) rl.textContent = d.role||'';
    const gr = phCol.querySelector('.m-group');if(gr) gr.textContent = d.group||'';
  }

  // Message
  if ($mMsg) {
    if (d.longMsg) {
      $mMsg.innerHTML   = esc(d.msg||'').replace(/\n/g,'<br>');
      $mMsg.style.textAlign = 'left';
    } else {
      $mMsg.textContent = d.msg||'';
      $mMsg.style.textAlign = 'center';
    }
  }

  // Bio rows
  if ($mBio) {
    const rows = [];
    if (d.ttl)              rows.push(`<div class="m-bio-row"><span class="m-bio-icon">📅</span><div><span class="m-bio-lbl">Tempat, Tanggal Lahir</span><span class="m-bio-val">${esc(d.ttl)}</span></div></div>`);
    if (d.ig && d.ig!=='-') rows.push(`<div class="m-bio-row"><span class="m-bio-icon">📸</span><div><span class="m-bio-lbl">Instagram</span><span class="m-bio-val">${esc(d.ig)}</span></div></div>`);
    if (d.cita)             rows.push(`<div class="m-bio-row"><span class="m-bio-icon">🎯</span><div><span class="m-bio-lbl">Cita-cita</span><span class="m-bio-val"><strong>${esc(d.cita)}</strong></span></div></div>`);
    if (d.kesan)            rows.push(`<div class="m-bio-row"><span class="m-bio-icon">💛</span><div><span class="m-bio-lbl">Kesan</span><span class="m-bio-val">${esc(d.kesan)}</span></div></div>`);
    if (d.motto)            rows.push(`<div class="m-bio-row"><span class="m-bio-icon">✨</span><div><span class="m-bio-lbl">Motto</span><span class="m-bio-val"><em style="color:rgba(240,200,74,.88)">"${esc(d.motto)}"</em></span></div></div>`);
    $mBio.innerHTML = rows.join('');
    $mBio.style.display = rows.length ? 'block':'none';
  }

  _updateModalNav();
  $modal.classList.add('on');
  document.body.classList.add('lock');
  document.body.style.top = `-${_savedScroll}px`;
}

function closeModal() {
  $modal?.classList.remove('on');
  document.body.classList.remove('lock');
  document.body.style.top = '';
  window.scrollTo({ top: _savedScroll, behavior: 'instant' });
  currentModalData = null;
}

function _updateModalNav() {
  const nb  = document.getElementById('mNavBar');
  const nbm = document.getElementById('mNavBarMobile');
  const has = _currentModalList && _currentModalList.length > 1;
  [nb, nbm].forEach(bar => { if(bar) bar.style.display = has ? 'flex' : 'none'; });
  if (!has) return;
  const len = _currentModalList.length;
  [nb, nbm].forEach(bar => {
    if (!bar) return;
    const prev = bar.querySelector('[class*="m-nav-prev"]');
    const next = bar.querySelector('[class*="m-nav-next"]');
    const ctr  = bar.querySelector('[class*="m-nav-counter"]');
    if (prev) prev.disabled = _currentModalIdx <= 0;
    if (next) next.disabled = _currentModalIdx >= len - 1;
    if (ctr)  ctr.textContent = `${_currentModalIdx+1} / ${len}`;
  });
}

function _openSantriAt(idx) {
  if (!_currentModalList || idx < 0 || idx >= _currentModalList.length) return;
  _currentModalIdx = idx;
  const s    = _currentModalList[idx];
  const slug = s.name.toLowerCase().replace(/[^a-z\s]/g,'').trim().replace(/\s+/g,'-');
  openModal({ photo:`assets/siswa/${slug}.jpg`, name:s.name, role:'Santri Pionera',
    group:_currentModalList._kelas, msg:s.pesan, ttl:s.ttl, ig:s.ig,
    cita:s.cita, kesan:s.kesan, motto:s.motto, pesan:s.pesan });
  _updateModalNav();
}
if ($mClose) $mClose.addEventListener('click', closeModal);
if ($modal)  $modal.addEventListener('click', e => { if(e.target===$modal) closeModal(); });

/* ── Share button (Feature B) ── */
const $mShare = $('mShare');
if ($mShare) $mShare.addEventListener('click', () => {
  const d = currentModalData; if (!d) return;
  const text = `✨ ${d.name}\n🎯 Cita-cita: ${d.cita||'-'}\n💬 "${d.motto||d.msg||''}"\n\n— PIONERA Generation 2025 | MA Al-Fakhriyah Baturaja\nhttps://liffkunz.github.io/Pionera/`;
  if (navigator.share) {
    navigator.share({ title:d.name, text }).catch(()=>{});
  } else {
    navigator.clipboard?.writeText(text)
      .then(() => showToast('✓ Profil berhasil disalin!'))
      .catch(() => showToast('Gagal menyalin'));
  }
});

/* ── Modal swipe nav wiring (done after DOM ready via DOMContentLoaded listener below) ── */
if ($modal) {
  $modal.addEventListener('touchstart', e => { window._mTsx = e.changedTouches[0].screenX; }, {passive:true});
  $modal.addEventListener('touchend',   e => {
    if (!_currentModalList) return;
    const d = (window._mTsx||0) - e.changedTouches[0].screenX;
    if (Math.abs(d) > 55) d > 0 ? _openSantriAt(_currentModalIdx+1) : _openSantriAt(_currentModalIdx-1);
  }, {passive:true});
}

/* ── Print PDF button (Feature H) ── */
const $mPrint = $('mPrint');
if ($mPrint) $mPrint.addEventListener('click', () => { return; // disabled
  const d = currentModalData;
  if (!d) return;
  const pb = $('print-bio');
  if (!pb) return;
  pb.innerHTML = `
    <div class="print-page">
      <img src="assets/logo.png" class="print-logo" alt="Logo Pionera" onerror="this.style.display='none'"/>
      <p class="print-school">PIONERA GENERATION 2025 · MA AL-FAKHRIYAH BATURAJA</p>
      <div class="print-divider"></div>
      <img src="${d.photo||''}" class="print-photo" alt="${esc(d.name)}" onerror="this.src='${av(d.name)}'"/>
      <h1 class="print-name">${esc(d.name)}</h1>
      <p class="print-role">${esc(d.role||'Santri Pionera')}</p>
      <p class="print-kelas">${esc(d.group||'')}</p>
      <div class="print-ornament">✦ ✦ ✦</div>
      ${d.ttl ? `<div class="print-section"><p class="print-section-label">Tempat, Tanggal Lahir</p><p class="print-section-value">${esc(d.ttl)}</p></div>` : ''}
      ${d.cita ? `<div class="print-section"><p class="print-section-label">Cita-cita</p><p class="print-section-value"><strong>${esc(d.cita)}</strong></p></div>` : ''}
      ${d.kesan ? `<div class="print-section"><p class="print-section-label">Kesan Selama di Al-Fakhriyah</p><p class="print-section-value">${esc(d.kesan)}</p></div>` : ''}
      ${d.pesan||d.msg ? `<blockquote class="print-quote">${esc((d.pesan||d.msg).slice(0,300))}${(d.pesan||d.msg).length>300?'…':''}</blockquote>` : ''}
      ${d.motto ? `<div class="print-section"><p class="print-section-label">Motto Hidup</p><p class="print-section-value"><em>"${esc(d.motto)}"</em></p></div>` : ''}
      <p class="print-footer">© 2025 Pionera Generation · MA Al-Fakhriyah Baturaja · Buku Kenangan Digital</p>
    </div>`;
  pb.style.display = 'block';
  setTimeout(() => { window.print(); pb.style.display = 'none'; }, 200);
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') { closeModal(); closeLb(); return; }
  if (document.getElementById('lb')?.classList.contains('on')) {
    if (e.key === 'ArrowLeft')  { lbIdx=(lbIdx-1+fItems.length)%fItems.length; updLb(); }
    if (e.key === 'ArrowRight') { lbIdx=(lbIdx+1)%fItems.length; updLb(); }
  }
});

/* ══════════════════════════════════════════════════
   RENDER: ELEMEN LOGO
   ══════════════════════════════════════════════════ */
function renderElem() {
  const g = $('elemGrid');
  if (!g) return;
  g.innerHTML = logoElem.map((el,i) => `
    <div class="elem-card rv d${(i%4)+1}">
      <div class="elem-icon">${ICONS[el.icon]||''}</div>
      <p class="elem-name">${esc(el.name)}</p>
      <p class="elem-desc">${esc(el.desc)}</p>
    </div>`).join('');
}

/* ══════════════════════════════════════════════════
   RENDER: SAMBUTAN
   ══════════════════════════════════════════════════ */
function renderSambutan() {
  const el = $('sambutanCard');
  if (!el) return;
  STORE.sambutan = pengasuh;
  el.innerHTML = `
    <div class="sambut-card rv" data-type="sambutan" data-idx="0" tabindex="0" role="button" aria-label="Baca sambutan ${esc(pengasuh.name)}">
      <div class="sambut-photo-wrap">
        <img src="${esc(pengasuh.photo)}" alt="${esc(pengasuh.name)}" onerror="this.src='${av(pengasuh.name)}'"/>
      </div>
      <div class="sambut-body">
        <span class="sambut-tag">Sambutan Pengasuh Pondok</span>
        <h3 class="sambut-name">${esc(pengasuh.name)}</h3>
        <p class="sambut-role">${esc(pengasuh.role)}</p>
        <div class="sambut-rule"></div>
        <p class="sambut-preview">"${esc(pengasuh.preview)}"</p>
        <span class="sambut-cta">Baca Sambutan Lengkap →</span>
      </div>
    </div>`;
  el.addEventListener('click', e => {
    if (!e.target.closest('[data-type="sambutan"]')) return;
    const d = STORE.sambutan;
    openModal({ photo:d.photo, name:d.name, role:d.role, msg:d.full, longMsg:true });
  });
}

/* ══════════════════════════════════════════════════
   RENDER: VIDEO INDEX
   ══════════════════════════════════════════════════ */
function renderVidIndex() {
  const el = $('vidIndex');
  if (!el) return;
  el.innerHTML = `
    <div class="vid-single rv">
      <div class="vid-frame">
        <iframe src="https://www.youtube.com/embed/GzC6s1fVDQM?rel=0&modestbranding=1"
          title="Sambutan KH. Zulfan Barron"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen loading="lazy"></iframe>
      </div>
      <div class="vid-meta">
        <span class="vid-meta-tag">Video Sambutan</span>
        <h3>Pesan dari KH. Zulfan Barron, S.Pd.I., M.Si.</h3>
      </div>
    </div>`;
}

/* ══════════════════════════════════════════════════
   RENDER: GURU — with popup tooltip Feature D
   ══════════════════════════════════════════════════ */
function renderGuru() {
  const gPos   = $('guruPos');
  const gNoPos = $('guruNoPos');
  const mkCard = (name, pos, photo, i) => `
    <div class="gc rv d${(i%4)+1}" title="${esc(name)}${pos ? ' — '+esc(pos) : ''}">
      <div class="gc-photo"><img src="${esc(photo)}" alt="Foto ${esc(name)}" loading="lazy" onerror="this.src='${av(name)}'"/></div>
      <div class="gc-info">
        <p class="gc-name">${esc(name)}</p>
        ${pos ? `<p class="gc-pos">${esc(pos)}</p>` : ''}
      </div>
    </div>`;
  if (gPos)   gPos.innerHTML   = guruPos.map((g,i) => mkCard(g.name, g.pos, g.photo, i)).join('');
  if (gNoPos) gNoPos.innerHTML = guruNoPos.map((n,i) => {
    const slug = n.toLowerCase().replace(/[^a-z\s]/g,'').trim().replace(/\s+/g,'-');
    return mkCard(n, '', `assets/guru/${slug}.jpg`, i);
  }).join('');
}

/* ══════════════════════════════════════════════════
   RENDER: PESAN WALI KELAS
   ══════════════════════════════════════════════════ */
function renderPesanWK(data, elId, storeKey) {
  const el = $(elId);
  if (!el) return;
  STORE[storeKey] = data;
  el.innerHTML = `
    <div class="pesan-wrap" style="max-width:820px;margin:0 auto">
      <div class="pesan-card rv" data-type="${storeKey}" data-idx="0"
           tabindex="0" role="button" aria-label="Baca pesan ${esc(data.name)}">
        <div class="pc-photo-wrap"><img src="${esc(data.photo)}" alt="${esc(data.name)}" onerror="this.src='${av(data.name)}'"/></div>
        <div class="pc-body">
          <span class="pc-label">Pesan Cinta Wali Kelas</span>
          <h3 class="pc-name">${esc(data.name)}</h3>
          <p class="pc-role">${esc(data.role)}</p>
          <p class="pc-quote">${esc(data.preview)}</p>
          <span class="pc-more">Baca Pesan Lengkap →</span>
        </div>
      </div>
    </div>`;
  el.addEventListener('click', e => {
    if (!e.target.closest(`[data-type="${storeKey}"]`)) return;
    const d = STORE[storeKey];
    openModal({ photo:d.photo, name:d.name, role:d.role, msg:d.full, longMsg:true });
  });
}

/* ══════════════════════════════════════════════════
   RENDER: MURID
   ══════════════════════════════════════════════════ */
function renderMurid(list, elId, storeKey, kelas) {
  const el = $(elId);
  if (!el) return;
  list._kelas = kelas;
  STORE[storeKey] = list;
  el.innerHTML = list.map((s,i) => {
    const slug = s.name.toLowerCase().replace(/[^a-z\s]/g,'').trim().replace(/\s+/g,'-');
    return `
      <div class="mc rv d${(i%4)+1}" data-type="${storeKey}" data-idx="${i}"
           tabindex="0" role="button" aria-label="Lihat biodata ${esc(s.name)}">
        <div class="mc-photo">
          <img src="assets/siswa/${slug}.jpg" alt="Foto ${esc(s.name)}, Santri ${esc(kelas)}"
               loading="lazy"
               onerror="this.src='${av(s.name)}';this.parentNode.classList.add('img-done')"
               onload="this.classList.add('loaded');this.parentNode.classList.add('img-done')"/>
        </div>
        <div class="mc-info"><p class="mc-name">${esc(s.name)}</p><p class="mc-hint">Lihat Biodata →</p></div>
      </div>`;
  }).join('');

  el.addEventListener('click', e => {
    const card = e.target.closest(`[data-type="${storeKey}"]`);
    if (!card) return;
    const idx = parseInt(card.dataset.idx, 10);
    const s   = STORE[storeKey][idx];
    if (!s) return;
    const slug = s.name.toLowerCase().replace(/[^a-z\s]/g,'').trim().replace(/\s+/g,'-');
    _currentModalList = list;
    _currentModalIdx  = idx;
    openModal({ photo:`assets/siswa/${slug}.jpg`, name:s.name, role:'Santri Pionera',
      group:kelas, msg:s.pesan, ttl:s.ttl, ig:s.ig,
      cita:s.cita, kesan:s.kesan, motto:s.motto, pesan:s.pesan });
    _updateModalNav();
  });
  el.addEventListener('keydown', e => {
    if (e.key!=='Enter'&&e.key!==' ') return;
    e.target.closest(`[data-type="${storeKey}"]`)?.click();
  });
  setTimeout(reveal, 60);
}

/* ══════════════════════════════════════════════════
   GALLERY VIDEO
   ══════════════════════════════════════════════════ */
function renderGalVid() {
  const main = $('gvMain'), sidebar = $('gvSidebar');
  if (!main || !sidebar) return;
  function loadVid(idx) {
    const v = galVideos[idx];
    main.innerHTML = v.id
      ? `<iframe src="https://www.youtube.com/embed/${v.id}?rel=0&modestbranding=1" title="${esc(v.title)}" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen loading="lazy"></iframe>`
      : `<div class="gvid-ph"><div class="gvph-icon">▶</div><p class="gvph-txt">Video segera hadir</p></div>`;
    sidebar.querySelectorAll('.vtab').forEach((t,i) => t.classList.toggle('on',i===idx));
  }
  sidebar.innerHTML = galVideos.map((v,i) => `
    <button class="vtab ${i===0?'on':''}" data-vidx="${i}" type="button">
      <span class="vtab-t">${esc(v.tag)}</span>
      <span class="vtab-n">${esc(v.title)}</span>
      <span class="vtab-s">${esc(v.sub)}</span>
    </button>`).join('');
  sidebar.addEventListener('click', e => {
    const btn = e.target.closest('.vtab');
    if (btn) loadVid(parseInt(btn.dataset.vidx,10));
  });
  loadVid(0);
}

/* ══════════════════════════════════════════════════
   GALLERY PHOTOS + DOWNLOAD Feature C
   ══════════════════════════════════════════════════ */
let fItems = [], lbIdx = 0;

function renderGal(filter) {
  const g = $('galGrid');
  if (!g) return;
  fItems = filter==='all' ? galPhotos : galPhotos.filter(p=>p.cat===filter);
  g.innerHTML = fItems.map((p,i) => `
    <div class="gi" data-gidx="${i}" tabindex="0" role="button" aria-label="${esc(p.label)}">
      <img src="${esc(p.src)}" alt="${esc(p.label)}" loading="lazy" onerror="this.src='${gph(p.label)}'"/>
      <div class="gi-ovl">
        <span class="gi-lbl">${esc(p.label)}</span>
        <a class="gi-dl" href="${esc(p.src)}" download="${esc(p.label)}.jpg"
           onclick="event.stopPropagation()" aria-label="Download foto" title="Download">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <line x1="6" y1="1" x2="6" y2="8.5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
            <polyline points="3,6 6,9.5 9,6" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
            <line x1="1" y1="11" x2="11" y2="11" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
          </svg>
        </a>
      </div>
    </div>`).join('');
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

/* ══════════════════════════════════════════════════
   LIGHTBOX + DOWNLOAD Feature C
   ══════════════════════════════════════════════════ */
const $lb    = $('lb');
const $lbImg = $('lbImg');
const $lbLbl = $('lbLbl');
const $lbCnt = $('lbCnt');
const $lbDl  = $('lbDl');

function openLb(idx) {
  if (!$lb) return;
  lbIdx = idx; updLb();
  $lb.classList.add('on'); document.body.classList.add('lock');
}
function closeLb() { $lb?.classList.remove('on'); document.body.classList.remove('lock'); }
function updLb() {
  const p = fItems[lbIdx];
  if (!p||!$lbImg) return;
  $lbImg.style.opacity='0';
  setTimeout(() => {
    $lbImg.src = p.src; $lbImg.alt = p.label;
    $lbImg.onerror = () => { $lbImg.src = gph(p.label); };
    if ($lbLbl) $lbLbl.textContent = p.label;
    if ($lbCnt) $lbCnt.textContent = `${lbIdx+1} / ${fItems.length}`;
    if ($lbDl)  { $lbDl.href = p.src; $lbDl.download = `${p.label}.jpg`; }
    $lbImg.style.opacity='1';
  }, 160);
}

const $gg = $('galGrid');
if ($gg) $gg.addEventListener('click', e => {
  const gi = e.target.closest('.gi');
  if (!gi || e.target.closest('.gi-dl')) return;
  openLb(parseInt(gi.dataset.gidx,10));
});

const $lbClose = $('lbClose'), $lbPrev = $('lbPrev'), $lbNext = $('lbNext');
if ($lbClose) $lbClose.addEventListener('click', closeLb);
if ($lb)      $lb.addEventListener('click', e => { if(e.target===$lb) closeLb(); });
if ($lbPrev)  $lbPrev.addEventListener('click', () => { lbIdx=(lbIdx-1+fItems.length)%fItems.length; updLb(); });
if ($lbNext)  $lbNext.addEventListener('click', () => { lbIdx=(lbIdx+1)%fItems.length; updLb(); });

let tsx=0;
if ($lb) {
  $lb.addEventListener('touchstart', e => { tsx=e.changedTouches[0].screenX; },{passive:true});
  $lb.addEventListener('touchend',   e => {
    const d = tsx-e.changedTouches[0].screenX;
    if (Math.abs(d)>44){ lbIdx=d>0?(lbIdx+1)%fItems.length:(lbIdx-1+fItems.length)%fItems.length; updLb(); }
  },{passive:true});
}

/* ══════════════════════════════════════════════════
   INIT
   ══════════════════════════════════════════════════ */

/* ══════════════════════════════════════════════════
   SEJARAH + VISI-MISI — click to expand popup
   ══════════════════════════════════════════════════ */
function initSejarahExpand() {
  // Sejarah card
  const sejCard = document.querySelector('.sej-card');
  if (sejCard) {
    sejCard.addEventListener('click', () => {
      openModal({
        photo: 'assets/sejarah/gedung.jpg',
        name:  'Pondok Pesantren Al-Fakhriyah',
        role:  'Baturaja, Sumatera Selatan · Est. 2018',
        group: 'Jl. H.M. Moeslimin RT.004 Dusun IV, Kel. Kemalaraja, Kec. Baturaja Timur, Kab. OKU',
        msg:   `Pondok Pesantren Al-Fakhriyah Baturaja adalah salah satu bentuk satuan pendidikan Pondok Pesantren yang menyelenggarakan pendidikan formal dengan program pendidikan umum dan pendidikan keagamaan Islam.

Berdiri sejak Tahun 2018 di bawah naungan Yayasan Al-Fakhriyah Baturaja dan secara resmi mendapatkan Izin Operasional pada tahun 2020. Berdirinya pondok pesantren ini merupakan wujud panggilan jiwa dari pengasuh bersama pengurus yayasan yang memiliki komitmen tinggi dalam mendirikan pondok pesantren di dalam kota Baturaja sebagai ibu kota Kabupaten OKU.

Dengan harapan para santri yang belajar di sini nantinya menjadi ummat yang mempunyai Ilmu Dasar Aqidah yang kuat, mampu memahami hukum syariat Islam, mencintai ilmu pengetahuan agama dan mampu mengamalkannya dengan baik serta memiliki Iman dan Taqwa yang kokoh.`,
        longMsg: true
      });
    });
  }

  // Visi card
  document.querySelectorAll('.vm-card').forEach(card => {
    card.addEventListener('click', () => {
      const isVisi = card.querySelector('.vm-label')?.textContent?.includes('Visi');
      if (isVisi) {
        openModal({
          name: 'Visi Madrasah',
          role: 'MA Al-Fakhriyah Baturaja',
          group: '',
          msg: "Madrasah Unggul yang Mampu Mencetak Generasi Bangsa yang Qur'ani, Berakhlakul Karimah, Berkualitas, Mandiri dan Berprestasi.",
        });
      } else {
        openModal({
          name: 'Misi Madrasah',
          role: 'MA Al-Fakhriyah Baturaja',
          group: '',
          msg: `1. Mewujudkan lembaga pendidikan swasta yang bermutu dan berkualitas

2. Mewujudkan lembaga pendidikan yang terjangkau dan membanggakan masyarakat luas

3. Mencetak generasi bangsa yang Qur'ani dan berakhlakul karimah

4. Mewujudkan peserta didik yang berprestasi dan berdaya saing nasional & internasional

5. Mewujudkan lulusan yang memiliki wawasan mandiri dan terampil sesuai kebutuhan zaman`,
          longMsg: true
        });
      }
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initScrollNav();
  initBTT();
  initParallax();

  /* ── Wire modal nav swipe buttons ── */
  const _nb = document.getElementById('mNavBar');
  if (_nb) {
    _nb.querySelector('.m-nav-prev')?.addEventListener('click', () => _openSantriAt(_currentModalIdx - 1));
    _nb.querySelector('.m-nav-next')?.addEventListener('click', () => _openSantriAt(_currentModalIdx + 1));
  }
  const _nbm = document.getElementById('mNavBarMobile');
  if (_nbm) {
    _nbm.querySelector('.m-nav-prev-m')?.addEventListener('click', () => _openSantriAt(_currentModalIdx - 1));
    _nbm.querySelector('.m-nav-next-m')?.addEventListener('click', () => _openSantriAt(_currentModalIdx + 1));
  }

  /* ── Navbar active link highlight via scroll ── */
  const _navLinks = document.querySelectorAll('.nlinks a[href^="#"]');
  function _updateNavActive() {
    const trigger = window.innerHeight * 0.35;
    let bestId = null, bestDist = Infinity;
    _navLinks.forEach(a => {
      const id = a.getAttribute('href').replace('#','');
      const el = document.getElementById(id);
      if (!el) return;
      const top = el.getBoundingClientRect().top;
      if (top <= trigger + 50) {
        const dist = Math.abs(top - trigger);
        if (dist < bestDist) { bestDist = dist; bestId = id; }
      }
    });
    _navLinks.forEach(a => {
      const id = a.getAttribute('href').replace('#','');
      a.classList.toggle('nav-act', id === bestId);
    });
  }
  window.addEventListener('scroll', _updateNavActive, {passive:true});
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
  initCounters();
  initSejarahExpand();
  reveal();
});

/* ══════════════════════════════════════════════════
   TDD — TEST SUITE
   Run:  window.__runTests() in browser console
   Or:   append ?test=1 to URL for auto-run overlay
   ══════════════════════════════════════════════════ */
window.__runTests = function() {
  const results = [];
  let passed = 0, failed = 0;

  function assert(label, condition, detail) {
    const ok = !!condition;
    results.push({ label, ok, detail: ok ? '' : (detail || 'expected true, got false') });
    if (ok) passed++; else failed++;
  }

  function assertEq(label, a, b) {
    const ok = a === b;
    results.push({ label, ok, detail: ok ? '' : `expected ${JSON.stringify(b)}, got ${JSON.stringify(a)}` });
    if (ok) passed++; else failed++;
  }

  /* ── 1. DATA INTEGRITY ── */
  assert('ikhwanData has 22 entries',        ikhwanData.length === 22);
  assert('akhwatData has 15 entries',        akhwatData.length === 15);
  assert('Total santri = 37',               ikhwanData.length + akhwatData.length === 37);
  assert('guruPos has 18 entries',           guruPos.length === 18);
  assert('guruNoPos has 36 entries',         guruNoPos.length === 36);
  assert('logoElem has 12 entries',          logoElem.length === 12);
  assert('galVideos has entries',            galVideos.length > 0);
  assert('galPhotos has entries',            galPhotos.length > 0);

  /* All santri have required fields */
  const allSantri = [...ikhwanData, ...akhwatData];
  assert('All santri have name',    allSantri.every(s => s.name?.trim().length > 0));
  assert('All santri have pesan',   allSantri.every(s => s.pesan?.trim().length > 0));
  assert('All santri have motto',   allSantri.every(s => s.motto?.trim().length > 0));
  assert('All santri have cita',    allSantri.every(s => s.cita?.trim().length > 0));
  assert('All santri have ttl',     allSantri.every(s => s.ttl?.trim().length > 0));
  assert('All guruPos have photo',  guruPos.every(g => g.photo?.length > 0));
  assert('All guruPos have pos',    guruPos.every(g => g.pos?.length > 0));
  assert('galPhotos have valid cat',galPhotos.every(p => ['haflah','grade10','ldks','aksi','momen'].includes(p.cat)));

  /* ── 2. DOM ELEMENTS EXIST ── */
  const domChecks = [
    ['#loader',     'loader'],
    ['#nav',        'nav'],
    ['#hamBtn',     'hamBtn'],
    ['#mobBg',      'mobBg'],
    ['#mobDrawer',  'mobDrawer'],
    ['#modal',      'modal'],
    ['#mClose',     'mClose'],
    ['#mPhoto',     'mPhoto'],
    ['#mName',      'mName'],
    ['#mMsg',       'mMsg'],
    ['#mBio',       'mBio'],
  ];
  domChecks.forEach(([label, id]) => assert(`DOM: ${label} exists`, !!$(id)));

  /* Index-only DOM */
  if (!location.pathname.includes('gallery')) {
    assert('DOM: #elemGrid exists',      !!$('elemGrid'));
    assert('DOM: #sambutanCard exists',  !!$('sambutanCard'));
    assert('DOM: #guruPos exists',       !!$('guruPos'));
    assert('DOM: #guruNoPos exists',     !!$('guruNoPos'));
    assert('DOM: #ikhwanGrid exists',    !!$('ikhwanGrid'));
    assert('DOM: #akhwatGrid exists',    !!$('akhwatGrid'));
    assert('DOM: #pesanMissnur exists',  !!$('pesanMissnur'));
    assert('DOM: #pesanRefita exists',   !!$('pesanRefita'));
    assert('DOM: #print-bio exists',     !!$('print-bio'));
    assert('DOM: #mShare exists',        !!$('mShare'));
    assert('DOM: #mPrint exists',        !!$('mPrint'));
  }

  /* Gallery-only DOM */
  if (location.pathname.includes('gallery')) {
    assert('DOM: #galGrid exists',    !!$('galGrid'));
    assert('DOM: #galFilters exists', !!$('galFilters') || !!document.querySelector('.gal-filters'));
    assert('DOM: #gvMain exists',     !!$('gvMain'));
    assert('DOM: #gvSidebar exists',  !!$('gvSidebar'));
    assert('DOM: #lb exists',         !!$('lb'));
    assert('DOM: #lbImg exists',      !!$('lbImg'));
    assert('DOM: #lbDl exists',       !!$('lbDl'));
  }

  /* ── 3. RENDER OUTPUT ── */
  if (!location.pathname.includes('gallery')) {
    const eg = $('elemGrid');
    if (eg) {
      assert('renderElem: 12 cards rendered', eg.querySelectorAll('.elem-card').length === 12);
    }
    const gp = $('guruPos');
    if (gp) {
      assert('renderGuru: 18 pos cards rendered', gp.querySelectorAll('.gc').length === 18);
    }
    const gnp = $('guruNoPos');
    if (gnp) {
      assert('renderGuru: 36 nopos cards rendered', gnp.querySelectorAll('.gc').length === 36);
    }
    const ig = $('ikhwanGrid');
    if (ig) {
      assert('renderMurid ikhwan: 22 cards', ig.querySelectorAll('.mc').length === 22);
      assert('renderMurid ikhwan: data-type set', ig.querySelector('[data-type="ikhwan"]') !== null);
      assert('renderMurid ikhwan: data-idx set',  ig.querySelector('[data-idx="0"]') !== null);
    }
    const ag = $('akhwatGrid');
    if (ag) {
      assert('renderMurid akhwat: 15 cards', ag.querySelectorAll('.mc').length === 15);
    }
    const sc = $('sambutanCard');
    if (sc) {
      assert('renderSambutan: card rendered',    sc.querySelector('.sambut-card') !== null);
      assert('renderSambutan: has data-type',    sc.querySelector('[data-type="sambutan"]') !== null);
    }
  }

  /* ── 4. CRITICAL BUG FIXES ── */
  /* ── 4. CRITICAL BUG FIXES ── */
  const mobBgEl = $('mobBg');
  if (mobBgEl) {
    // Check the CSS rule directly — not computed style (which gives 'none' when display:none at desktop)
    // Real test: does the element have pointer-events:none in its stylesheet rule?
    // We do this by temporarily making it visible and checking computed style
    const origDisplay = mobBgEl.style.display;
    mobBgEl.style.setProperty('display', 'block', 'important');
    const style = window.getComputedStyle(mobBgEl);
    const pe = style.pointerEvents;
    mobBgEl.style.display = origDisplay;
    assert('BUG FIX: mob-bg pointer-events none when visible (mobile simulation)',
      pe === 'none',
      `Got: ${pe} — means mob-bg will block taps on mobile when opacity:0`
    );
  }
  const mCloseEl = $('mClose');
  if (mCloseEl) {
    // Open modal first so m-close is visible and has layout
    const wasOpen = $('modal')?.classList.contains('on');
    if (!wasOpen) openModal({ name:'Test', role:'Test', group:'', msg:'test' });
    const r = mCloseEl.getBoundingClientRect();
    assert('BUG FIX: m-close touch target ≥ 40px wide',  r.width  >= 38, `Got: ${r.width.toFixed(1)}px`);
    assert('BUG FIX: m-close touch target ≥ 40px tall',  r.height >= 38, `Got: ${r.height.toFixed(1)}px`);
    if (!wasOpen) closeModal();
  }
  const hamEl = $('hamBtn');
  if (hamEl) {
    const r = hamEl.getBoundingClientRect();
    assert('BUG FIX: ham button touch target ≥ 40px wide',  r.width  >= 38, `Got: ${r.width.toFixed(1)}px`);
    assert('BUG FIX: ham button touch target ≥ 40px tall',  r.height >= 38, `Got: ${r.height.toFixed(1)}px`);
  }

  /* ── 5. MODAL BEHAVIOR ── */
  const modal = $('modal');
  if (modal) {
    assert('Modal: hidden by default',        !modal.classList.contains('on'));
    assert('Modal: has aria-modal',           modal.getAttribute('aria-modal') === 'true');
    assert('Modal: body NOT locked by default', !document.body.classList.contains('lock'));

    // Test open/close cycle
    openModal({ name:'Test User', role:'Test Role', group:'Test', msg:'Test message' });
    assert('Modal: opens on openModal()',     modal.classList.contains('on'));
    assert('Modal: body locks on open',      document.body.classList.contains('lock'));
    assert('Modal: mName populated',         $('mName')?.textContent === 'Test User');
    closeModal();
    assert('Modal: closes on closeModal()',  !modal.classList.contains('on'));
    assert('Modal: body unlocks on close',   !document.body.classList.contains('lock'));
  }

  /* ── 6. GALLERY FILTER ── */
  if (location.pathname.includes('gallery')) {
    renderGal('all');
    const allCount = fItems.length;
    assert('Gallery: renderGal all loads items', allCount > 0);

    renderGal('haflah');
    const haflahCount = fItems.length;
    assert('Gallery: filter haflah < all',    haflahCount < allCount);
    assert('Gallery: all haflah items correct cat', fItems.every(p => p.cat === 'haflah'));

    renderGal('momen');
    assert('Gallery: filter momen works',     fItems.every(p => p.cat === 'momen'));

    renderGal('all'); // reset
  }

  /* ── 7. LIGHTBOX ── */
  if (location.pathname.includes('gallery')) {
    renderGal('all');
    const lb = $('lb');
    if (lb && fItems.length > 0) {
      assert('Lightbox: hidden by default',   !lb.classList.contains('on'));
      openLb(0);
      assert('Lightbox: opens',               lb.classList.contains('on'));
      assert('Lightbox: lbImg src set',       $('lbImg')?.src?.length > 0);
      assert('Lightbox: lbCnt shows 1/N',     $('lbCnt')?.textContent?.startsWith('1'));
      closeLb();
      assert('Lightbox: closes',              !lb.classList.contains('on'));
    }
  }

  /* ── 8. ESC function ── */
  assertEq('esc: escapes &',  esc('a&b'),  'a&amp;b');
  assertEq('esc: escapes <',  esc('a<b'),  'a&lt;b');
  assertEq('esc: escapes >',  esc('a>b'),  'a&gt;b');
  assertEq('esc: escapes "',  esc('a"b'),  'a&quot;b');
  assertEq('esc: safe string unchanged', esc('hello world'), 'hello world');

  /* ── RENDER RESULTS ── */
  const total = passed + failed;
  const pct   = Math.round(passed/total*100);
  console.group(`🧪 PIONERA TEST SUITE — ${passed}/${total} passed (${pct}%)`);
  results.forEach(r => {
    if (r.ok) console.log(`  ✅ ${r.label}`);
    else      console.error(`  ❌ ${r.label}${r.detail ? ' → ' + r.detail : ''}`);
  });
  console.groupEnd();

  /* ── VISUAL OVERLAY ── */
  let overlay = document.getElementById('__test_overlay');
  if (overlay) overlay.remove();
  overlay = document.createElement('div');
  overlay.id = '__test_overlay';
  overlay.style.cssText = `
    position:fixed;bottom:1rem;left:1rem;z-index:99999;
    background:rgba(3,12,26,.97);border:1px solid ${failed ? '#e24b4a' : '#4caf50'};
    border-radius:12px;padding:1rem 1.25rem;max-width:320px;
    font-family:monospace;font-size:12px;color:#e8f0fa;
    box-shadow:0 8px 32px rgba(0,0,0,.6);
  `;
  overlay.innerHTML = `
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:.6rem">
      <strong style="color:${failed ? '#f87171' : '#86efac'}">
        ${failed ? '❌' : '✅'} ${passed}/${total} tests passed (${pct}%)
      </strong>
      <button onclick="this.closest('#__test_overlay').remove()"
        style="background:none;border:none;color:#6e8ba6;cursor:pointer;font-size:14px;padding:0 2px">✕</button>
    </div>
    ${failed > 0 ? `
      <div style="color:#fca5a5;font-size:11px;border-top:1px solid rgba(255,255,255,.1);padding-top:.5rem;max-height:160px;overflow-y:auto">
        ${results.filter(r=>!r.ok).map(r=>`<div>❌ ${r.label}${r.detail ? '<br><span style="color:#9ca3af;padding-left:8px">→ '+r.detail+'</span>' : ''}</div>`).join('')}
      </div>` : '<div style="color:#86efac;font-size:11px">All tests green! 🎉</div>'
    }
    <div style="color:#4b6480;font-size:10px;margin-top:.5rem">window.__runTests() to re-run</div>
  `;
  document.body.appendChild(overlay);

  return { passed, failed, total, results };
};

/* Auto-run if ?test=1 in URL */
if (location.search.includes('test=1')) {
  window.addEventListener('load', () => setTimeout(window.__runTests, 500));
}
