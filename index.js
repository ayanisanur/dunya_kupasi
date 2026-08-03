const heroSlides = [
  { img:'https://iaftm.tmgrup.com.tr/e2c8f9/943/533/0/64/720/471?u=https://iftm.tmgrup.com.tr/2022/12/23/dunya-kupasinin-en-guzel-golu-richarlisondan-1671802243858.jpeg', title:'Dünya Kupası 2026 Heyecanı Başlıyor – 48 Takım, 3 Ülke, Eşsiz Anlar' },
  { img:'https://iaftm.tmgrup.com.tr/15d8a7/943/533/0/0/2048/1158?u=https://iftm.tmgrup.com.tr/2022/12/21/mbappenin-arjantin-fransa-dunya-kupasi-finalindeki-sozleri-ortaya-cikti-soyunma-odasinda-1671616130087.jpg', title:'Türkiye Milli Takımı Gruptan Nasıl Çıkar? İşte Analiz' },
  { img:'https://iaftm.tmgrup.com.tr/90ebe5/943/533/0/81/940/612?u=https://iftm.tmgrup.com.tr/2022/12/21/fas-milli-takimina-kraliyet-nisani-1671604723617.jpeg', title:'En Favori Takımlar ve Şampiyonluk Oranları 2026' },
];

const scoreItems = [
  { flag:'https://flagcdn.com/w40/br.png',     name:'BRE' },
  { flag:'https://flagcdn.com/w40/de.png',     name:'ALM' },
  { flag:'https://flagcdn.com/w40/ar.png',     name:'ARJ' },
  { flag:'https://flagcdn.com/w40/fr.png',     name:'FRA' },
  { flag:'https://flagcdn.com/w40/es.png',     name:'İSP' },
  { flag:'https://flagcdn.com/w40/pt.png',     name:'POR' },
  { flag:'https://flagcdn.com/w40/gb-eng.png', name:'İNG' },
  { flag:'https://flagcdn.com/w40/tr.png',     name:'TÜR' },
  { flag:'https://flagcdn.com/w40/it.png',     name:'İTA' },
  { flag:'https://flagcdn.com/w40/nl.png',     name:'HOL' },
  { flag:'https://flagcdn.com/w40/pt.png',     name:'POR' },
  { flag:'https://flagcdn.com/w40/gb-eng.png', name:'İNG' },
  { flag:'https://flagcdn.com/w40/tr.png',     name:'TÜR' },
  { flag:'https://flagcdn.com/w40/it.png',     name:'İTA' },
  { flag:'https://flagcdn.com/w40/nl.png',     name:'HOL' },
];

const matches = [
  { home:'Brezilya', homeFlag:'https://flagcdn.com/w40/br.png', away:'Almanya', awayFlag:'https://flagcdn.com/w40/de.png' },
];

const groups = ['A','B','C','D','E','F','G','H','I','J','K','L'];
const groupData = {
  A:[
    { team:'Brezilya',   flag:'https://flagcdn.com/w40/br.png', p:3, w:2, d:1, l:0, pts:7 },
    { team:'Almanya',    flag:'https://flagcdn.com/w40/de.png', p:3, w:2, d:0, l:1, pts:6 },
    { team:'Japonya',    flag:'https://flagcdn.com/w40/jp.png', p:3, w:1, d:1, l:1, pts:4 },
    { team:'Güney Kore', flag:'https://flagcdn.com/w40/kr.png', p:3, w:0, d:0, l:3, pts:0 },
  ]
};

