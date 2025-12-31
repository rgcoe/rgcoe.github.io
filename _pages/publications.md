---
layout: page
permalink: /publications/
title: publications
description:
nav: true
nav_order: 4
---

<!-- _pages/publications.md -->

<!-- see also <a href='https://scholar.google.com/citations?user=i6ahrYgAAAAJ'>Google Scholar</a> -->

<!-- Bibsearch Feature -->

{% include bib_search.liquid %}

<div class="publications">

{% bibliography --query @*[status!=review && mine!=false] %}

</div>
