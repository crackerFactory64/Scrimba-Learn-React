import React from "react";
import Die from "./components/Die";

export default function App() {
  const [dice, setDice] = React.useState(allNewDice);
  const [tenzies, setTenzies] = React.useState(false);

  React.useEffect(() => {
    const allHeld = dice.every((die) => die.isHeld);
    const allSame = dice.every((die) => die.value === dice[0].value);
    if (allHeld && allSame) {
      setTenzies(true);
    }
  }, dice);

  function allNewDice() {
    const diceArr = [];
    for (let i = 0; i < 10; i++) {
      diceArr.push({
        value: Math.ceil(Math.random() * 6),
        isHeld: false,
        id: i + 1,
      });
    }

    return diceArr;
  }

  function holdDie(id) {
    setDice((oldDice) => {
      return oldDice.map((die) => {
        return die.id === id ? { ...die, isHeld: !die.isHeld } : die;
      });
    });
  }

  function rollDice() {
    !tenzies
      ? setDice((oldDice) => {
          return oldDice.map((die) => {
            return die.isHeld
              ? die
              : { ...die, value: Math.ceil(Math.random() * 6) };
          });
        })
      : setDice(allNewDice);
    setTenzies(false);
  }

  const diceEl = dice.map((die, index) => {
    return (
      <Die
        key={index + 1}
        id={die.id}
        value={die.value}
        isHeld={die.isHeld}
        holdDie={() => holdDie(die.id)}
      />
    );
  });

  const styles = { visibility: tenzies ? "visible" : "hidden" };

  return (
    <main>
      <p style={styles}>Congratulations!</p>
      <h1>Tenzies</h1>
      <p>
        Win the game by getting all the dice to match. <br></br> Click on a die
        to hold that die's value.
      </p>
      <div className="dice-container">{diceEl}</div>
      <button className="roll-btn" onClick={rollDice}>
        {tenzies ? "Restart" : "Roll"}
      </button>
    </main>
  );
}
