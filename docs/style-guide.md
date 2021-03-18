---
id: style-guide
title: ESG Help Style Guide
sidebar_label: Style Guide
---

Write content using [GitHub-flavored Markdown GFM syntax](https://github.github.com/gfm/).

## Markdown Syntax

Below are samples when styling markdown-based ESG Help sites.

## Headers

```markdown
# H1 Header 1

## H2 Header 2

### H3 Header 3

#### H4 Header 4

##### H5 Header 5

###### H6 Header 6
```

# H1 - Use '\# for Headers

## H2 - Create the best documentation

### H3 - Create the best documentation

#### H4 - Create the best documentation

##### H5 - Create the best documentation

###### H6 - Create the best documentation

---

## Emphasis

```markdown
Emphasis, aka italics, with _asterisks_ or _underscores_.
```

Emphasis, aka italics, with _asterisks_ or _underscores_.

```markdown
Strong emphasis, aka bold, with **asterisks** or **underscores**.
```

Strong emphasis, aka bold, with **asterisks** or **underscores**.

```markdown
Combined emphasis with **asterisks and _underscores_**.
```

Combined emphasis with **asterisks and _underscores_**.

```markdown
Strikethrough uses two tildes. ~~Scratch this.~~
```

Strikethrough uses two tildes. ~~Scratch this.~~

---

## Lists

```markdown
1. First ordered list item
1. Another item
   - Unordered sub-list.
1. Actual numbers don't matter, just that it's a number
   1. Ordered sub-list
1. And another item.

- Unordered list can use asterisks

* Or minuses

- Or pluses
```

1. First ordered list item
1. Another item
   - Unordered sub-list.
1. Actual numbers don't matter, just that it's a number
   1. Ordered sub-list
1. And another item.

- Unordered list can use asterisks

* Or minuses

- Or pluses

---

## Links

```markdown
[I'm an inline-style link](https://www.google.com/)

[I'm an inline-style link with title](https://www.google.com/ "Google's Homepage")

[I'm a reference-style link][arbitrary case-insensitive reference text]

[You can use numbers for reference-style link definitions][1]
```

[I'm an inline-style link](https://www.google.com/)

[I'm an inline-style link with title](https://www.google.com/ "Google's Homepage")

[I'm a reference-style link][arbitrary case-insensitive reference text]

[You can use numbers for reference-style link definitions][1]

```markdown
Or leave it empty and use the [link text itself].

URLs and URLs in angle brackets will automatically get turned into links. http://www.example.com/ or <http://www.example.com/> and sometimes example.com (but not on GitHub, for example).
```

Or leave it empty and use the [link text itself].

URLs and URLs in angle brackets will automatically get turned into links. http://www.example.com/ or <http://www.example.com/> and sometimes example.com (but not on GitHub, for example).

---

## Screenshots

```markdown
Inline-style: ![alt text](https://esgglobal.com/wp-content/uploads/2020/12/ESG-Logo.svg "ESG Global")
```

Inline-style: ![alt text](https://esgglobal.com/wp-content/uploads/2020/12/ESG-Logo.svg "ESG Global")

```
HTML ![logo]: https://esgglobal.com/wp-content/uploads/2020/12/ESG-Logo.svg "ESG Global 2"
```

![logo]https://esgglobal.com/wp-content/uploads/2020/12/ESG-Logo.svg "ESG Global 2"

Images from any folder can be used by providing path to file. Path should be relative to markdown file.

```markdown
[img](../static/img/logo.svg)
```

```

```

[img](../static/img/logo.svg)

---

## Code

```javascript
var s = "JavaScript syntax highlighting";
alert(s);
```

```python
s = "Python syntax highlighting"
print(s)
```

```
No language indicated, so no syntax highlighting.
But let's throw in a <b>tag</b>.
```

```js {2}
function highlightMe() {
  console.log("This line can be highlighted!");
}
```

---

## Tables

Colons can be used to align columns.

```Markdown
| Tables        |      Are      |  Cool |
| ------------- | :-----------: | ----: |
| col 3 is      | right-aligned | $1600 |
| col 2 is      |   centered    |   $12 |
| zebra stripes |   are neat    |    $1 |
```

| Tables        |      Are      |  Cool |
| ------------- | :-----------: | ----: |
| col 3 is      | right-aligned | $1600 |
| col 2 is      |   centered    |   $12 |
| zebra stripes |   are neat    |    $1 |

There must be at least 3 dashes separating each header cell. The outer pipes (|) are optional, and you don't need to make the raw Markdown line up prettily. You can also use inline Markdown.

| Markdown | Less      | Pretty     |
| -------- | --------- | ---------- |
| _Still_  | `renders` | **nicely** |
| 1        | 2         | 3          |

---

## Blockquotes

> Blockquotes are very handy in email to emulate reply text. This line is part of the same quote.

Quote break.

> This is a very long line that will still be quoted properly when it wraps. Oh boy let's keep writing to make sure this is long enough to actually wrap for everyone. Oh, you can _put_ **Markdown** into a blockquote.

---

## Inline HTML

<dl>
  <dt>Definition list</dt>
  <dd>Is something people use sometimes.</dd>

  <dt>Markdown in HTML</dt>
  <dd>Does *not* work **very** well. Use HTML <em>tags</em>.</dd>
</dl>

---

## Line Breaks

Here's a line for us to start with.

This line is separated from the one above by two newlines, so it will be a _separate paragraph_.

This line is also a separate paragraph, but... This line is only separated by a single newline, so it's a separate line in the _same paragraph_.

---

## Admonitions

```markdown
:::note

This is a note

:::
```

:::note

This is a note

:::

```markdown
:::tip

This is a tip

:::
```

:::tip

This is a tip

:::

```markdown
:::important

This is important

:::
```

:::important

This is important

:::

```markdown
:::caution

This is a caution

:::
```

:::caution

This is a caution

:::

```markdown
:::warning

This is a warning

:::
```

:::warning

This is a warning

:::

```

```
