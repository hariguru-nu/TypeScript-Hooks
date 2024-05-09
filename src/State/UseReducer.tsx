import React, { useReducer } from 'react';

type CounterState = {
    count: number
}

type UpdateAction = {
    type: "increment" | "decrement"
    payload: number
}

type ResetAction = {
    type: "reset"
}

type CounterAction = UpdateAction | ResetAction

const initialState = {
    count: 2
}

function reducer( state: CounterState, action: CounterAction) {
    console.log(state);
    switch (action.type) {
        case "increment":
            return { count: state.count + action.payload}
        case "decrement":
            return { count: state.count - action.payload}
        case "reset":
            return initialState
        default:
            return state;
    }
}

const UseReducer = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: "increment", payload: 10 })}>
        INCREMENT
      </button>
      <button onClick={() => dispatch({ type: "decrement", payload: 8 })}>
        DECREMENT
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </>
  )
}

export default UseReducer
