

const paragraphs = [
    "forest river mountain cloud shadow light echo silent breeze golden horizon distant valley crystal water drifting leaves quiet thunder hidden path endless sky soft grass ancient stone rising mist silver moon fading sunlight calm ocean restless wind scattered dreams broken time glowing ember fragile memory wandering soul secret fire deep night bright morning shifting sand rolling hills fallen stars open field distant voices empty road gentle rain warm earth cold air moving waves lost direction steady rhythm fleeting moment quiet mind hidden truth simple hope endless journey scattered light silent forest drifting clouds rising dawn fading dusk glowing sky calm river distant mountains soft wind quiet echo wandering thoughts endless horizon gentle waves steady breath open path distant dream quiet shadow soft light hidden valley moving clouds silent breeze drifting leaves calm ocean restless sky fading sunlight rising mist glowing ember quiet night bright morning endless road scattered stars gentle rain steady rhythm open field wandering soul distant voices calm wind hidden fire soft earth rolling hills silent water drifting sky quiet forest endless journey fading dawn rising dusk gentle echo steady breath distant valley calm shadow open horizon moving waves quiet mind hidden truth simple hope endless sky soft wind wandering thoughts calm river drifting clouds silent breeze glowing light quiet night fading sunlight endless dream steady rhythm gentle rain distant mountains open path calm ocean quiet echo wandering soul soft earth hidden valley drifting leaves rising mist silent sky calm wind gentle waves steady breath endless journey quiet forest distant voices soft light fading dusk glowing ember open horizon calm river drifting clouds quiet mind wandering thoughts silent breeze gentle rain endless road steady rhythm distant dream soft shadow calm ocean hidden truth quiet night bright morning moving waves open field drifting sky gentle echo endless horizon quiet forest steady breath wandering soul calm wind soft earth fading dawn rising mist silent water distant valley glowing light quiet mind open path gentle waves calm river drifting clouds silent breeze endless journey quiet echo soft wind wandering thoughts calm ocean distant mountains steady rhythm hidden fire quiet night open horizon drifting leaves gentle rain calm shadow endless sky soft light moving waves distant voices steady breath silent forest wandering soul calm river fading sunlight",
    "ancient stone rising mist silver moon fading sunlight calm ocean restless wind scattered dreams broken time glowing ember fragile memory wandering soul secret fire deep night bright morning shifting sand rolling hills fallen stars open field distant voices empty road gentle rain warm earth cold air moving waves lost direction steady rhythm fleeting moment quiet mind hidden truth simple hope endless journey scattered light silent forest drifting clouds rising dawn fading dusk glowing sky calm river distant mountains soft wind quiet echo wandering thoughts endless horizon gentle waves steady breath open path distant dream quiet shadow soft light hidden valley moving clouds silent breeze drifting leaves calm ocean restless sky fading sunlight rising mist glowing ember quiet night bright morning endless road scattered stars gentle rain steady rhythm open field wandering soul distant voices calm wind hidden fire soft earth rolling hills silent water drifting sky quiet forest endless journey fading dawn rising dusk gentle echo steady breath distant valley calm shadow open horizon moving waves quiet mind hidden truth simple hope endless sky soft wind wandering thoughts calm river drifting clouds silent breeze glowing light quiet night fading sunlight endless dream steady rhythm gentle rain distant mountains open path calm ocean quiet echo wandering soul soft earth hidden valley drifting leaves rising mist silent sky calm wind gentle waves steady breath endless journey quiet forest distant voices soft light fading dusk glowing ember open horizon calm river drifting clouds quiet mind wandering thoughts silent breeze gentle rain endless road steady rhythm distant dream soft shadow calm ocean hidden truth quiet night bright morning moving waves open field drifting sky gentle echo endless horizon quiet forest steady breath wandering soul calm wind soft earth fading dawn rising mist silent water distant valley glowing light quiet mind open path gentle waves calm river drifting clouds silent breeze endless journey quiet echo soft wind wandering thoughts calm ocean distant mountains steady rhythm hidden fire quiet night open horizon drifting leaves gentle rain calm shadow endless sky soft light moving waves distant voices steady breath silent forest wandering soul calm river fading sunlight",
    "shifting sand rolling hills fallen stars open field distant voices empty road gentle rain warm earth cold air moving waves lost direction steady rhythm fleeting moment quiet mind hidden truth simple hope endless journey scattered light silent forest drifting clouds rising dawn fading dusk glowing sky calm river distant mountains soft wind quiet echo wandering thoughts endless horizon gentle waves steady breath open path distant dream quiet shadow soft light hidden valley moving clouds silent breeze drifting leaves calm ocean restless sky fading sunlight rising mist glowing ember quiet night bright morning endless road scattered stars gentle rain steady rhythm open field wandering soul distant voices calm wind hidden fire soft earth rolling hills silent water drifting sky quiet forest endless journey fading dawn rising dusk gentle echo steady breath distant valley calm shadow open horizon moving waves quiet mind hidden truth simple hope endless sky soft wind wandering thoughts calm river drifting clouds silent breeze glowing light quiet night fading sunlight endless dream steady rhythm gentle rain distant mountains open path calm ocean quiet echo wandering soul soft earth hidden valley drifting leaves rising mist silent sky calm wind gentle waves steady breath endless journey quiet forest distant voices soft light fading dusk glowing ember open horizon calm river drifting clouds quiet mind wandering thoughts silent breeze gentle rain endless road steady rhythm distant dream soft shadow calm ocean hidden truth quiet night bright morning moving waves open field drifting sky gentle echo endless horizon quiet forest steady breath wandering soul calm wind soft earth fading dawn rising mist silent water distant valley glowing light quiet mind open path gentle waves calm river drifting clouds silent breeze endless journey quiet echo soft wind wandering thoughts calm ocean distant mountains steady rhythm hidden fire quiet night open horizon drifting leaves gentle rain calm shadow endless sky soft light moving waves distant voices steady breath silent forest wandering soul calm river fading sunlight",
    "glowing ember quiet mind endless dream soft earth hidden valley drifting clouds gentle echo steady rhythm calm wind quiet ocean distant horizon silent breeze open field wandering thoughts calm sky drifting leaves quiet night gentle waves endless journey soft shadow steady breath distant valley calm forest glowing light quiet echo moving waves hidden truth soft wind endless road drifting sky calm river wandering soul silent night gentle rain steady rhythm open horizon distant dream quiet mind soft earth calm ocean drifting clouds endless sky gentle breeze wandering thoughts steady breath quiet forest moving waves distant voices calm shadow glowing ember open path soft light endless journey silent sky calm wind drifting leaves quiet echo steady rhythm distant mountains soft earth wandering soul calm river hidden valley gentle rain open horizon drifting clouds quiet night endless dream steady breath calm ocean moving waves distant valley soft shadow glowing light silent breeze wandering thoughts calm sky endless road gentle echo steady rhythm quiet forest drifting leaves calm wind hidden truth soft earth distant horizon wandering soul endless sky quiet night gentle waves steady breath calm river drifting clouds silent forest glowing ember open path soft light distant voices endless journey calm ocean wandering thoughts gentle rain steady rhythm quiet mind drifting sky soft shadow calm wind endless dream silent breeze moving waves distant valley quiet echo steady breath glowing light calm forest hidden valley wandering soul soft earth endless horizon quiet night drifting leaves gentle waves steady rhythm calm river distant mountains silent sky soft wind open horizon endless journey quiet ocean wandering thoughts steady breath calm shadow glowing ember distant dream soft light gentle rain endless road drifting clouds quiet forest calm wind hidden truth soft earth steady rhythm wandering soul endless sky quiet night gentle echo calm river moving waves distant valley silent breeze drifting leaves soft shadow calm ocean steady breath glowing light endless journey quiet mind wandering thoughts gentle rain calm sky open path",
    "steady rhythm silent forest drifting clouds distant voices soft earth endless horizon quiet night calm wind moving waves steady breath glowing ember wandering soul quiet echo endless dream soft light calm river hidden valley drifting sky gentle waves steady rhythm distant mountains calm ocean wandering thoughts silent breeze endless road soft shadow quiet forest steady breath calm wind glowing light open horizon endless journey drifting leaves quiet night gentle rain calm river steady rhythm distant valley soft earth wandering soul quiet echo endless sky calm ocean moving waves hidden truth steady breath glowing ember soft light distant voices calm shadow drifting clouds gentle waves quiet forest endless dream steady rhythm calm wind wandering thoughts silent breeze open path distant horizon calm river soft shadow endless journey quiet night drifting sky gentle echo steady breath glowing light calm ocean wandering soul soft earth endless road quiet mind steady rhythm distant valley calm forest drifting leaves gentle rain soft light endless sky quiet echo calm wind moving waves hidden valley steady breath wandering thoughts silent night glowing ember endless journey calm river distant mountains steady rhythm quiet ocean drifting clouds soft shadow gentle waves calm sky wandering soul steady breath endless dream quiet forest glowing light open horizon drifting leaves calm wind distant voices steady rhythm soft earth quiet night endless road calm river moving waves hidden truth steady breath gentle rain wandering thoughts calm ocean silent breeze distant valley soft shadow endless sky quiet echo steady rhythm glowing ember calm forest drifting clouds wandering soul soft light endless journey quiet night gentle waves steady breath calm river distant mountains silent sky soft wind open horizon endless journey quiet ocean wandering thoughts steady breath calm shadow glowing ember distant dream soft light gentle rain endless road drifting clouds quiet forest calm wind hidden truth soft earth steady rhythm wandering soul endless sky quiet night gentle echo calm river moving waves distant valley silent breeze drifting leaves soft shadow calm ocean steady breath glowing light endless journey quiet mind wandering thoughts gentle rain calm sky open path"
];


