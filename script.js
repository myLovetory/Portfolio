// Mobile navigation: close the menu after a section link is selected.
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
menuToggle?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(open));
});
nav?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuToggle?.setAttribute('aria-expanded', 'false');
}));

// Project category filter. Cards keep their data-category values in index.html.
document.querySelectorAll('.filter-chip').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.filter-chip').forEach(item => item.classList.remove('active'));
    button.classList.add('active');
    const filter = button.dataset.filter;
    document.querySelectorAll('.project-card').forEach(card => {
      card.hidden = filter !== 'all' && card.dataset.category !== filter;
    });
  });
});

document.querySelector('#year').textContent = new Date().getFullYear();

// Project briefings use the existing portfolio facts; keep copy here in sync with each card.
const projectBriefings = {
  casual: {
    images: ['assets/Dự án 1/Ảnh 1.webp', 'assets/Dự án 1/Ảnh 2.webp', 'assets/Dự án 1/Ảnh 3.webp'],
    title: '100+ Game Thử Thách & Thư Giãn', category: 'CASUAL / HYPERCASUAL', role: 'Gameplay Designer',
    summary: 'Thiết kế gameplay casual với nhiều minigame đa dạng, phù hợp cho mọi lứa tuổi. Tập trung vào thử thách dễ tiếp cận và vòng lặp chơi thư giãn.',
    focus: ['Gameplay Design', 'Level Design', 'UX Flow', 'Prototyping'],
    contribution: 'Mechanics · Balancing · UI flow', mechanics: 'Minigame đa dạng và thử thách dễ tiếp cận, được mô tả trong thông tin dự án.'
  },
  strategy: {
    images: ['assets/Dự án 2/Ảnh 1.webp', 'assets/Dự án 2/Ảnh 2.webp', 'assets/Dự án 2/ảnh 3.webp'],
    title: 'Thiếu Niên 3Q – Khởi Nguyên', category: 'STRATEGY RPG / LIVE OPS', role: 'Game Designer',
    summary: 'Tham gia thiết kế hệ thống, onboarding và phân tích đối thủ cho trải nghiệm game chiến thuật nhập vai.',
    focus: ['System Design', 'UX Design', 'Economy Design', 'Competitive Analysis'],
    contribution: 'Systems · Onboarding · Live ops', mechanics: 'Thiết kế hệ thống và onboarding cho trải nghiệm game chiến thuật nhập vai.'
  },
  academic: {
    images: ['assets/Dư án 3/Ảnh 1.png', 'assets/Dư án 3/Ảnh 2.png', 'assets/Dư án 3/Ảnh 3.png'],
    title: 'Graduation Project: PTIT Handbook', category: 'UNITY 3D / ACADEMIC', role: 'Game Design & Implementation',
    summary: 'Trải nghiệm khám phá khuôn viên 3D, kết hợp hướng dẫn, tương tác NPC, nhiệm vụ và minigame.',
    focus: ['Quest Design', 'Unity Dev', '3D Modeling', '3D Animation', 'UI/UX Design', 'Interaction Design'],
    contribution: 'Quests · NPC flow · Mini-games', mechanics: 'Khám phá khuôn viên 3D thông qua hướng dẫn, NPC, nhiệm vụ và minigame.'
  },
  students: {
    images: ['assets/Dự án 4/Ảnh chụp màn hình (2152).png', 'assets/Dự án 4/Ảnh chụp màn hình 2026-10-11 220138.png', 'assets/Dự án 4/Ảnh chụp màn hình 2026-10-11 220153.png'],
    title: 'Exam Bank Management System', category: 'WEB DEVELOPMENT / PYTHON', role: 'Web Developer',
    summary: 'An exam bank management system built with Python, HTML, CSS, and SQLite.',
    focus: ['Python', 'HTML', 'CSS', 'SQLite'],
    contribution: 'Web development · Database integration', mechanics: 'The system uses Python, HTML, and CSS, with SQLite for data storage.'
  },
  employees: {
    images: ['assets/Dự án 5/Ảnh chụp màn hình 2026-10-11 223722.png', 'assets/Dự án 5/Ảnh chụp màn hình 2026-10-11 223731.png', 'assets/Dự án 5/Ảnh chụp màn hình 2026-10-11 223740.png'],
    title: 'Employee Management Website', category: 'WEB DEVELOPMENT / DJANGO', role: 'Web Developer',
    summary: 'A Django website for managing employee information and records.',
    focus: ['Django', 'Python', 'SQLite', 'PostgreSQL', 'Employee Records'],
    contribution: 'Website development · Django', mechanics: 'The repository language chart highlights Python at 46.2%.'
  }
};

