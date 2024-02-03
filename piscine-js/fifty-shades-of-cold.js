import { colors } from "./fifty-shades-of-cold.data.js";
function generateClasses() {
    const head = document.getElementsByTagName("head")[0];
    const style = document.createElement("style");
    colors.forEach((color) => {
        style.innerHTML += `.${color} {\n  background: ${color};\n }\n\n`;
    });
    head.appendChild(style);
}
function generateColdShades() {
    const body = document.getElementsByTagName("body")[0];
    colors.forEach((color) => {
        const isColdColor = /(aqua|blue|turquoise|green|cyan|navy|purple)/.test(color);
        if (isColdColor) {
            const div = document.createElement("div");
            div.classList.add(color);
            div.textContent = color;
            body.appendChild(div);
        }
    });
}
function choseShade(shade) {
    const divs = document.querySelectorAll("div");
    divs.forEach((div) => {
        div.className = shade;
    });
}
export { generateClasses, generateColdShades, choseShade };