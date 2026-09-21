// МЕРИДИАН — интерактив лендинга

/* ============ Данные проектов ============
   category: homes | parks | commercial
   gallery: массив фото для лайтбокса (первое — обложка) */
const PROJECTS = [
  {
    title: 'Резиденция «Сторис»',
    category: 'homes',
    desc: 'Клубный дом бизнес-класса в Раменках. Закрытый двор-парк, эксплуатируемая крыша и видовые пентхаусы. Архитектура международного бюро.',
    meta: ['Москва', 'Бизнес-класс', '2024'],
    gallery: [
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1600&q=80',
      'https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?w=1600&q=80',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1600&q=80',
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&q=80',
    ],
  },
  {
    title: 'ЖК «Лазурный берег»',
    category: 'homes',
    desc: 'Жилой комплекс на первой линии набережной: панорамное остекление, лобби с консьержем и подземный паркинг на 400 машиномест.',
    meta: ['Сочи', 'Комфорт+', '2023'],
    gallery: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1600&q=80',
      'https://images.unsplash.com/photo-1460317442991-0ec209397118?w=1600&q=80',
      'https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?w=1600&q=80',
    ],
  },
  {
    title: 'Клубный дом «Артхаус»',
    category: 'homes',
    desc: 'Всего 24 резиденции в историческом центре. Апартаменты с террасами, галерея современного искусства в лобби и приватный спа-этаж.',
    meta: ['Москва', 'Премиум', '2025 · стройка'],
    gallery: [
      'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1600&q=80',
      'https://images.unsplash.com/photo-1486718448742-1634326be78e?w=1600&q=80',
      'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1600&q=80',
    ],
  },
  {
    title: 'Квартал «Горизонт»',
    category: 'parks',
    desc: 'Комплексная застройка 9,4 га: двенадцать башен, школа, детский сад, пешеходный бульвар и собственная набережная канала.',
    meta: ['Москва', 'Премиум', '2026 · стройка'],
    gallery: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1600&q=80',
      'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1600&q=80',
      'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1600&q=80',
      'https://images.unsplash.com/photo-1494522855154-9297ac14b55f?w=1600&q=80',
    ],
  },
  {
    title: 'Парк «Меридиан Грин»',
    category: 'parks',
    desc: 'Ландшафтный парк 12 га в рамках программы реновации промзон: амфитеатр, искусственный пруд, велодорожки и эко-тропы.',
    meta: ['Москва', 'Благоустройство', '2022'],
    gallery: [
      'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1600&q=80',
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1600&q=80',
      'https://images.unsplash.com/photo-1568515387631-8b650bbcdb90?w=1600&q=80',
    ],
  },
  {
    title: 'Квартал «Северная гавань»',
    category: 'parks',
    desc: 'Редевелопмент бывшего порта: апартаменты, марина на 120 яхт, променад с ресторанами и общественный пляж.',
    meta: ['Санкт-Петербург', 'Редевелопмент', '2027 · стройка'],
    gallery: [
      'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1600&q=80',
      'https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=1600&q=80',
      'https://images.unsplash.com/photo-1460317442991-0ec209397118?w=1600&q=80',
    ],
  },
  {
    title: 'Бизнес-центр «Кварц»',
    category: 'commercial',
    desc: 'Многофункциональный комплекс класса А: 28 000 м² офисов, лобби-кафе, терраса на кровле и панорамные атриумы.',
    meta: ['Санкт-Петербург', 'Коммерция', '2023'],
    gallery: [
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1600&q=80',
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&q=80',
      'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80',
    ],
  },
  {
    title: 'ТРЦ «Меркурий»',
    category: 'commercial',
    desc: 'Торгово-развлекательный центр на 64 000 м²: галерея брендов, фуд-холл, кинотеатр и паркинг на 1 800 мест.',
    meta: ['Казань', 'Коммерция', '2021'],
    gallery: [
      'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80',
      'https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=1600&q=80',
      'https://images.unsplash.com/photo-1568515387631-8b650bbcdb90?w=1600&q=80',
    ],
  },
];

/* ============ Прелоадер ============ */
window.addEventListener('load', () => {
  const preloader = document.getElementById('preloader');
  setTimeout(() => preloader.classList.add('done'), 900);
});

/* ============ Шапка при скролле ============ */
const header = document.getElementById('header');
const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 40);
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

