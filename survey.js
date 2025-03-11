const questions = [
  {
      question: "How are you feeling today?",
      options: {
          "Good": "What made your day better?",
          "Bad": "What's been bothering you?",
          "Sad": "What’s been on your mind?",
          "Depressed": "Why are you feeling this way?"
      }
  },
  {
      question: "What has helped you stay positive?",
      options: ["Spending time with loved ones", "Exercise", "Meditation", "Listening to music"]
  },
  {
      question: "Have you been getting enough rest?",
      options: ["Yes", "No", "Sometimes"]
  }
];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
  const surveyContainer = document.getElementById('survey-container');
  const current = questions[currentQuestion];
  
  surveyContainer.innerHTML = `
      <div class="question">${current.question}</div>
      ${Object.keys(current.options).map(option => 
          `<div class="option" onclick="selectOption(this, '${option}')">${option}</div>`).join('')}
  `;
}

function selectOption(element, choice) {
  document.querySelectorAll('.option').forEach(opt => opt.classList.remove('selected'));
  element.classList.add('selected');

  score += choice === "Good" ? 10 :
           choice === "Bad" ? 5 :
           choice === "Sad" ? 3 : 1;

  if (questions[currentQuestion].options[choice]) {
      questions.splice(currentQuestion + 1, 0, {
          question: questions[currentQuestion].options[choice],
          options: ["Work stress", "Relationship issues", "Personal struggles", "Other"]
      });
  }
}

function nextQuestion() {
  if (currentQuestion < questions.length - 1) {
      currentQuestion++;
      loadQuestion();
  } else {
      submitSurvey();
  }
}

function prevQuestion() {
  if (currentQuestion > 0) {
      currentQuestion--;
      loadQuestion();
  }
}

function submitSurvey() {
  document.getElementById('survey-container').classList.add('hidden');
  document.getElementById('result-container').classList.remove('hidden');

  const finalScore = Math.min(100, score);
  document.getElementById('score').innerText = finalScore;

  const ctx = document.getElementById('mentalHealthGraph').getContext('2d');
  new Chart(ctx, {
      type: 'bar',
      data: {
          labels: ['Your Score'],
          datasets: [{
              label: 'Mental Health Score',
              data: [finalScore],
              backgroundColor: '#4CAF50'
          }]
      }
  });

  const recommendations = document.getElementById('recommendations');
  recommendations.innerHTML = finalScore > 70
      ? "🌟 You're doing great! Maintain your routine and consider yoga or meditation to stay balanced."
      : finalScore > 40
      ? "😊 Focus on mindfulness techniques and talk to someone you trust."
      : "😟 Consider consulting with a professional. Breathing exercises and Ayurveda may also help.";

  score = 0;  // Reset score for future surveys
}

window.onload = loadQuestion;
