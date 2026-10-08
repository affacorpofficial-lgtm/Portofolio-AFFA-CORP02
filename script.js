"use strict";
/* =========================================================
   AFFA CORP — script.js
   BAGIAN 1 (CONFIG + novels) adalah satu-satunya yang perlu
   kamu edit untuk mengganti teks, tautan, dan data novel.
   ========================================================= */

/* ================= KONFIGURASI UTAMA ================= */
const CONFIG = {
  company: "AFFA CORP",
  slogan: "Create Beyond Boundaries",
  heroDesc: "An independent creative company exploring stories, imagination, and digital innovation.",

  visionIntro: "Every story begins with an idea. Every idea has the potential to become something greater.",
  vision: "Menjadi perusahaan kreatif independen yang mengembangkan karya cerita dan inovasi digital dengan identitas yang kuat, imajinasi tanpa batas, serta nilai yang mampu meninggalkan kesan bagi setiap penikmatnya.",
  mission: [
    "Mengembangkan novel dan cerita orisinal dengan karakter, konflik, serta dunia yang memiliki kedalaman.",
    "Membangun ekosistem kreatif yang menghubungkan novel, komik, animasi, dan teknologi digital.",
    "Menghasilkan karya yang tidak hanya menghibur, tetapi juga menyampaikan gagasan, pemikiran, dan perspektif baru.",
    "Memanfaatkan teknologi sebagai sarana untuk memperluas jangkauan dan pengalaman menikmati karya.",
    "Mengembangkan identitas AFFA CORP melalui konsistensi, kreativitas, dan eksplorasi ide."
  ],
  purpose: "Menciptakan ruang bagi ide-ide kreatif untuk berkembang menjadi karya nyata, sekaligus membangun identitas yang dapat terus bertumbuh melalui cerita, seni, dan teknologi.",

  projectsIntro: "Stories are more than words. They are worlds waiting to be explored.",

  founderIntro: "Behind every creative vision is a mind willing to turn ideas into reality.",
  founder: {
    name: "Galih Dwifadhika Yusuf",
    role: "Founder & Creative Director",
    photo: "assets/images/founder.jpg", // GANTI FOTO PENDIRI: timpa file ini (rasio 3:4)
    description: [
      "Seorang kreator muda yang memiliki ketertarikan pada dunia penulisan, pengembangan cerita, desain kreatif, dan teknologi digital. Berawal dari ketertarikan terhadap imajinasi dan proses penciptaan karya, AFFA CORP dikembangkan sebagai wadah untuk menghubungkan berbagai gagasan kreatif menjadi proyek nyata.",
      "Dengan fokus pada eksplorasi ide, pengembangan karakter, dan pembangunan dunia cerita, ia berupaya menciptakan karya yang memiliki identitas serta ruang untuk terus berkembang."
    ],
    focus: ["Creative Writing", "Story Development", "Digital Innovation", "Creative Direction"],
    // Isi url untuk mengaktifkan tombol. Kosongkan ("") jika belum ada → tombol tampil nonaktif.
    // Email: gunakan format "mailto:nama@email.com"
    social: [
      { label: "Instagram", url: "" },
      { label: "TikTok", url: "" },
      { label: "Email", url: "" }
    ]
  },

  // Informasi tambahan di halaman detail (bisa ditimpa per novel lewat properti `extra`)
  defaultExtra: [["Penulis", "Galih Dwifadhika Yusuf"], ["Format", "Novel"], ["Bahasa", "Indonesia"]]
};

/* ================= DATA DELAPAN NOVEL =================
   Edit judul, genre, status, gambar, sinopsis, deskripsi, dan tautan di sini.
   - poster : gambar kartu di galeri (rasio 3:4)  → assets/images/novel-N.jpg
   - cover  : gambar besar di halaman detail (3:4) → assets/images/novel-N-cover.jpg
   - status : "Ongoing" | "Completed" | "Coming Soon"
   - NASKAH / BAB novel ada di file naskah.js (bukan di sini). Tombol Read More membuka pembaca otomatis.
   - extra  : (opsional) [["Label","Isi"], ...] untuk informasi tambahan khusus novel ini
   - Pakai \n\n di dalam teks untuk membuat paragraf baru. */