/* ============ Мобильное меню ============ */
const burger = document.getElementById('burger');
const nav = document.getElementById('nav');
const toggleMenu = (open) => {
  nav.classList.toggle('open', open);
  burger.classList.toggle('open', open);
  burger.setAttribute('aria-expanded', open);
  document.body.style.overflow = open ? 'hidden' : '';
};
burger.addEventListener('click', () => toggleMenu(!nav.classList.contains('open')));
nav.querySelectorAll('a').forEach(a =>
  a.addEventListener('click', () => toggleMenu(false))
);
// Закрытие меню при ресайзе до десктопа (меню видно при ширине > 860px)
window.addEventListener('resize', () => {
  if (window.innerWidth > 860 && nav.classList.contains('open')) toggleMenu(false);
});

/* ============ Рендер и фильтрация проектов ============ */
const projectsList = document.getElementById('projectsList');

const renderProjects = (filter) => {
  const items = filter === 'all' ? PROJECTS : PROJECTS.filter(p => p.category === filter);
  projectsList.innerHTML = items.map((p, i) => `
    <article class="project" data-index="${PROJECTS.indexOf(p)}" style="animation: projectIn .6s ease both ${i * 0.08}s">
      <div class="project__media">
        <img src="${p.gallery[0]}" alt="${p.title}" loading="lazy">
        <span class="project__count">${p.gallery.length} фото</span>
        <button class="project__gallery-btn">Смотреть галерею</button>
      </div>
      <div class="project__info">
        <div class="project__num">${String(i + 1).padStart(2, '0')}</div>
        <h3>${p.title}</h3>
        <p>${p.desc}</p>
        <div class="project__meta">${p.meta.map(m => `<span>${m}</span>`).join('')}</div>
      </div>
    </article>
  `).join('');
};

document.getElementById('projectFilters').addEventListener('click', e => {
  const btn = e.target.closest('.filter-btn');
  if (!btn) return;
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('is-active'));
  btn.classList.add('is-active');
  renderProjects(btn.dataset.filter);
});

renderProjects('all');

/* ============ Лайтбокс-галерея проекта ============ */
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const lightboxTitle = document.getElementById('lightboxTitle');
const lightboxCounter = document.getElementById('lightboxCounter');
let currentProject = null;
let currentIndex = 0;

const showSlide = () => {
  const g = currentProject.gallery;
  lightboxImg.src = g[currentIndex];
  lightboxImg.alt = currentProject.title;
  lightboxTitle.textContent = currentProject.title;
  lightboxCounter.textContent = `${currentIndex + 1} / ${g.length}`;
};

const openLightbox = (projectIndex) => {
  currentProject = PROJECTS[projectIndex];
  currentIndex = 0;
  showSlide();
  lightbox.classList.add('open');
  lightbox.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
};

const closeLightbox = () => {
  lightbox.classList.remove('open');
  lightbox.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
};

projectsList.addEventListener('click', e => {
  const projectEl = e.target.closest('.project');
  if (!projectEl) return;
  if (e.target.closest('.project__media')) openLightbox(+projectEl.dataset.index);
});

document.getElementById('lightboxClose').addEventListener('click', closeLightbox);
document.getElementById('lightboxPrev').addEventListener('click', () => {
  const len = currentProject.gallery.length;
  currentIndex = (currentIndex - 1 + len) % len;
  showSlide();
});
document.getElementById('lightboxNext').addEventListener('click', () => {
  const len = currentProject.gallery.length;
  currentIndex = (currentIndex + 1) % len;
  showSlide();
});
lightbox.addEventListener('click', e => { if (e.target === lightbox) closeLightbox(); });
document.addEventListener('keydown', e => {
  if (!lightbox.classList.contains('open')) return;
  if (e.key === 'Escape') closeLightbox();
  if (e.key === 'ArrowLeft') document.getElementById('lightboxPrev').click();
  if (e.key === 'ArrowRight') document.getElementById('lightboxNext').click();
});
// Свайпы на мобильных
let touchX = null;
lightbox.addEventListener('touchstart', e => { touchX = e.touches[0].clientX; }, { passive: true });
lightbox.addEventListener('touchend', e => {
  if (touchX === null) return;
  const dx = e.changedTouches[0].clientX - touchX;
  if (Math.abs(dx) > 50) dx > 0 ? document.getElementById('lightboxPrev').click() : document.getElementById('lightboxNext').click();
  touchX = null;
}, { passive: true });

/* ============ Появление блоков при скролле ============ */
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      revealObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.15 });
document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

/* ============ Анимация счётчиков ============ */
const animateCounter = el => {
  const target = +el.dataset.count;
  const suffix = el.dataset.suffix || '';
  const duration = 1800;
  const start = performance.now();
  const step = now => {
    const p = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - p, 3);
    el.textContent = Math.round(target * eased).toLocaleString('ru-RU') + suffix;
    if (p < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
};
const counterObserver = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      animateCounter(e.target);
      counterObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.5 });
document.querySelectorAll('[data-count]').forEach(el => counterObserver.observe(el));
