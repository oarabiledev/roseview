# roseview Methods >3

roseview, has cloned most available htmlElements into functions/methods of the html Object.

All roseview Elements have the same methods, initially i wanted to use a proxy which will allow us to access roseview Methods and DOM Api methods, but the issue was lsp's could not give support and that made it a bad framework.

> The objective is to switch to a proxy when the lsp support is great. But for now, use the Method method...

## Methods

### animate

This method uses Animate.css library and allows you to add animations to elements available in the library.

```javascript
let btn = html.Button(main, 'Helloooo !');

btn.animate(type, callback, time);

/**
 * type is the animation name - refer to animate.css
 * callback is the function called on animationend
 * time is the animation duration
 */
```

### onTouch

This method is the replacement of onClick event listener, it switches types of event listeners based on the device type, it is usable in the same way onClick would work.

```javascript
btn.onTouch = function(){
    alert('Hellloooo')
}
```

### onLongTouch

This adds an onlong-touch event, usable as :

```javascript
btn.onLongTouch = function(){
    alert('Hellloooo')
}
```

### show

This method is used in a setter format, if the value is true the element is visible if false then the element is hidden but still taking up space in the DOM.

```javascript
btn.show = true;
```

### gone

This method is used in setter format and when value is true the element is hidden and does not take space in the DOM, and the opposite if false;

```javascript
btn.gone = true;
```

### style

This is the most powerful method it adds scoped css to your element and passes the css provided in object format to actual css which is inserted into the main css style.

This method uses `insertRule` which adds css without long parse times compared to `innerText` or `innerHtml`.

The format of style is similar to React's Emotion Library :

```javascript
btn.style({
    position : 'relative',
    color : 'red',

    "&:active": {
        boxShadow : '0px, 0px, 0px, 0px',
        top : '5px',
        left : '5px'
    }

    "@media (max-width: 1250px)" : {
        /* */
    }
})
```

### setMargins

This method takes in values in a setter way :

```javascript
btn.setMargins = 'left, top, right, bottom'

btn.setMargins = '0.5px, 0, 0.5px, 0'
```

### setChildMargins

works like :

```javascript
btn.setChildMargins = '0.5px, 0, 0.5px, 0'
```

### setPadding

works like :

```javascript
btn.setPadding = '0.5px, 0, 0.5px, 0'
```

### setPosition

works like :

```javascript
btn.setPosition = '0.5px, 0, 0.5px, 0'
```

### animationSequence

This method allows you to use pre-built animation methods to move elements across the screen in an elegant way.

Firstly you need to add the method, this will also expose other animation methods :

```javascript
btn.animationSequence
```

Secondly you will add animations then add a `start` or `then` method to delay animations.

```javascript
btn.animationSequence()
    .rotate(25, 1500, 0)
    .then()
    .rotate(-25, 1500, 0)
    .positionX('50px', 1500, 0)
    .start()
```

There are more animationSequence methods that will be documented, check out Animations.md

- [Elements Documentation](docs/Elements.md)

- [Reactivity Docs](docs/Reactivity.md)

- [Animation Docs](docs/Animation.md)
