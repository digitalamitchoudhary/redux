import { useDispatch, useSelector } from 'react-redux';
import { decrement, decrementByAmount, increment, incrementByAmount } from './redux/feature/counterSlice';
import {useState } from 'react';

const App = () => {
  const dispatch = useDispatch();
  const [num,setNum]=useState(5);
   const count = useSelector((state) => state.counter.value);
  return (
    <div>
      <h1>{count}</h1>
      <button 
        onClick={()=>{
          dispatch(increment())
        }}
      >Increment</button>
       <button onClick={()=>{
          dispatch(decrement())
        }}>Decrement</button>

        <input type="number" 
        value={num}
        onChange={(e)=>setNum(e.target.value)}
        />
        <button onClick={()=>dispatch(incrementByAmount(Number(num)))}>incrementByAmount</button>
                <button onClick={()=>dispatch(decrementByAmount(Number(num)))}>decrementByAmount</button>

    </div>
  )
}

export default App