const newsList = [
  { img:'https://iaftm.tmgrup.com.tr/90ebe5/943/533/0/81/940/612?u=https://iftm.tmgrup.com.tr/2022/12/21/fas-milli-takimina-kraliyet-nisani-1671604723617.jpeg', title:'Ronaldo Dünya Kupası\'nda Oynayacak mı? İşte Son Açıklama' },
  { img:'https://iaftm.tmgrup.com.tr/15d8a7/943/533/0/0/2048/1158?u=https://iftm.tmgrup.com.tr/2022/12/21/mbappenin-arjantin-fransa-dunya-kupasi-finalindeki-sozleri-ortaya-cikti-soyunma-odasinda-1671616130087.jpg', title:'Messi\'nin 2026 Hedefleri: Son Kupayı Kazanmak İstiyorum' },
  { img:'https://iaftm.tmgrup.com.tr/06b1de/970/90/0/0/970/90?u=https://iftm.tmgrup.com.tr/2025/01/06/samsung-galaxy-s26-ultra-1736168027697.jpeg', title:'Türkiye Gruptan Çıkabilir mi? Uzmanlar Ne Diyor?' },
  { img:'https://iaftm.tmgrup.com.tr/e2c8f9/943/533/0/64/720/471?u=https://iftm.tmgrup.com.tr/2022/12/23/dunya-kupasinin-en-guzel-golu-richarlisondan-1671802243858.jpeg', title:'2026 Dünya Kupası Bilet Fiyatları Belli Oldu' },
  { img:'https://iaftm.tmgrup.com.tr/90ebe5/943/533/0/81/940/612?u=https://iftm.tmgrup.com.tr/2022/12/21/fas-milli-takimina-kraliyet-nisani-1671604723617.jpeg', title:'En Pahalı Kadro: Hangi Takım Ne Kadar Harcadı?' },
  { img:'https://iaftm.tmgrup.com.tr/15d8a7/943/533/0//u=https://iftm.tmgrup.com.tr/2022//mbappenin-arjantin-fransa-dunya-kupasi-finalindeki-sozleri-ortaya-cikti-soyunma-odasinda-1671616130087.jpg', title:'VAR Tartışmaları Bitmek Bilmiyor – Yeni Kural Geliyor' },
];

const cards = [
  { name:'L. Modrić',    flag:'https://flagcdn.com/w40/hr.png', red:0, yellow:2 },
  { name:'S. Gnabry',    flag:'https://flagcdn.com/w40/de.png', red:1, yellow:1 },
  { name:'B. Fernandes', flag:'https://flagcdn.com/w40/pt.png', red:0, yellow:3 },
  { name:'M. Salah',     flag:'https://flagcdn.com/w40/eg.png', red:0, yellow:1 },
];

const goals = [
  { name:'K. Mbappé',       flag:'https://flagcdn.com/w40/fr.png',     goals:5 },
  { name:'V. Osimhen',      flag:'https://flagcdn.com/w40/ng.png',     goals:4 },
  { name:'H. Kane',         flag:'https://flagcdn.com/w40/gb-eng.png', goals:4 },
  { name:'R. Lewandowski',  flag:'https://flagcdn.com/w40/pl.png',     goals:3 },
];

const stadiums = [
  { img:'https://iaftm.tmgrup.com.tr/8867df/301/349/353/0/975/720?u=https://iftm.tmgrup.com.tr/2022/09/17/al-janoub-stadyumu-1663408669576.jpg', name:'MetLife Stadium', city:'New York' },
  { img:'https://iaftm.tmgrup.com.tr/8867df/301/349/353/0/975/720?u=https://iftm.tmgrup.com.tr/2022/09/17/al-janoub-stadyumu-1663408669576.jpg', name:'SoFi Stadium',    city:'Los Angeles' },
  { img:'https://iaftm.tmgrup.com.tr/8867df/301/349/353/0/975/720?u=https://iftm.tmgrup.com.tr/2022/09/17/al-janoub-stadyumu-1663408669576.jpg', name:'AT&T Stadium',    city:'Dallas' },
  { img:'https://iaftm.tmgrup.com.tr/8867df/301/349/353/0/975/720?u=https://iftm.tmgrup.com.tr/2022/09/17/al-janoub-stadyumu-1663408669576.jpg', name:'Azteca',          city:'Mexico City' },
  { img:'https://iaftm.tmgrup.com.tr/8867df/301/349/353/0/975/720?u=https://iftm.tmgrup.com.tr/2022/09/17/al-janoub-stadyumu-1663408669576.jpg', name:'BC Place',        city:'Vancouver' },
];

const cities = [
  { name:'Toronto',       country:'KANADA',  color:'#1a2035' },
  { name:'Vancouver',     country:'KANADA',  color:'#111827' },
  { name:'Guadalajara',   country:'MEKSİKA', color:'#E5004C' },
  { name:'Mexico City',   country:'MEKSİKA', color:'#D94000' },
  { name:'Monterrey',     country:'MEKSİKA', color:'#888888' },
  { name:'New York',      country:'ABD',     color:'#1f3a8a' },
  { name:'Los Angeles',   country:'ABD',     color:'#0d6b4c' },
  { name:'Dallas',        country:'ABD',     color:'#7c3aed' },
  { name:'Miami',         country:'ABD',     color:'#0891b2' },
  { name:'San Francisco', country:'ABD',     color:'#c2410c' },
];

