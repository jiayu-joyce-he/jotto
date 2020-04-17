/** @format */

import { correctGuess, actionTypes } from './'

describe('correctGuess', () => {
    test('returns an action with type `CORRECT_GUESS`', () => {
        const action = correctGuess()
        // can not use toBe when comparing mutable data type; only use for immutable like numbers and strings; need to use toEqual for deep equal
        expect(action).toEqual({ type: actionTypes.CORRECT_GUESS })
    })
})
