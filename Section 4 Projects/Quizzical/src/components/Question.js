import React from "react";

export default function Question(props) {
  return (
    <section className="question">
      <h2>{props.questionText}</h2>
      <ul className="question__answers">
        {props.answers[0] && (
          <li>
            <button
              style={{
                backgroundColor: props.gameActive
                  ? props.selectedAnswer === props.answers[0]
                    ? "blue"
                    : "#fff"
                  : props.correctAnswer === props.answers[0]
                  ? "green"
                  : "#fff",
                color: props.gameActive
                  ? props.selectedAnswer === props.answers[0]
                    ? "#fff"
                    : "black"
                  : props.correctAnswer === props.answers[0]
                  ? "#fff"
                  : "black",
              }}
              className="question__answer"
              onClick={props.selectAnswerOne}
            >
              {props.answers[0]}
            </button>
          </li>
        )}
        {props.answers[1] && (
          <li>
            <button
              style={{
                backgroundColor: props.gameActive
                  ? props.selectedAnswer === props.answers[1]
                    ? "blue"
                    : "#fff"
                  : props.correctAnswer === props.answers[1]
                  ? "green"
                  : "#fff",
                color: props.gameActive
                  ? props.selectedAnswer === props.answers[1]
                    ? "#fff"
                    : "black"
                  : props.correctAnswer === props.answers[1]
                  ? "#fff"
                  : "black",
              }}
              className="question__answer"
              onClick={props.selectAnswerTwo}
            >
              {props.answers[1]}
            </button>
          </li>
        )}
        {props.answers[2] && (
          <li>
            <button
              className="question__answer"
              style={{
                backgroundColor: props.gameActive
                  ? props.selectedAnswer === props.answers[2]
                    ? "blue"
                    : "#fff"
                  : props.correctAnswer === props.answers[2]
                  ? "green"
                  : "#fff",
                color: props.gameActive
                  ? props.selectedAnswer === props.answers[2]
                    ? "#fff"
                    : "black"
                  : props.correctAnswer === props.answers[2]
                  ? "#fff"
                  : "black",
              }}
              onClick={props.selectAnswerThree}
            >
              {props.answers[2]}
            </button>
          </li>
        )}
        {props.answers[3] && (
          <li>
            <button
              className="question__answer"
              style={{
                backgroundColor: props.gameActive
                  ? props.selectedAnswer === props.answers[3]
                    ? "blue"
                    : "#fff"
                  : props.correctAnswer === props.answers[3]
                  ? "green"
                  : "#fff",
                color: props.gameActive
                  ? props.selectedAnswer === props.answers[3]
                    ? "#fff"
                    : "black"
                  : props.correctAnswer === props.answers[3]
                  ? "#fff"
                  : "black",
              }}
              onClick={props.selectAnswerFour}
            >
              {props.answers[3]}
            </button>
          </li>
        )}
      </ul>
      <hr></hr>
    </section>
  );
}
