# What Is RoseView ?

Roseview is a client side framework, designed to simplify the creation of single page applications and mulitipage applications. Roseview uses the android model and mixes it with the html model.

- RoseView uses the concept of layouts
- RoseView uses hashbased routing for quicker navigation and file based routing for views with many elements

## Why RoseView ?

Many ideas have come up on how web development should be done, however not many frameworks rely on using pure syntacticall javascript. Some use jsx and others create their own.

roseview aims to be simple and easy to master.

## Installation

There is no installation, just add this script tag to your `index.html` file :

```html
<script src="roseview.core.js"></script>
/** Or */
<script src="roseview.es.js" type="module"></script>
/** Or */
<script src="https://www.unpkg.com/roseview" type="module"></script>

/**Dont Forget To Add Your Main Script File */
````

## Getting Started

Even though typescript was not used, i have tried to add jsdoc on the relevant pieces that you will interact with.

### The Concept Of Layouts

A layout is a special div that takes in parameters like the hash route, type of layout, alignment options.

```javascript
let main = html.CreateLayout(route, type, alignmentOptions);

// If page is main, write in this manner 


let main = html.CreateLayout("index", "linear", "center, scrolly, fillxy");
````

The option "FillXY", is useful for fullscreen layouts, layouts can be created to form a toast, banner, bottomsheet but must have their route as *null*.

#### Types Of Layouts & Alignment Options

The main type of layouts is a linear one, if you want to position elements anywhere use an absolute layout

Alignment options available are :

- center / vcenter (vertically centerd)
- left / right
- noscrollbar
- bottom / top
- filly / fillx / fillxy
- horizontal / vertical
- scrolly / scrollx / scrollxy

### Then Everything Else

The `html` object has many available html elements (Buttons / Images) which are exposed after adding the '.'

```javascript
html.Button
html.Image
````

However if the html element you want to use is not available or you are using special tags, use this :

```javascript
html.Element(parent, HTMLELEMENT)
```

All functions of this object take in the first parameter as the parent, basically the layout they must attach to, then the following parameters are exposed through the lsp (jsDOC also available).

### Page Routing

For now roseview supports only hash based routing which is still buggy but a fix is being deployed.

The first parameter of layouts is the hash route therefore they can be added in this manner :

```javascript

let main = html.CreateLayout("index", "linear", "center, scrolly, fillxy");
main.setChildMargins = "null, 15px";
let nav_title = html.Text(main, "Main Page");
nav_title.classes = "pacifico-regular";

let loginBtn = html.Button(main, "Open Login Page");
loginBtn.on("click", () => {
 htmlPage.Open("#login");
});

let forwardBtn = html.Button(main, "Go Forward");
forwardBtn.on("click", () => {
 htmlPage.Forward();
});

let login = html.CreateLayout("login", "linear", "center, scrolly, fillxy");
login.setChildMargins = "null, 15px";
login.style({
 backgroundColor: "yellow"
});

let input = html.Input(login, "text");

let goSet = html.Button(login, "Settings");
goSet.on("click", () => {
 htmlPage.Open("#settings");
});
let goBack = html.Button(login, "Go Back");
goBack.on("click", () => {
 htmlPage.Back();
});

let settings = html.CreateLayout("settings", "linear", "center, scrolly, fillxy");
settings.setChildMargins = "null, 15px";
settings.style({
 backgroundColor: "red"
});

let inputB = html.Input(settings, "text");

//htmlPage.Transitions = ["slideInUp", "slideOutDown"];
htmlPage.LoadStyle("main.css");
```

Additionaly you can add page transitions as you switch pages using the `htmlPage.Transitions` method.

### Styling Elements

To style your elements use the `.style` method which takes in an object and converts it into a style.

```javascript
txt.style({
   position: "relative",
   lineHeight : "18px",

   "&:active": {
    boxShadow: "0px, 0px, 0px, 0px",
    top: "5px",
    left: "5px"
   }

   "*" : {
    color: "red
   }
})
```

#### Adding Classes

If you want to add classes use :

```javascript
btn.classes = 'class1 classB classH'
// To Remove
btn.removeClasses = 'class1'
```

#### DX Improvements

There is the `setMargins / setChildMargins / setPosition` getters which allow you to change spacing without editing css directly.

```javascript
let main = html.CreateLayout("index", "linear", "center, scrolly, fillxy");
main.setChildMargins = "null, 15px";
````

Additionally to modify properties without adding stress to the DOM use the `batchProps` method which takes in an object of modifications and uses `requestAnimationFrame`.

```javascript
btn.props({
textContent : 'Hi',
style.color : 'red'
})
```

#### Element Control

##### Show / Gone

These are getters set true to comply with function condition
Gone make the elements hide and not visible while not taking space.

#### On

This is an event listener method, use as

```javascript
let loginBtn = html.Button(main, "Open Login Page");

loginBtn.on("click", () => {
 htmlPage.Open("login");
});
```

#### bindInput

This method binds a signal (where input is) to where input is displayed at.

#### addChild / destroyChild

If you want to add an element as a child of another use addChild, then to destroy the element use destroyChild.

Check This Page:

- [Methods Docs](docs/Methods.md)

#### Animations

Use the animationSequence method which allows you to use these methods to animate elements

```console
scale(x, y, duration, delay);

scaleX(x, duration, delay);

scaleY(y, duration, delay);

alpha(alpha, duration, delay);

end();

rotate(angle, duration, delay);

rotateX(angle, duration, delay);

rotateY(angle, duration, delay);

then();

position, positionX, positionY;

translate, translateX, translateY;

setOnStart();

setOnCompleted();

start();
```

Check This Page:

- [Animation Docs](docs/Animation.md)

### Accesing DOM Methods

To use the  available javascript methods add 'element' to the caller.

````javascript
btn.element.textContent = 'DOM Access'
````

### htmlPage Object

This object allows you to tweak thing like the title, set icons, the most poweful are moving pages.

```javascript

htmlPage.Open(route, transitions)
htmlPage.Back()
htmlPage.Forward()
htmlPage.LoadStyle()
htmlPage.LoadScript()
htmlPage.Theme
htmlPage.Lang
htmlPage.Orient
```

### Achieving Reactivity

- signals

- showIF

Check This Page:

- [Reactivity Docs](docs/Reactivity.md)

All that is the barebones needed to get started with the framework.

You can help implement features or view progress by inspecting the [Features Page](docs/Features.todo)

Thank You For Your Interest ❣️
