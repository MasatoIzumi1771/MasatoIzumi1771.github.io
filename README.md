# Masato Izumi Portfolio

このリポジトリは静的サイトジェネレーター **Eleventy**（11ty）で構築するポートフォリオサイトです。`src/` にソースを置き、`docs/` にビルド成果物を出力します。GitHub Pages の公開先を `docs/` に設定してください。

## 前提
- Node.js 18 以上（npm が無い場合はインストールしてください）
- 依存: `@11ty/eleventy`, `prettier`, `stylelint`

## セットアップ
```bash
npm install
```

## ローカルプレビュー
```bash
npm run dev
```
- `http://localhost:8080` で確認できます。
- `src/css` / `src/js` / `src/images` も監視します。

## ビルド
```bash
npm run build
```
- `docs/` に静的ファイルを生成します。
- GitHub Pages は `docs/` を公開対象に設定してください。

## フォーマット / Lint
```bash
npm run format   # Prettier
npm run lint:css # Stylelint
```

## ディレクトリ構成
```
src/
  _data/            # サイト共通データ
    articles.js     # 記事メタデータ（タイトル・日付・URL・説明）
    nav.json        # ナビゲーション定義
    updates.js      # 更新履歴
  _includes/layouts/
    base.njk        # 全ページ共通レイアウト（ヘッダー/フッター）
    article.njk     # 記事ページ用レイアウト（KaTeX対応）
  articles/         # 記事本文・画像
  css/ , js/ , images/
  *.njk             # 各ページ本体（index.njk など）
```

## 新しい記事を追加する
### 共通（HTML/Markdown 共通）
1. 記事用フォルダを作成します（例: `src/articles/my-article/`）。
2. 画像は同じフォルダに保存し、相対パスで参照します（例: `./image.png`）。
3. 以下の項目をフロントマターに必ず記載します（HTMLでもMarkdownでも同じ）:
   - `layout: layouts/article.njk`
   - `title`: 記事タイトル
   - `date`: `YYYY-MM-DD`
   - `displayDate`: `YYYY.MM.DD`（表示用）
   - `permalink`: 公開したいURL（例: `articles/my-article/index.html`）
   - `tags`: 少なくとも `articles` を含める（例: `- articles`）
   - `description`: 記事の要約
   - `update`: 更新履歴に表示する文面（例: `〇〇の記事を追加しました。`）

### Markdown で追加する場合（推奨）
1. フォルダ直下に `index.md` を作成し、フロントマターを書く：
   ```md
   ---
   layout: layouts/article.njk
   title: 新しい記事タイトル
   date: 2025-10-01
   displayDate: 2025.10.01
   permalink: articles/my-article/index.html
   tags:
     - articles
     - カテゴリ例
   description: 記事の要約を書く
   update: 新しい記事を追加しました。
   ---
   # 見出し
   本文をMarkdownで記述します。

   ```bash
   echo "コードブロックもOK"
   ```
   ```
2. 画像を同じフォルダに置き、`![alt](./image.png)` のように参照します。
3. `npm run build` で `docs/` に生成し、表示を確認します。

### HTML で追加する場合
1. フォルダ直下に `index.html` を作成し、フロントマターを書く：
   ```html
   ---
   layout: layouts/article.njk
   title: 新しい記事タイトル
   date: 2025-10-01
   displayDate: 2025.10.01
   permalink: articles/my-article/index.html
   tags:
     - articles
     - カテゴリ例
   description: 記事の要約を書く
   update: 新しい記事を追加しました。
   ---
   <h2>見出し</h2>
   <p>本文をHTMLで記述します。</p>
   <pre><code class="language-bash">echo "コードもOK"</code></pre>
   <img src="./image.png" alt="説明">
   ```
2. 画像は同じフォルダに置き、`./image.png` で参照します。
3. `npm run build` で `docs/` を生成し、表示を確認します。

### 更新履歴・一覧への反映
- 記事に `tags: [articles, ...]` を付け、フロントマターを正しく書けば、トップページの「更新履歴」「最新記事」、記事一覧に自動反映されます。
- `update` フィールドの文面がそのまま更新履歴に出ます。

## 新しいページを追加する
1. `src/` に `newpage.njk` を追加し、以下のようにフロントマターを記述します。
   ```njk
   ---
   layout: layouts/base.njk
   title: 新しいページ
   description: 説明文
   permalink: newpage.html
   ---
   <section class="section">ページの中身</section>
   ```
2. ナビゲーションに載せたい場合は `src/_data/nav.json` に `{"label": "名前", "url": "/newpage.html"}` を追加します。

## デプロイ（例）
1. `npm run build`
2. `docs/` をコミットして `main` ブランチに push
3. GitHub Pages の設定で `Build from a GitHub Actions workflow` もしくは `Deploy from a branch: /docs` を選択

## 既知の改善ポイント
- 依存インストール用に Node.js が必要です（現在ローカルに npm が無い場合は先にインストールしてください）。
- `docs/` はビルド後に生成されるため、必要に応じてコミットしてください。
