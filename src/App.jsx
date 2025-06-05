import Player from "./components/Player";
function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player name="Player1" symbol="x" />
          <Player name="Player2" symbol="O" />
        </ol>
        PLAYERS GAME BOARD
      </div>
    </main>
  );
}

export default App;
