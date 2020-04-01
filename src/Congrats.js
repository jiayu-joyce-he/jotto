/** @format */

import React from 'react'
import PropTypes from 'prop-types'

/**
 * Functional react component for congratulatory message.
 * @function
 * @param {object} props - React props
 * @returns {JSX.Element} - Rendered component (or null if 'success' props)
 */

const Congrats = props => {
    return (
        <div data-test='component-congrats'>
            {props.success && (
                <span data-test='congrats-message'>
                    Congratulations! You've guessed the word!
                </span>
            )}
        </div>
    )
}

Congrats.propTypes = {
    success: PropTypes.bool.isRequired
}

export default Congrats
