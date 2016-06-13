import React from 'react'
import { connect } from 'react-redux'
import { incrementCounter } from '../actions'
import { decrementCounter } from '../actions'

let Counter = ( { dispatch, counter } ) => {
  return (
    <div>
      <div>{ counter }</div>
      <button type="button" onClick={ () => {
          dispatch( incrementCounter() )
        }
      }>
        Increment
      </button>
      <button type="button" onClick={ () => {
          dispatch( decrementCounter() )
        }
      }>
        Decrement
      </button>
    </div>
  )
}

function mapStateToProps(state) {
  return state
}
Counter = connect( mapStateToProps )(Counter)

export default Counter
