const cards = document.querySelectorAll(".card");
const cardContainer = document.querySelector(".card-container");
const generator = document.querySelector(".generator");
const genBtn = document.querySelector(".genBtn");
const categoryDiv = document.querySelector(".categoryDiv");
const h1 = document.querySelector("h1");

let category;

const music = [
  "Pick a random song and analyze the lyrics together.",
  "Sing karaoke together over a call.",
  "Make a playlist for each other based on a theme (e.g., 'songs that remind me of you').",
  "Try to guess each other’s favorite song from a random playlist.",
  "Listen to a podcast and discuss it after.",
];

const movies = [
  "Watch a random episode of a show you’ve never seen before.",
  "Play 'guess the movie' by describing plots in weird ways.",
  "Watch a live concert together.",
  "Do a 'bad movie night' and find the worst-rated film possible.",
  "Try watching the same movie but on mute, making up your own dialogue.",
];

const games = [
  "Play an online game together (Minecraft, Fortnite, chess, etc.).",
  "Try a 'text adventure' game where one of you narrates and the other makes choices.",
  "Have a speed-drawing competition using an online whiteboard.",
  "Solve an online escape room together.",
  "Play a quiz or trivia game about each other.",
];

const cooking = [
  "Order food for each other as a surprise.",
  "Cook the same meal while on a video call.",
  "Try eating a meal using only one hand to make it funny.",
  "Make a snack and describe it without showing it—your partner has to guess what it is.",
  "Have a coffee/tea date and rate each other’s drink choices.",
];

const active = [
  "Take a virtual tour of a museum or famous location.",
  "Go on a 'photo walk' separately and share pictures afterward.",
  "Do a mini workout challenge together (e.g., 'who can hold a plank longer?').",
  "Try a TikTok dance together and send videos of your attempts.",
  "Go outside, take pictures of things shaped like hearts, and compare them.",
];

const romantic = [
  "Write letters to each other and read them aloud.",
  "Answer '36 Questions to Fall in Love' together.",
  "Make a list of 10 things you love about each other.",
  "Describe your dream future together.",
  "Try doing a guided meditation together and talk about how it felt.",
];

cards.forEach((card) => {
  card.onclick = () => {
    category = card.getAttribute("data-category");
    cardContainer.style.display = "none";
    generator.style.display = "flex";
    categoryDiv.textContent = `Category: ${category}`;
  };
});

let prev;

// function checkPrev(num) {
//   if (num == prev) {
//     checkPrev(Math.floor(Math.random() * 5));
//   }
//   return num;
// }

genBtn.onclick = () => {
  let randomIndex = Math.floor(Math.random() * 5);
  prev = randomIndex;

  while (randomIndex == prev) {
    randomIndex = Math.floor(Math.random() * 5);
  }

  switch (category) {
    case "music":
      h1.textContent = music[randomIndex];
      break;
    case "movies":
      h1.textContent = movies[randomIndex];
      break;
    case "games":
      h1.textContent = games[randomIndex];
      break;
    case "cooking":
      h1.textContent = cooking[randomIndex];
      break;
    case "active":
      h1.textContent = active[randomIndex];
      break;
    case "romantic":
      h1.textContent = romantic[randomIndex];
      break;
  }
};