const projectBriefingTranslations = {
  en: {
    casual: { title:'100+ Casual Challenges & Relaxation', category:'CASUAL / HYPERCASUAL', role:'Gameplay Designer', summary:'A collection of casual mini-games for a broad audience, built around accessible challenges and relaxing play loops.', focus:['Gameplay Design','Level Design','UX Flow','Prototyping'], mechanics:'A variety of mini-games and approachable challenges shape the play experience.', contribution:'Mechanics · Balancing · UI flow' },
    strategy: { title:'Teenage 3Q: Origin', category:'STRATEGY RPG / LIVE OPS', role:'Game Designer', summary:'Contributed to systems design, onboarding, and competitor analysis for a strategy RPG.', focus:['System Design','UX Design','Economy Design','Competitive Analysis'], mechanics:'Systems and onboarding support the core strategy RPG experience.', contribution:'Systems · Onboarding · Live ops' },
    academic: { title:'Graduation Project: PTIT Handbook', category:'UNITY 3D / ACADEMIC', role:'Game Design & Implementation', summary:'A 3D campus exploration experience combining guidance, NPC interactions, quests, and mini-games.', focus:['Quest Design','Unity Dev','3D Modeling','3D Animation','UI/UX Design','Interaction Design'], mechanics:'Explore the 3D campus through guidance, NPC interactions, quests, and mini-games.', contribution:'Quests · NPC flow · Mini-games' },
    students: { title:'Exam Bank Management System', category:'WEB DEVELOPMENT / PYTHON', role:'Web Developer', summary:'An exam bank management system built with Python, HTML, CSS, and SQLite.', focus:['Python','HTML','CSS','SQLite'], mechanics:'The system uses Python, HTML, and CSS, with SQLite for data storage.', contribution:'Web development · Database integration' },
    employees: { title:'Employee Management Website', category:'WEB DEVELOPMENT / DJANGO', role:'Web Developer', summary:'A Django website for managing employee information and records.', focus:['Django','Python','SQLite','PostgreSQL','Employee Records'], mechanics:'The repository language chart highlights Python at 46.2%.', contribution:'Website development · Django' }
  },
  vi: {
    casual: { title:'100+ Thử Thách & Thư Giãn', category:'CASUAL / HYPERCASUAL', role:'Thiết kế Gameplay', summary:'Tuyển tập mini-game casual đa dạng cho nhiều lứa tuổi, tập trung vào thử thách dễ tiếp cận và vòng lặp chơi thư giãn.', focus:['Thiết kế Gameplay','Thiết kế Màn chơi','Luồng Trải nghiệm','Tạo Prototype'], mechanics:'Trải nghiệm được tạo nên từ nhiều mini-game và thử thách thân thiện với người chơi.', contribution:'Cơ chế · Cân bằng · Luồng giao diện' },
    strategy: { title:'Thiếu Niên 3Q – Khởi Nguyên', category:'RPG CHIẾN THUẬT / LIVE OPS', role:'Thiết kế Game', summary:'Tham gia thiết kế hệ thống, hướng dẫn người chơi mới và phân tích đối thủ cho game RPG chiến thuật.', focus:['Thiết kế Hệ thống','Thiết kế UX','Thiết kế Kinh tế','Phân tích Đối thủ'], mechanics:'Hệ thống và hướng dẫn người chơi mới hỗ trợ trải nghiệm RPG chiến thuật.', contribution:'Hệ thống · Onboarding · Vận hành game' },
    academic: { title:'Đồ án tốt nghiệp: PTIT Handbook', category:'UNITY 3D / HỌC THUẬT', role:'Thiết kế & Phát triển Game', summary:'Trải nghiệm khám phá khuôn viên 3D, kết hợp hướng dẫn, tương tác NPC, nhiệm vụ và mini-game.', focus:['Thiết kế Nhiệm vụ','Unity Dev','Dựng hình 3D','Diễn hoạt 3D','Thiết kế UI/UX','Thiết kế Tương tác'], mechanics:'Khám phá khuôn viên 3D thông qua hướng dẫn, NPC, nhiệm vụ và mini-game.', contribution:'Nhiệm vụ · Luồng NPC · Mini-game' },
    students: { title:'Hệ thống Quản lý Ngân hàng Đề thi', category:'PHÁT TRIỂN WEB / PYTHON', role:'Phát triển Web', summary:'Hệ thống quản lý ngân hàng đề thi được xây dựng bằng Python, HTML, CSS và SQLite.', focus:['Python','HTML','CSS','SQLite'], mechanics:'Hệ thống sử dụng Python, HTML và CSS; SQLite đảm nhiệm lưu trữ dữ liệu.', contribution:'Phát triển Web · Tích hợp cơ sở dữ liệu' },
    employees: { title:'Website Quản lý Nhân viên', category:'PHÁT TRIỂN WEB / DJANGO', role:'Phát triển Web', summary:'Website quản lý thông tin và hồ sơ nhân viên được xây dựng bằng Django.', focus:['Django','Python','SQLite','PostgreSQL','Hồ sơ nhân viên'], mechanics:'Biểu đồ ngôn ngữ trong mã nguồn cho thấy Python chiếm 46,2%.', contribution:'Phát triển website · Django' }
  },
  ja: {
    casual: { title:'100以上のチャレンジ＆リラックス', category:'カジュアル / ハイパーカジュアル', role:'ゲームプレイデザイナー', summary:'幅広い年齢層向けのカジュアルなミニゲーム集です。親しみやすいチャレンジと、くつろげるゲームループを重視しました。', focus:['ゲームプレイ設計','レベル設計','UXフロー','プロトタイプ制作'], mechanics:'多彩なミニゲームと取り組みやすいチャレンジで体験を構成しています。', contribution:'メカニクス · バランス調整 · UIフロー' },
    strategy: { title:'三国志：オリジン', category:'ストラテジーRPG / 運営', role:'ゲームデザイナー', summary:'ストラテジーRPGのシステム設計、オンボーディング、競合作品の分析に参加しました。', focus:['システム設計','UX設計','経済設計','競合作品の分析'], mechanics:'システムとオンボーディングを通じて、ストラテジーRPGの体験を支えます。', contribution:'システム · オンボーディング · ライブ運営' },
    academic: { title:'卒業制作：PTIT Handbook', category:'UNITY 3D / 学術制作', role:'ゲームデザイン・実装', summary:'ガイド、NPCとの交流、クエスト、ミニゲームを組み合わせた3Dキャンパス探索体験です。', focus:['クエスト設計','Unity開発','3Dモデリング','3Dアニメーション','UI/UXデザイン','インタラクション設計'], mechanics:'ガイドやNPC、クエスト、ミニゲームを通じて3Dキャンパスを探索します。', contribution:'クエスト · NPCフロー · ミニゲーム' },
    students: { title:'問題バンク管理システム', category:'Web開発 / Python', role:'Web開発者', summary:'Python、HTML、CSS、SQLiteで構築した問題バンク管理システムです。', focus:['Python','HTML','CSS','SQLite'], mechanics:'Python、HTML、CSSを使用し、SQLiteでデータを保存します。', contribution:'Web開発 · データベース連携' },
    employees: { title:'従業員管理Webサイト', category:'Web開発 / Django', role:'Web開発者', summary:'Djangoで構築した、従業員情報と記録を管理するWebサイトです。', focus:['Django','Python','SQLite','PostgreSQL','従業員情報'], mechanics:'リポジトリの言語構成ではPythonが46.2%を占めています。', contribution:'Webサイト開発 · Django' }
  }
};
const missionLabels = {
  en: { topTitle:'PROJECT DETAILS <i>///</i> PROJECT DATABASE', close:'Close project details', role:'ROLE', briefing:'PROJECT OVERVIEW', focus:'SKILL AREAS', systems:'SYSTEMS / FEATURES', contribution:'RELEVANT EXPERIENCE', caseFile:'PROJECT FILE', ask:'ASK ABOUT THIS PROJECT', gallery:'Project demo images', previous:'Previous image', next:'Next image', image:'Image' },
  vi: { topTitle:'CHI TIẾT DỰ ÁN <i>///</i> DANH SÁCH DỰ ÁN', close:'Đóng chi tiết dự án', role:'VAI TRÒ', briefing:'TỔNG QUAN DỰ ÁN', focus:'KỸ NĂNG LIÊN QUAN', systems:'HỆ THỐNG / TÍNH NĂNG', contribution:'KINH NGHIỆM LIÊN QUAN', caseFile:'HỒ SƠ DỰ ÁN', ask:'TRAO ĐỔI VỀ DỰ ÁN', gallery:'Ảnh minh họa dự án', previous:'Ảnh trước', next:'Ảnh tiếp theo', image:'Ảnh' },
  ja: { topTitle:'プロジェクト詳細 <i>///</i> プロジェクト一覧', close:'プロジェクト詳細を閉じる', role:'役割', briefing:'プロジェクト概要', focus:'関連スキル', systems:'システム / 機能', contribution:'関連する経験', caseFile:'プロジェクト資料', ask:'このプロジェクトについて問い合わせる', gallery:'プロジェクト画像', previous:'前の画像', next:'次の画像', image:'画像' }
};

