var data = [
  {
    question: "who is mark zuckerberg",
    a: "moul face",
    b: "moul l7out",
    c: "moul ldjaj",
    d: "moul amazon",
    correct: "moul face",
  },
  {
    question: "where is morocco ",
    a: "australia",
    b: "mars",
    c: "europe",
    d: "mama africa",
    correct: "mama africa",
  },
  {
    question: "where is france ",
    a: "australia",
    b: "mars",
    c: "europe",
    d: "mama africa",
    correct: "europe",
  },
];
console.log(data.length);
const a = document.getElementById("a");
console.log(a.nextElementSibling.innerText);
const question = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submit = document.getElementById("submit");
let currentQuestion = 0;
let score = 0;
loadQuiz();
function loadQuiz() {
  if (currentQuestion < data.length) {
    currentQuizzdata = data[currentQuestion];
    question.innerText = currentQuizzdata.question;
    a_text.innerText = currentQuizzdata.a;
    b_text.innerText = currentQuizzdata.b;
    c_text.innerText = currentQuizzdata.c;
    d_text.innerText = currentQuizzdata.d;
  } else {
    window.alert("baraka 3lek jbti " + score + "/" + data.length);
    score = 0;
    currentQuestion = 0;
    loadQuiz();
  }
}
submit.addEventListener("click", function myFunc() {
  var radios = document.getElementsByName("answer");
  for (var radio of radios) {
    if (radio.checked) {
      var ans = radio.nextElementSibling.innerText;
      radio.checked = false;
    }
  }
  if (ans != undefined) {
    console.log(ans);
    console.log(data[currentQuestion].correct);
    if (ans == data[currentQuestion].correct) {
      score++;
    }
  } else {
    window.alert("3zel chi 7aja asa7bi");
    currentQuestion--;
  }
  currentQuestion++;
  loadQuiz();
});
