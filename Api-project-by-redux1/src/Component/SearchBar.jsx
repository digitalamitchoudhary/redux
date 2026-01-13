
import {useDispatch} from 'react-redux';
import { setQuery } from '../Redux/Slice/searchSlice.js';
import { useState } from 'react';
function SearchBar() {
    const [text, setText] = useState('');
    const dispatch = useDispatch();
    const sumbitHandler = (e) =>{
        e.preventDefault();
        dispatch(setQuery(text));
        setText('');
     
        

    }  

  return (
    <div >
      <form className='flex w-full  bg-blue-900 justify-center p-4' onSubmit={(e)=>{sumbitHandler(e)}}>
        <input value={text} onChange={(e)=>{setText(e.target.value)}} type="text" placeholder='Search...' className=' w-[90%] border outline-none p-3 rounded'/>
        <button type="submit" className='bg-white rounded outline-none cursor-pointer border-2  text-black py-2 px-5 ml-2'>Search</button>
        </form>
    </div>
  )
}

export default SearchBar
