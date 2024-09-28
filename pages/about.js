import { html } from "roseview/core";

let about = html.CreateLayout("linear", "fillxy");

let aboutMsg = html.Text(about, "Hello, This Is About Section");

export default about;
