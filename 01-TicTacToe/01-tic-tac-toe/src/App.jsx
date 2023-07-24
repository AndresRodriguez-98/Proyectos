import { useState } from "react";

const TURNS = {
  X: "x",
  O: "o",
};

const Square = ({ children, isSelected, updateBoard, index }) => {
  /* aca hacemos un renderizado condicional : */
  const className = `square ${isSelected ? "is-selected" : ""}`;

  const handleClick = () => {
    updateBoard(index);
  };

  return (
    <div onClick={handleClick} className="square">
      {children}
    </div>
  );
};

const WINNER_COMBOS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState(TURNS.X);
  const [winner, setWinner] = useState(null); // null es que no hay ganador y false es que hay empate.

  const checkWinner = (boardToCheck) => {
    // revisamos todas los combos ganadores para ver quien ganó
    for (const combo of WINNER_COMBOS) {
      const [a, b, c] = combo;
      if (boardToCheck[a] && boardToCheck[a] === boardToCheck[b] && boardToCheck[a] === boardToCheck[c]) {
        return boardToCheck[a];
      }
    }
    return null;
  };

  const updateBoard = (index) => {
    // no actualizamos el square si ya tiene algo:
    if (board[index] || winner) return;

    // si no tiene nada lo actualizamos:
    const newBoard = [...board]; // SIEMPRE crear un array con el valor nuevo, y laburarlo como inmutable. NUNCA hay que mutar una prop
    newBoard[index] = turn; // x u o, guarda el turno
    setBoard(newBoard); // asi hacemos que los datos de reenderizado sea algo nuevo!!!!!!!

    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTurn);

    // revisar si hay un ganador
    const newWinner = checkWinner(newBoard)
    if (newWinner){
      setWinner(newWinner)    // La actualizacion del estado es ASÍNCRONO
      alert(`El ganador es ${newWinner}`)  // por lo tanto esta alerta va a aparecer ANTES de que aparezca la ultima X u O
    }
  };

  return (
    <main className="board">
      <h1>Tic tac toe</h1>
      <section className="game">
        {board.map((_, index) => {
          return (
            <Square key={index} index={index} updateBoard={updateBoard}>
              {board[index]}
            </Square>
          );
        })}
      </section>
      <section className="turn">
        <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
      </section>
    </main>
  );
}

export default App;
