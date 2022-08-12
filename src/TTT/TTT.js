import React, { useState } from "react";
import "./TTT.css";

const TTT = () => {
  const [turn, setTurn] = useState("x");
  const [cells, setCells] = useState(Array(9).fill(""));
  const [winner, setWinner] = useState();

  const checkForWinner = (squares) => {
    let lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    lines.forEach((element) => {
      console.log(element);
      if (
        squares[element[0]] === "" ||
        squares[element[1]] === "" ||
        squares[element[2]] === ""
      ) {
        //do nothing
      } else if (
        squares[element[0]] === squares[element[1]] &&
        squares[element[0]] === squares[element[2]]
      ) {
        setWinner(squares[element[0]]);
      }
    });
  };

  const handleClick = (num) => {
    if (cells[num] !== "") {
      alert("Already clicked");
      return;
    }
    const squares = [...cells];

    if (turn === "x") {
      squares[num] = "x";
      setTurn("o");
    } else {
      squares[num] = "0";
      setTurn("x");
    }

    checkForWinner(squares);
    setCells(squares);
  };

  const Cell = ({ num }) => {
    return <td onClick={() => handleClick(num)}>{cells[num]}</td>;
  };

  return (
    <div className="container">
      <table>
        Turn: {turn}
        {winner && (
          <>
            <p>{winner} is the winner!</p>
            <button></button>
          </>
        )}
        <tbody>
          <tr>
            <Cell num={0} />
            <Cell num={1} />
            <Cell num={2} />
          </tr>
          <tr>
            <Cell num={3} />
            <Cell num={4} />
            <Cell num={5} />
          </tr>
          <tr>
            <Cell num={6} />
            <Cell num={7} />
            <Cell num={8} />
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TTT;