const missionDialog = document.querySelector('#mission-dialog');
const missionContent = document.querySelector('#mission-content');
let lastProjectTrigger = null;
let activeLanguage = 'en';
document.querySelectorAll('[data-open-project]').forEach(button => button.addEventListener('click', () => {
  const projectKey = button.dataset.openProject;
  const project = projectBriefings[projectKey];
  const copy = projectBriefingTranslations[activeLanguage]?.[projectKey];
  const labels = missionLabels[activeLanguage] || missionLabels.en;
  if (!project || !missionDialog || !missionContent) return;
  const details = { ...project, ...copy };
  lastProjectTrigger = button;
  missionContent.innerHTML = `
    <div class="mission-heading"><span>${details.category}</span><h2 id="mission-title">${details.title}</h2><div class="mission-role">${labels.role} <b>${details.role}</b></div></div>
    <div class="mission-grid"><div class="mission-gallery"><div class="mission-carousel" data-slide="0" aria-label="${labels.gallery}">
      ${details.images.map((src, index) => `<div class="mission-image-slot${index === 0 ? ' is-active' : ''}"><img src="${src}" alt="${details.title} — ${labels.image} ${index + 1}" loading="lazy"></div>`).join('')}
      <button class="mission-arrow mission-prev" type="button" aria-label="${labels.previous}">‹</button><span class="mission-count" aria-live="polite">01 / 03</span><button class="mission-arrow mission-next" type="button" aria-label="${labels.next}">›</button>
    </div></div>
      <div class="mission-copy"><section><h3>${labels.briefing}</h3><p>${details.summary}</p></section><section><h3>${labels.focus}</h3><div class="mission-tags">${details.focus.map(item => `<span>${item}</span>`).join('')}</div></section><section><h3>${labels.systems}</h3><p>${details.mechanics}</p></section><section><h3>${labels.contribution}</h3><p>${details.role} · ${details.contribution}</p></section></div></div>
    <div class="mission-footer"><span>${labels.caseFile} // ${details.category}</span><a href="mailto:lingari1905@gmail.com">${labels.ask} ↗</a></div>`;
  const carousel = missionContent.querySelector('.mission-carousel');
  const slides = [...carousel.querySelectorAll('.mission-image-slot')];
  const updateImageOrientation = index => {
    const image = slides[index]?.querySelector('img');
    if (image?.complete && image.naturalWidth && image.naturalHeight) {
      carousel.classList.toggle('is-portrait', image.naturalHeight > image.naturalWidth);
    }
  };
  slides.forEach((slide, index) => slide.querySelector('img')?.addEventListener('load', () => {
    if (index === Number(carousel.dataset.slide)) updateImageOrientation(index);
  }));
  const showSlide = index => {
    const active = (index + slides.length) % slides.length;
    carousel.dataset.slide = String(active);
    slides.forEach((slide, i) => slide.classList.toggle('is-active', i === active));
    updateImageOrientation(active);
    carousel.querySelector('.mission-count').textContent = `0${active + 1} / 0${slides.length}`;
  };
  carousel.querySelector('.mission-prev').addEventListener('click', () => showSlide(Number(carousel.dataset.slide) - 1));
  carousel.querySelector('.mission-next').addEventListener('click', () => showSlide(Number(carousel.dataset.slide) + 1));
  updateImageOrientation(0);
  missionDialog.showModal();
}));
document.querySelector('.mission-close')?.addEventListener('click', () => missionDialog?.close());
missionDialog?.addEventListener('click', event => { if (event.target === missionDialog) missionDialog.close(); });
missionDialog?.addEventListener('close', () => lastProjectTrigger?.focus());

// Scroll reveals, current-section navigation state, and a low-cost pointer halo.
const motionReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const revealTargets = document.querySelectorAll('.hero-hud, .section-shell, .project-card, .timeline-item, .skill-module, .education-module, .contact-list > *');
if (!motionReduced && 'IntersectionObserver' in window) {
  document.documentElement.classList.add('motion-enabled');
  revealTargets.forEach((item, index) => {
    item.dataset.reveal = '';
    item.style.setProperty('--reveal-delay', `${Math.min(index % 4, 3) * 75}ms`);
  });
  const revealObserver = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) { entry.target.classList.add('is-visible'); revealObserver.unobserve(entry.target); }
  }), { threshold: .12, rootMargin: '0px 0px -35px 0px' });
  revealTargets.forEach(item => revealObserver.observe(item));
}

