const questions = [
    {
        question: "Which tag is used to create a hyperlink in HTML?",
        options: ["a", "link", "href", "hyperlink"],
        answer: "a"
    },
    {
        question: "Which attribute specifies the image source in the <img> tag?",
        options: ["src", "href", "alt", "link"],
        answer: "src"
    },
    {
        question: "Which HTML tag is used to create an unordered list?",
        options: ["ul", "ol", "li", "list"],
        answer: "ul"
    },
    {
        question: "What does HTML stand for?",
        options: [
            "Hyperlinks and Text Markup Language",
            "Home Tool Markup Language",
            "Hyper Text Markup Language",
            "Hyper Tool Markup Language"
        ],
        answer: "Hyper Text Markup Language"
    },
    {
        question: "Which property is used to change the background color in CSS?",
        options: ["background-color", "color", "bgcolor", "background"],
        answer: "background-color"
    },
    {
        question: "Which CSS property controls the text size?",
        options: ["text-style", "font-size", "text-size", "font-style"],
        answer: "font-size"
    },
    {
        question: "Which symbol is used for comments in CSS?",
        options: ["// comment //", "<!-- comment -->", "/* comment */", "# comment"],
        answer: "/* comment */"
    },
    {
        question: "Which keyword is used to declare a variable in JavaScript?",
        options: ["var", "int", "string", "float"],
        answer: "var"
    },
    {
        question: "Which method is used to write a message in the console in JavaScript?",
        options: ["console.write()", "console.log()", "log.console()", "write.console()"],
        answer: "console.log()"
    },
    {
        question: "Which event occurs when a user clicks on an HTML element?",
        options: ["onmouseclick", "onmouseover", "onclick", "onchange"],
        answer: "onclick"
    }
];
let currentQuestionIndex = 0;
let score = 0;
let userAnswers = new Array(questions.length).fill(null);

function displayQuestion() {
    const questionObj = questions[currentQuestionIndex];
    const questionText = document.getElementById('question-text');
    const optionsContainer = document.getElementById('options-container');

    questionText.textContent = questionObj.question;
    optionsContainer.innerHTML = '';

    questionObj.options.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option;

        if (userAnswers[currentQuestionIndex] === option) {
    button.classList.add('selected');
}


        button.addEventListener('click', () => {
            userAnswers[currentQuestionIndex] = option;
            displayQuestion();
        });

        optionsContainer.appendChild(button);
    });

    document.getElementById('prev-button').style.display = currentQuestionIndex === 0 ? 'none' : 'inline';
    document.getElementById('next-button').style.display = currentQuestionIndex === questions.length - 1 ? 'none' : 'inline';
    document.getElementById('submit-button').style.display = currentQuestionIndex === questions.length - 1 ? 'inline' : 'none';
}

function showResult() {
    score = 0;
    for (let i = 0; i < questions.length; i++) {
        if (userAnswers[i] === questions[i].answer) {
            score++;
        }
    }

    document.getElementById('quiz-container').style.display = 'none';
    document.getElementById('result-container').style.display = 'block';
    document.getElementById('result-text').textContent = `Quiz Finished! Your score: ${score} / ${questions.length}`;
}

document.getElementById('prev-button').addEventListener('click', () => {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        displayQuestion();
    }
});

document.getElementById('next-button').addEventListener('click', () => {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        displayQuestion();
    }
});

document.getElementById('submit-button').addEventListener('click', () => {
    showResult();
});

document.getElementById('restart-button').addEventListener('click', () => {
    currentQuestionIndex = 0;
    score = 0;
    userAnswers = new Array(questions.length).fill(null);
    document.getElementById('result-container').style.display = 'none';
    document.getElementById('quiz-container').style.display = 'block';
    displayQuestion();
});

window.addEventListener('load', () => {
    displayQuestion();
});
