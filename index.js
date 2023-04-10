// アウトラインのリンクがクリックされた際の処理
document.querySelectorAll('outline a').forEach(link => {
    link.addEventListener('click', event => {
      event.preventDefault();  // リンクのデフォルト動作をキャンセル
      const target = document.querySelector(link.getAttribute('href'));  // スクロール先を取得
      const distance = target.offsetTop;})})

function changeLanguage(lang) {
  const langElements = document.querySelectorAll("[data-lang]");
  for (let i = 0; i < langElements.length; i++) {
    const element = langElements[i];
    const text = element.getAttribute(`data-lang-${lang}`);
    if (text) {
      element.textContent = text;
    }
  }
}

// ナビゲーションリンクのクリックイベントをハンドリング
const navLinks = document.querySelectorAll('nav a');

for (let i = 0; i < navLinks.length; i++) {
  const link = navLinks[i];
  link.addEventListener('click', function(event) {
    event.preventDefault();
    const targetId = link.getAttribute('href');
    const target = document.querySelector(targetId);
    const targetTop = target.getBoundingClientRect().top;
    const startPos = window.pageYOffset;
    const diff = targetTop / 20;
    let scrollCount = 0;
    let scrollInterval = setInterval(function() {
      const scrollPos = startPos + diff * scrollCount;
      window.scrollTo(0, scrollPos);
      if (scrollCount >= 20) {
        clearInterval(scrollInterval);
      }
      scrollCount++;
    }, 20);
  });
}


const outline = document.querySelector('.outline');
const outlineLinks = outline.querySelectorAll('a');
const sections = document.querySelectorAll('section');
const sectionOffsets = [];

for (let i = 0; i < sections.length; i++) {
  sectionOffsets.push(sections[i].offsetTop);
}

window.addEventListener('scroll', function() {
  const currentScrollPos = window.pageYOffset;
  for (let i = 0; i < sectionOffsets.length; i++) {
    if (currentScrollPos >= sectionOffsets[i] - window.innerHeight / 2) {
      outlineLinks.forEach(function(link) {
        link.classList.remove('active');
      });
      outlineLinks[i].classList.add('active');
    }
  }
});

for (let i = 0; i < outlineLinks.length; i++) {
  outlineLinks[i].addEventListener('click', function(event) {
    event.preventDefault();
    const targetId = outlineLinks[i].getAttribute('href');
    const target = document.querySelector(targetId);
    const targetTop = target.getBoundingClientRect().top;
    const startPos = window.pageYOffset;
    const diff = targetTop / 20;
    let scrollCount = 0;
    let scrollInterval = setInterval(function() {
      const scrollPos = startPos + diff * scrollCount;
      window.scrollTo(0, scrollPos);
      if (scrollCount >= 20) {
        clearInterval(scrollInterval);
      }
      scrollCount++;
    }, 20);
  });
}

outline.style.left = 'calc(50% - 610px)';
window.addEventListener('scroll', function() {
  outline.style.top = `calc(50% - ${outline.offsetHeight / 2}px)`;
  outline.style.left = `calc(50% - 610px + ${window.scrollX}px)`;
});


function toggleLanguage() {
  var elements = document.getElementsByClassName("language-toggle");
  for (var i = 0; i < elements.length; i++) {
    elements[i].classList.toggle("hidden");
  }
}

// アウトラインのリストアイテムを取得
const outlineItems = document.querySelectorAll('.outlineList li');

// スクロールイベントのリスナーを追加
window.addEventListener('scroll', () => {
  // スクロール位置を取得
  const scrollPosition = window.scrollY;

  // 各アウトラインアイテムをループし、現在の位置に応じて .current クラスを適用
  outlineItems.forEach(item => {
    const sectionId = item.querySelector('a').getAttribute('href');
    const section = document.querySelector(sectionId);
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
      item.classList.add('current');
    } else {
      item.classList.remove('current');
    }
  });
});


