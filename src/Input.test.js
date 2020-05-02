/** @format */

import React from 'react'
import { shallow, ShallowWrapper } from 'enzyme'

import { findByTestAttr, storeFactory } from '../test/testUtils'
import Input from './Input'

/**
 * Factory function to create a ShallowWrapper for the GuessedWords component
 * @function setup
 * @param {object} initialState - Initial state for this setup
 * @returns {ShallowWrapper}
 */
const setup = (initialState = {}) => {
    const store = storeFactory(initialState)
    const wrapper = shallow(<Input store={store} />)
        .dive()
        .dive() //dive into the higher order component of the shallow wrapper; i.e. use dive() to get child component(Input)
    // console.log(wrapper.debug()) //use wrapper.debug() to see what the wrapper renders to
    return wrapper
}

// use describe here not for the context but test organization

describe('render', () => {
    describe('word has not been guessed', () => {
        let wrapper
        beforeEach(() => {
            const initialState = { success: false }
            wrapper = setup(initialState)
        })
        test('renders component without error', () => {
            const component = findByTestAttr(wrapper, 'component-input')
            expect(component.length).toBe(1)
        })

        test('renders input box', () => {
            const inputBox = findByTestAttr(wrapper, 'input-box')
            expect(inputBox.length).toBe(1)
        })

        test('renders submit button', () => {
            const submitButton = findByTestAttr(wrapper, 'submit-button')
            expect(submitButton.length).toBe(1)
        })
    })

    describe('words has been guessed', () => {
        let wrapper
        beforeEach(() => {
            const initialState = { success: true }
            wrapper = setup(initialState)
        })
        test('render component without error', () => {
            const component = findByTestAttr(wrapper, 'component-input')
            expect(component.length).toBe(1)
        })

        test('does not render input box', () => {
            const inputBox = findByTestAttr(wrapper, 'input-box')
            expect(inputBox.length).toBe(0)
        })

        test('does not render submit button', () => {
            const submitButton = findByTestAttr(wrapper, 'submit-button')
            expect(submitButton.length).toBe(0)
        })
    })
})

describe('update state', () => {})

describe('redux props', () => {
    test('has success piece of state as prop', () => {
        const success = true
        const wrapper = setup({ success })
        // wrapper.instance() is the react component of the wrapper
        // wrapper.instance().props return props as an object
        const successProp = wrapper.instance().props.success
        expect(successProp).toBe(success)
    })

    test('`guessWord` action creator is a function prop', () => {
        const wrapper = setup()
        const guessWordProp = wrapper.instance().props.guessWord
        // check the type
        expect(guessWordProp).toBeInstanceOf(Function)
    })
})
