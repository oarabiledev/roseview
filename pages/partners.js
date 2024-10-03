import { html } from "roseview";

let partners = html.CreateLayout("linear", "center, scrolly, fillxy");

let btn = html.Button(partners, "Go To Back");
btn.classes = "pacifico-regular";

btn.on("click", function () {
    app.router.back();
});

export default partners;
