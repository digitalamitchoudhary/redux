import React from 'react'

function Navbar() {
  return (
    <div className='flex p-1 bg-black   justify-center'>
        <div className='w-[90%] p-4 h-16 flex  items-center justify-between'>
      <div className="text-white text-[25px]">Media Search</div>

      <div className="btn flex gap-4">
        <button className='bg-white rounded text-black py-2 px-5'>Search</button>
        <button className='bg-white rounded text-black py-2 px-5'>Collection</button>
      </div>
        </div>
    </div>
  )
}

export default Navbar
