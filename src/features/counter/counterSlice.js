import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
  name:"İstanbul"
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
      increment: (state) => {
        // Redux Toolkit allows us to write "mutating" logic in reducers. It
        // doesn't actually mutate the state because it uses the Immer library,
        // which detects changes to a "draft state" and produces a brand new
        // immutable state based off those changes
        state.value += 1
      },
      decrement: (state) => {
        state.value -= 1
      },
      incrementByAmount: (state, action) => {
        state.value += action.payload
      },
      changeName: (state, action) => {
        state.name += action.payload
      },
    },
  })
  
// The function below is called a thunk and allows us to perform async logic.
// It can be dispatched like a regular action: `dispatch(incrementAsync(10))`.
// This will call the thunk with the `dispatch` function as the first argument.
// Async code can then be executed and other actions can be dispatched
export const incrementAsync = amount => dispatch => {
  setTimeout(() => {
    dispatch(incrementByAmount(amount))
  }, 1000)
}

export const selectCount = state => state.counter.value

  // Action creators are generated for each case reducer function
  export const { increment, decrement, incrementByAmount, changeName } = counterSlice.actions
  
  export default counterSlice.reducer