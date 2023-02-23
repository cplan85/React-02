import {useReducer} from 'react';
import * as counterActions from './actions/actions';
import { CounterState } from './interfaces/interfaces';
import { counterReducer } from './state/counterReducer';


const INITIAL_STATE: CounterState = {
  counter: 0,
  previous: 0,
  changes: 0
}
//pure function resolves everything inside the function, and doesn't interact with the outside world.

export const CounterReducer = () => {
  const {doReset, doIncreaseBy} = counterActions;
  
   const [counterState, dispatch] = useReducer(counterReducer, INITIAL_STATE)

    const handleReset = () => {
        dispatch( doReset())
       }

       const increaseBy = (value: number) => (event:any) =>{
        dispatch(doIncreaseBy(value))
       }
  return (
    <>
    <h1>Counter Reducer Segmented</h1>
    <pre>
      {JSON.stringify(counterState, null, 2)}
    </pre>
    <button onClick={handleReset}>
        Reset 
    </button>

    <button onClick={increaseBy(5)}>
        + 5 
    </button>

    <button onClick={increaseBy(1)}>
        + 1 
    </button>
    </>
  )
}
