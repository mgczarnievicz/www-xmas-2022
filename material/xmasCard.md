---
title: "X-mas Card"
date: "December 2022"
excerpt: "Steps to build your own Xmas card"
cover_images: "/img/material/js.png"
---

# Steps to create you own X-mas Card

To build your own card, we are going to start with the template code. To access it, go to home -> Material -> Xmas Card.
This will open a new window / tab.

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

1. Front: This is where we are going to put a photo
2. Back: This is where we will write our whishes

![Semantics](../img/material/cardExample.png)

We have three classes predefined:

-   `.card`
-   `.front`
-   `.back`

So we will want our main tag, to have the class `.card`. Then inside of it, we will want 2 different sections, one with the class `.front` and the other `.back`.

The section with the class `.front` is going to be our front, so inside this section we should add what we want to be in the front of our card. Some title, an image.

The section with the class `.back` is going to be the back of our card. Here we want to put some nice text for our loved ones.

Up until now, your code should look like:

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

Nothing should change due to, we haven't import the pre made classes.

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

We want the greeting to have more importance than the context, so for this we can use an h2 tag whereas for the content and closing we can use a p tag.

Example:

```html
<section class="back">
    <h2>Dear Mary</h2>
    <p>
        Wishing you love, light, and laughter for Christmas and the New Year
        too!
    </p>
    <p>Cheers, XOXO</p>
</section>
```

## Styling our front and back elements.

The simplest way to style different parts of the page is adding a class to each element or styling by section.

Example:

### By section/ block.

-   We are not adding any more classes to the elements, we are going to add a property to the element that contains what we want to style. Be aware that ALL elements in this block will change.

```css
.card {
    font-family: "Caveat";
}
```

### Adding new classes to each element.

-   In our HTML

```html
<main class="card">
    <section class="front">
        <h1 class="headline">Happy Holidays!</h1>
    </section>
    <section class="back">
        <
        <h2>Dear Mary</h2>
        <p>
            Wishing you love, light, and laughter for Christmas and the New Year
            too!
        </p>
        <p>Cheers, XOXO</p>
    </section>
</main>
```

-   In our Css

```css
.headline {
    font-family: "Mountains of Christmas";
    color: maroon;
}
```

### Importing an css file.

To add the pre defined classes, we need to import the file where they are defined.
This should be our first line in our CSS file.

```css
@import url("/.there-be-dragons/global.css");
```

Now we don't see any more the back of our card, but that is what we want.

## Adding funtionality

Now we see the front of our card, but when we click nothing happens.
The functionality of the `click` we need to add it in a JS file.
Because this requires more knowledge we pre define that function. All we need to do is to import it and execute it.

### Steps:

1. Let's go to our `script.js` in js folder
2. We must import the function so we can use it. From where? From the file `sketch.js`

```js
import { createCardFlip } from "/.there-be-dragons/sketch.js";
```

3. We must invoque the function so this runs.

```js
createCardFlip();
```

Now lets see our card. Let's click in it and see how it flips.
Now we are able to see the back!

## Adding a nice image.

If we want to add an image in the front we need to use the tag `<img>`. This tag requires a `src`, this is the name of the file and where it is located.
Another attribute that is required is the `alt` for accessibility!, this is the "description" that is used for screen readers.

Because we want the image to cover our front, we prepare one class `.postcardimage` that we should add to our image.

Our code should look like this:

```html
<img
    class="postcardimage"
    src="/images/christmas-lights.jpg"
    alt="christmas postcard image"
/>
```

Now our front has a background Image.
Our headline, doesn't look good, so let style some more.

Let's create a new class in our CSS.

```css
.contrasted {
    text-shadow: 5px 4px black;
}
```

Now let's add this class to our headline too. How do we do this, in our HTML where we add headline, we add a space and add contrasted.

Your code should look like:

```html
<section class="front">
    <h1 class="headline contrasted">Happy Christmas!</h1>
    <img
        class="postcardimage"
        src="/images/christmas-lights.jpg"
        alt="christmas tree"
    />
</section>
```

You can also add this style to headline instead of creating a new class.

## Adding snow.

To add the snow falling, we need to:

1. Create a new HTML element in the end of our font section. This should have the class `.snowfall`

```html
<section class="front">
    <h1 class="headline contrasted">Happy Christmas!</h1>
    <img
        class="postcardimage"
        src="/images/christmas-lights.jpg"
        alt="christmas tree"
    />
    <div class="snowfall"></div>
</section>
```

2. We need to import a new function in our JS file call `createSnowfall`

```js
import { createCardFlip, createSnowfall } from "/.there-be-dragons/sketch.js";

createCardFlip();
createSnowfall();
```

Now, our card is finish! We can improve it with some more styling.
