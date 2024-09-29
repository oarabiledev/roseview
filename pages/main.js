import { html } from "../src/roseview.core.js";

let main = html.CreateLayout("linear", "center, scrolly, fillxy");

let btn = html.Button(main, "Go To About 😋");
btn.classes = "pacifico-regular";

btn.on("click", function () {
    app.router.navigate("about");
});

export default main;
