
function SearchBar() {
  return (
    <div className='flex w-full bg-blue-900 justify-center p-4'>
        <input type="text" placeholder='Search...' className='w-[90%] border outline-none p-3 rounded'/>
        <button className='bg-white rounded text-black py-2 px-5 ml-2'>Search</button>
    </div>
  )
}

export default SearchBar
