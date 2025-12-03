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
1. `src/articles/new_article_name/` をコピーして新しいフォルダを作成し、ファイル名を適宜変更します。
2. ファイル先頭のフロントマターを更新します。
   - `title`: 記事タイトル
   - `date`: `YYYY-MM-DD`
   - `displayDate`: `YYYY.MM.DD`
   - `permalink`: 公開したい URL パス（例: `articles/my-article/index.html`）
3. 本文は Markdown / HTML で記述可能です。画像は同じフォルダに置き、相対パスで参照します。
4. `src/_data/articles.js` にメタデータを1行追加するとトップページの最新記事と一覧に反映されます。

## 更新履歴の追加
- `src/_data/updates.js` に `{ date: 'YYYY.MM.DD', text: '内容' }` を追加します。

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
