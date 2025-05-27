document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.nav');

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

    // --- ナビゲーションリンクのアクティブ状態制御 ---
    const navLinks = document.querySelectorAll('.nav-list .nav-item a');
    const currentPathname = window.location.pathname; // 現在のページのパスを取得

    navLinks.forEach(link => {
        let linkPathname = new URL(link.href).pathname;

        const cleanPath = (path) => {
            let cleaned = path.endsWith('/index.html') ? path.slice(0, -11) : path;
            cleaned = (cleaned.length > 1 && cleaned.endsWith('/')) ? cleaned.slice(0, -1) : cleaned;
            return cleaned;
        };

        const cleanedCurrentPath = cleanPath(currentPathname);
        const cleanedLinkPath = cleanPath(linkPathname);

        // ホームページのリンクをアクティブにする
        if (cleanedCurrentPath === cleanedLinkPath && cleanedLinkPath === '/index.html') {
            link.classList.add('active-link');
        }
        // 特定のカテゴリのトップページをアクティブにする
        else if (cleanedCurrentPath === cleanedLinkPath) {
            link.classList.add('active-link');
        }
        // 記事ページの場合、対応するカテゴリの nav-item をアクティブにする
        else if (currentPathname.includes('/articles/') && (linkPathname.endsWith('/articles.html') || linkPathname.endsWith('/articles/'))) {
            link.classList.add('active-link');
        }
        // 「コマンド」ページの場合のアクティブ化ロジックを追加
        else if (currentPathname.endsWith('/commands.html') && linkPathname.endsWith('/commands.html')) {
            link.classList.add('active-link');
        }
        // 「その他」ページのアクティブ化ロジック (変更なし)
        else if (currentPathname.includes('/other/') && (linkPathname.endsWith('/other.html') || linkPathname.endsWith('/other/'))) {
             link.classList.add('active-link');
        }

    });





});

