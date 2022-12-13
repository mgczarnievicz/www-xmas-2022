---
title: "X-mas Card"
date: "December 2022"
excerpt: "Steps to build your own Xmas card"
cover_images: "/img/material/js.png"
---

# Steps to create you own X-mas Card

To build your own card, we are going to start with the template code. To access it, go to home -> Material -> Xmas Card.
This will open a new windows/ tab.

# Code Structure.
```
.
├── README.md 
├── css // all our stylings go in this folder
│   └── style.css // preferably this file
├── images // the images we're going to pick from, unless you want to upload your own. that image should also go here.
│   ├── bokeh-ornament.jpg
│   ├── bokeh-tree.jpg
│   ├── candy-cane.jpg
│   ├── candy-heart.jpg
│   ├── christmas-lights.jpg
│   ├── cones-and-cookies.jpg
│   ├── doorway.jpg
│   ├── mouse-in-socks.jpg
│   ├── nutcracker.jpg
│   ├── presents-under-tree.jpg
│   ├── snowy-cones.jpg
│   ├── sugar-cookies.jpg
│   ├── tree-decorations.jpg
│   └── white-tree-decorations.jpg
├── index.html // our landing page
├── js // everything that gives our page interactivity
│   └── script.js // this file will import some functions and
│   // ignore all of these
├── package-lock.json
├── package.json
├── sandbox.config.json
└── .there-be-dragons
```

# Let's get started!

## Design our card.
We want our card to have:
1. Front: Where we are going to put a photo
2. Back: where we will write our whishes.

## Add Image.


We have three classes predefined:
- 