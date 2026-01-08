import React from 'react'

function ResultCard({item}) {
  return (
    <div>
        <div className="w-[18vw] relative h-80 bg-gray-200 rounded-xl overflow-hidden">
            <a target='_blank' className='h-full' href="/">
            <img className='w-full h-full' src={item} alt="" />
        </a>

        <div id='bottom' className='flex justify-between gap-3 items-center w-full px-4 py-6 absolute bottom-0 text-white'>
                <h2 className='text-lg font-semibold capitalize h-14 overflow-hidden'>tes</h2>
                <button
                    onClick={() => {
                        addToCollection(item)
                    }}
                    className='bg-indigo-600 active:scale-95 text-white rounded px-3 py-1 cursor-pointer font-medium'
                >
                    Save
                </button>
            </div>


        </div>
    </div>
  )
}

export default ResultCard
