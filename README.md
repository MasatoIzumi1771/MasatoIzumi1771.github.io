# Masato Izumi ポートフォリオ（運用ガイド）

## ディレクトリ構成
- `src/` … 11ty用ソース。`_includes` に共通レイアウト、`_data` にナビや記事リストなどのデータを配置。
- `public/` … `npm run build` の出力（デプロイ用）。Git管理対象外。
- `css/`, `js/`, `images/`, `articles/` は 11ty でパススルーされる。

## 開発・プレビュー
- `npm install`（初回のみ）
- `npm run dev` でローカルサーバ起動（ホットリロード）
- ビルドのみは `npm run build`

## 品質チェック・整形
- `npm run lint` … HTML（html-validate）とCSS（Stylelint）の簡易検証
- `npm run format` … PrettierでHTML/Nunjucks/CSS/JSを整形

## 編集のヒント
- ナビやサイト名は `src/_data/nav.json` と `src/_data/site.json` で一括管理。
- トップページの経歴・最新記事・更新履歴は `src/_data/home.js`、コマンド集は `src/_data/commands.js`、研究実績は `src/_data/achievements.js`、スキルや資格は `src/_data/skills.js`、その他の記事は `src/_data/otherArticles.js` を編集。
- 画像は `src/images/` に置き、`loading=\"lazy\"` を付けるとパフォーマンスが向上。
- KaTeXを使う記事を追加する場合は、該当ページにのみスクリプトを読み込むように調整してください（`js/main.js`側はレンダラー存在チェック済み）。
