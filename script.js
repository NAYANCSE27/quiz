const quizData = [
    {
        question: 'Independent day of Bangladesh?',
        a: '1st April',
        b: '26th March',
        c: '16th December',
        d: '1st June',
        corrcet: 'b'
    },{
        question: 'What does WWW means?',
        a: 'World Wide Web',
        b: 'World Web Wide',
        b: 'Web Wide World',
        b: 'Web World Wide',
        corrcet: 'a'
    },{
        question: 'Which one is not a programming language?',
        a: 'Java',
        b: 'C++',
        c: 'HTML',
        d: 'Python',
        corrcet: 'c'
    }
];


let currentQuestion = 0;

const question__element = document.getElementById("question");
const a__text = document.getElementById("a__text");
const b__text = document.getElementById("b__text");
const c__text = document.getElementById("c__text");
const d__text = document.getElementById("d__text");
const submitBtn = document.getElementById('submit');

loadQuiz();

function loadQuiz(){
    const currentQuizData = quizData[currentQuestion];
    question__element.innerHTML =currentQuizData.question;

    a__text.innerText = currentQuizData.a;
    b__text.innerText = currentQuizData.b;
    c__text.innerText = currentQuizData.c;
    d__text.innerText = currentQuizData.d;

    currentQuestion++;
}