const novels = [
  { id: 1, title: "Journey of The Angel", genre: "Dark Fantasy / Multiverse / Mitologis", status: "Ongoing", poster: "assets/images/novel-1.jpg", cover: "assets/images/novel-1-cover.jpg", description: "Dunia memiliki sistem mutlak yang ditetapkan jutaan tahun lamanya. Sistem rimba, yang terkuat dialah yang berkuasa dan yang lemah akan tersingkir. Sistem itulah awal terlahir kasta antara mahkluk hidup, sebuah hukum yang tidak dapat diubah dan akan terus berjalan. Tahun berganti, hukum mulai goyah. Keadilan tidak diberikan pada yang hak. Namun pada yang berkuasa. Jutaan tahun berlalu. Langit menciptakan hukum baru yang berpusat pada keseimbangan. Malaikat penyelamat bagi mereka yang tersingkir, memiliki tujuan menghancurkan sistem yang telah goyah. Dewa agung menjadi dakwa yang berdosa telah menciptakan iblis berwujud cahaya. Mereka yang berkuasa melawan mereka yang dibuang, terus bertahan hidup untuk melanjutkan perang tiada akhir demi jawaban kebenaran", details: "Novel bertema Multi Semesta, dengan nama Semesta JOTA", link: "" },
  { id: 2, title: "Bayang Dibalik Bintang", genre: "Dark Fantasy / Action / Spiritual", status: "Ongoing", poster: "assets/images/novel-2.jpg", cover: "assets/images/novel-2-cover.jpg", description: "Di dunia yang dipenuhi misteri dan rahasia, seorang anak bernama Elandor terlahir tanpa mengetahui siapa orang tuanya. Dibesarkan oleh kakek angkatnya, Galdor, ia menjalani kehidupan sederhana di sebuah desa kecil—hingga malam itu tiba.\n\nSebuah komet misterius jatuh di hutan terlarang, dan Elandor tanpa sengaja menemukannya. Dari sana, ia menjumpai sebuah pedang aneh yang terbuat dari pecahan komet… dan pedang itu bisa berbicara.\n\nSejak saat itu, hidup Elandor berubah selamanya. Dari pemuda desa biasa, ia menjadi penguasa bayangan, sosok yang mampu mengendalikan kegelapan di malam hari. Namun, pedang itu bukan sekadar hadiah takdir—ia adalah kutukan.\n\nBersama kekuatan itu datang petaka besar: kegelapan mulai membanjiri dunia, menelan semua kehidupan saat matahari tenggelam. Elandor harus memilih—menjadi penyelamat atau menghancurkan dirinya sendiri demi menghentikan pedang yang ia bawa.\n\nMampukah Elandor melawan kegelapan yang ia ciptakan sendiri? Ataukah takdir akan memaksanya menyerah?", details: "Bagian dari takdir semesta JOTA", link: "" },
  { id: 3, title: "Era of Zauria", genre: "Dark Fantasy / Romance / Steampunk", status: "Ongoing", poster: "assets/images/novel-3.jpg", cover: "assets/images/novel-3-cover.jpg", description: "Di penghujung kejayaan Negri Konstan, dunia runtuh dalam satu malam ketika sang kaisar menghilang tanpa jejak. Api perang melahap peradaban, melahirkan era baru yang dikenal sebagai Era Zauria—masa di mana kekuasaan tidak diwariskan, tetapi direbut. Dari reruntuhan itu, bangkit Kekaisaran Ardent, simbol harapan sekaligus ambisi manusia yang tak pernah padam.\n\nNamun harapan itu tidak bertahan lama. Seorang anak lahir di puncak kekuasaan—Kael Ardent. Pewaris dua garis darah besar, ditakdirkan untuk mempersatukan dunia yang terpecah. Tapi sebelum ia mengenal takhtanya, segalanya direnggut dalam satu malam berdarah. Diselamatkan oleh seorang pria dari negeri timur, Kael tumbuh dengan nama lain—Velyr—tanpa ingatan, tanpa masa lalu, dan tanpa alasan untuk mempertanyakan hidup yang damai. Hingga suatu hari, ingatan itu kembali. Dan bersama itu, kebenaran yang lebih kejam dari kematian: Bahwa dunia yang menyelamatkannya mungkin adalah dunia yang telah menghancurkannya.\n\nKini, di antara pilihan untuk tetap hidup sebagai orang lain atau merebut kembali identitasnya, Kael harus menentukan satu hal— Apakah ia akan menjadi pewaris yang menuntut takhta… atau manusia yang cukup berani menghancurkan kebenaran itu sendiri.", details: "Bagian dari takdir semesta JOTA", link: "" },
  { id: 4, title: "King of Valhalla", genre: "Dark Fantasy / Transmigration / Action", status: "Ongoing", poster: "assets/images/novel-4.jpg", cover: "assets/images/novel-4-cover.jpg", description: "Di kerajaan Ardenthal, Raja Elliot dikenal sebagai penguasa yang tegas namun adil. Ia membangun kerajaannya dari perang panjang dan darah para musuhnya, hingga akhirnya negeri itu berdiri sebagai salah satu kekuatan terbesar di benua utara. Namun kekuasaan tidak pernah benar-benar aman. Di balik singgasananya sendiri, benih pengkhianatan tumbuh.\n\nPada suatu malam yang dipenuhi badai dan petir, Elliot dikhianati oleh mentri yang paling ia percayai. Dengan siasat licik dan ritual terlarang, sang mentri menjatuhkan Elliot dari tahtanya dan membuangnya ke sebuah dimensi yang disebut Valhalla World—dunia yang berada di luar hukum kerajaan mana pun.\n\nValhalla bukan sekadar tanah buangan. Ia adalah dunia brutal tempat kekuatan menentukan segalanya. Di sana, kehormatan lahir dari darah, dan kedamaian dianggap sebagai kelemahan. Tanpa kekerasan, dunia itu sendiri dianggap tidak lengkap.\n\nTerlempar tanpa pasukan, tanpa mahkota, Elliot dipaksa belajar kembali arti kekuasaan. Di tengah para pembunuh, pengkhianat, dan makhluk-makhluk yang hidup dari peperangan tanpa akhir, ia menyadari satu hal: jika ingin merebut kembali tahtanya, ia harus menaklukkan dunia yang bahkan lebih kejam daripada kerajaan yang pernah ia kuasai.\n\nDari reruntuhan kehormatannya, Elliot mulai membangun sebuah kekuatan baru—sebuah fraksi yang lahir dari darah dan kesetiaan, dikenal sebagai Fraksi Valhalla. Mereka bukan sekadar pasukan, tetapi pengikut dari seorang raja yang telah kehilangan segalanya dan tidak lagi takut pada kegelapan.\n\nNamun semakin dalam Elliot menyelami Valhalla, semakin ia menyadari bahwa dunia itu menyimpan rahasia yang jauh lebih besar daripada sekadar tempat pembuangan. Ada kekuatan kuno yang menggerakkan peperangan tanpa akhir, dan ada harga yang harus dibayar jika seseorang ingin menjadi raja bukan hanya dari kerajaan… tetapi dari Valhalla itu sendiri.\n\nPerjalanan Elliot bukan lagi sekadar tentang merebut kembali mahkota yang hilang. Ini adalah kisah tentang bagaimana seorang raja yang dikhianati berubah menjadi sesuatu yang lebih gelap—seorang penguasa yang mungkin akan memerintah dua dunia sekaligus… atau menghancurkannya.", details: "Bagian dari takdir semesta JOTA", link: "" },
  { id: 5, title: "Sistem Golden Era", genre: "Fantasy / Sistem / Multiverse", status: "Coming Soon", poster: "assets/images/novel-5.jpg", cover: "assets/images/novel-5-cover.jpg", description: "Saat cahaya menjadi pelindung, kegelapan menjadi petaka. Semuanya kini terbalik oleh takdir semesta. Sebuah sistem roh tak dikenal muncul didunia yang tidak percaya oleh kekuatan. Kekuatan supernatural hanyalah mitos, namun kemunculan sistem mematahkan semua kepercayaan. Dan kini, takdir yang telah berhenti pada zaman yang tak terhitung dimasa lalu. Akhirnya kembali berjalan dimasa depan. Kegelapan menjadi naungan, cahaya menjadi musuh. Demi mengakhiri, dendam lama yang tidak terukir oleh waktu.", details: "Musim kedua dari novel Journey of the Angel", link: "" },
  { id: 6, title: "Kaisar Kegelapan", genre: "Fantasy / Xianxia", status: "Coming Soon", poster: "assets/images/novel-6.jpg", cover: "assets/images/novel-6-cover.jpg", description: "Seorang pemuda yang hidup tanpa kekuatan didunia yang mengandalkan kekuatan supranatural, Niao San menjalani harinya di sekte kecil perbatasan dua kekaisaran dengan hinaan dan cacian.\n\nNamun saat semua orang memandang rendah dirinya, Niao San masih memiliki paman angkat yang sangat menyayanginya. Juga teman seangkatan bernama Fan Qiao'er.\n\nSuatu kejadian menimpa sekte mereka, membuat Niao San harus hidup dalam pelarian. Melindungi sesuatu yang ia tidak ketahui ada.\n\nBagaimanakah perjalanan Niao San melindungi \"sesuatu\" dan mencari kebenaran dari dirinya sendiri? Semuanya akan terkuak di Novel ini!", details: "Bagian dari takdir semesta JOTA", link: "" },
  { id: 7, title: "Perjalanan Menuju Yang Terkuat", genre: "Action / Martial Arts", status: "Coming Soon", poster: "assets/images/novel-7.jpg", cover: "assets/images/novel-7-cover.jpg", description: "Jaka Senggani, adalah seorang pemuda desa tanpa kekuatan Kanuragan ditubuhnya. Ia hidup didesa kecil, namun selain dia. Seluruh penduduk desa, atau bahkan dunia, memiliki kekuatan tenaga dalam ditubuh mereka yang disebut kekuatan Kanuragan.\n\nTerlahir tanpa tenaga dalam didunia yang mengandalkan tenaga dalam, membuat Jaka benar-benar dikucilkan. Bahkan dibuang dari keluarganya, yang merupakan bagian dari bangsawan ternama dikota besar.\n\nKarena dibuang didesa kecil oleh keluarganya, itu menimbulkan dendam dihati Jaka. Ia bersumpah akan membalas semua yang telah mereka lakukan, bahkan jikapun mereka adalah keluarganya sendiri. Semuanya akan ia lakukan demi mewujudkan ambisinya untuk membalas dendam dan menjadi yang terkuat.\n\nSemua ambisinya terjawab saat suatu hari, ia tidak sengaja menemukan rune kuno didalam sumur desa. Yang memiliki kekuatan supranatural luar biasa kuat dari entitas, yang bahkan lebih tua dari dunia tempat ia hidup.\n\nBagaimanakah perjalanan Jaka menjadi yang terkuat, dan membalaskan dendamnya?. Serta menguak rahasia yang dimiliki rune kuno di sumur desa?. Semuanya akan terjawab di novel ini.", details: "Bagian dari takdir semesta JOTA", link: "" },
  { id: 8, title: "Kembalinya Sang Pewaris", genre: "Fantasy / Urban / Drama", status: "Ongoing", poster: "assets/images/novel-8.jpg", cover: "assets/images/novel-8-cover.jpg", description: "Xiao TianYu seorang pemuda miskin yang hidup bersama adik perempuannya. setelah kematian kedua orang tua mereka. Xiao TianYu harus bekerja keras, untuk menafkahi dirinya juga adiknya.\n\nSampai suatu kejadian yang menimpa adiknya membuat ia gelap mata, dan menghajar teman sekelas yang telah membully adiknya dengan tidak berperasaan.\n\nTerlepas dari itu semua, orang tua dari siswa yang ia hajar menuntut balas. Dan menghajarnya dengan membayar bodyguard, lalu membuangnya kehutan untuk menjadi santapan serigala.\n\nNamun Dewi keberuntungan masih berada dipihaknya, saat tidak sengaja ia menarik simpati roh sungai yang telah hidup ribuan tahun lalu. Pertemuan itu membuat hidupnya berubah drastis.\n\nSedikit demi sedikit ia naik lebih tinggi, dan membalas dendam kepada keluarga kaya yang membuatnya dan adiknya menderita. Dan juga ia telah menemukan sedikit jati dirinya, yang benar-benar tidak dapat dibayangkan.", details: "Bagian dari takdir semesta JOTA", link: "" },
];