const sectionLinks = [...document.querySelectorAll('.nav a[href^="#"]')];
const navSections = sectionLinks.map(link => document.querySelector(link.getAttribute('href'))).filter(Boolean);
if ('IntersectionObserver' in window) {
  const sectionObserver = new IntersectionObserver(entries => entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    sectionLinks.forEach(link => {
      const active = link.hash === `#${entry.target.id}`;
      link.classList.toggle('is-active', active);
      if (active) link.setAttribute('aria-current', 'location'); else link.removeAttribute('aria-current');
    });
  }), { threshold: 0, rootMargin: '-28% 0px -62% 0px' });
  navSections.forEach(section => sectionObserver.observe(section));
}

const cursorHalo = document.querySelector('.cursor-halo');
if (cursorHalo && !motionReduced && window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
  let pointerFrame = 0;
  window.addEventListener('pointermove', event => {
    if (pointerFrame) return;
    pointerFrame = requestAnimationFrame(() => {
      cursorHalo.style.transform = `translate3d(${event.clientX - 150}px, ${event.clientY - 150}px, 0)`;
      pointerFrame = 0;
    });
  }, { passive: true });
}

// Progress is an aesthetic indicator capped until the browser's actual load event.
const loader = document.querySelector('#loader');
const statusPercent = document.querySelector('#loader-percent');
const loaderStatus = document.querySelector('#loader-status');
const progressBar = document.querySelector('#loader-progress');
let displayedProgress = 0;
let loadingFinished = document.readyState === 'complete';
let animationFrame = 0;

function revealPage() {
  if (loader.hidden || !loader.isConnected) return;
  cancelAnimationFrame(animationFrame);
  loadingFinished = true;
  displayedProgress = 100;
  statusPercent.textContent = '100%';
  loaderStatus.innerHTML = '&gt; Portfolio ready <b>OK</b>';
  progressBar.style.width = '100%';
  loader.classList.add('loader-exit');
  window.setTimeout(() => { loader.hidden = true; }, 700);
}

function animateProgress() {
  const target = loadingFinished ? 100 : 92;
  if (displayedProgress < target) displayedProgress = Math.min(target, displayedProgress + Math.max(.12, (target - displayedProgress) * .075));
  statusPercent.textContent = `${Math.floor(displayedProgress)}%`;
  progressBar.style.width = `${displayedProgress}%`;
  if (loadingFinished && displayedProgress >= 99.5) revealPage();
  else animationFrame = requestAnimationFrame(animateProgress);
}
animationFrame = requestAnimationFrame(animateProgress);
if (!loadingFinished) window.addEventListener('load', () => { loadingFinished = true; }, { once: true });

