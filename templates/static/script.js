// const paragraphs = [
//     "forest river mountain cloud shadow light echo silent breeze",
//     "golden horizon distant valley crystal water drifting leaves",
//     "quiet thunder hidden path endless sky soft grass ancient stone"
// ];

// const typingText = document.querySelector('.typingText p');
// const inpField = document.querySelector('.input_field');
// const tryAgainBtn = document.querySelector(".content button");

// const timeTag = document.querySelector('#time');
// const mistakeTag = document.querySelector('#mistakes');
// const wpmTag = document.querySelector('#wpm');

// let timer;
// let maxTime = 60;
// let timeLeft = maxTime;
// let charIndex = 0;
// let mistakes = 0;
// let isTyping = false;

// function loadParagraph() {
//     const ranIndex = Math.floor(Math.random() * paragraphs.length);
//     typingText.innerHTML = "";

//     paragraphs[ranIndex].split("").forEach(char => {
//         typingText.innerHTML += `<span>${char}</span>`;
//     });

//     typingText.querySelector("span").classList.add("active");

//     document.addEventListener("keydown", () => inpField.focus());
//     typingText.addEventListener("click", () => inpField.focus());
// }



// function initTyping() {
//     let characters = typingText.querySelectorAll("span");
//     let typedChar = inpField.value[charIndex];

//     if (charIndex < characters.length && timeLeft > 0) {

//         if (!isTyping) {
//             timer = setInterval(initTimer, 1000);
//             isTyping = true;
//         }

//         if (typedChar == null) return;

//         if (characters[charIndex].innerText === typedChar) {
//             characters[charIndex].classList.add("correct");
//         } else {
//             characters[charIndex].classList.add("incorrect");
//             mistakes++;
//         }

//         charIndex++;

//         characters.forEach(span => span.classList.remove("active"));
//         if (characters[charIndex]) {
//             characters[charIndex].classList.add("active");
//         }

//         let wpm = Math.round(((charIndex - mistakes) / 5) / (maxTime - timeLeft) * 60);
//         wpmTag.innerText = wpm > 0 ? wpm : 0;
//         mistakeTag.innerText = mistakes;

//     } else {
//         clearInterval(timer);
//     }
// }

// function resetGame() {
//     loadParagraph();
//     clearInterval(timer);
//     timeLeft = maxTime;
//     charIndex = mistakes = isTyping = 0;
//     inpField.value = "";
//     timeTag.innerText = timeLeft;
//     wpmTag.innerText = 0;
//     mistakeTag.innerText = 0;
//     cpmTag.innerText = 0;
// }

// loadParagraph();
// inpField.addEventListener("input", initTyping);
// tryAgainBtn.addEventListener("click", resetGame);

const paragraphs = [
    "forest river mountain cloud shadow light echo silent breeze",
    "golden horizon distant valley crystal water drifting leaves",
    "quiet thunder hidden path endless sky soft grass ancient stone"
];

const typingText = document.querySelector('.typingText p');
const inpField = document.querySelector('.input_field');
const tryAgainBtn = document.querySelector(".content button");

const timeTag = document.querySelector('#time');
const mistakeTag = document.querySelector('#mistakes');
const wpmTag = document.querySelector('#wpm');
// Optional (only if you have it in HTML)
// const cpmTag = document.querySelector('#cpm');

let timer = null;
let maxTime = 60;
let timeLeft = maxTime;
let charIndex = 0;
let mistakes = 0;
let isTyping = false;

// Load random paragraph
function loadParagraph() {
    const ranIndex = Math.floor(Math.random() * paragraphs.length);
    typingText.innerHTML = "";

    paragraphs[ranIndex].split("").forEach(char => {
        const span = `<span>${char}</span>`;
        typingText.innerHTML += span;
    });

    typingText.querySelector("span").classList.add("active");
}

// Timer function
function initTimer() {
    if (timeLeft > 0) {
        timeLeft--;
        timeTag.innerText = timeLeft;
    } else {
        clearInterval(timer);
    }
}

// Typing logic
function initTyping() {
    const characters = typingText.querySelectorAll("span");
    const typedChar = inpField.value[charIndex];

    if (charIndex < characters.length && timeLeft > 0) {

        // Start timer once
        if (!isTyping) {
            timer = setInterval(initTimer, 1000);
            isTyping = true;
        }

        if (typedChar == null) return;

        // Correct vs incorrect
        if (characters[charIndex].innerText === typedChar) {
            characters[charIndex].classList.add("correct");
        } else {
            characters[charIndex].classList.add("incorrect");
            mistakes++;
        }

        charIndex++;

        // Update active character
        characters.forEach(span => span.classList.remove("active"));
        if (characters[charIndex]) {
            characters[charIndex].classList.add("active");
        }

        // Calculate WPM safely
        let timeSpent = maxTime - timeLeft;
        let wpm = timeSpent > 0
            ? Math.round(((charIndex - mistakes) / 5) / timeSpent * 60)
            : 0;

        wpmTag.innerText = wpm;
        mistakeTag.innerText = mistakes;

    } else {
        clearInterval(timer);
    }
}

// Reset game
function resetGame() {
    clearInterval(timer);

    timeLeft = maxTime;
    charIndex = 0;
    mistakes = 0;
    isTyping = false;

    inpField.value = "";
    timeTag.innerText = timeLeft;
    wpmTag.innerText = 0;
    mistakeTag.innerText = 0;
    // if (cpmTag) cpmTag.innerText = 0;

    loadParagraph();
}

// Focus input (only once, not inside load)
document.addEventListener("keydown", () => inpField.focus());
typingText.addEventListener("click", () => inpField.focus());

// Init
loadParagraph();
inpField.addEventListener("input", initTyping);
tryAgainBtn.addEventListener("click", resetGame);
