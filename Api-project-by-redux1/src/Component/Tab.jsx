import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setActiveTabs } from '../Redux/Slice/searchSlice';

function Tab() {
    const tabs=[ 'Images','Videos','Gifs'];

    const dispatch = useDispatch();
    const activeTab = useSelector((state)=>state.search.activeTabs)

  return (
    <div className='flex gap-5 mt-4 '>
       {tabs.map((item,idx)=><button className={` ${item === activeTab ? "bg-green-500" : "bg-red-700"} py-1 px-3 rounded-sm text-[20px] cursor-pointer uppercase` }
          onClick={() => {
                            dispatch(setActiveTabs(item))
                            // console.log(item);
                        }}
       key={idx}>{item}</button>)}
    </div>
  )
}

export default Tab
