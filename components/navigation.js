import { htmlElement } from "roseview";

const NavigationBar = function (parent) {
    let nav = new htmlElement(parent, "nav");
    nav.css`
    position: relative;
    top: 0;
    left: 0;
    z-index: 20;
    box-sizing: border-box;
    display: block;
    width: 100%;
    height: 64px;
    color: black;
    background: linear-gradient(black, black) left bottom / 100% 2px repeat-x;
    background-size: 10px 1px;
    background-clip: content-box;
    `;

    nav.alignment = "VCenter";

    let text = new htmlElement(nav, "span", {
        textContent: "RoseViewJS",
    });
    text.css`
    font-family: "Chokokutai", system-ui;
    font-weight: 700;
    font-size: 16px;
    letter-spacing: 0.2px;
    text-rendering: optimize-legibility;
    text-size-adjust: 100%;
    line-height: 24px;
    font-style: normal;
    color: #ff4500;
    `;

    return nav;
};

export default NavigationBar;
