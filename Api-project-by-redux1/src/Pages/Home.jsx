import React from 'react'
import Navbar from '../Component/Navbar'
import SearchBar from '../Component/SearchBar'
import Tab from '../Component/tab'
import ResultGrid from '../Component/ResultGrid'

function Home() {
  return (
    <div>
        <Navbar/>
        <SearchBar/>
        <div > 
            <Tab/> 
            <ResultGrid/>
      </div>
     
    </div>
  )
}

export default Home