const videos = [
  { img:'https://iaftm.tmgrup.com.tr/0f7132/408/231/0/0/2048/1160?u=https://iftm.tmgrup.com.tr/2022/12/19/fifadan-arjantine-dev-gelir-1671430335967.jpg', title:'Dünya Kupası 2026 Açılış Töreni Tanıtım Videosu' },
  { img:'https://iaftm.tmgrup.com.tr/0f7132/408/231/0/0/2048/1160?u=https://iftm.tmgrup.com.tr/2022/12/19/fifadan-arjantine-dev-gelir-1671430335967.jpg', title:'En Güzel Gollar – Elemelerin Özeti' },
];

const galleries = [
  { img:'https://iaftm.tmgrup.com.tr/e2c8f9/943/533/0/64/720/471?u=https://iftm.tmgrup.com.tr/2022/12/23/dunya-kupasinin-en-guzel-golu-richarlisondan-1671802243858.jpeg', title:'Fenerbahçe 1-0 Beşiktaş | MAÇTAN KARELER' },
  { img:'https://iaftm.tmgrup.com.tr/90ebe5/943/533/0/81/940/612?u=https://iftm.tmgrup.com.tr/2022/12/21/fas-milli-takimina-kraliyet-nisani-1671604723617.jpeg', title:'Süper Lig\'de heyecan devam ediyor! İşte güncel puan durumu' },
  { img:'https://iaftm.tmgrup.com.tr/15d8a7/943/533/0/0/2048/1158?u=https://iftm.tmgrup.com.tr/2022/12/21/mbappenin-arjantin-fransa-dunya-kupasi-finalindeki-sozleri-ortaya-cikti-soyunma-odasinda-1671616130087.jpg', title:'Trabzonspor 2-1 Galatasaray | MAÇTAN KARELER' },
];


const cloneTemplate = (id) => document.getElementById(id).content.cloneNode(true).firstElementChild;

const fillScoreItem = (data) => {
  const el = cloneTemplate('tpl-score-item');
  el.querySelector('[data-flag]').src  = data.flag;
  el.querySelector('[data-flag]').alt  = data.name;
  el.querySelector('[data-name]').textContent = data.name;
  return el;
};

const fillMatchRow = (data) => {
  const el = cloneTemplate('tpl-match-row');
  el.querySelector('[data-home-flag]').src = data.homeFlag;
  el.querySelector('[data-home-flag]').alt = data.home;
  el.querySelector('[data-home-name]').textContent = data.home;
  el.querySelector('[data-away-flag]').src = data.awayFlag;
  el.querySelector('[data-away-flag]').alt = data.away;
  el.querySelector('[data-away-name]').textContent = data.away;
  return el;
};

const fillGroupRow = (data) => {
  const el = cloneTemplate('tpl-group-row');
  el.querySelector('[data-flag]').src = data.flag;
  el.querySelector('[data-flag]').alt = data.team;
  el.querySelector('[data-team]').textContent = data.team;
  el.querySelector('[data-p]').textContent   = data.p;
  el.querySelector('[data-w]').textContent   = data.w;
  el.querySelector('[data-d]').textContent   = data.d;
  el.querySelector('[data-l]').textContent   = data.l;
  el.querySelector('[data-pts]').textContent = data.pts;
  return el;
};

const fillNewsItem = (data) => {
  const el = cloneTemplate('tpl-news-item');
  el.querySelector('[data-img]').src = data.img;
  el.querySelector('[data-title]').textContent = data.title;
  return el;
};

const fillNewsGridCard = (data) => {
  const el = cloneTemplate('tpl-news-grid-card');
  el.querySelector('[data-img]').src = data.img;
  el.querySelector('[data-title]').textContent = data.title;
  return el;
};

const fillMoreNewsCard = (data) => {
  const el = cloneTemplate('tpl-more-news-card');
  el.querySelector('[data-img]').src = data.img;
  el.querySelector('[data-title]').textContent = data.title;
  return el;
};

