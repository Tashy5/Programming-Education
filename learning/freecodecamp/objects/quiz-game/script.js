let questions = [
    {
        category: "Space",
        question: "How many planets are in Earth's solar system?",
        choices: ["8","2","5"],
        answer: "8"
    },
        {
        category: "History",
        question: "When did World War 2 end?",
        choices: ["1890","1915","1945"],
        answer: "1945"
    },
        {
        category: "Biology",
        question: "How many limbs do mammals have?",
        choices: ["4","2","Neither"],
        answer: "Neither"
    },
        {
        category: "Technology",
        question: "What does CPU stand for?",
        choices: ["Credit Proccessing Unit","Computer Processing Unit","Central Proccessing Unit"],
        answer: "Central Proccessing Unit"
    },
        {
        category: "Sport",
        question: "What sport did Andy Murray play proffessionally?",
        choices: ["Football","Golf","Tennis"],
        answer: "Tennis"
    }
]

function getRandomQuestion(questions) {
    let randomQ = Math.floor(Math.random() * questions.length);
    return questions[randomQ];
}

function getRandomComputerChoice(choices) {
    let ranNum = Math.floor(Math.random() * choices.length);
    return choices[ranNum];
}

function getResults(questions, choices) {
if (choices === questions.answer) {
        return "The computer's choice is correct!";
    } else {
        return `The computer's choice is wrong. The correct answer is: ${questions.answer}`
    }
}