# 🔥RoseView (v0.2.0)

Roseview is a client side framework, designed to simplify the creation of single page applications.

## 🚀 Getting Started

You can also install roseview in by :

```bash
npm install roseview
```

After that the next step is to use the cli tool to create a new project.

```bash
npx create-rose-app your-project-name
```

To run your project run the command:

```bash
npm run dev
```

---

### The Concept Of Layouts

A layout is a special div that takes in parameters like the hash route, type of layout, alignment options.

```javascript
let main = html.CreateLayout(type, alignmentOptions);


let main = html.CreateLayout("linear", "center, scrolly, fillxy");

// Always default export your main layout in that page
````

The option "FillXY", is useful for fullscreen layouts, layouts can be created to form a toast, banner, bottomsheet.

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

The `html` object has many available html elements (Buttons / Images) which are exposed after adding the '.' by your lsp.

All you need to do is add the `html.` then add an Html element with the first letter being in caps.

```javascript
html.Button
html.Image
html.Anchor
````

However if the html element you want to use is not available or you are using special tags, use this :

```javascript
html.Element(parent, HTMLELEMENT)
```

Also this is different when it comes to text, i decided to use a special method, that is `html.Text`

All functions of this object take in the first parameter as the parent, basically the layout they must attach to, then the following parameters are exposed through the lsp (jsDOC also available).

### Page Routing

For now roseview supports only hash based routing.

```javascript
// Main Testing Script For roseview Features

import { HashRouter } from "roseview";
import { createApp } from "roseview";

import main from "./pages/main.js";
import about from "./pages/about.js";

const routes = [
    { path: "index", component: main },
    { path: "about", component: about },
];
const router = HashRouter(routes);

window.app = createApp(main).use(router).mount("#app");

```

In your main.js page you would have something like this :

```javascript
import { html } from "roseview";

let main = html.CreateLayout("linear", "center, scrolly, fillxy");

let btn = html.Button(main, "Go To About 😋");

btn.on("click", function () {
    app.router.navigate("about");
});

export default main;
```

### Styling Elements

To style your elements use the `.css` method which takes in an object or a template literall and converts it into a style (in form of a unique class) which is attached to the document and element.

```javascript
txt.css({
   position: "relative",
   lineHeight : "18px",

   "&:active": {
    boxShadow: "0px, 0px, 0px, 0px",
    top: "5px",
    left: "5px"
   }

   "*" : {
    color: "red"
   }
})
```

You could also do this:

```javascript
button.css`
    border: 2px solid #6200ea;
    color: #6200ea;
    background-color: transparent; 
    font-family: "Archivo", sans-serif;
    font-weight: 500; 
    font-size: 1rem;
    text-align: center;
    cursor: pointer;
    padding: 0.5rem 1rem; 
    transition: background-color 0.3s, color 0.3s;
    
    &:hover {
        background-color: #6200ea; 
        color: white; 
    }

    &:active {
        background-color: #3700b3; 
        border-color: #3700b3; 
    }
    `;
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
let main = html.CreateLayout("linear", "center, scrolly, fillxy");
main.setChildMargins = "null, 15px";
````

Additionally to modify properties without adding stress to the DOM use the `batchProps` method which takes in an object of modifications and uses `requestAnimationFrame`.

```javascript
btn.batchProps({ 
    textContent : 'Hi',
    style.color : 'red'
})
```

#### Element Control

##### Show / Gone

These are getters set true to comply with function condition
Gone make the elements hide and not visible while not taking space.

##### On

This is an event listener method, use as

```javascript
let loginBtn = html.Button(main, "Open Login Page");

loginBtn.on("click", () => {
 alert('Logged In')
});
```

##### addChild / destroyChild

If you want to add an element as a child of another use addChild, then to destroy the element use destroyChild.

### Accesing DOM Methods

To use the  available javascript methods add 'element' to the caller.

````javascript
btn.element.textContent = 'DOM Access'
````

### Achieving Reactivity

- signals

- showIF

Check This Page:

- [Reactivity Docs](docs/Reactivity.md)

All that is the barebones needed to get started with the framework.

You can help implement features or view progress by inspecting the [Features Page](docs/Features.todo)

Thank You For Your Interest ❣️
