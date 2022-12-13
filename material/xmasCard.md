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

# Design our card.

We want our card to have:

1. Front: Where we are going to put a photo
2. Back: where we will write our whishes.

![Semantics](../img/material/cardExample.png)

We have three classes predefined:

-   `.card`
-   `.front`
-   `.back`

So we will want our main tag, to have the class `.card`. Then inside of it, we will want 2 different sections, one with the class `.front` and the other `.back`.

The section with the class `.front` is going to be our front, so inside this section we should add what we want to be in the front of our card. Some title, an image.

The section with the class `.back` is going to be the back of our card. Here we want to put some nice text for our beloveds.

Up until know, your code should look like:

```html
<main class="card">
    <section class="front">
        <!-- Inside here we want to add our front of the card  -->
    </section>
    <section class="back">
        <!-- Inside here we want to add our back of the card. -->
    </section>
</main>
```

# Adding some elements.

## Front section.

In here we want to add a title, lets do it as an h1 tag.

Example:

```html
<section class="front">
    <h1>Happy Holidays!</h1>
</section>
```

## Back section.

In here we want to write a message. This one we can, for example divide in three

1. The greeting
2. The content
3. The closing remarks and signature.

The greeting, we want it to have more importance than the context, so for this we can use an h2 tag meanwhile for the content and closing we can use different p tag.

Example:

```html
<section class="back">
    <h2>Cheers to Mary</h2>
    <p>Lorem Impsum</p>
    <p>Cheers, XOXO</p>
</section>
```

## Styling our front and back elements.

The simplest way to style is adding a class
