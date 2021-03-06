/** @format */

import React, { Component } from 'react'
import { connect } from 'react-redux'

import { guessWord } from './actions'

class Input extends Component {
    render() {
        const contents = this.props.success ? null : (
            <form className='form-inline'>
                <input
                    data-test='input-box'
                    className='mb-2 mx-sm-3'
                    type='text'
                    placeholde='enter guess'
                ></input>
                <button
                    data-test='submit-button'
                    className='btn btn-primary mb-2'
                    type='submit'
                >
                    Submit
                </button>
            </form>
        )
        return <div data-test='component-input'>{contents}</div>
    }
}

const mapStateToProps = ({ success }) => {
    return { success }
}

// deconstruct  { guessWord } from mapDispatchToProps
export default connect(mapStateToProps, { guessWord })(Input)
