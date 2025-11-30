document.addEventListener('DOMContentLoaded', () => {
    const enableKatex = document.body.dataset.enableKatex === 'true';
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.nav');

    if (menuToggle && nav) {
        menuToggle.addEventListener('click', () => {
            nav.classList.toggle('is-active');
            menuToggle.classList.toggle('is-active');
        });

        // ナビゲーションリンクをクリックしたらメニューを閉じる (モバイル用)
        nav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                if (nav.classList.contains('is-active')) {
                    nav.classList.remove('is-active');
                    menuToggle.classList.remove('is-active');
                }
            });
        });
    }

    // --- ナビゲーションリンクのアクティブ状態制御 ---
    const navLinks = document.querySelectorAll('.nav-list .nav-item a');
    const currentPathname = window.location.pathname;

    const cleanPath = (path) => {
        let cleaned = path.endsWith('/index.html') ? path.slice(0, -11) : path;
        cleaned = cleaned.endsWith('/') && cleaned.length > 1 ? cleaned.slice(0, -1) : cleaned;
        return cleaned || '/';
    };

    navLinks.forEach(link => {
        const linkPathname = new URL(link.href).pathname;
        const cleanedCurrentPath = cleanPath(currentPathname);
        const cleanedLinkPath = cleanPath(linkPathname);

        const isArticlesDetail = currentPathname.includes('/articles/') &&
            (linkPathname.endsWith('/articles.html') || linkPathname.endsWith('/articles/'));
        const isOtherDetail = currentPathname.includes('/other/') &&
            (linkPathname.endsWith('/other.html') || linkPathname.endsWith('/other/'));

        if (cleanedCurrentPath === cleanedLinkPath || isArticlesDetail || isOtherDetail) {
            link.classList.add('active-link');
            link.setAttribute('aria-current', 'page');
        }
    });

    // --- 画像の遅延読み込みをデフォルト化 ---
    document.querySelectorAll('img:not([loading])').forEach(img => {
        img.loading = 'lazy';
    });

    // --- KaTeXの数式をレンダリング ---
    if (enableKatex && typeof renderMathInElement === 'function') {
        renderMathInElement(document.body, {
            delimiters: [
                {left: '$$', right: '$$', display: true},
                {left: '$', right: '$', display: false},
                {left: '\\(', right: '\\)', display: false},
                {left: '\\[', right: '\\]', display: true}
            ]
        });
    }
});