/* =========================================================
   BAGIAN 2 — KODE PROGRAM (tidak perlu diedit)
   ========================================================= */
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const esc = t => String(t ?? "").replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const state = { savedScroll: 0, lastY: 0, navLockUntil: 0 };

/* Kotak gambar 3:4 dengan placeholder otomatis jika file tidak ditemukan */
function imageBox(src, alt, label) {
  return `<div class="ph" data-label="${esc(label)}"><img src="${esc(src)}" alt="${esc(alt)}" decoding="async"></div>`;
}
function bindImageFallbacks(root) {
  $$("img", root).forEach(img => {
    const fail = () => img.parentElement.classList.add("missing");
    img.addEventListener("error", fail, { once: true });
    if (img.complete && img.naturalWidth === 0) fail();
  });
}

/* ---------- Render konten ---------- */
function renderStatic() {
  $$("[data-bind]").forEach(el => { el.textContent = CONFIG[el.dataset.bind] ?? ""; });
  document.title = `${CONFIG.company} — ${CONFIG.slogan}`;
}

function renderVision() {
  const items = [
    ["Vision", `<p>${esc(CONFIG.vision)}</p>`],
    ["Mission", `<ul>${CONFIG.mission.map(m => `<li>${esc(m)}</li>`).join("")}</ul>`],
    ["Purpose", `<p>${esc(CONFIG.purpose)}</p>`]
  ];
  $("#visionCards").innerHTML = items.map(([t, body], i) =>
    `<article class="card reveal" style="--d:${i * 110}ms"><h3>${t}</h3>${body}</article>`).join("");
}

