import React, { useEffect ,useState} from 'react'
import ResultCard from './ResultCard'
import { fetchImages,fetchGIF,fetchVideos } from '../api/mediaApi'
 import { setError,setLoading,setResults } from '../Redux/Slice/Search'
 import { useSelector ,useDispatch} from 'react-redux'
function ResultGrid() {

//  const [firstImage, setFirstImage] = useState("https://placehold.co/600x400")
   const dispatch = useDispatch();
 
   const { query,results,activeTabs,error,loading } = useSelector((store) => store.search);
   useEffect(() => {
    if (!query) return; 
     const getData = async() => {
         let data;

    if(activeTabs=="Images"){ 
     let response = await fetchImages(query)
     data = response.results;
    //  console.log(response.results[0].urls.small);
    //  setFirstImage(response.results[0].urls.small)
    }if(activeTabs=="Videos"){ 
    data = await fetchVideos(query)

     }if(activeTabs=="Gifs"){ 
     data = await fetchGIF(query)
     }

      console.log(data);
 }
  getData()
},[query, activeTabs]);
   
  return (

       


    <div>
      <ResultCard />
         
    </div>
  )
}

export default ResultGrid
