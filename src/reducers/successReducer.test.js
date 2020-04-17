/** @format */

import { actionTypes } from '../actions'
import successReducer from './successReducer'

test('returns default initial state of `false` when no action is passed', () => {
    // run the reducer with no state and no action; give undefined as the initial state and an empty action
    // NOTE: whenever your reducer do a switch on the action type, which almost all reducers do, you need to make sure your test pass in an object for the action.
    const newState = successReducer(undefined, {})
    expect(newState).toBe(false)
})

test('returns state of true upon receiving an action of type `CORRECT_GUESS`', () => {
    const newState = successReducer(undefined, {
        type: actionTypes.CORRECT_GUESS,
    })
    expect(newState).toBe(true)
})
