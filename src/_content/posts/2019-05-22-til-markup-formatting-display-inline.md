---
title: "TIL: Markup formatting can heavily influence layout of inline elements"
summary: Watch out for inline-block and inline elements.
date: 2019-05-22
updated: 2019-05-22
series: today-i-learned
tags:
  - markup
  - formatting
  - compression
  - inline
  - inline-block
---
Until now I was aware of the fact that the way you format `display: inline-block;` elements in your markup has a direct impact on how the elements are being rendered by the browser. Please read that again: *markup formatting influences the layout of elements.*

So having this CSS

```css
li {
  display: inline-block;
}
```

and applying it to the following differently formatted list elements

```html
<!-- nicely formatted -->
<ul>
  <li>one</li>
  <li>two</li>
</ul>

<!-- compressed -->
<ul>
  <li>one</li><li>two</li>
</ul>
```

yields different rendering results. The first two list items have a space inbetween them, the second two list items do not and are glued together.

On a side note: I remember that when I first discovered this several years ago I was pretty astonished about this fact. Since then I’m always advocating to be mindful of this behavior and to use `inline-block` only if you really know what you are doing.

Turns out that this is the same case with `display: inline;` elements. [Check out this pen to see what I mean.](https://codepen.io/isellsoap/pen/YbEMoj)

The specific problem I encountered with `display: inline;` together with a colleaugue the other day at work was a bit more obscure than the linked pen from above, [check out the interactive example](https://codepen.io/isellsoap/pen/wbPbxG).

{% include 'figure' with '/images/2019/05/weird-rendering-dl-items-display-inline.png'
  linkExternal: '/images/2019/05/weird-rendering-dl-items-display-inline.png'
  caption: 'The question is: why doesn’t the browser try to use the whole space of the line to render the text?'
  alt: 'Two dl elements are being shown with inlined dt and dd elements. The first dl element is pretty formatted and behaves as expected (all elements are nicely formatted right next to each other). The second dl element is compressed in the markup (so no line breaks and whitespace between HTML elements). This causes the browser to produce weird line breaks which create huge visual gaps at the end of lines.'
%}

We talk about a layout that can only be achieved by `inline`ing the `dt` and `dd` elements of the `dl` element, thus you have to tackle the problem that sometimes there are weird gaps at the end of lines (see red arrow in the screenshot). Why does the browser break the line in such a weird way? Why doesn’t it try to fill up the whole line?

I can’t give you an answer to these questions <ins>(edit: I can now, check out the edit at the end of the article)</ins>, but the root cause of the problem is (and here we go back to the beginning of this post) the **compressed markup** – so no line breaks and whitespace between HTML elements – of the second example in the screenshot. The first example of the screenshot uses pretty formatted markup.

The solution for us was to add an artificial extra space after each `dt` and `dd` element that won’t get compressed by our internally used HTML minifier. Additionally we added an extensive comment in the markup to explain why the space is necessary to add.

Yes, browsers are weird sometimes.

**Edit (22 May 2019):**

[Šime Vidas pointed out](https://twitter.com/simevidas/status/1131186446767992832?s=20) to me on Twitter, why the browser is breaking the line in such a weird way:

> My guess: Because the inline elements touch each other, there is no line break opportunity between them, so the browser treats the last word of the first element and the first word of the second element as one word.

And it’s true: sum up the widths of the two words (as described in the tweet) and you can see that there is not enough space for the browser to render the “unified” word in the remaining space of the line, thus it breaks it to the next line. Makes perfect sense, thanks a lot Šime, for claryfing this! 👍
