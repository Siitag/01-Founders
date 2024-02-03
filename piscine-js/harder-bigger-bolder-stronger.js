function generateLetters() {
    for (let i = 0; i < 120; i++) {
        let letter = document.createElement("div");
        letter.style.fontSize = `${11 + i}px`; // Increase font size with each iteration
        letter.textContent = String.fromCharCode(
            65 + Math.floor(Math.random() * 26) // Generate a random uppercase letter
        );
        if (i < 40) {
            letter.style.fontWeight = "300"; // Set font weight to 300 for the first 40 letters
        } else if (i < 80) {
            letter.style.fontWeight = "400"; // Set font weight to 400 for the next 40 letters
        } else {
            letter.style.fontWeight = "600"; // Set font weight to 600 for the remaining letters
        }
        document.getElementsByTagName("body")[0].appendChild(letter); // Append the letter to the body element
    }
}
export { generateLetters };