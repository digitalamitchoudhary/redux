import React, { useEffect } from 'react'
import ResultCard from './ResultCard'
import { fetchImages,fetchGIF,fetchVideos } from '../api/mediaApi'
 
 
function ResultGrid() {
  return (

          

    <div>
      <ResultCard/>
    </div>
  )
}

export default ResultGrid
