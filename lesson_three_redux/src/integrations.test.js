import { storeFactory } from "../test/utils";
import { guessWord } from './actions';

describe('guess word action dispatcher', () => {
    const secretWord = 'party';
    const unsuccessfulGuess = 'train';

    describe('no guessed words', () => {
        let store;

        const initialState = { secretWord };

        beforeEach(() => {
            store = storeFactory(initialState);
        });

        test('update state correctly for unsuccessful guess', () => {
            store.dispatch(guessWord(unsuccessfulGuess))

            const expectedState = {
                ...initialState,
                success: false,
                guessedWords: [
                    {
                        guessedWord: unsuccessfulGuess,
                        letterMatchCount: 3
                    }
                ]
            }

            const newState = store.getState();

            expect(newState).toEqual(expectedState);
        });

        test('update state correctly for successful guess', () => {
            store.dispatch(guessWord(secretWord))

            const expectedState = {
                ...initialState,
                success: true,
                secretWord,
                guessedWords: [
                    {
                        guessedWord: secretWord,
                        letterMatchCount: 5
                    }
                ]
            }

            const newState = store.getState();

            expect(newState).toEqual(expectedState);
        });
    });

    describe('some guessed words', () => {
        const guessedWords = [
            {
                guessedWord: 'agile',
                letterMatchCount: 1
            }
        ]

        const initialState = { guessedWords, secretWord };

        let store;

        beforeEach(() => {
            store = storeFactory(initialState);
        });

        test('update state correctly for unsuccessful guess', () => {
            store.dispatch(guessWord(unsuccessfulGuess));

            const newState = store.getState();

            const expectedState = {
                secretWord,
                success: false,
                guessedWords: [
                    ...guessedWords,
                    {
                        guessedWord: unsuccessfulGuess,
                        letterMatchCount: 3
                    }
                ]
            }

            expect(newState).toEqual(expectedState);
        });

        test('update state correctly for successful guess', () => {
            store.dispatch(guessWord(secretWord));

            const newState = store.getState();

            const expectedState = {
                secretWord,
                success: true,
                guessedWords: [
                    ...guessedWords,
                    {
                        guessedWord: secretWord,
                        letterMatchCount: 5
                    }
                ]
            }

            expect(newState).toEqual(expectedState);
        });
    });
});