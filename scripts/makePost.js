"use strict";

const fs = require("fs");
const slugify = require("slugify");

function pad(n, width, z) {
  z = z || "0";
  n = n + "";
  return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
}

const title = process.argv[2];
const dt = new Date();
const today = `${dt.getFullYear()}-${pad(dt.getMonth() + 1, 2)}-${pad(
  dt.getDate(),
  2
)}`;
const path = `./posts/_${slugify(title.toLowerCase())}.md`;

function titleCase(str) {
  return str
    .toLowerCase()
    .split(" ")
    .map(function (word) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");
}

const fileContent = `---
title: ${titleCase(title)}
description: A description that will show as subtitle and also on social sharing
date: ${today}
tags:
layout: layouts/post.njk
headerImage: staring-out-window.jpg
---

Content to go here

## Example Product layout

{%
	include "product.html"
    section: ""
    asin: ""
    title: ""
    creator: ""
    description: ""
    image: ""
%}

TODO: Example multiple products
`;

if (fs.existsSync(path)) {
  console.log("A post with that name already exists");
} else {
  fs.writeFile(path, fileContent, function (err) {
    if (err) return console.log(err);
    console.log(`Writing ${path}`);
    console.log(`Remove the "_" from the file name to publish`);
  });
}
