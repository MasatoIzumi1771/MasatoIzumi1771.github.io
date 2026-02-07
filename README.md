# Masato Izumi Portfolio

このリポジトリは静的サイトジェネレーター **Eleventy**（11ty）で構築するポートフォリオサイトです。`src/` にソースを置き、`docs/` にビルド成果物を出力します。GitHub Pages の公開先を `docs/` に設定してください。

## 主な機能

- **ダークモード**: ヘッダーの🌙ボタンで切り替え、設定はブラウザに保存
- **目次自動生成**: 記事ページでh3/h4見出しから自動生成
- **読了時間表示**: 記事の文字数から自動計算
- **コードコピーボタン**: コードブロックにホバーでコピーボタン表示
- **スムーズスクロール**: ページ内リンクがアニメーション付きでスクロール
- **トップへ戻るボタン**: スクロール時に右下に固定表示
- **フェードインアニメーション**: スクロール時に要素がフェードイン
- **SEO対応**: JSON-LD構造化データ、サイトマップ自動生成、OGP対応
- **KaTeX数式対応**: 記事ごとに有効/無効を切り替え可能
- **全文検索**: Lunr.jsによるクライアントサイド検索

## 前提
- Node.js 18 以上
- 依存: `@11ty/eleventy`, `prettier`, `stylelint`, `clean-css-cli`, `terser`

## セットアップ
```bash
npm install
```

## コマンド一覧
```bash
npm run dev       # ローカル開発（localhost:8080、ホットリロード）
npm run build     # 本番ビルド（CSS/JS最小化含む）
npm run build:dev # ビルドのみ（最小化なし）
npm run format    # Prettierでフォーマット
npm run lint:css  # Stylelintでチェック
```

## ディレクトリ構成
```
src/
  _data/            # サイト共通データ
    site.json       # サイト設定（タイトル、URL、著者）
    nav.json        # ナビゲーション定義
  _includes/layouts/
    base.njk        # 全ページ共通レイアウト
    article.njk     # 記事ページ用レイアウト
  articles/         # 記事本文・画像
    _template/      # 新規記事用テンプレート（ビルド対象外）
  css/ , js/ , images/
  *.njk             # 各ページ本体
docs/               # ビルド出力（GitHub Pages公開用）
```

## 新しい記事を追加する

### テンプレートを使う方法（推奨）
1. `src/articles/_template/` フォルダをコピー
2. フォルダ名を記事URLに合わせて変更（例: `my-new-article`）
3. ファイル名も変更（例: `my-new-article.html`）
4. フロントマターを編集：
   ```yaml
   ---
   layout: layouts/article.njk
   title: 記事タイトル
   date: 2025-01-01
   displayDate: 2025.01.01
   permalink: articles/my-new-article/index.html  # falseから変更
   tags:
     - articles    # これを追加すると記事一覧に表示
     - カテゴリ名
   description: 記事の要約
   update: 〇〇の記事を追加しました。
   # useMath: true  # 数式を使う場合はコメントを外す
   ---
   ```
5. 記事本文を編集
6. `npm run build` でビルド

### フロントマターの項目

| 項目 | 必須 | 説明 |
|------|------|------|
| `layout` | ○ | `layouts/article.njk` |
| `title` | ○ | 記事タイトル |
| `date` | ○ | 公開日（YYYY-MM-DD） |
| `displayDate` | ○ | 表示用日付（YYYY.MM.DD） |
| `permalink` | ○ | 公開URL |
| `tags` | ○ | `articles`を含めると記事一覧に表示 |
| `description` | ○ | 記事の要約（検索・カード表示用） |
| `update` | △ | 更新履歴に表示するテキスト |
| `useMath` | - | `true`でKaTeX数式を有効化 |

### 画像の追加
- 記事と同じフォルダに画像を配置
- HTML: `<img src="./image.png" alt="説明">`
- Markdown: `![説明](./image.png)`
- 自動的にlazy loadingが適用されます

## 新しいページを追加する
1. `src/` に `newpage.njk` を作成
   ```njk
   ---
   layout: layouts/base.njk
   title: 新しいページ
   description: 説明文
   permalink: newpage.html
   ---
   <section class="section">ページの中身</section>
   ```
2. ナビに追加する場合は `src/_data/nav.json` を編集

## デプロイ
```bash
npm run build
git add .
git commit -m "Update site"
git push
```
GitHub Pages設定で `docs/` を公開対象に設定してください。

## カスタマイズ

### ダークモードの色を変更
`src/css/style.css` の `:root` と `[data-theme="dark"]` のCSS変数を編集

### サイト情報を変更
`src/_data/site.json` を編集：
```json
{
  "title": "サイトタイトル",
  "description": "サイトの説明",
  "author": "著者名",
  "url": "https://example.github.io"
}
```

### ナビゲーションを変更
`src/_data/nav.json` を編集
