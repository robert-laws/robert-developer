---
title: Home Page
date: Created
layout: base
tags:
  - home
  - welcome
  - info
---

# {{ title }}

**Date**: {{page.date.toUTCString()}}

**Author**: {{ pkg.author }}

<ul>
  {% for item in tags %}
  <li>{{ item }}</li>
  {% endfor %}
</ul>

welcome to the website. Enjoy your time here tomorrow.