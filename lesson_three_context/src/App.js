import { useEffect } from 'react';

import Congrats from '../src/components/congrats';
import GuessedWords from './components/gussedWords';
import CustomInput from './components/input';

import { getSecretWord } from './actions';


function App() {
	const success = false;
	const secretWord = 'party';
	const guessedWord = [];

	/* 
	[
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
		  ]
	*/

	useEffect(() => {
		getSecretWord();
	}, [])

	return (
		<div className="container" data-test="component-app">
			<h1>Jotto</h1>
			<Congrats success={success} />
			<CustomInput success={success} secretWord={secretWord} />
			<GuessedWords guessedWords={guessedWord} />
		</div>
	);
}

export default App;
