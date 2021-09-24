import Congrats from '../src/components/congrats';
import GuessedWords from '../src/components/gussedWord';

function App() {
  return (
    <div className="container" data-test="component-app">
      <h1>Jotto</h1>
      <Congrats success={true} />
      <GuessedWords
        guessedWords={[
          {
            guessedWord: 'train',
            letterMatchCount: 3,
          },
          {
            guessedWord: 'party',
            letterMatchCount: 1,
          },
          {
            guessedWord: 'agile',
            letterMatchCount: 2,
          },
        ]}
      />
    </div>
  );
}

export default App;
