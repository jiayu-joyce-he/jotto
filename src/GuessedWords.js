/** @format */

import React from 'react'
import PropTypes from 'prop-types'

const GuessedWords = props => {
    return (
        <div data-test='componenet-guessed-words'>
            <p data-test='guess-instructions'>instructions</p>
        </div>
    )
}

GuessedWords.propTypes = {
    //make sure this .propTypes if camercase #common-mistake
    guessedWords: PropTypes.arrayOf(
        PropTypes.shape({
            guessedWord: PropTypes.string.isRequired,
            letterMatchCount: PropTypes.number.isRequired
        })
    ).isRequired
}
export default GuessedWords