// Language switcher for the page interface. Keep each selector's entries in document order.
const translations = {
  en: {
    '.nav a': ['Home', 'About', 'Projects', 'Experience', 'Skills', 'Contact'],
    '.hero-hud .eyebrow': ['INFORMATION TECHNOLOGY <span class="text-slate-600">/ HANOI, VIETNAM</span>'],
    '.hero-hud > div:first-child > p:not(.eyebrow)': ['Software development<br class="hidden sm:block"> for practical needs.', 'I’m Nguyen Giang Linh, an Information Technology graduate specializing in Information Systems from Posts and Telecommunications Institute of Technology, with a Good classification. I’m focused on software development, databases, and systems that serve users. My Game Design experience has also strengthened my logical thinking, systems analysis, and user experience design.'],
    '.hero-hud .mt-11.flex > span': ['FOCUS <b class="mt-2 block font-sans text-xs font-medium tracking-normal text-slate-200">Software · Systems · Data</b>', 'BASED IN <b class="mt-2 block font-sans text-xs font-medium tracking-normal text-slate-200">Hanoi, Vietnam</b>'],
    '.hero-hud .button-primary, .hero-hud .button-outline': ['View projects <span>↗</span>', 'Contact <span>→</span>'],
    '.section-label': ['01 / ABOUT ME', '02 / IT &amp; SOFTWARE PROJECTS', '03 / RELEVANT EXPERIENCE', '04 / TECHNICAL SKILLS', '05 / GET IN TOUCH'],
    '.section-title-row h2': ['About <span class="gradient-text">Me</span>', 'Selected <span class="gradient-text">Projects</span>', '<span class="gradient-text">Experience</span>', 'Technical <span class="gradient-text">Skills</span>'],
    '.section-code': ['PROFILE_DATA // 001', '03 PROJECTS', 'CAREER_LOG // 03', 'LOADOUT // LINH'],
    '.quote-panel p': ['Thiết kế hệ thống,<br>lấy đạo làm gốc,<br><span class="text-neon">lấy quy luật làm cương.</span>'],
    '.about-grid .cyber-panel > p': ['I graduated from the Posts and Telecommunications Institute of Technology with a Good classification in Information Technology, specializing in Information Systems. I am pursuing a career in IT, particularly software development and information systems, with an interest in requirements analysis, database design, and building applications that address real needs.<span class="profile-paragraph-gap" aria-hidden="true"></span>Alongside my technical background, I have experience exploring and working in Game Design. This has strengthened my logical thinking, systems analysis, and ability to turn requirements into concrete features. I aim to apply this knowledge and these skills to develop efficient, well-structured, maintainable software systems.'],
    '.about-grid .data-line > span': ['LOCATION', 'EMAIL'],
    '.about-grid .cyber-panel > .button-primary': ['Contact me by email <span>↗</span>'],
    '.filter-chip': ['All', 'Casual', 'Strategy', 'Academic'],
    '.project-card .project-role': ['ROLE <b>Gameplay Designer</b>', 'ROLE <b>Game Designer</b>', 'ROLE <b>Game Design &amp; Implementation</b>'],
    '.project-card .project-kicker': ['CASUAL / GAME DESIGN', 'STRATEGY RPG / LIVE OPS', 'UNITY 3D / ACADEMIC'],
    '.project-card h3': ['100+ Casual Challenges &amp; Relaxation', 'Teenage 3Q: Origin', 'Graduation Project: PTIT Handbook'],
    '.project-card > .project-content > p': ['Designed casual gameplay with varied mini-games for a broad audience, focusing on accessible challenges and relaxing play loops.', 'Contributed to systems design, onboarding, and competitor analysis for a strategy RPG experience.', 'A 3D campus exploration experience combining guidance, NPC interactions, quests, and mini-games.'],
    '.project-link': ['Open mission briefing <span>↗</span>', 'Open mission briefing <span>↗</span>', 'Open mission briefing <span>↗</span>'],
    '.timeline-item h3': ['Game Designer', 'Intern Game Designer', 'UI/UX Designer Intern'],
    '.timeline-item .company': ['Gamota · Hanoi, Vietnam', 'BonBonGame Studio · Hanoi, Vietnam', 'FPT Information System · Hanoi, Vietnam'],
    '.timeline-item ul': ['<li>Designed and maintained game systems and levels.</li><li>Analyzed game data and system economy to inform design decisions.</li><li>Worked with cross-functional teams on feature delivery and live operations.</li>', '<li>Developed and refined gameplay concepts and prototypes.</li><li>Prepared design documentation and supported feature communication.</li><li>Applied structured problem-solving to interactive systems.</li>', '<li>Built a basic design system.</li><li>Created prototypes and designed user interfaces.</li><li>Worked with Rive animations.</li><li>Used Adobe tools and created basic 3D designs.</li>'],
    '.timeline-item .live-badge': ['CURRENT', 'INTERNSHIP', 'INTERNSHIP'],
    '.skill-module .panel-heading': ['PROGRAMMING &amp; FRAMEWORKS', 'DEVELOPMENT TOOLS', 'LANGUAGES'],
    '.skill-list': ['<li>Python, Django, Django REST Framework</li><li>C#</li><li>ASP.NET (basic)</li><li>SQL, PostgreSQL, SQLite</li>', '<li>Figma</li><li>Unity 2D, 3D</li><li>Basic data analytics</li><li>Photoshop, Illustrator (basic)</li><li>Blender (basic)</li>', '<li>English (B2)</li><li>Japanese (beginner, studying)</li>'],
    '.education-module .panel-heading': ['EDUCATION / ACADEMIC RECORD'],
    '.education-module h3': ['Posts and Telecommunications Institute of Technology'],
    '.education-module p': ['2021–2026 · Major in Information Systems · Good graduation classification'],
    '.contact-section h2': ['Let’s Build<br>Useful <span class="gradient-text">Software</span>'],
    '.contact-section .contact-grid > div:first-child > p': ['I’m seeking opportunities in software development and information systems. Please get in touch to discuss how my skills could support your team.'],
    '.contact-section .button-primary': ['Send a message <span>↗</span>'],
    '.contact-list small': ['EMAIL', 'PHONE', 'LOCATION', 'LINKEDIN'],
    '.site-footer > span': ['© <span id="year">2026</span> NGUYEN GIANG LINH · INFORMATION TECHNOLOGY'],
    '.site-footer > a:last-child': ['BACK TO TOP ↑']
  },
  vi: {
    '.nav a': ['Trang chủ', 'Giới thiệu', 'Dự án', 'Kinh nghiệm', 'Kỹ năng', 'Liên hệ'],
    '.hero-hud .eyebrow': ['CÔNG NGHỆ THÔNG TIN <span class="text-slate-600">/ HÀ NỘI, VIỆT NAM</span>'],
    '.hero-hud > div:first-child > p:not(.eyebrow)': ['Phát triển phần mềm<br class="hidden sm:block"> hướng đến nhu cầu thực tế.', 'Tôi là Nguyễn Giang Linh, tốt nghiệp ngành Công nghệ thông tin, chuyên ngành Hệ thống thông tin tại Học viện Công nghệ Bưu chính Viễn thông với bằng Khá. Tôi định hướng phát triển phần mềm, cơ sở dữ liệu và các hệ thống phục vụ người dùng. Bên cạnh nền tảng kỹ thuật, tôi có kinh nghiệm trong Game Design, giúp phát triển tư duy logic, phân tích hệ thống và thiết kế trải nghiệm người dùng.'],
    '.hero-hud .mt-11.flex > span': ['TRỌNG TÂM <b class="mt-2 block font-sans text-xs font-medium tracking-normal text-slate-200">Phần mềm · Hệ thống · Dữ liệu</b>', 'NƠI LÀM VIỆC <b class="mt-2 block font-sans text-xs font-medium tracking-normal text-slate-200">Hà Nội, Việt Nam</b>'],
    '.hero-hud .button-primary, .hero-hud .button-outline': ['Xem dự án <span>↗</span>', 'Liên hệ <span>→</span>'],
    '.section-label': ['01 / GIỚI THIỆU', '02 / DỰ ÁN IT &amp; PHẦN MỀM', '03 / KINH NGHIỆM LIÊN QUAN', '04 / KỸ NĂNG CHUYÊN MÔN', '05 / LIÊN HỆ'],
    '.section-title-row h2': ['Sơ lược về <span class="gradient-text">bản thân</span>', 'Dự án <span class="gradient-text">tiêu biểu</span>', '<span class="gradient-text">Kinh nghiệm</span>', 'Kỹ năng <span class="gradient-text">chuyên môn</span>'],
    '.section-code': ['HỒ_SƠ // 001', '03 DỰ ÁN', 'NHẬT_KÝ_NGHỀ // 03', 'BỘ_KỸ_NĂNG // LINH'],
    '.quote-panel p': ['Thiết kế hệ thống,<br>lấy đạo làm gốc,<br><span class="text-neon">lấy quy luật làm cương.</span>'],
    '.about-grid .cyber-panel > p': ['Tôi tốt nghiệp Học viện Công nghệ Bưu chính Viễn thông với bằng Khá, ngành Công nghệ thông tin, chuyên ngành Hệ thống thông tin. Tôi định hướng phát triển trong lĩnh vực IT, đặc biệt là phát triển phần mềm và hệ thống thông tin, đồng thời quan tâm đến phân tích yêu cầu, thiết kế cơ sở dữ liệu và xây dựng ứng dụng phục vụ nhu cầu thực tế.<span class="profile-paragraph-gap" aria-hidden="true"></span>Bên cạnh nền tảng kỹ thuật, tôi có kinh nghiệm tìm hiểu và làm việc trong lĩnh vực Game Design. Trải nghiệm này giúp tôi rèn luyện tư duy logic, khả năng phân tích hệ thống và chuyển đổi yêu cầu thành các chức năng cụ thể. Tôi mong muốn vận dụng những kiến thức và kỹ năng đó để phát triển các hệ thống phần mềm hiệu quả, có cấu trúc và dễ bảo trì.'],
    '.about-grid .data-line > span': ['ĐỊA ĐIỂM', 'EMAIL'],
    '.about-grid .cyber-panel > .button-primary': ['Liên hệ qua email <span>↗</span>'],
    '.filter-chip': ['Tất cả', 'Casual', 'Chiến thuật', 'Học thuật'],
    '.project-card .project-role': ['VAI TRÒ <b>Thiết kế Gameplay</b>', 'VAI TRÒ <b>Thiết kế Game</b>', 'VAI TRÒ <b>Thiết kế &amp; Phát triển Game</b>'],
    '.project-card .project-kicker': ['CASUAL / THIẾT KẾ GAME', 'RPG CHIẾN THUẬT / LIVE OPS', 'UNITY 3D / HỌC THUẬT'],
    '.project-card h3': ['100+ Thử Thách &amp; Thư Giãn', 'Thiếu Niên 3Q – Khởi Nguyên', 'Đồ án tốt nghiệp: PTIT Handbook'],
    '.project-card > .project-content > p': ['Thiết kế gameplay casual với nhiều mini-game đa dạng, phù hợp cho nhiều lứa tuổi; tập trung vào thử thách dễ tiếp cận và vòng lặp chơi thư giãn.', 'Tham gia thiết kế hệ thống, onboarding và phân tích đối thủ cho trải nghiệm game chiến thuật nhập vai.', 'Trải nghiệm khám phá khuôn viên 3D, kết hợp hướng dẫn, tương tác NPC, nhiệm vụ và mini-game.'],
    '.project-link': ['Xem chi tiết dự án <span>↗</span>', 'Xem chi tiết dự án <span>↗</span>', 'Xem chi tiết dự án <span>↗</span>'],
    '.timeline-item h3': ['Game Designer', 'Thực tập sinh Game Designer', 'Thực tập sinh UI/UX Designer'],
    '.timeline-item .company': ['Gamota · Hà Nội, Việt Nam', 'BonBonGame Studio · Hà Nội, Việt Nam', 'FPT Information System · Hà Nội, Việt Nam'],
    '.timeline-item ul': ['<li>Thiết kế và duy trì hệ thống game, màn chơi.</li><li>Phân tích dữ liệu và kinh tế trong game để hỗ trợ quyết định thiết kế.</li><li>Phối hợp với các nhóm liên quan để triển khai tính năng và vận hành sản phẩm.</li>', '<li>Phát triển, hoàn thiện ý tưởng và prototype.</li><li>Chuẩn bị tài liệu thiết kế và hỗ trợ truyền đạt yêu cầu tính năng.</li><li>Vận dụng tư duy giải quyết vấn đề có cấu trúc vào các hệ thống tương tác.</li>', '<li>Xây dựng design system cơ bản.</li><li>Tạo prototype và thiết kế giao diện.</li><li>Làm animation bằng Rive.</li><li>Sử dụng Adobe và thiết kế 3D cơ bản.</li>'],
    '.timeline-item .live-badge': ['HIỆN TẠI', 'THỰC TẬP', 'THỰC TẬP'],
    '.skill-module .panel-heading': ['LẬP TRÌNH &amp; FRAMEWORK', 'CÔNG CỤ PHÁT TRIỂN', 'NGOẠI NGỮ'],
    '.skill-list': ['<li>Python, Django, Django REST Framework</li><li>C#</li><li>ASP.NET (cơ bản)</li><li>SQL, PostgreSQL, SQLite</li>', '<li>Figma</li><li>Unity 2D, 3D</li><li>Phân tích dữ liệu cơ bản</li><li>Photoshop, Illustrator (cơ bản)</li><li>Blender (cơ bản)</li>', '<li>Tiếng Anh (B2)</li><li>Tiếng Nhật (sơ cấp, đang học)</li>'],
    '.education-module .panel-heading': ['HỌC VẤN / THÀNH TÍCH'],
    '.education-module h3': ['Học viện Công nghệ Bưu chính Viễn thông'],
    '.education-module p': ['2021–2026 · Chuyên ngành Hệ thống Thông tin · Tốt nghiệp loại Khá'],
    '.contact-section h2': ['Phát triển<br><span class="gradient-text">phần mềm</span>'],
    '.contact-section .contact-grid > div:first-child > p': ['Tôi đang tìm kiếm cơ hội trong lĩnh vực phát triển phần mềm và hệ thống thông tin. Tôi mong có dịp trao đổi về cách các kỹ năng của tôi có thể đóng góp cho đội ngũ của quý công ty.'],
    '.contact-section .button-primary': ['Gửi lời nhắn <span>↗</span>'],
    '.contact-list small': ['EMAIL', 'ĐIỆN THOẠI', 'ĐỊA ĐIỂM', 'LINKEDIN'],
    '.site-footer > span': ['© <span id="year">2026</span> NGUYỄN GIANG LINH · CÔNG NGHỆ THÔNG TIN'],
    '.site-footer > a:last-child': ['LÊN ĐẦU TRANG ↑']
  },
  ja: {
    '.nav a': ['ホーム', 'プロフィール', 'プロジェクト', '職歴', 'スキル', '連絡先'],
    '.hero-hud .eyebrow': ['情報技術 <span class="text-slate-600">/ ベトナム・ハノイ</span>'],
    '.hero-hud > div:first-child > p:not(.eyebrow)': ['実際のニーズに応える<br class="hidden sm:block">ソフトウェア開発。', '郵政通信技術学院で情報技術を学び、情報システムを専攻して良好な成績で卒業しました。ソフトウェア、データベース、ユーザーのニーズに応えるシステム開発を目指しています。ゲームデザインの経験を通じて、論理的思考力、システム分析力、ユーザー体験の設計力も培いました。'],
    '.hero-hud .mt-11.flex > span': ['注力分野 <b class="mt-2 block font-sans text-xs font-medium tracking-normal text-slate-200">ソフトウェア・システム・データ</b>', '所在地 <b class="mt-2 block font-sans text-xs font-medium tracking-normal text-slate-200">ベトナム・ハノイ</b>'],
    '.hero-hud .button-primary, .hero-hud .button-outline': ['作品を見る <span>↗</span>', 'お問い合わせ <span>→</span>'],
    '.section-label': ['01 / プロフィール', '02 / IT・ソフトウェア開発', '03 / 関連する経験', '04 / 技術スキル', '05 / お問い合わせ'],
    '.section-title-row h2': ['<span class="gradient-text">自己紹介</span>', '主な<span class="gradient-text">プロジェクト</span>', '<span class="gradient-text">関連する経験</span>', '技術<span class="gradient-text">スキル</span>'],
    '.section-code': ['プロフィール // 001', 'プロジェクト 03', '職歴 // 03', 'スキルセット // LINH'],
    '.quote-panel p': ['Thiết kế hệ thống,<br>lấy đạo làm gốc,<br><span class="text-neon">lấy quy luật làm cương.</span>'],
    '.about-grid .cyber-panel > p': ['郵政通信技術学院を良分類で卒業し、情報技術を専攻、情報システムを専門分野として学びました。ソフトウェア開発と情報システムを中心にIT分野でのキャリアを目指しており、要件分析、データベース設計、実際のニーズに応えるアプリケーション開発に関心があります。<span class="profile-paragraph-gap" aria-hidden="true"></span>技術的な基礎に加え、ゲームデザインを学び、実務に携わった経験があります。この経験を通じて、論理的思考力、システム分析力、要件を具体的な機能に落とし込む力を培いました。これらの知識とスキルを活かし、効率的で構造が明確な、保守しやすいソフトウェアシステムを開発したいと考えています。'],
    '.about-grid .data-line > span': ['所在地', 'メール'],
    '.about-grid .cyber-panel > .button-primary': ['メールで連絡 <span>↗</span>'],
    '.filter-chip': ['すべて', 'カジュアル', 'ストラテジー', 'アカデミック'],
    '.project-card .project-role': ['役割 <b>ゲームプレイデザイナー</b>', '役割 <b>ゲームデザイナー</b>', '役割 <b>ゲームデザイン・実装</b>'],
    '.project-card .project-kicker': ['カジュアル / ゲームデザイン', 'ストラテジーRPG / 運営', 'UNITY 3D / 学術制作'],
    '.project-card h3': ['100以上のチャレンジ＆リラックス', '三国志：オリジン', '卒業制作：PTIT Handbook'],
    '.project-card > .project-content > p': ['幅広い年齢層向けに多彩なミニゲームを設計。親しみやすいチャレンジとリラックスできるゲームループを重視しました。', 'ストラテジーRPGのシステム設計、オンボーディング、競合作品の分析に参加しました。', 'ガイド、NPCとの交流、クエスト、ミニゲームを組み合わせた3Dキャンパス探索体験です。'],
    '.project-link': ['プロジェクト詳細 <span>↗</span>', 'プロジェクト詳細 <span>↗</span>', 'プロジェクト詳細 <span>↗</span>'],
    '.timeline-item h3': ['ゲームデザイナー', 'ゲームデザイナー インターン', 'UI/UXデザイナー インターン'],
    '.timeline-item .company': ['Gamota · ベトナム・ハノイ', 'BonBonGame Studio · ベトナム・ハノイ', 'FPT Information System · ベトナム・ハノイ'],
    '.timeline-item ul': ['<li>ゲームシステムとレベルを設計・改善。</li><li>ゲームデータと経済を分析し、設計判断に活用。</li><li>関連チームと連携し、機能開発と運用を支援。</li>', '<li>企画とプロトタイプを作成・改善。</li><li>設計資料を作成し、機能要件の共有を支援。</li><li>インタラクティブなシステムに構造的な問題解決を適用。</li>', '<li>基本的なデザインシステムを構築。</li><li>プロトタイプとユーザーインターフェースを作成。</li><li>Riveアニメーションを制作。</li><li>Adobeツールと基本的な3Dデザインを使用。</li>'],
    '.timeline-item .live-badge': ['現在', 'インターン', 'インターン'],
    '.skill-module .panel-heading': ['プログラミング・フレームワーク', '開発ツール', '語学'],
    '.skill-list': ['<li>Python、Django、Django REST Framework</li><li>C#</li><li>ASP.NET（基礎）</li><li>SQL、PostgreSQL、SQLite</li>', '<li>Figma</li><li>Unity 2D・3D</li><li>基本的なデータ分析</li><li>Photoshop、Illustrator（基礎）</li><li>Blender（基礎）</li>', '<li>英語（B2）</li><li>日本語（初級・学習中）</li>'],
    '.education-module .panel-heading': ['学歴 / 学業記録'],
    '.education-module h3': ['郵便通信技術学院'],
    '.education-module p': ['2021–2026 · 情報システム専攻 · 良好な成績で卒業'],
    '.contact-section h2': ['ソフトウェアを<br><span class="gradient-text">開発する</span>'],
    '.contact-section .contact-grid > div:first-child > p': ['ソフトウェア開発や情報システム分野での機会を探しています。私のスキルが貴社のチームにどのように貢献できるか、ぜひお話しできればと思います。'],
    '.contact-section .button-primary': ['メッセージを送る <span>↗</span>'],
    '.contact-list small': ['メール', '電話', '所在地', 'LINKEDIN'],
    '.site-footer > span': ['© <span id="year">2026</span> グエン・ザン・リン · 情報技術'],
    '.site-footer > a:last-child': ['トップへ戻る ↑']
  }
};
// Give Adobe tools separate rows so each can use its own matching mark.
Object.values(translations).forEach(languageCopy => {
  const toolLists = languageCopy['.skill-list'];
  if (!toolLists?.[1]) return;
  toolLists[1] = toolLists[1].replace(/<li>(Photoshop)[,、]\s*Illustrator([^<]*)<\/li>/, '<li>$1$2</li><li>Illustrator$2</li>');
});
// Add localized copy for the two web projects, which were added after the original language set.
const projectLanguageAdditions = {
  en: {
    '.filter-chip': ['Web'], '.section-code': [undefined, '05 PROJECTS'],
    '.project-card .project-role': ['ROLE <b>Web Developer</b>', 'ROLE <b>Web Developer</b>'],
    '.project-card .project-kicker': ['WEB DEVELOPMENT / PYTHON', 'WEB DEVELOPMENT / DJANGO'],
    '.project-card h3': ['Exam Bank Management System', 'Employee Management Website'],
    '.project-card > .project-content > p': ['An exam bank management system built with Python, HTML, CSS, and SQLite.', 'An employee management website built with Django. The language chart highlights Python.'],
    '.project-link': ['Open project details <span>↗</span>', 'Open project details <span>↗</span>'],
    '.language-chart strong': ['Languages']
  },
  vi: {
    '.filter-chip': ['Web'], '.section-code': [undefined, '05 DỰ ÁN'],
    '.project-card .project-role': ['VAI TRÒ <b>Phát triển Web</b>', 'VAI TRÒ <b>Phát triển Web</b>'],
    '.project-card .project-kicker': ['PHÁT TRIỂN WEB / SQLITE', 'PHÁT TRIỂN WEB / DJANGO'],
    '.project-card h3': ['Website Quản lý Học sinh', 'Website Quản lý Nhân viên'],
    '.project-card > .project-content > p': ['Website quản lý hồ sơ học sinh, lưu trữ và quản lý dữ liệu bằng SQLite.', 'Website quản lý thông tin nhân viên được xây dựng bằng Django. Biểu đồ thể hiện tỷ lệ ngôn ngữ trong mã nguồn.'],
    '.project-link': ['Xem chi tiết dự án <span>↗</span>', 'Xem chi tiết dự án <span>↗</span>'],
    '.language-chart strong': ['Ngôn ngữ']
  },
  ja: {
    '.filter-chip': ['Web'], '.section-code': [undefined, 'プロジェクト 05'],
    '.project-card .project-role': ['役割 <b>Web開発</b>', '役割 <b>Web開発</b>'],
    '.project-card .project-kicker': ['Web開発 / SQLITE', 'Web開発 / DJANGO'],
    '.project-card h3': ['学生管理Webサイト', '従業員管理Webサイト'],
    '.project-card > .project-content > p': ['SQLiteで学生の記録を保存・管理するWebサイトです。', 'Djangoで作成した従業員管理Webサイトです。言語の割合はリポジトリの統計です。'],
    '.project-link': ['プロジェクト詳細 <span>↗</span>', 'プロジェクト詳細 <span>↗</span>'],
    '.language-chart strong': ['言語']
  }
};
projectLanguageAdditions.vi['.project-card h3'][0] = 'Hệ thống Quản lý Ngân hàng Đề thi';
projectLanguageAdditions.vi['.project-card .project-kicker'][0] = 'PHÁT TRIỂN WEB / PYTHON';
projectLanguageAdditions.vi['.project-card > .project-content > p'][0] = 'Hệ thống quản lý ngân hàng đề thi được xây dựng bằng Python, HTML, CSS và SQLite.';
projectLanguageAdditions.ja['.project-card h3'][0] = '問題バンク管理システム';
projectLanguageAdditions.ja['.project-card .project-kicker'][0] = 'Web開発 / PYTHON';
projectLanguageAdditions.ja['.project-card > .project-content > p'][0] = 'Python、HTML、CSS、SQLiteで構築した問題バンク管理システムです。';
Object.entries(projectLanguageAdditions).forEach(([language, additions]) => {
  Object.entries(additions).forEach(([selector, values]) => {
    const original = translations[language][selector] || [];
    if (selector === '.section-code') {
      original[1] = values[1];
      translations[language][selector] = original;
    } else if (selector === '.language-chart strong') {
      translations[language][selector] = values;
    } else {
      translations[language][selector] = original.concat(values);
    }
  });
});
const languageButtons = [...document.querySelectorAll('[data-language]')];
const originalLanguageContent = new Map();
Object.keys(translations.en).forEach(selector => {
  originalLanguageContent.set(selector, [...document.querySelectorAll(selector)].map(node => node.innerHTML));
});
function setLanguage(language) {
  const copy = translations[language] || translations.en;
  activeLanguage = translations[language] ? language : 'en';
  originalLanguageContent.forEach((values, selector) => {
    document.querySelectorAll(selector).forEach((node, index) => {
      if (values[index] !== undefined) node.innerHTML = values[index];
    });
  });
  document.documentElement.lang = language === 'ja' ? 'ja' : language;
  document.querySelector('.language-switch')?.setAttribute('aria-label', language === 'ja' ? '言語を選択' : language === 'vi' ? 'Chọn ngôn ngữ' : 'Choose language');
  menuToggle?.setAttribute('aria-label', language === 'ja' ? 'ナビゲーションを開く' : language === 'vi' ? 'Mở điều hướng' : 'Open navigation');
  const missionCopy = missionLabels[activeLanguage] || missionLabels.en;
  const missionTopTitle = document.querySelector('#mission-dialog .mission-topline > span');
  if (missionTopTitle) missionTopTitle.innerHTML = missionCopy.topTitle;
  document.querySelector('#mission-dialog .mission-close')?.setAttribute('aria-label', missionCopy.close);
  Object.entries(copy).forEach(([selector, values]) => {
    document.querySelectorAll(selector).forEach((node, index) => {
      if (values[index] !== undefined) node.innerHTML = values[index];
    });
  });
  languageButtons.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.language === language)));
  try { localStorage.setItem('portfolio-language', language); } catch {}
}
languageButtons.forEach(button => button.addEventListener('click', () => setLanguage(button.dataset.language)));
let savedLanguage = 'en';
try { savedLanguage = localStorage.getItem('portfolio-language') || 'en'; } catch {}
setLanguage(savedLanguage);
