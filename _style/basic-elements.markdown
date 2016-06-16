---
title: Basic elements
date: 2016-06-13 00:00:00 -04:00
position: 1
---

Siteleaf uses [GitHub Flavored Markdown](https://guides.github.com/features/mastering-markdown/). Basic elements include:

## h2. Heading 2

### h3. Heading 3

#### h4. Heading 4

##### h5. Heading 5

---

This is a paragraph with a horizontal rule above it.

A [link](http://example.org) here [^1].

[^1]: A footnote there.

Inline elements include **bold**, *italic*, ~~strikethrough~~, `code`.

``` html
<em>This</em> is a code block with syntax highlighting.
```

> This is a blockquote!

- Unordered list item
- Unordered list item
- Unordered list item

1. Ordered list item
2. Ordered list item
3. Ordered list item

| Table heading | Table heading | Table heading |
| ------------- | ------------- | ------------- |
| Table cell    | Table cell    | Table cell    |
| Table cell    | Table cell    | Table cell    |
| Table cell    | Table cell    | Table cell    |
| Table cell    | Table cell    | Table cell    |

### How to use

{% highlight markdown %}
{% raw %}
## h2. Heading 2

### h3. Heading 3

#### h4. Heading 4

##### h5. Heading 5

---

This is a paragraph with a horizontal rule above it.

A [link](http://example.org) here [^1].

[^1]: A footnote there.

Inline elements include **bold**, *italic*, ~~strikethrough~~, `code`.

``` html
<em>This</em> is a code block with syntax highlighting.
```

> This is a blockquote!

- Unordered list item
- Unordered list item
- Unordered list item

1. Ordered list item
2. Ordered list item
3. Ordered list item

| Table heading | Table heading | Table heading |
| ------------- | ------------- | ------------- |
| Table cell    | Table cell    | Table cell    |
| Table cell    | Table cell    | Table cell    |
| Table cell    | Table cell    | Table cell    |
| Table cell    | Table cell    | Table cell    |
{% endraw %}
{% endhighlight %}
