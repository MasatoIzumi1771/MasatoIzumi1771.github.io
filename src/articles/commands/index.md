---
layout: layouts/article.njk
title: よく使うコマンド集
date: 2025-09-30
displayDate: 2025.09.30
permalink: articles/commands/index.html
tags:
  - articles
  - コマンド
  - 開発
description: DockerやGitでよく使うコマンドを自分用メモとしてまとめました。
update: よく使うコマンド集を記事として追加しました。
---
ここでは開発や環境構築で頻繁に使うコマンドをカテゴリ別にまとめています。必要に応じて随時追記します。

## Docker / Docker Compose
- Docker Composeを起動・停止

```bash
docker compose up -d       # バックグラウンドで起動
docker compose down        # 停止・コンテナ削除
docker compose stop        # 停止のみ
```

- コンテナ内のシェルに入る

```bash
docker exec -it [コンテナ名またはID] bash # または sh
```

- ビルドキャッシュを使わずにイメージを再構築

```bash
docker build --no-cache .
```

## Git
- 最新のリモートブランチを取り込む

```bash
git pull origin [ブランチ名]
```

- 変更をステージングに追加

```bash
git add .            # すべて追加
git add [ファイル名] # 指定ファイルのみ
```

## 使い方メモ
- 新しいコマンドを見つけたらこのページに追記します。
- よく忘れるオプションはコメントとして併記しておくと後で便利です。
