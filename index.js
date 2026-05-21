
const heroSlides = [
  { img:'https://picsum.photos/seed/wc1/900/400', title:'Dünya Kupası 2026 Heyecanı Başlıyor – 48 Takım, 3 Ülke, Eşsiz Anlar' },
  { img:'https://picsum.photos/seed/wc2/900/400', title:'Türkiye Milli Takımı Gruptan Nasıl Çıkar? İşte Analiz' },
  { img:'https://picsum.photos/seed/wc3/900/400', title:'En Favori Takımlar ve Şampiyonluk Oranları 2026' },
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
  { home:'Brezilya', homeFlag:'https://flagcdn.com/w40/br.png', away:'Almanya',  awayFlag:'https://flagcdn.com/w40/de.png' },

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
  { img:'https://picsum.photos/seed/n1/300/170', title:'Ronaldo Dünya Kupası\'nda Oynayacak mı? İşte Son Açıklama' },
  { img:'https://picsum.photos/seed/n2/300/170', title:'Messi\'nin 2026 Hedefleri: Son Kupayı Kazanmak İstiyorum' },
  { img:'https://picsum.photos/seed/n3/300/170', title:'Türkiye Gruptan Çıkabilir mi? Uzmanlar Ne Diyor?' },
  { img:'https://picsum.photos/seed/n4/300/170', title:'2026 Dünya Kupası Bilet Fiyatları Belli Oldu' },
  { img:'https://picsum.photos/seed/n5/300/170', title:'En Pahalı Kadro: Hangi Takım Ne Kadar Harcadı?' },
  { img:'https://picsum.photos/seed/n6/300/170', title:'VAR Tartışmaları Bitmek Bilmiyor – Yeni Kural Geliyor' },
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
  { img:'https://picsum.photos/seed/st1/280/320', name:'MetLife Stadium', city:'New York' },
  { img:'https://picsum.photos/seed/st2/280/320', name:'SoFi Stadium',    city:'Los Angeles' },
  { img:'https://picsum.photos/seed/st3/280/320', name:'AT&T Stadium',    city:'Dallas' },
  { img:'https://picsum.photos/seed/st4/280/320', name:'Azteca',          city:'Mexico City' },
  { img:'https://picsum.photos/seed/st5/280/320', name:'BC Place',        city:'Vancouver' },
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
  { img:'https://picsum.photos/seed/v1/300/170', title:'Dünya Kupası 2026 Açılış Töreni Tanıtım Videosu' },
  { img:'https://picsum.photos/seed/v2/300/170', title:'En Güzel Gollar – Elemelerin Özeti' },
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
  el.querySelector('[data-img]').src          = data.img;
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

const renderVideos = (id) =>
  appendTo(id, videos.map(fillVideoRow));

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

  renderVideos('dVideoList');
  renderVideos('mVideoList');
  renderGallery('dGalleryList');
  renderGallery('mGalleryList');

  initHero('dHeroImg','dHeroTitle','dHeroPagination','dHeroPrev','dHeroNext','tpl-hero-dot');
  initHero('mHeroImg','mHeroTitle','mHeroPagination','mHeroPrev','mHeroNext','tpl-mobile-dot');
});
