import { html } from "roseview";

let about = html.CreateLayout("linear", "fillxy, center");

let aboutMsg = html.Text(about, "Hello, This Is About Section");

let btn = html.Button(about, "Go Forwad 😋");
btn.classes = "pacifico-regular";

btn.on("click", function () {
    app.router.forward();
});

let btnv = html.Button(about, "Go To Partners 😋");
btnv.classes = "pacifico-regular";

btnv.on("click", function () {
    app.router.navigate("about/partners");
});

export default about;
