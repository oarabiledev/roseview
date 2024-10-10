import { CreateLayout, htmlElement } from "roseview";

let partners = CreateLayout("linear", "center, scrolly, fillxy");

const div = new htmlElement(partners, "button", {});

export default partners;
