import { gossips } from "./gossip-grid.data.js";
function grid() {
    // Create the form for adding new gossips
    let form = document.createElement("form");
    form.classList.add("gossip");
    let textarea = document.createElement("textarea");
    let button = document.createElement("button");
    button.innerHTML = "Share gossip!";
    button.type = "submit";
    button.addEventListener("click", (e) => {
        e.preventDefault();
        let gossip = textarea.value;
        if (gossip.length > 0) {
            gossips.unshift(gossip);
            document.querySelectorAll(".gossip").forEach((card, i) => {
                if (i > 0) card.remove();
            });
            textarea.value = "";
            renderGossips();
        }
    });
    form.appendChild(textarea);
    form.appendChild(button);
    document.body.appendChild(form);
    // Create the ranges div
    let rangesDiv = document.createElement("div");
    rangesDiv.classList.add("ranges");
    // Create the width range input
    let widthRange = document.createElement("input");
    widthRange.type = "range";
    widthRange.id = "width";
    widthRange.min = "200";
    widthRange.max = "800";
    widthRange.value = "400";
    widthRange.addEventListener("input", (e) => {
        let cards = document.querySelectorAll(".gossip");
        cards.forEach((card) => {
            card.style.width = e.target.value + "px";
        });
    });
    rangesDiv.appendChild(widthRange);
    // Create the font size range input
    let fontSizeRange = document.createElement("input");
    fontSizeRange.type = "range";
    fontSizeRange.id = "fontSize";
    fontSizeRange.min = "20";
    fontSizeRange.max = "40";
    fontSizeRange.value = "30";
    fontSizeRange.addEventListener("input", (e) => {
        let cards = document.querySelectorAll(".gossip");
        cards.forEach((card) => {
            card.style.fontSize = e.target.value + "px";
        });
    });
    rangesDiv.appendChild(fontSizeRange);
    // Create the background range input
    let backgroundRange = document.createElement("input");
    backgroundRange.type = "range";
    backgroundRange.id = "background";
    backgroundRange.min = "20";
    backgroundRange.max = "75";
    backgroundRange.value = "50";
    backgroundRange.addEventListener("input", (e) => {
        let cards = document.querySelectorAll(".gossip");
        cards.forEach((card) => {
            card.style.backgroundColor = `hsl(280, 50%, ${e.target.value}%)`;
        });
    });
    rangesDiv.appendChild(backgroundRange);
    document.body.appendChild(rangesDiv);
    // Render all the gossips
    renderGossips();
}
// Function to render all the gossips
function renderGossips() {
    gossips.forEach((gossip) => {
        let div = document.createElement("div");
        div.classList.add("gossip");
        div.innerHTML = gossip;
        document.body.appendChild(div);
    });
}
export { grid };
