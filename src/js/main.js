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

});

// --- KaTeXの数式をレンダリングする命令を追加 ---
document.addEventListener('DOMContentLoaded', () => {
    // KaTeXの自動レンダリング機能が存在するか確認してから実行
    if (typeof renderMathInElement === 'function') {
        renderMathInElement(document.body, {
            // KaTeXが認識する数式の区切り文字を設定
            delimiters: [
                {left: '$$', right: '$$', display: true},
                {left: '$', right: '$', display: false},
                {left: '\\(', right: '\\)', display: false},
                {left: '\\[', right: '\\]', display: true}
            ]
        });
    }
});
