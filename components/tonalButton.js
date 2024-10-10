import { htmlElement } from "roseview";

const TonalButton = function (parent, text) {
    let button = new htmlElement(parent, "button", {
        textContent: text,
    });
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
    return button;
};

export default TonalButton;
