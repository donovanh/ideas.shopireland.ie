'use strict';

const fs = require('fs');
const slugify = require('slugify');

function pad(n, width, z) {
  z = z || '0';
  n = n + '';
  return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
}

const title = process.argv[2];
const dt = new Date();
const today = `${dt.getFullYear()}-${pad(dt.getMonth() + 1, 2)}-${pad(dt.getDate(), 2)}`;
const path = `./posts/_${slugify(title.toLowerCase())}.md`;

const fileContent = `---
title: ${title}
description: A description that will show as subtitle and also on social sharing
date: ${today}
tags:
layout: layouts/post.njk
headerImage: staring-out-window.jpg
---

Content to go here

## Example Product layout

<section class="product">
	<div class="product-image">
		<a href="https://www.shopireland.ie/books/0241461871"><img src="https://m.media-amazon.com/images/I/41UZ+LOsbAL.jpg" alt="Mrs Hinch: The Little Book of Lists"></a>
	</div>
	<div class="product-details">
		<h2>Mrs Hinch: The Little Book of Lists</h2>
		<p><a href="https://www.shopireland.ie/books/0241461871">Find this on ShopIreland</a></p>
	</div>
</section>

## Example Multiple Products layout

<section class="products">
	<div class="product">
		<div class="product-image"><a href="URL"><img src="IMAGESRC" alt="TITLE"></a></div>
		<div class="product-details">
			<h3><a href="URL">TITLE</a></h3>
		</div>
	</div>
	<div class="product">
		<div class="product-image"><a href="URL"><img src="IMAGESRC" alt="TITLE"></a></div>
		<div class="product-details">
			<h3><a href="URL">TITLE</a></h3>
		</div>
	</div>
</section>
`;

if (fs.existsSync(path)) {
  console.log('A post with that name already exists')
} else {
  fs.writeFile(path, fileContent, function (err) {
    if (err) return console.log(err);
    console.log(`Writing ${path}`);
    console.log(`Remove the "_" from the file name to publish`);
  });
}

