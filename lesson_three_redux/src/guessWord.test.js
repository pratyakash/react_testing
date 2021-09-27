import { mount } from 'enzyme';
import { Provider } from 'react-redux';

import { findByTestAttr, checkProps, storeFactory } from '../test/utils';

import App from './App';

jest.mock('./actions');

const setup = (state = {}) => {
	const store = storeFactory(state);

	const wrapper = mount(
		<Provider store={store}>
			<App />
		</Provider>);

	//add value to input box
	const inputBox = findByTestAttr(wrapper, 'input-box');

	inputBox.simulate('change', { target: { value: 'train' } });

	const submitButton = findByTestAttr(wrapper, 'submit-button');

	submitButton.simulate('click', { preventDefault() { } });

	return wrapper;
};

describe('no words is guessed', () => {
	let wrapper;

	beforeEach(() => {
		wrapper = setup({
			secretWord: 'party',
			success: false,
			guessedWords: [],
		});
	});

	test('create guessed word table with one row', () => {
		const guessedWordNodes = findByTestAttr(wrapper, 'guessed-word');

	});
});

describe('some words are guessed', () => {
	let wrapper;

	beforeEach(() => {
		wrapper = setup({
			secretWord: 'party',
			success: false,
			guessedWords: [
				{
					guessedWord: 'train',
					letterMatchCount: 1,
				},
			],
		});
	});

	test('add rows', () => {
		const guessedWordNodes = findByTestAttr(wrapper, 'guessed-word');

		expect(guessedWordNodes.length).toBe(2);
	});
});

describe('secret word is guessed', () => {
	let wrapper;

	beforeEach(() => {
		wrapper = setup({
			secretWord: 'party',
			success: false,
			guessedWords: [
				{
					guessedWord: 'train',
					letterMatchCount: 1,
				},
			],
		});

		const inputBox = findByTestAttr(wrapper, 'input-box');

		inputBox.simulate('change', { target: { value: 'party' } });

		const submitButton = findByTestAttr(wrapper, 'submit-button');

		submitButton.simulate('click', { preventDefault() { } });
	});

	test('add row to guessed word table', () => {
		const guessedWordNodes = findByTestAttr(wrapper, 'guessed-word');
		expect(guessedWordNodes.length).toBe(3);
	});

	test('display congrats component', () => {
		const congrats = findByTestAttr(wrapper, 'component-congrats');

		expect(congrats.text().length).toBeGreaterThan(0);
	});

	test('does not display input component contents', () => {
		const inputBox = findByTestAttr(wrapper, 'input-box');

		expect(inputBox.exists()).toBe(false);

		const submitButton = findByTestAttr(wrapper, 'submit-button');

		expect(submitButton.exists()).toBe(false);
	});
});
