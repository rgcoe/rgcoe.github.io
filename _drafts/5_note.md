---
layout: page
title: personal website
description: jekyll, al-folio, markdown
img: assets/img/1.jpg
importance: 1
category: work
---

This website is based on the [al-folio template](https://github.com/alshedivat/al-folio), which I have found to be a great tool for my needs.
For me as a mostly naïve web developer, the way I can use more familiar tools like BibTex and markdown makes it a great fit.
Al-folio has a lot of great documentation, so I'll focus here the on parts that took me a bit more digging along the way.

## Jekyll-Scholar

- Don't leave the `year` field empty

## Grid layout

https://getbootstrap.com/docs/4.4/layout/grid/

## Dev container

This site was my first experience using a _Development Container_.
A dev container allows you to instantly observe how your changes will (or will not) compile on target hardware.
In this case, that meant seeing how the site would render without needing to push changes to GitHub where the actual build happens.
This whole workflow functioned out of the box for me thanks to the folks who developed Al-folio, except I did wind of breaking it at some point.
A couple things that helped me get the dev container working again:
