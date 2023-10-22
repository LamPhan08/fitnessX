import React from 'react'
import {View, Text} from 'react-native'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { configureStore } from '@reduxjs/toolkit'

const ChooseGoal = ({route}: any) => {
  // console.log(route.params)
  return (
    <View>  
      <Text>ChooseGoal</Text>
    </View> 
  )
}

export default ChooseGoal

//state
let appState = {number: 1, errorMsg: ''}

//action
const add = {
  type: 'ADD',
  value: 1
}

const sub = {
  type: 'SUB',
  value: 1
}

//reducer
const numberReducer = (state = appState, action: {type: String, value: number}) => {
  switch (action.type) {
    case 'ADD': {
      return {
        ...state,
        number: state.number + action.value
      }
    }

    case 'SUB': {
      return {
        ...state,
        number: state.number - action.value
      }
    }

    default: return state
  }
}

const errorReducer = (state = appState, action: any) => {
  switch (action.type) {
    case 'LESS_THAN_ZERO': {
      return {
        errorMsg: 'Number can not be less than 0!'
      }
    }

    default: return state
  }
}

const rootReducer = combineReducers({numberReducer, errorReducer})

const logger = (store: any) => (next: any) => (action: any) => {

  next(action)
  // console.log('State updated!', store.getState())

}

const checkIsZero = (store: any) => (next: any) => (action: any) => {
  const currentNumber = store.getState().numberReducer.number

  if (currentNumber === 0) {
    next({type: 'LESS_THAN_ZERO'})
    console.log('State updated!', store.getState())

  }
  else {
    next(action)
    console.log('State updated!', store.getState())
  }

}

//store
const store = createStore(rootReducer, applyMiddleware(logger, checkIsZero))


// store.subscribe(() => {
//   console.log('State updated!', store.getState())
// })

// store.dispatch({type: 'LESS_THAN_ZERO'})
// store.dispatch({type: 'LESS_THAN_ZERO'})
// store.dispatch(add)
// store.dispatch(add)
// store.dispatch(add)
// store.dispatch(add)

store.dispatch(add)
store.dispatch(sub)
store.dispatch(sub)
store.dispatch(sub)
store.dispatch(sub);
// console.log(appState)


