import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount, changeName, incrementAsync, selectCount } from './counterSlice'
import { openModal, closeModal } from '../modal/modalSlice'

export function Counter() {
  const count = useSelector(selectCount)
  // const count = useSelector((state) => state.counter.value)
  const countPlusTwo = useSelector(state => state.counter.value + 2)
  const name = useSelector((state) => state.counter.name)
  const dispatch = useDispatch()
  const { isOpen } = useSelector((state) => state.modal);

  const test = ()=>{
    dispatch(changeName("özcan"));
    if(isOpen){
 dispatch(closeModal());  
    }else{dispatch(openModal());}
}
  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(incrementByAmount(5))}
        >
          incrementByAmount
        </button>
        <button
          aria-label="Decrement value"
          onClick={() => 
          test()
          }
        >
          changeName
        </button>
        {name}
      </div>
    </div>
  )
 
}