const fillCardRow = (data) => {
  const el = cloneTemplate('tpl-card-row');
  el.querySelector('[data-name]').textContent   = data.name;
  el.querySelector('[data-flag]').src           = data.flag;
  el.querySelector('[data-red]').textContent    = data.red;
  el.querySelector('[data-yellow]').textContent = data.yellow;
  return el;
};

const fillGoalRow = (data) => {
  const el = cloneTemplate('tpl-goal-row');
  el.querySelector('[data-name]').textContent  = data.name;
  el.querySelector('[data-flag]').src          = data.flag;
  el.querySelector('[data-goals]').textContent = data.goals;
  return el;
};

const fillStadiumCard = (data) => {
  const el = cloneTemplate('tpl-stadium-card');
  el.querySelector('[data-img]').src          = data.img;
  el.querySelector('[data-img]').alt          = data.name;
  el.querySelector('[data-name]').textContent = data.name;
  el.querySelector('[data-city]').textContent  = data.city;
  return el;
};

const fillCityBtn = (data) => {
  const el = cloneTemplate('tpl-city-btn');
  el.style.background = data.color;
  el.querySelector('[data-name]').textContent    = data.name;
  el.querySelector('[data-country]').textContent = data.country;
  return el;
};

const fillVideoRow = (data) => {
  const el = cloneTemplate('tpl-video-row');
  el.querySelector('[data-img]').src           = data.img;
  el.querySelector('[data-title]').textContent = data.title;
  return el;
};

const fillGalleryRow = (data) => {
  const el = cloneTemplate('tpl-gallery-row');
  el.querySelector('[data-img]').src           = data.img;
  el.querySelector('[data-title]').textContent = data.title;
  return el;
};


const appendTo = (id, nodes) => {
  const el = document.getElementById(id);
  if (!el) return;
  nodes.forEach(n => el.appendChild(n));
};

const renderScoreBand = (id) =>
  appendTo(id, scoreItems.map(fillScoreItem));

const renderMatches = (id) =>
  appendTo(id, matches.map(fillMatchRow));

const renderGroupTable = (tableId, groupKey) => {
  const el = document.getElementById(tableId);
  if (!el) return;
  [...el.children].slice(1).forEach(c => c.remove());
  const rows = groupData[groupKey] || groupData['A'];
  rows.forEach(r => el.appendChild(fillGroupRow(r)));
};