function renderProjects() {
  const grid = $("#projectGrid");
  grid.innerHTML = novels.map((n, i) =>
    `<article class="novel reveal" style="--d:${(i % 2) * 100}ms">
      <button class="novel-btn" data-id="${n.id}" aria-label="Buka detail ${esc(n.title)}">
        ${imageBox(n.poster, "Poster " + n.title, n.title)}
        <span class="n-title">${esc(n.title)}</span>
        <span class="n-genre">${esc(n.genre)}</span>
      </button>
    </article>`).join("");
  bindImageFallbacks(grid);
  $$(".novel-btn", grid).forEach(b => b.addEventListener("click", () => openNovelDetail(Number(b.dataset.id))));
}

function renderFounder() {
  const f = CONFIG.founder, wrap = $("#founderWrap");
  const social = f.social.map(s => s.url
    ? `<a class="btn btn-ghost" href="${esc(s.url)}"${s.url.startsWith("http") ? ' target="_blank" rel="noopener"' : ""}>${esc(s.label)}</a>`
    : `<span class="btn btn-ghost" aria-disabled="true" title="Tautan belum diisi">${esc(s.label)}</span>`).join("");
  wrap.innerHTML = `
    <div class="reveal">${imageBox(f.photo, "Foto " + f.name, "Foto Pendiri")}</div>
    <div class="f-info reveal" style="--d:140ms">
      <h3>${esc(f.name)}</h3>
      <p class="role">${esc(f.role)}</p>
      ${f.description.map(p => `<p>${esc(p)}</p>`).join("")}
      <h4>Creative Focus</h4>
      <ul class="chips">${f.focus.map(x => `<li>${esc(x)}</li>`).join("")}</ul>
      <div class="social">${social}</div>
    </div>`;
  bindImageFallbacks(wrap);
}

