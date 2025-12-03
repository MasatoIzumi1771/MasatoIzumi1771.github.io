const articles = [
    {
        title: '技術メモ：BGE-M3の技術解説メモ',
        date: '2025-09-20',
        displayDate: '2025.09.20',
        description: 'BGE-M3のアーキテクチャと学習戦略について包括的にまとめたものです。',
        url: '/articles/bge-m3/bge-m3.html',
    },
    {
        title: '技術メモ：LightRAGとHNSWの技術解説メモ',
        date: '2025-08-13',
        displayDate: '2025.08.13',
        description: 'LightRAGとHNSWの技術的な詳細について解説します。',
        url: '/articles/LightRAG/LightRAG.html',
    },
    {
        title: '技術メモ：Transformerの位置符号（Positional Encoding）について',
        date: '2025-08-13',
        displayDate: '2025.08.13',
        description: 'transformerを理解するにあたり、位置符号の重要性とその計算方法について詳しく解説します。',
        url: '/articles/transformer-positional/transformer-positional.html',
    },
    {
        title: 'Docker + GitLabで出る「invalid spec: :/tmp/ssh-agent.sock」エラーの原因と解決法',
        date: '2025-05-29',
        displayDate: '2025.05.29',
        description: 'GitLabでdockerを使おうとすると発生するエラーについて',
        url: '/articles/Gitlab-ssh-error/Gitlab-ssh-error.html',
    },
    {
        title: 'Docker + Poetryで始めるPython開発環境構築',
        date: '2025-05-28',
        displayDate: '2025.05.28',
        description: 'Docker + Poetry環境構築をしてみました。',
        url: '/articles/docler-poetry/docker-poetry.html',
    },
    {
        title: 'ホームページをリニューアルしました！',
        date: '2025-05-21',
        displayDate: '2025.05.21',
        description: 'この度、ポートフォリオサイトのデザインと構成を全面的にリニューアルいたしました。より見やすく、より分かりやすい情報提供を目指しました。',
        url: '/articles/renewal/renewal.html',
    },
    {
        title: 'このHPについて',
        date: '2025-05-21',
        displayDate: '2025.05.21',
        description: '本ホームページの目的や構成、そして今後の更新方針についてご紹介します。',
        url: '/articles/about_this_hp/about_this_hp.html',
    },
];

module.exports = articles.sort((a, b) => new Date(b.date) - new Date(a.date));
