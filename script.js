const quizData = [
    {
        question: 'Independent day of Bangladesh?',
        a: '1st April',
        b: '26th March',
        c: '16th December',
        d: '1st June',
        corrcet: 'b'
    }, {
        question: 'What does WWW means?',
        a: 'World Wide Web',
        b: 'World Web Wide',
        c: 'Web Wide World',
        d: 'Web World Wide',
        corrcet: 'a'
    }, {
        question: 'Which one is not a programming language?',
        a: 'Java',
        b: 'C++',
        c: 'HTML',
        d: 'Python',
        corrcet: 'c'
    }, {
        question: 'Independent day of Bangladesh?',
        a: '1st April',
        b: '26th March',
        c: '16th December',
        d: '1st June',
        corrcet: 'b'
    }, {
        question: 'What does WWW means?',
        a: 'World Wide Web',
        b: 'World Web Wide',
        c: 'Web Wide World',
        d: 'Web World Wide',
        corrcet: 'a'
    }, {
        question: 'Which one is not a programming language?',
        a: 'Java',
        b: 'C++',
        c: 'HTML',
        d: 'Python',
        corrcet: 'c'
    }
];


let currentQuestion = 0;
let score = 0;


const question__element = document.getElementById("question");
const a__text = document.getElementById("a__text");
const b__text = document.getElementById("b__text");
const c__text = document.getElementById("c__text");
const d__text = document.getElementById("d__text");
const submitBtn = document.getElementById('submit');
const result = document.getElementById("result");

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuestion];
    question__element.innerHTML = currentQuizData.question;

    a__text.innerText = currentQuizData.a;
    b__text.innerText = currentQuizData.b;
    c__text.innerText = currentQuizData.c;
    d__text.innerText = currentQuizData.d;
}

function getSelected(){
    const answerEls = document.querySelectorAll(".answer");
    
    let answer = undefined;
    
    answerEls.forEach((answerEl) => {
        if(answerEl.checked){
             answer = answerEl.id;
        }
    }); 

    return answer;
}

function deselectAnswers(){
    const answerEls = document.querySelectorAll(".answer");

    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    const answer = getSelected();

    if(answer){
        if(answer === quizData[currentQuestion].corrcet){
            score++;
        }

        currentQuestion++;
        if (currentQuestion < quizData.length) {
            loadQuiz();
        } else {
            alert("You got "+score);
        } 

        result.innerHTML = `<h2>You answerd correctly ${score}/
        ${currentQuestion} questions.</h2>`
    }
});