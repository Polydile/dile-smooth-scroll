# \<dile-smooth-scroll>

Web Component to create smooth scrolls on the page document or in a element scrolling section. Based on LitElement.

Also this package provides a mixin to implement scrollin API functions to any component you need.

Go to [DEMOS page](https://dile-smooth-scroll.polydile.com)!

## Installation
```bash
npm i dile-smooth-scroll
```

## Usage
```html
<script type="module">
  import 'dile-smooth-scroll/dile-smooth-scroll.js';
</script>

<dile-smooth-scroll id="scrollComponent"></dile-smooth-scroll>
```

This component is not representational, actually provides a simple scroll API. So, you can call it's methods to create smooth scrolls in various ways. 

For example:

```javascript
  // This method do a smooth scroll to the bottom of the document.
  document.getElementById('scrollComponent').smoothScrollToBottom();

  // This method do a smooth scroll to the top of the document.
  document.getElementById('scrollComponent').smoothScrollToTop();
```

Is important to note that the component uses the Javascript native scroll API. If you need to run this component in browsers that do not support it, you will need to use a polyfill. Please find the [compatibility of the scroll API in Caniuse](https://caniuse.com/#feat=element-scroll-methods).

## API methods

- **smoothScrollToTop()**: Scrolls the entire document to the top.
- **smoothScrollToBottom()**: Scrolls the entire document to the bottom.
- **smoothScroll(top, left)**: Scrolls the entire document to top & left position.
- **smoothScrollBy(top, left)**: Scrolls the entire document by top & left values.
- **smoothScrollElementIntoView(element)**: Scrolls the entire document to the position of the element passed by argument.
- **smoothElementScrollTop(element)**: Scrolls a section with it's own scrolling area to the top.
- **smoothElementScrollBottom(element)**: Scrolls a section with it's own scrolling area to the bottom.
- **smoothElementScroll(element, top, left)**: Scrolls a section with it's own scrolling area to the top & left position.
- **smoothElementScrollBy(element, top, left)**: Scrolls a section with it's own scrolling area by top & left values.

# Mixins

In this package you will find mixins to implement the scrolling API into any component. We separate the scrolling API into two mixins because usually you need only one or other.

## DileSmoothScrollMixin

This Mixin includes all methods related to scroll the entire document area. These are:

- smoothScrollToTop
- smoothScrollToBottom
- smoothScroll
- smoothScrollBy
- smoothScrollElementIntoView

To use the mixin in a Web Component you can use a code like this:

```javascript
import { DileSmoothScrollMixin } from 'dile-smooth-scroll/DileSmoothScrollMixin';

class MyOwnComponent extends DileSmoothScrollMixin(LitElement) {
  // code of your own component
}
```

## DileSmoothScrollElementMixin

This mixin implements the methods to scroll the content of a element with it's own scrolling section.

The methods included in it are:

- smoothElementScrollTop
- smoothElementScrollBottom
- smoothElementScroll
- smoothElementScrollBy