/* ---------- Detail novel ---------- */
function renderNovelDetail(n) {
  $("#dCover").innerHTML = imageBox(n.cover || n.poster, "Cover " + n.title, n.title);
  bindImageFallbacks($("#dCover"));
  $("#dGenre").textContent = n.genre;
  $("#dTitle").textContent = n.title;
  $("#dStatus").textContent = n.status;
  $("#dDesc").textContent = n.description;
  $("#dDetails").textContent = n.details;
  $("#dExtra").innerHTML = (n.extra || CONFIG.defaultExtra)
    .map(([k, v]) => `<div><dt>${esc(k)}</dt><dd>${esc(v)}</dd></div>`).join("");
  $("#dReadSlot").innerHTML = `<button class="btn btn-primary" id="dRead">Read More</button>`;
  $("#dRead").addEventListener("click", () => openReader(n));
}

function openNovelDetail(id) {
  const n = novels.find(x => x.id === id);
  if (!n) return;
  state.savedScroll = window.scrollY;
  $("#page").classList.add("fading");
  setTimeout(() => {
    renderNovelDetail(n);
    document.body.classList.add("detail-open");
    window.scrollTo({ top: 0, behavior: "instant" });
    $("#backBtn").focus({ preventScroll: true });
  }, 280);
}

function closeNovelDetail() {
  if (!document.body.classList.contains("detail-open")) return;
  document.body.classList.remove("detail-open");
  window.scrollTo({ top: state.savedScroll, behavior: "instant" }); // kembali ke posisi galeri Projects
  state.lastY = state.savedScroll;
  $("#navbar").classList.remove("hide");
  requestAnimationFrame(() => $("#page").classList.remove("fading"));
}

