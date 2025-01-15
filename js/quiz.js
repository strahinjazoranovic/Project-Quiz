document.body.addEventListener("click", (event) => {
  const buttonId = event.target.id;

  if (["kanye", "travisscott", "secret", "kendricklamar", "future", "playboicarti"].includes(buttonId)) {
  
    if (buttonId === "kanye") kanyeQuiz();
    if (buttonId === "travisscott") travisQuiz();
    if (buttonId === "secret") secretQuiz();
    if (buttonId === "kendricklamar") kendrickQuiz();
    if (buttonId === "future") futureQuiz();
    if (buttonId === "playboicarti") playboiQuiz();

    event.target.style.display = "none";
  }
});

function playboiQuiz(){
    const questions = [
        {
          question: "Hoe heet Playboi Carti in het echt?", // Vraag 1
          answers: [
            { test: "Jordan Terrell Carter", correct: true },   // Juist antwoord
            { test: "Carter Pierre Williams", correct: false },  // Onjuist antwoord
            { test: "Jonathan Taylor Carter", correct: false },  // Onjuist antwoord
          ]
        },
        {
          question: "Wat is de naam van Playboi Carti's debuutmixtape?", // Vraag 2
          answers: [
            { test: "Die Lit", correct: false },
            { test: "Playboi Carti", correct: true }, // Juist antwoord
            { test: "Whole Lotta Red", correct: false },
          ]
        },
        {
          question: "Met welk nummer brak Playboi Carti door?", // Vraag 3
          answers: [
            { test: "Magnolia", correct: true },  // Juist antwoord
            { test: "Shoota", correct: false },
            { test: "Location", correct: false },
          ]
        },
        {
          question: "Welke producer werkte veel samen met Playboi Carti?", // Vraag 4
          answers: [
            { test: "Metro Boomin", correct: false },
            { test: "Pierre Bourne", correct: true },  // Juist antwoord
            { test: "Zaytoven", correct: false },
          ]
        },
        {
          question: "Wat is de naam van Playboi Carti's tweede studioalbum?", // Vraag 5
          answers: [
            { test: "Die Lit", correct: false },
            { test: "Whole Lotta Red", correct: true },  // Juist antwoord
            { test: "Vamp Life", correct: false },
          ]
        },
      ];
      
      // Elementen voor het weergeven van de vraag en antwoorden
      const questionElement = document.getElementById("questions");
      const answerButtons = document.getElementById("answers-buttons");
      const nextButton = document.getElementById("next-btn");
      const muziek = new Audio('sounds/seeyuh.mp3') //Dit is het geluid dat je hoort wanneer je een 10 scoort bij Playboi Carti quiz
      
      // Variabelen om de voortgang en score bij te houden
      let currentQuestionindex = 0;
      let score = 0;
      
      // Start de quiz
      function startQuiz() {
        currentQuestionindex = 0; // Stel de vraagindex in op 0 (eerste vraag)
        score = 0;  // Reset de score
        nextButton.innerHTML = "Next";  // Zet de tekst van de "Next" knop
        showQuestion();  // Laat de eerste vraag zien
      }
      
      // Functie om de vraag en de antwoordknoppen weer te geven
      function showQuestion() {
        resetstate();  // Reset de vorige antwoorden
        let currentQuestion = questions[currentQuestionindex];  // Haal de huidige vraag op
        let questionNo = currentQuestionindex + 1;  // Bereken het vraagnummer
        questionElement.innerHTML = questionNo + ". " + currentQuestion.question;  // Toon de vraag
      
        // Maak een knop voor elk antwoord
        currentQuestion.answers.forEach(answer => {
          const button = document.createElement("button");  // Maak een nieuwe knop
          button.innerHTML = answer.test;  // Zet de tekst van de knop
          button.classList.add("btn");  // Voeg de knopklasse toe
          answerButtons.appendChild(button);  // Voeg de knop toe aan de pagina
      
          // Voeg een data-attribuut toe om het correcte antwoord aan te geven
          button.dataset.correct = answer.correct ? "true" : "false";  // Als correct is waar, zet data.correct op true
          button.addEventListener("click", selectAnswer);  // Voeg een eventlistener toe aan de knop
        });
      }
      
      // Functie om de weergave van vorige vraag en antwoorden te resetten
      function resetstate() {
        nextButton.style.display = "none";  // Verberg de "Next" knop
        // Verwijderd alle antwoordknoppen van het scherm
        while (answerButtons.firstChild) {
          answerButtons.removeChild(answerButtons.firstChild);
        }
      }
      
      // Functie die wordt aangeroepen wanneer een antwoord wordt geselecteerd
      function selectAnswer(e) {
        const selectedBtn = e.target;  // Het aangeklikte antwoord
        const isCorrect = selectedBtn.dataset.correct === "true";  // Controleer of het antwoord correct is
        if (isCorrect) {
          selectedBtn.classList.add("correct");  // Voeg de klasse 'correct' toe als het juist is
          score++;  // Verhoog de score
        } else {
          selectedBtn.classList.add("incorrect");  // Voeg de klasse 'incorrect' toe als het fout is
        }
      
        // Disable alle knoppen en markeer de juiste knoppen
        Array.from(answerButtons.children).forEach(button => {
          if (button.dataset.correct === "true") {
            button.classList.add("correct");
          }
          button.disabled = true;
        });
      
        nextButton.style.display = "block";  // Toon de "Next" knop
      }
      
      // Functie om de score weer te geven
      function showScore() {
        resetstate();  // Reset de weergave
        questionElement.innerHTML = `Je scoorde ${score} van de ${questions.length}!`;  // Toon de score
        if (score === 20){
          questionElement.innerHTML = `Je scoorde ${score} van de ${questions.length}! <br> FWEEHHHHHHH HOMICIDE`;  // Toon de score
          muziek.play()
        }
        nextButton.innerHTML = "Speel opnieuw";  // Zet de tekst van de knop op "Speel opnieuw"
        nextButton.style.display = "block";  // Toon de knop
      }
      
      // Functie om de "Next" knop te verwerken
      function handleNextButton() {
        currentQuestionindex++;  // Verhoog de vraagindex
        if (currentQuestionindex < questions.length) {
          showQuestion();  // Toon de volgende vraag
        } else {
          showScore();  // Toon de score als alle vragen beantwoord zijn
        }
      }
      
      // Eventlistener voor de "Next" knop
      nextButton.addEventListener("click", () => {
        if (currentQuestionindex < questions.length) {
          handleNextButton();  // Ga naar de volgende vraag
        } else {
          startQuiz();  // Start de quiz opnieuw
        }
      });
      
      // Start de quiz bij het laden van de pagina
      startQuiz();
}
