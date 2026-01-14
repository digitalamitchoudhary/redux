import React from 'react'
import Navbar from '../Component/Navbar'
import SearchBar from '../Component/SearchBar'
import Tab from '../Component/Tab'
import ResultGrid from '../Component/ResultGrid'
import { useSelector } from 'react-redux'

function Home() {

    const {query}=useSelector((store)=>store.search)
  return (
    <div>
       
        <SearchBar/>            {query != '' ?  <div  className='ml-15 mt-5'> 
            <Tab/> 
            <ResultGrid/>
      </div> : ''}

       
     
    </div>
  )
}

export default Home
