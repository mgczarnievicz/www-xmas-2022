---
title: "HTML"
date: "December 2022"
excerpt: "What is HTML, and his syntax"
cover_images: "/img/material/html.png"
---

# What is HTML?

-   HTML is short for `HyperText Markup Language`.
-   It is giving content on websites `meaning and structure`. You can imagine HTML as the skeleton or the most basic building block of the Web.

Let's analyze the word for more
clarification:

-   `Hypertext`: Refers to the ability of HTML to create links that link one webpage to another. (Either on a single website or in between different websites.) This is a fundamental aspect of the web and the idea behind the "world wide" interconnection.
-   `Markup Language`: Refers to a syntax that uses specific element to structure or format a document.

## Concepts

-   `HTML element`: every piece of content in a HTML document is placed inside of an HTML element
-   `HTML tags`: the elements are written in form of HTML tags, meaning surrounded by `<>` and
    `</>`
-   `HTML attributes`: some HTML elements need additional information in order to work properly. This information is given by HTML attributes
-   `local attributes`: There are attributes that are specific to some HTML elements, for example `src`, which only makes sense if a resource is supposed to be embedded into the webpage (e.g. images or videos)
-   `global attributes`: There are also attributes that can be added to any kind of element. (e.g. `class`, `id`, `style`, `hidden`)

#### The benefits of writing semantic HTML are:

-   `Accessibility`: Screenreaders can function much better with semantic HTML, which can help e.g. visually impaired users to navigate the webpage and have a better user experience
-   `SEO`: It's relevant for search engines to evaluate the importance and the context of the different parts of a web page
-   `Readability`: It's easier for other developers to understand your code. And also for yourself in the future!

# Semantic Markup.

The semantic markup help us organizing the code and having a better way of reading it.

## Text semantics

The main elements for writing are:
| Element | Use |
| ----------- | ----------- |
| `<h1>` `<h2>` `<h3>` `<h4>` `<h5>` `<h6>` | The `<h1>` to `<h6>` represent six levels of section headings. `<h1>` is the highest section level and `<h6>` is the lowest. |
| `<p>` | Represents a paragraph. Paragraphs can be any structural grouping of related content, such as images or form fields. |
| `<ol>` | Represents an ordered list of items — typically rendered as a numbered list. |
|`<ul>` | Represents an unordered list of items, typically rendered as a bulleted list. |
| `<li>`| The `<li>` element is used to represent an item in a list. It must be contained in a parent element: an ordered list (ol), an unordered list (ul), or a menu (menu). In menus and unordered lists, list items are usually displayed using bullet points. In ordered lists, they are usually displayed with an ascending counter on the left, such as a number or letter. |
|`<img>`| Embeds an image into the document.|

## Content sectioning

Content sectioning elements allow you to organize the document content into logical pieces.
| Element | Use |
| ----------- | ----------- |
| header | Used as a container for introductory content or set of navigation links. Usually contains heading elements (h1, h2, etc.) as well as a logo. |
| main | Represents the main content of the body of a document or application. |
| footer | Typically used as the footer info of a page, i.e. copyright, sitemap, contact, etc. |
| nav | The wrapper for your navigation menu. |
| section | Used for seperating different "sections" of a website. Note that you should not use a section tag if article, aside, or nav is more appropriate. |
| `<div>` | Is the generic container for flow content. It has no effect on the content or layout until styled in some way using CSS|

![Semantics](../img/material/semantics.png)

# Attributes.

To the semantic markup, we can add attributes usually used for styling. There are two types of attributes:

-   class: can be used on any HTML element and multiple element can have the same class.
-   id: is a **unique** identifier that is **one** element.

# More information:

[HTML Basics](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics)