/* ---------- Pembaca novel (Read More) ----------
   Naskah & bab TIDAK diedit di sini → edit di file naskah.js */
const READER_GAP = 48;
const R = { n: null, ch: 0, pg: 0, pages: 1, last: false, mode: "page", theme: "dark" };
const store = {
  get: k => { try { return localStorage.getItem(k); } catch (e) { return null; } },
  set: (k, v) => { try { localStorage.setItem(k, v); } catch (e) {} }
};

function chaptersOf(n) {
  if (/^co+m+ing/i.test(n.status)) return [];   // status Coming Soon → "Naskah belum tersedia"
  const list = (typeof NASKAH !== "undefined" && NASKAH[n.id]) || [];
  return list.filter(c => c && String(c.isi || "").trim());
}

function renderReader() {
  const n = R.n, chs = chaptersOf(n), rd = $("#reader"), has = chs.length > 0;
  rd.classList.toggle("empty", !has);
  rd.classList.toggle("r-dark", R.theme === "dark");
  rd.classList.toggle("r-light", R.theme === "light");
  rd.dataset.mode = has ? R.mode : "scroll";
  $$("#rMode button").forEach(b => b.classList.toggle("on", b.dataset.m === R.mode));
  $("#rNovel").textContent = n.title;
  if (!has) {
    $("#rChap").textContent = "";
    $("#rText").innerHTML = `<h2>${esc(n.title)}</h2><p class="r-empty">Naskah belum tersedia</p>`;
    return layoutReader();
  }
  R.ch = Math.min(R.ch, chs.length - 1);
  const c = chs[R.ch];
  $("#rChap").textContent = `Bab ${R.ch + 1} : ${c.judul}`;
  $("#rSelect").innerHTML = chs.map((x, i) => `<option value="${i}"${i === R.ch ? " selected" : ""}>Bab ${i + 1} : ${esc(x.judul)}</option>`).join("");
  $("#rText").innerHTML = `<p class="r-no">Bab ${R.ch + 1}</p><h2>${esc(c.judul)}</h2>` +
    String(c.isi).split(/\n+/).map(t => t.trim()).filter(Boolean).map(t => `<p>${esc(t)}</p>`).join("");
  layoutReader();
}

