/** @format */

// create an action types object, which will give us feedback if we mistype an action type - instead of not firing anything in our reducer, we will get an error of undefined variable

export const actionTypes = {
    CORRECT_GUESS: 'CORRECT_GUESS',
}

/**
 * @function correctGuess
 * @returns {object} - Action object with type 'CORRECT_GUESS'; action creator
 */

export function correctGuess() {
    return { type: actionTypes.CORRECT_GUESS }
}
