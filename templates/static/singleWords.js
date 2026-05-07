
const word = document.getElementById("word");
const text = document.getElementById("text");
const scoreEl = document.getElementById("score");
const timeEl = document.getElementById("time");
const endgameEl = document.getElementById("endgamecontainer");
const startBtn = document.getElementById("startBtn");


const words = [
    "apple", "banana", "orange", "grape", "mango", "peach", "pear", "plum", "cherry", "berry",
    "lemon", "lime", "melon", "kiwi", "papaya", "coconut", "apricot", "fig", "date", "guava",
    "house", "car", "bicycle", "train", "plane", "boat", "road", "street", "city", "village",
    "school", "teacher", "student", "book", "pen", "paper", "computer", "phone", "tablet", "keyboard",
    "mouse", "screen", "window", "door", "table", "chair", "bed", "lamp", "floor", "wall",
    "dog", "cat", "bird", "fish", "horse", "cow", "sheep", "goat", "lion", "tiger",
    "bear", "wolf", "fox", "rabbit", "deer", "monkey", "elephant", "zebra", "giraffe", "snake",
    "happy", "sad", "angry", "tired", "excited", "bored", "calm", "scared", "brave", "funny",
    "fast", "slow", "hot", "cold", "warm", "cool", "bright", "dark", "soft", "hard",
    "run", "walk", "jump", "sit", "stand", "eat", "drink", "sleep", "read", "write",
    "play", "work", "study", "build", "create", "draw", "paint", "sing", "dance", "listen",
    "music", "sound", "light", "water", "fire", "earth", "air", "wind", "rain", "snow",
    "cloud", "storm", "sun", "moon", "star", "sky", "tree", "flower", "grass", "leaf",
    "river", "lake", "ocean", "mountain", "valley", "island", "forest", "desert", "beach", "field",
    "algorithm", "variable", "function", "object", "array",
    "string", "boolean", "integer", "recursion", "iteration",
    "asynchronous", "synchronous", "promise", "callback", "database",
    "framework", "library", "component", "architecture", "abstraction",
    "encapsulation", "polymorphism", "inheritance", "compilation", "execution",
    "debugging", "optimization", "performance", "scalability", "maintainability",
    "deployment", "integration", "authentication", "authorization", "encryption",
    "decryption", "validation", "sanitation", "rendering", "virtualization",
    "containerization", "orchestration", "dependency", "module", "package",
    "importation", "exportation", "interface", "protocol", "transmission",
    "bandwidth", "latency", "throughput", "concurrency", "parallelism",
    "thread", "process", "memory", "allocation", "garbage",
    "collector", "heap", "stack", "pointer", "reference",
    "mutation", "immutable", "dynamic", "static", "typing",
    "compiler", "interpreter", "syntax", "semantics", "lexical",
    "parsing", "tokenization", "renderingengine", "microservice", "monolith",
    "distributed", "system", "network", "topology", "routing",
    "switching", "packet", "protocolstack", "websocket", "http",
    "https", "request", "response", "endpoint", "server",
    "client", "browser", "runtime", "environment", "development",
    "production", "staging", "testing", "unittest", "integrationtest",
]


let randomWord;
let score = 0;
let time = 10;
let timeInterval;

function getRandomWord() {
    return words[Math.floor(Math.random() * words.length)];
}

function addWordToDOM() {
    randomWord = getRandomWord();
    word.innerHTML = randomWord;
}

function updateScore() {
    score++;
    scoreEl.innerHTML = score;
}

function updateTime() {
    time--;
    timeEl.innerHTML = time + "s";

    if (time === 0) {
        clearInterval(timeInterval);
        gameOver();
    }
}

function gameOver() {
    endgameEl.innerHTML = `
        <h1>Time ran out</h1>
        <p>Your final score is ${score}</p>
        <button onclick="location.reload()">Reload</button>
    `;

    endgameEl.style.display = "flex";

    // SEND SCORE TO BACKEND
    fetch("/save-score", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            game_name: "speed typer",
            score: score
        })
    });


}

text.addEventListener("input", (e) => {
    if (e.target.value === randomWord) {
        updateScore();
        addWordToDOM();

        e.target.value = "";
    }
});

startBtn.addEventListener("click", () => {
    addWordToDOM();

    text.focus();

    timeInterval = setInterval(updateTime, 1000);

    startBtn.style.display = "none";
});
