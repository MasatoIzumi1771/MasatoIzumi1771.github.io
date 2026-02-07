---
layout: layouts/article.njk
title: 記事タイトルをここに入力
date: 2025-01-01
displayDate: 2025.01.01
permalink: false
# ↑ 新規記事作成時は以下のように変更：
# permalink: articles/記事のURL/index.html
tags:
  - タグ1
  - タグ2
# ↑ 新規記事作成時は以下を追加：
# tags:
#   - articles  ← これを追加すると記事一覧に表示される
#   - タグ1
#   - タグ2
description: 記事の説明文をここに入力（検索結果やカード表示に使用されます）
update: 記事タイトル を追加しました。
# useMath: true  # 数式を使う場合はコメントを外す
---

ここに記事の導入文を書きます。この記事では〇〇について解説します。

### セクション1のタイトル

セクション1の内容をここに書きます。

### セクション2のタイトル

セクション2の内容をここに書きます。

#### サブセクション

h4タグ（`####`）を使うと、目次でインデントされて表示されます。

### コードの書き方

```javascript
// コードブロックの例
function example() {
    console.log("Hello, World!");
}
```

### リストの書き方

- リスト項目1
- リスト項目2
- リスト項目3

### 画像の挿入

![画像の説明](./image.png)

### リンクの書き方

[リンクテキスト](https://example.com)

### まとめ

記事のまとめをここに書きます。

<!--
使い方：
1. このファイルをコピーして新しいフォルダを作成
   例: src/articles/my-new-article/index.md

2. フロントマター（---で囲まれた部分）を編集
   - title: 記事タイトル
   - date: 公開日（YYYY-MM-DD形式）
   - displayDate: 表示用日付（YYYY.MM.DD形式）
   - permalink: articles/記事のURL/index.html （falseから変更）
   - tags: タグ（articlesを追加すると記事一覧に表示）
   - description: 記事の説明
   - update: 更新履歴に表示されるテキスト

3. 記事本文をMarkdownで編集

Markdown記法チートシート：
- 見出し: # h1, ## h2, ### h3, #### h4
- 太字: **テキスト**
- 斜体: *テキスト*
- リンク: [テキスト](URL)
- 画像: ![alt](./image.png)
- コード: `インラインコード`
- コードブロック: ```言語名 ... ```
- リスト: - 項目
- 番号付きリスト: 1. 項目
- 引用: > テキスト
- 水平線: ---
-->
