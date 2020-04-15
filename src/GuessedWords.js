/** @format */

import React from 'react'
import PropTypes from 'prop-types'

const GuessedWords = (props) => {
    let contents
    if (props.guessedWords.length === 0) {
        contents = (
            <span data-test='guess-instructions'>
                Try to guess the secret word!
            </span>
        )
    } else {
        const guessedWordsRows = props.guessedWords.map((word, index) => (
            <tr key={index} data-test='guessed-word'>
                <td>{word.guessedWords}</td>
                <td>{word.letterMatchCount}</td>
            </tr>
        ))
        contents = (
            <div data-test='guessed-words'>
                <h3>Guessed words</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Guess</th>
                            <th>Matching Letters</th>
                        </tr>
                    </thead>
                    <tbody>{guessedWordsRows}</tbody>
                </table>
            </div>
        )
    }
    return <div data-test='component-guessed-words'>{contents}</div>
}

// We are expecting an array of objects with particular shape;
GuessedWords.propTypes = {
    //make sure this .propTypes if camercase #common-mistake
    guessedWords: PropTypes.arrayOf(
        PropTypes.shape({
            guessedWord: PropTypes.string.isRequired,
            letterMatchCount: PropTypes.number.isRequired,
        })
    ).isRequired,
}
export default GuessedWords
