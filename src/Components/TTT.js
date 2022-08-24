import React, { useState } from "react";
import Header from "./Header";
import "./TTT.css";

const TTT = () => {
  const [turn, setTurn] = useState("X");
  const [cells, setCells] = useState(Array(9).fill(""));
  const [winner, setWinner] = useState();

  const handleRestart = () => {
    setCells(Array(9).fill(""));
    setWinner(null);
    setTurn("X");
  };

  const checkForWinner = (cells) => {
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
      // console.log(element);
      if (
        cells[element[0]] === "" ||
        cells[element[1]] === "" ||
        cells[element[2]] === ""
      ) {
        //do nothing
      } else if (
        cells[element[0]] === cells[element[1]] &&
        cells[element[0]] === cells[element[2]]
      ) {
        setWinner(cells[element[0]]);
        setTurn("");
      }
    });
  };

  const handleClick = (num) => {
    //make sure can't click the cell which has already X/O there
    if (cells[num] !== "") {
      alert("Already clicked");
      return;
    }

    // when winner is found, then stop the game
    if (winner) {
      alert("Game over!");
      return;
    }

    if (turn === "X") {
      cells[num] = "X";
      setTurn("O");
    } else {
      cells[num] = "0";
      setTurn("X");
    }

    checkForWinner(cells);
    setCells(cells);
  };

  const Cell = ({ num }) => (
    <td onClick={() => handleClick(num)}>{cells[num]}</td>
  );

  return (
    <div className="container">
      <Header winner={winner} turn={turn} onClick={handleRestart} />
      <table>
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
