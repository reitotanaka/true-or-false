const titleText = document.getElementById('title');
const questionText = document.getElementById('question');

let sum;
let correctAnswer;

const questions = [
    {question: '小説「ハリーポッター」シリーズの作者は男である。○か×か。', answer: 0},
    {question: 'ポケモンと妖怪ウォッチ、先にゲームが発売されたのは妖怪ウォッチである。○か×か。', answer: 0},
    {question: 'アニメ「クレヨンしんちゃん」の最初の映画は「アクション仮面VSハイグレ魔王」である。○か×か。', answer: 1},
    {question: '「ちびまる子ちゃん」の物語の舞台は東京である。○か×か。', answer: 0},
    {question: 'ポケモンのソードシールドの時のトゲデマルの図鑑No.は777である。○か×か。', answer: 1}
]

function writeQuestion() {
    titleText.textContent = `第${sum + 1}問`;
    questionText.textContent = questions[sum].question;
}

function onAnswer(ans) {
    if (ans === questions[sum].answer) {
        console.log('正解');
        correctAnswer++;
    } else {
        console.log('不正解');
    }

    sum++;

    if (sum >= questions.length) {
        alert(`${questions.length}問中${correctAnswer}問正解です`);
        onStart();
    } else {
        writeQuestion();
    }
}

function onStart() {
    sum = 0;
    correctAnswer = 0;
    writeQuestion();
}

onStart()

function audio() {
    document.getElementById('btn_audio').currentTime = 0;
    document.getElementById('btn_audio').play();
}