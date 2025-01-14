// Haal de naam van de speler op uit localStorage en toon deze in de welkomstboodschap
document.getElementById("player-name").innerText = localStorage.getItem("username");

let currentCategory = '';
let currentQuestionIndex = 0;
let score = 0;
let timer;
let timeLeft = 30;

const questions = {
  arts: [
    { question: "Wie schilderde de Mona Lisa?", answers: ["Van Gogh", "Da Vinci", "Picasso"], correct: 1 },
    { question: "Wat is de geboorteplaats van Rembrandt?", answers: ["Leiden", "Amsterdam", "Rotterdam"], correct: 0 },
    { question: "Welke stijl gebruikte Monet?", answers: ["Impressionisme", "Barok", "Renaissance"], correct: 0 },
    { question: "Welke kunstenaar schilderde de Sterrennacht?", answers: ["Van Gogh", "Picasso", "Da Vinci"], correct: 0 },
    { question: "Wat is het beroemde schilderij van Edvard Munch?", answers: ["De Schreeuw", "Guernica", "De Nachtwacht"], correct: 0 },
    { question: "Wie maakte de David?", answers: ["Donatello", "Michelangelo", "Raphael"], correct: 1 },
    { question: "Welke kunstenaar was de oprichter van het kubisme?", answers: ["Matisse", "Picasso", "Monet"], correct: 1 },
  ],
  voetbal: [
    { question: "Wie won het WK 2018?", answers: ["Duitsland", "Frankrijk", "Brazilië"], correct: 1 },
    { question: "Wie is de topscorer aller tijden van de Premier League?", answers: ["Wayne Rooney", "Sergio Agüero", "Harry Kane"], correct: 0 },
    { question: "Wie is de all-time topscorer van het Nederlands Elftal?", answers: ["Robin van Persie", "Arjen Robben", "Ruud van Nistelrooy"], correct: 0 },
    { question: "Wie won de Ballon d'Or in 2020?", answers: ["Lionel Messi", "Cristiano Ronaldo", "Robert Lewandowski"], correct: 2 },
    { question: "Wie is de aanvoerder van het Franse nationale elftal?", answers: ["Paul Pogba", "Kylian Mbappé", "Hugo Lloris"], correct: 2 },
    { question: "Waar werd het eerste WK gehouden?", answers: ["Brazilië", "Uruguay", "Italië"], correct: 1 },
    { question: "Welke club heeft de meeste Champions League titels?", answers: ["Barcelona", "Real Madrid", "AC Milan"], correct: 1 },
  ],
  eten: [
    { question: "Wat is een hoofdingrediënt in guacamole?", answers: ["Tomaat", "Avocado", "Uien"], correct: 1 },
    { question: "Welke kaas is typisch Nederlands?", answers: ["Brie", "Gouda", "Cheddar"], correct: 1 },
    { question: "Wat is de hoofdingrediënt van sushi?", answers: ["Rijst", "Vis", "Wortelen"], correct: 0 },
    { question: "Wat is de naam van het gerecht met pasta, gehaktballen en tomatensaus?", answers: ["Spaghetti", "Lasagne", "Bolognese"], correct: 0 },
    { question: "Waar komt de pizza vandaan?", answers: ["Frankrijk", "Italië", "Griekenland"], correct: 1 },
    { question: "Wat is de belangrijkste smaakmaker in tzatziki?", answers: ["Yoghurt", "Knoflook", "Olijven"], correct: 1 },
    { question: "Wat is de belangrijkste ingrediënt in hummus?", answers: ["Tahini", "Kikkererwten", "Knoflook"], correct: 1 },
  ],
  games: [
    { question: "Wat is het populairste videospel?", answers: ["Minecraft", "Fortnite", "League of Legends"], correct: 0 },
    { question: "Wie ontwikkelde de game 'Super Mario'?", answers: ["Nintendo", "Sony", "Microsoft"], correct: 0 },
    { question: "Welke game heeft de meeste verkochte exemplaren wereldwijd?", answers: ["Minecraft", "The Sims", "Grand Theft Auto V"], correct: 0 },
    { question: "Welke game heeft de meeste spelers ter wereld?", answers: ["Fortnite", "League of Legends", "Apex Legends"], correct: 0 },
    { question: "In welk jaar werd de PlayStation 5 uitgebracht?", answers: ["2021", "2020", "2019"], correct: 1 },
    { question: "Welke game wordt vaak afgekort als 'LoL'?", answers: ["League of Legends", "Little Nightmares", "Lords of Legends"], correct: 0 },
    { question: "Welke van de volgende games is ontwikkeld door Rockstar Games?", answers: ["GTA V", "Far Cry", "Assassin's Creed"], correct: 0 },
  ],
  auto: [
    { question: "Wie is de oprichter van Tesla?", answers: ["Bill Gates", "Elon Musk", "Steve Jobs"], correct: 1 },
    { question: "Wat is de snelste productieauto ter wereld?", answers: ["Bugatti Chiron", "Tesla Model S", "Ferrari LaFerrari"], correct: 0 },
    { question: "Welke auto wordt vaak geassocieerd met snelheid en luxe?", answers: ["BMW", "Porsche", "Tesla"], correct: 1 },
    { question: "Wat is de naam van het eerste elektrische model van Porsche?", answers: ["Taycan", "Cayman", "911"], correct: 0 },
    { question: "Welke automaker maakt de F150?", answers: ["Ford", "Chevrolet", "Dodge"], correct: 0 },
    { question: "Welke auto is populair vanwege zijn robuustheid in de woestijn?", answers: ["Land Rover", "Toyota Land Cruiser", "Jeep"], correct: 1 },
    { question: "Welke automaker is bekend om de 'Civic'?", answers: ["Honda", "Ford", "Chevrolet"], correct: 0 },
  ]
};

function startQuiz(category) {
  currentCategory = category;
  currentQuestionIndex = 0;
  score = 0;
  timeLeft = 30;
  showQuestion();
}

function showQuestion() {
  const question = questions[currentCategory][currentQuestionIndex];
  document.getElementById('question').innerText = question.question;

  const answersContainer = document.getElementById('answers');
  answersContainer.innerHTML = '';

  question.answers.forEach((answer, index) => {
    const button = document.createElement('button');
    button.innerText = answer;
    button.onclick = () => checkAnswer(index);
    answersContainer.appendChild(button);
  });

  document.getElementById('quiz-options').style.display = 'none';
  document.getElementById('quiz-game').style.display = 'block';

  startTimer();
}

function startTimer() {
  timer = setInterval(function () {
    timeLeft--;
    document.getElementById('timer').innerText = "Tijd: " + timeLeft + " seconden";
    if (timeLeft <= 0) {
      clearInterval(timer);
      nextQuestion();
    }
  }, 1000);
}

function checkAnswer(index) {
  const question = questions[currentCategory][currentQuestionIndex];
  if (index === question.correct) {
    score++;
  }
  clearInterval(timer);
  nextQuestion();
}

function nextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions[currentCategory].length) {
    showQuestion();
  } else {
    localStorage.setItem('score', score);
    window.location.href = 'results.html';
  }
}
