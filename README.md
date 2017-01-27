horizontal-scroll
=====

### Installation

```
npm install -S horizontal-scroll
```

### Usage & API

HTML
```html
<div class="container">
	<div class="block"></div>
	<div class="block"></div>
	<div class="block"></div>
	<div class="block"></div>
	<div class="block"></div>
</div>
```

Javascript
```javascript
var blocks = document.getElementsByClassName('block');
var container = document.getElementsByClassName('container');
var hs = new HorizontalScroll.default({
	blocks : blocks,
	container: container,
});

```

### Options

#### container `Node DOM` `null`
The list container.

#### blocks `Node DOM` `null`
Item in the list.

#### isAnimated `Boolean` `false`
If true, the list should have a skew relative to the scroll speed. 

#### spring `Number` `0.1`
Friction of the scroll.

#### springEffect `Number` `0.1`
Friction of the skew effect.

#### strengthEffect `Number` `20`
Strength of the skew effect.

### Example
https://corentinfardeau.github.io/horizontal-scroll/

### License
MIT.
