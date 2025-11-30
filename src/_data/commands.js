module.exports = [
  {
    title: 'Docker / Docker Compose',
    items: [
      {
        name: 'Docker Composeを起動・停止',
        code: `docker compose up -d       # バックグラウンドで起動
docker compose down        # 停止・コンテナ削除
docker compose stop        # 停止のみ`,
        description: 'Docker Composeで定義されたサービスを起動・停止します。'
      },
      {
        name: 'コンテナ内のシェルに入る',
        code: 'docker exec -it [コンテナ名またはID] bash # または sh',
        description: '実行中のコンテナ内でシェル操作を行います。'
      },
      {
        name: 'ビルドキャッシュを使わずにDockerイメージを再構築',
        code: 'docker build --no-cache .',
        description: 'Dockerfileからイメージを再構築する際に、キャッシュを使わずに行います。'
      }
    ]
  },
  {
    title: 'Git コマンド',
    items: [
      {
        name: '最新のリモートブランチを取り込む',
        code: 'git pull origin [ブランチ名]',
        description: 'リモートリポジトリの変更をローカルに取り込みます。'
      },
      {
        name: '変更をステージングエリアに追加',
        code: `git add .                  # 全ての変更を追加
git add [ファイル名]       # 特定のファイルを追加`,
        description: 'コミット対象のファイルを指定します。'
      },
      {
        name: 'コミットメッセージの修正',
        code: 'git commit --amend --no-edit',
        description: '直前のコミットメッセージを修正します。`--no-edit`でメッセージをそのままにします。'
      }
    ]
  },
  {
    title: 'Python/pip 環境管理',
    items: [
      {
        name: '仮想環境の作成と有効化',
        code: `python -m venv .venv
source .venv/bin/activate  # macOS/Linux
.venv\\Scripts\\activate     # Windows PowerShell`,
        description: 'プロジェクトごとに依存関係を分離するための仮想環境を作成・有効化します。'
      },
      {
        name: 'インストールされているパッケージ一覧',
        code: `pip list
pip freeze > requirements.txt`,
        description: 'インストールされているパッケージを確認し、`requirements.txt`に書き出します。'
      }
    ]
  },
  {
    title: 'Poetry 環境管理',
    items: [
      {
        name: '新しいプロジェクトの作成',
        code: `poetry new my-project-name
cd my-project-name`,
        description: 'Poetryで新しいPythonプロジェクトを初期化します。`pyproject.toml`と基本構造が作成されます。'
      },
      {
        name: '依存関係の追加',
        code: `poetry add requests
poetry add "numpy@^1.20"  # 特定のバージョン範囲を指定
poetry add --group dev black # 開発用依存関係`,
        description: 'パッケージをプロジェクトに追加し、`pyproject.toml`と`poetry.lock`を更新します。'
      },
      {
        name: '依存関係のインストール',
        code: 'poetry install',
        description: '`pyproject.toml`に基づき依存関係をインストールします。`poetry.lock`があればそれを使用します。'
      },
      {
        name: '仮想環境のシェルに入る',
        code: 'poetry shell',
        description: 'Poetryが管理するプロジェクトの仮想環境をアクティベートします。'
      },
      {
        name: 'コマンドを実行する',
        code: `poetry run python main.py
poetry run pytest`,
        description: '仮想環境をアクティベートせずに、その中でコマンドを実行します。'
      },
      {
        name: '依存関係の更新',
        code: `poetry update
poetry update requests  # 特定のパッケージのみ更新`,
        description: '依存関係を最新バージョンに更新し、`poetry.lock`を更新します。'
      },
      {
        name: '依存関係のエクスポート',
        code: 'poetry export -f requirements.txt --output requirements.txt --without-hashes',
        description: '`requirements.txt`形式で依存関係をエクスポートし、他のツール（Dockerなど）で利用できるようにします。'
      }
    ]
  }
];