const renderGroupTabs = (tabsId, tableId) => {
  const el = document.getElementById(tabsId);
  if (!el) return;
  groups.forEach((g, i) => {
    const btn = cloneTemplate('tpl-group-tab');
    btn.textContent = g;
    if (i === 0) btn.classList.add('active');
    btn.addEventListener('click', () => {
      el.querySelectorAll('.group-tab-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderGroupTable(tableId, g);
    });
    el.appendChild(btn);
  });
  renderGroupTable(tableId, 'A');
};

const renderNewsList = (id, count) =>
  appendTo(id, newsList.slice(0, count).map(fillNewsItem));

const renderNewsGrid = (id) =>
  appendTo(id, newsList.map(fillNewsGridCard));

const renderMoreNews = (id) =>
  appendTo(id, newsList.map(fillMoreNewsCard));

const renderCards = (id) =>
  appendTo(id, cards.map(fillCardRow));

const renderGoals = (id) =>
  appendTo(id, goals.map(fillGoalRow));

const renderStadiums = (id) =>
  appendTo(id, stadiums.map(fillStadiumCard));

const renderCities = (id) =>
  appendTo(id, cities.map(fillCityBtn));

const renderGallery = (id) =>
  appendTo(id, videos.map(fillGalleryRow));

const initHero = (imgId, titleId, paginId, prevId, nextId, dotTplId) => {
  let idx = 0;
  const imgEl   = document.getElementById(imgId);
  const titleEl = document.getElementById(titleId);
  const paginEl = document.getElementById(paginId);
  if (!imgEl) return;

  const updateSlider = () => {
    imgEl.src = heroSlides[idx].img;
    titleEl.textContent = heroSlides[idx].title;

    paginEl.replaceChildren();
    heroSlides.forEach((_, i) => {
      const dot = cloneTemplate(dotTplId);
      if (i === idx) dot.classList.add('active');
      dot.addEventListener('click', () => { idx = i; updateSlider(); });
      paginEl.appendChild(dot);
    });
  };

  document.getElementById(prevId)?.addEventListener('click', () => {
    idx = (idx - 1 + heroSlides.length) % heroSlides.length;
    updateSlider();
  });
  document.getElementById(nextId)?.addEventListener('click', () => {
    idx = (idx + 1) % heroSlides.length;
    updateSlider();
  });

  updateSlider();
  setInterval(() => { idx = (idx + 1) % heroSlides.length; updateSlider(); }, 5000);
};

const initDesktopVideoSlider = () => {
  const slidesEl = document.getElementById('dVideoSlides');
  const paginEl  = document.getElementById('dVideoPagination');
  if (!slidesEl) return;

  let idx = 0;

  const slideEls = videos.map((v) => {
    const slide = document.createElement('div');
    slide.className = 'absolute inset-0 transition-opacity duration-300';

    const img = document.createElement('img');
    img.src = v.img;
    img.alt = v.title;
    img.className = 'w-full h-full object-cover block';
    slide.appendChild(img);

    const grad = document.createElement('div');
    grad.className = 'absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent pointer-events-none';
    slide.appendChild(grad);

    const canli = document.createElement('div');
    canli.className = 'absolute top-3 left-3 bg-[#EB0000] text-white text-[11px] font-extrabold px-2 py-[2px] rounded-sm tracking-wide';
    canli.textContent = 'CANLI';
    slide.appendChild(canli);

    const play = document.createElement('div');
    play.className = 'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-[#7F0006] rounded-full flex items-center justify-center shadow-lg';
    play.innerHTML = '<svg width="18" height="20" viewBox="0 0 8 9" fill="none"><path d="M1 1L7 4.5L1 8V1Z" fill="white"/></svg>';
    slide.appendChild(play);

    const titleEl = document.createElement('div');
    titleEl.className = 'absolute bottom-0 left-0 right-0 px-4 py-3';
    titleEl.innerHTML = `<h4 class="text-white text-[16px] font-bold leading-snug clamp-2">${v.title}</h4>`;
    slide.appendChild(titleEl);

    slidesEl.appendChild(slide);
    return slide;
  });

  const update = () => {
    slideEls.forEach((s, i) => {
      s.style.opacity = i === idx ? '1' : '0';
      s.style.zIndex  = i === idx ? '1' : '0';
    });
    paginEl.replaceChildren();
    slideEls.forEach((_, i) => {
      const dot = document.createElement('button');
      dot.className = `w-[10px] h-[10px] rounded-full border-0 cursor-pointer transition-all ${i === idx ? 'bg-[#EB0000]' : 'bg-[#ccc]'}`;
      dot.addEventListener('click', () => { idx = i; update(); });
      paginEl.appendChild(dot);
    });
  };

  document.getElementById('dVideoPrev')?.addEventListener('click', () => {
    idx = (idx - 1 + videos.length) % videos.length;
    update();
  });
  document.getElementById('dVideoNext')?.addEventListener('click', () => {
    idx = (idx + 1) % videos.length;
    update();
  });

  update();
  setInterval(() => { idx = (idx + 1) % videos.length; update(); }, 4000);
};

const renderDesktopGallery = (id) => {
  const el = document.getElementById(id);
  if (!el) return;

  el.className = 'grid grid-cols-2 grid-rows-2 gap-3 h-[354px]';

  galleries.forEach((item, i) => {
    const a = document.createElement('a');
    a.href = '#';
    a.className = 'relative overflow-hidden group block bg-black';
    if (i === 0) a.classList.add('row-span-2');

    const img = document.createElement('img');
    img.src = item.img;
    img.alt = item.title;
    img.className = 'w-full h-full object-cover block opacity-90 transition-transform duration-300 group-hover:scale-105';
    a.appendChild(img);

    const icon = document.createElement('div');
    icon.className = 'absolute top-2 left-2 w-6 h-6 bg-black/60 rounded flex items-center justify-center';
    icon.innerHTML = '<svg width="13" height="13" viewBox="0 0 24 24" fill="none"><path d="M20 5h-3.17L15 3H9L7.17 5H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2zm-8 13a5 5 0 1 1 0-10 5 5 0 0 1 0 10z" fill="white"/></svg>';
    a.appendChild(icon);

    const grad = document.createElement('div');
    grad.className = 'absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent pointer-events-none';
    a.appendChild(grad);

    const titleEl = document.createElement('div');
    titleEl.className = 'absolute bottom-0 left-0 right-0 px-3 py-2';
    titleEl.innerHTML = `<h4 class="text-white text-[${i === 0 ? '15' : '13'}px] font-bold leading-snug clamp-2">${item.title}</h4>`;
    a.appendChild(titleEl);

    el.appendChild(a);
  });
};

const initMobileVideoSlider = () => {
  const slidesEl = document.getElementById('mVideoSlides');
  const paginEl  = document.getElementById('mVideoPagination');
  if (!slidesEl) return;

  let idx = 0;

  const slideEls = videos.map((v) => {
    const slide = document.createElement('div');
    slide.className = 'absolute inset-0 transition-opacity duration-300';

    const img = document.createElement('img');
    img.src = v.img;
    img.alt = v.title;
    img.className = 'w-full h-full object-cover block';
    slide.appendChild(img);

    const grad = document.createElement('div');
    grad.className = 'absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent pointer-events-none';
    slide.appendChild(grad);

    const canli = document.createElement('div');
    canli.className = 'absolute top-3 right-3 bg-[#EB0000] text-white text-[11px] font-extrabold px-2 py-[2px] rounded-sm tracking-wide';
    canli.textContent = 'CANLI';
    slide.appendChild(canli);

    const play = document.createElement('div');
    play.className = 'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-[#7F0006] rounded-full flex items-center justify-center shadow-lg';
    play.innerHTML = '<svg width="16" height="18" viewBox="0 0 8 9" fill="none"><path d="M1 1L7 4.5L1 8V1Z" fill="white"/></svg>';
    slide.appendChild(play);

    const titleEl = document.createElement('div');
    titleEl.className = 'absolute bottom-0 left-0 right-0 px-4 py-3';
    titleEl.innerHTML = `<h4 class="text-white text-[15px] font-bold leading-snug clamp-2">${v.title}</h4>`;
    slide.appendChild(titleEl);

    slidesEl.appendChild(slide);
    return slide;
  });

  const updateVideoSlider = () => {
    slideEls.forEach((s, i) => {
      s.style.opacity  = i === idx ? '1' : '0';
      s.style.zIndex   = i === idx ? '1' : '0';
    });

    paginEl.replaceChildren();
    slideEls.forEach((_, i) => {
      const dot = document.createElement('button');
      dot.className = `mobile-dot w-[10px] h-[10px] rounded-[10px] border-0 cursor-pointer transition-all ${i === idx ? 'active bg-[#EB0000]' : 'bg-[#ccc]'}`;
      dot.addEventListener('click', () => { idx = i; updateVideoSlider(); });
      paginEl.appendChild(dot);
    });
  };

  document.getElementById('mVideoPrev')?.addEventListener('click', () => {
    idx = (idx - 1 + videos.length) % videos.length;
    updateVideoSlider();
  });
  document.getElementById('mVideoNext')?.addEventListener('click', () => {
    idx = (idx + 1) % videos.length;
    updateVideoSlider();
  });

  updateVideoSlider();
  setInterval(() => { idx = (idx + 1) % videos.length; updateVideoSlider(); }, 4000);
};


document.addEventListener('DOMContentLoaded', () => {
  renderScoreBand('dScoreBand');
  renderScoreBand('mScoreBand');

  renderMatches('dMatchList');
  renderMatches('mMatchList');

  renderGroupTabs('dGroupTabs', 'dGroupTable');
  renderGroupTabs('mGroupTabs', 'mGroupTable');

  renderNewsList('dNewsList1', 4);
  renderNewsList('mNewsList1', 4);
  renderNewsList('mNewsList2', 6);
  renderNewsGrid('dNewsGrid');
  renderMoreNews('dMoreNews');

  renderCards('dCardsList');
  renderCards('mCardsList');
  renderGoals('dGoalsList');
  renderGoals('mGoalsList');

  renderStadiums('dStadiumScroll');
  renderStadiums('mStadiumScroll');
  renderCities('dCitiesGrid');
  renderCities('mCityScroll');

  renderGallery('mGalleryList');

  initDesktopVideoSlider();
  renderDesktopGallery('dGalleryList');
  initMobileVideoSlider();

  initHero('dHeroImg','dHeroTitle','dHeroPagination','dHeroPrev','dHeroNext','tpl-hero-dot');
  initHero('mHeroImg','mHeroTitle','mHeroPagination','mHeroPrev','mHeroNext','tpl-mobile-dot');
});