---
layout: default
title: 研究記事
permalink: /articles.html
---

## 研究記事一覧
<ul>
{% for post in site.posts %}
  <li>{{ post.date | date: "%Y.%m.%d" }} - <a href="{{ post.url }}">{{ post.title }}</a></li>
{% endfor %}
</ul>