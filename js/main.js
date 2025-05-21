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