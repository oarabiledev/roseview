import { htmlLayout, htmlElement } from "roseview";

let partners = new htmlLayout("linear", "center, scrolly, fillxy");

const div = new htmlElement(partners, "button", {});

export default partners;