const typingText = document.querySelector('.typingText p');
const inpField = document.querySelector('.input_field');

const restartBtn = document.querySelector("#restartBtn");
const startBtn = document.querySelector("#startBtn");
const playAgainBtn = document.querySelector("#playAgainBtn");

const timeTag = document.querySelector('#time');
const mistakeTag = document.querySelector('#mistakes');
const wpmTag = document.querySelector('#wpm');

const startScreen = document.querySelector("#startScreen");
const gameArea = document.querySelector("#gameArea");
const gameOverScreen = document.querySelector("#gameOverScreen");

const finalWpm = document.querySelector("#finalWpm");
const finalMistakes = document.querySelector("#finalMistakes");

let timer;
let maxTime = 60;
let timeLeft = maxTime;
let charIndex = 0;
let mistakes = 0;
let isTyping = false;

function loadParagraph() {

    const ranIndex = Math.floor(Math.random() * paragraphs.length);

    const spans = paragraphs[ranIndex]
        .split("")
        .map(char => `<span>${char}</span>`)
        .join("");

    typingText.innerHTML = spans;

    typingText.querySelector("span").classList.add("active");
}

function initTimer() {

    if (timeLeft > 0) {
        timeLeft--;
        timeTag.innerText = timeLeft;
    } else {
        endGame();
    }
}

