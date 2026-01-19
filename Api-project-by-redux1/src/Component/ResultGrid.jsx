import React, { useEffect, useState } from 'react';
import ResultCard from './ResultCard';
import { fetchImages, fetchGIF, fetchVideos } from '../api/mediaApi';
import { setError, setLoading, setResults } from '../Redux/Slice/searchSlice.js';
import { useSelector, useDispatch } from 'react-redux';
import { resetLastAction } from "../Redux/Slice/collectionSlice";
import { toast } from "react-toastify";


function ResultGrid() {
  //  const [firstImage, setFirstImage] = useState("https://placehold.co/600x400")
  const dispatch = useDispatch();
  const  { lastAction, lastItemType } = useSelector(state => state.collection);

  useEffect(() => {
  if (!lastAction || !lastItemType) return;
  const label =
    lastItemType === "photo"
      ? "Image"
      : lastItemType === "video"
      ? "Video"
      : "GIF";
  if (lastAction === "ADDED") {
    toast.success(`${label} added to collection`);
  }

  if (lastAction === "EXISTS") {
      toast.info(`${label} already saved`);
  }

  // 🔑 VERY IMPORTANT
  dispatch(resetLastAction());

}, [lastAction, lastItemType, dispatch]);


  const { query, results, activeTabs, error, loading,cache  } = useSelector(
    (store) => store.search
  );
  useEffect(() => {
    if (!query) return;
    // if (results.length > 0) return; // 🔴 KEY LINE // wrong way ye tab change hone pr kaam nhi karega
     // ✅ STEP 1: CACHE CHECK
  const cachedData = cache[activeTabs]?.[query];
 if (cachedData) {
    dispatch(setResults({
      tab: activeTabs,
      query,
      data: cachedData
    }));
    return; // ❌ API CALL STOP
  }

  // ✅ STEP 2: API CALL ONLY IF CACHE MISS
    const getData = async () => {
      try {
        dispatch(setLoading());
        let data;

        if (activeTabs == 'Images') {
          let response = await fetchImages(query);
          data = response.results.map((item) => ({
            id: item.id,
            type: 'photo',
            title: item.alt_description,
            thumbnail: item.urls.small,
            src: item.urls.full,
            url: item.links.html,
          }));
          //  console.log(response.results[0].urls.small);
          //  setFirstImage(response.results[0].urls.small)
        }
        if (activeTabs == 'Videos') {
          let response = await fetchVideos(query);
          data = response.videos.map((item) => ({
            id: item.id,
            type: 'video',
            title: item.user.name || 'video',
            thumbnail: item.image,
            src: item.video_files[0].link,
            url: item.url,
          }));
        }
        if (activeTabs == 'Gifs') {
          let response = await fetchGIF(query);
          // console.log(response);
          data = response.results.map((item) => ({
            id: item.id,
            type: 'gif',
            title: item.content_description || 'gif',
            thumbnail: item.media_formats.tinygif.url,
            src: item.media_formats.gif.url,
            url: item.url,
          }));
        }
        // dispatch(setResults(data));
           dispatch(setResults({
          tab: activeTabs,
          query,
          data
        }))


        // console.log(data);
      } catch (err) {
        dispatch(setError(err.message));
      }
    };
    getData();
  }, [query, activeTabs]);
 if (error) return <h1>Error</h1>
    if (loading) return <h1>Loading...</h1>
  return (
    <div className='flex justify-between items-center w-full flex-wrap mt-6 gap-4 overflow-auto px-10'>
            {results.map((item, idx) => {
                return <div key={idx}>
                    <ResultCard item={item} />
                </div>
            })}
        </div>
  );
}

export default ResultGrid;
