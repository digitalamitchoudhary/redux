import React from 'react'

function Tab() {
    const tabs=[ 'Images','Videos','Gif'];
  return (
    <div className='flex gap-5 mt-4 '>
       {tabs.map((item,idx)=><button className='bg-green-700 py-1 px-3 rounded-sm text-[20px] cursor-pointer uppercase' key={idx}>{item}</button>)}
    </div>
  )
}

export default Tab