/* Mode "Halaman": teks dibagi jadi kolom selebar layar lalu digeser (seperti halaman buku) */
function layoutReader() {
  const t = $("#rText");
  if ($("#reader").dataset.mode === "page") {
    const w = $("#rView").clientWidth;
    t.style.cssText = `width:${w}px;column-width:${w}px;column-gap:${READER_GAP}px;transition:none`;
    R.pages = Math.max(1, Math.round((t.scrollWidth + READER_GAP) / (w + READER_GAP)));
    if (R.last) { R.pg = R.pages - 1; R.last = false; }
    R.pg = Math.min(R.pg, R.pages - 1);
    t.style.transform = `translateX(${-R.pg * (w + READER_GAP)}px)`;
    requestAnimationFrame(() => requestAnimationFrame(() => { t.style.transition = ""; }));
  } else {
    t.style.cssText = ""; R.pages = 1; R.pg = 0; $("#rBody").scrollTop = 0;
  }
  updateReaderFooter();
}

function updateReaderFooter() {
  const total = chaptersOf(R.n).length;
  if (!total) return;
  const page = $("#reader").dataset.mode === "page";
  $("#rPrev").disabled = R.ch === 0 && (!page || R.pg === 0);
  $("#rNext").disabled = R.ch === total - 1 && (!page || R.pg === R.pages - 1);
  $("#rInfo").textContent = page ? `Hal ${R.pg + 1}/${R.pages} · Bab ${R.ch + 1}/${total}` : `Bab ${R.ch + 1} dari ${total}`;
}

function stepReader(d) {
  const total = chaptersOf(R.n).length;
  if (!total) return;
  const page = $("#reader").dataset.mode === "page";
  if (page && R.pg + d >= 0 && R.pg + d < R.pages) {      // pindah halaman
    R.pg += d;
    $("#rText").style.transform = `translateX(${-R.pg * ($("#rView").clientWidth + READER_GAP)}px)`;
    return updateReaderFooter();
  }
  const c = R.ch + d;                                      // pindah bab
  if (c < 0 || c >= total) return;
  R.ch = c; R.pg = 0; R.last = page && d < 0;
  renderReader();
}

function setReaderMode(m) { R.mode = m; store.set("affa-mode", m); R.pg = 0; renderReader(); }
function setReaderTheme(t) { R.theme = t; store.set("affa-theme", t); renderReader(); }

function openReader(n) {
  state.detailScroll = window.scrollY;
  R.n = n; R.ch = 0; R.pg = 0;
  document.body.classList.add("reader-open");
  try { history.pushState({ reader: n.id }, ""); } catch (e) {}   // tombol Back HP menutup pembaca
  renderReader();
}

function closeReader(fromPop) {                            // kembali ke halaman novel (cover + sinopsis)
  if (!document.body.classList.contains("reader-open")) return;
  if (!fromPop && history.state && history.state.reader) { history.back(); return; }
  document.body.classList.remove("reader-open");
  window.scrollTo({ top: state.detailScroll || 0, behavior: "instant" });
}

function initializeReader() {
  R.mode = store.get("affa-mode") === "scroll" ? "scroll" : "page";
  R.theme = store.get("affa-theme") === "light" ? "light" : "dark";
  $("#rBack").addEventListener("click", () => closeReader());
  $("#rPrev").addEventListener("click", () => stepReader(-1));
  $("#rNext").addEventListener("click", () => stepReader(1));
  $("#rTheme").addEventListener("click", () => setReaderTheme(R.theme === "dark" ? "light" : "dark"));
  $$("#rMode button").forEach(b => b.addEventListener("click", () => setReaderMode(b.dataset.m)));
  $("#rSelect").addEventListener("change", e => { R.ch = +e.target.value; R.pg = 0; renderReader(); });
  window.addEventListener("popstate", () => closeReader(true));
  window.addEventListener("resize", () => {
    clearTimeout(R.t);
    R.t = setTimeout(() => { if (document.body.classList.contains("reader-open") && R.n) layoutReader(); }, 150);
  });
  document.addEventListener("keydown", e => {
    if (!document.body.classList.contains("reader-open")) return;
    const page = $("#reader").dataset.mode === "page";
    if (e.key === "Escape") closeReader();
    else if (page && e.key === "ArrowRight") stepReader(1);
    else if (page && e.key === "ArrowLeft") stepReader(-1);
  });
  let sx = 0, sy = 0;                                      // geser jari kiri/kanan = ganti halaman
  $("#rBody").addEventListener("touchstart", e => { sx = e.touches[0].clientX; sy = e.touches[0].clientY; }, { passive: true });
  $("#rBody").addEventListener("touchend", e => {
    if ($("#reader").dataset.mode !== "page") return;
    const dx = e.changedTouches[0].clientX - sx, dy = e.changedTouches[0].clientY - sy;
    if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) * 1.5) stepReader(dx < 0 ? 1 : -1);
  }, { passive: true });
}

