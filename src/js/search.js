document.addEventListener('DOMContentLoaded', async () => {
    const input = document.getElementById('search-input');
    const resultsEl = document.getElementById('search-results');
    if (!input || !resultsEl) return;

    if (window.location.protocol === 'file:') {
        resultsEl.innerHTML = '<p class="search-empty">ローカルファイルでは検索インデックスを読み込めません。`npm run dev` で http 経由で開いてください。</p>';
        return;
    }

    const metaIndex = document.querySelector('meta[name="search-index"]');
    const baseIndex = metaIndex ? metaIndex.content : '/search-index.json';

    const renderResults = (items) => {
        if (!items.length) {
            resultsEl.innerHTML = '<p class="search-empty">一致する記事がありませんでした。</p>';
            return;
        }
        const html = items
            .map(
                (item) => `
                <article class="search-result-item">
                    <a href="${item.url}" class="search-result-title">${item.title}</a>
                    <p class="search-result-meta">${item.date}</p>
                    <p class="search-result-desc">${item.description || ''}</p>
                </article>
            `
            )
            .join('');
        resultsEl.innerHTML = html;
    };

    resultsEl.innerHTML = '<p class="search-empty">検索インデックスを読み込み中...</p>';
    const fetchIndex = async () => {
        const candidates = [
            baseIndex,
            baseIndex.startsWith('/') ? `.${baseIndex}` : `./${baseIndex}`,
            `${window.location.pathname.replace(/[^/]+$/, '')}${baseIndex.replace(/^\//, '')}`,
        ];
        let lastErr = null;
        for (const url of candidates) {
            try {
                const res = await fetch(url);
                if (res.ok) return res.json();
                lastErr = new Error(`HTTP ${res.status} for ${url}`);
            } catch (e) {
                lastErr = e;
            }
        }
        throw lastErr || new Error('failed to load index');
    };

    try {
        const data = await fetchIndex();
        const index = lunr(function () {
            this.ref('url');
            this.field('title');
            this.field('description');
            this.field('content');
            data.forEach((doc) => this.add(doc));
        });

        const searchNow = () => {
            const query = input.value.trim();
            if (!query) {
                resultsEl.innerHTML = '<p class="search-empty">キーワードを入力してください。</p>';
                return;
            }
            const hits = index.search(query);
            const mapped = hits
                .map((hit) => data.find((d) => d.url === hit.ref))
                .filter(Boolean);
            renderResults(mapped);
        };

        input.addEventListener('input', () => searchNow());
        input.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                searchNow();
            }
        });

        resultsEl.innerHTML = '<p class="search-empty">キーワードを入力してください。</p>';
    } catch (err) {
        console.error(err);
        resultsEl.innerHTML = '<p class="search-empty">インデックスの読み込みに失敗しました。</p>';
    }
});
