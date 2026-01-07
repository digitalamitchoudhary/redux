
import {useDispatch} from 'react-redux';
import { setQuery } from '../Redux/Slice/Search';
function SearchBar() {

    const dispatch = useDispatch();

    const [text, settext] = useState('');

    const sumbitHandler = (e) =>{

        e.preventDefault();
        dispatch(setQuery(text));
        settext('');

    }  

  return (
    <div className='flex w-full bg-blue-900 justify-center p-4'>
      <form onClick={(e)=>{sumbitHandler(e)}}>
        <input value={text} onChange={(e)=>{settext}} type="text" placeholder='Search...' className='w-[90%] border outline-none p-3 rounded'/>
        <button className='bg-white rounded text-black py-2 px-5 ml-2'>Search</button>
        </form>
    </div>
  )
}

export default SearchBar
