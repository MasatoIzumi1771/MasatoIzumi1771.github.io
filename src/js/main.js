document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.nav');

    menuToggle.addEventListener('click', () => {
        const isExpanded = nav.classList.toggle('is-active');
        menuToggle.classList.toggle('is-active');
        menuToggle.setAttribute('aria-expanded', isExpanded);
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

    // ダークモード切り替え
    const themeToggle = document.querySelector('.theme-toggle');
    const themeIcon = document.querySelector('.theme-icon');
    const html = document.documentElement;

    // 保存されたテーマを復元、またはシステム設定を確認
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme) {
        html.setAttribute('data-theme', savedTheme);
        themeIcon.textContent = savedTheme === 'dark' ? '☀️' : '🌙';
    } else if (prefersDark) {
        html.setAttribute('data-theme', 'dark');
        themeIcon.textContent = '☀️';
    }

    themeToggle.addEventListener('click', () => {
        const currentTheme = html.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        html.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        themeIcon.textContent = newTheme === 'dark' ? '☀️' : '🌙';
    });

    // 固定トップへ戻るボタン
    const backToTopBtn = document.querySelector('.back-to-top-fixed');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    });

    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // フェードインアニメーション（Intersection Observer）
    // 記事詳細ページではフェードインをスキップ（問題の切り分け）
    const isArticlePage = document.querySelector('.article-detail');
    const fadeElements = document.querySelectorAll('.article-preview, .article-card, .skill-category, .history-item' + (isArticlePage ? '' : ', .section'));

    fadeElements.forEach(el => {
        el.classList.add('fade-in');
    });

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const fadeObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                fadeObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    fadeElements.forEach(el => {
        fadeObserver.observe(el);
    });

    // 記事ページの機能
    const articleBody = document.querySelector('.article-body');
    if (articleBody) {
        // 読了時間の計算
        const readingTimeEl = document.getElementById('reading-time');
        if (readingTimeEl) {
            const text = articleBody.textContent || '';
            const charCount = text.length;
            // 日本語は1分あたり約500文字、英語は約200単語
            const minutes = Math.max(1, Math.ceil(charCount / 500));
            readingTimeEl.textContent = `${minutes} min read`;
        }

        // 目次の自動生成
        const tocList = document.getElementById('toc-list');
        const toc = document.getElementById('toc');
        if (tocList && toc) {
            const headings = articleBody.querySelectorAll('h3, h4');
            if (headings.length > 0) {
                headings.forEach((heading, index) => {
                    // 見出しにIDを付与
                    const id = `heading-${index}`;
                    heading.id = id;

                    // 目次アイテムを作成
                    const li = document.createElement('li');
                    const a = document.createElement('a');
                    a.href = `#${id}`;
                    a.textContent = heading.textContent;
                    if (heading.tagName === 'H4') {
                        a.classList.add('toc-h4');
                    }
                    li.appendChild(a);
                    tocList.appendChild(li);
                });
            } else {
                // 見出しがない場合は目次を非表示
                toc.style.display = 'none';
            }
        }

        // コードブロックにコピーボタンを追加
        const codeBlocks = articleBody.querySelectorAll('pre');
        codeBlocks.forEach((pre) => {
            const wrapper = document.createElement('div');
            wrapper.className = 'code-block-wrapper';
            pre.parentNode.insertBefore(wrapper, pre);
            wrapper.appendChild(pre);

            const button = document.createElement('button');
            button.className = 'copy-button';
            button.textContent = 'Copy';
            button.addEventListener('click', async () => {
                const code = pre.querySelector('code');
                const text = code ? code.textContent : pre.textContent;
                try {
                    await navigator.clipboard.writeText(text);
                    button.textContent = 'Copied!';
                    button.classList.add('copied');
                    setTimeout(() => {
                        button.textContent = 'Copy';
                        button.classList.remove('copied');
                    }, 2000);
                } catch (err) {
                    button.textContent = 'Failed';
                }
            });
            wrapper.appendChild(button);
        });
    }

    // KaTeXの数式をレンダリング
    if (typeof renderMathInElement === 'function') {
        renderMathInElement(document.body, {
            delimiters: [
                {left: '$$', right: '$$', display: true},
                {left: '$', right: '$', display: false},
                {left: '\\(', right: '\\)', display: false},
                {left: '\\[', right: '\\]', display: true}
            ],
            throwOnError: false,
            ignoredTags: ['script', 'noscript', 'style', 'textarea', 'pre', 'code']
        });
    }
});