/* ---------- Navigasi ---------- */
function navigateToSection(id) {
  const el = document.getElementById(id);
  if (!el) return;
  state.navLockUntil = Date.now() + 1200; // navbar tidak disembunyikan saat scroll otomatis
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

function setActiveNav(id) {
  $$(".nav-btn").forEach(b => b.classList.toggle("active", b.dataset.go === id));
}

function initializeNavbar() {
  const nav = $("#navbar");
  window.addEventListener("scroll", () => {
    if (document.body.classList.contains("detail-open")) return;
    const y = window.scrollY;
    nav.classList.toggle("solid", y > 30);
    if (window.innerHeight + y >= document.documentElement.scrollHeight - 6) setActiveNav("founder");
    if (y < 120) { nav.classList.remove("hide"); state.lastY = y; return; }
    const d = y - state.lastY;
    if (Math.abs(d) < 8) return; // abaikan gerakan kecil agar tidak berkedip
    if (d > 0 && Date.now() > state.navLockUntil) nav.classList.add("hide");
    else if (d < 0) nav.classList.remove("hide");
    state.lastY = y;
  }, { passive: true });

  $$("[data-go]").forEach(b => b.addEventListener("click", () => navigateToSection(b.dataset.go)));
  $("#backBtn").addEventListener("click", closeNovelDetail);
  $("#dBack").addEventListener("click", closeNovelDetail);
  document.addEventListener("keydown", e => { if (e.key === "Escape") closeNovelDetail(); });
}

function initializeSectionSpy() {
  if (!("IntersectionObserver" in window)) return;
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) setActiveNav(e.target.id); });
  }, { rootMargin: "-45% 0px -45% 0px" });
  $$("#hero, #vision, #projects, #founder").forEach(s => io.observe(s));
}

/* ---------- Scroll reveal ---------- */
function initializeScrollReveal() {
  const els = $$(".reveal");
  if (!("IntersectionObserver" in window)) { els.forEach(e => e.classList.add("in")); return; }
  const io = new IntersectionObserver(entries => {
    entries.forEach(({ target: t, isIntersecting: visible, boundingClientRect: r }) => {
      if (visible) { t.classList.add("in"); t.classList.remove("out"); }
      else if (r.top < 0) { t.classList.remove("in"); t.classList.add("out"); } // keluar lewat atas
      else t.classList.remove("in", "out");                                      // di bawah layar: siap muncul lagi
    });
  }, { rootMargin: "-8% 0px -8% 0px", threshold: 0 });
  els.forEach(e => io.observe(e));
}

/* ---------- Animasi pembuka ---------- */
function initializePreloader() {
  const pre = $("#preloader");
  setTimeout(() => {
    document.body.classList.remove("loading");
    document.body.classList.add("ready");
    pre.classList.add("done");
    setTimeout(() => pre.remove(), 700);
  }, 2200);
}

/* ---------- Mulai ---------- */
document.addEventListener("DOMContentLoaded", () => {
  if ("scrollRestoration" in history) history.scrollRestoration = "manual";
  window.scrollTo(0, 0);
  renderStatic();
  renderVision();
  renderProjects();
  renderFounder();
  bindImageFallbacks(document);
  initializeNavbar();
  initializeReader();
  initializeSectionSpy();
  initializeScrollReveal();
  initializePreloader();
});
