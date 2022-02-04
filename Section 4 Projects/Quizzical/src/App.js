import React from "react";
import Question from "./components/Question";

export default function App() {
  const [questionData, setQuestionData] = React.useState([]);
  const [questions, setQuestions] = React.useState([]);
  const [gameActive, setGameActive] = React.useState(true);
  const [gameOverMessage, setGameOverMessage] = React.useState("");

  React.useEffect(async () => {
    const results = await fetch("https://opentdb.com/api.php?amount=5");
    const data = await results.json();
    setQuestionData(data.results);
  }, [gameActive]);

  //source: https://stackoverflow.com/questions/5796718/html-entity-decode
  var decodeEntities = (function () {
    // this prevents any overhead from creating the object each time
    var element = document.createElement("div");

    function decodeHTMLEntities(str) {
      if (str && typeof str === "string") {
        // strip script/html tags
        str = str.replace(/<script[^>]*>([\S\s]*?)<\/script>/gim, "");
        str = str.replace(/<\/?\w(?:[^"'>]|"[^"]*"|'[^']*')*>/gim, "");
        element.innerHTML = str;
        str = element.textContent;
        element.textContent = "";
      }

      return str;
    }

    return decodeHTMLEntities;
  })();

  function generateQuestions() {
    setGameActive(true);
    setQuestions(() => {
      return questionData.map((data) => {
        return {
          questionText: decodeEntities(data.question),
          correctAnswer: decodeEntities(data.correct_answer),
          selectedAnswer: "",
          answers: [
            decodeEntities(data.correct_answer),
            decodeEntities(data.incorrect_answers[0]),
            decodeEntities(data.incorrect_answers[1]),
            decodeEntities(data.incorrect_answers[2]),
          ],
        };
      });
    });
    shuffleAnswers();
  }

  //source: https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
  function shuffle(array) {
    let currentIndex = array.length,
      randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  }

  function shuffleAnswers() {
    setQuestions((oldQuestions) => {
      return oldQuestions.map((question) => {
        return { ...question, answers: shuffle(question.answers) };
      });
    });
  }

  function selectAnswer(question, answer) {
    setQuestions((oldQuestions) => {
      return oldQuestions.map((oldQuestion) => {
        return oldQuestion.questionText === question
          ? { ...oldQuestion, selectedAnswer: answer }
          : oldQuestion;
      });
    });
  }

  function checkAnswers() {
    let correctAnswerCount = 0;
    questions.forEach((question) => {
      question.correctAnswer === question.selectedAnswer &&
        correctAnswerCount++;
    });

    setGameOverMessage(`You got ${correctAnswerCount}/5 correct`);

    setGameActive(false);
  }

  const questionsEl = questions.map((question, index) => {
    return (
      <Question
        key={index + 1}
        questionText={question.questionText}
        correctAnswer={question.correctAnswer}
        selectedAnswer={question.selectedAnswer}
        correctAnswer={question.correctAnswer}
        answers={question.answers}
        selectAnswerOne={() => {
          selectAnswer(question.questionText, question.answers[0]);
        }}
        selectAnswerTwo={() => {
          selectAnswer(question.questionText, question.answers[1]);
        }}
        selectAnswerThree={() => {
          selectAnswer(question.questionText, question.answers[2]);
        }}
        selectAnswerFour={() => {
          selectAnswer(question.questionText, question.answers[3]);
        }}
        gameActive={gameActive}
      />
    );
  });

  return (
    <main>
      {!questionsEl.length && (
        <div className="start-screen">
          <h1>Quizzical</h1>
          <p>Prepare to answer 5 general knowldedge questions!</p>
          <button onClick={generateQuestions} className="start__btn">
            Start Quiz
          </button>
        </div>
      )}
      {questionsEl}
      {!gameActive && <p className="game-over-msg">{gameOverMessage}</p>}
      {questions.every((question) => question.selectedAnswer) && (
        <button
          className="check-btn"
          onClick={gameActive ? checkAnswers : generateQuestions}
        >
          {gameActive ? "Check Answers" : "New Game"}
        </button>
      )}
    </main>
  );
}
