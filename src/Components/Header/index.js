const Header = ({ winner, onClick, turn }) => (
  <>
    <h1>Tic Tac Toe Game</h1>
    <p>
      {winner && <h2>{winner} is the winner!</h2>}
      <button onClick={onClick}>Reastart the game</button>
      Turn: {turn}
    </p>
  </>
);

export default Header;
