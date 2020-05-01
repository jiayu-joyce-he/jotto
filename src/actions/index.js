/** @format */
import { getLetterMatchCount } from '../helpers'

// create an action types object, which will give us feedback if we mistype an action type - instead of not firing anything in our reducer, we will get an error of undefined variable

export const actionTypes = {
    CORRECT_GUESS: 'CORRECT_GUESS',
    GUESS_WORD: 'GUESS_WORD'
}

/**
 * Returns Redux Thunk function that dispatches GUESS_WORD action and (conditionally) CORRECT_GUESS action
 * @function guessWord
 * @param {STRING} guessedWord - Guessed word
 * @returns {function} - Redux Thunk function
 */

export const guessWord = guessedWord => {
    return function(dispatch, getState) {
        const secretWord = getState().secretWord
        const letterMatchCount = getLetterMatchCount(guessedWord, secretWord)

        dispatch({
            type: actionTypes.GUESS_WORD,
            payload: { guessedWord, letterMatchCount }
        })

        if (guessedWord === secretWord) {
            dispatch({
                type: actionTypes.CORRECT_GUESS
            })
        }
    }
}
