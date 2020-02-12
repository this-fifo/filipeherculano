---
title: 'useMarked hook'
date: '2020-02-11'
image: 'https://source.unsplash.com/150x150/?react+javascript'
excerpt: Creating a custom react hook for markdown parsing
---

<p align="center">
    <img src="https://source.unsplash.com/600x300/?react+javascript"/>
    <i style="color: var(--dark-color-lighter)">random image from unsplash</i>
</p>

I am making a side project in React that requires markdown parsing so I decided to use that as a good candidate to experiment with custom [hooks](https://reactjs.org/docs/hooks-intro.html)

> _**Checkout this fantastic [post](https://wattenberger.com/blog/react-hooks) from Amelia Wattenberger that goes over a comparison between traditional class components versus using hooks and how they make React feel less bloated and more natural to work with**_

Here's what I needed to do:

- Parse a markdown string
- Sanitize that string to prevent [XSS](https://owasp.org/www-community/attacks/xss/) attacks

Apparently, [there is a vast number of parsers out there](https://github.com/search?q=markdown+parser), I decided to go with [marked](https://github.com/markedjs/marked) which seems like a good library with an active community and a nice and simple implementation

Again, the same could be said for sanitizing html _(for some reason people just like writing parsers a lot)_, so I picked sanitize-html which offers a nice level of configuration through a simple object

## Setup

Alright let's get to work

```js
// parsing markdown with marked
const marked = require('marked')
const md = `
  # heading

  [link][1]

  [1]: #heading "heading"
`

const tokens = marked.lexer(md)
const html = marked.parser(tokens)
```

Will output this html!

```html
<h1 id="heading">heading</h1>
<p><a href="#heading" title="heading">link</a></p>
```

Now, to prevent XSS, let's add this before using the html

```js
// sanitizing raw html with sanitize-html
const sanitizeHtml = require('sanitize-html')
// passing the html output from marked
const clean = sanitizeHtml(html)
```

Output now is

```html
heading
<p><a href="#heading" title="heading">link</a></p>
```

Wait, what? Where's our h1 tag? Well, apparently the default options for sanitize-html consider h1 unsafe (I guess), they go over the specs in their [README](https://github.com/apostrophecms/sanitize-html/blob/master/README.md) so I went and added my custom defaults which looks like this

<details>
  <summary>View defaults</summary>

```json
{
  "allowedTags": [
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "blockquote",
    "p",
    "a",
    "ul",
    "ol",
    "nl",
    "li",
    "b",
    "i",
    "strong",
    "em",
    "strike",
    "code",
    "hr",
    "br",
    "div",
    "table",
    "thead",
    "caption",
    "tbody",
    "tr",
    "th",
    "td",
    "pre",
    "iframe"
  ],
  "disallowedTagsMode": "discard",
  "allowedAttributes": {
    "a": ["href", "name", "target"],
    "img": ["src"]
  },
  "selfClosing": [
    "img",
    "br",
    "hr",
    "area",
    "base",
    "basefont",
    "input",
    "link",
    "meta"
  ],
  "allowedSchemes": ["http", "https", "ftp", "mailto"],
  "allowedSchemesByTag": {},
  "allowedSchemesAppliedToAttributes": ["href", "src", "cite"],
  "allowProtocolRelative": true
}
```

</details>

Marked also supports a nice set of configurations _(syntax highlighting being my favourite)_ you can checkout their docs [here](https://marked.js.org/#/USING_ADVANCED.md#options)

## useMarked('# yay!')

Awesome, we have everything, let's turn that into a React hook called useMarked

```jsx
import { useState, useEffect } from 'react'
import sanitizeHTML from 'sanitize-html'
import marked from 'marked'

import defaultOptions from './defaultOptions'

export const useMarked = (markdown, options = defaultOptions) => {
  const [html, setHtml] = useState(markdown)

  useEffect(() => {
    if (options.markedOptions) {
      marked.setOptions(options.markedOptions)
    }
    const tokens = marked.lexer(markdown)
    const html = marked.parser(tokens)
    setHtml(
      options.skipSanitize ? html : sanitizeHTML(html, options.sanitizeOptions)
    )
  }, [markdown])

  return html
}
```

And now we can use it in any function component by doing

```jsx
import React from 'react'
import { useMarked } from 'use-marked-hook'

const App = () => {
  const markdown = `**bold content**`
  const html = useMarked(markdown)
  // html -> <p></strong>bold content</strong></p>
  return <div dangerouslySetInnerHTML={{ __html: html }} />
}
```

## Testing Custom Hooks

I also found that there's a quick way to test your hooks using the [@testing-library/react-hooks](https://www.npmjs.com/package/@testing-library/react-hooks) package which provide us with the nice renderHook helper

Testing our useMarked hook looks like this

```js
import { useMarked } from 'use-marked-hook'
import { renderHook } from '@testing-library/react-hooks'

describe('useMarked', () => {
  it('Receives markdown and returns html', () => {
    const { result } = renderHook(() => useMarked('# test'))
    expect(result.current).toBe('<h1>test</h1>\n')
  })
})
```

**⚠️ Note the newline character added at the end of the output (_jest errors were very unhelpful in seeing that and it took me quite a bit to realize tests were failing because of it_ 🤦‍♂️)**

## Conclusion

To save you some effort, if you ever find the need for a markdown parser in your react projects, I published this custom hook as an npm package which you can [download](https://www.npmjs.com/package/use-marked-hook) and use now 😉

```bash
yarn add use-marked-hook
```

I made the code for it available on [github](https://github.com/this-fifo/use-marked-hook)

It also includes a sample react app that uses useMarked hook to render a local markdown file into an html page that is later published live through github pages, checkout the result [here](https://this-fifo.github.io/use-marked-hook/)
