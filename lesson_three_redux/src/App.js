import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import Congrats from '../src/components/congrats';
import GuessedWords from './components/gussedWords';
import CustomInput from './components/input';

import { getSecretWord } from './actions';


function App() {
	const success = useSelector(state => state.success);
	const guessedWords = useSelector(state => state.guessedWords);

	const secretWord = 'party';

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
			<GuessedWords guessedWords={guessedWords} />
		</div>
	);
}

export default App;