function initTyping() {

    const characters = typingText.querySelectorAll("span");
    const typedChar = inpField.value[charIndex];

    if (charIndex < characters.length && timeLeft > 0) {

        if (!isTyping) {
            timer = setInterval(initTimer, 1000);
            isTyping = true;
        }

        if (typedChar == null) return;

        if (characters[charIndex].innerText === typedChar) {
            characters[charIndex].classList.add("correct");
        } else {
            characters[charIndex].classList.add("incorrect");
            mistakes++;
        }

        charIndex++;

        characters.forEach(span => span.classList.remove("active"));

        if (characters[charIndex]) {
            characters[charIndex].classList.add("active");

            // AUTO SCROLL
            characters[charIndex].scrollIntoView({
                behavior: "smooth",
                block: "center"
            });
        }

        let timeSpent = maxTime - timeLeft;

        let wpm = timeSpent > 0
            ? Math.round(((charIndex - mistakes) / 5) / timeSpent * 60)
            : 0;

        wpmTag.innerText = wpm;
        mistakeTag.innerText = mistakes;

    } else {
        endGame();
    }
}

function startGame() {

    startScreen.style.display = "none";
    gameOverScreen.style.display = "none";

    gameArea.style.display = "block";

    resetGame();

    inpField.focus();
}

function endGame() {

    clearInterval(timer);

    gameArea.style.display = "none";
    gameOverScreen.style.display = "block";

    finalWpm.innerText = wpmTag.innerText;
    finalMistakes.innerText = mistakes;
    fetch("/save-typing-score", {
        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({
            wpm: parseInt(wpmTag.innerText),
            mistakes: mistakes
        })
    });
}

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

    loadParagraph();
}

document.addEventListener("keydown", () => inpField.focus());

typingText.addEventListener("click", () => inpField.focus());

inpField.addEventListener("input", initTyping);

restartBtn.addEventListener("click", resetGame);

startBtn.addEventListener("click", startGame);

playAgainBtn.addEventListener("click", startGame);
