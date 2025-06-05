import Player from "./components/Player";
function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player initialName="Player1" symbol="x" />
          <Player initialName="Player2" symbol="O" />
        </ol>
        PLAYERS GAME BOARD
      </div>
    </main>
  );
}

export default App;
